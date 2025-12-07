import React, { useState, useMemo } from 'react';
import { toolsData } from '../data/tools';
import { ToolCategory, ResearchResult } from '../types';
import { ToolCard } from '../components/ToolCard';
import { DockItem } from '../components/DockItem';
import { DynamicIcon } from '../components/Icons';
import { Search, Sparkles, Zap, Brain, Briefcase, Code2 } from 'lucide-react';
import { SmartSearch } from '../components/SmartSearch';

interface GoogleNexusProps {
  onNavigate: (page: any) => void;
}

export const GoogleNexus: React.FC<GoogleNexusProps> = () => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>(ToolCategory.ALL);
  const [activeDockTab, setActiveDockTab] = useState('DREAM');
  const [searchQuery, setSearchQuery] = useState('');
  const [researchResult, setResearchResult] = useState<ResearchResult | null>(null);

  // Define Groups for Quick Launch Tabs
  const dockTabs = [
    { 
        id: 'DREAM', 
        label: 'Dream', 
        icon: Sparkles, 
        categories: [ToolCategory.CREATIVE_STUDIO, ToolCategory.RESEARCH, ToolCategory.MODELS_FRAMEWORKS],
        activeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]',
        inactiveClass: 'hover:text-purple-300'
    },
    { 
        id: 'WORK', 
        label: 'Work', 
        icon: Briefcase, 
        categories: [ToolCategory.WORKSPACE],
        activeClass: 'bg-gray-500/20 text-white border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]',
        inactiveClass: 'hover:text-white'
    },
    { 
        id: 'BUILD', 
        label: 'Build', 
        icon: Code2, 
        categories: [ToolCategory.DEV_LAB],
        activeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]',
        inactiveClass: 'hover:text-blue-300'
    },
  ];

  // Get tools for the active dock tab
  const activeDockTools = useMemo(() => {
     const currentTab = dockTabs.find(tab => tab.id === activeDockTab);
     if (!currentTab) return [];
     return toolsData.filter(t => t.toolbar && currentTab.categories.includes(t.category));
  }, [activeDockTab]);


  // Main Grid Tools (Everything)
  const discoveryTools = useMemo(() => {
    return toolsData;
  }, []);

  // Filter Logic
  const filteredTools = useMemo(() => {
    let sourceData = discoveryTools;
    
    // AI Research Override
    if (researchResult) {
        return discoveryTools.filter(t => researchResult.toolIds.includes(t.id));
    }

    // Standard Search Overrides Categories
    if (searchQuery) {
        sourceData = toolsData;
        const searchLower = searchQuery.toLowerCase();
        return sourceData.filter((tool) => {
          const matchesSearch = 
            tool.name.toLowerCase().includes(searchLower) || 
            tool.description.toLowerCase().includes(searchLower) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchLower));
          
          return matchesSearch;
        });
    } 
    
    // Category Filtering
    if (activeCategory === ToolCategory.ALL) {
        return discoveryTools.filter(t => t.category !== ToolCategory.WORKSPACE); // Hide mundane workspace from "All" grid as they are in toolbar
    } else {
        return discoveryTools.filter(t => t.category === activeCategory);
    }
  }, [activeCategory, searchQuery, discoveryTools, researchResult]);

  const categories = Object.values(ToolCategory).filter(
    c => c !== ToolCategory.ALL && 
         c !== ToolCategory.GENERATIVE_UI && 
         c !== ToolCategory.IMAGE_GENERATION &&
         c !== ToolCategory.VIDEO_FX && 
         c !== ToolCategory.VECTOR_3D &&
         c !== ToolCategory.DESIGN_TOOL
  );

  // Featured Tools Logic (Only show when showing ALL and no search)
  const featuredTools = useMemo(() => {
    return discoveryTools.filter(t => t.featured && t.category !== ToolCategory.WORKSPACE);
  }, [discoveryTools]);

  const showFeaturedSection = activeCategory === ToolCategory.ALL && !searchQuery && !researchResult;

  const handleResearch = (result: ResearchResult | null) => {
    setResearchResult(result);
    // If research is active, clear category to All to ensure we scan everything
    if (result) {
        setActiveCategory(ToolCategory.ALL);
    }
  };

  return (
    <div className="relative min-h-screen">
       {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-google-blue/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-google-red/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-google-yellow/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        
        {/* Smart Search Bar */}
        <div className="flex justify-center mb-16 pt-12">
            <SmartSearch 
                tools={toolsData} 
                context="GOOGLE" 
                onSearch={setSearchQuery} 
                onResearchResults={handleResearch} 
            />
        </div>

        {/* AI Advisor Message */}
        {researchResult && (
            <div className="mb-12 animate-fade-in">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 flex gap-4 items-start shadow-xl">
                    <div className="p-3 bg-purple-500/20 rounded-full shrink-0">
                        <Brain className="text-purple-300" size={24} />
                    </div>
                    <div>
                        <h4 className="text-purple-200 font-bold mb-1 uppercase tracking-wider text-xs">AI Advisor Recommendation</h4>
                        <p className="text-gray-200 text-lg leading-relaxed">{researchResult.advice}</p>
                    </div>
                </div>
            </div>
        )}

        {/* Quick Launch Dock - Tabbed */}
        {!searchQuery && !researchResult && (
          <div className="mb-12 animate-fade-in">
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

        {/* Categories (Hidden during Research) */}
        {!researchResult && (
            <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <button
                onClick={() => setActiveCategory(ToolCategory.ALL)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === ToolCategory.ALL
                    ? 'bg-white text-black border-white shadow-lg shadow-white/10 scale-105'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
                >
                All
            </button>
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat
                    ? 'bg-white text-black border-white shadow-lg shadow-white/10 scale-105'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
                >
                {cat}
                </button>
            ))}
            </div>
        )}

        {/* Featured / Bleeding Edge Section */}
        {showFeaturedSection && (
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-r from-google-blue to-google-red bg-clip-text text-transparent">
                  <Zap size={20} className="text-google-yellow inline mr-2" fill="currentColor" />
                  <h3 className="text-lg font-bold tracking-wider uppercase inline">Bleeding Edge & Hidden Gems</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredTools.map((tool) => (
                <div key={`featured-${tool.id}`} className="md:col-span-1">
                  <ToolCard tool={tool} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Browse Grid */}
        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          {filteredTools.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-block p-4 rounded-full bg-white/5 mb-4">
                 <Search size={48} className="text-gray-600" />
              </div>
              <h3 className="text-xl text-gray-300 font-medium">No tools found</h3>
              <p className="text-gray-500">
                {researchResult ? "The advisor couldn't find exact matches." : "Try adjusting your search query."}
              </p>
            </div>
          ) : (
            <>
              {showFeaturedSection && <div className="h-px bg-white/10 w-full mb-10"></div>}
              
              {!showFeaturedSection && (
                <div className="flex items-center gap-2 mb-6 text-gray-300">
                    {researchResult ? <Brain className="text-purple-400" size={20} /> : <DynamicIcon name="LayoutGrid" size={20} />}
                    <h3 className="text-lg font-bold tracking-wider uppercase">
                        {researchResult ? 'Recommended For You' : (activeCategory === ToolCategory.ALL ? 'All Resources' : activeCategory)}
                    </h3>
                    <span className="ml-auto text-sm text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {filteredTools.length}
                    </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools
                    .filter(t => searchQuery || researchResult ? true : (!showFeaturedSection || !t.featured))
                    .map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
