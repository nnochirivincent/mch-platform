import React from 'react';
import { Link } from 'react-router-dom';
import ScrollFade from './ScrollFade';

export default function Collaboration() {
  return (
    <div className="bg-[#fbfbf9] min-h-screen text-[#1b2718] relative overflow-x-hidden selection:bg-[#3c5e2a] selection:text-white">
      
      {/* PROFESSIONAL AMBIENT BACKGROUND GLOWS & ORBS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#87a96b]/10 to-[#3c5e2a]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-[60%] right-10 w-[400px] h-[400px] bg-gradient-to-br from-[#c2d0b7]/20 to-[#4a6b35]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* CUSTOM CSS FOR ELITE ANIMATIONS (Flapping Wings & Smooth Flight Path) */}
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
          0%, 100% { transform: scaleX(1) rotate(0deg); }
          50% { transform: scaleX(0.3) rotate(15deg); }
        }
        @keyframes fairy-glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(163, 230, 53, 0.8)) drop-shadow(0 0 20px rgba(132, 204, 22, 0.4)); }
          50% { filter: drop-shadow(0 0 16px rgba(190, 242, 100, 1)) drop-shadow(0 0 30px rgba(74, 222, 128, 0.6)); }
        }
        .animate-elite-fairy {
          animation: professional-flight 16s cubic-bezier(0.37, 0, 0.63, 1) infinite, fairy-glow 3s ease-in-out infinite;
        }
        .animate-wings {
          animation: wing-flap 0.25s ease-in-out infinite alternate;
          transform-origin: center;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-0 pb-0">
        <div className="relative w-full rounded-none overflow-hidden h-[25vh] sm:h-[30vh] lg:h-[35vh] flex items-center justify-center bg-[#162211]">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/collaboration-hero.png" 
              alt="Collaborations Header" 
              className="w-full h-full object-cover object-center transform scale-100 filter brightness-95"
            />
            {/* Subtle gradient overlay for professional contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#162211]/80 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-md">
              Collaborations
            </h1>
          </div>
        </div>
      </section>

      {/* TOP-NOTCH ANIMATED FAIRY FLYING ACROSS UPPER CONTENT */}
      <div className="relative w-full h-0 overflow-visible z-40 pointer-events-none">
        <div className="absolute top-2 left-0 animate-elite-fairy flex items-center">
          {/* Magical Stardust Trail */}
          <div className="flex space-x-1.5 mr-2 opacity-80">
            <div className="w-1.5 h-1.5 bg-lime-300 rounded-full animate-ping" style={{ animationDuration: '1.5s' }}></div>
            <div className="w-2 h-2 bg-emerald-200 rounded-full blur-[1px]"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>

          {/* Detailed SVG Fairy / Magical Firefly with Flapping Wings */}
          <svg className="w-9 h-9 text-lime-200" viewBox="0 0 24 24" fill="currentColor">
            {/* Left Wing */}
            <path className="animate-wings origin-right fill-lime-300/80 backdrop-blur" d="M12 12C12 12 6 5 3 7C0 9 4 15 12 12Z" />
            {/* Right Wing */}
            <path className="animate-wings origin-left fill-lime-300/80 backdrop-blur" d="M12 12C12 12 18 5 21 7C24 9 20 15 12 12Z" />
            {/* Body / Core Glow */}
            <circle cx="12" cy="12" r="3" className="fill-white" />
            <path d="M12 8V16M9 11H15" stroke="#162211" strokeWidth="1" strokeLinecap="round" />
          </svg>

          {/* Trailing Sparkle */}
          <div className="ml-2 w-1.5 h-1.5 bg-lime-400 rounded-full blur-[1px]"></div>
        </div>
      </div>

      {/* 2. INTRO SECTION: Blossom in Nature: Paired Perspectives */}
      <section className="pt-12 pb-10 px-4 sm:px-6 lg:px-12 text-center bg-[#fbfbf9] relative z-10">
        <ScrollFade delay={80}>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1e3319] tracking-tight">
              Blossom in Nature: Paired Perspectives
            </h2>
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#355322] bg-[#edf2eb] py-1 px-3 rounded-full inline-block shadow-sm">
              STORIES SEEN FROM TWO WORLDS
            </p>
            <p className="text-xs sm:text-sm text-[#2c3e24] font-medium leading-relaxed pt-2">
              Blossom in Nature stories are created in interconnected pairs, offering two perspectives on a shared theme — one from the human world and the other from the world of nature and its elemental beings.
            </p>
            <p className="text-xs sm:text-sm text-[#2c3e24] font-medium leading-relaxed">
              The human story follows a child through everyday experiences and choices, while the parallel nature story reveals another side of those experiences — including how nature may respond to human actions.
            </p>
            <p className="text-xs sm:text-sm text-[#2c3e24] font-medium leading-relaxed">
              Together, the paired stories invite children to see the connection between the human and natural worlds, how each can affect the other, and how qualities such as honesty, courage, kindness and perseverance can shape the choices we make.
            </p>
          </div>
        </ScrollFade>
      </section>

      {/* 3. MIDDLE SECTION: One Story. Two Perspectives. */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-12 bg-[#edf2eb] border-y border-[#23351a]/10 relative overflow-hidden shadow-inner">
        
        {/* Elite background watermarks */}
        <div className="absolute -right-16 -bottom-16 opacity-[0.03] pointer-events-none transform rotate-12">
          <svg className="w-[500px] h-[500px] text-[#1e3319]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3C9,20.5,11,21,13,21c7,0,9-8,9-8s-3,0-5-5Z" />
          </svg>
        </div>

        <ScrollFade delay={80}>
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1e3319]">
              One Story. Two Perspectives.
            </h3>

            {/* Book Pair Cards - Ultra-polished high-end glassmorphic presentation */}
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-2xl mx-auto pt-2">
              
              {/* Book 1: Femi's Promise */}
              <div className="space-y-3 text-center group">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white/60 backdrop-blur-md p-2 inline-block transform -rotate-1 group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500 w-full max-w-[280px] sm:max-w-[310px] ring-1 ring-[#3c5e2a]/20 group-hover:ring-[#3c5e2a]/60 group-hover:shadow-2xl">
                  <img 
                    src="/bookcover-aboutpage.png" 
                    alt="Femi's Promise Book Cover" 
                    className="w-full h-auto object-cover rounded-lg transform group-hover:scale-[1.02] transition duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1e3319]">Femi's Promise</h4>
                  <p className="text-xs font-semibold text-[#4a6b35] uppercase tracking-wider pt-0.5">The Human Perspective</p>
                </div>
              </div>

              {/* Book 2: Luna's Threads of Light */}
              <div className="space-y-3 text-center group">
                <div className="overflow-hidden rounded-2xl shadow-xl bg-white/60 backdrop-blur-md p-2 inline-block transform rotate-1 group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500 w-full max-w-[280px] sm:max-w-[310px] ring-1 ring-[#3c5e2a]/20 group-hover:ring-[#3c5e2a]/60 group-hover:shadow-2xl">
                  <img 
                    src="/2-bookcover-aboutpage.png" 
                    alt="Luna's Threads of Light Book Cover" 
                    className="w-full h-auto object-cover rounded-lg transform group-hover:scale-[1.02] transition duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1e3319]">Luna's Threads of Light</h4>
                  <p className="text-xs font-semibold text-[#4a6b35] uppercase tracking-wider pt-0.5">The Elemental Perspective</p>
                </div>
              </div>

            </div>

            <div className="max-w-xl mx-auto space-y-4 pt-3">
              <p className="text-xs sm:text-sm text-[#2c3e24] font-medium leading-relaxed">
                Femi and Luna experience the same unfolding events from different worlds. Read together, their stories reveal things that neither perspective could show on its own.
              </p>
              <div>
                <a 
                  href="https://blossominnature.com/explore-our-books" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-7 py-3 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  EXPLORE THE PAIRED STORIES →
                </a>
              </div>
            </div>

          </div>
        </ScrollFade>
      </section>

      {/* 4. CREATIVE PERSPECTIVES SECTION */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#fbfbf9] text-center relative">
        <ScrollFade delay={80}>
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1e3319]">
              Two Creative Perspectives, One Shared Vision
            </h3>
            <p className="text-xs sm:text-sm text-[#2c3e24] font-medium leading-relaxed">
              Blossom in Nature is a creative collaboration between Tolulope Okudolo of Magnifying Children's Horizons and Angela Ehrich of Nature&Children.
            </p>
            <p className="text-xs sm:text-sm text-[#2c3e24] font-medium leading-relaxed">
              Together, they bring their different creative perspectives to stories that explore the relationship between children, nature and the often unseen activity within the natural world.
            </p>
          </div>
        </ScrollFade>
      </section>

      {/* 5. FOOTER BANNER SECTION: Discover More From Blossom in Nature */}
      <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#eaf0e8] border-t border-[#23351a]/10">
        {/* Background hill/nature silhouette graphic */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-40">
          <img 
            src="/collab.png" 
            alt="Nature Scenery Banner" 
            className="w-full h-32 sm:h-48 object-cover object-bottom"
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
          <ScrollFade delay={80}>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1e3319]">
              Discover More From Blossom in Nature
            </h3>
            <p className="text-xs sm:text-sm text-[#2c3e24] font-medium leading-relaxed max-w-lg mx-auto">
              Explore the philosophy behind Paired Perspectives, discover the books and follow the growing collection of stories connecting the human and natural worlds.
            </p>
            <div className="pt-2">
              <a 
                href="https://blossominnature.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-7 py-3 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                VISIT BLOSSOM IN NATURE →
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Footer Section */}
      <div className="pt-6 border-t border-[#23351a]/15 px-4 sm:px-6 lg:px-12 bg-[#eaf0e8]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6">
          
          {/* Logo & Tagline */}
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
              <span className="font-serif font-bold text-base text-[#1a2b13] leading-none">Magnifying Children's Horizons</span>
              <span className="text-[10px] text-[#2c3e24] font-bold uppercase tracking-widest mt-1">
                NATURE • CHARACTER • A BRIGHTER TOMORROW
              </span>
            </div>
          </div>
 
          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider font-extrabold text-[#28421c]">
            <Link to="/" className="hover:text-[#1a2b13] transition">Home</Link>
            <Link to="/books" className="hover:text-[#1a2b13] transition">Books</Link>
            <Link to="/cwn/pathways" className="hover:text-[#1a2b13] transition">Character with Nature™</Link>
            <Link to="/about" className="hover:text-[#1a2b13] transition">About Us</Link>
            <Link to="/collaborations" className="hover:text-[#1a2b13] transition">Collaborations</Link>
            <Link to="/contact" className="hover:text-[#1a2b13] transition">Contact</Link>
          </div>
 
          {/* Social Icons */}
          <div className="flex items-center space-x-2.5 shrink-0">
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
 
        {/* Copyright and Legal Links */}
        <div className="pt-4 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#384a30] font-semibold gap-2 pb-6">
          <p>© 2026 Magnifying Children's Horizons. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Use</a>
            <a href="#credits" className="hover:underline">Site by Pixel Designer Agency</a>
          </div>
        </div>
      </div>

    </div>
  );
}