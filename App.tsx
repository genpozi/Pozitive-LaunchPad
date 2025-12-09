import React, { useState, useEffect } from 'react';
import { GoogleSystems } from './pages/GoogleSystems';
import { DesignSystems } from './pages/DesignSystems';
import { BuildSystems } from './pages/BuildSystems';
import { LearnApp } from './pages/LearnApp';
import { Page } from './types';
import { Sparkles, Palette, Code2, Menu, X, ChevronRight, LayoutGrid } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('GOOGLE_SYSTEMS');
  const [learnToolId, setLearnToolId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearn = (toolId: string) => {
    setLearnToolId(toolId);
    setCurrentPage('LEARN_APP');
    setIsNavOpen(false);
    window.scrollTo(0,0);
  };

  const handleNavigate = (page: Page) => {
      setCurrentPage(page);
      setIsNavOpen(false);
      window.scrollTo(0,0);
  };

  const navItems = [
    { 
        id: 'GOOGLE_SYSTEMS' as Page, 
        label: 'Google Tools', 
        description: 'Ecosystem & Workspace',
        icon: Sparkles,
        color: 'text-google-blue' 
    },
    { 
        id: 'DESIGN_SYSTEMS' as Page, 
        label: 'Design Systems', 
        description: 'Generative UI & FX',
        icon: Palette,
        color: 'text-pink-400' 
    },
    { 
        id: 'BUILD_SYSTEMS' as Page, 
        label: 'Build Systems', 
        description: 'Engineering & Agents',
        icon: Code2,
        color: 'text-emerald-400' 
    },
  ];

  // If showing Learn App, render full screen page without standard nav
  if (currentPage === 'LEARN_APP') {
      return <LearnApp toolId={learnToolId} onBack={() => setCurrentPage('GOOGLE_SYSTEMS')} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-google-blue/30 selection:text-white bg-[#050505]">
      
      {/* --- Header (Logo Only) --- */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-3' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavigate('GOOGLE_SYSTEMS')}
          >
             <div className="p-2 bg-gradient-to-br from-google-blue to-purple-600 rounded-lg shadow-lg shadow-google-blue/20 group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="text-white" size={20} />
             </div>
             <div>
               <h1 className="text-xl font-display font-bold text-white tracking-tight">
                 POZITIVE AI <span className="text-white/40 font-normal hidden sm:inline">| Launchpad</span>
               </h1>
             </div>
          </div>
        </div>
      </header>

      {/* --- Floating Navigation Trigger --- */}
      <button 
        onClick={() => setIsNavOpen(true)}
        className={`fixed top-24 left-6 z-40 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white shadow-2xl transition-all duration-300 hover:scale-110 group ${isNavOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open Navigation"
      >
        <Menu size={24} className="group-hover:text-google-blue transition-colors" />
      </button>

      {/* --- Slide-Out Navigation Drawer --- */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${isNavOpen ? 'visible' : 'invisible'}`}>
        
        {/* Backdrop */}
        <div 
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isNavOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsNavOpen(false)}
        />

        {/* Panel */}
        <div className={`absolute top-0 left-0 h-full w-80 bg-[#0a0a0a] border-r border-white/10 shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            
            {/* Drawer Header */}
            <div className="p-6 flex items-center justify-between border-b border-white/5">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Navigation</h2>
                <button 
                    onClick={() => setIsNavOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group ${
                            currentPage === item.id 
                            ? 'bg-white/5 border border-white/10 shadow-lg' 
                            : 'hover:bg-white/5 border border-transparent'
                        }`}
                    >
                        <div className={`p-3 rounded-lg bg-black/40 ${currentPage === item.id ? item.color : 'text-gray-400 group-hover:text-white'}`}>
                            <item.icon size={20} />
                        </div>
                        <div className="text-left">
                            <h3 className={`font-bold text-base ${currentPage === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                {item.label}
                            </h3>
                            <p className="text-xs text-gray-600 group-hover:text-gray-500">{item.description}</p>
                        </div>
                        {currentPage === item.id && (
                            <ChevronRight size={16} className="ml-auto text-white/20" />
                        )}
                    </button>
                ))}
            </div>

            {/* Quick Actions / Footer */}
            <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/5">
                 <div className="p-4 rounded-xl bg-gradient-to-br from-google-blue/10 to-purple-600/10 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <LayoutGrid size={18} className="text-google-blue" />
                        <span className="font-bold text-white text-sm">Quick Actions</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">
                        Use <strong>Command + K</strong> (concept) to search across all tools instantly.
                    </p>
                 </div>
                 <div className="mt-6 text-center">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">v3.2.0 • Pozitive AI</p>
                 </div>
            </div>
        </div>
      </div>

      {/* --- Main Page Content --- */}
      <main className="pt-24 min-h-screen transition-all duration-500">
         {currentPage === 'GOOGLE_SYSTEMS' && <GoogleSystems onNavigate={handleNavigate} onLearn={handleLearn} />}
         {currentPage === 'DESIGN_SYSTEMS' && <DesignSystems onLearn={handleLearn} />}
         {currentPage === 'BUILD_SYSTEMS' && <BuildSystems onLearn={handleLearn} />}
      </main>

    </div>
  );
};

export default App;