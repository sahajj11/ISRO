import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Rocket, Eye } from 'lucide-react';

const missions = [
  {
    title: "Aditya-L1",
    target: "The Sun",
    status: "Active - L1 Point",
    stats: "1.5M km from Earth",
    color: "from-orange-600/20",
    icon: Sun,
    desc: "India's first solar observatory studying the photosphere and corona."
  },
  {
    title: "Chandrayaan-3",
    target: "The Moon",
    status: "Mission Success",
    stats: "Lunar South Pole",
    color: "from-slate-400/20",
    icon: Moon,
    desc: "Historic soft landing in the polar region, exploring lunar volatiles."
  },
  {
    title: "Mangalyaan",
    target: "Mars",
    status: "Legacy Mission",
    stats: "Interplanetary Mastery",
    color: "from-red-600/20",
    icon: Rocket,
    desc: "India's first Mars orbiter, making ISRO the 4th agency to reach Mars."
  },
  {
    title: "Shukrayaan",
    target: "Venus",
    status: "Planned - 2028",
    stats: "Atmospheric Probe",
    color: "from-yellow-600/20",
    icon: Eye,
    desc: "Upcoming mission to study the surface and atmosphere of Venus."
  }
];

const PlanetaryMissions = () => {
  return (
    <section className="bg-[#050505] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
          >
            Deep Space <span className="text-[#F47216]">Exploration</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 max-w-xl font-medium">
            Pushing the boundaries of human knowledge across our solar system.
          </p>
        </div>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-8 backdrop-blur-xl group cursor-pointer hover:border-white/20 transition-all`}
            >
              {/* Radial Gradient Glow on Hover */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${mission.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-3 rounded-2xl bg-white/5 w-fit group-hover:bg-[#F47216]/10 transition-colors">
                  <mission.icon className="w-6 h-6 text-white group-hover:text-[#F47216] transition-colors" />
                </div>

                <div className="mb-auto">
                  <h3 className="text-2xl font-black text-white mb-1 tracking-tight uppercase italic">{mission.title}</h3>
                  <p className="text-[10px] font-mono text-[#F47216] uppercase tracking-[0.2em] font-bold mb-4">Target: {mission.target}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {mission.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-500 uppercase font-bold tracking-widest">Status</span>
                    <span className="text-white font-mono">{mission.status}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-gray-500 uppercase font-bold tracking-widest">Metrics</span>
                    <span className="text-white font-mono">{mission.stats}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanetaryMissions;