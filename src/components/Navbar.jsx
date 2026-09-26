import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Phone, Home, Info, FolderDown, Leaf, Users } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fcfbf9]/95 backdrop-blur-md text-[#23461f] shadow-sm sticky top-0 z-50 border-b border-emerald-900/10">
      <div className="max-w-[96rem] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between h-20 items-center gap-2 lg:gap-4">
          
          {/* Logo / Brand Title */}
          <Link to="/" className="flex items-center space-x-2.5 group shrink-0">
            <div className="flex items-center justify-center shrink-0">
              <img 
                src="/navbar-image.png" 
                alt="MCH Logo" 
                className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition duration-300"
              />
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight block leading-tight text-[#23461f]">
                Magnifying Children's Horizons
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Single Straight Line Alignment */}
          <div className="hidden xl:flex items-center space-x-5 font-semibold text-[13px] text-gray-700 whitespace-nowrap">
            <Link to="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <Home size={14} className="text-emerald-700 shrink-0" /> Home
            </Link>

            <Link to="/books" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <BookOpen size={14} className="text-emerald-700 shrink-0" /> Our Books
            </Link>

            <Link to="/character-with-nature" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <Leaf size={14} className="text-emerald-700 shrink-0" /> Character with Nature™
            </Link>

            <Link to="/collaboration" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <Users size={14} className="text-emerald-700 shrink-0" /> Collaborations
            </Link>

            <Link to="/resources" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <FolderDown size={14} className="text-emerald-700 shrink-0" /> Resources
            </Link>

            <Link to="/about" className="hover:text-emerald-700 transition flex items-center gap-1.5 py-2">
              <Info size={14} className="text-emerald-700 shrink-0" /> About Us
            </Link>

            <Link 
              to="/contact" 
              className="bg-[#23461f] hover:bg-[#1c3919] text-white font-semibold px-4 py-2 rounded-xl transition shadow-md flex items-center gap-1.5 text-xs uppercase tracking-wider ml-1"
            >
              <Phone size={13} /> Contact
            </Link>
          </div>

          {/* Tablet & Medium Screen Menu Links (Optimized Compact Straight Line) */}
          <div className="hidden md:flex xl:hidden items-center space-x-3 font-semibold text-[11px] text-gray-700 whitespace-nowrap">
            <Link to="/" className="hover:text-emerald-700 transition flex items-center gap-1 py-2">
              <Home size={13} className="text-emerald-700" /> Home
            </Link>

            <Link to="/books" className="hover:text-emerald-700 transition flex items-center gap-1 py-2">
              <BookOpen size={13} className="text-emerald-700" /> Books
            </Link>

            <Link to="/character-with-nature" className="hover:text-emerald-700 transition flex items-center gap-1 py-2">
              <Leaf size={13} className="text-emerald-700" /> CWN™
            </Link>

            <Link to="/collaboration" className="hover:text-emerald-700 transition flex items-center gap-1 py-2">
              <Users size={13} className="text-emerald-700" /> Collabs
            </Link>

            <Link to="/resources" className="hover:text-emerald-700 transition flex items-center gap-1 py-2">
              <FolderDown size={13} className="text-emerald-700" /> Resources
            </Link>

            <Link to="/about" className="hover:text-emerald-700 transition flex items-center gap-1 py-2">
              <Info size={13} className="text-emerald-700" /> About
            </Link>

            <Link 
              to="/contact" 
              className="bg-[#23461f] hover:bg-[#1c3919] text-white font-semibold px-3 py-1.5 rounded-lg transition shadow-sm flex items-center gap-1 text-[10px] uppercase tracking-wider"
            >
              <Phone size={12} /> Contact
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
          <Link to="/character-with-nature" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">Character with Nature™</Link>
          <Link to="/collaboration" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">Collaborations</Link>
          <Link to="/resources" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">Resources</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2.5 font-semibold border-b border-gray-100 hover:text-emerald-700">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-3 mt-2 text-center bg-[#23461f] text-white rounded-xl font-semibold shadow">Contact</Link>
        </div>
      )}
    </nav>
  );
}