import React from 'react';
import { Link } from 'react-router-dom';
import ScrollFade from './ScrollFade';

export default function About() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen space-y-4 sm:space-y-6 pb-6 overflow-hidden">
      
      {/* HERO VIDEO SECTION (FULL WIDTH) */}
      <section className="w-full pt-1 pb-1">
        <div className="relative w-full overflow-hidden shadow-xl h-[180px] sm:h-[240px] md:h-[320px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          >
            <source src="/about-hero-video-no-bars.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* WRITE-UP PLACED INSIDE A PROFESSIONAL CREAM CONTAINER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-1 pb-1">
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-[#f5f2eb] border border-[#e2dcd2] shadow-md py-6 sm:py-8 px-5 sm:px-10 text-left space-y-3 sm:space-y-4">
          <div className="inline-block">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#3a4d31]/10 border border-[#3a4d31]/20 text-[#3a4d31] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 shadow-sm">
              <span>🌿</span>
              <span>About Magnifying Children's Horizons</span>
            </div>
          </div>

          <div className="space-y-2.5 text-[#1c2c15] font-semibold text-xs sm:text-base leading-relaxed">
            <p className="font-bold text-[#2a3c21]">
              At Magnifying Children’s Horizons, we believe a child’s curiosity is a living seed, ready to grow when it meets the quiet wisdom of nature.
            </p>
            <p>
              Every leaf, ripple and sunrise holds a quiet lesson, inviting children to slow down, wonder and grow.
            </p>
            <p>
              Through meaningful stories, nature-based experiences and opportunities for discovery and reflection, we help children explore their connection with nature while nurturing positive character, inner awareness and spiritual growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Wrap */}
      <div className="space-y-6 sm:space-y-8">

        {/* ------------------------------------------------------------- */}
        <ScrollFade>
          <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="relative rounded-3xl overflow-hidden shadow-xl py-6 sm:py-8 px-5 sm:px-10 border border-emerald-950/25">
              
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src="/nature-image.png" 
                  alt="Nature teaching background" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf7] via-[#fbfaf7]/95 sm:via-[#fbfaf7] to-[#fbfaf7]/70 sm:to-transparent w-full sm:w-11/12 lg:w-4/5 pointer-events-none"></div>
              </div>

              <div className="relative z-10 max-w-xl sm:max-w-2xl lg:max-w-3xl space-y-3 text-left">
                
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-[#2c3c24] uppercase">
                    OUR PHILOSOPHY
                  </span>
                  <div className="h-[2px] w-24 bg-[#587a41]"></div>
                </div>

                <div className="space-y-1">
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-serif text-[#162510] font-bold tracking-wide">
                    Nature: A Living Teacher
                  </h2>
                  <div className="flex items-center gap-2 text-[#4c6a37] font-bold text-sm sm:text-base tracking-tight select-none">
                    <span>🌿</span>
                    <span>«««</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-[#192813] text-xs sm:text-base leading-relaxed font-semibold">
                  <p>
                    Just as children learn the language of their parents to live in harmony at home, <br /> we believe they can also learn the language of nature <br />observing its patterns, relationships and rhythms <br /> and discovering what these can teach them about themselves <br /> and the world around them.
                  </p>
                  <p className="text-[#192813]">
                    Nature offers children more than knowledge about plants, animals and ecosystems. <br /> Through observation and experience, nature can help children develop positive character <br /> traits and a growing understanding of the consequences of their choices.
                  </p>
                  <p className="font-bold text-[#111e0c]">
                    We encourage children to notice, question, explore and discover for themselves.
                  </p>
                </div>

                <div className="pt-1 flex items-center gap-3">
                  <div className="text-2xl sm:text-3xl select-none flex-shrink-0">
                  
                  </div>
                  <blockquote className="bg-white/95 backdrop-blur-md border-l-4 border-[#52703c] px-3 sm:px-4 py-2.5 rounded-r-xl italic font-serif text-xs sm:text-base text-[#192813] font-bold shadow-sm">
                    “Every leaf, ripple and sunrise holds a quiet lesson.”
                  </blockquote>
                </div>

              </div>
            </div>
          </section>
        </ScrollFade>

        {/* ------------------------------------------------------------- */}
        <ScrollFade delay={100}>
          <section id="meet-founder" className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 scroll-mt-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl py-6 sm:py-8 px-5 sm:px-10 border border-emerald-950/25 bg-[#fbfaf7]">
              
              <div className="relative z-10 space-y-4 text-left">
                
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-[#2c3c24] uppercase">
                    MEET THE FOUNDER
                  </span>
                  <div className="h-[2px] w-32 bg-[#587a41]"></div>
                </div>

                <h2 className="text-xl sm:text-3xl md:text-4xl font-serif text-[#162510] font-bold tracking-wide">
                  Meet Tolulope Okudolo
                </h2>

                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-1">
                  <div className="lg:col-span-4 space-y-2">
                    <div className="w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-md max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                      <img 
                        src="/about-tolu.png" 
                        alt="Tolulope Okudolo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-[#453f36] italic text-center leading-relaxed px-2 font-serif font-medium">
                      Tolulope sharing a story with children at the Niagara Nature Centre
                    </p>
                  </div>

                  <div className="lg:col-span-8 space-y-2.5 text-[#192813] text-xs sm:text-base leading-relaxed font-semibold">
                    <p>
                      A child at heart with a deep, abiding love for her Creator, <strong className="font-bold text-[#111e0c]">Tolulope (Tolu) Okudolo</strong> is an author and educator with a Bachelor of Education and an MBA. Her experiences living in Africa, Europe and North America have given her a rich multicultural perspective.
                    </p>
                    <p>
                     Her passion lies in helping children discover the connections, wisdom and laws within nature, and how these can guide everyday choices, nurture positive character and deepen their connection with the world around them.

                    </p>
                    <p>
                      Tolu is the founder of Magnifying Children’s Horizons and creator of <strong className="font-bold text-[#111e0c]">Character with Nature™</strong>, a nature-inspired framework that brings this vision to life through discovery and exploration.

                    </p>
                    <p>
                      She is the author of <em className="italic font-bold">The Face in the Mountain</em> and <em className="italic font-bold">The Festival Shoes</em> from The Weaverton Series, and co-creator of <em className="italic font-bold">Blossom in Nature</em>, a paired-perspective children's book initiative.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </ScrollFade>

        {/* ------------------------------------------------------------- */}
        {/* FULL-WIDTH "IN TOLU'S OWN VOICE" SECTION */}
        <ScrollFade delay={150}>
          <section className="w-full bg-[#dce2dd] py-10 sm:py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
              
              <div className="text-center">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-serif text-[#293822] font-bold tracking-tight">
                  In Tolu's Own Voice
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-1">
                <div className="border-l-2 border-[#6f8564] pl-4 space-y-1.5">
                  <h3 className="font-serif text-sm sm:text-lg text-[#753c2f] font-bold leading-snug">
                    What inspired you to begin writing your books?
                  </h3>
                  <p className="text-[#192813] text-xs sm:text-sm leading-relaxed font-semibold">
                    <strong className="font-bold text-[#111e0c]">My love for nature and children inspired me to begin writing.</strong> I believe that an important part of helping children develop character and spirituality lies in helping them connect with nature and discover its laws for themselves. My own experiences have also shaped the stories I tell.
                  </p>
                </div>

                <div className="border-l-2 border-[#6f8564] pl-4 space-y-1.5">
                  <h3 className="font-serif text-sm sm:text-lg text-[#753c2f] font-bold leading-snug">
                    How do your stories begin?
                  </h3>
                  <p className="text-[#192813] text-xs sm:text-sm leading-relaxed font-semibold">
                    <strong className="font-bold text-[#111e0c]">Often with pictures.</strong> I see scenes in my mind's eye and begin putting the dialogue around them. It's also quite fun!
                  </p>
                </div>

                <div className="border-l-2 border-[#6f8564] pl-4 space-y-1.5 md:col-span-2 lg:col-span-1">
                  <h3 className="font-serif text-sm sm:text-lg text-[#753c2f] font-bold leading-snug">
                    What do you hope a child carries away from your stories?
                  </h3>
                  <p className="text-[#192813] text-xs sm:text-sm leading-relaxed font-semibold">
                    <strong className="font-bold text-[#111e0c]">Curiosity</strong> — and a sense that there is more to discover. I hope children leave wanting to explore, ask questions and find their own connection with the natural world.
                  </p>
                </div>

              </div>

            </div>
          </section>
        </ScrollFade>

        {/* ------------------------------------------------------------- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-1">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#23351a] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold">Ready to Explore More?</h2>
              <p className="text-emerald-100 text-xs sm:text-sm max-w-lg mx-auto font-semibold">
                Discover our stories and explore Character with Nature™.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <Link 
                  to="/books" 
                  className="bg-white text-[#23351a] hover:bg-emerald-50 font-bold text-[11px] uppercase tracking-widest px-5 py-3 rounded-xl shadow-lg transition"
                >
                  Explore Our Books
                </Link>
                <Link 
                  to="/cwn/pathways" 
                  className="bg-[#355322] hover:bg-[#2c441b] text-white border border-emerald-700 font-bold text-[11px] uppercase tracking-widest px-5 py-3 rounded-xl shadow-lg transition"
                >
                  Character With Nature™
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-4 border-t border-[#23351a]/15">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pb-5">
            
            <div className="space-y-1.5 text-center lg:text-left">
              <Link to="/" className="inline-flex items-center space-x-3 justify-center lg:justify-start">
                <img 
                  src="/leave.jpeg" 
                  alt="" 
                  aria-hidden="true"
                  className="w-7 h-7 object-contain shrink-0 mix-blend-multiply opacity-95" 
                />
                <div className="flex flex-col text-left">
                  <span className="font-serif font-bold text-base text-[#23351a] leading-none">Magnifying</span>
                  <span className="font-serif font-bold text-base text-[#355322] leading-none mt-1">Children's Horizons</span>
                </div>
              </Link>
              <p className="text-[10px] text-[#3c4a36] uppercase tracking-widest font-bold lg:pl-10 text-center lg:text-left">
                NATURE • CHARACTER • A BRIGHTER TOMORROW
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 text-xs uppercase tracking-wider font-bold text-[#355322] text-center">
              <Link to="/" className="hover:text-[#23351a] transition">Home</Link>
              <Link to="/books" className="hover:text-[#23351a] transition">Books</Link>
              <Link to="/cwn/pathways" className="hover:text-[#23351a] transition">Character with Nature™</Link>
              <Link to="/about" className="hover:text-[#23351a] transition">About Us</Link>
              <Link to="/collaborations" className="hover:text-[#23351a] transition">Collaborations</Link>
              <Link to="/contact" className="hover:text-[#23351a] transition">Contact</Link>
            </div>

            <div className="flex items-center space-x-3">
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
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

          </div>

          <div className="pt-3 border-t border-[#23351a]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#42503b] font-semibold gap-3 pb-6 text-center sm:text-left">
            <p>© 2026 Magnifying Children's Horizons. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:space-x-6">
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
              <a href="#terms" className="hover:underline">Terms of Use</a>
              <a href="#credits" className="hover:underline">Site by Pixel Designer Agency</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}