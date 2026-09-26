import React from 'react';
import { Link } from 'react-router-dom';
import ScrollFade from './ScrollFade';

export default function Collaboration() {
  return (
    <div className="bg-[#fbfbf9] min-h-screen text-[#1b2718] relative overflow-x-hidden selection:bg-[#3c5e2a] selection:text-white font-sans flex flex-col justify-between">
      
      <div>
        {/* PROFESSIONAL AMBIENT BACKGROUND GLOWS & ORBS */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#87a96b]/10 to-[#3c5e2a]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>

        <div className="absolute top-[60%] right-10 w-[400px] h-[400px] bg-gradient-to-br from-[#c2d0b7]/20 to-[#4a6b35]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* CUSTOM CSS FOR ELITE ANIMATIONS */}
        <style>{`
          @keyframes professional-flight {
            0% {
              transform: translate(-10vw, 20vh) scale(0.7) rotate(10deg);
              opacity: 0;
            }
            15% {
              opacity: 1;
            }
            50% {
              transform: translate(45vw, -5vh) scale(1) rotate(-8deg);
            }
            85% {
              opacity: 1;
            }
            100% {
              transform: translate(105vw, 15vh) scale(0.8) rotate(12deg);
              opacity: 0;
            }
          }

          @keyframes wing-flap {
            0%, 100% {
              transform: scaleX(1) rotate(0deg);
            }
            50% {
              transform: scaleX(0.3) rotate(15deg);
            }
          }

          @keyframes fairy-glow {
            0%, 100% {
              filter:
                drop-shadow(0 0 8px rgba(163, 230, 53, 0.8))
                drop-shadow(0 0 20px rgba(132, 204, 22, 0.4));
            }

            50% {
              filter:
                drop-shadow(0 0 16px rgba(190, 242, 100, 1))
                drop-shadow(0 0 30px rgba(74, 222, 128, 0.6));
            }
          }

          .animate-elite-fairy {
            animation:
              professional-flight 16s cubic-bezier(0.37, 0, 0.63, 1) infinite,
              fairy-glow 3s ease-in-out infinite;
          }

          .animate-wings {
            animation: wing-flap 0.25s ease-in-out infinite alternate;
            transform-origin: center;
          }
        `}</style>

        {/* =========================================================
            1. HERO SECTION
        ========================================================= */}
        <section className="relative w-full pt-0 pb-0">
          <div className="relative w-full rounded-none overflow-hidden h-[25vh] sm:h-[30vh] lg:h-[35vh] flex items-center justify-center bg-[#162211]">

            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/collaboration-hero.png" 
                alt="Collaborations Header" 
                className="w-full h-full object-cover object-center transform scale-100 filter brightness-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#162211]/80 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-md">
                Collaborations
              </h1>

              <div className="flex items-center justify-center space-x-2 pt-1">
                <div className="w-8 h-px bg-white/40"></div>

                <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.25em] uppercase text-lime-200/90 drop-shadow">
                  STORIES THAT CONNECT WORLDS
                </span>

                <div className="w-8 h-px bg-white/40"></div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            ANIMATED FAIRY
        ========================================================= */}
        <div className="relative w-full h-0 overflow-visible z-40 pointer-events-none">
          <div className="absolute top-2 left-0 animate-elite-fairy flex items-center">

            <div className="flex space-x-1.5 mr-2 opacity-80">
              <div
                className="w-1.5 h-1.5 bg-lime-300 rounded-full animate-ping"
                style={{ animationDuration: '1.5s' }}
              ></div>

              <div className="w-2 h-2 bg-emerald-200 rounded-full blur-[1px]"></div>

              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>

            <svg
              className="w-9 h-9 text-lime-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                className="animate-wings origin-right fill-lime-300/80 backdrop-blur"
                d="M12 12C12 12 6 5 3 7C0 9 4 15 12 12Z"
              />

              <path
                className="animate-wings origin-left fill-lime-300/80 backdrop-blur"
                d="M12 12C12 12 18 5 21 7C24 9 20 15 12 12Z"
              />

              <circle cx="12" cy="12" r="3" className="fill-white" />

              <path
                d="M12 8V16M9 11H15"
                stroke="#162211"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>

            <div className="ml-2 w-1.5 h-1.5 bg-lime-400 rounded-full blur-[1px]"></div>
          </div>
        </div>


        {/* =========================================================
            2. MIDDLE SECTION
        ========================================================= */}
        <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-20 bg-[#edf2eb] border-b border-[#23351a]/10 relative overflow-hidden shadow-inner mt-2">

          <ScrollFade delay={80}>

            <div className="max-w-[95rem] mx-auto space-y-6 sm:space-y-8">

              {/* HEADER */}
              <div className="text-center space-y-2 max-w-3xl mx-auto">

                <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#355322]">
                  BLOSSOM IN NATURE
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1e3319]">
                  One Story. Two Perspectives.
                </h3>

                <p className="text-base sm:text-lg text-[#1b2718] font-semibold leading-relaxed pt-1">
                  Blossom in Nature stories are created in interconnected pairs, offering two perspectives on a shared theme — one from the human world and the other from the world of nature and its elemental beings.
                </p>

              </div>


              {/* =====================================================
                  DESKTOP / LARGE SCREEN LAYOUT
                  This keeps your current desktop design.
              ====================================================== */}
              <div className="hidden lg:grid grid-cols-12 gap-6 lg:gap-4 items-center justify-center pt-2">

                {/* LEFT BOOK */}
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                  <div className="w-[140px] sm:w-[170px] transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">

                    <img 
                      src="/bookcover-aboutpage.png" 
                      alt="Femi's Promise Book Cover" 
                      className="w-full h-auto object-cover rounded-r-lg rounded-l-sm"
                    />

                  </div>
                </div>


                {/* CENTER CONTENT */}
                <div className="lg:col-span-8 space-y-6 px-2 sm:px-4">

                  <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12 text-left">

                    {/* FEMI */}
                    <div className="space-y-3">

                      <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1e3319]">
                        Femi’s Promise
                      </h4>

                      <p className="text-[10px] sm:text-[11px] font-extrabold text-[#355322] uppercase tracking-wider">
                        THE HUMAN PERSPECTIVE
                      </p>

                      <div className="w-6 h-0.5 bg-[#355322]/40 my-1"></div>

                      <p className="text-base sm:text-lg text-[#1b2718] font-semibold leading-relaxed">
                        Through everyday challenges and quiet moments of reflection, Femi learns how staying true to himself can change the way he sees the world — and how others see him.
                      </p>

                      <p className="text-sm sm:text-base lg:text-lg text-[#355322] font-bold italic pt-1">
                        A child’s story of honesty, courage, and finding the strength to speak from the heart.
                      </p>

                    </div>


                    {/* LUNA */}
                    <div className="space-y-3">

                      <h4 className="font-serif font-bold text-lg sm:text-xl text-[#1e3319]">
                        Luna’s Threads of Light
                      </h4>

                      <p className="text-[10px] sm:text-[11px] font-extrabold text-[#355322] uppercase tracking-wider">
                        THE ELEMENTAL PERSPECTIVE
                      </p>

                      <div className="w-6 h-0.5 bg-[#355322]/40 my-1"></div>

                      <p className="text-base sm:text-lg text-[#1b2718] font-semibold leading-relaxed">
                        High above the Earth, Luna the moon fairy learns that when you reconnect with who you truly are, your light can guide others through their hardest moments.
                      </p>

                      <p className="text-sm sm:text-base lg:text-lg text-[#355322] font-bold italic pt-1">
                        A gentle fairy tale about discovering your true light and the courage it inspires.
                      </p>

                    </div>

                  </div>


                  {/* BADGE */}
                  <div className="flex flex-col items-center justify-center space-y-2 pt-2">

                    <div className="inline-flex items-center space-x-2 bg-[#dfebd9] border border-[#3c5e2a]/25 px-3.5 py-1 rounded-full shadow-sm">

                      <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.25em] uppercase text-[#355322]">
                        THE FIRST PAIRED STORIES
                      </span>

                    </div>

                    <div className="flex items-center space-x-2 text-[#3c5e2a]">

                      <div className="w-10 h-px bg-[#3c5e2a]/30"></div>

                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8 c0-4.4,3.6-8,8-8s8,3.6,8,8C20,16.4,16.4,20,12,20z"/>
                      </svg>

                      <div className="w-10 h-px bg-[#3c5e2a]/30"></div>

                    </div>

                  </div>

                </div>


                {/* RIGHT BOOK */}
                <div className="lg:col-span-2 flex justify-center lg:justify-start">

                  <div className="w-[140px] sm:w-[170px] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">

                    <img 
                      src="/2-bookcover-aboutpage.png" 
                      alt="Luna's Threads of Light Book Cover" 
                      className="w-full h-auto object-cover rounded-l-lg rounded-r-sm"
                    />

                  </div>

                </div>

              </div>


              {/* =====================================================
                  MOBILE / SMALL SCREEN LAYOUT
                  
                  ORDER:
                  1. Femi cover
                  2. Femi explanation
                  3. Luna cover
                  4. Luna explanation
                  5. Paired Stories badge
              ====================================================== */}
              <div className="lg:hidden flex flex-col items-center pt-2">

                {/* FEMI BOOK COVER */}
                <div className="w-[145px] sm:w-[175px] mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">

                  <img 
                    src="/bookcover-aboutpage.png" 
                    alt="Femi's Promise Book Cover" 
                    className="w-full h-auto object-cover rounded-r-lg rounded-l-sm"
                  />

                </div>


                {/* FEMI EXPLANATION */}
                <div className="w-full max-w-xl text-center mt-6 space-y-3">

                  <h4 className="font-serif font-bold text-xl text-[#1e3319]">
                    Femi’s Promise
                  </h4>

                  <p className="text-[10px] font-extrabold text-[#355322] uppercase tracking-[0.15em]">
                    THE HUMAN PERSPECTIVE
                  </p>

                  <div className="w-8 h-0.5 bg-[#355322]/40 mx-auto"></div>

                  <p className="text-base sm:text-lg text-[#1b2718] font-semibold leading-relaxed">
                    Through everyday challenges and quiet moments of reflection, Femi learns how staying true to himself can change the way he sees the world — and how others see him.
                  </p>

                  <p className="text-sm sm:text-base text-[#355322] font-bold italic leading-relaxed pt-1">
                    A child’s story of honesty, courage, and finding the strength to speak from the heart.
                  </p>

                </div>


                {/* SMALL DIVIDER BEFORE LUNA */}
                <div className="flex items-center justify-center w-full max-w-xs gap-3 my-7">

                  <div className="flex-1 h-px bg-[#3c5e2a]/20"></div>

                  <div className="w-1.5 h-1.5 rounded-full bg-[#3c5e2a]/50"></div>

                  <div className="flex-1 h-px bg-[#3c5e2a]/20"></div>

                </div>


                {/* LUNA BOOK COVER
                    THIS NOW APPEARS DIRECTLY AFTER FEMI'S WRITE-UP */}
                <div className="w-[145px] sm:w-[175px] mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl">

                  <img 
                    src="/2-bookcover-aboutpage.png" 
                    alt="Luna's Threads of Light Book Cover" 
                    className="w-full h-auto object-cover rounded-l-lg rounded-r-sm"
                  />

                </div>


                {/* LUNA EXPLANATION */}
                <div className="w-full max-w-xl text-center mt-6 space-y-3">

                  <h4 className="font-serif font-bold text-xl text-[#1e3319]">
                    Luna’s Threads of Light
                  </h4>

                  <p className="text-[10px] font-extrabold text-[#355322] uppercase tracking-[0.15em]">
                    THE ELEMENTAL PERSPECTIVE
                  </p>

                  <div className="w-8 h-0.5 bg-[#355322]/40 mx-auto"></div>

                  <p className="text-base sm:text-lg text-[#1b2718] font-semibold leading-relaxed">
                    High above the Earth, Luna the moon fairy learns that when you reconnect with who you truly are, your light can guide others through their hardest moments.
                  </p>

                  <p className="text-sm sm:text-base text-[#355322] font-bold italic leading-relaxed pt-1">
                    A gentle fairy tale about discovering your true light and the courage it inspires.
                  </p>

                </div>


                {/* MOBILE BADGE */}
                <div className="flex flex-col items-center justify-center space-y-2 pt-7">

                  <div className="inline-flex items-center space-x-2 bg-[#dfebd9] border border-[#3c5e2a]/25 px-3.5 py-1.5 rounded-full shadow-sm">

                    <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] uppercase text-[#355322]">
                      THE FIRST PAIRED STORIES
                    </span>

                  </div>

                  <div className="flex items-center space-x-2 text-[#3c5e2a]">

                    <div className="w-10 h-px bg-[#3c5e2a]/30"></div>

                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8 c0-4.4,3.6-8,8-8s8,3.6,8,8C20,16.4,16.4,20,12,20z"/>
                    </svg>

                    <div className="w-10 h-px bg-[#3c5e2a]/30"></div>

                  </div>

                </div>

              </div>


              {/* =====================================================
                  BOTTOM STATEMENT & CTA
                  Works for both desktop and mobile.
              ====================================================== */}
              <div className="max-w-2xl mx-auto text-center space-y-4 pt-2">

                <p className="text-base sm:text-lg text-[#1b2718] font-semibold leading-relaxed">
                  Femi and Luna are the first interconnected pair in the Paired Perspectives collection. Future stories will continue to explore shared themes through the human and natural worlds.
                </p>

                <div>

                  <a 
                    href="https://blossominnature.com/explore-our-books" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-xs uppercase tracking-widest px-7 py-3 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    EXPLORE THE PAIRED STORIES →
                  </a>

                </div>

              </div>

            </div>

          </ScrollFade>

        </section>


        {/* =========================================================
            3. CREATIVE PERSPECTIVES SECTION
        ========================================================= */}
        <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-20 bg-[#fbfbf9] text-center relative">

          <ScrollFade delay={80}>

            <div className="max-w-3xl mx-auto space-y-3">

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1e3319]">
                Two Creative Perspectives, One Shared Vision
              </h3>

              <p className="text-base sm:text-lg text-[#1b2718] font-semibold leading-relaxed max-w-2xl mx-auto">
                Blossom in Nature is a creative collaboration between Tolulope Okudolo of Magnifying Children's Horizons and Angela Ehrich of Nature&Children. Together, they bring different creative perspectives to stories exploring children, nature, and unseen natural elements.
              </p>

            </div>

          </ScrollFade>

        </section>


        {/* =========================================================
            4. FOOTER BANNER
        ========================================================= */}
        <section className="relative pt-12 pb-12 px-4 sm:px-6 lg:px-20 overflow-hidden bg-[#eaf0e8] border-t border-[#23351a]/10">

          <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40">

            <img 
              src="/collab.png" 
              alt="Nature Scenery Banner" 
              className="w-full h-20 sm:h-28 object-cover object-bottom"
            />

          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">

            <ScrollFade delay={80}>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1e3319]">
                Discover More From Blossom in Nature
              </h3>

              <p className="text-base sm:text-lg text-[#1b2718] font-semibold leading-relaxed max-w-xl mx-auto">
                Explore the philosophy behind Paired Perspectives, discover the books and follow the growing collection of stories connecting the human and natural worlds.
              </p>

              <div className="pt-2">

                <a 
                  href="https://blossominnature.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-xs uppercase tracking-widest px-7 py-3 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  VISIT BLOSSOM IN NATURE →
                </a>

              </div>

            </ScrollFade>

          </div>

        </section>

      </div>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <div className="pt-6 border-t border-[#23351a]/15 bg-[#f5f1e8]">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 px-4 sm:px-6 lg:px-10 max-w-[90rem] mx-auto">

          {/* LOGO */}
          <div className="flex items-center space-x-3 text-center lg:text-left">

            <Link to="/" className="flex items-center space-x-3 group shrink-0">

              <div className="flex items-center justify-center shrink-0">

                <img 
                  src="/navbar-image.png" 
                  alt="MCH Logo" 
                  className="h-10 w-auto object-contain group-hover:scale-105 transition duration-300"
                />

              </div>

            </Link>

            <div className="flex flex-col text-left">

              <span className="font-serif font-bold text-base text-[#1a2b13] leading-none">
                Magnifying Children's Horizons
              </span>

              <span className="text-[10px] text-[#2c3e24] font-bold uppercase tracking-widest mt-1">
                NATURE • CHARACTER • A BRIGHTER TOMORROW
              </span>

            </div>

          </div>


          {/* NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs uppercase tracking-wider font-extrabold text-[#28421c]">

            <Link to="/" className="hover:text-[#1a2b13] transition">
              Home
            </Link>

            <Link to="/books" className="hover:text-[#1a2b13] transition">
              Books
            </Link>

            <Link to="/cwn/pathways" className="hover:text-[#1a2b13] transition">
              Character with Nature™
            </Link>

            <Link to="/about" className="hover:text-[#1a2b13] transition">
              About Us
            </Link>

            <Link to="/collaborations" className="hover:text-[#1a2b13] transition">
              Collaborations
            </Link>

            <Link to="/contact" className="hover:text-[#1a2b13] transition">
              Contact
            </Link>

          </div>


          {/* SOCIAL ICONS */}
          <div className="flex items-center space-x-2.5 shrink-0">

            <a 
              href="https://www.instagram.com/magnifyingchildrenshorizons/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition"
            >

              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>

            </a>


            <a 
              href="https://www.facebook.com/magnifyingchildrenshorizons" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook" 
              className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition"
            >

              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>

            </a>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="pt-4 pb-6 px-4 sm:px-6 lg:px-10 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#384a30] font-semibold gap-2 max-w-[90rem] mx-auto text-center sm:text-left">

          <p>
            © 2026 Magnifying Children's Horizons. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">

            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>

            <a href="#terms" className="hover:underline">
              Terms of Use
            </a>

            <a href="#credits" className="hover:underline">
              Site by Pixel Designer Agency
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}
