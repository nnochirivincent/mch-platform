import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Sparkles, Compass, ArrowRight, CheckCircle2, Star, Quote, Mail, Bell } from 'lucide-react';
import ScrollFade from './ScrollFade';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [notifyEmail, setNotifyEmail] = useState('');
  const [notified, setNotified] = useState(false);

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (notifyEmail) {
      setNotified(true);
    }
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen space-y-10 pb-12 overflow-hidden">
      
      {/* 1. IMMERSIVE FULL-BACKGROUND HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-12 pt-1 pb-6">
        <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl min-h-[72vh] flex items-center justify-end px-8 sm:px-12 lg:px-20 py-8">
          
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/hero-image-2.png" 
              alt="Children exploring nature" 
              className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
            />
          </div>

          <div className="relative z-10 w-full max-w-4xl flex flex-col items-start justify-center text-left pl-8 sm:pl-20 lg:pl-32 pr-4 -mt-6 sm:-mt-10">
            <div className="space-y-3 max-w-5xl text-left">
              <div className="inline-block">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#fcf9f2] font-light tracking-wide leading-[1.05] drop-shadow-md">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-extralight tracking-widest text-[#e8e4dc] mb-1 uppercase drop-shadow">Tapping into</span>
                  Nature's Wisdom
                </h1>
                
                <div className="flex items-center space-x-4 my-2 w-[88%] sm:w-[91%] lg:w-[93%] opacity-95">
                  <div className="h-[1.5px] flex-1 bg-[#658a4c]"></div>
                  <span className="text-[#658a4c] text-lg filter drop-shadow">🌿</span>
                  <div className="h-[1.5px] flex-1 bg-[#658a4c]"></div>
                </div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-[#f4efe6] font-serif font-normal tracking-wide max-w-3xl drop-shadow pt-1">
                to Nurture Character and Values in Children
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a 
                  href="#explore" 
                  className="inline-flex items-center space-x-3 bg-[#23351a] hover:bg-[#1a2813] text-[#ffffff] font-sans text-xs sm:text-sm tracking-widest font-semibold uppercase px-5 py-3 rounded-xl shadow-xl transition-all duration-200 border border-[#486337]"
                >
                  <svg className="w-4 h-4 text-[#e2d5bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Explore Our Books</span>
                  <span className="ml-1 text-xs">→</span>
                </a>

                <a 
                  href="#discover" 
                  className="inline-flex items-center space-x-2.5 bg-black/40 hover:bg-black/50 backdrop-blur-md border border-[#e5cea3] text-[#f7e6c4] font-sans text-xs sm:text-sm tracking-widest uppercase px-4 py-2.5 rounded-xl transition-all duration-200 shadow-lg max-w-[280px] sm:max-w-[320px] text-left leading-tight"
                >
                  <svg className="w-4 h-4 text-[#e5cea3] shrink-0 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 8.5l-4 4-2-2" />
                  </svg>
                  <span className="block py-0.5">
                    Discover Character <br />
                    With Nature® <span className="ml-0.5 text-xs inline-block">→</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/* 2. COMBINED MASTER SECTION WRAPPED IN CREAM BACKGROUND */}
      <ScrollFade>
        <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 rounded-3xl overflow-hidden shadow-2xl py-10 border border-emerald-950/20">
          
          {/* Absolute Background using cream.jpeg */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/cream.jpeg" 
              alt="Cream background" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 space-y-8">
            
            {/* Sub-block A: Helping Children Grow Through Nature directly integrated */}
            <div className="w-full">
              <div className="relative min-h-[420px] flex items-center">
                
                <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
                  <img 
                    src="/2-hero-image.png" 
                    alt="Helping children grow through nature" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ee] via-transparent to-transparent opacity-90 sm:opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f2] via-transparent to-[#fcf9f2] opacity-40"></div>
                </div>

                <div className="relative z-10 w-full px-4 sm:px-12 lg:px-20 py-8">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 lg:col-start-7 space-y-4 text-left">
                      
                      <div className="space-y-1.5">
                        <h2 className="text-3xl sm:text-4xl font-serif text-[#1e3215] tracking-tight leading-snug font-bold drop-shadow-sm">
                          Helping Children Grow Through Nature
                        </h2>
                        <div className="flex items-center space-x-3 text-[#355322]">
                          <div className="h-[1.5px] w-12 bg-[#355322]"></div>
                          <span className="text-lg">🌿</span>
                          <div className="h-[1.5px] w-12 bg-[#355322]"></div>
                        </div>
                      </div>

                      <div className="space-y-2.5 text-[#23351a] text-sm sm:text-base leading-relaxed font-medium">
                        <p>
                          At Magnifying Children's Horizons, we believe the natural world offers children more than a place to explore. It offers opportunities to wonder, discover, reflect and grow.
                        </p>
                        <p className="text-xs sm:text-sm text-[#2c4022]">
                          Through meaningful stories and nature-based experiences, we help children develop positive character traits, inner awareness, spiritual growth and a deeper connection with the world around them.
                        </p>
                      </div>

                      <div className="pt-1 space-y-3">
                        <div>
                          <Link 
                            to="/about" 
                            className="inline-flex items-center gap-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-xl transition border border-[#486337]"
                          >
                            <span>ABOUT MCH</span>
                            <span className="text-emerald-300">✓</span>
                          </Link>
                        </div>

                        <div className="space-y-1.5">
                          <div className="text-[11px] font-bold uppercase tracking-widest text-[#3d5632]">Explore:</div>
                          <div className="flex flex-wrap gap-2.5">
                            <Link 
                              to="/books" 
                              className="bg-[#23351a] hover:bg-[#1a2813] text-white border border-[#355322] font-semibold px-3.5 py-2 rounded-xl transition shadow-lg flex items-center gap-1.5 text-xs"
                            >
                              <BookOpen size={14} className="text-[#b8df8a]" /> OUR BOOKS
                            </Link>
                            <Link 
                              to="/cwn/pathways" 
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

            {/* Sub-block B: Stories That Open New Horizons */}
            <div className="space-y-8 pt-1">
              
              <div className="text-center space-y-2 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-[#23351a]">
                  Stories That Open New Horizons
                </h2>
                <p className="font-serif italic text-[#4a6934] tracking-wide text-lg font-medium">
                  Discover The Weaverton Series
                </p>
                <div className="flex items-center justify-center space-x-3 text-[#658a4c] pt-0.5">
                  <div className="h-[1.5px] w-12 bg-[#658a4c]/40"></div>
                  <span>🌿</span>
                  <div className="h-[1.5px] w-12 bg-[#658a4c]/40"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start px-2 sm:px-4">
                
                {/* Book 1 */}
                <div className="grid sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-5">
                    <Link to="/books" className="block group">
                      <img 
                        src="/book-cover-1.jpeg" 
                        alt="The Face in the Mountain Book Cover" 
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300 group-hover:scale-[1.02] border border-[#23351a]/10"
                      />
                    </Link>
                  </div>

                  <div className="sm:col-span-7 space-y-2.5 text-left">
                    <div>
                      <h3 className="font-extrabold text-xl sm:text-2xl text-[#23351a] font-serif">The Face in the Mountain</h3>
                      <p className="text-[#344030] text-xs sm:text-sm leading-relaxed mt-1.5 font-light">
                        When Borne's father must leave Vamper Creek, Borne worries that he won't remember everything he has been taught. As challenges arise, he must learn to trust what he knows, think creatively and discover what he is capable of.
                      </p>
                    </div>

                    <div className="flex text-amber-600 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#3a4834] italic leading-relaxed border-l-2 border-[#658a4c] pl-3 py-0.5">
                      "A beautifully written story that touches the heart and awakens a sense of wonder in every child." <br />
                      <span className="font-semibold not-italic text-[#23351a]">— Amazon Reviewer</span>
                    </p>

                    <div className="pt-1 space-y-0.5">
                      <Link 
                        to="/books" 
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#345322] hover:text-[#23351a] transition"
                      >
                        DISCOVER THE BOOK <ArrowRight size={13} />
                      </Link>
                      <div>
                        <a href="#buy" className="text-[11px] text-[#4a6934] hover:underline font-medium">
                          Buy on Amazon →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book 2 */}
                <div className="grid sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-5">
                    <Link to="/books" className="block group">
                      <img 
                        src="/book-cover-2.jpeg" 
                        alt="The Festival Shoes Book Cover" 
                        className="w-full h-auto object-cover rounded-2xl shadow-2xl transition duration-300 group-hover:scale-[1.02] border border-[#23351a]/10"
                      />
                    </Link>
                  </div>

                  <div className="sm:col-span-7 space-y-2.5 text-left">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#23351a] bg-amber-300/90 px-2 py-0.5 rounded shadow-sm">COMING SOON</span>
                      <h3 className="font-extrabold text-xl sm:text-2xl text-[#23351a] mt-1 font-serif">The Festival Shoes</h3>
                      <p className="text-[#344030] text-xs sm:text-sm leading-relaxed mt-1.5 font-light">
                        Drunia's journey takes him through Weaverton, where late facies and nature beings are busy at work. When an unexpected challenge arises, he must draw on his courage, determination and self-trust to find a way forward.
                      </p>
                    </div>

                    <div className="flex text-amber-600 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#3a4834] italic leading-relaxed border-l-2 border-[#658a4c] pl-3 py-0.5">
                      "An enchanting adventure filled with heart, magic and important lessons for every young reader." <br />
                      <span className="font-semibold not-italic text-[#23351a]">— ABC Reviewer</span>
                    </p>

                    <div className="pt-1 space-y-0.5">
                      <Link 
                        to="/books" 
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-[#345322] hover:text-[#23351a] transition"
                      >
                        DISCOVER THE BOOK <ArrowRight size={13} />
                      </Link>
                      <div>
                        <a href="#buy" className="text-[11px] text-[#4a6934] hover:underline font-medium">
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
     
      {/* 3. WHAT OUR READERS SAY (TESTIMONIALS) */}
      <ScrollFade delay={100}>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#23351a]">What Our Readers Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm font-medium">Heartfelt reflections from parents, educators, and young nature advocates.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 relative flex flex-col justify-between space-y-4">
              <Quote className="absolute top-5 right-5 text-emerald-100" size={36} />
              <div className="space-y-3 relative z-10">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic">
                  "Magnifying Children's Horizons has completely changed how my kids view the outdoors. They look at trees, birds, and rivers with total wonder now. The Weaverton Series is an absolute masterpiece!"
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-800 text-emerald-100 font-bold flex items-center justify-center text-xs shadow">
                  AO
                </div>
                <div>
                  <h4 className="font-bold text-[#23461f] text-xs sm:text-sm">Dr. Abigail O.</h4>
                  <p className="text-[11px] text-gray-500">Parent & Educator</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 relative flex flex-col justify-between space-y-4">
              <Quote className="absolute top-5 right-5 text-emerald-100" size={36} />
              <div className="space-y-3 relative z-10">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic">
                  "As a school counselor, finding literature that instills true character and ecological responsibility is rare. The Character with Nature pathways and stories have been an incredible asset in our classrooms."
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-800 text-emerald-100 font-bold flex items-center justify-center text-xs shadow">
                  MK
                </div>
                <div>
                  <h4 className="font-bold text-[#23461f] text-xs sm:text-sm">Marcus K.</h4>
                  <p className="text-[11px] text-gray-500">Elementary School Teacher</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200 relative flex flex-col justify-between space-y-4">
              <Quote className="absolute top-5 right-5 text-emerald-100" size={36} />
              <div className="space-y-3 relative z-10">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic">
                  "My daughter reads *The Face in the Mountain* every single night before bed. The imagery and values embedded in the narrative are breathtaking. Thank you for creating such meaningful work!"
                </p>
              </div>
              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-800 text-emerald-100 font-bold flex items-center justify-center text-xs shadow">
                  CN
                </div>
                <div>
                  <h4 className="font-bold text-[#23461f] text-xs sm:text-sm">Chinedu N.</h4>
                  <p className="text-[11px] text-gray-500">Parent of Young Reader</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </ScrollFade>

      {/* Free Activity Book Lead Capture Section (Fully Cream Background using cream.jpeg) */}
      <ScrollFade>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-emerald-950/20 p-6 sm:p-10 text-[#23351a]">
            
            {/* Absolute Background using cream.jpeg */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/cream.jpeg" 
                alt="Cream background" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-10"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none z-10"></div>

            <div className="relative z-20 grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-xs bg-white/70 backdrop-blur-xl border border-emerald-900/15 rounded-3xl p-5 shadow-2xl group">
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
                
                <div className="mt-3 flex items-center justify-center gap-2 text-[#3a4834] italic text-xs font-serif">
                  <span className="text-amber-600">🍃</span>
                  <span>A fun way for children to continue the adventure!</span>
                  <span className="text-amber-600">🍃</span>
                </div>
              </div>

              <div className="md:col-span-7 space-y-4">
                
                <div className="space-y-1.5 text-left">
                  <span className="text-amber-700 text-[11px] font-bold uppercase tracking-widest">Special Reader Gift</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#23351a] leading-tight font-serif">
                    Continue the Adventure — It’s Free!
                  </h2>
                  <div className="h-1 w-16 bg-[#658a4c] rounded-full opacity-80 mt-1"></div>
                </div>

                <div className="space-y-1.5 text-left">
                  <h3 className="font-bold text-[#355322] text-xs sm:text-sm">
                    Explore the World of The Weaverton Series
                  </h3>
                  <p className="text-[#344030] text-xs sm:text-sm leading-relaxed font-light">
                    Step into the world of The Weaverton Series with a free activity book designed to encourage children to colour, create, explore and discover more about the characters, nature beings and ideas they encounter along the way.
                  </p>
                </div>

                <form onSubmit={handleDownloadSubmit} className="space-y-3 text-left pt-1">
                  {submitted ? (
                    <div className="text-center py-6 space-y-2 bg-white/90 border border-emerald-900/15 p-5 rounded-2xl backdrop-blur-md shadow-lg">
                      <CheckCircle2 className="mx-auto text-emerald-600" size={40} />
                      <h4 className="font-bold text-lg text-[#23351a]">You're All Set!</h4>
                      <p className="text-xs sm:text-sm text-[#3a4834]">Check your inbox for your download link.</p>
                    </div>
                  ) : (
                    <>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-[#355322] uppercase tracking-wider">
                            First Name
                          </label>
                          <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your first name" 
                            required
                            className="w-full px-3.5 py-2.5 bg-white border border-emerald-900/15 rounded-xl text-xs sm:text-sm text-[#23351a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#658a4c] focus:border-transparent transition shadow-inner"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-[#355322] uppercase tracking-wider">
                            Email Address
                          </label>
                          <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address" 
                            required
                            className="w-full px-3.5 py-2.5 bg-white border border-emerald-900/15 rounded-xl text-xs sm:text-sm text-[#23351a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#658a4c] focus:border-transparent transition shadow-inner"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-3.5 px-5 bg-[#23351a] hover:bg-[#1a2813] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(35,53,26,0.2)] border border-[#486337] cursor-pointer"
                      >
                        <Download size={16} className="text-[#b8df8a]" />
                        <span>GET THE FREE ACTIVITY BOOK</span>
                        <span className="text-amber-300">🍃</span>
                      </button>
                    </>
                  )}

                  <p className="text-[10px] text-[#4a5944] leading-relaxed pt-0.5">
                    You’ll also receive occasional news from Magnifying Children’s Horizons about our books, activities and programmes.
                  </p>
                </form>

              </div>

            </div>

          </div>
        </div>
      </ScrollFade>

      {/* CHARACTER WITH NATURE™ SECTION (Updated with cream.jpeg Background) */}
      <ScrollFade delay={80}>
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl shadow-xl border border-emerald-950/20 p-6 sm:p-10 lg:p-14 space-y-10">
            
            {/* Absolute Background using cream.jpeg */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/cream.jpeg" 
                alt="Cream background" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="relative z-10 space-y-10">
              
              {/* Top Grid: Child Image & Intro Content */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Image: Child exploring stream / leaf */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#23351a]/10 aspect-[4/5]">
                    <img 
                      src="/cwn-image-1.png" 
                      alt="Child exploring stream and leaves" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div className="space-y-1.5">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#23351a] font-bold tracking-tight">
                      Character with Nature™
                    </h2>
                    <p className="font-serif italic text-[#4a6934] text-base sm:text-lg font-medium">
                      Tapping into Nature's Wisdom to Help Children Grow From Within
                    </p>
                  </div>

                  <div className="space-y-3 text-[#23351a] text-xs sm:text-sm leading-relaxed font-light">
                    <p>
                      <strong className="font-medium">Character with Nature™</strong> is a nature-based character development programme that helps children discover meaningful connections between the natural world, their choices and their inner lives.
                    </p>
                    <p>
                      Through stories, nature explorations, observation and reflection, children are encouraged to discover positive character traits, deepen their spiritual awareness and experience for themselves some of the principles at work in nature and in life.
                    </p>
                    <p className="font-medium text-[#23351a]">
                      Rather than simply telling children what to think, Character with Nature™ invites them to notice, question, explore and discover for themselves.
                    </p>
                  </div>

                  {/* HOW CHILDREN EXPLORE WITH CWN - Replaced with Layout Matching the Provided Design */}
                  <div className="pt-4 border-t border-[#23351a]/10 space-y-3">
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#355322] text-center">
                      HOW CHILDREN EXPLORE WITH CWN
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-1">
                      
                      {/* Discover Step */}
                      <div className="flex flex-col items-center text-center max-w-[130px] space-y-1.5">
                        <div className="w-12 h-12 rounded-full bg-[#1e3215] flex items-center justify-center shadow-lg border border-[#486337]">
                          {/* Search/Magnifying Glass Icon representation matching image */}
                          <svg className="w-6 h-6 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold text-[#23351a] text-[11px] uppercase tracking-wider">DISCOVER</h5>
                          <p className="text-[10px] text-gray-600 leading-tight mt-0.5">Notice and explore nature</p>
                        </div>
                      </div>

                      {/* Arrow 1 */}
                      <div className="hidden sm:flex text-[#355322] font-bold text-lg pb-5">
                        →
                      </div>

                      {/* Connect Step */}
                      <div className="flex flex-col items-center text-center max-w-[130px] space-y-1.5">
                        <div className="w-12 h-12 rounded-full bg-[#1e3215] flex items-center justify-center shadow-lg border border-[#486337]">
                          {/* Connected nodes/network icon representation matching image */}
                          <svg className="w-6 h-6 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7 7 0 0014 0v-2a1.5 1.5 0 00-3 0m-3-6V14m0-2.5a1.5 1.5 0 113 0" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold text-[#23351a] text-[11px] uppercase tracking-wider">CONNECT</h5>
                          <p className="text-[10px] text-gray-600 leading-tight mt-0.5">Make connections and find meaning</p>
                        </div>
                      </div>

                      {/* Arrow 2 */}
                      <div className="hidden sm:flex text-[#355322] font-bold text-lg pb-5">
                        →
                      </div>

                      {/* Create Step */}
                      <div className="flex flex-col items-center text-center max-w-[130px] space-y-1.5">
                        <div className="w-12 h-12 rounded-full bg-[#1e3215] flex items-center justify-center shadow-lg border border-[#486337]">
                          {/* Creative hands/sprout icon representation matching image */}
                          <svg className="w-6 h-6 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold text-[#23351a] text-[11px] uppercase tracking-wider">CREATE</h5>
                          <p className="text-[10px] text-gray-600 leading-tight mt-0.5">Bring discoveries into everyday life</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-1 text-center lg:text-left">
                    <Link 
                      to="/cwn/pathways" 
                      className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[11px] uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg transition"
                    >
                      Discover Character With Nature™
                    </Link>
                  </div>

                </div>
              </div>

              {/* Typography Bar: NATURE • CHARACTER • INNER AWARENESS • SPIRITUAL GROWTH */}
              <div className="pt-6 pb-3 border-t border-b border-[#23351a]/15 text-center">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold tracking-widest text-[#355322] uppercase">
                  <span>Nature</span>
                  <span className="text-[#658a4c] text-base">•</span>
                  <span>Character</span>
                  <span className="text-[#658a4c] text-base">•</span>
                  <span>Inner Awareness</span>
                  <span className="text-[#658a4c] text-base">•</span>
                  <span>Spiritual Growth</span>
                </div>
              </div>

              {/* Discovering Nature's Laws Sub-section */}
              <div className="space-y-8 pt-2">
                <div className="text-center max-w-2xl mx-auto space-y-2.5">
                  <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#23351a]">
                    Discovering Nature’s Laws
                  </h3>
                  <div className="space-y-2 text-gray-700 text-xs sm:text-sm font-light leading-relaxed">
                    <p>
                      At the heart of Character with Nature™ are universal laws and principles that children can discover through patterns and processes in the natural world.
                    </p>
                    <p>
                      Through age-appropriate observation, exploration and reflection, children are interconnectedly able to connect what they discover in nature with their own choices, character and inner lives.
                    </p>
                  </div>
                </div>

                         
                         {/* The Four Cards Grid */}
<div className="grid sm:grid-cols-2 gap-6 pt-2">
  
  {/* Card 1: Cause & Effect */}
  <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200/80 flex flex-col">
    <div className="w-full aspect-video bg-gray-50 flex items-center justify-center p-2">
      <img 
        src="/cwn-image-2.png" 
        alt="Cause and Effect - seed/plant or water creating a path" 
        className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
      />
    </div>
    <div className="p-5 space-y-1.5 text-center flex-1 flex flex-col justify-between">
      <h4 className="font-serif font-bold text-base text-[#23351a]">Cause & Effect</h4>
      <p className="text-gray-600 text-xs font-light">
        What we do influences what happens next.
      </p>
    </div>
  </div>

  {/* Card 2: Like Attracts Like */}
  <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200/80 flex flex-col">
    <div className="w-full aspect-video bg-gray-50 flex items-center justify-center p-2">
      <img 
        src="/cwn-image-3.png" 
        alt="Like Attracts Like - flower attracting bees" 
        className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
      />
    </div>
    <div className="p-5 space-y-1.5 text-center flex-1 flex flex-col justify-between">
      <h4 className="font-serif font-bold text-base text-[#23351a]">Like Attracts Like</h4>
      <p className="text-gray-600 text-xs font-light">
        What we nurture and give attention to can influence what grows around us.
      </p>
    </div>
  </div>

  {/* Card 3: Gravity */}
  <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200/80 flex flex-col">
    <div className="w-full aspect-video bg-gray-50 flex items-center justify-center p-2">
      <img 
        src="/cwn-image-4.png" 
        alt="Gravity - light seed and heavier natural object" 
        className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
      />
    </div>
    <div className="p-5 space-y-1.5 text-center flex-1 flex flex-col justify-between">
      <h4 className="font-serif font-bold text-base text-[#23351a]">Gravity</h4>
      <p className="text-gray-600 text-xs font-light">
        What we carry within can influence how we move and the direction we take.
      </p>
    </div>
  </div>

  {/* Card 4: Balance */}
  <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200/80 flex flex-col">
    <div className="w-full aspect-video bg-gray-50 flex items-center justify-center p-2">
      <img 
        src="/cwn-image-5.png" 
        alt="Balance - nature returning to equilibrium" 
        className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
      />
    </div>
    <div className="p-5 space-y-1.5 text-center flex-1 flex flex-col justify-between">
      <h4 className="font-serif font-bold text-base text-[#23351a]">Balance</h4>
      <p className="text-gray-600 text-xs font-light">
        Nature shows us patterns of balance, adjustment and harmony.
      </p>
    </div>
  </div>

</div>

                {/* Bottom Action Button */}
                <div className="pt-4 text-center">
                  <Link 
                    to="/cwn/laws" 
                    className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[11px] uppercase tracking-widest px-7 py-3 rounded-xl shadow-lg transition"
                  >
                    Explore The Laws & Our Approach
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </section>
      </ScrollFade>

      {/* 4. CHARACTER WITH NATURE GROWS WITH YOUR CHILD SECTION (Expanded image width to sides) */}
      <ScrollFade delay={90}>
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl shadow-xl border border-emerald-950/20 py-10 sm:py-12 text-center space-y-8">
            
            {/* Absolute Background using cream.jpeg */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/cream.jpeg" 
                alt="Cream background" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 space-y-4">
              
              {/* Header / Title area */}
              <div className="space-y-1.5">
                <div className="flex justify-center mb-1">
                  <svg className="w-5 h-5 text-[#355322]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#23351a] font-bold tracking-tight">
                  Character with Nature™
                </h2>
                <p className="font-serif italic text-[#4a6934] text-lg sm:text-xl font-medium">
                  grows with your child
                </p>
                <div className="flex items-center justify-center space-x-3 text-[#658a4c] pt-0.5">
                  <div className="h-[1.5px] w-8 bg-[#658a4c]/40"></div>
                  <span className="text-xs">🌿</span>
                  <div className="h-[1.5px] w-8 bg-[#658a4c]/40"></div>
                </div>
              </div>

             {/* Subtitle Description - Controlled line breaks and centered */}
<p className="text-sm sm:text-base text-[#1e3215] leading-relaxed max-w-3xl mx-auto font-semibold drop-shadow-sm text-center">
  Age-appropriate programmes help children discover their connection with nature <br className="hidden sm:block" />
  and explore how nature can guide their character, choices and <br className="hidden sm:block" />
  inner growth in positive ways as they grow.
</p>

            </div>

            {/* Age Progression Graphic / Illustration Area - Expanded fully to the sides */}
            <div className="relative z-10 w-full px-2 sm:px-4 lg:px-6">
              <div className="w-full overflow-hidden">
                <img 
                  src="/2-cwn-image.png" 
                  alt="Character with Nature grows with your child age progression" 
                  className="w-full h-auto object-cover object-center mx-auto mix-blend-multiply opacity-95 scale-100 sm:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Lower Content Container (Button & Notifications) */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 space-y-5 pt-1">
              
              {/* Primary Action Button */}
              <div>
                <a 
                  href="#explore-cwn" 
                  className="inline-flex items-center space-x-2.5 bg-[#23351a] hover:bg-[#1a2813] text-white font-sans text-xs tracking-widest font-semibold uppercase px-7 py-3.5 rounded-xl shadow-xl transition-all duration-200 border border-[#486337]"
                >
                  <span>EXPLORE CWN PROGRAMMES</span>
                  <ArrowRight size={15} className="text-emerald-300" />
                </a>
              </div>

              {/* Get Notified Sub-section */}
              <div className="pt-4 border-t border-[#23351a]/10 max-w-md mx-auto space-y-2.5">
                <p className="text-xs text-[#355322] font-medium">
                  Be the first to know when Character with Nature™ launches.
                </p>

                {notified ? (
                  <div className="bg-white/85 backdrop-blur-md border border-emerald-900/15 py-2.5 px-4 rounded-xl text-xs font-bold text-[#23351a] shadow">
                    ✓ You're on the early notification list!
                  </div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="flex items-center bg-white rounded-xl shadow-inner border border-emerald-900/15 overflow-hidden p-1">
                    <div className="pl-3 text-gray-400">
                      <Mail size={15} />
                    </div>
                    <input 
                      type="email" 
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      placeholder="Enter your email address" 
                      required
                      className="w-full px-3 py-2 text-xs sm:text-sm text-[#23351a] bg-transparent focus:outline-none placeholder-gray-400"
                    />
                    <button 
                      type="submit"
                      className="bg-[#23351a] hover:bg-[#1a2813] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition shrink-0 flex items-center gap-1 shadow"
                    >
                      <Bell size={11} className="text-amber-300" />
                      <span>GET NOTIFIED</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </section>
      </ScrollFade>
      
     {/* 5. OUR COLLABORATION: BLOSSOM IN NATURE & SITE FOOTER INTEGRATED SECTION */}
      <ScrollFade delay={95}>
        <section className="relative w-full bg-[#fcf9f2] pt-8 pb-6 border-t border-emerald-950/10">
          
          {/* Main Collaboration Block mimicking the exact image layout */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
            <div className="relative overflow-hidden rounded-3xl shadow-xl border border-emerald-950/20 py-8 sm:py-12 px-6 sm:px-10 lg:px-14">
              
              {/* Absolute Background using cream.jpeg */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src="/cream.jpeg" 
                  alt="Cream background" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Image with rounded corners and subtle frame */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#23351a]/15 aspect-[4/3] bg-white/50">
                    <img 
                      src="/footer.jpeg" 
                      alt="Child exploring nature in collaboration with Blossom in Nature" 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                {/* Right Column: Exact text styling matching the document layout */}
                <div className="lg:col-span-7 space-y-3.5 text-left">
                  
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-extrabold tracking-widest text-[#355322] uppercase">OUR COLLABORATION</span>
                      <span className="text-emerald-700 text-xs">🌿</span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#23351a] font-bold tracking-tight">
                      Blossom in Nature
                    </h2>
                    
                    <p className="font-serif italic text-[#4a6934] text-xs sm:text-sm font-semibold tracking-wider">
                      STORIES TOLD FROM TWO PERSPECTIVES
                    </p>
                  </div>

                  <div className="space-y-2.5 text-[#23351a] text-xs sm:text-sm leading-relaxed font-light">
                    <p>
                      Magnifying Children's Horizons is proud to collaborate with <strong className="font-semibold text-[#23351a]">Blossom in Nature</strong>, a children's book initiative created by Tolu Okudolo and Angela Ehrlich.
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

          {/* Integrated Footer attached seamlessly as seen in the mockup */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 border-t border-[#23351a]/15">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6">
              
              {/* Brand & Tagline with seamless leaf image icon */}
              <div className="space-y-1.5 text-center lg:text-left">
                <Link to="/" className="inline-flex items-center space-x-3">
                  <img 
                    src="/leave.jpeg" 
                    alt="" 
                    aria-hidden="true"
                    className="w-7 h-7 object-contain shrink-0 mix-blend-multiply opacity-95" 
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-serif font-bold text-base text-[#23351a] leading-none">Magnifying</span>
                    <span className="font-serif font-light text-base text-[#355322] leading-none mt-1">Children's Horizons</span>
                  </div>
                </Link>
                <p className="text-[10px] text-[#4a5944] uppercase tracking-widest font-semibold pl-10">
                  NATURE • CHARACTER • A BRIGHTER TOMORROW
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-5 text-xs uppercase tracking-wider font-bold text-[#355322]">
                <Link to="/" className="hover:text-[#23351a] transition">Home</Link>
                <Link to="/books" className="hover:text-[#23351a] transition">Books</Link>
                <Link to="/cwn/pathways" className="hover:text-[#23351a] transition">Character with Nature™</Link>
                <Link to="/about" className="hover:text-[#23351a] transition">About Us</Link>
                <Link to="/collaborations" className="hover:text-[#23351a] transition">Collaborations</Link>
                <Link to="/contact" className="hover:text-[#23351a] transition">Contact</Link>
              </div>

              {/* Social / Connect Icons (Instagram -> Facebook -> YouTube) */}
              <div className="flex items-center space-x-2.5">
                {/* Instagram Icon */}
                <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                {/* Facebook Icon */}
                <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                {/* YouTube Icon */}
                <a href="#youtube" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

            </div>

            {/* Bottom Copyright & Legal row */}
            <div className="pt-4 border-t border-[#23351a]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#55664d] gap-3">
              <p>© 2026 Magnifying Children's Horizons. All rights reserved.</p>
              <div className="flex items-center space-x-5">
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