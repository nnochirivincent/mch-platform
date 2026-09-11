import React from 'react';
import { Link } from 'react-router-dom';
import ScrollFade from './ScrollFade';

export default function Books() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-0 pb-0">
        <div className="relative w-full rounded-none overflow-hidden h-[25vh] sm:h-[30vh] lg:h-[35vh] flex items-center justify-center">
          
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#162211]">
            <img 
              src="/cwn-image.jpeg" 
              alt="Our Books Header" 
              className="w-full h-full object-cover object-center transform scale-100"
            />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a2b13] tracking-tight drop-shadow-sm">
              OUR BOOKS
            </h1>
          </div>

        </div>
      </section>

      {/* Introductory Heading */}
      <section className="pt-8 pb-4 sm:pt-10 sm:pb-6 px-4 sm:px-6 lg:px-8">
        <ScrollFade delay={80}>
          <div className="text-center max-w-3xl mx-auto space-y-2 px-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1e3319] tracking-tight">
              Discover the Weaverton Series
            </h2>
            <p className="text-xs sm:text-sm text-[#1b2718] font-medium leading-relaxed">
              Step into a world where nature is alive with purpose.<br className="hidden sm:inline" />
              Through the Weaverton Series, children encounter nature beings, unexpected challenges and discoveries that encourage courage, creativity, self-trust and a deeper connection with the natural world.
            </p>
          </div>
        </ScrollFade>
      </section>

      {/* BOOK 1: The Face in the Mountain */}
      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 px-4 sm:px-6 lg:px-8 border-b border-[#23351a]/15">
        <ScrollFade delay={80}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              
              {/* Book Cover */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-44 sm:w-52 shadow-xl rounded-xl overflow-hidden transform transition hover:scale-[1.02]">
                  <img 
                    src="/TFITM.jpeg" 
                    alt="The Face in the Mountain Book Cover" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Book Info & Trailer */}
              <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 items-center">
                
                <div className="space-y-2.5 text-left">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1e3319]">
                      The Face in the Mountain
                    </h3>
                    <p className="text-[11px] uppercase tracking-widest font-extrabold text-[#355322] mt-0.5">
                      Ages 6–9
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#1b2718] font-medium leading-relaxed">
                    When Bena’s father must leave Vanger Creek, Bena worries he won’t remember everything he has been taught. As unexpected challenges arise, he must learn to trust what he knows, think creatively and discover what he is capable of.
                  </p>

                  <p className="font-serif italic text-xs sm:text-sm font-bold text-[#2c441c]">
                    A story about self-trust, creativity and finding the courage to meet a challenge in your own way.
                  </p>

                  <div className="pt-1">
                    <Link 
                      to="#"
                      className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-xl shadow transition"
                    >
                      DISCOVER / BUY THE BOOK →
                    </Link>
                  </div>
                </div>

                {/* Trailer Thumbnail Box */}
                <div className="space-y-2 text-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video flex items-center justify-center group cursor-pointer">
                    <img 
                      src="/cwn-image-3.png" 
                      alt="The Face in the Mountain Trailer Preview" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#1e3319] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                        <svg className="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link 
                      to="#"
                      className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold tracking-widest text-[#355322] uppercase border border-[#355322]/30 px-3 py-1.5 rounded-xl hover:bg-[#1e3319]/5 transition shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      <span>WATCH THE TRAILER</span>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </ScrollFade>
      </section>

      {/* BOOK 2: The Festival Shoes (Tighter top/bottom padding) */}
      <section className="pt-6 pb-8 sm:pt-8 sm:pb-10 px-4 sm:px-6 lg:px-8 border-b border-[#23351a]/15">
        <ScrollFade delay={80}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              
              {/* Trailer/Video on Left */}
              <div className="lg:col-span-5 space-y-2 text-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video flex items-center justify-center group cursor-pointer">
                  <img 
                    src="/cwn-image-4.png" 
                    alt="The Festival Shoes Trailer Preview" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#1e3319] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <svg className="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <Link 
                    to="#"
                    className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold tracking-widest text-[#355322] uppercase border border-[#355322]/30 px-3 py-1.5 rounded-xl hover:bg-[#1e3319]/5 transition shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    <span>WATCH THE TRAILER</span>
                  </Link>
                </div>
              </div>

              {/* Details in Center/Middle */}
              <div className="lg:col-span-4 space-y-2.5 text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1e3319]">
                    The Festival Shoes
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest font-extrabold text-[#355322] mt-0.5">
                    Ages 6–9
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#1b2718] font-medium leading-relaxed">
                  In Weaverton, fairies and nature beings are busy preparing for an important festival. When an unexpected challenge arises, Jaramie must draw on his courage, determination and self-trust to find a way forward.
                </p>

                <p className="font-serif italic text-xs sm:text-sm font-bold text-[#2c441c]">
                  A story about perseverance, resourcefulness and discovering what can happen when we don’t give up.
                </p>

                <div className="pt-1">
                  <Link 
                    to="#"
                    className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-xl shadow transition"
                  >
                    DISCOVER / BUY THE BOOK →
                  </Link>
                </div>
              </div>

              {/* Book Cover on Right */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="w-40 sm:w-48 shadow-xl rounded-xl overflow-hidden transform transition hover:scale-[1.02]">
                  <img 
                    src="/TFS.jpeg" 
                    alt="The Festival Shoes Book Cover" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </ScrollFade>
      </section>

      {/* BOTTOM SECTION: Two Side-by-Side Groups */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#23351a]/15">
        <ScrollFade delay={80}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8">
              
              {/* Left Group: Continue the Adventure */}
              <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-1.5 text-left">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1e3319]">
                    Continue the Adventure
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1b2718] font-medium leading-relaxed">
                    Explore free colouring pages, games and activities inspired by the Weaverton Series.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-1 flex items-center justify-center">
                    <img src="/activity-book-image.jpeg" alt="Coloring Book" className="w-full h-28 object-contain rounded-lg" />
                  </div>
                  <div className="p-1 flex items-center justify-center">
                    <img src="/cwn-image-3.png" alt="Board Game Activity" className="w-full h-28 object-cover rounded-lg" />
                  </div>
                </div>

                <div className="pt-1 text-left">
                  <Link 
                    to="#"
                    className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-xl shadow transition"
                  >
                    EXPLORE FREE RESOURCES →
                  </Link>
                </div>
              </div>

              {/* Right Group: More Stories to Discover */}
              <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
                <div className="space-y-1.5 text-left">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1e3319]">
                    More Stories to Discover
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1b2718] font-medium leading-relaxed">
                    Explore books and creative collaborations beyond the Weaverton Series — including stories that invite children to experience nature, character and the world from different perspectives.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col items-center text-center space-y-1.5">
                    <div className="h-28 w-full flex items-center justify-center">
                      <img src="/cwn-image-4.png" alt="Luna's Threads of Light" className="h-full object-contain rounded" />
                    </div>
                    <span className="font-serif font-bold text-xs text-[#1e3319]">Luna's Threads of Light</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-1.5">
                    <div className="h-28 w-full flex items-center justify-center">
                      <img src="/cwn-image-5.png" alt="Femi's Promise" className="h-full object-contain rounded" />
                    </div>
                    <span className="font-serif font-bold text-xs text-[#1e3319]">Femi's Promise</span>
                  </div>
                </div>

                <div className="pt-1 text-left">
                  <Link 
                    to="#"
                    className="inline-block bg-[#8a4b6c] hover:bg-[#723c58] text-white font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-xl shadow transition"
                  >
                    EXPLORE COLLABORATIONS →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </ScrollFade>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#fcfbf9]">
        <ScrollFade delay={80}>
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4">
              
              <div className="space-y-1 text-center lg:text-left">
                <Link to="/" className="inline-flex items-center space-x-3">
                  <img 
                    src="/leave.jpeg" 
                    alt="" 
                    aria-hidden="true"
                    className="w-6 h-6 object-contain shrink-0 mix-blend-multiply opacity-95" 
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-serif font-bold text-base text-[#1a2b13] leading-none">Magnifying</span>
                    <span className="font-serif font-semibold text-base text-[#28421c] leading-none mt-1">Children's Horizons</span>
                  </div>
                </Link>
                <p className="text-[10px] text-[#2c3e24] font-bold uppercase tracking-widest pl-9">
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
  
              <div className="flex items-center space-x-2">
                <a href="#instagram" aria-label="Instagram" className="w-7 h-7 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook" className="w-7 h-7 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#youtube" aria-label="YouTube" className="w-7 h-7 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
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
        </ScrollFade>
      </footer>
    </div>
  );
}