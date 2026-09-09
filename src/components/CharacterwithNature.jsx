import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import ScrollFade from './ScrollFade';



export default function About() {
   return (
    <div className="bg-[#fcfbf9] min-h-screen space-y-8 pb-10 overflow-hidden">
      
      {/* CHARACTER WITH NATURE™ SECTION */}
      <ScrollFade delay={80}>
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl shadow-xl border border-emerald-950/20 py-4 px-5 sm:px-8 lg:px-10 space-y-5">
            
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/cream.jpeg" 
                alt="Cream background" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 space-y-4">
              
              <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                
                <div className="lg:col-span-5 flex justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-[#23351a]/10 w-[240px] sm:w-[260px] lg:w-full aspect-[4/3] lg:aspect-[4/3]">
                    <img 
                      src="/cwn-image-1.png" 
                      alt="Child exploring stream and leaves" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-2.5 text-left">
                  <div className="space-y-0.5">
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#23351a] font-bold tracking-tight">
                      Character with Nature™
                    </h2>
                    <p className="font-serif italic text-[#3c5629] text-xs sm:text-sm font-bold">
                      Tapping into Nature's Wisdom to Help Children Grow From Within
                    </p>
                  </div>

                  {/* Enhanced paragraph text visibility */}
                  <div className="space-y-1.5 text-[#1f2d18] text-xs leading-relaxed font-medium">
                    <p>
                      <strong className="font-bold text-[#192713]">Character with Nature™</strong> is a nature-based character development programme that helps children discover meaningful connections between the natural world, their choices and their inner lives.
                    </p>
                    <p>
                      Through stories, nature explorations, observation and reflection, children are encouraged to discover positive character traits, deepen their spiritual awareness and experience for themselves some of the principles at work in nature and in life.
                    </p>
                  </div>

                  <div className="pt-1.5 border-t border-[#23351a]/10 space-y-1.5">
                    <h4 className="text-[9px] uppercase tracking-widest font-extrabold text-[#23351a] text-center">
                      HOW CHILDREN EXPLORE WITH CWN
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-0.5">
                      
                      <div className="flex flex-col items-center text-center max-w-[110px] space-y-0.5">
                        <div className="w-8 h-8 rounded-full bg-[#1e3215] flex items-center justify-center shadow-md border border-[#486337]">
                          <svg className="w-4 h-4 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold text-[#23351a] text-[9px] uppercase tracking-wider">DISCOVER</h5>
                          {/* Enhanced sub-label visibility */}
                          <p className="text-[9px] text-[#2c3d26] font-semibold leading-tight">Notice and explore nature</p>
                        </div>
                      </div>

                      <div className="hidden sm:flex text-[#355322] font-bold text-sm pb-3">
                        →
                      </div>

                      <div className="flex flex-col items-center text-center max-w-[110px] space-y-0.5">
                        <div className="w-8 h-8 rounded-full bg-[#1e3215] flex items-center justify-center shadow-md border border-[#486337]">
                          <svg className="w-4 h-4 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7 7 0 0014 0v-2a1.5 1.5 0 00-3 0m-3-6V14m0-2.5a1.5 1.5 0 113 0" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold text-[#23351a] text-[9px] uppercase tracking-wider">CONNECT</h5>
                          {/* Enhanced sub-label visibility */}
                          <p className="text-[9px] text-[#2c3d26] font-semibold leading-tight">Make connections & find meaning</p>
                        </div>
                      </div>

                      <div className="hidden sm:flex text-[#355322] font-bold text-sm pb-3">
                        →
                      </div>

                      <div className="flex flex-col items-center text-center max-w-[110px] space-y-0.5">
                        <div className="w-8 h-8 rounded-full bg-[#1e3215] flex items-center justify-center shadow-md border border-[#486337]">
                          <svg className="w-4 h-4 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold text-[#23351a] text-[9px] uppercase tracking-wider">CREATE</h5>
                          {/* Enhanced sub-label visibility */}
                          <p className="text-[9px] text-[#2c3d26] font-semibold leading-tight">Bring discoveries to daily life</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="pt-1 text-center lg:text-left">
                    <Link 
                      to="/cwn/pathways" 
                      className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[9px] uppercase tracking-widest px-3.5 py-1.5 rounded-lg shadow transition"
                    >
                      Discover Character With Nature™
                    </Link>
                  </div>

                </div>
              </div>

              <div className="py-2.5 border-t border-b border-[#23351a]/15 text-center">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-extrabold tracking-widest text-[#24371b] uppercase">
                  <span>Nature</span>
                  <span className="text-[#658a4c] text-sm">•</span>
                  <span>Character</span>
                  <span className="text-[#658a4c] text-sm">•</span>
                  <span>Inner Awareness</span>
                  <span className="text-[#658a4c] text-sm">•</span>
                  <span>Spiritual Growth</span>
                </div>
              </div>

              <div className="space-y-4 pt-0.5">
                <div className="text-center max-w-2xl mx-auto space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#23351a]">
                    Discovering Nature’s Laws
                  </h3>
                  {/* Enhanced lead description text visibility */}
                  <p className="text-[#1f2d18] text-xs font-medium leading-relaxed">
                    At the heart of Character with Nature™ are universal laws and principles that children can discover through patterns and processes in the natural world.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-0.5">
                  
                  {/* Card 1: Cause & Effect */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                    <div className="w-full h-36 bg-emerald-950/5 relative overflow-hidden flex items-center justify-center p-2">
                      <img 
                        src="/cwn-image-2.png" 
                        alt="Cause and Effect" 
                        className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-3 space-y-1 text-center flex-1 flex flex-col justify-between">
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#23351a]">Cause & Effect</h4>
                      {/* Enhanced card description visibility */}
                      <p className="text-[#1f2d18] text-[10px] font-semibold">
                        What we do influences what happens next.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Like Attracts Like */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                    <div className="w-full h-36 bg-emerald-950/5 relative overflow-hidden flex items-center justify-center p-2">
                      <img 
                        src="/cwn-image-3.png" 
                        alt="Like Attracts Like" 
                        className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-3 space-y-1 text-center flex-1 flex flex-col justify-between">
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#23351a]">Like Attracts Like</h4>
                      {/* Enhanced card description visibility */}
                      <p className="text-[#1f2d18] text-[10px] font-semibold">
                        What we nurture influences what grows around us.
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Gravity */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                    <div className="w-full h-36 bg-emerald-950/5 relative overflow-hidden flex items-center justify-center p-2">
                      <img 
                        src="/cwn-image-4.png" 
                        alt="Gravity" 
                        className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-3 space-y-1 text-center flex-1 flex flex-col justify-between">
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#23351a]">Gravity</h4>
                      {/* Enhanced card description visibility */}
                      <p className="text-[#1f2d18] text-[10px] font-semibold">
                        What we carry within influences our direction.
                      </p>
                    </div>
                  </div>

                  {/* Card 4: Balance */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 flex flex-col">
                    <div className="w-full h-36 bg-emerald-950/5 relative overflow-hidden flex items-center justify-center p-2">
                      <img 
                        src="/cwn-image-5.png" 
                        alt="Balance" 
                        className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-3 space-y-1 text-center flex-1 flex flex-col justify-between">
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#23351a]">Balance</h4>
                      {/* Enhanced card description visibility */}
                      <p className="text-[#1f2d18] text-[10px] font-semibold">
                        Nature shows us patterns of harmony.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="pt-1 text-center">
                  <Link 
                    to="/cwn/laws" 
                    className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-lg shadow transition"
                  >
                    Explore The Laws & Our Approach
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </section>
      </ScrollFade>
    </div>
  );
}