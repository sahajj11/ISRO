import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Rocket, Info, ChevronRight } from 'lucide-react';

const missionData = [
  {
    id: 1,
    name: "PSLV-C62 / EOS-N1",
    date: "JAN 12, 2026",
    category: "Recent",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200", // Replace with actual PSLV-C62 launch photo
    description: "64th flight of PSLV, successfully deploying EOS-N1 and 15 co-passenger satellites.",
    tag: "Launch Success"
  },
  {
    id: 2,
    name: "Gaganyaan-4 (Crewed)",
    date: "Q4 2026",
    category: "Upcoming",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200", // Human spaceflight concept
    description: "The historic first crewed mission taking Indian astronauts to Low Earth Orbit.",
    tag: "Priority"
  },
  {
    id: 3,
    name: "NISAR",
    date: "JUL 30, 2025",
    category: "Recent",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", // Earth Observation
    description: "Joint NASA-ISRO mission providing all-weather, day-night imaging of Earth.",
    tag: "Dual-Frequency Radar"
  },
  {
    id: 4,
    name: "Chandrayaan-3",
    date: "AUG 23, 2023",
    category: "Legacy",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=1200", // Lunar Surface
    description: "Historic soft landing on the Lunar South Pole, establishing India as a lunar power.",
    tag: "Historic"
  }
];

const MissionsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredMissions = filter === 'All' 
    ? missionData 
    : missionData.filter(m => m.category === filter);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6"
          >
            MISSION <span className="text-[#F47216]">LOGS.</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Filter Pills */}
            <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              {['All', 'Upcoming', 'Recent', 'Legacy'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                    filter === cat ? "bg-[#F47216] text-white shadow-lg" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredMissions.map((mission) => (
              <motion.div
                key={mission.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={mission.image} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={mission.name}
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#F47216]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                      {mission.tag}
                    </span>
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                      <Rocket className="w-5 h-5 text-[#F47216]" />
                    </div>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#F47216] font-mono text-sm mb-2">{mission.date}</p>
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tight uppercase">{mission.name}</h3>
                    <p className="text-gray-300 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {mission.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all delay-100">
                       <button className="flex items-center gap-2 text-white font-bold text-sm">
                         FULL DEBRIEF <ChevronRight className="w-4 h-4 text-[#F47216]" />
                       </button>
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

export default MissionsPage;