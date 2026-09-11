import React from 'react';
import { Link } from 'react-router-dom';
import ScrollFade from './ScrollFade';

export default function CharacterwithNature() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen">
      
      {/* 1. HERO SECTION: Full width, reduced height */}
      <section className="relative w-full pt-0 pb-0">
        <div className="relative w-full rounded-none overflow-hidden h-[30vh] sm:h-[38vh] lg:h-[45vh] flex items-center">
          
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#162211]">
            <img 
              src="/cwn-image.jpeg" 
              alt="Character with Nature Header" 
              className="w-full h-full object-cover object-center transform scale-100"
            />
          </div>

        </div>
      </section>

      {/* Main Container for the rest of the sections */}
      <div className="py-6 sm:py-10 px-2 sm:px-4 lg:px-6">
        <ScrollFade delay={80}>
          <div className="max-w-7xl mx-auto space-y-3 sm:space-y-5">

            {/* Section 1: The CWN Approach */}
            <div className="bg-[#f0ece1] rounded-2xl sm:rounded-3xl shadow-md border border-emerald-950/10 overflow-hidden">
              <div className="grid lg:grid-cols-12 items-stretch">
                
                {/* Left Column: Title & Text */}
                <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 space-y-4 sm:space-y-6 flex flex-col justify-center">
                  <div className="border-l-4 border-[#355322] pl-3">
                    <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-[#355322]">
                      THE CWN APPROACH
                    </h3>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1e3319] font-bold tracking-tight">
                      Learning Through Discovery
                    </h2>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#1b2718] font-medium leading-relaxed text-justify">
                    <p>
                      Children encounter patterns, relationships and processes in nature every day. <strong className="font-bold text-[#1e3319]">Character with Nature™ (CWN)</strong> turns these encounters into opportunities for discovery—helping children explore what the natural world can reveal about character, choices and their inner lives.
                    </p>
                    <p>
                      Rather than teaching these ideas as abstract concepts, CWN invites children to experience them through stories, observation, nature exploration and reflection. As they notice, question and make connections for themselves, children can develop positive character traits, deepen their inner and spiritual awareness, and begin to recognise principles at work in nature and in life.
                    </p>
                    <div className="pt-1 text-center font-bold text-[11px] sm:text-xs tracking-wide text-[#355322] uppercase">
                      Nature • Character • Inner Awareness • Spiritual Growth
                    </div>
                  </div>
                </div>

                {/* Right Column: Image starting flush */}
                <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full">
                  <div className="relative w-full h-full overflow-hidden shadow-lg border-b lg:border-b-0 border-[#23351a]/15 bg-emerald-950/5">
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
            <div className="bg-[#f3f5f3] rounded-2xl sm:rounded-3xl shadow-md border border-emerald-950/10 px-4 sm:px-10 md:px-14 py-8 sm:py-12 space-y-6 text-center">
              <div className="max-w-3xl mx-auto space-y-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-extrabold text-[#1e3319]">
                  DISCOVERING NATURE’S LAWS
                </h3>
                <p className="text-[#1b2718] font-medium text-xs sm:text-sm leading-relaxed">
                  At the heart of Character with Nature™ are universal laws and principles that children can discover through patterns and processes in the natural world.
                </p>
                <p className="text-[#1b2718] font-medium text-xs sm:text-sm leading-relaxed">
                  Through age-appropriate exploration and reflection, children begin to connect what they discover in nature with their own choices, character and inner lives.
                </p>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                
                {/* Card 1: Cause & Effect */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                  <div className="w-full h-32 sm:h-40 bg-white relative overflow-hidden flex items-center justify-center p-3">
                    <img 
                      src="/cwn-image-2.png" 
                      alt="Cause & Effect" 
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-4 space-y-1 text-center flex-1 flex flex-col justify-between bg-emerald-950/[0.02]">
                    <h4 className="font-serif font-bold text-xs uppercase text-[#1e3319]">CAUSE & EFFECT</h4>
                    <p className="text-[#1b2718] font-medium text-[11px] sm:text-xs leading-tight">
                      What we do influences what happens next.
                    </p>
                  </div>
                </div>

                {/* Card 2: Like Attracts Like */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                  <div className="w-full h-32 sm:h-40 bg-white relative overflow-hidden flex items-center justify-center p-3">
                    <img 
                      src="/cwn-image-3.png" 
                      alt="Like Attracts Like" 
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-4 space-y-1 text-center flex-1 flex flex-col justify-between bg-emerald-950/[0.02]">
                    <h4 className="font-serif font-bold text-xs uppercase text-[#1e3319]">LIKE ATTRACTS LIKE</h4>
                    <p className="text-[#1b2718] font-medium text-[11px] sm:text-xs leading-tight">
                      What we nurture and give attention to can influence what grows around us.
                    </p>
                  </div>
                </div>

                {/* Card 3: Gravity */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                  <div className="w-full h-32 sm:h-40 bg-white relative overflow-hidden flex items-center justify-center p-3">
                    <img 
                      src="/cwn-image-4.png" 
                      alt="Gravity" 
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-4 space-y-1 text-center flex-1 flex flex-col justify-between bg-emerald-950/[0.02]">
                    <h4 className="font-serif font-bold text-xs uppercase text-[#1e3319]">GRAVITY</h4>
                    <p className="text-[#1b2718] font-medium text-[11px] sm:text-xs leading-tight">
                      What we carry within can influence how we move and the direction we take .
                    </p>
                  </div>
                </div>

                {/* Card 4: Balance */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                  <div className="w-full h-32 sm:h-40 bg-white relative overflow-hidden flex items-center justify-center p-3">
                    <img 
                      src="/cwn-image-5.png" 
                      alt="Balance" 
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="p-4 space-y-1 text-center flex-1 flex flex-col justify-between bg-emerald-950/[0.02]">
                    <h4 className="font-serif font-bold text-xs uppercase text-[#1e3319]">BALANCE</h4>
                    <p className="text-[#1b2718] font-medium text-[11px] sm:text-xs leading-tight">
                      Nature shows us patterns of balance, adjustment and harmony.
                    </p>
                  </div>
                </div>

              </div>

              {/* Button: Explore the Laws */}
              <div className="pt-3">
                <Link 
                  to="/cwn/laws"
                  className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-xl shadow transition"
                >
                  EXPLORE THE LAWS & OUR APPROACH →
                </Link>
              </div>

            </div>

            {/* SECTION 3: EXPLORE CHARACTER WITH NATURE - CWN GROWS WITH CHILDREN */}
            <div className="bg-[#f0ece1] rounded-2xl sm:rounded-3xl shadow-md border border-emerald-950/10 p-6 sm:p-10 md:p-12 space-y-8">
              <div className="space-y-1">
                <h3 className="text-[10px] uppercase tracking-widest font-extrabold text-[#355322]">
                  EXPLORE CHARACTER WITH NATURE™
                </h3>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1e3319] font-bold tracking-tight">
                  CWN Grows With Children
                </h2>
              </div>

              <div className="grid lg:grid-cols-12 gap-6 items-center">
                
                {/* Left Description & CTA */}
                <div className="lg:col-span-4 space-y-4 text-xs sm:text-sm text-[#1b2718] font-medium leading-relaxed">
                  <p>
                    Discover child-friendly videos and explanations, nature explorations, pattern-noticing activities, related stories and resources designed for each stage of development.
                  </p>
                  <p>
                    Parents can also explore the foundations of CWN and guidance for supporting their child's journey.
                  </p>
                  <div>
                    <Link 
                      to="/cwn/programmes"
                      className="block w-full bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest py-3 px-4 rounded-xl shadow transition text-center"
                    >
                      EXPLORE CWN PROGRAMMES →
                    </Link>
                  </div>
                </div>

                {/* Image Container */}
                <div className="lg:col-span-8 w-full h-56 sm:h-72 lg:h-64 bg-[#f0ece1] rounded-2xl overflow-hidden border border-emerald-950/10 shadow-sm flex items-center justify-center">
                  <img 
                    src="/final-cwn-image.jpeg" 
                    alt="CWN Grows With Children" 
                    className="w-full h-full object-cover object-center rounded-2xl mix-blend-multiply opacity-95"
                  />
                </div>

              </div>
                
              {/* Footer Section inside Section 3 wrapper */}
              <div className="pt-6 border-t border-[#23351a]/15">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6">
                  
                  <div className="space-y-1 text-center lg:text-left">
                    <Link to="/" className="inline-flex items-center space-x-3">
                      <img 
                        src="/leave.jpeg" 
                        alt="" 
                        aria-hidden="true"
                        className="w-7 h-7 object-contain shrink-0 mix-blend-multiply opacity-95" 
                      />
                      <div className="flex flex-col text-left">
                        <span className="font-serif font-bold text-base text-[#1a2b13] leading-none">Magnifying</span>
                        <span className="font-serif font-semibold text-base text-[#28421c] leading-none mt-1">Children's Horizons</span>
                      </div>
                    </Link>
                    <p className="text-[10px] text-[#2c3e24] font-bold uppercase tracking-widest pl-10">
                      NATURE • CHARACTER • A BRIGHTER TOMORROW
                    </p>
                  </div>
      
                  <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider font-extrabold text-[#28421c]">
                    <Link to="/" className="hover:text-[#1a2b13] transition">Home</Link>
                    <Link to="/books" className="hover:text-[#1a2b13] transition">Books</Link>
                    <Link to="/cwn/pathways" className="hover:text-[#1a2b13] transition">Character with Nature™</Link>
                    <Link to="/about" className="hover:text-[#1a2b13] transition">About Us</Link>
                    <Link to="/collaborations" className="hover:text-[#1a2b13] transition">Collaborations</Link>
                    <Link to="/contact" className="hover:text-[#1a2b13] transition">Contact</Link>
                  </div>
      
                  <div className="flex items-center space-x-2.5">
                    <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </a>
                    <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    <a href="#youtube" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
      
                </div>
      
                <div className="pt-4 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#384a30] font-semibold gap-2">
                  <p>© 2026 Magnifying Children's Horizons. All rights reserved.</p>
                  <div className="flex items-center space-x-4">
                    <a href="#privacy" className="hover:underline">Privacy Policy</a>
                    <a href="#terms" className="hover:underline">Terms of Use</a>
                    <a href="#credits" className="hover:underline">Site by Pixel Designer Agency</a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </ScrollFade>
      </div>
    </div>
  );
}