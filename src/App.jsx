import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import About from './components/About';
import CharacterwithNature from './components/CharacterwithNature';
import Books from './components/Books'; 
import Collaboration from './components/Collaboration';
import Resources from './components/Resources';
import Contact from './components/Contact';
import CwnComingSoon from './components/CwnComingSoon'; 

export default function App() {
  return (
    <Router>
      <Routes>
        
        {/* ========================================================== */}
        {/* STANDALONE PAGES (No Navbar, Full Screen, Independent)     */}
        {/* ========================================================== */}
        <Route path="/cwn/laws" element={<CwnComingSoon />} />
        <Route path="/cwn/programmes" element={<CwnComingSoon />} />

        {/* ========================================================== */}
        {/* MAIN WEBSITE PAGES (Includes Navbar & Layout Wrapper)      */}
        {/* ========================================================== */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#11240f]">
              <Navbar />
              <main className="flex-grow relative z-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/character-with-nature" element={<CharacterwithNature />} />
                  <Route path="/books" element={<Books />} /> 
                  <Route path="/collaboration" element={<Collaboration />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
            </div>
          }
        />

      </Routes>
    </Router>
  );
}