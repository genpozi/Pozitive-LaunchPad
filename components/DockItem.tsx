import React from 'react';
import { Tool, PricingModel } from '../types';
import { DynamicIcon } from './Icons';
import { ArrowUpRight, Github, CreditCard, Sparkles } from 'lucide-react';

interface DockItemProps {
  tool: Tool;
  size?: 'normal' | 'mini';
}

export const DockItem: React.FC<DockItemProps> = ({ tool, size = 'normal' }) => {
  const isMini = size === 'mini';

  const getPricingIcon = () => {
    switch (tool.pricing) {
      case PricingModel.OPEN_SOURCE: return <Github size={10} />;
      case PricingModel.PAID: return <CreditCard size={10} />;
      case PricingModel.FREEMIUM: return <Sparkles size={10} />;
      default: return null;
    }
  };

  return (
    <div className="relative group h-full">
      <a 
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-[1.05] transition-all duration-300 h-full w-full ${isMini ? 'p-1.5' : 'p-4'}`}
      >
        <div 
            className={`rounded-full bg-black/40 text-gray-400 group-hover:text-white group-hover:bg-black/60 transition-colors shadow-lg relative flex items-center justify-center ${isMini ? 'p-1.5 mb-1' : 'p-3 mb-3'}`}
            style={{ color: tool.color }}
        >
            <DynamicIcon name={tool.icon} size={isMini ? 16 : 24} />
            {tool.isNew && (
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-google-yellow rounded-full border border-[#1a1a1a]"></div>
            )}
        </div>
        {!isMini && (
            <span className="text-xs font-medium text-gray-400 group-hover:text-white text-center line-clamp-1">
            {tool.name}
            </span>
        )}
        {isMini && (
             <span className="text-[8px] font-medium text-gray-500 group-hover:text-white text-center line-clamp-1 w-full overflow-hidden text-ellipsis px-0.5">
             {tool.name}
             </span>
        )}
      </a>

      {/* Tooltip Card */}
      <div 
        className={`hidden sm:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-56 rounded-xl bg-[#121212] border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] z-[60] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 delay-75 transform translate-y-2 group-hover:translate-y-0 pointer-events-none`}
      >
        <div className="h-0.5 w-full rounded-t-xl opacity-80" style={{ background: tool.color || '#4285F4' }} />
        <div className="p-3">
            <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-gray-100 text-xs line-clamp-1">{tool.name}</span>
                {tool.pricing && <span className="opacity-50">{getPricingIcon()}</span>}
            </div>
            <p className="text-[10px] text-gray-400 leading-snug line-clamp-2 mb-2">{tool.description}</p>
            <div className="flex items-center gap-1 text-[9px] font-bold opacity-60" style={{ color: tool.color || 'white' }}>
                 LAUNCH <ArrowUpRight size={10} />
            </div>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#121212] border-r border-b border-white/10 rotate-45"></div>
      </div>
    </div>
  );
};