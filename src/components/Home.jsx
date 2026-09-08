import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Bell, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CharacterWithNature() {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notified, setNotified] = useState(false);

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (notifyEmail) {
      setNotified(true);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* ScrollFade wrapper simulation or direct section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-[#fcf9f2] rounded-3xl p-8 sm:p-12 border border-[#23351a]/10 shadow-lg">
          
          {/* Top Header Information */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#23351a]">
              Character with Nature™
            </h2>
            <p className="text-[#344030] text-sm sm:text-base font-light leading-relaxed">
              Fostering virtue, wonder, and holistic growth through immersive outdoor exploration and mindful connection with the natural world.
            </p>
          </div>

          {/* Central Visual / Steps Graphic Container */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#23351a]/10 mb-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
              
              {/* Discover Step */}
              <div className="flex flex-col items-center text-center max-w-[140px] space-y-2">
                <div className="w-14 h-14 rounded-full bg-[#1e3215] flex items-center justify-center shadow-lg border border-[#486337]">
                  <svg className="w-7 h-7 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="font-serif font-bold text-xs text-[#1e3215] tracking-wide">
                  Discover
                </span>
              </div>

              {/* Reflect Step */}
              <div className="flex flex-col items-center text-center max-w-[140px] space-y-2">
                <div className="w-14 h-14 rounded-full bg-[#1e3215] flex items-center justify-center shadow-lg border border-[#486337]">
                  <svg className="w-7 h-7 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="font-serif font-bold text-xs text-[#1e3215] tracking-wide">
                  Reflect
                </span>
              </div>

              {/* Grow Step */}
              <div className="flex flex-col items-center text-center max-w-[140px] space-y-2">
                <div className="w-14 h-14 rounded-full bg-[#1e3215] flex items-center justify-center shadow-lg border border-[#486337]">
                  <svg className="w-7 h-7 text-[#fcf9f2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="font-serif font-bold text-xs text-[#1e3215] tracking-wide">
                  Grow
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Grid: 2 Feature Cards for CWN Pathways & Journal */}
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-[#23351a]/15 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#23351a] text-[#b8df8a] flex items-center justify-center font-bold shadow">
                  <Compass size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#23351a]">
                  The Character with Nature™ Pathways
                </h3>
                <p className="text-[#344030] text-xs sm:text-sm leading-relaxed font-light">
                  Structured nature-based learning journeys designed for parents, educators and group leaders to guide children through observation, reflection and character development activities.
                </p>
              </div>
              <div>
                <Link 
                  to="/cwn/pathways" 
                  className="inline-flex items-center gap-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition shadow"
                >
                  <span>EXPLORE PATHWAYS</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-[#23351a]/15 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#23351a] text-[#b8df8a] flex items-center justify-center font-bold shadow">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#23351a]">
                  The Discovery Journal
                </h3>
                <p className="text-[#344030] text-xs sm:text-sm leading-relaxed font-light">
                  A companion reflection journal where children can record their outdoor discoveries, draw what they see, answer reflective prompts and track their personal character growth.
                </p>
              </div>
              <div>
                <Link 
                  to="/cwn/journal" 
                  className="inline-flex items-center gap-2 bg-[#23351a] hover:bg-[#1a2813] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition shadow"
                >
                  <span>DISCOVER THE JOURNAL</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* COMING SOON / NEWSLETTER NOTIFICATION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#23351a] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-[#486337]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <Bell size={14} />
              <span>Stay Connected</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light">
              Be the First to Know When New Books & Resources Arrive
            </h2>

            <p className="text-emerald-100 text-sm sm:text-base font-light">
              Join our community of parents and educators dedicated to helping children grow through stories, nature and discovery.
            </p>

            <form onSubmit={handleNotifySubmit} className="pt-2">
              {notified ? (
                <div className="bg-emerald-900/85 border border-emerald-700 p-4 rounded-2xl text-emerald-200 text-sm font-medium flex items-center justify-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span>Thank you! We will keep you updated on all new releases.</span>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="Enter your email address" 
                    required
                    className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                  />
                  <button 
                    type="submit"
                    className="bg-white hover:bg-emerald-50 text-[#23351a] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition duration-200 shadow-lg shrink-0 cursor-pointer"
                  >
                    Notify Me
                  </button>
                </div>
              )}
            </form>
            
            <p className="text-[11px] text-emerald-300/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}