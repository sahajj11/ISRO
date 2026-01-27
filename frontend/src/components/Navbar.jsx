import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X, ChevronRight, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const navLinks = [
    { name: 'Missions', path: '/missions' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Science', path: '/science' },
    { name: 'Gallery', path: '/gallery' },
  ];

  // Effect to handle background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate=useNavigate()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 py-4 md:px-10 transition-all duration-300">
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
        isScrolled 
        ? "bg-[#050505]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]" 
        : "bg-transparent border border-transparent"
      }`}>
        
        {/* Brand Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="p-2 bg-[#F47216] rounded-xl transform group-hover:rotate-[15deg] transition-transform duration-300">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 bg-[#F47216] blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-white leading-none">ISRO</span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#F47216] uppercase">Space Agency</span>
          </div>
        </div>

        {/* Desktop Links - Minimalist approach */}
        {/* <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.name}>
            <button 
              key={item} 
             
              onClick={()=>navigate(item.path)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F47216] transition-all group-hover:w-full" />
            </button>
            </li>
          ))}
        </ul> */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {navLinks.map((item) => (
            <li key={item.name}>
              <button 
                onClick={() => navigate(item.path)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F47216] transition-all group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Live Mission Status (Functional UI) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </div>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">PSLV-C62 Live</span>
          </div>

          <button className="bg-white text-black text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#F47216] hover:text-white transition-all active:scale-95">
            Launch Center
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 md:hidden animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6">
            {['Missions', 'Fleet', 'Science', 'Gallery'].map((item) => (
              <a key={item} href="#" className="text-xl font-bold text-white flex justify-between items-center">
                {item} <ChevronRight className="text-[#F47216]" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;