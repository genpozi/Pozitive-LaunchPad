import React, { useMemo, useState } from 'react';
import { buildToolsData } from '../data/buildTools';
import { PricingModel, ResearchResult, ToolCategory } from '../types';
import { ToolCard } from '../components/ToolCard';
import { DockItem } from '../components/DockItem';
import { DynamicIcon } from '../components/Icons';
import { Github, Code2, Server, Terminal, Search, Network, Rocket, Bot } from 'lucide-react';
import { SmartSearch } from '../components/SmartSearch';

interface BuildSystemsProps {
    onLearn?: (id: string) => void;
}

export const BuildSystems: React.FC<BuildSystemsProps> = ({ onLearn }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [researchResult, setResearchResult] = useState<ResearchResult | null>(null);
  const [activeDockTab, setActiveDockTab] = useState('CODE');

  // Define Groups for Quick Launch Tabs
  const dockTabs = [
    { 
        id: 'CODE', 
        label: 'Code', 
        icon: Code2, 
        categories: [ToolCategory.IDE_AGENT],
        activeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]',
        inactiveClass: 'hover:text-emerald-300'
    },
    { 
        id: 'SHIP', 
        label: 'Ship', 
        icon: Rocket, 
        categories: [ToolCategory.BACKEND_INFRA, ToolCategory.AI_SDK],
        activeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
        inactiveClass: 'hover:text-cyan-300'
    },
    { 
        id: 'CONNECT', 
        label: 'Connect', 
        icon: Network, 
        categories: [ToolCategory.LLM_OPS],
        activeClass: 'bg-orange-500/20 text-orange-300 border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.2)]',
        inactiveClass: 'hover:text-orange-300'
    },
  ];

  // Get tools for the active dock tab
  const activeDockTools = useMemo(() => {
     const currentTab = dockTabs.find(tab => tab.id === activeDockTab);
     if (!currentTab) return [];
     return buildToolsData.filter(t => t.toolbar && currentTab.categories.includes(t.category));
  }, [activeDockTab]);


  // Filter tools based on search or research
  const displayTools = useMemo(() => {
    let tools = buildToolsData;

    if (researchResult) {
        return tools.filter(t => researchResult.toolIds.includes(t.id));
    }

    if (searchQuery) {
        const lower = searchQuery.toLowerCase();
        return tools.filter(t => 
            t.name.toLowerCase().includes(lower) || 
            t.description.toLowerCase().includes(lower) ||
            t.tags.some(tag => tag.toLowerCase().includes(lower))
        );
    }
    return tools;
  }, [searchQuery, researchResult]);

  // Derived sections from displayed tools
  const openSourceTools = useMemo(() => displayTools.filter(t => t.pricing === PricingModel.OPEN_SOURCE), [displayTools]);
  const freemiumTools = useMemo(() => displayTools.filter(t => t.pricing === PricingModel.FREEMIUM), [displayTools]);
  const paidTools = useMemo(() => displayTools.filter(t => t.pricing === PricingModel.PAID), [displayTools]);

  const hasTools = displayTools.length > 0;

  const handleResearch = (result: ResearchResult | null) => {
    setResearchResult(result);
  };

  return (
    <div className="relative min-h-screen">
       {/* Background Ambience - Cyber Build Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        
        {/* Header Title */}
        <div className="text-center pt-12 pb-8 animate-fade-in">
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
              Build Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">2025</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
               The modern AI engineering stack. Agents, Infrastructure, and Ops.
            </p>
        </div>

        {/* Smart Search */}
        <div className="flex justify-center mb-16">
            <SmartSearch 
                tools={buildToolsData} 
                context="BUILD" 
                onSearch={setSearchQuery} 
                onResearchResults={handleResearch} 
            />
        </div>

        {/* AI Advisor Advice */}
        {researchResult && (
            <div className="mb-12 animate-fade-in">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 border border-emerald-500/30 flex gap-4 items-start shadow-xl">
                    <div className="p-3 bg-emerald-500/20 rounded-full shrink-0">
                        <Terminal className="text-emerald-300" size={24} />
                    </div>
                    <div>
                        <h4 className="text-emerald-200 font-bold mb-1 uppercase tracking-wider text-xs">Architectural Advisor</h4>
                        <p className="text-gray-200 text-lg leading-relaxed">{researchResult.advice}</p>
                    </div>
                </div>
            </div>
        )}

         {/* Quick Launch Dock - Tabbed (Hidden during search) */}
         {!searchQuery && !researchResult && (
          <div className="mb-16 animate-fade-in">
             <div className="glass-panel rounded-3xl p-1.5 border border-white/10 bg-black/40 backdrop-blur-md flex flex-col items-center">
                
                {/* Dock Tabs */}
                <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-2xl mb-6 mt-3 border border-white/5">
                   {dockTabs.map(tab => (
                       <button
                          key={tab.id}
                          onClick={() => setActiveDockTab(tab.id)}
                          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 border border-transparent ${activeDockTab === tab.id ? tab.activeClass : `text-gray-500 ${tab.inactiveClass}`}`}
                       >
                          <tab.icon size={16} />
                          {tab.label}
                       </button>
                   ))}
                </div>

                {/* Dock Content Grid */}
                <div className="w-full px-4 pb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {activeDockTools.map(tool => (
                             <DockItem key={tool.id} tool={tool} />
                        ))}
                    </div>
                </div>
             </div>
          </div>
        )}

        {/* Empty State */}
        {!hasTools && (
             <div className="text-center py-20 animate-fade-in">
             <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                <Search size={48} className="text-gray-600" />
             </div>
             <h3 className="text-xl text-gray-300 font-medium">No tools found</h3>
             <p className="text-gray-500">
               {researchResult ? "The advisor couldn't find exact matches in the catalog." : "Try adjusting your search query."}
             </p>
           </div>
        )}

        {/* Sections */}
        {hasTools && (
            <>
                {/* Section: OPEN SOURCE */}
                {openSourceTools.length > 0 && (
                    <div className="mb-20 animate-fade-in" style={{ animationDelay: '100ms' }}>
                        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Open Source</h3>
                                <p className="text-sm text-gray-500">Self-hosted models, frameworks, and tools</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {openSourceTools.map(tool => (
                                <ToolCard key={tool.id} tool={tool} onLearn={onLearn} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Section: FREEMIUM */}
                {freemiumTools.length > 0 && (
                    <div className="mb-20 animate-fade-in" style={{ animationDelay: '200ms' }}>
                        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                <Rocket size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Managed & Cloud</h3>
                                <p className="text-sm text-gray-500">Serverless platforms with generous free tiers</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {freemiumTools.map(tool => (
                                <ToolCard key={tool.id} tool={tool} onLearn={onLearn} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Section: PAID */}
                {paidTools.length > 0 && (
                    <div className="mb-20 animate-fade-in" style={{ animationDelay: '300ms' }}>
                        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                <Server size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Enterprise Infrastructure</h3>
                                <p className="text-sm text-gray-500">High-performance production systems</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {paidTools.map(tool => (
                                <ToolCard key={tool.id} tool={tool} onLearn={onLearn} />
                            ))}
                        </div>
                    </div>
                )}
            </>
        )}

      </div>
    </div>
  );
};