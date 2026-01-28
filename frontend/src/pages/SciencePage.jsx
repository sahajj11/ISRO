import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Sun, Waves, Database, Zap, ArrowRight, LineChart } from 'lucide-react';

const researchAreas = [
  {
    id: 'solar',
    title: 'Heliophysics',
    mission: 'Aditya-L1',
    description: 'Analyzing solar corona heating and solar wind acceleration from the L1 Lagrange point.',
    metric: 'Solar Flux: 1361 W/m²',
    icon: Sun,
    color: 'text-orange-500'
  },
  {
    id: 'lunar',
    title: 'Lunar Geology',
    mission: 'Chandrayaan-3/4',
    description: 'Spectroscopic analysis of the lunar regolith to detect hydroxyl and water-ice molecules.',
    metric: 'Surface Temp: -173°C to 127°C',
    icon: Microscope,
    color: 'text-blue-400'
  },
  {
    id: 'earth',
    title: 'Climate Science',
    mission: 'NISAR / EOS',
    description: 'Monitoring global forest biomass and ice-sheet velocity using L-band and S-band SAR.',
    metric: 'Deformation Accuracy: 1cm',
    icon: Waves,
    color: 'text-green-400'
  }
];

const SciencePage = () => {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-[#F47216] font-mono text-xs uppercase tracking-[0.3em] mb-6"
          >
            <Database className="w-4 h-4" /> Space Science Data Center
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic">DISCOVERY</span> HUB.
          </motion.h1>
        </header>

        {/* Live Ticker Component */}
        <div className="w-full bg-white/5 border-y border-white/10 py-4 mb-20 overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-8 text-[10px] font-mono text-gray-500 uppercase">
                <span className="text-green-500 font-bold">● Live</span> 
                <span>Aditya-L1: Stabilized Orbit</span>
                <span>NISAR: Calibration Phase</span>
                <span>Deep Space Network: Connected (IDSN-32)</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-[50px] group-hover:bg-[#F47216]/10 transition-colors`} />

              <area.icon className={`w-10 h-10 mb-10 transition-transform group-hover:scale-110 ${area.color}`} />
              
              <h3 className="text-3xl font-black text-white mb-2 uppercase italic">{area.title}</h3>
              <p className="text-xs font-bold text-[#F47216] mb-6 uppercase tracking-widest">{area.mission}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                {area.description}
              </p>

              <div className="pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Real-time Metric</span>
                  <span className="text-sm font-mono text-white">{area.metric}</span>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black text-white uppercase group-hover:text-[#F47216] transition-colors">
                  Access Raw Data <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Callout Section */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-[#F47216]/20 to-transparent border border-[#F47216]/20 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="space-y-4">
            <h4 className="text-2xl font-black text-white uppercase">ISRO Science Data Hub (ISSDC)</h4>
            <p className="text-gray-400 text-sm max-w-xl">
              ISSDC is the primary archive for all planetary and deep space missions. 
              We provide open-access data to the global scientific community.
            </p>
          </div>
          <button className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-[#F47216] hover:text-white transition-all whitespace-nowrap">
            VIEW REPOSITORIES
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default SciencePage;