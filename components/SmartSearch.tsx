import React, { useState } from 'react';
import { Search, Sparkles, X, ArrowRight, Loader, Brain, Terminal, ExternalLink, Zap, Layers, Rocket } from 'lucide-react';
import { GoogleGenAI, Type, SchemaParams } from "@google/genai";
import { Tool, ResearchResult } from '../types';

interface SmartSearchProps {
  tools: Tool[];
  context: 'GOOGLE' | 'DESIGN' | 'BUILD';
  onSearch: (query: string) => void;
  onResearchResults: (results: ResearchResult | null) => void;
  onSubmit?: () => void;
  className?: string;
  compact?: boolean;
}

export const SmartSearch: React.FC<SmartSearchProps> = ({ 
  tools, 
  context, 
  onSearch, 
  onResearchResults,
  onSubmit,
  className = "",
  compact = false
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
        onSubmit?.();
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

    const launchExternalGemini = () => {
        const win = window.open('https://gemini.google.com/app', '_blank');
        navigator.clipboard.writeText(query).then(() => {
            setFeedbackMsg({ text: "Query copied! Opening Gemini...", type: 'info' });
        }).catch(() => {
            setFeedbackMsg({ text: "Opening Gemini...", type: 'info' });
        });
        setIsLoading(false);
        if (!win) {
             setFeedbackMsg({ text: "Popup blocked.", type: 'error' });
        }
    };

    try {
      let apiKey = "";
      if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
        apiKey = process.env.API_KEY;
      }
      
      if (!apiKey || apiKey.trim() === '') {
         console.warn("API Key missing. Fallback to external.");
         launchExternalGemini();
         return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const toolsContext = tools.map(t => `- ${t.name} (ID: ${t.id}): ${t.description} [Category: ${t.category}, Tags: ${t.tags.join(', ')}]`).join('\n');

      let systemInstruction = "";
      let schema: SchemaParams;

      if (context === 'GOOGLE') {
        systemInstruction = `You are a Google Ecosystem Architect. Recommend strategies (ONESHOT, BESPOKE, FULLSTACK) for: "${query}". Available Tools: ${toolsContext}`;
        schema = {
            type: Type.OBJECT,
            properties: {
              advice: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        type: { type: Type.STRING, enum: ['ONESHOT', 'BESPOKE', 'FULLSTACK'] },
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                        toolIds: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ['type', 'title', 'description', 'toolIds']
                }
              },
              toolIds: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["advice", "options", "toolIds"]
        };
      } else {
        const role = context === 'DESIGN' ? "Creative Technologist" : "Senior DevOps Engineer";
        systemInstruction = `You are a ${role}. Recommend tools for: "${query}". Available Tools: ${toolsContext}.`;
        schema = {
            type: Type.OBJECT,
            properties: {
              advice: { type: Type.STRING },
              toolIds: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["advice", "toolIds"]
        };
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        config: { systemInstruction, responseMimeType: "application/json", responseSchema: schema },
        contents: [{ role: 'user', parts: [{ text: query }] }]
      });

      const jsonText = response.text;
      if (jsonText) {
        const result = JSON.parse(jsonText) as ResearchResult;
        onResearchResults(result);
        setIsLoading(false);
      } else {
        throw new Error("No response");
      }

    } catch (err) {
      console.error("Research failed:", err);
      launchExternalGemini();
    }
  };

  const getPlaceholder = () => {
    if (mode === 'SEARCH') return compact ? "Search..." : "Search ecosystem...";
    return compact ? "Ask AI..." : "Ask the AI Advisor...";
  };

  const getResearchIcon = () => {
      if (mode !== 'RESEARCH') return <Search className="text-gray-500" size={compact ? 16 : 24} />;
      if (isLoading) return <Loader className="animate-spin text-google-blue" size={compact ? 16 : 24} />;
      return <Brain className={`${context === 'DESIGN' ? 'text-pink-400' : 'text-purple-400'} animate-pulse`} size={compact ? 16 : 24} />;
  };

  const containerStyles = compact 
    ? 'bg-white/5 border-white/10 h-10' 
    : 'bg-white/5 border-white/10 shadow-xl h-16';

  const inputStyles = compact
    ? 'text-sm px-3 py-2'
    : 'text-lg px-4 py-6';

  return (
    <div className={`w-full ${className}`}>
      <div className={`relative group transition-all duration-300`}>
        
        {/* Compact Toggle (Inside or Hidden) */}
        {!compact && (
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center p-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl z-20">
                <button onClick={() => toggleMode('SEARCH')} className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all ${mode === 'SEARCH' ? 'bg-white text-black' : 'text-gray-500'}`}>
                    <Search size={12} /> Find
                </button>
                <button onClick={() => toggleMode('RESEARCH')} className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all ${mode === 'RESEARCH' ? 'bg-white text-black' : 'text-gray-500'}`}>
                    <Sparkles size={12} /> Research
                </button>
            </div>
        )}

        {/* Input Field */}
        <div className={`relative flex items-center overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-500 ${containerStyles} ${mode === 'RESEARCH' && !compact ? 'border-purple-500/50' : ''}`}>
            <div className={`${compact ? 'pl-3' : 'pl-6'} text-gray-400 cursor-pointer`} onClick={() => compact && toggleMode(mode === 'SEARCH' ? 'RESEARCH' : 'SEARCH')}>
                {getResearchIcon()}
            </div>

            <input
                type="text"
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className={`w-full bg-transparent border-none focus:outline-none focus:ring-0 transition-colors placeholder-gray-500/70 font-display tracking-wide ${inputStyles} ${mode === 'RESEARCH' ? 'text-white' : 'text-gray-200'}`}
                placeholder={getPlaceholder()}
            />

            <div className="pr-2">
                {query && (
                    <button 
                        onClick={mode === 'RESEARCH' ? performResearch : () => {setQuery(''); onSearch('');}}
                        className={`p-1.5 rounded-lg transition-all duration-300 hover:bg-white/10 text-gray-400`}
                    >
                        {mode === 'RESEARCH' ? <ArrowRight size={compact ? 14 : 20} /> : <X size={compact ? 14 : 20} />}
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};