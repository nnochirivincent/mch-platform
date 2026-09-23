import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CwnComingSoon() {
  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#0d1709] flex flex-col justify-between p-6 sm:p-10 font-sans selection:bg-[#355322] selection:text-white">
      
      {/* Top Bar: Return Link */}
      <div>
        <Link 
          to="/character-with-nature" 
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#355322] hover:text-[#1e3319] transition group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Return to Character with Nature™</span>
        </Link>
      </div>

      {/* Center Content */}
      <div className="max-w-3xl mx-auto text-center space-y-6 my-auto py-12">
        
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0d1709] tracking-tight">
            Character with Nature™
          </h1>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#355322] font-extrabold">
            Discover • Connect • Create
          </p>
        </div>

        {/* Leaf Divider */}
        <div className="flex items-center justify-center space-x-3 text-[#355322]">
          <div className="h-[1px] w-16 bg-[#355322]/40"></div>
          <span className="text-base">🍃</span>
          <div className="h-[1px] w-16 bg-[#355322]/40"></div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1e3319] font-medium">
            Something beautiful is growing.
          </h2>
          <p className="text-base sm:text-lg text-[#2a3b22] font-medium leading-relaxed max-w-2xl mx-auto pt-1">
            Character with Nature™ programmes invite children to discover the wisdom within the natural world and connect it with their own lives—nurturing positive character, inner awareness and spiritual growth through story, exploration and reflection.
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="pt-4">
          <div className="inline-flex items-center space-x-4">
            <div className="h-[1px] w-12 sm:w-20 bg-[#355322]/30"></div>
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-extrabold text-[#355322]">
              C O M I N G &nbsp; S O O N
            </span>
            <div className="h-[1px] w-12 sm:w-20 bg-[#355322]/30"></div>
          </div>
        </div>

      </div>

      {/* Bottom spacer for balance */}
      <div className="text-center text-xs text-[#4a5444] font-medium">
        © 2026 Magnifying Children's Horizons. All rights reserved.
      </div>

    </div>
  );
}