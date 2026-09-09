import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Sparkles, Compass, ArrowRight, CheckCircle2, Star, Quote, Info } from 'lucide-react';
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
    <div className="bg-white min-h-screen space-y-24 pb-24 overflow-hidden">
      
     {/* 1. HERO SECTION WITH SPECIFIC BACKGROUND IMAGE */}
      <section 
        className="relative text-white py-36 px-4 overflow-hidden bg-cover bg-center rounded-3xl max-w-7xl mx-auto sm:px-6 lg:px-8 mt-6 shadow-2xl border border-emerald-800/50"
        style={{ backgroundImage: `url('/hero-main-image.jpeg')` }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="bg-emerald-800/90 text-emerald-200 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-500/40 shadow-md backdrop-blur-sm">
            Magnifying Children's Horizons
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg text-white">
            TAPPING INTO <br />
            <span className="font-handwriting text-6xl md:text-8xl text-emerald-300 font-normal tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Nature's Wisdom
            </span>
          </h1>

          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto pt-2 font-medium drop-shadow-md">
            To Build Character and Value in Children.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link 
              to="/books" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-xl shadow-xl transition flex items-center gap-2 border border-emerald-400/30"
            >
              Explore Our Books <ArrowRight size={18} />
            </Link>
            <Link 
              to="/cwn/pathways" 
              className="bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-100 border border-emerald-400/50 font-semibold px-8 py-3 rounded-xl transition flex items-center gap-2 backdrop-blur-md shadow-lg"
            >
              Character with Nature® <Compass size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 1.5 FIRST MISSION STATEMENT SECTION (TEXT ONLY, NO IMAGE) */}
      <ScrollFade>
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fcfbf9] rounded-3xl p-8 md:p-14 shadow-xl border border-emerald-900/10 text-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#23461f] tracking-tight">
                Helping Children Grow Through Nature
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              <p>
                At Magnifying Children's Horizons, we believe the natural world offers children more than a place to explore. It offers opportunities to wonder, discover, reflect and grow.
              </p>
              <p>
                Through meaningful stories and nature-based experiences, we help children develop positive character traits, inner awareness, spiritual growth and a deeper connection with the world around them.
              </p>
            </div>

            <div className="pt-4 flex flex-col items-center space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Explore:</div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link 
                  to="/about" 
                  className="bg-[#23461f] hover:bg-[#1c3919] text-white font-semibold px-5 py-2.5 rounded-xl transition shadow-md flex items-center gap-2 text-sm"
                >
                  ABOUT MCH ✓
                </Link>
                <Link 
                  to="/books" 
                  className="bg-white hover:bg-gray-50 text-[#23461f] border border-gray-300 font-semibold px-5 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2 text-sm"
                >
                  <BookOpen size={16} /> OUR BOOKS
                </Link>
                <Link 
                  to="/cwn/pathways" 
                  className="bg-white hover:bg-gray-50 text-[#23461f] border border-gray-300 font-semibold px-5 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2 text-sm"
                >
                  <Compass size={16} /> CHARACTER WITH NATURE®
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* 2. SECOND SECTION: HELPING CHILDREN GROW (TEXT OVERLAY ON IMAGE - RIGHT SIDE) + STORIES BELOW */}
      <ScrollFade>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#fcfbf9] py-16 px-6 md:px-12 rounded-3xl border border-emerald-900/10 shadow-xl space-y-20">
          
          {/* Helping Children Grow Through Nature: Image Background with Text/Buttons Overlaid on the Right */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] flex items-center bg-emerald-950 border border-emerald-800/40">
            
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url('/2-hero-image.png')` }}
            ></div>
            
            <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/95 via-emerald-950/80 to-transparent"></div>

            <div className="relative z-10 w-full grid md:grid-cols-12 gap-8 p-8 md:p-14">
              <div className="md:col-span-6 md:col-start-7 space-y-6 text-left">
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                    Helping Children Grow Through Nature
                  </h2>
                </div>

                <div className="space-y-4 text-emerald-100 text-base md:text-lg leading-relaxed font-medium drop-shadow">
                  <p>
                    At Magnifying Children's Horizons, we believe the natural world offers children more than a place to explore. It offers opportunities to wonder, discover, reflect and grow.
                  </p>
                  <p>
                    Through meaningful stories and nature-based experiences, we help children develop positive character traits, inner awareness, spiritual growth and a deeper connection with the world around them.
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-300">Explore:</div>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      to="/about" 
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-2.5 rounded-xl transition shadow-md flex items-center gap-2 text-sm border border-emerald-400/40"
                    >
                      ABOUT MCH ✓
                    </Link>
                    <Link 
                      to="/books" 
                      className="bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-600/60 font-semibold px-5 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2 text-sm backdrop-blur-sm"
                    >
                      <BookOpen size={16} /> OUR BOOKS
                    </Link>
                    <Link 
                      to="/cwn/pathways" 
                      className="bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-600/60 font-semibold px-5 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2 text-sm backdrop-blur-sm"
                    >
                      <Compass size={16} /> CHARACTER WITH NATURE®
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Stories That Open New Horizons & The Weaverton Series Section */}
          <div className="space-y-12 pt-10 border-t border-emerald-900/10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase">Discover The Weaverton Series</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#23461f]">Stories That Open New Horizons</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium pt-1">
                Step into stories where nature is alive with purpose and there is more happening around us than we can always see.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Through adventure, nature beings and meaningful choices, The Weaverton Series invites children to discover the importance of courage, responsibility, self-trust and other positive character traits — and to explore how their choices can affect the world around them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start pt-6">
              
              {/* Book Item 1: The Face in the Mountain */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-emerald-950/10 grid sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-5">
                  <Link to="/books" className="block group">
                    <img 
                      src="/book-cover-1.jpeg" 
                      alt="The Face in the Mountain Book Cover" 
                      className="w-full h-auto object-cover rounded-xl shadow-2xl transition duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                <div className="sm:col-span-7 space-y-4">
                  <div>
                    <h3 className="font-extrabold text-2xl text-[#23461f]">The Face in the Mountain</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mt-2">
                      When Boma's father must leave Vomper Creek, Boma worries that he won't remember everything he has been taught. As challenges arise, he must learn to trust what he knows, think creatively and discover what he is capable of.
                    </p>
                  </div>

                  <div className="flex text-amber-500 gap-0.5 pt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 italic leading-relaxed border-l-2 border-emerald-600 pl-3">
                    "A beautifully written story that touches the heart and awakens a sense of wonder in every child." <br />
                    <span className="font-semibold not-italic text-gray-500">— Amazon Reviewer</span>
                  </p>

                  <div className="pt-3 space-y-2">
                    <Link 
                      to="/books" 
                      className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-[#23461f] hover:text-emerald-600 transition bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200"
                    >
                      DISCOVER THE BOOK <ArrowRight size={14} />
                    </Link>
                    <div>
                      <a href="#buy" className="text-xs text-emerald-700 hover:underline font-medium inline-block pt-1">
                        Buy on Amazon →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Item 2: The Festival Shoes */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-emerald-950/10 grid sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-5">
                  <Link to="/books" className="block group">
                    <img 
                      src="/book-cover-2.jpeg" 
                      alt="The Festival Shoes Book Cover" 
                      className="w-full h-auto object-cover rounded-xl shadow-2xl transition duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>

                <div className="sm:col-span-7 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Coming Soon</span>
                    <h3 className="font-extrabold text-2xl text-[#23461f] mt-1">The Festival Shoes</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mt-2">
                      Drumlo's journey takes him through Weaverton, where fate fairies and nature beings are busy at work. When an unexpected challenge arises, he must draw on his courage, determination and self-trust to find a way forward.
                    </p>
                  </div>

                  <div className="flex text-amber-500 gap-0.5 pt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 italic leading-relaxed border-l-2 border-emerald-600 pl-3">
                    "An enchanting adventure filled with heart, magic and important lessons for every young reader." <br />
                    <span className="font-semibold not-italic text-gray-500">— ARC Reviewer</span>
                  </p>

                  <div className="pt-3 space-y-2">
                    <Link 
                      to="/books" 
                      className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-[#23461f] hover:text-emerald-600 transition bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200"
                    >
                      DISCOVER THE BOOK <ArrowRight size={14} />
                    </Link>
                    <div>
                      <a href="#buy" className="text-xs text-emerald-700 hover:underline font-medium inline-block pt-1">
                        Buy on Amazon →
                      </a>
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
          <div className="text-center space-y-3 mb-14">
            <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Readers Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto font-medium">Heartfelt reflections from parents, educators, and young nature advocates.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative flex flex-col justify-between space-y-6">
              <Quote className="absolute top-6 right-6 text-emerald-100" size={40} />
              <div className="space-y-4 relative z-10">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "Magnifying Children's Horizons has completely changed how my kids view the outdoors. They look at trees, birds, and rivers with total wonder now. The Weaverton Series is an absolute masterpiece!"
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-800 text-emerald-100 font-bold flex items-center justify-center text-sm shadow">
                  AO
                </div>
                <div>
                  <h4 className="font-bold text-[#23461f] text-sm">Dr. Abigail O.</h4>
                  <p className="text-xs text-gray-500">Parent & Educator</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative flex flex-col justify-between space-y-6">
              <Quote className="absolute top-6 right-6 text-emerald-100" size={40} />
              <div className="space-y-4 relative z-10">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "As a school counselor, finding literature that instills true character and ecological responsibility is rare. The Character with Nature pathways and stories have been an incredible asset in our classrooms."
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-800 text-emerald-100 font-bold flex items-center justify-center text-sm shadow">
                  MK
                </div>
                <div>
                  <h4 className="font-bold text-[#23461f] text-sm">Marcus K.</h4>
                  <p className="text-xs text-gray-500">Elementary School Teacher</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative flex flex-col justify-between space-y-6">
              <Quote className="absolute top-6 right-6 text-emerald-100" size={40} />
              <div className="space-y-4 relative z-10">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "My daughter reads *The Face in the Mountain* every single night before bed. The imagery and values embedded in the narrative are breathtaking. Thank you for creating such meaningful work!"
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-800 text-emerald-100 font-bold flex items-center justify-center text-sm shadow">
                  CN
                </div>
                <div>
                  <h4 className="font-bold text-[#23461f] text-sm">Chinedu N.</h4>
                  <p className="text-xs text-gray-500">Parent of Young Reader</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </ScrollFade>

      {/* 4. FREE WEAVERTON ACTIVITY BOOK LEAD CAPTURE */}
      <ScrollFade delay={150}>
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-[#152e13] text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-600/40 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 md:w-1/2">
              <span className="bg-emerald-700 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Free Resource</span>
              <h3 className="text-3xl font-extrabold leading-tight">Get the Free Weaverton Activity Book</h3>
              <p className="text-emerald-100 text-sm leading-relaxed font-medium">
                Sign up with your name and email to instantly download our interactive nature activity companion for children.
              </p>
            </div>

            <div className="md:w-1/2 w-full bg-white text-[#23461f] p-6 rounded-2xl shadow-xl">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="mx-auto text-emerald-600" size={48} />
                  <h4 className="font-bold text-xl text-[#23461f]">You're All Set!</h4>
                  <p className="text-sm text-gray-600">Check your inbox for your download link.</p>
                </div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Enter full name" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-600 text-sm bg-gray-50 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="name@example.com" 
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-emerald-600 text-sm bg-gray-50 text-gray-900"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#23461f] hover:bg-[#1c3919] text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 shadow-md"
                  >
                    <Download size={18} /> Download Free Activity Book
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </ScrollFade>

    </div>
  );
}