import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);
    setIsError(false);

    // Automatically detect if running locally or in production on Vercel/Render
    const BACKEND_URL =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000'
        : 'https://mch-platform.onrender.com';

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageStatus(
          data.message || 'Thank you! Your message has been sent successfully.'
        );
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          topic: '',
          message: ''
        });
      } else {
        setIsError(true);
        setMessageStatus(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setIsError(true);
      setMessageStatus('Network error. Check if your backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#0d1709] selection:bg-[#355322] selection:text-white flex flex-col justify-between overflow-x-hidden relative font-sans">
      
      {/* BACKGROUND WATERCOLOR ARTWORK & ACCENTS */}
      <div className="absolute top-24 left-0 pointer-events-none z-0 max-w-[200px] sm:max-w-xs opacity-80">
        <img src="/leaf-accent.png" alt="" className="w-full h-auto object-contain" />
      </div>
      
      <div className="absolute bottom-0 right-0 pointer-events-none z-0 w-full lg:w-[65%] opacity-90 overflow-hidden">
        <img src="/forest-footer-bg.png" alt="" className="w-full h-auto object-cover" />
      </div>

      <div className="relative z-10">
        {/* MAIN CONTACT CONTENT */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-20 sm:pb-24">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0d1709] tracking-tight">
              Get in Touch
            </h1>
            
            <div className="flex items-center justify-center space-x-2 text-[#2a431a]">
              <div className="h-[2px] w-10 sm:w-12 bg-[#2a431a]/60"></div>
              <span className="text-base">🍃</span>
              <div className="h-[2px] w-10 sm:w-12 bg-[#2a431a]/60"></div>
            </div>

            <p className="font-serif italic text-lg sm:text-xl text-[#1a2b12] font-semibold">
              We’d love to hear from you.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-[#1e2f16] font-medium leading-relaxed pt-1">
              Whether you have a question about our books, Character with Nature™, resources, collaborations or something else, please get in touch.
            </p>
          </div>

          {/* CONTACT FORM */}
          <form onSubmit={handleSubmit} className="mt-8 sm:mt-12 space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="First Name *" 
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-[#c5bca3] rounded-md px-4 py-3.5 text-base font-semibold text-[#0d1709] placeholder-[#4a5444] focus:outline-none focus:border-[#2a431a] shadow-sm transition"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="lastName" 
                  placeholder="Last Name *" 
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white border-2 border-[#c5bca3] rounded-md px-4 py-3.5 text-base font-semibold text-[#0d1709] placeholder-[#4a5444] focus:outline-none focus:border-[#2a431a] shadow-sm transition"
                />
              </div>
            </div>

            <div>
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address *" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white border-2 border-[#c5bca3] rounded-md px-4 py-3.5 text-base font-semibold text-[#0d1709] placeholder-[#4a5444] focus:outline-none focus:border-[#2a431a] shadow-sm transition"
              />
            </div>

            <div>
              <select 
                name="topic" 
                required
                value={formData.topic}
                onChange={handleChange}
                className="w-full bg-white border-2 border-[#c5bca3] rounded-md px-4 py-3.5 text-base font-semibold text-[#1e2f16] focus:outline-none focus:border-[#2a431a] shadow-sm transition appearance-none cursor-pointer"
              >
                <option value="" disabled>I'm contacting you about: *</option>
                <option value="books">Our Books</option>
                <option value="cwn">Character with Nature™</option>
                <option value="resources">Resources</option>
                <option value="collaborations">Collaborations</option>
                <option value="other">Something Else</option>
              </select>
            </div>

            <div>
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Your Message *" 
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white border-2 border-[#c5bca3] rounded-md px-4 py-3.5 text-base font-semibold text-[#0d1709] placeholder-[#4a5444] focus:outline-none focus:border-[#2a431a] shadow-sm transition resize-y"
              ></textarea>
            </div>

            {messageStatus && (
              <p
                className={`text-sm font-semibold text-center mt-2 ${
                  isError ? 'text-red-600' : 'text-[#355322]'
                }`}
              >
                {messageStatus}
              </p>
            )}

            <div className="pt-3 text-center">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#355322] hover:bg-[#28421c] text-white font-sans text-xs uppercase tracking-[0.2em] font-extrabold py-4 rounded-md shadow-md transition-all duration-200 disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
              </button>
            </div>

          </form>

          {/* ALTERNATE CONTACT & SOCIALS */}
          <div className="mt-12 sm:mt-14 text-center space-y-4">
            <div className="inline-flex items-center space-x-2 text-sm sm:text-base text-[#1e2f16] font-bold">
              <Mail size={18} className="text-[#2a431a] shrink-0" />
              <span>Or email us directly at <a href="mailto:info@mch-platform.com" className="underline font-extrabold hover:text-[#2a431a]">info@mch-platform.com</a></span>
            </div>

            <div className="flex justify-center space-x-4 pt-2">
              <a href="https://www.instagram.com/magnifyingchildrenshorizons/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#355322] text-white flex items-center justify-center hover:bg-[#28421c] transition shadow-sm" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/magnifyingchildrenshorizons" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#355322] text-white flex items-center justify-center hover:bg-[#28421c] transition shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.7V8z"/></svg>
              </a>
            </div>
          </div>

        </main>
      </div>

      {/* FOOTER */}
      <div className="pt-6 border-t-2 border-[#23351a]/20 bg-[#f5f1e8] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 px-4 sm:px-6 lg:px-10 max-w-[90rem] mx-auto">
            
          {/* Linked Logo and Title Section */}
          <Link to="/" className="flex items-center space-x-3 text-center lg:text-left group shrink-0">
            <div className="flex items-center justify-center shrink-0">
              <img 
                src="/navbar-image.png" 
                alt="MCH Logo" 
                className="h-10 w-auto object-contain group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-base text-[#0d1709] leading-none group-hover:underline">Magnifying Children's Horizons</span>
              <span className="text-[11px] text-[#1e2f16] font-extrabold uppercase tracking-widest mt-1">
                NATURE • CHARACTER • A BRIGHTER TOMORROW
              </span>
            </div>
          </Link>
    
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs uppercase tracking-wider font-extrabold text-[#1a2b12]">
            <Link to="/" className="hover:text-[#0d1709] transition">Home</Link>
            <Link to="/books" className="hover:text-[#0d1709] transition">Books</Link>
            <Link to="/cwn/pathways" className="hover:text-[#0d1709] transition">Character with Nature™</Link>
            <Link to="/about" className="hover:text-[#0d1709] transition">About Us</Link>
            <Link to="/collaborations" className="hover:text-[#0d1709] transition">Collaborations</Link>
            <Link to="/contact" className="hover:text-[#0d1709] transition">Contact</Link>
          </div>
    
          <div className="flex items-center space-x-2.5 shrink-0">
            <a 
              href="https://www.instagram.com/magnifyingchildrenshorizons/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="w-9 h-9 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
              className="w-9 h-9 rounded-full bg-[#23351a] text-white flex items-center justify-center text-xs shadow hover:bg-[#1a2813] transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
          </div>
    
        </div>
    
        <div className="pt-4 pb-6 px-4 sm:px-6 lg:px-10 border-t border-[#23351a]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1e2f16] font-bold gap-2 max-w-[90rem] mx-auto text-center sm:text-left">
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