import React, { useState } from 'react';
import { Search, Sparkles, X, ArrowRight, Loader, Brain, Globe, Terminal, ExternalLink } from 'lucide-react';
import { GoogleGenAI, Type, SchemaParams } from "@google/genai";
import { Tool, ResearchResult } from '../types';

interface SmartSearchProps {
  tools: Tool[];
  context: 'GOOGLE' | 'DESIGN' | 'BUILD';
  onSearch: (query: string) => void;
  onResearchResults: (results: ResearchResult | null) => void;
  className?: string;
}

export const SmartSearch: React.FC<SmartSearchProps> = ({ 
  tools, 
  context, 
  onSearch, 
  onResearchResults,
  className = ""
}) => {
  const [mode, setMode] = useState<'SEARCH' | 'RESEARCH'>('SEARCH');
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string, type: 'error' | 'info' } | null>(null);

  // Clear query and results when switching modes
  const toggleMode = (newMode: 'SEARCH' | 'RESEARCH') => {
    if (mode === newMode) return;
    setMode(newMode);
    setQuery('');
    onSearch('');
    onResearchResults(null);
    setFeedbackMsg(null);
  };

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (mode === 'SEARCH') {
        // Standard Search handled by onChange mostly, but ensures focus
      } else {
        // AI Research
        await performResearch();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (mode === 'SEARCH') {
      onSearch(e.target.value);
    }
  };

  const performResearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setFeedbackMsg(null);
    onResearchResults(null);

    // Fallback logic for missing API key or errors
    const launchExternalGemini = () => {
        // Best effort to copy prompt to clipboard
        navigator.clipboard.writeText(query).then(() => {
            setFeedbackMsg({ text: "Query copied! Opening Gemini...", type: 'info' });
        }).catch(() => {
            setFeedbackMsg({ text: "Opening Gemini...", type: 'info' });
        });
        
        // Open external site
        setTimeout(() => {
             window.open('https://gemini.google.com/app', '_blank');
             setIsLoading(false);
        }, 800);
    };

    try {
      const apiKey = process.env.API_KEY;
      
      // 1. Check if API Key exists
      if (!apiKey || apiKey.trim() === '') {
         console.warn("API Key missing. Fallback to external.");
         launchExternalGemini();
         return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Serialize tools for the model context
      const toolsContext = tools.map(t => `- ${t.name} (ID: ${t.id}): ${t.description} [Category: ${t.category}, Tags: ${t.tags.join(', ')}]`).join('\n');

      let systemInstruction = "";
      
      if (context === 'GOOGLE') {
        systemInstruction = `You are a Google Developer Expert and Senior Cloud Architect. 
        The user wants to build something or solve a problem using the Google ecosystem. 
        Your goal is to recommend the specific tools from the provided list that are best suited for their needs.
        
        Analyze the user's request: "${query}"
        
        Available Tools Library:
        ${toolsContext}
        
        Rules:
        1. Only recommend tools present in the library.
        2. Provide a concise, encouraging piece of advice (max 2 sentences) explaining how these tools connect to solve the user's problem.
        3. Return the exact IDs of the recommended tools.
        `;
      } else if (context === 'DESIGN') {
        systemInstruction = `You are a Creative Technologist and AI Design Systems Expert.
        The user is a designer or creator looking to generate assets, build UI, or create art.
        Your goal is to recommend the best AI-enabled design tools from the provided list for their specific workflow.

        Analyze the user's request: "${query}"

        Available Design Tools Library:
        ${toolsContext}

        Rules:
        1. Only recommend tools present in the library.
        2. Provide a professional, insight-driven piece of advice (max 2 sentences) on why these specific tools fit their creative goal.
        3. Return the exact IDs of the recommended tools.
        `;
      } else {
        systemInstruction = `You are a Senior DevOps Engineer and AI Architect.
        The user is a developer looking to build, deploy, or optimize AI-driven applications.
        Your goal is to recommend the best engineering tools, IDEs, and infrastructure from the provided list.

        Analyze the user's request: "${query}"

        Available Build Tools Library:
        ${toolsContext}

        Rules:
        1. Only recommend tools present in the library.
        2. Provide a technical, architectural piece of advice (max 2 sentences) on how these tools fit into a modern AI stack.
        3. Return the exact IDs of the recommended tools.
        `;
      }

      const schema: SchemaParams = {
        type: Type.OBJECT,
        properties: {
          advice: { 
            type: Type.STRING, 
            description: "A helpful, professional paragraph explaining the solution architecture or creative workflow." 
          },
          toolIds: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING }, 
            description: "Array of exact tool IDs that match the recommendation." 
          }
        },
        required: ["advice", "toolIds"]
      };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: schema,
        },
        contents: [
            { role: 'user', parts: [{ text: query }] }
        ]
      });

      const jsonText = response.text;
      if (jsonText) {
        const result = JSON.parse(jsonText) as ResearchResult;
        onResearchResults(result);
        setIsLoading(false);
      } else {
        throw new Error("No response from AI");
      }

    } catch (err) {
      console.error("Research failed:", err);
      // On any error (network, quota, auth), fallback gracefully
      launchExternalGemini();
    }
  };

  const getPlaceholder = () => {
    if (mode === 'SEARCH') return "Search ecosystem...";
    switch (context) {
        case 'GOOGLE': return "Describe what you want to build...";
        case 'DESIGN': return "Describe your creative goal...";
        case 'BUILD': return "Describe your stack or technical needs...";
        default: return "Ask the AI Advisor...";
    }
  };

  const getResearchIcon = () => {
      if (mode !== 'RESEARCH') return <Search className="text-gray-500" size={24} />;
      if (isLoading) return <Loader className="animate-spin text-google-blue" size={24} />;
      
      switch (context) {
          case 'BUILD': return <Terminal className="text-emerald-400 animate-pulse" size={24} />;
          default: return <Brain className={`${context === 'DESIGN' ? 'text-pink-400' : 'text-purple-400'} animate-pulse`} size={24} />;
      }
  };

  const getInputStyles = () => {
      if (mode !== 'RESEARCH') return 'bg-white/5 border-white/10 shadow-xl hover:bg-white/10 hover:border-white/20';
      
      switch (context) {
          case 'DESIGN': return 'bg-gray-900/90 border-pink-500/50 shadow-2xl shadow-pink-900/20 ring-1 ring-pink-500/30';
          case 'BUILD': return 'bg-gray-900/90 border-emerald-500/50 shadow-2xl shadow-emerald-900/20 ring-1 ring-emerald-500/30';
          default: return 'bg-gray-900/90 border-purple-500/50 shadow-2xl shadow-purple-900/20 ring-1 ring-purple-500/30';
      }
  };

  const getButtonStyles = () => {
      if (mode !== 'RESEARCH') return 'bg-white/10 text-gray-400 hover:bg-white/20';
      
      switch (context) {
          case 'DESIGN': return 'bg-pink-600 text-white hover:bg-pink-500 shadow-lg shadow-pink-600/30';
          case 'BUILD': return 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/30';
          default: return 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-600/30';
      }
  };

  const getToggleActiveStyles = () => {
       switch (context) {
          case 'DESIGN': return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-pink-500/20 scale-105';
          case 'BUILD': return 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-500/20 scale-105';
          default: return 'bg-gradient-to-r from-google-blue to-purple-600 text-white shadow-lg shadow-purple-500/20 scale-105';
      }
  };

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      {/* Search Container */}
      <div className={`relative group transition-all duration-300 ${mode === 'RESEARCH' ? 'scale-[1.02]' : ''}`}>
        
        {/* Centered Toggle Switch */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center p-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-20">
            <button 
                onClick={() => toggleMode('SEARCH')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    mode === 'SEARCH' 
                    ? 'bg-white text-black shadow-lg scale-105' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
            >
                <Search size={12} />
                Find
            </button>
            <button 
                onClick={() => toggleMode('RESEARCH')}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    mode === 'RESEARCH' 
                    ? getToggleActiveStyles()
                    : 'text-gray-500 hover:text-gray-300'
                }`}
            >
                <Sparkles size={12} />
                Research
            </button>
        </div>

        {/* Input Field */}
        <div className={`relative flex items-center overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 ${getInputStyles()}`}>
            
            <div className="pl-6 text-gray-400">
                {getResearchIcon()}
            </div>

            <input
                type="text"
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={`w-full bg-transparent border-none px-4 py-6 text-lg focus:outline-none focus:ring-0 transition-colors placeholder-gray-500/70 font-display tracking-wide ${
                    mode === 'RESEARCH' ? 'text-white' : 'text-gray-200'
                }`}
                placeholder={getPlaceholder()}
            />

            {/* Action Button */}
            <div className="pr-4">
                {query && (
                    <button 
                        onClick={mode === 'RESEARCH' ? performResearch : () => {setQuery(''); onSearch('');}}
                        className={`p-2 rounded-xl transition-all duration-300 ${getButtonStyles()}`}
                    >
                        {mode === 'RESEARCH' ? <ArrowRight size={20} /> : <X size={20} />}
                    </button>
                )}
            </div>
        </div>

        {/* Feedback / Error Message */}
        {feedbackMsg && (
            <div className={`absolute top-full mt-3 w-full text-center text-sm font-medium animate-fade-in py-2 rounded-lg border flex items-center justify-center gap-2 ${
                feedbackMsg.type === 'error' 
                ? 'text-red-400 bg-red-900/20 border-red-500/20' 
                : 'text-blue-300 bg-blue-900/30 border-blue-500/30'
            }`}>
                {feedbackMsg.type === 'info' && <ExternalLink size={14} />}
                {feedbackMsg.text}
            </div>
        )}

      </div>
    </div>
  );
};