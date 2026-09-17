import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Compass, Star, ArrowRight, Check, Search, Link2, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#14230f] selection:bg-[#355322] selection:text-white">
      
    {/* 1. HERO SECTION (Edge-to-edge with text shifted further to the right) */}
      <section className="relative w-full pt-0 pb-2">
        <div className="relative w-full rounded-none sm:rounded-3xl overflow-hidden shadow-xl min-h-[52vh] lg:min-h-[60vh] flex items-center px-6 sm:px-12 lg:px-20 py-4">
          
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#162211]">
            <img 
              src="/regen-hero-image.jpeg" 
              alt="Tapping into Nature's Wisdom" 
              className="w-full h-full object-cover object-center transform scale-100"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Shifted text container further to the right using larger left padding classes */}
          <div className="relative z-10 w-full max-w-6xl flex flex-col items-start justify-center text-left pl-24 sm:pl-48 lg:pl-80">
            <div className="space-y-3 max-w-4xl text-left">
              
              <div className="inline-block space-y-1">
                <h1 className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4.25rem] font-serif text-[#ffffff] font-normal tracking-wide leading-[1.05] drop-shadow-lg">
                  <span className="block text-[1.15rem] sm:text-[1.65rem] lg:text-[2.15rem] font-serif font-semibold tracking-[0.2em] text-[#f4f0eb] mb-1.5 uppercase drop-shadow-md">
                    Tapping into
                  </span>
                  Nature's Wisdom
                </h1>
                
                <div className="flex items-center space-x-3 my-2 w-full max-w-lg">
                  <div className="h-[1.5px] flex-1 bg-[#82ab66]"></div>
                  <span className="text-[#82ab66] text-base filter drop-shadow">🌿</span>
                  <div className="h-[1.5px] flex-1 bg-[#82ab66]"></div>
                </div>
              </div>

              {/* Straight line subtitle */}
              <p className="text-[1.15rem] sm:text-[1.35rem] lg:text-[1.75rem] text-[#fcf9f5] font-serif font-medium tracking-wide max-w-2xl drop-shadow-md whitespace-nowrap pt-0.5">
                to Nurture Character and Values in Children
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link 
                  to="/books" 
                  className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-[#ffffff] font-sans text-[12px] sm:text-xs tracking-widest font-bold uppercase px-4 py-2 rounded-xl shadow-xl transition-all duration-200 border border-[#53733e]"
                >
                  <svg className="w-3.5 h-3.5 text-[#f4ebd0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Explore Our Books</span>
                  <span className="ml-1 text-xs">→</span>
                </Link>

                <Link 
                  to="/character-with-nature" 
                  className="inline-flex items-center space-x-2 bg-black/60 hover:bg-black/70 backdrop-blur-md border border-[#f0d8ab] text-[#fff3dc] font-sans text-[12px] sm:text-xs tracking-widest font-bold uppercase px-3.5 py-2 rounded-xl transition-all duration-200 shadow-lg"
                >
                  <svg className="w-3.5 h-3.5 text-[#f0d8ab] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 8.5l-4 4-2-2" />
                  </svg>
                  <span className="leading-tight text-left">
                    Discover Character <br className="hidden sm:inline" />
                    With Nature™ <span className="ml-0.5 text-xs inline-block">→</span>
                  </span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. COMBINED MASTER SECTION (Compacted Spacing) */}
      <section className="relative w-full px-4 sm:px-6 lg:px-12 pt-2 pb-5 bg-[#f7f4ee]">
        <div className="max-w-7xl mx-auto space-y-5">
          
          <div className="w-full">
            <div className="relative min-h-[300px] sm:min-h-[340px] flex items-center">
              
              <div className="absolute inset-0 z-0 overflow-hidden shadow-none bg-transparent">
                <img 
                  src="/regen-2-hero-section.png" 
                  alt="Helping children grow through nature" 
                  className="w-full h-full object-cover object-center transform scale-95 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#f7f4ee] via-[#f7f4ee]/90 lg:via-transparent to-transparent opacity-95 sm:opacity-90"></div>
              </div>

              <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-5 sm:py-6">
                <div className="grid lg:grid-cols-12 gap-3 items-center">
                  <div className="lg:col-span-8 space-y-3 text-left">
                    
                    <div className="space-y-1">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#16260f] tracking-tight leading-snug font-bold drop-shadow-sm">
                        Helping Children Grow <br /> Through Nature
                      </h2>
                      <div className="flex items-center space-x-2 text-[#2b421a]">
                        <div className="h-[1.5px] w-8 bg-[#2b421a]"></div>
                        <span className="text-xs">🌿</span>
                        <div className="h-[1.5px] w-8 bg-[#2b421a]"></div>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-[#14230f] text-sm sm:text-base leading-relaxed font-semibold max-w-2xl">
                      <p>
                        At Magnifying Children's Horizons we believe the natural world offers children more than a place to explore. It offers opportunities to wonder, discover, reflect and grow.
                      </p>
                      <p className="text-xs sm:text-sm text-[#14230f] font-medium">
                        Through meaningful stories and nature-based experiences we help children develop positive character traits, inner awareness, spiritual growth and a deeper connection with the world around them.
                      </p>
                    </div>

                    <div className="pt-1 space-y-2.5">
                      <div>
                        <Link 
                          to="/about" 
                          className="inline-flex items-center gap-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-md transition border border-[#486337]"
                        >
                          <span>ABOUT US</span>
                          <span className="text-emerald-300">✓</span>
                        </Link>
                      </div>

                      <div className="space-y-1">
                        <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#14230f]">Explore:</div>
                        <div className="flex flex-wrap gap-2">
                          <Link 
                            to="/books" 
                            className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-bold px-3 py-1.5 rounded-xl transition shadow-sm flex items-center gap-1.5 text-xs sm:text-sm"
                          >
                            <BookOpen size={15} className="text-[#b8df8a]" /> OUR BOOKS
                          </Link>
                          <Link 
                            to="/character-with-nature" 
                            className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-bold px-3 py-1.5 rounded-xl transition shadow-sm flex items-center gap-1.5 text-xs sm:text-sm"
                          >
                            <Compass size={15} className="text-[#b8df8a]" /> CHARACTER WITH NATURE®
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-3 pt-0">
            
            {/* STORIES SECTION HEADER */}
            <div className="space-y-1.5 max-w-3xl mx-auto text-center pb-0">
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1.5px] w-10 sm:w-16 bg-[#3d5e27]/40"></div>
                <h2 className="text-xl sm:text-2xl font-serif text-[#14230f] font-bold whitespace-nowrap">
                  Stories That Open New Horizons
                </h2>
                <div className="h-[1.5px] w-10 sm:w-16 bg-[#3d5e27]/40"></div>
              </div>
              <p className="font-serif italic text-[#243b17] tracking-wide text-sm font-bold">
                Discover The Weaverton Series
              </p>
              <div className="flex items-center justify-center space-x-2 text-[#3d5e27] pt-0">
                <div className="h-[1.5px] w-8 bg-[#3d5e27]/80"></div>
                <span className="text-xs">🌿</span>
                <div className="h-[1.5px] w-8 bg-[#3d5e27]/80"></div>
              </div>
            </div>

            {/* BOOKS SITTING ON THEIR OWN ON THE PAGE */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch px-2 sm:px-4">
              
              {/* BOOK 1 */}
              <div className="grid sm:grid-cols-12 gap-4 items-center p-1">
                <div className="sm:col-span-5 w-full flex items-center justify-center">
                  <Link to="/books" className="block group w-full flex items-center justify-center">
                    <img 
                      src="/tfim-book-cover.png" 
                      alt="The Face in the Mountain Book Cover" 
                      className="w-[180px] sm:w-[210px] h-[270px] sm:h-[310px] object-cover rounded-lg transition duration-300 group-hover:scale-[1.02] drop-shadow-xl"
                    />
                  </Link>
                </div>

                <div className="sm:col-span-7 space-y-1.5 text-left flex flex-col justify-center">
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#0e170a] font-serif">The Face in the Mountain</h3>
                    <p className="text-[#14230f] text-xs sm:text-sm leading-relaxed mt-0.5 font-semibold">
                      When Boma's father must leave Vamper Creek, Borne worries that he won't remember everything he has been taught. As challenges arise, he must learn to trust what he knows, think creatively and discover what he is capable of.
                    </p>
                  </div>

                  <div className="flex text-amber-600 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#14230f] italic font-bold leading-relaxed border-l-2 border-[#3d5e27] pl-2 py-0.5">
                    "A beautifully written story that touches the heart and awakens a sense of wonder in every child." <br />
                    <span className="font-extrabold not-italic text-[#0e170a]">— Amazon Reviewer</span>
                  </p>

                  <div className="pt-0 space-y-0">
                    <Link 
                      to="/books" 
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#14230f] hover:text-[#0e170a] transition"
                    >
                      DISCOVER THE BOOK <ArrowRight size={11} />
                    </Link>
                    <div>
                      <a 
                        href="https://www.amazon.com/Face-Mountain-Tolulope-Okudolo/dp/0994876947/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[10px] text-[#243b17] font-bold hover:underline"
                      >
                        Buy on Amazon →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOOK 2: THE FESTIVAL SHOES */}
              <div className="grid sm:grid-cols-12 gap-4 items-center p-1">
                <div className="sm:col-span-5 w-full flex items-center justify-center">
                  <Link to="/books" className="block group w-full flex items-center justify-center">
                    <img 
                      src="/TFS-Book-cover.png" 
                      alt="The Festival Shoes Book Cover" 
                      className="w-[216px] sm:w-[252px] h-[335px] sm:h-[385px] object-cover rounded-lg transition duration-300 group-hover:scale-[1.02] drop-shadow-xl"
                    />
                  </Link>
                </div>

                <div className="sm:col-span-7 space-y-1.5 text-left flex flex-col justify-center">
                  <div>
                    <span className="text-[7px] font-black uppercase tracking-widest text-[#0e170a] bg-amber-400 px-1.5 py-0.5 rounded shadow-sm">COMING SOON</span>
                    <h3 className="font-extrabold text-base sm:text-lg text-[#0e170a] mt-0.5 font-serif">The Festival Shoes</h3>
                    <p className="text-[#14230f] text-xs sm:text-sm leading-relaxed mt-0.5 font-semibold">
                      Drumlo's journey takes him through Weaverton, where late facies and nature beings are busy at work. When an unexpected challenge arises, he must draw on his courage, determination and self-trust to find a way forward.
                    </p>
                  </div>

                  <div className="flex text-amber-600 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#14230f] italic font-bold leading-relaxed border-l-2 border-[#3d5e27] pl-2 py-0.5">
                    "An enchanting adventure filled with heart, magic and important lessons for every young reader." <br />
                    <span className="font-extrabold not-italic text-[#0e170a]">— ABC Reviewer</span>
                  </p>

                  <div className="pt-0 space-y-0">
                    <Link 
                      to="/books" 
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#14230f] hover:text-[#0e170a] transition"
                    >
                      DISCOVER THE BOOK <ArrowRight size={11} />
                    </Link>
                    <div>
                      <a href="#buy" className="text-[10px] text-[#243b17] font-bold hover:underline">
                        Buy on Amazon →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

       {/* 3. FREE ACTIVITY BOOK SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
              <div className="bg-[#e5eee0] border border-[#b8cca9] rounded-2xl p-4 sm:p-6 shadow-lg relative overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-5 items-center">
                  
                  <div className="lg:col-span-4 relative max-w-[180px] sm:max-w-[220px] lg:max-w-none mx-auto w-full shadow-xl rounded-xl">
                    <div className="absolute -top-2 -left-2 bg-amber-500 text-white font-black text-[9px] tracking-widest px-2 py-0.5 rounded-full uppercase shadow-md z-10 rotate-[-6deg]">
                      100% FREE
                    </div>
                    <img 
                      src="/activity-book-image.jpeg" 
                      alt="Continue the Adventure Free Activity Book" 
                      className="w-full h-auto object-contain rounded-xl border-2 border-white bg-white shadow-md block"
                    />
                  </div>

                  <div className="lg:col-span-8 space-y-2.5 text-left">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#3d5e27]">SPECIAL READER GIFT</span>
                      <h3 className="text-lg sm:text-xl font-serif text-[#0e170a] font-bold mt-0.5">
                        Continue the Adventure — It's Free!
                      </h3>
                      <p className="font-serif italic text-[#243b17] text-xs sm:text-sm font-bold mt-0.5">
                        Explore the World of The Weaverton Series
                      </p>
                      <p className="text-xs sm:text-sm text-[#14230f] leading-relaxed mt-1 font-semibold">
                        Step into the world of The Weaverton Series with a free activity book designed to encourage children to colour, create, explore and discover more about the characters and ideas they encounter.
                      </p>
                    </div>

                    <div className="pt-0.5">
                      <Link 
                        to="#" 
                        className="w-full bg-[#0e170a] hover:bg-[#070b05] text-white font-sans text-[11px] tracking-widest font-bold uppercase py-2.5 rounded-xl shadow-md transition duration-200 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-3.5 h-3.5 text-[#b8df8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>GET THE FREE ACTIVITY BOOK</span>
                      </Link>
                    </div>

                    <p className="text-[10px] sm:text-xs text-[#29401b] font-bold text-center sm:text-left">
                      You’ll also receive occasional news from Magnifying Children’s Horizons about our books and programmes.
                    </p>
                  </div>

                </div>
              </div>
            </section>

      {/* 4. CHARACTER WITH NATURE® SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Text & Button */}
          <div className="lg:col-span-7 space-y-2.5 text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#16260f] font-bold tracking-tight">
                Character with Nature™
              </h2>
              <p className="font-serif italic text-[#28401a] text-xs sm:text-sm font-semibold mt-0.5">
                Tapping into Nature’s Wisdom to Help Children Grow From Within
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#14230f] leading-relaxed font-semibold">
              Character with Nature is a nature-based character development programme that helps children discover meaningful connections between the natural world, their choices and their inner lives.
            </p>
            
            <p className="text-xs sm:text-sm text-[#14230f] leading-relaxed font-semibold">
              Through stories, nature explorations, observation and reflection, children are encouraged to discover positive character traits, deepen their spiritual awareness and experience for themselves some of the principles at work in nature and in life.
            </p>

            <div className="pt-0.5">
              <Link 
                to="/character-with-nature" 
                className="inline-flex items-center space-x-2 bg-[#1b2b13] hover:bg-[#121e0c] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl shadow-md transition border border-[#3b572a]"
              >
                <span>EXPLORE CHARACTER WITH NATURE</span>
                <span>→</span>
              </Link>
            </div>

            {/* Sub-section: Process Graphic */}
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center space-x-2 text-[#243b17] text-[10px] uppercase font-bold tracking-widest w-full">
                <div className="h-[1px] flex-1 bg-[#b5cca7]"></div>
                <span>— HOW CHILDREN EXPLORE WITH CWN —</span>
                <div className="h-[1px] flex-1 bg-[#b5cca7]"></div>
              </div>

              {/* Centered container wrapper for process graphic */}
              <div className="max-w-sm sm:max-w-md mx-auto pt-0.5">
                <div className="flex items-center justify-between w-full px-2 py-0.5">
                  
                  {/* Step 1: Discover */}
                  <div className="flex flex-col items-center text-center space-y-1 group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-md transition-transform transform group-hover:scale-105">
                      <Search size={15} strokeWidth={2.2} />
                    </div>
                    <span className="font-black text-[10px] uppercase text-[#14230f] tracking-wider">DISCOVER</span>
                    <span className="text-[9px] text-[#243b17] max-w-[85px] leading-tight font-bold">Notice & explore nature</span>
                  </div>

                  <div className="text-[#3b572a] font-black text-xs pb-3">→</div>

                  {/* Step 2: Connect */}
                  <div className="flex flex-col items-center text-center space-y-1 group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-md transition-transform transform group-hover:scale-105">
                      <Link2 size={15} strokeWidth={2.2} />
                    </div>
                    <span className="font-black text-[10px] uppercase text-[#14230f] tracking-wider">CONNECT</span>
                    <span className="text-[9px] text-[#243b17] max-w-[85px] leading-tight font-bold">Make connections & meaning</span>
                  </div>

                  <div className="text-[#3b572a] font-black text-xs pb-3">→</div>

                  {/* Step 3: Create */}
                  <div className="flex flex-col items-center text-center space-y-1 group">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-md transition-transform transform group-hover:scale-105">
                      <Sparkles size={15} strokeWidth={2.2} />
                    </div>
                    <span className="font-black text-[10px] uppercase text-[#14230f] tracking-wider">CREATE</span>
                    <span className="text-[9px] text-[#243b17] max-w-[85px] leading-tight font-bold">Bring discoveries to life</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Images */}
          <div className="lg:col-span-5 w-full space-y-3">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-[#ebf2e6]">
              <div className="relative w-full min-h-[200px] sm:min-h-[240px] flex items-center justify-center">
                <img 
                  src="/cwn-image-1.png" 
                  alt="Child exploring nature stream" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <img 
              src="/image.png" 
              alt="Continue the Adventure Free Activity Book" 
              className="w-full h-auto object-contain rounded-xl border-none bg-white shadow-md block"
            />
          </div>

        </div>
      </section>

      {/* 5. OUR COLLABORATION: BLOSSOM IN NATURE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-5 pb-3">
        <div className="grid md:grid-cols-12 gap-5 items-center">
          
          <div className="md:col-span-4 max-w-[220px] sm:max-w-[260px] md:max-w-none mx-auto w-full flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-transparent w-fit">
              <img 
                src="/footer.jpeg" 
                alt="Blossom in Nature visual" 
                className="block object-cover object-center w-[200px] sm:w-[240px] md:w-[280px]"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-2.5 text-left">
            <div className="flex items-center space-x-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#2b421a]">OUR COLLABORATION</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-serif text-[#0e170a] font-bold">
                Blossom in Nature
              </h3>
              <p className="font-serif italic text-[#243b17] text-xs sm:text-sm font-bold mt-0.5">
                STORIES TOLD FROM TWO PERSPECTIVES
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#14230f] leading-relaxed font-semibold">
              Blossom in Nature is a creative collaboration between Tolulope Okudolo of Magnifying Children’s Horizons and Angela Ehrlich of Nature4Children.
            </p>
            <p className="text-xs sm:text-sm text-[#14230f] leading-relaxed font-semibold">
              Through interconnected stories told from human and nature perspectives, children discover how the two worlds affect one another while exploring positive character qualities.
            </p>

            <div className="pt-0.5">
              <Link 
                to="/blossom-in-nature" 
                className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-xl transition border border-[#486337]"
              >
                <span>DISCOVER BLOSSOM IN NATURE</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="pt-5 border-t border-[#23351a]/15 px-4 sm:px-6 lg:px-12 pb-6 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pb-5">
            
            {/* Logo & Tagline */}
            <div className="flex items-center space-x-3 text-center lg:text-left">
              <Link to="/" className="flex items-center space-x-3 group shrink-0">
                <div className="flex items-center justify-center shrink-0">
                  <img 
                    src="/navbar-image.png" 
                    alt="MCH Logo" 
                    className="h-9 w-auto object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>
              </Link>
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-sm text-[#14230f] leading-none">Magnifying Children's Horizons</span>
                <span className="text-[9px] text-[#243b17] font-bold uppercase tracking-widest mt-1">
                  NATURE • CHARACTER • A BRIGHTER TOMORROW
                </span>
              </div>
            </div>
 
            {/* Nav Links */}
            <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-wider font-extrabold text-[#203515]">
              <Link to="/" className="hover:text-[#0e170a] transition">Home</Link>
              <Link to="/books" className="hover:text-[#0e170a] transition">Books</Link>
              <Link to="/cwn/pathways" className="hover:text-[#0e170a] transition">Character with Nature™</Link>
              <Link to="/about" className="hover:text-[#0e170a] transition">About Us</Link>
              <Link to="/collaborations" className="hover:text-[#0e170a] transition">Collaborations</Link>
              <Link to="/contact" className="hover:text-[#0e170a] transition">Contact</Link>
            </div>
 
            {/* Social Icons */}
            <div className="flex items-center space-x-2 shrink-0">
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
 
          {/* Copyright and Legal Links */}
          <div className="pt-4 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#203515]">
            <p>© 2026 Magnifying Children's Horizons. All rights reserved.</p>
            <div className="flex gap-4 mt-2 sm:mt-0 font-bold">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/terms" className="hover:underline">Terms of Service</Link>
              <a href="#credits" className="hover:underline">
              Site by Pixel Designer Agency
            </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}