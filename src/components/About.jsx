import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import ScrollFade from './ScrollFade';

export default function About() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-24 overflow-x-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* SEAMLESS VIDEO HERO SECTION (100% FULL BROWSER WIDTH & HEIGHT) */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-screen min-h-screen flex items-center justify-center overflow-hidden left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] -mt-0">
        
        {/* Strictly Raw Background Video - Occupies 100% full browser screen with no gradient or color overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/about-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center space-y-5">
          
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/40 text-emerald-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-2xl">
            <span>🌿</span>
            <span>About Magnifying Children's Horizons</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white font-semibold tracking-wide leading-snug max-w-3xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Expanding Children's Horizons Through <span className="italic text-emerald-300">Nature</span>, <span className="italic text-emerald-300">Stories</span> and <span className="italic text-emerald-300">Discovery</span>
          </h1>

          {/* Description Paragraphs */}
          <div className="space-y-3 max-w-2xl mx-auto text-white font-medium text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <p className="text-sm sm:text-base md:text-lg font-bold text-emerald-200">
              At Magnifying Children’s Horizons, we believe a child’s curiosity is a living seed, ready to grow when it meets the quiet wisdom of nature.
            </p>
            <p>
              Every leaf, ripple and sunrise holds a quiet lesson, inviting children to slow down, wonder and grow.
            </p>
            <p>
              Through meaningful stories, nature-based experiences and opportunities for discovery and reflection, we help children explore their connection with nature while nurturing positive character, inner awareness and spiritual growth.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content Wrap with top spacing separated from Hero */}
      <div className="mt-20 space-y-20">

        {/* ------------------------------------------------------------- */}
        {/* SECTION 2 — OUR PHILOSOPHY (NATURE: A LIVING TEACHER)           */}
        {/* ------------------------------------------------------------- */}
        <ScrollFade>
          <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 rounded-3xl overflow-hidden shadow-2xl py-16 border border-emerald-950/20">
            
            {/* Background Image spanning the entire section card */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="/nature-image.png" 
                alt="Nature teaching background" 
                className="w-full h-full object-cover object-center"
              />
              {/* Left-to-right gradient overlay covering the text side and fading out on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf7] via-[#fbfaf7]/90 to-transparent sm:w-3/4 lg:w-2/3 pointer-events-none"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-4xl mx-auto sm:mx-0 sm:max-w-2xl lg:max-w-3xl space-y-6 text-left">
              
              {/* Section Header Tag */}
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-[#3a4d31] uppercase">
                  OUR PHILOSOPHY
                </span>
                <div className="h-[2px] w-24 bg-[#587a41]"></div>
              </div>

              {/* Main Section Title */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1e3215] font-normal tracking-wide">
                  Nature: A Living Teacher
                </h2>
                {/* Decorative chevrons with 🌿 leaf emoji */}
                <div className="flex items-center gap-2 text-[#587a41] font-bold text-lg tracking-tight select-none">
                  <span>🌿</span>
                  <span>«««</span>
                </div>
              </div>

              {/* Body Text Paragraphs */}
              <div className="space-y-4 text-[#23351a] text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  Just as children learn the language of their parents to live in harmony at home, we believe they can also learn the language of nature — observing its patterns, relationships and rhythms and discovering what these can teach them about themselves and the world around them.
                </p>
                <p className="text-[#2c4022]">
                  Nature offers children more than knowledge about plants, animals and ecosystems. Through observation and experience, nature can help children develop positive character traits and a growing understanding of the consequences of their choices.
                </p>
                <p className="font-semibold text-[#1e3215]">
                  We encourage children to notice, question, explore and discover for themselves.
                </p>
              </div>

              {/* Blockquote with explicit 🍀 clover leaf emoji positioned exactly like the design */}
              <div className="pt-3 flex items-center gap-4">
                <div className="text-3xl sm:text-4xl select-none flex-shrink-0">
                  🍀
                </div>
                <blockquote className="bg-white/80 backdrop-blur-md border-l-4 border-[#658a4c] px-5 py-3.5 rounded-r-2xl italic font-serif text-sm sm:text-base text-[#23351a] shadow-sm">
                  “Every leaf, ripple and sunrise holds a quiet lesson.”
                </blockquote>
              </div>

            </div>
          </section>
        </ScrollFade>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 3: MEET THE FOUNDER (EXACTLY MATCHING DESIGN IMAGE)     */}
        {/* ------------------------------------------------------------- */}
        <ScrollFade delay={100}>
          <section id="meet-founder" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 scroll-mt-8">
            <div className="space-y-8 text-left">
              
              {/* Section Header Tag */}
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-[#3a4d31] uppercase">
                   MEET THE FOUNDER
                </span>
                <div className="h-[2px] w-32 bg-[#587a41]"></div>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1e3215] font-normal tracking-wide">
                Meet Tolulope Okudolo
              </h2>

              {/* Grid matching the layout in your reference image */}
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">
                
                {/* Left Column: Photo Placeholder Box with Dashed Border */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="w-full aspect-[4/3] sm:aspect-square bg-[#f3efe6] rounded-2xl border-2 border-dashed border-[#c5bcac] flex flex-col items-center justify-center p-6 text-center shadow-inner group transition hover:bg-[#efe9df]">
                    <div className="w-16 h-16 rounded-full bg-[#e3dcd0] flex items-center justify-center text-[#736b5e] mb-3 shadow-sm">
                      <ImageIcon className="w-8 h-8 opacity-70" />
                    </div>
                    {/* <div className="text-[#595247] font-mono text-xs sm:text-sm tracking-wider font-semibold uppercase">
                      YOUR PHOTO HERE
                    </div> */}
                    <div className="text-[11px] text-[#7a7265] mt-1">
                      (<img 
                         src="/about-tolu.png" 
                          alt="Bush Forest Teaching" 
                      />)
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#595247] italic text-center leading-relaxed px-2 font-serif">
                    Tolulope sharing a story with children at the Niagara Nature Centre
                  </p>
                </div>

                {/* Right Column: Exact Copy from Design Reference */}
                <div className="lg:col-span-7 space-y-4 text-[#23351a] text-sm sm:text-base leading-relaxed">
                  <p className="font-light">
                    A child at heart with a deep, abiding love for her Creator, <strong className="font-semibold text-[#1e3215]">Tolulope (Tolu) Okudolo</strong> is an author and educator with a Bachelor of Education and an MBA. Her experiences living in Africa, Europe and North America have given her a rich multicultural perspective.
                  </p>
                  <p className="font-light">
                    Her passion lies in helping children discover the connections, wisdom and laws within nature and explore how these can guide everyday choices, nurture positive character and deepen their connection with the world around them.
                  </p>
                  <p className="font-light">
                    Tolu is the founder of Magnifying Children’s Horizons and creator of <strong className="font-semibold text-[#1e3215]">Character with Nature™</strong>, a nature-inspired framework that helps children discover life’s timeless principles through the natural world.
                  </p>
                  <p className="font-light">
                    She is the author of <em className="italic">The Face in the Mountain</em> and <em className="italic">The Festival Shoes</em> from The Weaverton Series, and co-creator of <em className="italic">Blossom in Nature</em>, a paired-perspective children's book initiative.
                  </p>
                </div>

              </div>

            </div>
          </section>
        </ScrollFade>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 4: HEAR FROM TOLU IN HER OWN VOICE (Q&A)              */}
        {/* ------------------------------------------------------------- */}
        <ScrollFade delay={150}>
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase">In Her Own Words</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#23351a]">
                A Conversation with Tolu
              </h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                Insights into the inspiration, vision, and heart behind our stories.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Q1 */}
              <div className="bg-[#f7f4ee] p-6 sm:p-8 rounded-2xl shadow-md border border-[#e5cea3]/30 space-y-2 text-left">
                <h3 className="font-serif font-bold text-lg text-[#23351a] flex items-start gap-2">
                  <span className="text-emerald-700 font-sans">Q:</span> What inspired you to begin writing your books?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base pl-6 font-light leading-relaxed">
                  My love for nature and children inspired me to begin writing. I believe that an important part of helping children develop character and spirituality lies in helping them connect with nature and discover its laws for themselves. My own experiences have also shaped the stories I tell.
                </p>
              </div>

              {/* Q2 */}
              <div className="bg-[#f7f4ee] p-6 sm:p-8 rounded-2xl shadow-md border border-[#e5cea3]/30 space-y-2 text-left">
                <h3 className="font-serif font-bold text-lg text-[#23351a] flex items-start gap-2">
                  <span className="text-emerald-700 font-sans">Q:</span> How do your stories begin?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base pl-6 font-light leading-relaxed">
                  Often with pictures. I see scenes in my mind's eye and begin putting the dialogue around them. It's also quite fun!
                </p>
              </div>

              {/* Q3 */}
              <div className="bg-[#f7f4ee] p-6 sm:p-8 rounded-2xl shadow-md border border-[#e5cea3]/30 space-y-2 text-left">
                <h3 className="font-serif font-bold text-lg text-[#23351a] flex items-start gap-2">
                  <span className="text-emerald-700 font-sans">Q:</span> When a parent reads your books to their child, how do you want the child to feel?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base pl-6 font-light leading-relaxed">
                  Secure — and curious. I want children to feel that there is more to nature than what they first see, and to leave the story wanting to explore, discover and find their own connection with the natural world.
                </p>
              </div>

              {/* Q4 */}
              <div className="bg-[#f7f4ee] p-6 sm:p-8 rounded-2xl shadow-md border border-[#e5cea3]/30 space-y-2 text-left">
                <h3 className="font-serif font-bold text-lg text-[#23351a] flex items-start gap-2">
                  <span className="text-emerald-700 font-sans">Q:</span> Why do you believe nature is such an important teacher for children?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base pl-6 font-light leading-relaxed">
                  I believe nature can be a child's first classroom. Just as children learn the language of those around them, they can learn to observe and understand the language of nature. Through that relationship, they can discover principles that help them develop character, inner awareness and a deeper connection with the world around them.
                </p>
              </div>

            </div>
          </section>
        </ScrollFade>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM CALL TO ACTION                                         */}
        {/* ------------------------------------------------------------- */}
        <section className="max-w-4xl mx-auto px-4 text-center pt-8">
          <div className="bg-[#23351a] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-light">Ready to Explore More?</h2>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto font-light">
              Discover our collection of books and nature-based learning pathways designed to inspire your child's journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link 
                to="/books" 
                className="bg-white text-[#23351a] hover:bg-emerald-50 font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg transition"
              >
                Explore Our Books
              </Link>
              <Link 
                to="/cwn/pathways" 
                className="bg-[#355322] hover:bg-[#2c441b] text-white border border-emerald-700 font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-lg transition"
              >
                Character With Nature™
              </Link>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}