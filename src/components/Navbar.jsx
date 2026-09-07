import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Phone, Home, Info, FolderDown, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#fcfbf9]/95 backdrop-blur-md text-[#23461f] shadow-sm sticky top-0 z-50 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo / Brand Title with Image Standalone & Uncropped */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center shrink-0">
              {/* Replace 'logo.png' with your actual image filename placed in the public folder */}
              <img 
                src="/navbar-image.png" 
                alt="MCH Logo" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition duration-300"
              />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wide block leading-tight text-[#23461f]">MCH PLATFORM</span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase block">Magnifying Children's Horizons</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-7 font-medium text-sm text-gray-700">
            <Link to="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <Home size={15} className="text-emerald-700" /> Home
            </Link>

            <Link to="/books" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <BookOpen size={15} className="text-emerald-700" /> Our Books
            </Link>

            {/* Character With Nature Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-emerald-700 transition flex items-center gap-1.5 focus:outline-none py-2"
              >
                <Leaf size={15} className="text-emerald-700" /> Character with Nature® <ChevronDown size={13} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-2xl shadow-2xl py-3 border border-emerald-900/10">
                  <Link 
                    to="/cwn/about" 
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-800 text-xs font-semibold transition"
                  >
                    About MCH & Philosophy
                  </Link>
                  <Link 
                    to="/cwn/pathways" 
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-800 text-xs font-semibold transition"
                  >
                    Programme Pathways (3–15 yrs)
                  </Link>
                </div>
              )}
            </div>

            <Link to="/resources" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <FolderDown size={15} className="text-emerald-700" /> Resources
            </Link>

            <Link to="/about" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <Info size={15} className="text-emerald-700" /> About Founder
            </Link>

            <Link 
              to="/contact" 
              className="bg-[#23461f] hover:bg-[#1c3919] text-white font-semibold px-4 py-2 rounded-xl transition shadow-md flex items-center gap-1.5 text-xs uppercase tracking-wider"
            >
              <Phone size={14} /> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#23461f] focus:outline-none p-2 rounded-lg bg-emerald-50 border border-emerald-900/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#fcfbf9] text-[#23461f] px-6 pt-4 pb-6 space-y-3 border-t border-emerald-900/10 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">Home</Link>
          <Link to="/books" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">Our Books</Link>
          <Link to="/cwn/pathways" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">Character with Nature®</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">Resources</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">About Founder</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-3 mt-2 text-center bg-[#23461f] text-white rounded-xl font-semibold shadow">Contact</Link>
        </div>
      )}
    </nav>
  );
}