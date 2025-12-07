import React, { useState, useEffect } from 'react';
import { GoogleNexus } from './pages/GoogleNexus';
import { DesignSystems } from './pages/DesignSystems';
import { BuildSystems } from './pages/BuildSystems';
import { Page } from './types';
import { Sparkles, Palette, Code2 } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('GOOGLE_NEXUS');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-google-blue/30 selection:text-white bg-[#050505]">
      
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo - Click to go Home/Nexus */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setCurrentPage('GOOGLE_NEXUS')}
          >
             <div className="p-2 bg-gradient-to-br from-google-blue to-purple-600 rounded-lg shadow-lg shadow-google-blue/20 group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="text-white" size={20} />
             </div>
             <div>
               <h1 className="text-xl font-display font-bold text-white tracking-tight">
                 POZITIVE AI <span className="text-white/40 font-normal">| Launchpad</span>
               </h1>
             </div>
          </div>

          {/* Navigation Pills */}
          <nav className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
             <button 
                onClick={() => setCurrentPage('GOOGLE_NEXUS')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${currentPage === 'GOOGLE_NEXUS' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
             >
                <Sparkles size={14} />
                <span className="hidden sm:inline">Google Nexus</span>
             </button>
             <button 
                onClick={() => setCurrentPage('DESIGN_SYSTEMS')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${currentPage === 'DESIGN_SYSTEMS' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
             >
                <Palette size={14} />
                <span className="hidden sm:inline">Design Systems</span>
             </button>
             <button 
                onClick={() => setCurrentPage('BUILD_SYSTEMS')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${currentPage === 'BUILD_SYSTEMS' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
             >
                <Code2 size={14} />
                <span className="hidden sm:inline">Build Systems</span>
             </button>
          </nav>
        </div>
      </header>

      {/* Main Page Content */}
      <main className="pt-24 min-h-screen">
         {currentPage === 'GOOGLE_NEXUS' && <GoogleNexus onNavigate={setCurrentPage} />}
         {currentPage === 'DESIGN_SYSTEMS' && <DesignSystems />}
         {currentPage === 'BUILD_SYSTEMS' && <BuildSystems />}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            Interactive Resource Directory. Not affiliated with Google.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-600 text-sm">v3.0.0</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;