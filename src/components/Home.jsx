import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Compass, Star, ArrowRight, Check, Search, Link2, Sparkles } from 'lucide-react';
import ScrollFade from './ScrollFade';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#14230f] selection:bg-[#355322] selection:text-white overflow-x-hidden">
      
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#87a96b]/10 to-[#3c5e2a]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-10 w-[400px] h-[400px] bg-gradient-to-br from-[#c2d0b7]/20 to-[#4a6b35]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
    {/* 1. HERO SECTION (Edge-to-edge with responsive spacing for mobile) */}
      <section className="relative w-full pt-0 pb-2">
        <div className="relative w-full rounded-none sm:rounded-3xl overflow-hidden shadow-xl min-h-[52vh] lg:min-h-[60vh] flex items-center px-4 sm:px-12 lg:px-20 py-8">
          
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#162211]">
            <img 
              src="/regen-hero-image.jpeg" 
              alt="Tapping into Nature's Wisdom" 
              className="w-full h-full object-cover object-center transform scale-100 filter brightness-95"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Responsive padding container that adapts safely to smaller screens while preserving desktop shift */}
          <div className="relative z-10 w-full max-w-6xl flex flex-col items-start justify-center text-left pl-2 sm:pl-16 lg:pl-64 pr-2">
            <div className="space-y-4 max-w-4xl text-left">
              
              <div className="inline-block space-y-1">
                <h1 className="text-[2.1rem] sm:text-[3.25rem] lg:text-[4.25rem] font-serif text-[#ffffff] font-normal tracking-wide leading-[1.05] drop-shadow-lg">
                  <span className="block text-[1.1rem] sm:text-[1.65rem] lg:text-[2.15rem] font-serif font-semibold tracking-[0.2em] text-[#f4f0eb] mb-2 uppercase drop-shadow-md">
                    Tapping into
                  </span>
                  Nature's Wisdom
                </h1>
                
                <div className="flex items-center space-x-3 my-3 w-full max-w-lg">
                  <div className="h-[1.5px] flex-1 bg-[#82ab66]"></div>
                  <span className="text-[#82ab66] text-base filter drop-shadow">🌿</span>
                  <div className="h-[1.5px] flex-1 bg-[#82ab66]"></div>
                </div>
              </div>

              {/* Straight line subtitle */}
              <p className="text-base sm:text-xl lg:text-2xl text-[#fcf9f5] font-serif font-medium tracking-wide max-w-2xl drop-shadow-md pt-0.5 leading-relaxed">
                to Nurture Character and Values in Children
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link 
                  to="/books" 
                  className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-[#ffffff] font-sans text-xs sm:text-sm tracking-widest font-bold uppercase px-5 py-3 rounded-xl shadow-xl transition-all duration-200 border border-[#53733e]"
                >
                  <svg className="w-4 h-4 text-[#f4ebd0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Explore Our Books</span>
                  <span className="ml-1 text-xs">→</span>
                </Link>

                <Link 
                  to="/character-with-nature" 
                  className="inline-flex items-center space-x-2 bg-black/60 hover:bg-black/70 backdrop-blur-md border border-[#f0d8ab] text-[#fff3dc] font-sans text-xs sm:text-sm tracking-widest font-bold uppercase px-4 py-3 rounded-xl transition-all duration-200 shadow-lg"
                >
                  <svg className="w-4 h-4 text-[#f0d8ab] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 8.5l-4 4-2-2" />
                  </svg>
                  <span className="leading-tight text-left">
                    Discover Character With Nature™ <span className="ml-0.5 text-xs inline-block">→</span>
                  </span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. COMBINED MASTER SECTION */}
      <section className="relative w-full px-4 sm:px-6 lg:px-12 pt-4 pb-8 bg-[#f7f4ee]">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="w-full">
            <div className="relative min-h-[320px] sm:min-h-[380px] flex items-center rounded-2xl overflow-hidden shadow-sm">
              
              <div className="absolute inset-0 z-0 overflow-hidden shadow-none bg-transparent">
                <img 
                  src="/regen-2-hero-section.png" 
                  alt="Helping children grow through nature" 
                  className="w-full h-full object-cover object-center transform scale-95 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#f7f4ee] via-[#f7f4ee]/90 lg:via-transparent to-transparent opacity-95 sm:opacity-90"></div>
              </div>

              <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-8">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-4 text-left">
                    
                    <div className="space-y-2">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#16260f] tracking-tight leading-snug font-bold drop-shadow-sm">
                        Helping Children Grow Through Nature
                      </h2>
                      <div className="flex items-center space-x-2 text-[#2b421a]">
                        <div className="h-[1.5px] w-8 bg-[#2b421a]"></div>
                        <span className="text-xs">🌿</span>
                        <div className="h-[1.5px] w-8 bg-[#2b421a]"></div>
                      </div>
                    </div>

                    <div className="space-y-4 text-[#14230f] text-lg leading-relaxed font-medium max-w-2xl">
                      <p>
                        At Magnifying Children's Horizons we believe the natural world offers children more than a place to explore. It offers opportunities to wonder, discover, reflect and grow.
                      </p>
                      <p className="text-lg text-[#14230f] font-medium leading-relaxed">
                        Through meaningful stories and nature-based experiences we help children develop positive character traits, inner awareness, spiritual growth and a deeper connection with the world around them.
                      </p>
                    </div>

                    <div className="pt-2 space-y-4">
                      <div>
                        <Link 
                          to="/about" 
                          className="inline-flex items-center gap-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-5 py-3 rounded-xl shadow-md transition border border-[#486337]"
                        >
                          <span>ABOUT US</span>
                          <span className="text-emerald-300">✓</span>
                        </Link>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-extrabold uppercase tracking-widest text-[#14230f]">Explore:</div>
                        <div className="flex flex-wrap gap-3">
                          <Link 
                            to="/books" 
                            className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-bold px-4 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2 text-sm"
                          >
                            <BookOpen size={16} className="text-[#b8df8a]" /> OUR BOOKS
                          </Link>
                          <Link 
                            to="/character-with-nature" 
                            className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-bold px-4 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2 text-sm"
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

          <div className="space-y-6 pt-4">
            
            {/* STORIES SECTION HEADER */}
            <ScrollFade delay={60}>
              <div className="space-y-2 max-w-3xl mx-auto text-center pb-2">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1.5px] w-12 sm:w-20 bg-[#3d5e27]/40"></div>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#14230f] font-bold whitespace-nowrap">
                    Stories That Open New Horizons
                  </h2>
                  <div className="h-[1.5px] w-12 sm:w-20 bg-[#3d5e27]/40"></div>
                </div>
                <p className="font-serif italic text-[#243b17] tracking-wide text-base font-semibold">
                  Discover The Weaverton Series
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#3d5e27] pt-1">
                  <div className="h-[1.5px] w-10 bg-[#3d5e27]/80"></div>
                  <span className="text-xs">🌿</span>
                  <div className="h-[1.5px] w-10 bg-[#3d5e27]/80"></div>
                </div>
              </div>
            </ScrollFade>
                     {/* BOOKS SITTING DIRECTLY ON THE PAGE */}

<div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch px-0 sm:px-2">

{/* BOOK 1 */} <ScrollFade delay={90}> <div className="grid sm:grid-cols-12 gap-6 items-stretch h-full">

  {/* BOOK COVER */}
  <div className="sm:col-span-5 w-full flex items-stretch justify-center">
    <Link
      to="/books"
      className="block group w-full flex items-stretch justify-center"
    >
      <img
        src="/tfim-book-cover.png"
        alt="The Face in the Mountain Book Cover"
        className="w-[180px] sm:w-[210px] h-full min-h-[335px] sm:min-h-[385px] object-cover rounded-lg transition duration-300 group-hover:scale-[1.02] drop-shadow-xl"
      />
    </Link>
  </div>

  {/* BOOK DETAILS */}
  <div className="sm:col-span-7 space-y-3 text-left flex flex-col justify-center h-full py-2">
    <div>
      <h3 className="font-extrabold text-xl text-[#0e170a] font-serif">
        The Face in the Mountain
      </h3>

      <p className="text-[#14230f] text-lg leading-relaxed mt-2 font-medium">
        Boma’s father leaves Vomper Creek, Boma worries he won’t remember
        all he has been taught. Faced with unexpected challenges, he must
        trust what he knows, think creatively and discover what he can do.
      </p>
    </div>

    <div className="flex text-amber-600 gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>

    <p className="text-sm text-[#14230f] italic font-semibold leading-relaxed border-l-2 border-[#3d5e27] pl-3 py-1">
      "A beautifully written story that touches the heart and awakens a
      sense of wonder in every child." <br />
      <span className="font-bold not-italic text-[#0e170a]">
        — Amazon Reviewer
      </span>
    </p>

    <div className="pt-2 space-y-1">
      <Link
        to="/books"
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#14230f] hover:text-[#3c5e2a] transition"
      >
        DISCOVER THE BOOK <ArrowRight size={13} />
      </Link>

      <div>
        <a
          href="https://www.amazon.com/Face-Mountain-Tolulope-Okudolo/dp/0994876947/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#243b17] font-bold hover:underline"
        >
          Buy on Amazon →
        </a>
      </div>
    </div>
  </div>
</div>

  </ScrollFade>

{/* BOOK 2: THE FESTIVAL SHOES */} <ScrollFade delay={120}> <div className="grid sm:grid-cols-12 gap-6 items-stretch h-full">

  {/* BOOK COVER */}
  <div className="sm:col-span-5 w-full flex items-stretch justify-center">
    <Link
      to="/books"
      className="block group w-full flex items-stretch justify-center"
    >
      <img
        src="/TFS-Book-cover.png"
        alt="The Festival Shoes Book Cover"
        className="w-[216px] sm:w-[252px] h-full min-h-[335px] sm:min-h-[385px] object-cover rounded-lg transition duration-300 group-hover:scale-[1.02] drop-shadow-xl"
      />
    </Link>
  </div>

  {/* BOOK DETAILS */}
  <div className="sm:col-span-7 space-y-3 text-left flex flex-col justify-center h-full py-2">
    <div>
      <span className="text-[10px] font-black uppercase tracking-widest text-[#0e170a] bg-amber-400 px-2 py-0.5 rounded shadow-sm">
        COMING SOON
      </span>

      <h3 className="font-extrabold text-xl text-[#0e170a] mt-1.5 font-serif">
        The Festival Shoes
      </h3>

      <p className="text-[#14230f] text-lg leading-relaxed mt-2 font-medium">
       Journey through Weaverton with Drumlo on an unexpected
        adventure that reveals the power of our thoughts, words and actions —
         and how our choices connect us to others and the world around us.
      </p>
    </div>

    <div className="flex text-amber-600 gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>

    <p className="text-sm text-[#14230f] italic font-semibold leading-relaxed border-l-2 border-[#3d5e27] pl-3 py-1">
      "An enchanting adventure filled with heart, magic and important
      lessons for every young reader." <br />
      <span className="font-bold not-italic text-[#0e170a]">
        — ABC Reviewer
      </span>
    </p>

    <div className="pt-2 space-y-1">
      <Link
        to="/books"
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#14230f] hover:text-[#3c5e2a] transition"
      >
        DISCOVER THE BOOK <ArrowRight size={13} />
      </Link>

      <div>
        <a
          href="#buy"
          className="text-xs text-[#243b17] font-bold hover:underline"
        >
          Buy on Amazon →
        </a>
      </div>
    </div>
  </div>

</div>

  </ScrollFade>

</div>

          </div>

        </div>
      </section>

      {/* 3. FREE ACTIVITY BOOK SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <ScrollFade delay={80}>
          <div className="bg-[#e5eee0] border border-[#b8cca9] rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-4 relative max-w-[200px] sm:max-w-[240px] lg:max-w-none mx-auto w-full shadow-xl rounded-xl">
                <div className="absolute -top-2 -left-2 bg-amber-500 text-white font-black text-[10px] tracking-widest px-2.5 py-1 rounded-full uppercase shadow-md z-10 rotate-[-6deg]">
                  100% FREE
                </div>
                <img 
                  src="/activity-book-image.jpeg" 
                  alt="Continue the Adventure Free Activity Book" 
                  className="w-full h-auto object-contain rounded-xl border-2 border-white bg-white shadow-md block"
                />
              </div>

              <div className="lg:col-span-8 space-y-4 text-left">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#3d5e27]">SPECIAL READER GIFT</span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#0e170a] font-bold mt-1">
                    Continue the Adventure — It's Free!
                  </h3>
                  <p className="font-serif italic text-[#243b17] text-base font-semibold mt-1">
                    Explore the World of The Weaverton Series
                  </p>
                  <p className="text-lg text-[#14230f] leading-relaxed mt-3 font-medium">
                    Step into the world of The Weaverton Series with a free activity book designed to encourage children to colour, create, explore and discover more about the characters and ideas they encounter.
                  </p>
                </div>

                <div className="pt-2">
                  <Link 
                    to="/resources#activity-book-form" 
                    className="w-full sm:w-auto inline-flex bg-[#0e170a] hover:bg-[#070b05] text-white font-sans text-xs tracking-widest font-bold uppercase px-8 py-3.5 rounded-xl shadow-md transition duration-200 items-center justify-center space-x-2"
                  >
                    <svg className="w-4 h-4 text-[#b8df8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>GET THE FREE ACTIVITY BOOK</span>
                  </Link>
                </div>

                <p className="text-xs sm:text-sm text-[#29401b] font-semibold text-center sm:text-left">
                  You’ll also receive occasional news from Magnifying Children’s Horizons about our books and programmes.
                </p>
              </div>

            </div>
          </div>
        </ScrollFade>
      </section>

      {/* 4. CHARACTER WITH NATURE® SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <ScrollFade delay={90}>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text & Button */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#16260f] font-bold tracking-tight">
                  Character with Nature™
                </h2>
                <p className="font-serif italic text-[#28401a] text-base font-semibold mt-1">
                  Tapping into Nature’s Wisdom to Help Children Grow From Within
                </p>
              </div>

              <p className="text-lg text-[#14230f] leading-relaxed font-medium">
                Character with Nature is a nature-based character development programme that helps children discover meaningful connections between the natural world, their choices and their inner lives.
              </p>
              
              <p className="text-lg text-[#14230f] leading-relaxed font-medium">
                Through stories, nature explorations, observation and reflection, children are encouraged to discover positive character traits, deepen their spiritual awareness and experience for themselves some of the principles at work in nature and in life.
              </p>

              <div className="pt-2">
                <Link 
                  to="/character-with-nature" 
                  className="inline-flex items-center space-x-2 bg-[#1b2b13] hover:bg-[#121e0c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition border border-[#3b572a]"
                >
                  <span>EXPLORE CHARACTER WITH NATURE</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Sub-section: Process Graphic */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-[#243b17] text-xs uppercase font-bold tracking-widest w-full">
                  <div className="h-[1px] flex-1 bg-[#b5cca7]"></div>
                  <span>— HOW CHILDREN EXPLORE WITH CWN —</span>
                  <div className="h-[1px] flex-1 bg-[#b5cca7]"></div>
                </div>

                {/* Centered container wrapper for process graphic */}
                <div className="max-w-md mx-auto pt-1">
                  <div className="flex items-center justify-between w-full px-2 py-1">
                    
                    {/* Step 1: Discover */}
                    <div className="flex flex-col items-center text-center space-y-1.5 group">
                      <div className="w-12 h-12 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-md transition-transform transform group-hover:scale-105">
                        <Search size={20} strokeWidth={2.2} />
                      </div>
                      <span className="font-black text-xs uppercase text-[#14230f] tracking-wider">DISCOVER</span>
                      <span className="text-xs text-[#243b17] max-w-[100px] leading-tight font-semibold">Notice & explore nature</span>
                    </div>

                    <div className="text-[#3b572a] font-black text-sm pb-4">→</div>

                    {/* Step 2: Connect */}
                    <div className="flex flex-col items-center text-center space-y-1.5 group">
                      <div className="w-12 h-12 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-md transition-transform transform group-hover:scale-105">
                        <Link2 size={20} strokeWidth={2.2} />
                      </div>
                      <span className="font-black text-xs uppercase text-[#14230f] tracking-wider">CONNECT</span>
                      <span className="text-xs text-[#243b17] max-w-[100px] leading-tight font-semibold">Make connections & meaning</span>
                    </div>

                    <div className="text-[#3b572a] font-black text-sm pb-4">→</div>

                    {/* Step 3: Create */}
                    <div className="flex flex-col items-center text-center space-y-1.5 group">
                      <div className="w-12 h-12 rounded-full bg-[#1b2b13] text-white flex items-center justify-center shadow-md transition-transform transform group-hover:scale-105">
                        <Sparkles size={20} strokeWidth={2.2} />
                      </div>
                      <span className="font-black text-xs uppercase text-[#14230f] tracking-wider">CREATE</span>
                      <span className="text-xs text-[#243b17] max-w-[100px] leading-tight font-semibold">Bring discoveries to life</span>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Images */}
            <div className="lg:col-span-5 w-full space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-[#ebf2e6]">
                <div className="relative w-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center">
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
        </ScrollFade>
      </section>

      {/* 5. OUR COLLABORATION: BLOSSOM IN NATURE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8 pb-6">
        <ScrollFade delay={80}>
          <div className="grid md:grid-cols-12 gap-8 items-center bg-[#f2f6ee] p-6 sm:p-8 rounded-2xl border border-[#3c5e2a]/15 shadow-sm">
            
            <div className="md:col-span-4 max-w-[220px] sm:max-w-[260px] md:max-w-none mx-auto w-full flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-transparent w-fit">
                <img 
                  src="/footer.jpeg" 
                  alt="Blossom in Nature visual" 
                  className="block object-cover object-center w-[200px] sm:w-[240px] md:w-[280px]"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <span className="text-2xl sm:text-3xl font-serif text-[#0e170a] font-bold">OUR COLLABORATION</span>
              </div>

             <div>
  <h3 className="text-2xl sm:text-3xl font-serif text-[#0e170a] font-bold">
    Blossom in Nature
  </h3>
  <p className="font-serif italic text-[#243b17] text-sm sm:text-base font-semibold mt-1">
    STORIES TOLD FROM TWO PERSPECTIVES
  </p>
</div>

              <p className="text-lg text-[#14230f] leading-relaxed font-medium">
                Blossom in Nature is a creative collaboration between Tolulope Okudolo of Magnifying Children’s Horizons and Angela Ehrlich of Nature4Children.
              </p>
              <p className="text-lg text-[#14230f] leading-relaxed font-medium">
                Through interconnected stories told from human and nature perspectives, children discover how the two worlds affect one another while exploring positive character qualities.
              </p>

              <div className="pt-2">
                <a 
                  href="https://blossominnature.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  DISCOVER BLOSSOM IN NATURE →
                </a>
              </div>
            </div>

          </div>
        </ScrollFade>
      </section>
      
            {/* Footer Section */}
            <div className="pt-6 border-t border-[#23351a]/15 bg-[#f5f1e8]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 px-4 sm:px-6 lg:px-10 max-w-[90rem] mx-auto">
                 
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
      
                <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider font-extrabold text-[#28421c]">
                  <Link to="/" className="hover:text-[#1a2b13] transition">Home</Link>
                  <Link to="/books" className="hover:text-[#1a2b13] transition">Books</Link>
                  <Link to="/cwn/pathways" className="hover:text-[#1a2b13] transition">Character with Nature™</Link>
                  <Link to="/about" className="hover:text-[#1a2b13] transition">About Us</Link>
                  <Link to="/collaborations" className="hover:text-[#1a2b13] transition">Collaborations</Link>
                  <Link to="/contact" className="hover:text-[#1a2b13] transition">Contact</Link>
                </div>
      
                <div className="flex items-center space-x-2.5 shrink-0">
                  <a 
                    href="https://www.instagram.com/magnifyingchildrenshorizons/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram" 
                    className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                </div>
      
              </div>
      
              <div className="pt-4 pb-6 px-4 sm:px-6 lg:px-10 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#384a30] font-semibold gap-2 max-w-[90rem] mx-auto">
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
           