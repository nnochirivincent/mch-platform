import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import About from './components/About';
import CharacterwithNature from './components/CharacterwithNature';
import Books from './components/Books'; 

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#11240f]">
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/character-with-nature" element={<CharacterwithNature />} />
            <Route path="/books" element={<Books />} /> 
          </Routes>
        </main>

      </div>
    </Router>
  );
}