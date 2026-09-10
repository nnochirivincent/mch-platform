import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Sparkles, Compass, ArrowRight, CheckCircle2, Star, Mail, Bell } from 'lucide-react';
import ScrollFade from './ScrollFade';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen space-y-8 pb-10 overflow-hidden">
    <section className="relative px-4 sm:px-6 lg:px-12 pt-1 pb-4">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl min-h-[60vh] lg:min-h-[68vh] flex items-center px-6 sm:px-12 lg:px-20 py-6">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#162211]">
          <img 
            src="/regen-hero-image.jpeg" 
            alt="Tapping into Nature's Wisdom" 
            className="w-full h-full object-cover object-center transform scale-100"
          />
          {/* Subtle overlay gradient to ensure text readability */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-start justify-center text-left pl-20 sm:pl-36 lg:pl-56 -mt-8 sm:-mt-10 lg:-mt-12">
          <div className="space-y-2 max-w-5xl text-left">
            
            {/* Main Title Group */}
            <div className="inline-block space-y-0.5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#fcf9f2] font-normal tracking-wide leading-[1.05] drop-shadow-md">
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-light tracking-[0.2em] text-[#e8e4dc] mb-1 uppercase drop-shadow">
                  Tapping into
                </span>
                Nature's Wisdom
              </h1>
              
              {/* Divider with Leaf Icon */}
              <div className="flex items-center space-x-3 my-1.5 w-full max-w-2xl opacity-95">
                <div className="h-[1px] flex-1 bg-[#658a4c]/80"></div>
                <span className="text-[#658a4c] text-base filter drop-shadow">🌿</span>
                <div className="h-[1px] flex-1 bg-[#658a4c]/80"></div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-3xl text-[#f4efe6] font-serif font-normal tracking-wide max-w-2xl drop-shadow pt-0.5">
              to Nurture Character and Values in Children
            </p>

            {/* Action Buttons */}
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

              {/* Updated route to link directly to your main Character with Nature page */}
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

      {/* 2. COMBINED MASTER SECTION WRAPPED IN CREAM BACKGROUND */}
      <ScrollFade>
        <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 rounded-3xl overflow-hidden shadow-2xl py-8 border border-emerald-950/20">
          
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/cream.jpeg" 
              alt="Cream background" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 space-y-6">
            
            <div className="w-full">
              <div className="relative min-h-[360px] flex items-center">
                
                <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                  <img 
                    src="/2-hero-image.png" 
                    alt="Helping children grow through nature" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ee] via-transparent to-transparent opacity-90 sm:opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f2] via-transparent to-[#fcf9f2] opacity-40"></div>
                </div>

                <div className="relative z-10 w-full px-4 sm:px-12 lg:px-20 py-6">
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

            <div className="space-y-6 pt-1">
              
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
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300 group-hover:scale-[1.02] border-0 mix-blend-multiply"
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
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300 group-hover:scale-[1.02] border-0 mix-blend-multiply"
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
      </ScrollFade>

      {/* Free Activity Book Lead Capture Section */}
      <ScrollFade>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-emerald-950/20 p-6 sm:p-8 text-[#23351a]">
            
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/cream.jpeg" 
                alt="Cream background" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-10"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-10"></div>

            <div className="relative z-20 grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-[240px] bg-white/70 backdrop-blur-xl border border-emerald-900/15 rounded-3xl p-4 shadow-2xl group">
                  <div className="absolute -top-3 -right-3 bg-amber-400 text-emerald-950 font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-lg z-10">
                    100% Free
                  </div>
                  
                  <div className="overflow-hidden rounded-2xl shadow-xl border border-emerald-900/10 bg-black/5">
                    <img 
                      src="/activity-book-image.jpeg" 
                      alt="The Weaverton Series Adventure & Discovery Activity Book" 
                      className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="mt-2.5 flex items-center justify-center gap-2 text-[#2a3c22] italic text-xs font-serif font-bold">
                  <span className="text-amber-600">🍃</span>
                  <span>A fun way for children to continue the adventure!</span>
                  <span className="text-amber-600">🍃</span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-3.5">
                
                <div className="space-y-1 text-left">
                  <span className="text-amber-800 text-[11px] font-extrabold uppercase tracking-widest">Special Reader Gift</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2b13] leading-tight font-serif">
                    Continue the Adventure — It’s Free!
                  </h2>
                  <div className="h-1 w-16 bg-[#52703c] rounded-full opacity-90 mt-1"></div>
                </div>

                <div className="space-y-1 text-left">
                  <h3 className="font-bold text-[#28421c] text-xs sm:text-sm">
                    Explore the World of The Weaverton Series
                  </h3>
                  <p className="text-[#25351e] text-xs sm:text-sm leading-relaxed font-medium">
                    Step into the world of The Weaverton Series with a free activity book designed to encourage children to colour, create, explore and discover more about the characters, nature beings and ideas they encounter along the way.
                  </p>
                </div>

                <form onSubmit={handleDownloadSubmit} className="space-y-2.5 text-left pt-1">
                  {submitted ? (
                    <div className="text-center py-5 space-y-2 bg-white/95 border border-emerald-900/15 p-4 rounded-2xl backdrop-blur-md shadow-lg">
                      <CheckCircle2 className="mx-auto text-emerald-600" size={36} />
                      <h4 className="font-extrabold text-base text-[#1a2b13]">You're All Set!</h4>
                      <p className="text-xs sm:text-sm text-[#2a3c22] font-semibold">Check your inbox for your download link.</p>
                    </div>
                  ) : (
                    <>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-[#28421c] uppercase tracking-wider">
                            First Name
                          </label>
                          <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your first name" 
                            required
                            className="w-full px-3 py-2 bg-white border border-emerald-900/20 rounded-xl text-xs sm:text-sm text-[#1a2b13] font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52703c] focus:border-transparent transition shadow-inner"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-[#28421c] uppercase tracking-wider">
                            Email Address
                          </label>
                          <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address" 
                            required
                            className="w-full px-3 py-2 bg-white border border-emerald-900/20 rounded-xl text-xs sm:text-sm text-[#1a2b13] font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#52703c] focus:border-transparent transition shadow-inner"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3 px-5 bg-[#23351a] hover:bg-[#1a2813] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(35,53,26,0.2)] border border-[#486337] cursor-pointer"
                      >
                        <Download size={15} className="text-[#b8df8a]" />
                        <span>GET THE FREE ACTIVITY BOOK</span>
                        <span className="text-amber-300">🍃</span>
                      </button>
                    </>
                  )}

                  <p className="text-[10px] text-[#2c3e24] font-medium leading-relaxed pt-0.5">
                    You’ll also receive occasional news from Magnifying Children’s Horizons about our books, activities and programmes.
                  </p>
                </form>

              </div>

            </div>

          </div>
        </div>
      </ScrollFade>

      {/* CHARACTER WITH NATURE™ SECTION (Matched reference layout, fully stretched image filling container, darkened text for eye comfort, and age tags placed directly under the image) */}
      <ScrollFade delay={80}>
        <section id="discover" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl shadow-xl border border-emerald-950/20 py-5 px-5 sm:px-8 lg:px-10 space-y-4">
            
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/cream.jpeg" 
                alt="Cream background" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 space-y-4">
              
              {/* TOP ROW: EXACT REPLICA OF THE IMAGE TOP SECTION */}
              <div className="grid lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
                
                {/* Left Photo Container with Image stretched completely to fill container */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#23351a]/15 w-full flex-1 min-h-[280px] sm:min-h-[320px] lg:min-h-full">
                    <img 
                      src="/cwn-image-1.png" 
                      alt="Child exploring stream and leaves" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute bottom-3 left-3 font-serif italic text-white text-sm sm:text-base tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] select-none pointer-events-none z-10 font-bold">
                      Curiosity <span className="block text-xs not-serif font-bold tracking-normal text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">grows character.</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Title, Subtitle, Paragraphs & Flow with Darkened Readable Text */}
                <div className="lg:col-span-7 space-y-2.5 text-left flex flex-col justify-center">
                  <div className="space-y-0.5">
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#1a2b13] font-bold tracking-tight">
                      Character with Nature™
                    </h2>
                    <p className="font-serif italic text-[#3c552a] text-xs sm:text-sm font-bold">
                      Tapping into Nature's Wisdom to Help Children Grow From Within
                    </p>
                  </div>

                  <div className="space-y-1.5 text-[#1e2e16] text-xs sm:text-sm leading-relaxed font-medium">
                    <p>
                      Character with Nature is a nature-based character development programme that helps children discover meaningful connections between the natural world, their choices and their inner lives.
                    </p>
                    <p>
                      Through stories, nature explorations, observation and reflection, children are encouraged to discover positive character traits, deepen their spiritual awareness and experience for themselves some of the principles at work in nature and in life.
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#1e2e16] font-semibold">
                      Rather than simply telling children what to think, Character with Nature™ invites them to notice, question, explore and discover for themselves.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#23351a]/20 space-y-1.5">
                    <h4 className="text-[9px] uppercase tracking-widest font-extrabold text-[#28421c] text-center">
                      — HOW CHILDREN EXPLORE WITH CWN —
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-0.5">
                      
                      <div className="flex flex-col items-center text-center max-w-[110px] space-y-0.5">
                        <div className="w-8 h-8 rounded-full bg-[#1e3215] flex items-center justify-center shadow-md border border-[#486337]">
                          <svg className="w-4 h-4 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-extrabold text-[#1a2b13] text-[9px] uppercase tracking-wider">DISCOVER</h5>
                          <p className="text-[8px] text-[#2c3e24] font-semibold leading-tight">Notice and explore nature</p>
                        </div>
                      </div>

                      <div className="hidden sm:flex text-[#28421c] font-extrabold text-sm pb-3">
                        →
                      </div>

                      <div className="flex flex-col items-center text-center max-w-[110px] space-y-0.5">
                        <div className="w-8 h-8 rounded-full bg-[#1e3215] flex items-center justify-center shadow-md border border-[#486337]">
                          <svg className="w-4 h-4 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7 7 0 0014 0v-2a1.5 1.5 0 00-3 0m-3-6V14m0-2.5a1.5 1.5 0 113 0" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-extrabold text-[#1a2b13] text-[9px] uppercase tracking-wider">CONNECT</h5>
                          <p className="text-[8px] text-[#2c3e24] font-semibold leading-tight">Make connections & find meaning</p>
                        </div>
                      </div>

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