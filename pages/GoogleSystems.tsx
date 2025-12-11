import React, { useState, useMemo, useEffect } from 'react';
import { toolsData } from '../data/tools';
import { ToolCategory, ResearchResult, ResearchStrategyType } from '../types';
import { ToolCard } from '../components/ToolCard';
import { DynamicIcon } from '../components/Icons';
import { Search, Brain, Zap, Layers, Rocket, CheckCircle } from 'lucide-react';

interface GoogleSystemsProps {
  onNavigate: (page: any) => void;
  onLearn?: (id: string) => void;
  favorites?: string[];
  toggleFavorite?: (id: string) => void;
  externalSearchQuery?: string;
  externalResearchResult?: ResearchResult | null;
}

export const GoogleSystems: React.FC<GoogleSystemsProps> = ({ 
    onLearn, 
    favorites = [], 
    toggleFavorite,
    externalSearchQuery = '',
    externalResearchResult = null
}) => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>(ToolCategory.ALL);
  const [activeStrategy, setActiveStrategy] = useState<ResearchStrategyType | null>(null);

  useEffect(() => {
    if (externalResearchResult?.options) {
        setActiveStrategy('BESPOKE');
    }
  }, [externalResearchResult]);

  const filteredTools = useMemo(() => {
    let sourceData = toolsData;
    
    // 1. AI Research
    if (externalResearchResult) {
        if (externalResearchResult.options && activeStrategy) {
            const strategy = externalResearchResult.options.find(o => o.type === activeStrategy);
            return toolsData.filter(t => strategy?.toolIds.includes(t.id));
        }
        return toolsData.filter(t => externalResearchResult.toolIds.includes(t.id));
    }

    // 2. Search Query
    if (externalSearchQuery) {
        const searchLower = externalSearchQuery.toLowerCase();
        return sourceData.filter((tool) => 
            tool.name.toLowerCase().includes(searchLower) || 
            tool.description.toLowerCase().includes(searchLower) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    } 
    
    // 3. Category Filter
    if (activeCategory === ToolCategory.ALL) {
        return toolsData.filter(t => (t.category !== ToolCategory.WORKSPACE || t.featured) || favorites.includes(t.id));
    } else {
        return toolsData.filter(t => t.category === activeCategory);
    }
  }, [activeCategory, externalSearchQuery, externalResearchResult, activeStrategy, favorites]);

  const categories = Object.values(ToolCategory).filter(
    c => c !== ToolCategory.ALL && 
         c !== ToolCategory.GENERATIVE_UI && 
         c !== ToolCategory.IMAGE_GENERATION &&
         c !== ToolCategory.VIDEO_FX && 
         c !== ToolCategory.VECTOR_3D &&
         c !== ToolCategory.DESIGN_TOOL &&
         !c.includes('IDE') && !c.includes('LLM') && !c.includes('Backend')
  );

  const showFeaturedSection = activeCategory === ToolCategory.ALL && !externalSearchQuery && !externalResearchResult;
  const featuredTools = useMemo(() => toolsData.filter(t => t.featured), []);

  const StrategyCard = ({ type, icon: Icon, colorClass, borderClass, bgClass }: any) => {
    const option = externalResearchResult?.options?.find(o => o.type === type);
    const isActive = activeStrategy === type;
    if (!option) return null;
    return (
        <button 
            onClick={() => setActiveStrategy(type)}
            className={`flex-1 text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${isActive ? `${bgClass} ${borderClass} shadow-xl scale-[1.02]` : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-70 hover:opacity-100'}`}
        >
            <div className="flex justify-between items-start mb-3">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-black/20 text-white' : 'bg-white/10 text-gray-400'}`}>
                    <Icon size={20} />
                </div>
                {isActive && <CheckCircle className="text-white" size={20} />}
            </div>
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${isActive ? 'text-white' : 'text-gray-300'}`}>{option.title}</h4>
            <p className={`text-xs leading-relaxed ${isActive ? 'text-gray-100' : 'text-gray-500'}`}>{option.description}</p>
        </button>
    );
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-google-blue/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-google-red/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-google-yellow/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        
        {/* Strategy Grid */}
        {externalResearchResult && externalResearchResult.options && (
            <div className="mb-12 animate-fade-in mt-8">
                <h3 className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">Select Your Strategy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <StrategyCard type="ONESHOT" icon={Zap} bgClass="bg-gradient-to-br from-purple-600 to-indigo-600" borderClass="border-purple-400" />
                    <StrategyCard type="BESPOKE" icon={Layers} bgClass="bg-gradient-to-br from-blue-600 to-cyan-600" borderClass="border-blue-400" />
                    <StrategyCard type="FULLSTACK" icon={Rocket} bgClass="bg-gradient-to-br from-emerald-600 to-teal-600" borderClass="border-emerald-400" />
                </div>
            </div>
        )}

        {/* Fallback Advisor Message */}
        {externalResearchResult && !externalResearchResult.options && (
             <div className="mb-12 animate-fade-in mt-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 flex gap-4 items-start shadow-xl">
                    <div className="p-3 bg-purple-500/20 rounded-full shrink-0"><Brain className="text-purple-300" size={24} /></div>
                    <div>
                        <h4 className="text-purple-200 font-bold mb-1 uppercase tracking-wider text-xs">AI Advisor Recommendation</h4>
                        <p className="text-gray-200 text-lg leading-relaxed">{externalResearchResult.advice}</p>
                    </div>
                </div>
            </div>
        )}

        {/* Category Filter Pills (Hidden during Research) */}
        {!externalResearchResult && !externalSearchQuery && (
            <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in mt-4">
            <button onClick={() => setActiveCategory(ToolCategory.ALL)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${activeCategory === ToolCategory.ALL ? 'bg-white text-black border-white shadow-lg scale-105' : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10'}`}>All</button>
            {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${activeCategory === cat ? 'bg-white text-black border-white shadow-lg scale-105' : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10'}`}>{cat}</button>
            ))}
            </div>
        )}

        {/* Featured Section */}
        {showFeaturedSection && (
          <div className="mb-16 animate-fade-in">
            {/* New Icon Box Style for Google Page */}
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <div className="p-2 bg-google-yellow/10 rounded-lg text-google-yellow">
                    <Zap size={24} fill="currentColor" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase">THE OTHER GOOGLE TOOLS</h3>
                    <p className="text-sm text-gray-500">Bleeding Edge & Hidden Gems</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredTools.map((tool) => (
                <div key={`featured-${tool.id}`} className="md:col-span-1">
                  <ToolCard tool={tool} onLearn={onLearn} isFavorite={favorites.includes(tool.id)} onToggleFavorite={toggleFavorite} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Browse Grid */}
        <div className="animate-fade-in">
          {filteredTools.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-block p-4 rounded-full bg-white/5 mb-4"><Search size={48} className="text-gray-600" /></div>
              <h3 className="text-xl text-gray-300 font-medium">No tools found</h3>
              <p className="text-gray-500">{externalResearchResult ? "Select a strategy above." : "Try adjusting your search query."}</p>
            </div>
          ) : (
            <>
              {showFeaturedSection && <div className="h-px bg-white/10 w-full mb-10"></div>}
              {!showFeaturedSection && (
                <div className="flex items-center gap-2 mb-6 text-gray-300">
                    {externalResearchResult ? <Brain className="text-purple-400" size={20} /> : <DynamicIcon name="LayoutGrid" size={20} />}
                    <h3 className="text-lg font-bold tracking-wider uppercase">
                        {externalResearchResult ? (activeStrategy ? `${activeStrategy} Stack` : 'Recommended Tools') : (activeCategory === ToolCategory.ALL ? 'All Resources' : activeCategory)}
                    </h3>
                    <span className="ml-auto text-sm text-gray-500 bg-white/5 px-2 py-1 rounded">{filteredTools.length}</span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.filter(t => externalSearchQuery || externalResearchResult ? true : (!showFeaturedSection || !t.featured)).map((tool) => (
                    <ToolCard key={tool.id} tool={tool} onLearn={onLearn} isFavorite={favorites.includes(tool.id)} onToggleFavorite={toggleFavorite} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};