import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollFade from './ScrollFade';

export default function About() {
  return (
    <div className="bg-[#fcfbf9] min-h-screen space-y-20 pb-24 overflow-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* SEAMLESS VIDEO HERO SECTION                                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Video */}
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

        {/* Dark Tint Overlay to boost text legibility */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content Overlay */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 text-center text-white space-y-6">
          
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-emerald-300 text-xs sm:text-sm font-bold tracking-widest uppercase shadow-lg">
            <span>🌿</span>
            <span>About Magnifying Children's Horizons</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-light tracking-wide leading-tight max-w-3xl mx-auto drop-shadow-md">
            Expanding Children's Horizons Through <span className="font-semibold italic text-emerald-300">Nature</span>, <span className="font-semibold italic text-emerald-300">Stories</span>, and <span className="font-semibold italic text-emerald-300">Discovery</span>
          </h1>

          {/* Description Paragraphs */}
          <div className="space-y-4 max-w-2xl mx-auto text-white/95 font-light text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-sm">
            <p className="text-base sm:text-lg md:text-xl font-medium text-emerald-200">
              At Magnifying Children’s Horizons, we believe a child’s curiosity is a living seed, ready to grow when it meets the quiet wisdom of nature.
            </p>
            <p>
              Every leaf, ripple, and sunrise holds a quiet lesson, inviting children to slow down, wonder, and grow.
            </p>
            <p>
              Through meaningful stories, nature-based experiences, and opportunities for discovery and reflection, we help children explore their connection with nature while nurturing positive character, inner awareness, and spiritual growth.
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 1 & 2: INTRODUCTION & PHILOSOPHY                      */}
      {/* ------------------------------------------------------------- */}
      <ScrollFade>
        <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 rounded-3xl overflow-hidden shadow-2xl py-16 border border-emerald-950/20">
          
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/cream.jpeg" 
              alt="Cream background" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 space-y-16">
            
            {/* Introduction */}
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 space-y-5 text-left">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1e3215] font-bold leading-snug">
                  At Magnifying Children’s Horizons
                </h2>
                <div className="space-y-4 text-[#23351a] text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    We believe a child’s curiosity is a living seed, ready to grow when it meets the quiet wisdom of nature.
                  </p>
                  <p className="text-[#2c4022] font-light">
                    Every leaf, ripple and sunrise holds a quiet lesson, inviting children to slow down, wonder and grow.
                  </p>
                  <p className="text-[#2c4022] font-light">
                    Through meaningful stories, nature-based experiences and opportunities for discovery and reflection, we help children explore their connection with nature while nurturing positive character, inner awareness and spiritual growth.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#23351a]/10">
                  <img 
                    src="/hero-image-2.png" 
                    alt="Children exploring nature" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Philosophy: Nature as a Living Teacher */}
            <div className="pt-8 border-t border-[#23351a]/10">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#1e3215] font-bold">
                  Nature: A Living Teacher
                </h2>
                <div className="space-y-4 text-[#23351a] text-base sm:text-lg leading-relaxed font-light text-left">
                  <p>
                    Just as children learn the language of their parents to live in harmony at home, we believe they can also learn the language of nature — observing its patterns, relationships and rhythms and discovering what these can teach them about themselves and the world around them.
                  </p>
                  <p>
                    Nature offers children more than knowledge about plants, animals and ecosystems. Through observation and experience, nature can help children develop positive character traits and a growing understanding of the consequences of their choices.
                  </p>
                  <p className="font-medium text-[#1e3215]">
                    At Magnifying Children's Horizons, we create opportunities for children not simply to be told these things, but to notice, question, explore and discover for themselves.
                  </p>
                </div>

                <blockquote className="my-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-l-4 border-[#658a4c] italic font-serif text-lg text-[#23351a] shadow-sm">
                  “Every leaf, ripple and sunrise holds a quiet lesson.”
                </blockquote>
              </div>
            </div>

          </div>
        </section>
      </ScrollFade>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: MEET THE FOUNDER                                   */}
      {/* ------------------------------------------------------------- */}
      <ScrollFade delay={100}>
        <section id="meet-founder" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 sm:p-12 lg:p-16">
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                  <img 
                    src="/tolu-founder.jpeg" 
                    alt="Tolulope Okudolo sharing a story with children at the Niagara Nature Centre" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center italic">
                  Tolulope sharing a story with children at the Niagara Nature Centre (Fall Fundraiser, October 2017)
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-emerald-700 font-bold text-xs tracking-widest uppercase">Founder & Author</span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#23351a]">
                    Meet Tolulope Okudolo
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                  <p className="font-medium text-[#23351a]">
                    A child at heart with a deep, abiding love for her Creator, Tolulope (Tolu) Okudolo is an author and educator with a Bachelor of Education and an MBA. Her experiences living in Africa, Europe and North America have given her a rich multicultural perspective.
                  </p>
                  <p>
                    Her passion lies in helping children discover the connections, wisdom and laws within nature and exploring how these can guide everyday choices, nurture positive character and deepen their connection with themselves and the world around them.
                  </p>
                  <p>
                    Tolu is the founder of Magnifying Children’s Horizons and creator of <span className="font-semibold text-[#23351a]">Character with Nature™</span>, a nature-inspired framework that helps children discover life’s timeless principles through the natural world.
                  </p>
                  <p className="text-xs sm:text-sm italic text-[#4a6934] bg-emerald-50 p-3 rounded-xl border border-emerald-900/10">
                    She is the author of stories from The Weaverton Series, and co-creator of Blossom in Nature.
                  </p>
                </div>
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
  );
}