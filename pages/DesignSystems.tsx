import React, { useMemo, useState } from 'react';
import { designToolsData } from '../data/designTools';
import { PricingModel, ResearchResult } from '../types';
import { ToolCard } from '../components/ToolCard';
import { DynamicIcon } from '../components/Icons';
import { Github, Gem, Sparkles, Brain, Search, LayoutGrid } from 'lucide-react';

interface DesignSystemsProps {
    onLearn?: (id: string) => void;
    favorites?: string[];
    toggleFavorite?: (id: string) => void;
    externalSearchQuery?: string;
    externalResearchResult?: ResearchResult | null;
}

export const DesignSystems: React.FC<DesignSystemsProps> = ({ 
    onLearn, 
    favorites = [], 
    toggleFavorite,
    externalSearchQuery = '',
    externalResearchResult = null 
}) => {

  const displayTools = useMemo(() => {
    if (externalResearchResult) {
        return designToolsData.filter(t => externalResearchResult.toolIds.includes(t.id));
    }
    if (externalSearchQuery) {
        const lower = externalSearchQuery.toLowerCase();
        return designToolsData.filter(t => 
            t.name.toLowerCase().includes(lower) || 
            t.description.toLowerCase().includes(lower) ||
            t.tags.some(tag => tag.toLowerCase().includes(lower))
        );
    }
    return designToolsData;
  }, [externalSearchQuery, externalResearchResult]);

  const openSourceTools = useMemo(() => displayTools.filter(t => t.pricing === PricingModel.OPEN_SOURCE), [displayTools]);
  const freemiumTools = useMemo(() => displayTools.filter(t => t.pricing === PricingModel.FREEMIUM), [displayTools]);
  const paidTools = useMemo(() => displayTools.filter(t => t.pricing === PricingModel.PAID), [displayTools]);
  const hasTools = displayTools.length > 0;

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        {!externalSearchQuery && !externalResearchResult && (
            <div className="text-center pt-12 pb-8 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                AI Design Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">2025</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">The curated landscape of generative design.</p>
            </div>
        )}

        {externalResearchResult && (
            <div className="mb-12 animate-fade-in mt-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-900/40 to-purple-900/40 border border-pink-500/30 flex gap-4 items-start shadow-xl">
                    <div className="p-3 bg-pink-500/20 rounded-full shrink-0"><Brain className="text-pink-300" size={24} /></div>
                    <div>
                        <h4 className="text-pink-200 font-bold mb-1 uppercase tracking-wider text-xs">Design Consultant</h4>
                        <p className="text-gray-200 text-lg leading-relaxed">{externalResearchResult.advice}</p>
                    </div>
                </div>
            </div>
        )}

        {(!hasTools) && (
             <div className="text-center py-20 animate-fade-in">
             <div className="inline-block p-4 rounded-full bg-white/5 mb-4"><Search size={48} className="text-gray-600" /></div>
             <h3 className="text-xl text-gray-300 font-medium">No tools found</h3>
             <p className="text-gray-500">{externalResearchResult ? "Consultant found no matches." : "Try adjusting your search query."}</p>
           </div>
        )}

        {hasTools && (
            <div className="animate-fade-in">
                {openSourceTools.length > 0 && (
                    <div className="mb-20">
                        {/* The Lab - Gradient Header */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                                <Github size={24} className="text-green-400 inline mr-3 align-middle" />
                                <h3 className="text-2xl font-bold tracking-wider uppercase inline align-middle">The Lab</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {openSourceTools.map(tool => <ToolCard key={tool.id} tool={tool} onLearn={onLearn} isFavorite={favorites.includes(tool.id)} onToggleFavorite={toggleFavorite} />)}
                        </div>
                    </div>
                )}
                {freemiumTools.length > 0 && (
                    <div className="mb-20">
                        {/* The Starters - Gradient Header */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                                <Sparkles size={24} className="text-blue-400 inline mr-3 align-middle" />
                                <h3 className="text-2xl font-bold tracking-wider uppercase inline align-middle">The Starters</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {freemiumTools.map(tool => <ToolCard key={tool.id} tool={tool} onLearn={onLearn} isFavorite={favorites.includes(tool.id)} onToggleFavorite={toggleFavorite} />)}
                        </div>
                    </div>
                )}
                {paidTools.length > 0 && (
                    <div className="mb-20">
                        {/* Pro Suite - Gradient Header */}
                        <div className="flex items-center gap-2 mb-8">
                            <div className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                                <Gem size={24} className="text-amber-400 inline mr-3 align-middle" />
                                <h3 className="text-2xl font-bold tracking-wider uppercase inline align-middle">Pro Suite</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {paidTools.map(tool => <ToolCard key={tool.id} tool={tool} onLearn={onLearn} isFavorite={favorites.includes(tool.id)} onToggleFavorite={toggleFavorite} />)}
                        </div>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};