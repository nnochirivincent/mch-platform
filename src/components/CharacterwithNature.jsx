import React from 'react';
import ScrollFade from './ScrollFade';

export default function CharacterwithNature() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <ScrollFade delay={80}>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-emerald-950/10 overflow-hidden">
          
          {/* Top Header Banner with Full Image */}
          <div className="relative w-full h-48 sm:h-64 bg-emerald-950 overflow-hidden">
            <img 
              src="/cwn-image.jpeg" 
              alt="Character with Nature Header" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Section 1: The CWN Approach with a Richer, Deeper Cream Background */}
          <div className="bg-[#f0ece1]">
            <div className="grid lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Title & Text */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-center">
                <div className="border-l-4 border-[#355322] pl-3">
                  <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-[#355322]">
                    THE CWN APPROACH
                  </h3>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#1e3319] font-bold tracking-tight">
                    Learning Through Discovery
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#2c3d26] leading-relaxed text-justify">
                  <p>
                    Children encounter patterns, relationships and processes in nature every day. <strong className="font-bold text-[#1e3319]">Character with Nature™ (CWN)</strong> turns these encounters into opportunities for discovery—helping children explore what the natural world can reveal about character, choices and their inner lives.
                  </p>
                  <p>
                    Rather than teaching these ideas as abstract concepts, CWN invites children to experience them through stories, observation, nature exploration and reflection. As they notice, question and make connections for themselves, children can develop positive character traits, deepen their inner and spiritual awareness, and begin to recognise principles at work in nature and in life.
                  </p>
                  <div className="pt-2 text-center font-bold text-xs sm:text-sm tracking-wide text-[#355322] uppercase">
                    Nature • Character • Inner Awareness • Spiritual Growth
                  </div>
                </div>
              </div>

              {/* Right Column: Image starting flush at the hero banner line */}
              <div className="lg:col-span-5 relative h-full lg:-mr-10">
                {/* Image container with left border matching the gradient color to hide the border */}
                <div className="relative w-full h-full overflow-hidden shadow-lg border-b lg:border-b-0 border-[#23351a]/15 bg-emerald-950/5 lg:border-l-[20px] lg:border-l-[#f0ece1]">
                  {/* Deeper Cream-to-transparent gradient mask on the left edge */}
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f0ece1] via-[#f0ece1]/80 to-transparent pointer-events-none z-10 hidden sm:block"></div>
                  
                  <img 
                    src="/cwn-2-image.png" 
                    alt="Child looking out at nature landscape" 
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* SECTION 2: DISCOVERING NATURE'S LAWS */}
          <div className="bg-[#f3f5f3] px-6 sm:px-10 pt-6 pb-5 space-y-5 text-center">
            <div className="max-w-2xl mx-auto space-y-1">
              <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#1e3319]">
                DISCOVERING NATURE’S LAWS
              </h3>
              <p className="text-[#2c3d26] text-xs sm:text-sm leading-relaxed">
                At the heart of Character with Nature™ are universal laws and principles that children can discover through patterns and processes in the natural world.
              </p>
              <p className="text-[#2c3d26] text-xs sm:text-sm leading-relaxed">
                Through age-appropriate exploration and reflection, children begin to connect what they discover in nature with their own choices, character and inner lives.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
              
              {/* Card 1: Cause & Effect */}
              <div className="bg-white rounded-none overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                <div className="w-full h-32 bg-white relative overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/cwn-image-2.png" 
                    alt="Cause & Effect" 
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="p-3 space-y-1 text-center flex-1 flex flex-col justify-between bg-emerald-950/[0.02]">
                  <h4 className="font-serif font-bold text-xs uppercase text-[#1e3319]">CAUSE & EFFECT</h4>
                  <p className="text-[#2c3d26] text-[10px] sm:text-xs leading-tight">
                    What we do influences what happens next.
                  </p>
                </div>
              </div>

              {/* Card 2: Like Attracts Like */}
              <div className="bg-white rounded-none overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                <div className="w-full h-32 bg-white relative overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/cwn-image-3.png" 
                    alt="Like Attracts Like" 
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="p-3 space-y-1 text-center flex-1 flex flex-col justify-between bg-emerald-950/[0.02]">
                  <h4 className="font-serif font-bold text-xs uppercase text-[#1e3319]">LIKE ATTRACTS LIKE</h4>
                  <p className="text-[#2c3d26] text-[10px] sm:text-xs leading-tight">
                    What we nurture with grows. What we give attention to can influence what grows around us.
                  </p>
                </div>
              </div>

              {/* Card 3: Gravity */}
              <div className="bg-white rounded-none overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                <div className="w-full h-32 bg-white relative overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/cwn-image-4.png" 
                    alt="Gravity" 
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="p-3 space-y-1 text-center flex-1 flex flex-col justify-between bg-emerald-950/[0.02]">
                  <h4 className="font-serif font-bold text-xs uppercase text-[#1e3319]">GRAVITY</h4>
                  <p className="text-[#2c3d26] text-[10px] sm:text-xs leading-tight">
                    What we carry within can influence our direction. An inner influence can draw us down or lift us up.
                  </p>
                </div>
              </div>

              {/* Card 4: Balance */}
              <div className="bg-white rounded-none overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                <div className="w-full h-32 bg-white relative overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/cwn-image-5.png" 
                    alt="Balance" 
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="p-3 space-y-1 text-center flex-1 flex flex-col justify-between bg-emerald-950/[0.02]">
                  <h4 className="font-serif font-bold text-xs uppercase text-[#1e3319]">BALANCE</h4>
                  <p className="text-[#2c3d26] text-[10px] sm:text-xs leading-tight">
                    Nature shows us patterns of abundance, restraint and harmony.
                  </p>
                </div>
              </div>

            </div>

            {/* Button: Explore the Laws */}
            <div className="pt-1">
              <button 
                type="button"
                className="bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-6 py-2.5 rounded-xl shadow transition"
              >
                EXPLORE THE LAWS & OUR APPROACH →
              </button>
            </div>

          </div>

          {/* SECTION 3: EXPLORE CHARACTER WITH NATURE - CWN GROWS WITH CHILDREN */}
          <div className="bg-[#f0ece1] p-6 sm:p-10 space-y-6">
            <div className="space-y-1">
              <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-[#355322]">
                EXPLORE CHARACTER WITH NATURE™
              </h3>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1e3319] font-bold tracking-tight">
                CWN Grows With Children
              </h2>
              <p className="text-[#2c3d26] text-xs sm:text-sm">
                CWN grows with children as their capacity for wonder, contact and reflect deepens.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 items-center">
              
              {/* Single Full Image Container replacing the 4 age milestones */}
              <div className="lg:col-span-8 w-full h-64 sm:h-80 bg-emerald-950/5 rounded-none overflow-hidden border border-emerald-950/10 shadow-sm">
                <img 
                  src="/cwn-children-image.png" 
                  alt="CWN Grows With Children" 
                  className="w-full h-full object-cover object-center rounded-none"
                />
              </div>

              {/* Right Description & CTA */}
              <div className="lg:col-span-4 space-y-4 text-xs sm:text-sm text-[#2c3d26] leading-relaxed">
                <p>
                  Discover ideal books and age-appropriate learning resources designed around your child's natural stage of development.
                </p>
                <p>
                  Parents can also explore the foundational CWN guide and guidance for supporting their child's growth.
                </p>
                <div>
                  <button 
                    type="button"
                    className="w-full bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest py-3 px-4 rounded-none shadow transition text-center"
                  >
                    EXPLORE CWN PROGRAMMES →
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </ScrollFade>
    </div>
  );
}