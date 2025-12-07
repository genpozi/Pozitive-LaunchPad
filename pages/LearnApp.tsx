import React, { useMemo } from 'react';
import { ArrowLeft, BookOpen, GraduationCap, Video, FileText, ExternalLink, PlayCircle, Users, MessageSquare, Newspaper, Zap } from 'lucide-react';
import { toolsData } from '../data/tools';
import { designToolsData } from '../data/designTools';
import { buildToolsData } from '../data/buildTools';
import { getLearningData } from '../data/learningResources';
import { DynamicIcon } from '../components/Icons';

interface LearnAppProps {
  toolId: string | null;
  onBack: () => void;
}

export const LearnApp: React.FC<LearnAppProps> = ({ toolId, onBack }) => {
  
  const tool = useMemo(() => {
    const allTools = [...toolsData, ...designToolsData, ...buildToolsData];
    return allTools.find(t => t.id === toolId);
  }, [toolId]);

  const learningData = useMemo(() => {
    return toolId ? getLearningData(toolId) : null;
  }, [toolId]);

  if (!tool || !learningData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#050505]">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Tool Not Found</h2>
            <button onClick={onBack} className="text-blue-400 hover:underline">Go Back</button>
        </div>
      </div>
    );
  }

  const accentColor = tool.color || '#4285F4';

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div 
            className="absolute top-0 right-0 w-[800px] h-[800px] opacity-10 blur-[120px]" 
            style={{ background: accentColor }}
         ></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        
        {/* Navigation */}
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full w-fit border border-white/5"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Launchpad</span>
        </button>

        {/* Hero Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {/* Left Column: App Identity */}
            <div className="lg:col-span-2">
                 <div className="flex items-start gap-6 mb-8">
                    <div 
                        className="p-5 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden shrink-0"
                    >
                         <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${accentColor}, transparent)` }}></div>
                        <DynamicIcon name={tool.icon} size={56} className="relative z-10 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-2">{tool.name}</h1>
                        <p className="text-xl text-gray-400 font-medium">{learningData.tagline}</p>
                    </div>
                 </div>

                 <p className="text-lg text-gray-300 leading-relaxed mb-8 border-l-4 pl-6" style={{ borderColor: accentColor }}>
                    {learningData.overview}
                 </p>

                 <div className="flex flex-wrap gap-4">
                     <button className="px-6 py-3.5 rounded-xl font-bold text-black flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-white/10" style={{ background: accentColor }}>
                        <GraduationCap size={20} />
                        Start Learning
                     </button>
                     <a href={tool.url} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl font-bold text-white border border-white/10 bg-white/5 hover:bg-white/10 flex items-center gap-2 transition-colors">
                        Launch App <ExternalLink size={18} />
                     </a>
                 </div>
            </div>

            {/* Right Column: Quick Stats / Use Cases */}
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                 <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Zap size={16} /> Key Use Cases
                 </h3>
                 <ul className="space-y-3">
                    {learningData.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/20 border border-white/5">
                             <div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accentColor }}></div>
                             <span className="text-gray-300 text-sm font-medium">{useCase}</span>
                        </li>
                    ))}
                 </ul>
            </div>
        </div>

        {/* Section: Focus Creators */}
        {learningData.creators.length > 0 && (
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
                 <div className="flex items-center gap-2 mb-6">
                     <Users className="text-gray-400" size={24} />
                     <h2 className="text-2xl font-bold text-white">Focus Creators</h2>
                     <span className="text-sm text-gray-500 ml-2 border-l border-white/10 pl-2">Top experts to follow</span>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                     {learningData.creators.map((creator, idx) => (
                         <div key={idx} className="group p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                             <div className="flex items-center justify-between mb-3">
                                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                                     {creator.name.charAt(0)}
                                 </div>
                                 <div className="text-xs font-bold px-2 py-1 rounded bg-white/5 text-gray-400 uppercase">
                                     {creator.platform}
                                 </div>
                             </div>
                             <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--accent)]" style={{ '--accent': accentColor } as any}>
                                 {creator.name}
                             </h4>
                             <p className="text-xs text-blue-400 mb-3 font-medium">{creator.focus}</p>
                             <p className="text-xs text-gray-500 line-clamp-3 mb-4">{creator.description}</p>
                             {creator.url && (
                                 <a href={creator.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold flex items-center gap-1 hover:underline" style={{ color: accentColor }}>
                                     VIEW CHANNEL <ArrowLeft size={10} className="rotate-180" />
                                 </a>
                             )}
                         </div>
                     ))}
                 </div>
            </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content: Top Videos */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-2 mb-6">
                    <PlayCircle className="text-gray-400" size={24} />
                    <h2 className="text-2xl font-bold text-white">Top Tutorials</h2>
                </div>

                <div className="space-y-4">
                    {learningData.videos.map((video, idx) => (
                        <div key={idx} className="group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors cursor-pointer">
                            <div className="w-full sm:w-48 aspect-video rounded-xl bg-black/40 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/20 relative overflow-hidden">
                                 {/* Placeholder Thumbnail Effect */}
                                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                                 <PlayCircle size={32} className="text-white/50 group-hover:text-white transition-colors z-10" />
                                 <span className="absolute bottom-2 right-2 text-[10px] font-bold bg-black/80 px-1.5 py-0.5 rounded text-white">{video.duration}</span>
                            </div>
                            <div className="flex-1 min-w-0 py-1">
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:underline decoration-white/30 underline-offset-4 truncate">{video.title}</h3>
                                <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                                    <span className="font-medium text-white">{video.channel}</span>
                                    <span>•</span>
                                    <span>YouTube</span>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar: Resources & Communities */}
            <div className="space-y-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
                
                {/* Knowledge Base */}
                <div>
                     <div className="flex items-center gap-2 mb-6">
                        <Newspaper className="text-gray-400" size={24} />
                        <h2 className="text-2xl font-bold text-white">Knowledge Base</h2>
                    </div>
                    <div className="space-y-3">
                        {learningData.articles.map((article, idx) => (
                            <a key={idx} href={article.url} className="block p-4 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all hover:translate-x-1 group">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-bold uppercase text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">{article.source}</span>
                                    <ExternalLink size={12} className="text-gray-600 group-hover:text-white" />
                                </div>
                                <h4 className="text-base font-bold text-white mb-1 group-hover:text-[var(--accent)]" style={{ '--accent': accentColor } as any}>{article.title}</h4>
                                <p className="text-xs text-gray-500">{article.description}</p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Communities */}
                 <div>
                     <div className="flex items-center gap-2 mb-6">
                        <MessageSquare className="text-gray-400" size={24} />
                        <h2 className="text-2xl font-bold text-white">Communities</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        {learningData.communities.map((comm, idx) => (
                             <a key={idx} href={comm.url} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                 <div className="p-2.5 rounded-full bg-black/40 text-gray-300">
                                     <Users size={18} />
                                 </div>
                                 <div>
                                     <h4 className="text-sm font-bold text-white">{comm.title}</h4>
                                     <p className="text-xs text-gray-500">{comm.description}</p>
                                 </div>
                             </a>
                        ))}
                    </div>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
};