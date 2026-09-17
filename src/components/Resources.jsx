import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollFade from './ScrollFade';

export default function Resources() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage(null);
    setIsError(false);

    // Automatically detect if running locally or in production on Vercel
    const BACKEND_URL =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000'
        : 'https://mch-platform.onrender.com';

    try {
      const response = await fetch(`${BACKEND_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          data.message ||
            'Thank you! We have sent the activity book download link to your email address.'
        );

        // Clear both fields after successful submission
        setName('');
        setEmail('');

        // IMPORTANT:
        // We do NOT open or download the PDF here.
        // The visitor will receive the download link by email.
      } else {
        setIsError(true);
        setMessage(
          data.error ||
            'Something went wrong. Please try again.'
        );
      }
    } catch (error) {
      console.error('Subscription error:', error);

      setIsError(true);
      setMessage(
        'Network error. Check if your backend server is running.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fbfbf9] min-h-screen text-[#1b2718] relative overflow-x-hidden selection:bg-[#3c5e2a] selection:text-white">
      
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#87a96b]/10 to-[#3c5e2a]/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-[50%] right-10 w-[400px] h-[400px] bg-gradient-to-br from-[#c2d0b7]/20 to-[#4a6b35]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-0 pb-0">
        <div className="relative w-full rounded-none overflow-hidden h-[26vh] sm:h-[30vh] lg:h-[34vh] flex items-center justify-center bg-[#162211]">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/hero-resources-page.png" 
              alt="Free Resources Header" 
              className="w-full h-full object-cover object-center transform scale-100 filter brightness-95"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#162211]/70 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-md">
              Free Resources
            </h1>
          </div>
        </div>
      </section>

      {/* SUB-HERO TAGLINE */}
      <section className="pt-6 pb-6 px-4 text-center bg-[#fbfbf9] relative z-10">
        <ScrollFade delay={60}>
          <div className="max-w-4xl mx-auto space-y-2">
            <p className="text-base sm:text-lg text-[#1e3319] font-medium leading-relaxed">
              Extend the stories with activities created to encourage imagination  <br /> discovery and connection with nature.
            </p>
          </div>
        </ScrollFade>
      </section>

      {/* 2. FEATURED RESOURCE SECTION (Compacted Spacing) */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-12 bg-[#edf2eb] border-y border-[#23351a]/10 relative overflow-hidden shadow-inner">
        <div className="max-w-6xl mx-auto">
          <ScrollFade delay={80}>
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* Left Column */}
              <div className="lg:col-span-6 relative flex justify-center items-center py-2">
                <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] flex items-center justify-center">

                  {/* Sheet 1 */}
                  <img 
                    src="/1-tumbnail-image.jpg" 
                    alt="Explore Weaverton Sheet" 
                    className="absolute right-4 sm:right-8 top-0 z-10 w-[160px] sm:w-[190px] transform rotate-3 drop-shadow-lg rounded"
                  />

                  {/* Sheet 2 */}
                  <img 
                    src="/2-tumbnail-image.jpg" 
                    alt="Who is at Work in Weaverton Sheet" 
                    className="absolute right-10 sm:right-16 top-16 sm:top-20 z-20 w-[150px] sm:w-[180px] transform -rotate-2 drop-shadow-xl rounded"
                  />

                  {/* Sheet 3 */}
                  <img 
                    src="/3-tumbnail-image.jpg" 
                    alt="What Could You Do Sheet" 
                    className="absolute left-20 sm:left-28 top-28 sm:top-32 z-30 w-[160px] sm:w-[190px] transform rotate-1 drop-shadow-2xl rounded"
                  />

                  {/* Main Activity Book Cover */}
                  <img 
                    src="/activity-bookcover.png" 
                    alt="Welcome to Weaverton Activity Book Cover" 
                    className="absolute left-0 top-2 z-40 w-[200px] sm:w-[250px] transform -rotate-1 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl rounded-lg"
                  />

                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-6 space-y-2.5 text-left px-2 sm:px-4">

                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#3c5e2a] block">
                  FEATURED RESOURCE
                </span>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1e3319] leading-tight">
                  Welcome to Weaverton
                </h2>

                <h3 className="text-sm sm:text-base font-serif font-semibold text-[#2c3e24]">
                  A Free Activity Book for Children
                </h3>

                <p className="text-xs sm:text-sm text-[#2c3e24] font-medium leading-relaxed">
                  Step into the world of Weaverton through puzzles, searches, coloring, nature discoveries and activities that encourage children to observe, imagine and explore.
                </p>

                <p className="text-xs sm:text-sm text-[#1e3319] font-bold">
                  Enter your name and email to receive your free copy.
                </p>

                {/* NAME + EMAIL FORM */}
                <form
                  onSubmit={handleSubscribe}
                  className="space-y-2.5 max-w-md pt-0.5"
                >

                  {/* Name */}
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border border-[#3c5e2a]/30 focus:outline-none focus:border-[#3c5e2a] shadow-sm text-[#1b2718]"
                  />

                  {/* Email + Button */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="email" 
                      required
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-3.5 py-2.5 text-sm rounded-xl bg-white border border-[#3c5e2a]/30 focus:outline-none focus:border-[#3c5e2a] shadow-sm text-[#1b2718]"
                    />

                    <button 
                      type="submit"
                      disabled={loading}
                      className="bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 shrink-0 disabled:opacity-50"
                    >
                      {loading
                        ? 'SENDING...'
                        : 'GET THE FREE ACTIVITY BOOK →'}
                    </button>
                  </div>

                  {/* Dynamic Status Message */}
                  {message && (
                    <p
                      className={`text-xs font-semibold mt-1 ${
                        isError
                          ? 'text-red-600'
                          : 'text-[#3c5e2a]'
                      }`}
                    >
                      {message}
                    </p>
                  )}

                  {/* Privacy */}
                  <div className="flex items-center space-x-1.5 text-[11px] text-[#384a30] pt-0.5">
                    <svg
                      className="w-3.5 h-3.5 shrink-0 text-[#3c5e2a]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      We respect your privacy. Your information will only be used to send you this resource and occasional updates from MCH.
                    </span>
                  </div>

                </form>

              </div>

            </div>
          </ScrollFade>
        </div>
      </section>

      {/* 3. MORE FREE ACTIVITIES SECTION */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 bg-[#fbfbf9]">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-[1px] w-16 bg-[#3c5e2a]/30"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1e3319]">
                More Free Activities
              </h2>
              <div className="h-[1px] w-16 bg-[#3c5e2a]/30"></div>
            </div>
            <p className="text-sm sm:text-base text-[#2c3e24] font-medium">
              Continue the stories with activities to download, print and enjoy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
            {/* Item 1 */}
            <ScrollFade delay={100}>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                <img 
                  src="/1-aboutpage-bookcover.png" 
                  alt="The Face in the Mountain Coloring Book" 
                  className="w-[150px] sm:w-[175px] shrink-0 drop-shadow-xl rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                />
                <div className="space-y-2.5">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1e3319]">
                    The Face in the Mountain Coloring Book
                  </h3>
                  <p className="text-sm sm:text-base text-[#2c3e24] font-medium leading-relaxed">
                    Bring scenes and characters from <span className="italic">The Face in the Mountain</span> to life with this free coloring book.
                  </p>
                  <div className="pt-1">
                    <a 
                      href="/tfim-coloring-book-2.pdf" 
                      download="Face-In-The-Mountain-Coloring-Book.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md transition duration-300"
                    >
                      DOWNLOAD FREE →
                    </a>
                  </div>
                </div>
              </div>
            </ScrollFade>

            {/* Item 2 */}
            <ScrollFade delay={140}>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                <img 
                  src="/TFS-adventure-game.png" 
                  alt="The Festival Shoes Adventure Game" 
                  className="w-[160px] sm:w-[190px] shrink-0 drop-shadow-xl rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
                />
                <div className="space-y-2.5 w-full">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1e3319]">
                    The Festival Shoes Adventure Game
                  </h3>
                  <p className="text-sm sm:text-base text-[#2c3e24] font-medium leading-relaxed">
                    Follow Dunah’s journey from Weaverton to Earth in this downloadable game inspired by <span className="italic">The Festival Shoes</span>.
                  </p>
                  <div>
                    <a 
                      href="/TFS-adventure-game.pdf" 
                      download="Festival-Shoes-Adventure-Game.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md transition duration-300"
                    >
                      DOWNLOAD FREE →
                    </a>
                  </div>

                  <div className="pt-2">
                    <button 
                      onClick={() => setIsHowToPlayOpen(!isHowToPlayOpen)}
                      className="w-full flex items-center justify-between text-xs sm:text-sm font-bold text-[#1e3319] py-2 px-3 rounded-lg bg-[#edf2eb]/70 hover:bg-[#edf2eb] transition border border-[#3c5e2a]/15 shadow-sm"
                    >
                      <span>How to Play</span>
                      <svg 
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          isHowToPlayOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isHowToPlayOpen && (
                      <div className="pt-2 px-3 text-xs text-[#2c3e24] space-y-1.5 bg-[#edf2eb]/40 rounded-b-lg pb-2.5 text-left border-x border-b border-[#3c5e2a]/15">
                        <p>1. Print out the game board and instructions sheet.</p>
                        <p>2. Gather your tokens and dice to begin the journey across Weaverton.</p>
                        <p>3. Follow the board paths, answer discovery prompts, and reach the festival celebration!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* 4. KEEP EXPLORING BANNER (Minimal Height, Bold & Prominent Text) */}
      <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#eaf0e8] border-t border-[#23351a]/10 shadow-inner">
        <div className="relative z-10 max-w-xl mx-auto text-center space-y-2">
          <ScrollFade delay={80}>
            <span className="inline-block text-[#3c5e2a] text-lg mb-0.5">🍃</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1e3319] tracking-tight">
              Keep Exploring
            </h3>
            <p className="text-sm sm:text-base text-[#1b2718] font-semibold leading-snug">
              Discover the stories behind the activities and meet the characters of Weaverton.
            </p>
            <div className="pt-1.5">
              <Link 
                to="/books" 
                className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-extrabold text-xs uppercase tracking-widest px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                EXPLORE OUR BOOKS →
              </Link>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <div className="pt-6 border-t border-[#23351a]/15 px-4 sm:px-6 lg:px-12 bg-[#eaf0e8]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6">
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
              <span className="font-serif font-bold text-base text-[#1a2b13] leading-none">
                Magnifying Children's Horizons
              </span>
              <span className="text-[10px] text-[#2c3e24] font-bold uppercase tracking-widest mt-1">
                NATURE • CHARACTER • INNER AWARENESS • SPIRITUAL GROWTH
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider font-extrabold text-[#28421c]">
            <Link to="/" className="hover:text-[#1a2b13] transition">Home</Link>
            <Link to="/about" className="hover:text-[#1a2b13] transition">About</Link>
            <Link to="/books" className="hover:text-[#1a2b13] transition">Books</Link>
            <Link to="/resources" className="hover:text-[#1a2b13] transition">Resources</Link>
            <Link to="/cwn/pathways" className="hover:text-[#1a2b13] transition">CWN</Link>
            <Link to="/contact" className="hover:text-[#1a2b13] transition">Contact</Link>
          </div>

          <div className="flex items-center space-x-2.5 shrink-0">
            <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#youtube" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 6.627-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.797c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#384a30] font-semibold gap-2 pb-6">
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