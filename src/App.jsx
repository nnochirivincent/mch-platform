import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import About from './components/About';
import CharacterwithNature from './components/CharacterwithNature';

export default function App() {
  return (
    <Router>
      {/* Removed the global background image style from here */}
      <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#11240f]">
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<About  />} />
            <Route path="/CharacterwithNature" element={<CharacterwithNature />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}