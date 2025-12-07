import React from 'react';
import { Tool, PricingModel } from '../types';
import { DynamicIcon } from './Icons';
import { ExternalLink, Github, CreditCard, Sparkles, ArrowUpRight, BookOpen } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  onLearn?: (id: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onLearn }) => {
  const getPricingIcon = () => {
    switch (tool.pricing) {
      case PricingModel.OPEN_SOURCE: return <Github size={12} className="mr-1" />;
      case PricingModel.PAID: return <CreditCard size={12} className="mr-1" />;
      case PricingModel.FREEMIUM: return <Sparkles size={12} className="mr-1" />;
      default: return null;
    }
  };

  const getPricingColor = () => {
    switch (tool.pricing) {
        case PricingModel.OPEN_SOURCE: return 'text-green-400 bg-green-400/10 border-green-400/20';
        case PricingModel.PAID: return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
        case PricingModel.FREEMIUM: return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        default: return 'text-gray-400 bg-white/5 border-white/10';
    }
  };

  // Default color if none provided
  const accentColor = tool.color || '#4285F4';

  const CardWrapper = tool.learnAppId ? 'div' : 'a';
  const wrapperProps = tool.learnAppId 
    ? { onClick: () => window.open(tool.url, '_blank') }
    : { href: tool.url, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <CardWrapper 
      {...wrapperProps}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-[#0a0a0a] border border-white/5 hover:border-white/20 hover:shadow-2xl cursor-pointer"
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 4px 20px -10px ${accentColor}20`
      }}
    >
      {/* Top Gradient Glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-[150px] opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${accentColor}, transparent 70%)`
        }}
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 flex flex-col h-full p-6">
        
        {/* Header: Icon & Badges */}
        <div className="flex justify-between items-start mb-5">
          <div 
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:bg-white/10 transition-colors shadow-lg"
            style={{ 
              color: tool.featured ? accentColor : 'white',
              boxShadow: tool.featured ? `0 4px 12px ${accentColor}20` : 'none'
            }}
          >
            <DynamicIcon name={tool.icon} size={28} />
          </div>

          <div className="flex flex-col items-end gap-2">
             {tool.isNew && (
                <div className="relative">
                    <div className="absolute inset-0 bg-google-yellow blur-[6px] opacity-40 animate-pulse"></div>
                    <span className="relative z-10 px-2 py-0.5 text-[10px] font-bold text-black bg-google-yellow rounded full uppercase tracking-wider">
                    New
                    </span>
                </div>
            )}
             {tool.pricing && (
                <span className={`flex items-center px-2 py-1 text-[10px] font-medium rounded border ${getPricingColor()}`}>
                    {getPricingIcon()}
                    {tool.pricing}
                </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
            <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {tool.name}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
            {tool.description}
            </p>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-white/5 relative h-[50px] flex items-center overflow-hidden">
            
            {/* Default Content (Tags) - Fades out on hover if split view enabled */}
            <div className={`flex items-center justify-between w-full transition-all duration-300 ${tool.learnAppId ? 'group-hover:opacity-0 group-hover:translate-y-4' : ''}`}>
                <div className="flex flex-wrap gap-1.5">
                    {tool.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 font-medium px-2 py-1 rounded bg-white/5 border border-white/5">
                        {tag}
                    </span>
                    ))}
                    {tool.tags.length > 2 && (
                        <span className="text-[10px] text-gray-600 px-1 py-1">+</span>
                    )}
                </div>

                {/* Standard Launch Hint (Only for non-learn apps) */}
                {!tool.learnAppId && (
                     <div className="flex items-center gap-1 text-sm font-bold text-white opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span style={{ color: accentColor }}>Launch</span>
                        <ArrowUpRight size={14} style={{ color: accentColor }} />
                    </div>
                )}
            </div>

            {/* Split Overlay (Only if Learn capable) */}
            {tool.learnAppId && (
                <>
                    {/* Left Panel - Learn */}
                    <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onLearn?.(tool.id); }}
                        className="absolute top-0 left-0 w-1/2 h-full bg-blue-600/90 backdrop-blur-md flex items-center justify-center gap-2 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-20 hover:bg-blue-500 border-r border-white/10"
                    >
                        <BookOpen size={16} className="text-white"/>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Learn App</span>
                    </button>

                    {/* Right Panel - Launch */}
                    <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-0 right-0 w-1/2 h-full backdrop-blur-md flex items-center justify-center gap-2 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-20 hover:brightness-110"
                        style={{ backgroundColor: tool.color ? `${tool.color}E6` : '#4285F4E6' }} // E6 is 90% hex
                    >
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Launch App</span>
                        <ExternalLink size={16} className="text-white"/>
                    </a>
                </>
            )}
        </div>
      </div>
    </CardWrapper>
  );
};