import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollFade from '../components/ScrollFade';

export default function CombinedComponent() {
  return (
    <div className="w-full">
      {/* 4. CHARACTER WITH NATURE / PATHWAYS SECTION */}
      <ScrollFade delay={85}>
        <section className="relative w-full bg-[#fcf9f2] pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="bg-[#f2ecdc] border border-[#23351a]/20 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden space-y-6">
              
              {/* UPPER ROW OR INTERMEDIATE CONTENT SNIPPET */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="hidden sm:flex text-[#28421c] font-extrabold text-sm pb-3">
                  →
                </div>

                <div className="flex flex-col items-center text-center max-w-[110px] space-y-0.5">
                  <div className="w-8 h-8 rounded-full bg-[#1e3215] flex items-center justify-center shadow-md border border-[#486337]">
                    <svg className="w-4 h-4 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1a2b13] text-[9px] uppercase tracking-wider">CREATE</h5>
                    <p className="text-[8px] text-[#2c3e24] font-semibold leading-tight">Bring discoveries to daily life</p>
                  </div>
                </div>
              </div>

              {/* LOWER ROW: AGE PROGRESSION IMAGE WITH AGE GAPS IMPLEMENTED EXACTLY UNDERNEATH */}
              <div id="explore-cwn" className="pt-3 border-t border-[#23351a]/25 text-center space-y-3">
                
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1.5 text-[#28421c] text-xs">
                    <span className="text-xs">🌿</span>
                    <h4 className="font-serif italic text-xs sm:text-sm font-bold text-[#1a2b13] uppercase tracking-wider">
                      DESIGNED TO GROW WITH YOUR CHILD
                    </h4>
                  </div>
                </div>

                <div className="w-full px-2">
                  <div className="w-full overflow-hidden max-w-3xl mx-auto space-y-2">
                    <img 
                      src="/children-section-image.jpeg" 
                      alt="Designed to grow with your child age progression silhouettes" 
                      className="w-full h-auto object-cover object-center mx-auto mix-blend-multiply opacity-100 max-h-[160px]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    to="/cwn/pathways" 
                    className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-white font-sans text-[10px] tracking-widest font-bold uppercase px-5 py-2.5 rounded-xl shadow-lg transition-all duration-200 border border-[#486337]"
                  >
                    <span>EXPLORE CHARACTER WITH NATURE™</span>
                    <ArrowRight size={13} className="text-emerald-300" />
                  </Link>
                </div>

                <div className="py-1.5 border-t border-b border-[#23351a]/15 max-w-lg mx-auto">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] font-extrabold tracking-widest text-[#28421c] uppercase">
                    <span>Nature</span>
                    <span className="text-[#52703c]">•</span>
                    <span>Character</span>
                    <span className="text-[#52703c]">•</span>
                    <span>Inner Awareness</span>
                    <span className="text-[#52703c]">•</span>
                    <span>Spiritual Growth</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </ScrollFade>
      
      {/* 5. OUR COLLABORATION & SITE FOOTER */}
      <ScrollFade delay={95}>
        <section className="relative w-full bg-[#fcf9f2] pt-6 pb-4 border-t border-emerald-950/10">
          
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-emerald-950/20 py-8 sm:py-10 px-6 sm:px-10 lg:px-14">
              
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src="/cream.jpeg" 
                  alt="Cream background" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#23351a]/15 aspect-[4/3] bg-white/50 max-w-[320px] lg:max-w-none mx-auto">
                    <img 
                      src="/footer.jpeg" 
                      alt="Child exploring nature in collaboration with Blossom in Nature" 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3 text-left">
                  
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-extrabold tracking-widest text-[#28421c] uppercase">OUR COLLABORATION</span>
                      <span className="text-emerald-700 text-xs">🌿</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#1a2b13] font-bold tracking-tight">
                      Blossom in Nature
                    </h2>
                    
                    <p className="font-serif italic text-[#3c552a] text-xs sm:text-sm font-bold tracking-wider">
                      STORIES TOLD FROM TWO PERSPECTIVES
                    </p>
                  </div>

                  <div className="space-y-2 text-[#1e2e16] text-xs sm:text-sm leading-relaxed font-medium">
                    <p>
                      Magnifying Children's Horizons is proud to collaborate with <strong className="font-bold text-[#1a2b13]">Blossom in Nature</strong>, a children's book initiative created by Tolu Okudolo and Angela Ehrlich.
                    </p>
                    <p>
                      Through paired stories told through the eyes of a child and a nature being, children explore positive character traits and the unseen connections within nature.
                    </p>
                  </div>

                  <div className="pt-1">
                    <Link 
                      to="/collaborations" 
                      className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-white font-sans text-xs tracking-widest font-bold uppercase px-5 py-2.5 rounded-xl shadow-lg transition-all duration-200 border border-[#486337]"
                    >
                      <span>DISCOVER BLOSSOM IN NATURE</span>
                      <span className="text-emerald-300">→</span>
                    </Link>
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-4 border-t border-[#23351a]/15">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pb-5">
              
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

            <div className="pt-3 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#384a30] font-semibold gap-2">
              <p>© 2026 Magnifying Children's Horizons. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
                <a href="#terms" className="hover:underline">Terms of Use</a>
                <a href="#credits" className="hover:underline">Site by Pixel Designer Agency</a>
              </div>
            </div>

          </div>

        </section>
      </ScrollFade>
    </div>
  );
}