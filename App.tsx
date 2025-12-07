import React, { useState, useEffect } from 'react';
import { GoogleSystems } from './pages/GoogleSystems';
import { DesignSystems } from './pages/DesignSystems';
import { BuildSystems } from './pages/BuildSystems';
import { LearnApp } from './pages/LearnApp';
import { Page } from './types';
import { Sparkles, Palette, Code2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('GOOGLE_SYSTEMS');
  const [learnToolId, setLearnToolId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

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
    window.scrollTo(0,0);
  };

  const navItems = [
    { id: 'GOOGLE_SYSTEMS' as Page, label: 'Google Systems', icon: Sparkles },
    { id: 'DESIGN_SYSTEMS' as Page, label: 'Design', icon: Palette },
    { id: 'BUILD_SYSTEMS' as Page, label: 'Build', icon: Code2 },
  ];

  // If showing Learn App, render full screen page without standard nav
  if (currentPage === 'LEARN_APP') {
      return <LearnApp toolId={learnToolId} onBack={() => setCurrentPage('GOOGLE_SYSTEMS')} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-google-blue/30 selection:text-white bg-[#050505]">
      
      {/* Desktop & Tablet Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-3' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setCurrentPage('GOOGLE_SYSTEMS')}
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

          {/* Desktop Nav Pills */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
             {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${currentPage === item.id ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <item.icon size={14} />
                  <span>{item.label}</span>
                </button>
             ))}
          </nav>
        </div>
      </header>

      {/* Main Page Content - Added padding bottom for mobile nav */}
      <main className="pt-24 pb-24 md:pb-0 min-h-screen">
         {currentPage === 'GOOGLE_SYSTEMS' && <GoogleSystems onNavigate={setCurrentPage} onLearn={handleLearn} />}
         {currentPage === 'DESIGN_SYSTEMS' && <DesignSystems onLearn={handleLearn} />}
         {currentPage === 'BUILD_SYSTEMS' && <BuildSystems onLearn={handleLearn} />}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 pb-safe pt-2 px-6">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className="flex flex-col items-center gap-1 w-full"
            >
              <div className={`p-1.5 rounded-full transition-all duration-300 ${currentPage === item.id ? 'bg-white text-black' : 'text-gray-500'}`}>
                <item.icon size={20} />
              </div>
              <span className={`text-[10px] font-medium tracking-wide ${currentPage === item.id ? 'text-white' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Footer (Hidden on mobile to avoid clutter above nav bar) */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-black/50 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            Interactive Resource Directory. Not affiliated with Google.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-600 text-sm">v3.1.0</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;