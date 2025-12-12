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

  // Saved Tools Calculation
  const savedTools = useMemo(() => {
      return allTools.filter(t => favorites.includes(t.id));
  }, [allTools, favorites]);

  const handleNavigate = (page: Page) => {
      setCurrentPage(page);
      setDrawerMode('MENU'); // Reset drawer mode to standard menu
      setSearchQuery(''); 
      setResearchResult(null);
      window.scrollTo(0,0);
  };

  const handleSearch = (q: string) => {
      setSearchQuery(q);
      // Don't close nav immediately to allow typing/research flow.
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
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

          {/* Search Trigger (Mobile/Desktop consistent) */}
          <button 
            onClick={() => setIsNavOpen(true)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Search"
          >
             <Search size={20} />
          </button>
        </div>
      </header>

      {/* --- Mega Navigation Drawer --- */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${isNavOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${isNavOpen ? 'opacity-100' : 'opacity-0'}`} onClick={handleCloseNav} />
        
        {/* Drawer Panel */}
        <div className={`absolute top-0 left-0 h-full w-full sm:w-[550px] bg-[#0a0a0a] border-r border-white/10 shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            
            {/* Drawer Header Section */}
            <div className="relative shrink-0 bg-[#0a0a0a] z-20">
                {/* Decorative Top Gradient */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />

                {/* Brand & Close Row */}
                <div className="relative p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-google-blue to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <span className="font-display font-bold text-white text-lg">P</span>
                        </div>
                        <div>
                             <h2 className="font-display font-bold text-white text-lg tracking-tight leading-none">POZITIVE AI</h2>
                             <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">Launchpad</span>
                        </div>
                    </div>
                    <button onClick={handleCloseNav} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Search Area */}
                <div className="relative px-6 pb-6 pt-6">
                     <SmartSearch 
                         tools={currentTools} 
                         context={searchContext} 
                         onSearch={handleSearch} 
                         onSubmit={handleCloseNav}
                         onResearchResults={(res) => {
                             setResearchResult(res);
                             // If research provides advice, close nav to show it
                             if(res) handleCloseNav();
                         }}
                         compact={false} 
                     />
                </div>

                {/* Navigation Tabs & Saved Row */}
                <div className="relative px-6 pb-4 flex items-center justify-between border-b border-white/5">
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

                    <div className="flex items-center gap-4">
                         <button 
                            onClick={() => setDrawerMode(drawerMode === 'SAVED' ? 'MENU' : 'SAVED')}
                            className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${drawerMode === 'SAVED' ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-400'}`}
                         >
                            <Bookmark size={14} fill={drawerMode === 'SAVED' ? "currentColor" : "none"} />
                            Saved
                            {savedTools.length > 0 && <span className="ml-1 opacity-60">({savedTools.length})</span>}
                         </button>
                    </div>
                </div>
            </div>

            {/* Saved Mode Header (Only show if in Saved Mode) */}
            {drawerMode === 'SAVED' && (
                 <div className="p-4 border-b border-white/5 shrink-0 animate-fade-in bg-yellow-500/5">
                    <div className="flex items-center gap-2 text-yellow-500">
                        <Bookmark size={16} fill="currentColor" />
                        <span className="text-xs font-bold uppercase tracking-wider">Your Collection</span>
                    </div>
                </div>
            )}

            {/* Content Area - Vertically Stacked or Saved Grid */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                {drawerMode === 'SAVED' ? (
                    savedTools.length > 0 ? (
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 animate-fade-in">
                            {savedTools.map(tool => (
                                <div key={tool.id} className="aspect-square">
                                    <DockItem tool={tool} size="mini" />
                                </div>
                            ))}
                        </div>
                    ) : (
                         <div className="h-64 flex flex-col items-center justify-center text-gray-600 text-sm gap-4">
                            <Bookmark size={32} className="opacity-20" />
                            <span>No saved tools yet.</span>
                            <button 
                                onClick={() => setDrawerMode('MENU')}
                                className="text-xs text-blue-400 hover:text-blue-300 font-bold uppercase tracking-wider border-b border-blue-400/20 pb-0.5"
                            >
                                Browse Tools
                            </button>
                         </div>
                    )
                ) : (
                    /* MENU MODE: Vertically Stacked Sections */
                    <div className="space-y-8">
                        {dockConfig.map((section, idx) => {
                            const sectionTools = currentTools.filter(t => t.toolbar && section.categories.includes(t.category));
                            if (sectionTools.length === 0) return null;

                            return (
                                <div key={section.id} className="animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5 text-gray-400">
                                        <section.icon size={14} className="text-google-blue" />
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">{section.label}</h3>
                                    </div>
                                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                        {sectionTools.map(tool => (
                                            <div key={tool.id} className="aspect-square">
                                                <DockItem tool={tool} size="mini" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Quick Actions Footer */}
            <div className="p-6 border-t border-white/5 shrink-0 bg-[#050505]">
                 <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
                    <LayoutGrid size={16} className="text-gray-400" />
                    <span className="text-xs text-gray-400"><strong>Tip:</strong> {drawerMode === 'SAVED' ? 'Favorites are saved to your browser.' : 'Press Enter in search to view results.'}</span>
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