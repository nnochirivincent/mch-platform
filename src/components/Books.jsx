import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollFade from './ScrollFade';

export default function Books() {
  const [tfimReviewsOpen, setTfimReviewsOpen] = useState(false);
  const [tfsReviewsOpen, setTfsReviewsOpen] = useState(false);

  return (
    <div className="bg-[#fcfbf9] min-h-screen text-[#14230f] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-0 pb-0">
        <div className="relative w-full rounded-none overflow-hidden h-[22vh] sm:h-[30vh] lg:h-[35vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#162211]">
            <img 
              src="/books-hero.png" 
              alt="Our Books Header" 
              className="w-full h-full object-cover object-center transform scale-100"
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a2b13] tracking-tight drop-shadow-sm">
              OUR BOOKS
            </h1>
          </div>
        </div>
      </section>

      {/* Introductory Heading */}
      <section className="pt-6 pb-3 sm:pt-8 sm:pb-4 px-4 sm:px-6 lg:px-12">
        <ScrollFade delay={80}>
          <div className="text-center max-w-3xl mx-auto space-y-3 px-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1e3319] tracking-tight">
              Discover the Weaverton Series
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#1b2718] font-semibold leading-relaxed">
              Step into a world where nature is alive with purpose.<br className="hidden sm:inline" />
              Through the Weaverton Series, children encounter nature beings, unexpected challenges and discoveries that encourage courage, creativity, self-trust and a deeper connection with the natural world.
            </p>
          </div>
        </ScrollFade>
      </section>

      {/* BOOK 1: The Face in the Mountain */}
      <section className="pt-2 pb-6 sm:pt-4 sm:pb-8 px-4 sm:px-6 lg:px-10 border-b border-[#23351a]/10">
        <ScrollFade delay={80}>
          <div className="max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-6 items-center">
              
              {/* Book Cover */}
              <div className="lg:col-span-3 flex justify-center items-center relative overflow-visible my-2 lg:my-0">
                <img 
                  src="/tfim-book-cover.png" 
                  alt="The Face in the Mountain Book Cover" 
                  className="w-auto h-[240px] sm:h-[310px] lg:h-[380px] max-w-none object-contain transform transition hover:scale-[1.02] lg:absolute lg:-top-20 drop-shadow-xl z-20"
                />
              </div>

              {/* Book Info & Trailer */}
              <div className="lg:col-span-9 grid md:grid-cols-2 gap-6 lg:gap-6 items-center">
                
                <div className="space-y-3 text-left">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1e3319]">
                      The Face in the Mountain
                    </h3>
                    <p className="text-[11px] uppercase tracking-widest font-extrabold text-[#355322] mt-0.5">
                      Ages 6–9
                    </p>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-[#1b2718] font-semibold leading-relaxed">
                    Boma and his father are nature giants who help the nature beings with their work in Vomper Creek. When Boma’s father must leave, Boma worries he won’t remember everything he has been taught. As unexpected challenges arise, he must learn to trust what he knows, think creatively and discover what he is capable of.
                  </p>

                  <p className="font-serif italic text-sm sm:text-base md:text-lg font-bold text-[#2c441c]">
                    A story about self-trust, creativity and what nature can teach us about working together.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a 
                      href="https://www.amazon.com/Face-Mountain-Tolulope-Okudolo/dp/0994876947/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-4 sm:px-5 py-2.5 rounded-lg shadow transition"
                    >
                      DISCOVER / BUY THE BOOK →
                    </a>

                    <button
                      type="button"
                      onClick={() => setTfimReviewsOpen(!tfimReviewsOpen)}
                      className="inline-flex items-center space-x-1.5 bg-[#eaf2e6] hover:bg-[#ddeade] text-[#2c441c] border border-[#355322]/20 font-bold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-lg shadow-sm transition cursor-pointer"
                    >
                      <span>{tfimReviewsOpen ? 'Hide Reviews ▲' : 'Read Reviews (3) ▼'}</span>
                    </button>
                  </div>
                </div>

                {/* Trailer Thumbnail Box */}
                <div className="space-y-2 text-center max-w-md mx-auto w-full pt-2 md:pt-0">
                  <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video flex items-center justify-center group cursor-pointer bg-black/5 max-h-[190px] mx-auto w-full">
                    <img 
                      src="/TFITM-tumnail.png" 
                      alt="The Face in the Mountain Trailer Preview" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/90 text-[#1e3319] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                        <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link 
                      to="#"
                      className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold tracking-widest text-[#355322] uppercase border border-[#355322]/20 px-3 py-1.5 rounded-lg hover:bg-[#1e3319]/5 transition shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      <span>WATCH THE TRAILER</span>
                    </Link>
                  </div>
                </div>

              </div>

              {/* Collapsible Reviews Drawer for Book 1 */}
              {tfimReviewsOpen && (
                <div className="lg:col-span-12 bg-[#f4f7f2] border border-[#d2e2cc] p-4 sm:p-6 rounded-xl mt-4 space-y-4 shadow-inner w-full">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1e3319] border-b border-[#d2e2cc] pb-2">
                    Reader Reviews — The Face in the Mountain
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-base">
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2 border border-[#e2ebd9]">
                      <div className="text-amber-600 font-bold">★★★★★</div>
                      <p className="italic text-[#1b2718] font-semibold text-sm sm:text-base">
                        "Liken to Lion King, this is a coming of age story of a father and son. a beautiful tale that inspires us to remember that what we do affects the world we live in. A really fun one to give to a father to read to his son."
                      </p>
                      <p className="font-bold text-[#355322]">— Ruby Blotzer</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2 border border-[#e2ebd9]">
                      <div className="text-amber-600 font-bold">★★★★★</div>
                      <p className="italic text-[#1b2718] font-semibold text-sm sm:text-base">
                        "Beautifully illustrated - about the interconnectedness of nature. The identification of several faces in mountains around North America will get people observing the mountains as they travel around. What a great idea."
                      </p>
                      <p className="font-bold text-[#355322]">— Carla Johnson-Hicks</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2 border border-[#e2ebd9]">
                      <div className="text-amber-600 font-bold">★★★★★</div>
                      <p className="italic text-[#1b2718] font-semibold text-sm sm:text-base">
                        "A very uniquely different children's book, with its beautiful illustrations shows how fascinating nature can be to children. Through their eyes things look totally different than they do to adults."
                      </p>
                      <p className="font-bold text-[#355322]">— Wanda Maynard (Rating: 5 out of 5 stars)</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </ScrollFade>
      </section>

      {/* BOOK 2: The Festival Shoes */}
      <section className="pt-2 pb-6 sm:pt-4 sm:pb-8 px-4 sm:px-6 lg:px-10 border-b border-[#23351a]/10">
        <ScrollFade delay={80}>
          <div className="max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-6 items-center">
              
              {/* Trailer/Video on Left */}
              <div className="lg:col-span-4 space-y-2 text-center max-w-md mx-auto w-full order-2 lg:order-1">
                <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video flex items-center justify-center group cursor-pointer bg-black/5 max-h-[190px] mx-auto w-full">
                  <img 
                    src="/TFS-tumbnail.png" 
                    alt="The Festival Shoes Trailer Preview" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white/90 text-[#1e3319] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                      <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <Link 
                    to="#"
                    className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold tracking-widest text-[#355322] uppercase border border-[#355322]/20 px-3 py-1.5 rounded-lg hover:bg-[#1e3319]/5 transition shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    <span>WATCH THE TRAILER</span>
                  </Link>
                </div>
              </div>

              {/* Details in Center */}
              <div className="lg:col-span-5 space-y-3 text-left order-3 lg:order-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1e3319]">
                    The Festival Shoes
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest font-extrabold text-[#355322] mt-0.5">
                    Ages 6–9
                  </p>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-[#1b2718] font-semibold leading-relaxed">
                  High above Earth lies Weaverton, where children’s thoughts, words and actions become colourful threads. When sorting pixie Drumlo receives his first important task, it takes him farther than he has ever been before — and along the way, an unexpected challenge puts him to the test.
                </p>

                <p className="font-serif italic text-sm sm:text-base md:text-lg font-bold text-[#2c441c]">
                  A luminous adventure exploring the power of our thoughts, words and actions — and how our choices connect us to others, to nature and to the world around us.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a 
                    href="https://www.amazon.com/dp/YOUR_BOOK_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#355322] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-4 sm:px-5 py-2.5 rounded-lg shadow transition"
                  >
                    DISCOVER / BUY THE BOOK →
                  </a>

                  <button
                    type="button"
                    onClick={() => setTfsReviewsOpen(!tfsReviewsOpen)}
                    className="inline-flex items-center space-x-1.5 bg-[#eaf2e6] hover:bg-[#ddeade] text-[#2c441c] border border-[#355322]/20 font-bold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-lg shadow-sm transition cursor-pointer relative z-30"
                  >
                    <span>{tfsReviewsOpen ? 'Hide Reviews ▲' : 'Read Reviews (3) ▼'}</span>
                  </button>
                </div>
              </div>

              {/* Book Cover on Right */}
              <div className="lg:col-span-3 flex justify-center items-center relative overflow-visible my-2 lg:my-0 order-1 lg:order-3">
                <img 
                  src="/TFS-Book-cover.png" 
                  alt="The Festival Shoes Book Cover" 
                  className="w-auto h-[260px] sm:h-[340px] lg:h-[440px] max-w-none object-contain transform transition hover:scale-[1.02] lg:absolute lg:-top-24 drop-shadow-xl z-20"
                />
              </div>

              {/* Collapsible Reviews Drawer for Book 2 */}
              {tfsReviewsOpen && (
                <div className="lg:col-span-12 bg-[#f4f7f2] border border-[#d2e2cc] p-4 sm:p-6 rounded-xl mt-4 space-y-4 shadow-inner relative z-30 w-full order-4">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#1e3319] border-b border-[#d2e2cc] pb-2">
                    Reader Reviews — The Festival Shoes
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-base">
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2 border border-[#e2ebd9]">
                      <div className="text-amber-600 font-bold">★★★★★</div>
                      <p className="italic text-[#1b2718] font-semibold text-sm sm:text-base">
                        "How the author involves all the senses when using colors and mood to portray earths actions, is brilliant. The wispiness of the illustrations plays into the story without overpowering the message."
                      </p>
                      <p className="font-bold text-[#355322]">— Lori Shiver, Goodreads Reviewer</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2 border border-[#e2ebd9]">
                      <div className="text-amber-600 font-bold">★★★★★</div>
                      <p className="italic text-[#1b2718] font-semibold text-sm sm:text-base">
                        "Inspiring, creative, a breath of fresh air. This is a piece of children’s lit whose vintage innocence blazes a trail forward to what children’s literature should be."
                      </p>
                      <p className="font-bold text-[#355322]">— Producervan E, Goodreads Reviewer</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm space-y-2 border border-[#e2ebd9]">
                      <div className="text-amber-600 font-bold">★★★★★</div>
                      <p className="italic text-[#1b2718] font-semibold text-sm sm:text-base">
                        "Manages to educate, - not just entertain, a timeless story that will enthrall and capture the imagination of young readers as fantasy touches are woven in a magically beautiful style. The writing is so vivid you feel like you are actually right there..."
                      </p>
                      <p className="font-bold text-[#355322]">— Tara Sheehan, Artistic Bent (Rating: 5/5 stars)</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </ScrollFade>
      </section>

      {/* BOTTOM SECTION: Two Side-by-Side Groups */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-10 border-b border-[#23351a]/10">
        <ScrollFade delay={80}>
          <div className="max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Group: Continue the Adventure */}
              <div className="lg:col-span-7 bg-[#edf2eb] p-5 sm:p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-2 text-left">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1e3319]">
                    Continue the Adventure
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-[#1b2718] font-semibold leading-relaxed max-w-xl">
                    Explore free colouring pages, games and activities inspired by the Weaverton Series.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center py-2 justify-items-center">
                  <div className="flex justify-center transform -rotate-1 hover:rotate-0 transition duration-300 group">
                    <img 
                      src="/1-aboutpage-bookcover.png" 
                      alt="Coloring Book" 
                      className="h-40 sm:h-56 w-auto object-contain drop-shadow-xl rounded group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                  <div className="flex justify-center transform rotate-1 hover:rotate-0 transition duration-300 group">
                    <img 
                      src="/TFS-adventure-game.png" 
                      alt="Board Game Activity" 
                      className="h-32 sm:h-44 w-auto object-contain drop-shadow-xl rounded group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                </div>

                <div className="text-left pt-1">
                  <Link 
                    to="/resources"
                    className="inline-block bg-[#3c5e2a] hover:bg-[#2c441b] text-white font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-lg shadow transition"
                  >
                    EXPLORE FREE RESOURCES →
                  </Link>
                </div>
              </div>

              {/* Right Group: More Stories to Discover */}
              <div className="lg:col-span-5 bg-[#fcf0ed] p-5 sm:p-8 rounded-xl shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-2 text-left">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1e3319]">
                    More Stories to Discover
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-[#1b2718] font-semibold leading-relaxed">
                    Explore books and creative collaborations beyond the Weaverton Series — including stories that invite children to experience nature, character and the world from different perspectives.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center py-2 justify-items-center">
                  <div className="flex justify-center transform -rotate-1 hover:rotate-0 transition duration-300 group">
                    <img 
                      src="/2-bookcover-aboutpage.png" 
                      alt="Luna's Threads of Light" 
                      className="h-36 sm:h-48 w-auto object-contain drop-shadow-xl rounded group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                  <div className="flex justify-center transform rotate-1 hover:rotate-0 transition duration-300 group">
                    <img 
                      src="/bookcover-aboutpage.png" 
                      alt="Femi's Promise" 
                      className="h-36 sm:h-48 w-auto object-contain drop-shadow-xl rounded group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                </div>

                <div className="text-left pt-1">
                  <Link 
                    to="/collaboration"
                    className="inline-block bg-[#9c5175] hover:bg-[#823e60] text-white font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-lg shadow transition"
                  >
                    EXPLORE COLLABORATIONS →
                  </Link>
                </div>
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

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs uppercase tracking-wider font-extrabold text-[#28421c]">
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

        <div className="pt-4 pb-6 px-4 sm:px-6 lg:px-10 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#384a30] font-semibold gap-2 max-w-[90rem] mx-auto text-center sm:text-left">
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