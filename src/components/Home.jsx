import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Compass, Star, ArrowRight, Check } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#1c2c15] selection:bg-[#355322] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-1 pb-4">
        <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl min-h-[60vh] lg:min-h-[68vh] flex items-center px-6 sm:px-12 lg:px-20 py-6">
          
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#162211]">
            <img 
              src="/regen-hero-image.jpeg" 
              alt="Tapping into Nature's Wisdom" 
              className="w-full h-full object-cover object-center transform scale-100"
            />
            <div className="absolute inset-0 bg-black/15"></div>
          </div>

          <div className="relative z-10 w-full max-w-5xl flex flex-col items-start justify-center text-left pl-10 sm:pl-28 lg:pl-44 -mt-4 sm:-mt-6">
            <div className="space-y-2 max-w-5xl text-left">
              
              <div className="inline-block space-y-0.5">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#fcf9f2] font-normal tracking-wide leading-[1.05] drop-shadow-md">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-light tracking-[0.2em] text-[#e8e4dc] mb-1 uppercase drop-shadow">
                    Tapping into
                  </span>
                  Nature's Wisdom
                </h1>
                
                <div className="flex items-center space-x-3 my-1.5 w-full max-w-2xl opacity-95">
                  <div className="h-[1px] flex-1 bg-[#658a4c]/80"></div>
                  <span className="text-[#658a4c] text-base filter drop-shadow">🌿</span>
                  <div className="h-[1px] flex-1 bg-[#658a4c]/80"></div>
                </div>
              </div>

              <p className="text-lg sm:text-xl lg:text-3xl text-[#f4efe6] font-serif font-normal tracking-wide max-w-2xl drop-shadow pt-0.5">
                to Nurture Character and Values in Children
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1.5">
                <Link 
                  to="/books" 
                  className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-[#ffffff] font-sans text-[11px] sm:text-xs tracking-widest font-semibold uppercase px-4 py-2.5 rounded-xl shadow-xl transition-all duration-200 border border-[#486337]"
                >
                  <svg className="w-3.5 h-3.5 text-[#e2d5bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Explore Our Books</span>
                  <span className="ml-1 text-[11px]">→</span>
                </Link>

                <Link 
                  to="/character-with-nature" 
                  className="inline-flex items-center space-x-2 bg-black/40 hover:bg-black/50 backdrop-blur-md border border-[#e5cea3]/70 text-[#f7e6c4] font-sans text-[11px] sm:text-xs tracking-widest uppercase px-3.5 py-2 rounded-xl transition-all duration-200 shadow-lg"
                >
                  <svg className="w-3.5 h-3.5 text-[#e5cea3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 8.5l-4 4-2-2" />
                  </svg>
                  <span className="leading-tight text-left">
                    Discover Character <br className="hidden sm:inline" />
                    With Nature™ <span className="ml-0.5 text-[11px] inline-block">→</span>
                  </span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. COMBINED MASTER SECTION OPEN ON BROWSER */}
      <section className="relative w-full px-6 sm:px-8 lg:px-12 py-12 bg-[#f7f4ee]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="w-full">
            <div className="relative min-h-[380px] flex items-center">
              
              <div className="absolute inset-0 z-0 overflow-hidden shadow-none bg-transparent">
                <img 
                  src="/regen-2-hero-setion-image.png" 
                  alt="Helping children grow through nature" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ee] via-[#f7f4ee]/80 lg:via-transparent to-transparent opacity-95 sm:opacity-90"></div>
              </div>

              <div className="relative z-10 w-full px-4 sm:px-10 lg:px-16 py-6">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-6 lg:col-start-7 space-y-3 text-left">
                    
                    <div className="space-y-1">
                      <h2 className="text-3xl sm:text-4xl font-serif text-[#1e3215] tracking-tight leading-snug font-bold drop-shadow-sm">
                        Helping Children Grow Through Nature
                      </h2>
                      <div className="flex items-center space-x-3 text-[#355322]">
                        <div className="h-[1.5px] w-12 bg-[#355322]"></div>
                        <span className="text-lg">🌿</span>
                        <div className="h-[1.5px] w-12 bg-[#355322]"></div>
                      </div>
                    </div>

                    <div className="space-y-2 text-[#1c2c15] text-sm sm:text-base leading-relaxed font-semibold">
                      <p>
                        At Magnifying Children's Horizons, we believe the natural world offers children more than a place to explore. It offers opportunities to wonder, discover, reflect and grow.
                      </p>
                      <p className="text-xs sm:text-sm text-[#1e3016] font-medium">
                        Through meaningful stories and nature-based experiences, we help children develop positive character traits, inner awareness, spiritual growth and a deeper connection with the world around them.
                      </p>
                    </div>

                    <div className="pt-1 space-y-2.5">
                      <div>
                        <Link 
                          to="/about" 
                          className="inline-flex items-center gap-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-xl transition border border-[#486337]"
                        >
                          <span>ABOUT MCH</span>
                          <span className="text-emerald-300">✓</span>
                        </Link>
                      </div>

                      <div className="space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-widest text-[#23381a]">Explore:</div>
                        <div className="flex flex-wrap gap-2.5">
                          <Link 
                            to="/books" 
                            className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-semibold px-3.5 py-2 rounded-xl transition shadow-lg flex items-center gap-1.5 text-xs"
                          >
                            <BookOpen size={14} className="text-[#b8df8a]" /> OUR BOOKS
                          </Link>
                          <Link 
                            to="/character-with-nature" 
                            className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-semibold px-3.5 py-2 rounded-xl transition shadow-lg flex items-center gap-1.5 text-xs"
                          >
                            <Compass size={14} className="text-[#b8df8a]" /> CHARACTER WITH NATURE®
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-6 pt-2">
            
            <div className="text-center space-y-2 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-[#23351a]">
                Stories That Open New Horizons
              </h2>
              <p className="font-serif italic text-[#3c552a] tracking-wide text-lg font-bold">
                Discover The Weaverton Series
              </p>
              <div className="flex items-center justify-center space-x-3 text-[#52703c] pt-0.5">
                <div className="h-[1.5px] w-12 bg-[#52703c]/60"></div>
                <span>🌿</span>
                <div className="h-[1.5px] w-12 bg-[#52703c]/60"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-start px-2 sm:px-4">
              
              <div className="grid sm:grid-cols-12 gap-5 items-center">
                <div className="sm:col-span-5">
                  <Link to="/books" className="block group">
                    <img 
                      src="/TFITM.jpeg" 
                      alt="The Face in the Mountain Book Cover" 
                      className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300 group-hover:scale-[1.02] border-0"
                    />
                  </Link>
                </div>

                <div className="sm:col-span-7 space-y-2 text-left">
                  <div>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-[#1a2b13] font-serif">The Face in the Mountain</h3>
                    <p className="text-[#25351e] text-xs sm:text-sm leading-relaxed mt-1 font-medium">
                      When Boma's father must leave Vamper Creek, Borne worries that he won't remember everything he has been taught. As challenges arise, he must learn to trust what he knows, think creatively and discover what he is capable of.
                    </p>
                  </div>

                  <div className="flex text-amber-600 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#2a3c22] italic font-semibold leading-relaxed border-l-2 border-[#52703c] pl-3 py-0.5">
                    "A beautifully written story that touches the heart and awakens a sense of wonder in every child." <br />
                    <span className="font-bold not-italic text-[#1a2b13]">— Amazon Reviewer</span>
                  </p>

                  <div className="pt-1 space-y-0.5">
                    <Link 
                      to="/books" 
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#28421c] hover:text-[#1a2b13] transition"
                    >
                      DISCOVER THE BOOK <ArrowRight size={13} />
                    </Link>
                    <div>
                      <a href="#buy" className="text-[11px] text-[#3c552a] font-bold hover:underline">
                        Buy on Amazon →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-12 gap-5 items-center">
                <div className="sm:col-span-5">
                  <Link to="/books" className="block group">
                    <img 
                      src="/TFS.jpeg" 
                      alt="The Festival Shoes Book Cover" 
                      className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300 group-hover:scale-[1.02] border-0"
                    />
                  </Link>
                </div>

                <div className="sm:col-span-7 space-y-2 text-left">
                  <div>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#1a2b13] bg-amber-400 px-2 py-0.5 rounded shadow-sm">COMING SOON</span>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-[#1a2b13] mt-1 font-serif">The Festival Shoes</h3>
                    <p className="text-[#25351e] text-xs sm:text-sm leading-relaxed mt-1 font-medium">
                      Drumlo's journey takes him through Weaverton, where late facies and nature beings are busy at work. When an unexpected challenge arises, he must draw on his courage, determination and self-trust to find a way forward.
                    </p>
                  </div>

                  <div className="flex text-amber-600 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#2a3c22] italic font-semibold leading-relaxed border-l-2 border-[#52703c] pl-3 py-0.5">
                    "An enchanting adventure filled with heart, magic and important lessons for every young reader." <br />
                    <span className="font-bold not-italic text-[#1a2b13]">— ABC Reviewer</span>
                  </p>

                  <div className="pt-1 space-y-0.5">
                    <Link 
                      to="/books" 
                      className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#28421c] hover:text-[#1a2b13] transition"
                    >
                      DISCOVER THE BOOK <ArrowRight size={13} />
                    </Link>
                    <div>
                      <a href="#buy" className="text-[11px] text-[#3c552a] font-bold hover:underline">
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

      {/* 3. FREE ACTIVITY BOOK LEAD-CAPTURE SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-6">
        <div className="bg-[#e9f0e4] border border-[#cbdac1] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-3 -left-3 bg-amber-500 text-white font-black text-[10px] tracking-widest px-3 py-1 rounded-full uppercase shadow-md z-10 rotate-[-6deg]">
                100% FREE
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img 
                  src="/activity-book-mockup.jpeg" 
                  alt="Continue the Adventure Free Activity Book" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#52703c]">SPECIAL READER GIFT</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1e3215] font-bold mt-0.5">
                  Continue the Adventure — It's Free!
                </h3>
                <p className="font-serif italic text-[#355322] text-sm sm:text-base font-semibold mt-0.5">
                  Explore the World of The Weaverton Series
                </p>
                <p className="text-xs sm:text-sm text-[#25351e] leading-relaxed mt-2 font-medium">
                  Step into the world of The Weaverton Series with a free activity book designed to encourage children to colour, create, explore and discover more about the characters, nature beings and ideas they encounter along the way.
                </p>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3 pt-1">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    placeholder="First name" 
                    required
                    className="w-full bg-white border border-[#b2cc9f] rounded-xl px-4 py-2.5 text-xs text-[#1c2c15] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#355322] shadow-sm"
                  />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    required
                    className="w-full bg-white border border-[#b2cc9f] rounded-xl px-4 py-2.5 text-xs text-[#1c2c15] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#355322] shadow-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#1e3215] hover:bg-[#12200d] text-white font-sans text-xs tracking-widest font-bold uppercase py-3 rounded-xl shadow-lg transition duration-200 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4 text-[#b8df8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>GET THE FREE ACTIVITY BOOK</span>
                </button>
              </form>

              <p className="text-[10px] text-[#52703c] text-center sm:text-left">
                You’ll also receive occasional news from Magnifying Children’s Horizons about our books, activities and programmes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CHARACTER WITH NATURE® SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1e3215] font-bold">
                Character with Nature™
              </h2>
              <p className="font-serif italic text-[#355322] text-base sm:text-lg font-semibold">
                Tapping into Nature’s Wisdom to Help Children Grow From Within
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#25351e] leading-relaxed font-medium">
              Character with Nature is a nature-based character development programme that helps children discover meaningful connections between the natural world, their choices and their inner lives.
            </p>
            <p className="text-xs sm:text-sm text-[#25351e] leading-relaxed font-medium">
              Through stories, nature explorations, observation and reflection, children are encouraged to discover positive character traits, deepen their spiritual awareness and experience for themselves some of the principles at work in nature and in life.
            </p>

            <div className="pt-2">
              <Link 
                to="/character-with-nature" 
                className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl shadow-xl transition border border-[#486337]"
              >
                <span>EXPLORE CHARACTER WITH NATURE</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-emerald-950/20 bg-emerald-950">
              <img 
                src="/character-nature-child.jpeg" 
                alt="Child exploring nature" 
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-[#d8e4d0]">
          
          <div className="flex items-center justify-between bg-white/60 backdrop-blur border border-[#d2e2c5] px-6 py-4 rounded-2xl shadow-sm">
            <div className="text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center mx-auto text-xs font-bold">
                <Compass size={16} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#1e3215]">DISCOVER</div>
              <div className="text-[10px] text-stone-600">Notice and explore nature</div>
            </div>
            
            <div className="text-[#52703c] font-bold">→</div>

            <div className="text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center mx-auto text-xs font-bold">
                🔗
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#1e3215]">CONNECT</div>
              <div className="text-[10px] text-stone-600">Make connections & find meaning</div>
            </div>

            <div className="text-[#52703c] font-bold">→</div>

            <div className="text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center mx-auto text-xs font-bold">
                ✨
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#1e3215]">CREATE</div>
              <div className="text-[10px] text-stone-600">Bring discoveries to daily life</div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur border border-[#d2e2c5] px-6 py-4 rounded-2xl shadow-sm flex flex-col justify-center">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#355322] mb-3 text-center md:text-left">
              🌿 DESIGNED TO GROW WITH YOUR CHILD
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="space-y-1">
                <div className="text-lg">🌱</div>
                <div className="text-[11px] font-bold text-[#1e3215]">AGES 3-5</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg">🌿</div>
                <div className="text-[11px] font-bold text-[#1e3215]">AGES 6-9</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg">🌳</div>
                <div className="text-[11px] font-bold text-[#1e3215]">AGES 9-12</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg">🌲</div>
                <div className="text-[11px] font-bold text-[#1e3215]">AGES 12-15</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUR COLLABORATION: BLOSSOM IN NATURE SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 my-12">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-emerald-950/20 bg-emerald-950">
            <img 
              src="/blossom-in-nature.jpeg" 
              alt="Blossom in Nature collaborative book visual" 
              className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
            />
          </div>

          <div className="md:col-span-7 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#355322]">OUR COLLABORATION</span>
              <span className="text-emerald-600"><Check size={14} /></span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#1e3215] font-bold">
                Blossom in Nature
              </h3>
              <p className="font-serif italic text-[#355322] text-base sm:text-lg font-semibold mt-0.5">
                STORIES TOLD FROM TWO PERSPECTIVES
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#25351e] leading-relaxed font-medium">
              Magnifying Children's Horizons is proud to collaborate with Blossom in Nature, a children's book initiative created by Tolu Okudolo and Angela Ehrlich.
            </p>
            <p className="text-xs sm:text-sm text-[#25351e] leading-relaxed font-medium">
              Through paired stories told through the eyes of a child and a nature being, children explore positive character traits and the unseen connections within nature.
            </p>

            <div className="pt-2">
              <Link 
                to="/blossom-in-nature" 
                className="inline-flex items-center space-x-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl shadow-xl transition border border-[#486337]"
              >
                <span>DISCOVER BLOSSOM IN NATURE</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}