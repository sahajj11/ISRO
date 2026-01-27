import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Satellite, Globe, Zap, ArrowUpRight } from 'lucide-react';

const fleetData = {
  Launchers: [
    { name: 'LVM3-M6', tag: 'Heavy Lift', stats: '8,000kg to LEO', img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2000' },
    { name: 'PSLV-C62', tag: 'Workhorse', stats: '64 Successes', img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2000' },
    { name: 'SSLV-D3', tag: 'Rapid Response', stats: 'Small Sat Expert', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000' }
  ],
  Explorers: [
    { name: 'Aditya-L1', tag: 'Solar', stats: 'L1 Point Orbit', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000' },
    { name: 'Chandrayaan-4', tag: 'Lunar', stats: 'Sample Return', img: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=2000' },
    { name: 'Mangalyaan', tag: 'Mars', stats: 'Interplanetary', img: 'https://images.unsplash.com/photo-1614724723126-a4445e058a0a?q=80&w=2000' }
  ],
  Experimental: [
    { name: 'RLV-LEX', tag: 'Reusable', stats: 'Auto Landing', img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2000' },
    { name: 'Gaganyaan-G1', tag: 'Humanoid', stats: 'Test Flight 2026', img: 'https://images.unsplash.com/photo-1614726339050-62213e977ef3?q=80&w=2000' }
  ]
};

const FleetPage = () => {
  const [activeTab, setActiveTab] = useState('Launchers');

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h1 className="text-6xl font-black text-white tracking-tighter">THE <span className="text-[#F47216]">ASSETS.</span></h1>
            <p className="text-gray-500 mt-4 max-w-md">Our active fleet of launchers, interplanetary probes, and experimental technology demonstrators.</p>
          </div>
          
          {/* Custom Tabs */}
          <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl">
            {Object.keys(fleetData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab ? "bg-[#F47216] text-white shadow-lg" : "text-gray-500 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {fleetData[activeTab].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10"
              >
                {/* Background Image */}
                <img 
                  src={item.img} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={item.name}
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#F47216]/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                      {item.tag}
                    </span>
                    <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-white mb-2 uppercase italic">{item.name}</h3>
                    <div className="flex items-center gap-2 text-[#F47216] font-mono text-xs">
                       <Zap className="w-3 h-3" />
                       <span className="uppercase tracking-widest">{item.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default FleetPage;