import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Compass, Star, ArrowRight, Check, Search, Link2, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#1c2c15] selection:bg-[#355322] selection:text-white">
      
    {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-1 pb-0">
        <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl min-h-[50vh] lg:min-h-[58vh] flex items-center px-6 sm:px-12 lg:px-20 py-4">
          
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#162211]">
            <img 
              src="/regen-hero-image.jpeg" 
              alt="Tapping into Nature's Wisdom" 
              className="w-full h-full object-cover object-center transform scale-100"
            />
            <div className="absolute inset-0 bg-black/25"></div>
          </div>

          <div className="relative z-10 w-full max-w-5xl flex flex-col items-start justify-center text-left pl-32 sm:pl-48 lg:pl-72 -mt-3 sm:-mt-5">
            <div className="space-y-3 max-w-5xl text-left">
              
              <div className="inline-block space-y-1">
                <h1 className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4.25rem] font-serif text-[#ffffff] font-normal tracking-wide leading-[1.05] drop-shadow-lg">
                  <span className="block text-[1.15rem] sm:text-[1.65rem] lg:text-[2.15rem] font-serif font-semibold tracking-[0.2em] text-[#f4f0eb] mb-1.5 uppercase drop-shadow-md">
                    Tapping into
                  </span>
                  Nature's Wisdom
                </h1>
                
                <div className="flex items-center space-x-3 my-2 w-full max-w-xl">
                  <div className="h-[1.5px] flex-1 bg-[#82ab66]"></div>
                  <span className="text-[#82ab66] text-base filter drop-shadow">🌿</span>
                  <div className="h-[1.5px] flex-1 bg-[#82ab66]"></div>
                </div>
              </div>

              <p className="text-[1.05rem] sm:text-[1.25rem] lg:text-[1.65rem] text-[#fcf9f5] font-serif font-medium tracking-wide max-w-xl drop-shadow-md pt-0.5">
                to Nurture Character and Values in Children
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1.5">
                <Link 
                  to="/books" 
                  className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-[#ffffff] font-sans text-[11px] sm:text-xs tracking-widest font-bold uppercase px-4 py-2.5 rounded-xl shadow-xl transition-all duration-200 border border-[#53733e]"
                >
                  <svg className="w-3.5 h-3.5 text-[#f4ebd0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Explore Our Books</span>
                  <span className="ml-1 text-xs">→</span>
                </Link>

                <Link 
                  to="/character-with-nature" 
                  className="inline-flex items-center space-x-2 bg-black/60 hover:bg-black/70 backdrop-blur-md border border-[#f0d8ab] text-[#fff3dc] font-sans text-[11px] sm:text-xs tracking-widest font-bold uppercase px-3.5 py-2 rounded-xl transition-all duration-200 shadow-lg"
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

      {/* 2. COMBINED MASTER SECTION OPEN ON BROWSER */}
      <section className="relative w-full px-4 sm:px-6 lg:px-12 pt-0 pb-8 bg-[#f7f4ee]">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="w-full">
            <div className="relative min-h-[440px] sm:min-h-[500px] flex items-center">
              
              <div className="absolute inset-0 z-0 overflow-hidden shadow-none bg-transparent">
                <img 
                  src="/regen-2-hero-section.png" 
                  alt="Helping children grow through nature" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#f7f4ee] via-[#f7f4ee]/85 lg:via-transparent to-transparent opacity-95 sm:opacity-90"></div>
              </div>

              <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
                <div className="grid lg:grid-cols-12 gap-4 items-center">
                  <div className="lg:col-span-8 space-y-4 text-left">
                    
                    <div className="space-y-1.5">
                      <h2 className="text-3xl sm:text-4xl font-serif text-[#16260f] tracking-tight leading-snug font-bold drop-shadow-sm">
                        Helping Children Grow <br /> Through Nature
                      </h2>
                      <div className="flex items-center space-x-2 text-[#2b421a]">
                        <div className="h-[1.5px] w-10 bg-[#2b421a]"></div>
                        <span className="text-sm">🌿</span>
                        <div className="h-[1.5px] w-10 bg-[#2b421a]"></div>
                      </div>
                    </div>

                    <div className="space-y-3 text-[#16260f] text-sm sm:text-base leading-relaxed font-semibold max-w-2xl">
                      <p>
                        At Magnifying Children's Horizons we believe the natural world offers children more than a place to explore. <br /> It offers opportunities to wonder, discover, reflect and grow.
                      </p>
                      <p className="text-xs sm:text-sm text-[#203615] font-medium">
                        Through meaningful stories and nature-based experiences <br /> we help children develop positive character traits, inner awareness, spiritual growth <br /> and a deeper connection with the world around them.
                      </p>
                    </div>

                    <div className="pt-2 space-y-3">
                      <div>
                        <Link 
                          to="/about" 
                          className="inline-flex items-center gap-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-md transition border border-[#486337]"
                        >
                          <span>ABOUT MCH</span>
                          <span className="text-emerald-300">✓</span>
                        </Link>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#1b2c13]">Explore:</div>
                        <div className="flex flex-wrap gap-2.5">
                          <Link 
                            to="/books" 
                            className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-bold px-3.5 py-2 rounded-xl transition shadow-sm flex items-center gap-2 text-xs sm:text-sm"
                          >
                            <BookOpen size={16} className="text-[#b8df8a]" /> OUR BOOKS
                          </Link>
                          <Link 
                            to="/character-with-nature" 
                            className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-bold px-3.5 py-2 rounded-xl transition shadow-sm flex items-center gap-2 text-xs sm:text-sm"
                          >
                            <Compass size={16} className="text-[#b8df8a]" /> CHARACTER WITH NATURE®
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-5 pt-1">
            
            {/* STIRING SECTION HEADER WITH DEMARCATION LINES */}
            <div className="space-y-2 max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1.5px] w-12 sm:w-20 bg-[#3d5e27]/40"></div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1c2e14] font-bold whitespace-nowrap">
                  Stories That Open New Horizons
                </h2>
                <div className="h-[1.5px] w-12 sm:w-20 bg-[#3d5e27]/40"></div>
              </div>
              <p className="font-serif italic text-[#2c441c] tracking-wide text-base font-bold">
                Discover The Weaverton Series
              </p>
              <div className="flex items-center justify-center space-x-2.5 text-[#3d5e27] pt-0.5">
                <div className="h-[1.5px] w-10 bg-[#3d5e27]/80"></div>
                <span className="text-sm">🌿</span>
                <div className="h-[1.5px] w-10 bg-[#3d5e27]/80"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start px-2 sm:px-4">
              
              <div className="grid sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-5 w-full aspect-[3/4] max-w-[180px] sm:max-w-none mx-auto overflow-hidden rounded-2xl shadow-xl bg-stone-100">
                  <Link to="/books" className="block group w-full h-full">
                    <img 
                      src="/TFITM.jpeg" 
                      alt="The Face in the Mountain Book Cover" 
                      className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-[1.02] border-0"
                    />
                  </Link>
                </div>

                <div className="sm:col-span-7 space-y-1.5 text-left">
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-[#12200d] font-serif">The Face in the Mountain</h3>
                    <p className="text-[#1b2b13] text-xs sm:text-sm leading-relaxed mt-0.5 font-semibold">
                      When Boma's father must leave Vamper Creek, Borne worries that he won't remember everything he has been taught. As challenges arise, he must learn to trust what he knows, think creatively and discover what he is capable of.
                    </p>
                  </div>

                  <div className="flex text-amber-600 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#1d2f14] italic font-bold leading-relaxed border-l-2 border-[#3d5e27] pl-2.5 py-0.5">
                    "A beautifully written story that touches the heart and awakens a sense of wonder in every child." <br />
                    <span className="font-extrabold not-italic text-[#12200d]">— Amazon Reviewer</span>
                  </p>

                  <div className="pt-0.5 space-y-0.5">
                    <Link 
                      to="/books" 
                      className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-[#1b2c13] hover:text-[#12200d] transition"
                    >
                      DISCOVER THE BOOK <ArrowRight size={12} />
                    </Link>
                    <div>
                      <a 
                        href="https://www.amazon.com/Face-Mountain-Tolulope-Okudolo/dp/0994876947/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[11px] text-[#2c441c] font-bold hover:underline"
                      >
                        Buy on Amazon →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-5 w-full aspect-[3/4] max-w-[180px] sm:max-w-none mx-auto overflow-hidden rounded-2xl shadow-xl bg-stone-100">
                  <Link to="/books" className="block group w-full h-full">
                    <img 
                      src="/TFS.jpeg" 
                      alt="The Festival Shoes Book Cover" 
                      className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-[1.02] border-0"
                    />
                  </Link>
                </div>

                <div className="sm:col-span-7 space-y-1.5 text-left">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#12200d] bg-amber-400 px-1.5 py-0.5 rounded shadow-sm">COMING SOON</span>
                    <h3 className="font-extrabold text-lg sm:text-xl text-[#12200d] mt-0.5 font-serif">The Festival Shoes</h3>
                    <p className="text-[#1b2b13] text-xs sm:text-sm leading-relaxed mt-0.5 font-semibold">
                      Drumlo's journey takes him through Weaverton, where late facies and nature beings are busy at work. When an unexpected challenge arises, he must draw on his courage, determination and self-trust to find a way forward.
                    </p>
                  </div>

                  <div className="flex text-amber-600 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#1d2f14] italic font-bold leading-relaxed border-l-2 border-[#3d5e27] pl-2.5 py-0.5">
                    "An enchanting adventure filled with heart, magic and important lessons for every young reader." <br />
                    <span className="font-extrabold not-italic text-[#12200d]">— ABC Reviewer</span>
                  </p>

                  <div className="pt-0.5 space-y-0.5">
                    <Link 
                      to="/books" 
                      className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-[#1b2c13] hover:text-[#12200d] transition"
                    >
                      DISCOVER THE BOOK <ArrowRight size={12} />
                    </Link>
                    <div>
                      <a href="#buy" className="text-[11px] text-[#2c441c] font-bold hover:underline">
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
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-5">
              <div className="bg-[#e5eee0] border border-[#b8cca9] rounded-2xl p-5 sm:p-7 shadow-lg relative overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  
                  <div className="lg:col-span-4 relative max-w-[200px] sm:max-w-[240px] lg:max-w-none mx-auto w-full shadow-xl rounded-xl">
                    <div className="absolute -top-2.5 -left-2.5 bg-amber-500 text-white font-black text-[9px] tracking-widest px-2.5 py-0.5 rounded-full uppercase shadow-md z-10 rotate-[-6deg]">
                      100% FREE
                    </div>
                    <img 
                      src="/activity-book-image.jpeg" 
                      alt="Continue the Adventure Free Activity Book" 
                      className="w-full h-auto object-contain rounded-xl border-2 border-white bg-white shadow-md block"
                    />
                  </div>

                  <div className="lg:col-span-8 space-y-3 text-left">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#3d5e27]">SPECIAL READER GIFT</span>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#12200d] font-bold mt-0.5">
                        Continue the Adventure — It's Free!
                      </h3>
                      <p className="font-serif italic text-[#2c441c] text-xs sm:text-sm font-bold mt-0.5">
                        Explore the World of The Weaverton Series
                      </p>
                      <p className="text-xs sm:text-sm text-[#1b2b13] leading-relaxed mt-1.5 font-semibold">
                        Step into the world of The Weaverton Series with a free activity book designed to encourage children to colour, create, explore and discover more about the characters and ideas they encounter.
                      </p>
                    </div>

                    <div className="pt-1">
                      <Link 
                        to="#" 
                        className="w-full bg-[#12200d] hover:bg-[#091006] text-white font-sans text-[11px] tracking-widest font-bold uppercase py-3 rounded-xl shadow-md transition duration-200 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-3.5 h-3.5 text-[#b8df8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>GET THE FREE ACTIVITY BOOK</span>
                      </Link>
                    </div>

                    <p className="text-[10px] sm:text-xs text-[#324d20] font-bold text-center sm:text-left">
                      You’ll also receive occasional news from Magnifying Children’s Horizons about our books and programmes.
                    </p>
                  </div>

                </div>
              </div>
            </section>

      {/* 4. CHARACTER WITH NATURE® SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text & Button */}
          <div className="lg:col-span-7 space-y-3 text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#16260f] font-bold tracking-tight">
                Character with Nature™
              </h2>
              <p className="font-serif italic text-[#314a20] text-xs sm:text-sm font-medium mt-0.5">
                Tapping into Nature’s Wisdom to Help Children Grow From Within
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#223517] leading-relaxed font-normal">
              Character with Nature is a nature-based character development programme that helps children discover meaningful connections between the natural world, their choices and their inner lives.
            </p>
            
            <p className="text-xs sm:text-sm text-[#223517] leading-relaxed font-normal">
              Through stories, nature explorations, observation and reflection, children are encouraged to discover positive character traits, deepen their spiritual awareness and experience for themselves some of the principles at work in nature and in life.
            </p>

            <div className="pt-1">
              <Link 
                to="/character-with-nature" 
                className="inline-flex items-center space-x-2 bg-[#1b2b13] hover:bg-[#121e0c] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl shadow-md transition border border-[#3b572a]"
              >
                <span>EXPLORE CHARACTER WITH NATURE</span>
                <span>→</span>
              </Link>
            </div>

            {/* Sub-section: How Children Explore With CWN (Narrowed width version) */}
            <div className="pt-3 space-y-2">
              <div className="flex items-center space-x-2 text-stone-500 text-[9px] uppercase font-bold tracking-widest w-full">
                <div className="h-[1px] flex-1 bg-[#d0dfc6]"></div>
                <span>— HOW CHILDREN EXPLORE WITH CWN —</span>
                <div className="h-[1px] flex-1 bg-[#d0dfc6]"></div>
              </div>

              {/* Centered narrower container wrapper */}
              <div className="max-w-xs sm:max-w-sm mx-auto">
                <div className="flex items-center justify-between w-full px-2 py-0.5">
                  
                  {/* Step 1: Discover */}
                  <div className="flex flex-col items-center text-center space-y-1 group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-sm transition-transform transform group-hover:scale-105">
                      <Search size={14} strokeWidth={2} />
                    </div>
                    <span className="font-bold text-[9px] uppercase text-[#16260f] tracking-wider">DISCOVER</span>
                    <span className="text-[8px] text-stone-600 max-w-[70px] leading-tight font-medium">Notice & explore nature</span>
                  </div>

                  <div className="text-[#3b572a] font-bold text-xs pb-3">→</div>

                  {/* Step 2: Connect */}
                  <div className="flex flex-col items-center text-center space-y-1 group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-sm transition-transform transform group-hover:scale-105">
                      <Link2 size={14} strokeWidth={2} />
                    </div>
                    <span className="font-bold text-[9px] uppercase text-[#16260f] tracking-wider">CONNECT</span>
                    <span className="text-[8px] text-stone-600 max-w-[70px] leading-tight font-medium">Make connections & meaning</span>
                  </div>

                  <div className="text-[#3b572a] font-bold text-xs pb-3">→</div>

                  {/* Step 3: Create */}
                  <div className="flex flex-col items-center text-center space-y-1 group">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-sm transition-transform transform group-hover:scale-105">
                      <Sparkles size={14} strokeWidth={2} />
                    </div>
                    <span className="font-bold text-[9px] uppercase text-[#16260f] tracking-wider">CREATE</span>
                    <span className="text-[8px] text-stone-600 max-w-[70px] leading-tight font-medium">Bring discoveries to life</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image & Designed to Grow With Your Child Box */}
          <div className="lg:col-span-5 w-full space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-[#ebf2e6]">
              <div className="relative w-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center">
                <img 
                  src="cwn-image-1.png" 
                  alt="Child exploring nature stream" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* <div className="space-y-2 bg-[#ebf2e6]/50 p-3 rounded-2xl border border-[#b2cca0]/60"> */}
              <img 
                src="/image.png" 
                alt="Continue the Adventure Free Activity Book" 
                className="w-full h-auto object-contain rounded-xl border-2 border-none bg-white shadow-md block"
              />
            {/* </div> */}

            

          </div>

        </div>
      </section>

      {/* 5. OUR COLLABORATION: BLOSSOM IN NATURE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-6 pb-4">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          
          <div className="md:col-span-4 max-w-[240px] sm:max-w-xs md:max-w-none mx-auto w-full flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-transparent w-fit">
              <img 
                src="footer.jpeg" 
                alt="Blossom in Nature visual" 
                className="block object-cover object-center"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-3 text-left">
            <div className="flex items-center space-x-2">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#2b421a]">OUR COLLABORATION</span>
              <span className="text-emerald-700"><Check size={13} strokeWidth={3} /></span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#12200d] font-bold">
                Blossom in Nature
              </h3>
              <p className="font-serif italic text-[#2c441c] text-xs sm:text-sm font-bold mt-0.5">
                STORIES TOLD FROM TWO PERSPECTIVES
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#1b2b13] leading-relaxed font-semibold">
              Magnifying Children's Horizons is proud to collaborate with Blossom in Nature, a children's book initiative created by Tolu Okudolo and Angela Ehrlich.
            </p>
            <p className="text-xs sm:text-sm text-[#1b2b13] leading-relaxed font-semibold">
              Through paired stories told through the eyes of a child and a nature being, children explore positive character traits and unseen connections within nature.
            </p>

            <div className="pt-1">
              <Link 
                to="/blossom-in-nature" 
                className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-xl transition border border-[#486337]"
              >
                <span>DISCOVER BLOSSOM IN NATURE</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#f4f0eb] border-t border-[#23351a]/15 pt-6 pb-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 pb-5">
            
            <div className="space-y-1.5 text-center lg:text-left">
              <Link to="/" className="inline-flex items-center space-x-3 justify-center lg:justify-start">
                <img 
                  src="/navbar-image.png" 
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
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

          </div>

          <div className="pt-3 border-t border-[#23351a]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#42503b] font-semibold gap-3 pb-4 text-center sm:text-left">
            <p>© 2026 Magnifying Children's Horizons. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:space-x-6">
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
              <a href="#terms" className="hover:underline">Terms of Use</a>
              <a href="#credits" className="hover:underline">Site by Pixel Designer Agency</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}