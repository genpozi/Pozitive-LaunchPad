import React from 'react';
import { Tool, PricingModel } from '../types';
import { DynamicIcon } from './Icons';
import { ArrowUpRight, Github, CreditCard, Sparkles } from 'lucide-react';

interface DockItemProps {
  tool: Tool;
}

export const DockItem: React.FC<DockItemProps> = ({ tool }) => {
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
        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-[1.03] transition-all duration-300 h-full w-full"
      >
        <div 
            className="p-3 rounded-full bg-black/40 text-gray-400 group-hover:text-white group-hover:bg-black/60 transition-colors mb-3 shadow-lg relative"
            style={{ color: tool.color }}
        >
            <DynamicIcon name={tool.icon} size={24} />
            {tool.isNew && (
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-google-yellow rounded-full border-2 border-[#1a1a1a]"></div>
            )}
        </div>
        <span className="text-xs font-medium text-gray-400 group-hover:text-white text-center line-clamp-1">
          {tool.name}
        </span>
      </a>

      {/* Tooltip Card - Hidden on Mobile, High Z-Index on Desktop */}
      <div 
        className="hidden sm:block absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 rounded-xl bg-[#121212] border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] z-[60] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 delay-150 transform translate-y-2 group-hover:translate-y-0 pointer-events-none"
      >
        {/* Color Accent Line */}
        <div 
            className="h-1 w-full rounded-t-xl opacity-80" 
            style={{ background: tool.color || '#4285F4' }}
        />
        
        <div className="p-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-100 text-sm line-clamp-1">{tool.name}</span>
                </div>
                {tool.pricing && (
                    <span className="text-[10px] uppercase text-gray-500 font-bold bg-white/5 border border-white/5 px-1.5 py-0.5 rounded flex items-center gap-1 shrink-0">
                        {getPricingIcon()}
                        {tool.pricing === PricingModel.OPEN_SOURCE ? 'Open' : tool.pricing}
                    </span>
                )}
            </div>
            
            {/* Body */}
            <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-3">
                {tool.description}
            </p>
            
            {/* Footer */}
            <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-1 flex-wrap">
                    {tool.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-wider text-gray-500 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold opacity-60 shrink-0" style={{ color: tool.color || 'white' }}>
                     LAUNCH <ArrowUpRight size={10} />
                </div>
            </div>
        </div>
        
        {/* Triangle pointer */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#121212] border-r border-b border-white/10 rotate-45 transform"></div>
      </div>
    </div>
  );
};