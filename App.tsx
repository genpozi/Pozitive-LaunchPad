import React, { useState, useEffect, useMemo } from 'react';
import { GoogleSystems } from './pages/GoogleSystems';
import { DesignSystems } from './pages/DesignSystems';
import { BuildSystems } from './pages/BuildSystems';
import { LearnApp } from './pages/LearnApp';
import { Page, ToolCategory, ResearchResult } from './types';
import { Sparkles, Palette, Code2, Menu, X, ChevronRight, LayoutGrid, Briefcase, Wand2, Box, Rocket, Network, Bookmark, Search } from 'lucide-react';
import { toolsData } from './data/tools';
import { designToolsData } from './data/designTools';
import { buildToolsData } from './data/buildTools';
import { SmartSearch } from './components/SmartSearch';
import { DockItem } from './components/DockItem';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('GOOGLE_SYSTEMS');
  const [learnToolId, setLearnToolId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<'MENU' | 'SAVED'>('MENU');
  
  // Search & Research State (Lifted)
  const [searchQuery, setSearchQuery] = useState('');
  const [researchResult, setResearchResult] = useState<ResearchResult | null>(null);

  // Nav Dock State
  const [activeDockTab, setActiveDockTab] = useState('DREAM');

  // Initialize favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
        const saved = localStorage.getItem('pozitive_favorites');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('pozitive_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aggregate ALL tools for Global Search & Favorites
  const allTools = useMemo(() => {
      return [...toolsData, ...designToolsData, ...buildToolsData];
  }, []);

  // Determine current dataset for search context based on page
  const currentTools = useMemo(() => {
      if (currentPage === 'DESIGN_SYSTEMS') return designToolsData;
      if (currentPage === 'BUILD_SYSTEMS') return buildToolsData;
      return toolsData;
  }, [currentPage]);

  const searchContext = useMemo(() => {
      if (currentPage === 'DESIGN_SYSTEMS') return 'DESIGN';
      if (currentPage === 'BUILD_SYSTEMS') return 'BUILD';
      return 'GOOGLE';
  }, [currentPage]);

  // Determine Dock Configuration based on Page
  const dockConfig = useMemo(() => {
      if (currentPage === 'DESIGN_SYSTEMS') {
          return [
            { id: 'IMAGINE', label: 'Imagine', icon: Wand2, categories: [ToolCategory.IMAGE_GENERATION, ToolCategory.VIDEO_FX] },
            { id: 'CRAFT', label: 'Craft', icon: Palette, categories: [ToolCategory.DESIGN_TOOL, ToolCategory.GENERATIVE_UI] },
            { id: 'DIMENSION', label: 'Dimension', icon: Box, categories: [ToolCategory.VECTOR_3D] },
          ];
      }
      if (currentPage === 'BUILD_SYSTEMS') {
          return [
            { id: 'CODE', label: 'Code', icon: Code2, categories: [ToolCategory.IDE_AGENT] },
            { id: 'SHIP', label: 'Ship', icon: Rocket, categories: [ToolCategory.BACKEND_INFRA, ToolCategory.AI_SDK] },
            { id: 'CONNECT', label: 'Connect', icon: Network, categories: [ToolCategory.LLM_OPS] },
          ];
      }
      // Google Systems
      return [
        { id: 'DREAM', label: 'Dream', icon: Sparkles, categories: [ToolCategory.CREATIVE_STUDIO, ToolCategory.RESEARCH, ToolCategory.MODELS_FRAMEWORKS] },
        { id: 'WORK', label: 'Work', icon: Briefcase, categories: [ToolCategory.WORKSPACE] },
        { id: 'BUILD', label: 'Build', icon: Code2, categories: [ToolCategory.DEV_LAB] },
      ];
  }, [currentPage]);

  // Reset Dock Tab when page changes
  useEffect(() => {
      setActiveDockTab(dockConfig[0].id);
  }, [currentPage, dockConfig]);

  // Filter tools for the Slide-out Dock content
  const dockTools = useMemo(() => {
      if (drawerMode === 'SAVED') {
          // Global Favorites Filter
          return allTools.filter(t => favorites.includes(t.id));
      }
      // Standard Page-Specific Tabs
      const tab = dockConfig.find(t => t.id === activeDockTab);
      if (!tab) return [];
      return currentTools.filter(t => t.toolbar && tab.categories.includes(t.category));
  }, [drawerMode, allTools, favorites, dockConfig, activeDockTab, currentTools]);

  const handleNavigate = (page: Page) => {
      setCurrentPage(page);
      setDrawerMode('MENU'); // Reset drawer mode to standard menu
      setSearchQuery(''); 
      setResearchResult(null);
      window.scrollTo(0,0);
  };

  const handleSearch = (q: string) => {
      setSearchQuery(q);
      if(q) setIsNavOpen(false); 
  };

  // If showing Learn App
  if (currentPage === 'LEARN_APP') {
      return <LearnApp toolId={learnToolId} onBack={() => setCurrentPage('GOOGLE_SYSTEMS')} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-google-blue/30 selection:text-white bg-[#050505]">
      
      {/* --- Header --- */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo & Menu Trigger */}
          <div className="flex items-center gap-4 shrink-0">
             {/* Menu Button (Replaces static logo) */}
             <button 
                onClick={() => setIsNavOpen(true)}
                className="p-2 bg-gradient-to-br from-google-blue to-purple-600 rounded-lg shadow-lg hover:rotate-6 hover:scale-105 transition-all duration-300 group"
                aria-label="Open Navigation"
             >
                <Menu className="text-white" size={20} />
             </button>

             {/* Brand Text (Home Link) */}
             <div className="cursor-pointer group" onClick={() => handleNavigate('GOOGLE_SYSTEMS')}>
                 <h1 className="text-lg font-display font-bold text-white tracking-tight hidden sm:block group-hover:opacity-80 transition-opacity">
                   POZITIVE AI <span className="text-white/40 font-normal">| Launchpad</span>
                 </h1>
             </div>
          </div>

          {/* Top Right Search (Compact) */}
          <div className="w-64 sm:w-80">
              <SmartSearch 
                  tools={currentTools} 
                  context={searchContext} 
                  onSearch={handleSearch} 
                  onResearchResults={setResearchResult}
                  compact={true}
              />
          </div>
        </div>
      </header>

      {/* --- Mega Navigation Drawer --- */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${isNavOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${isNavOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsNavOpen(false)} />
        
        {/* Drawer Panel */}
        <div className={`absolute top-0 left-0 h-full w-full sm:w-[550px] bg-[#0a0a0a] border-r border-white/10 shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            
            {/* Drawer Header */}
            <div className="p-6 flex items-center justify-between border-b border-white/5 shrink-0">
                {/* Left: Page Navigation Pills */}
                <div className="flex gap-2">
                    <button 
                        onClick={() => handleNavigate('GOOGLE_SYSTEMS')} 
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${currentPage === 'GOOGLE_SYSTEMS' && drawerMode === 'MENU' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                        Google
                    </button>
                    <button 
                        onClick={() => handleNavigate('DESIGN_SYSTEMS')} 
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${currentPage === 'DESIGN_SYSTEMS' && drawerMode === 'MENU' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                        Design
                    </button>
                    <button 
                        onClick={() => handleNavigate('BUILD_SYSTEMS')} 
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors ${currentPage === 'BUILD_SYSTEMS' && drawerMode === 'MENU' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                        Build
                    </button>
                </div>

                {/* Right: Saved & Close */}
                <div className="flex items-center gap-4">
                     <button 
                        onClick={() => setDrawerMode(drawerMode === 'SAVED' ? 'MENU' : 'SAVED')}
                        className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${drawerMode === 'SAVED' ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-400'}`}
                     >
                        <Bookmark size={14} fill={drawerMode === 'SAVED' ? "currentColor" : "none"} />
                        Saved
                        {favorites.length > 0 && <span className="ml-1 opacity-60">({favorites.length})</span>}
                     </button>
                     <div className="h-4 w-px bg-white/10"></div>
                     <button onClick={() => setIsNavOpen(false)} className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white">
                        <X size={18} />
                     </button>
                </div>
            </div>

            {/* Widget Tabs (Only show if NOT in Saved mode) */}
            {drawerMode === 'MENU' && (
                <div className="p-4 border-b border-white/5 overflow-x-auto shrink-0 animate-fade-in">
                    <div className="flex gap-2">
                        {dockConfig.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveDockTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${activeDockTab === tab.id ? 'bg-white/10 border-white/20 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
                            >
                                <tab.icon size={14} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Saved Mode Header (Only show if in Saved Mode) */}
            {drawerMode === 'SAVED' && (
                 <div className="p-4 border-b border-white/5 shrink-0 animate-fade-in bg-yellow-500/5">
                    <div className="flex items-center gap-2 text-yellow-500">
                        <Bookmark size={16} fill="currentColor" />
                        <span className="text-xs font-bold uppercase tracking-wider">Your Collection</span>
                    </div>
                </div>
            )}

            {/* Widget Content (High Density Grid) */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                {dockTools.length > 0 ? (
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 animate-fade-in">
                        {dockTools.map(tool => (
                            <div key={tool.id} className="aspect-square">
                                <DockItem tool={tool} size="mini" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="h-64 flex flex-col items-center justify-center text-gray-600 text-sm gap-4">
                        {drawerMode === 'SAVED' ? (
                            <>
                                <Bookmark size={32} className="opacity-20" />
                                <span>No saved tools yet.</span>
                                <button 
                                    onClick={() => setDrawerMode('MENU')}
                                    className="text-xs text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider border-b border-blue-400/20 pb-0.5"
                                >
                                    Browse Tools
                                </button>
                            </>
                        ) : (
                            <span>No tools found in this section.</span>
                        )}
                    </div>
                )}
            </div>

            {/* Quick Actions Footer */}
            <div className="p-6 border-t border-white/5 shrink-0 bg-[#050505]">
                 <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
                    <LayoutGrid size={16} className="text-gray-400" />
                    <span className="text-xs text-gray-400"><strong>Tip:</strong> {drawerMode === 'SAVED' ? 'Favorites are saved to your browser.' : 'Use the header search for instant research.'}</span>
                 </div>
            </div>
        </div>
      </div>

      {/* --- Main Page Content --- */}
      <main className="pt-24 min-h-screen transition-all duration-500">
         {/* Pass down Search State Props instead of Pages having their own search logic */}
         {currentPage === 'GOOGLE_SYSTEMS' && (
            <GoogleSystems 
                onNavigate={handleNavigate} 
                onLearn={(id) => { setLearnToolId(id); setCurrentPage('LEARN_APP'); }} 
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                externalSearchQuery={searchQuery}
                externalResearchResult={researchResult}
            />
         )}
         {currentPage === 'DESIGN_SYSTEMS' && (
            <DesignSystems 
                onLearn={(id) => { setLearnToolId(id); setCurrentPage('LEARN_APP'); }} 
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                externalSearchQuery={searchQuery}
                externalResearchResult={researchResult}
            />
         )}
         {currentPage === 'BUILD_SYSTEMS' && (
            <BuildSystems 
                onLearn={(id) => { setLearnToolId(id); setCurrentPage('LEARN_APP'); }} 
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                externalSearchQuery={searchQuery}
                externalResearchResult={researchResult}
            />
         )}
      </main>

    </div>
  );
};

export default App;