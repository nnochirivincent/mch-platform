import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Compass, Heart, ArrowRight, Leaf, Star } from 'lucide-react';
import ScrollFade from './ScrollFade';

export default function Collaboration() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('both');

  // Track mouse for interactive fairy / glow elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#f7f9f5] min-h-screen text-[#162211] relative overflow-x-hidden selection:bg-[#3c5e2a] selection:text-white font-sans">
      
      {/* ADVANCED DYNAMIC AMBIENT LIGHTING */}
      <div 
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-lime-400/15 via-emerald-500/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`
        }}
      ></div>
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#87a96b]/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* CUSTOM ANIMATIONS & GLASS EFFECTS */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(132, 204, 22, 0.6)); }
          50% { filter: drop-shadow(0 0 30px rgba(74, 222, 128, 0.9)); }
        }
        @keyframes wing-flutter {
          0%, 100% { transform: scaleX(1) rotate(0deg); }
          50% { transform: scaleX(0.2) rotate(10deg); }
        }
        .animate-float { animation: float-slow 6s ease-in-out infinite; }
        .animate-fairy { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-wings { animation: wing-flutter 0.2s ease-in-out infinite alternate; transform-origin: center; }
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(132, 204, 22, 0.2);
        }
        .glass-panel-dark {
          background: rgba(22, 34, 17, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(132, 204, 22, 0.25);
        }
      `}</style>

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative w-full pt-0 pb-0 overflow-hidden">
        <div className="relative w-full h-[35vh] sm:h-[45vh] lg:h-[50vh] flex items-center justify-center bg-[#162211]">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/collaboration-hero.png" 
              alt="Collaborations Header" 
              className="w-full h-full object-cover object-center transform scale-105 filter brightness-90 transition-transform duration-1000 ease-out hover:scale-100"
            />
            {/* Multi-stop cinematic gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#162211] via-[#162211]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3 mt-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-lime-900/60 border border-lime-400/30 text-lime-200 text-xs tracking-widest uppercase backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Creative Partnership</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-2xl">
              Collaborations & Shared Visions
            </h1>
            <p className="text-sm sm:text-base text-lime-100/90 max-w-xl mx-auto font-light">
              Bridging worlds, blending perspectives, and illuminating the magical bond between children and nature.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE FLOATING FAIRY GUIDE */}
      <div className="relative w-full h-0 overflow-visible z-40 pointer-events-none">
        <div className="absolute top-4 left-[10%] sm:left-[20%] animate-float animate-fairy flex items-center">
          <div className="flex space-x-1 mr-2 opacity-70">
            <div className="w-1.5 h-1.5 bg-lime-300 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-emerald-300 rounded-full blur-[1px]"></div>
          </div>
          <svg className="w-10 h-10 text-lime-300 filter drop-shadow-[0_0_10px_rgba(190,242,100,0.8)]" viewBox="0 0 24 24" fill="currentColor">
            <path className="animate-wings origin-right fill-lime-300/90" d="M12 12C12 12 5 4 2 6C-1 8 4 14 12 12Z" />
            <path className="animate-wings origin-left fill-lime-300/90" d="M12 12C12 12 19 4 22 6C25 8 20 14 12 12Z" />
            <circle cx="12" cy="12" r="3.5" className="fill-white" />
          </svg>
        </div>
      </div>

      {/* 2. INTRO SECTION: BENTO-STYLE NATURE MANIFESTO */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollFade delay={50}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-[#355322] bg-[#e4ede1] py-1.5 px-4 rounded-full inline-block shadow-sm border border-[#3c5e2a]/10">
                STORIES SEEN FROM TWO WORLDS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1e3319] tracking-tight">
                Blossom in Nature: Paired Perspectives
              </h2>
              <p className="text-sm sm:text-base text-[#344e2b] leading-relaxed font-normal">
                Blossom in Nature stories are created in interconnected pairs, offering dual windows into a shared universe — one reflecting human childhood experiences, and the other revealing the unseen parallel realm of nature and elemental guardians.
              </p>
            </div>
          </ScrollFade>

          {/* Interactive Feature Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollFade delay={100}>
              <div className="glass-panel p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl group-hover:bg-lime-400/25 transition-all"></div>
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#3c5e2a] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1e3319]">The Human Journey</h3>
                  <p className="text-xs sm:text-sm text-[#3b532e] leading-relaxed">
                    Follow children navigating everyday choices, personal growth, challenges, and discovering courage within family and community settings.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-lime-900/10 flex items-center text-xs font-bold text-[#3c5e2a] group-hover:translate-x-1 transition-transform">
                  <span>Explore Human World</span> <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            </ScrollFade>

            <ScrollFade delay={150}>
              <div className="glass-panel p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col justify-between border-2 border-lime-500/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/15 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all"></div>
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1e3319]">The Elemental Realm</h3>
                  <p className="text-xs sm:text-sm text-[#3b532e] leading-relaxed">
                    Uncover the responsive heartbeat of nature. See how forests, streams, and elemental guardians react and harmonize with human actions.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-lime-900/10 flex items-center text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
                  <span>Discover Elemental Magic</span> <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            </ScrollFade>

            <ScrollFade delay={200}>
              <div className="glass-panel p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#28421c] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1e3319]">Unified Values</h3>
                  <p className="text-xs sm:text-sm text-[#3b532e] leading-relaxed">
                    Honesty, kindness, perseverance, and ecological awareness woven seamlessly into deeply engaging, heartwarming narratives.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-lime-900/10 flex items-center text-xs font-bold text-[#28421c] group-hover:translate-x-1 transition-transform">
                  <span>Core Character Traits</span> <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE: ONE STORY. TWO PERSPECTIVES. */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#edf3ea] border-y border-[#3c5e2a]/15 relative overflow-hidden">
        {/* Background Decorative Watermark */}
        <div className="absolute -left-20 -top-20 opacity-[0.04] pointer-events-none">
          <Leaf className="w-[600px] h-[600px] text-[#1e3319]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollFade delay={50}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#1e3319]">
                One Story. Two Perspectives.
              </h3>
              <p className="text-xs sm:text-sm text-[#3b532e]">
                Read them side-by-side to experience the complete picture of events unfolding across both realms.
              </p>

              {/* Interactive View Switcher Tabs */}
              <div className="flex justify-center pt-4">
                <div className="inline-flex p-1.5 rounded-2xl bg-[#dfe7dc] shadow-inner border border-lime-900/10">
                  <button 
                    onClick={() => setActiveTab('both')}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeTab === 'both' ? 'bg-[#3c5e2a] text-white shadow-md' : 'text-[#3b532e] hover:text-[#1e3319]'}`}
                  >
                    Side-by-Side View
                  </button>
                  <button 
                    onClick={() => setActiveTab('femi')}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeTab === 'femi' ? 'bg-[#3c5e2a] text-white shadow-md' : 'text-[#3b532e] hover:text-[#1e3319]'}`}
                  >
                    Femi's Promise
                  </button>
                  <button 
                    onClick={() => setActiveTab('luna')}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeTab === 'luna' ? 'bg-[#3c5e2a] text-white shadow-md' : 'text-[#3b532e] hover:text-[#1e3319]'}`}
                  >
                    Luna's Threads
                  </button>
                </div>
              </div>
            </div>
          </ScrollFade>

          {/* Book Cards Display Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            
            {/* Book 1 */}
            {(activeTab === 'both' || activeTab === 'femi') && (
              <ScrollFade delay={100}>
                <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-2xl group hover:-translate-y-2 transition-all duration-500 border border-lime-500/30 flex flex-col items-center text-center">
                  <div className="overflow-hidden rounded-2xl shadow-xl bg-white/95 p-3 mb-6 transform group-hover:scale-105 transition duration-500 max-w-[280px] ring-1 ring-lime-900/10">
                    <img 
                      src="/bookcover-aboutpage.png" 
                      alt="Femi's Promise Book Cover" 
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full mb-2">
                    The Human Perspective
                  </span>
                  <h4 className="font-serif font-bold text-2xl text-[#1e3319] mb-2">Femi's Promise</h4>
                  <p className="text-xs sm:text-sm text-[#3b532e] leading-relaxed mb-6">
                    A heartfelt story exploring personal accountability, trust, and the impact of a child's commitment in daily life.
                  </p>
                  <Link 
                    to="/books" 
                    className="inline-flex items-center space-x-2 text-xs font-bold text-white bg-[#3c5e2a] hover:bg-[#2c441b] px-6 py-3 rounded-xl shadow-md transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Book Details</span>
                  </Link>
                </div>
              </ScrollFade>
            )}

            {/* Book 2 */}
            {(activeTab === 'both' || activeTab === 'luna') && (
              <ScrollFade delay={150}>
                <div className="glass-panel p-6 sm:p-8 rounded-3xl shadow-2xl group hover:-translate-y-2 transition-all duration-500 border border-emerald-500/30 flex flex-col items-center text-center">
                  <div className="overflow-hidden rounded-2xl shadow-xl bg-white/95 p-3 mb-6 transform group-hover:scale-105 transition duration-500 max-w-[280px] ring-1 ring-emerald-900/10">
                    <img 
                      src="/2-bookcover-aboutpage.png" 
                      alt="Luna's Threads of Light Book Cover" 
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-2">
                    The Elemental Perspective
                  </span>
                  <h4 className="font-serif font-bold text-2xl text-[#1e3319] mb-2">Luna's Threads of Light</h4>
                  <p className="text-xs sm:text-sm text-[#3b532e] leading-relaxed mb-6">
                    Journey into the luminous unseen realm where elemental forces weave light and energy in response to human integrity.
                  </p>
                  <Link 
                    to="/books" 
                    className="inline-flex items-center space-x-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 px-6 py-3 rounded-xl shadow-md transition-all"
                  >
                    <Star className="w-4 h-4" />
                    <span>Discover Elemental Book</span>
                  </Link>
                </div>
              </ScrollFade>
            )}

          </div>
        </div>
      </section>

      {/* 4. CREATIVE PARTNERSHIP PROFILE */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#f7f9f5] relative">
        <div className="max-w-4xl mx-auto">
          <ScrollFade delay={80}>
            <div className="glass-panel p-8 sm:p-12 rounded-3xl shadow-xl border border-lime-900/10 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-300/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-[#3c5e2a] text-white rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1e3319]">
                  Two Creative Perspectives, One Shared Vision
                </h3>
                <p className="text-sm text-[#3b532e] max-w-2xl mx-auto leading-relaxed">
                  <strong className="text-[#1e3319]">Blossom in Nature</strong> is an inspiring creative partnership between <strong className="text-[#1e3319]">Tolulope Okudolo</strong> of Magnifying Children's Horizons and <strong className="text-[#1e3319]">Angela Ehrich</strong> of Nature&Children.
                </p>
                <p className="text-xs sm:text-sm text-[#3b532e] max-w-2xl mx-auto leading-relaxed">
                  Together, they blend imaginative storytelling with a deep reverence for the environment, guiding young readers to recognize how their daily choices ripple across both human communities and the natural world.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link 
                  to="/about" 
                  className="bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  About the Creators →
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white hover:bg-lime-50 text-[#3c5e2a] border border-[#3c5e2a]/30 font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-sm transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-12 bg-[#162211] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <ScrollFade delay={50}>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              Discover More From Blossom in Nature
            </h3>
            <p className="text-xs sm:text-sm text-lime-100/80 max-w-xl mx-auto font-light leading-relaxed">
              Explore the full philosophy behind Paired Perspectives, browse the complete book collection, and join our growing community.
            </p>
            <div className="pt-4">
              <Link 
                to="/books" 
                className="inline-flex items-center space-x-2 bg-lime-400 hover:bg-lime-300 text-[#162211] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore All Books</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* 6. MAIN FOOTER */}
      <footer className="py-12 px-4 sm:px-6 lg:px-10 bg-[#f7f9f5] border-t border-[#3c5e2a]/15">
        <ScrollFade delay={50}>
          <div className="max-w-[90rem] mx-auto space-y-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6">
              
              <div className="space-y-2 text-center lg:text-left">
                <Link to="/" className="inline-flex items-center space-x-3 group">
                  <img 
                    src="/leave.jpeg" 
                    alt="" 
                    aria-hidden="true"
                    className="w-7 h-7 object-contain shrink-0 mix-blend-multiply opacity-95 group-hover:scale-110 transition duration-300" 
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-serif font-bold text-lg text-[#1a2b13] leading-none">Magnifying</span>
                    <span className="font-serif font-semibold text-lg text-[#28421c] leading-none mt-1">Children's Horizons</span>
                  </div>
                </Link>
                <p className="text-[11px] text-[#3b532e] font-bold uppercase tracking-widest pl-10">
                  Nature • Character • Inner Awareness • Spiritual Growth
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-bold text-[#28421c]">
                <Link to="/" className="hover:text-[#3c5e2a] transition">Home</Link>
                <Link to="/about" className="hover:text-[#3c5e2a] transition">About</Link>
                <Link to="/books" className="hover:text-[#3c5e2a] transition">Our Books</Link>
                <Link to="/character-with-nature" className="hover:text-[#3c5e2a] transition">CWN</Link>
                <Link to="/collaboration" className="hover:text-[#3c5e2a] transition">Collaborations</Link>
                <Link to="/contact" className="hover:text-[#3c5e2a] transition">Contact</Link>
              </div>

              <div className="flex items-center space-x-3">
                <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#162211] text-white flex items-center justify-center text-xs shadow hover:bg-[#3c5e2a] hover:scale-110 transition duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#162211] text-white flex items-center justify-center text-xs shadow hover:bg-[#3c5e2a] hover:scale-110 transition duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#youtube" aria-label="YouTube" className="w-9 h-9 rounded-full bg-[#162211] text-white flex items-center justify-center text-xs shadow hover:bg-[#3c5e2a] hover:scale-110 transition duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

            </div>

            <div className="pt-6 border-t border-[#3c5e2a]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#3b532e] font-semibold gap-3">
              <p>© 2026 Magnifying Children's Horizons. All rights reserved.</p>
              <div className="flex items-center space-x-6">
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