import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Info, ChevronRight } from 'lucide-react';

const fleet = [
  {
    id: 'sslv',
    name: 'SSLV',
    fullName: 'Small Satellite Launch Vehicle',
    height: '34m',
    payload: '500kg',
    launches: '4',
    color: '#0E88D3',
    desc: 'The rapid-response launcher for the new space age.'
  },
  {
    id: 'pslv',
    name: 'PSLV',
    fullName: 'Polar Satellite Launch Vehicle',
    height: '44m',
    payload: '1,750kg',
    launches: '64',
    color: '#F47216',
    desc: 'The trusted workhorse of ISRO, freshly back from PSLV-C62.'
  },
  {
    id: 'gslv',
    name: 'GSLV',
    fullName: 'Geosynchronous Satellite Launch Vehicle',
    height: '51m',
    payload: '2,500kg',
    launches: '16',
    color: '#A855F7',
    desc: 'Mastering the cryogenic frontier for heavy communication.'
  },
  {
    id: 'lvm3',
    name: 'LVM3',
    fullName: 'Launch Vehicle Mark 3',
    height: '43.5m',
    payload: '8,000kg',
    launches: '8',
    color: '#EF4444',
    desc: 'The Human-Rated powerhouse for Gaganyaan 2026.'
  }
];

const FleetCarousel = () => {
  return (
    <section className="bg-[#050505] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-5xl font-black text-white tracking-tighter mb-4">THE FLEET</h2>
        <p className="text-gray-500 max-w-lg">From small-sat rapid deployment to heavy-lift lunar trajectories.</p>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="flex gap-8 px-6 md:px-[10%] overflow-x-auto no-scrollbar pb-20">
        {fleet.map((rocket, index) => (
          <motion.div
            key={rocket.id}
            whileHover={{ y: -20 }}
            className="flex-shrink-0 w-[350px] group relative"
          >
            {/* Parallax Background Text */}
            <div className="absolute -top-10 -left-5 text-9xl font-black text-white/[0.03] select-none group-hover:text-white/[0.07] transition-colors uppercase italic">
              {rocket.id}
            </div>

            {/* Main Rocket Card */}
            <div className="relative z-10 bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-sm overflow-hidden group-hover:border-white/20 transition-all">
              
              {/* Glow Effect on Hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-[80px]" 
                style={{ backgroundColor: rocket.color }}
              />

              <div className="relative z-20">
                <div className="flex justify-between items-start mb-12">
                  <div className={`p-3 rounded-2xl bg-white/5 text-white group-hover:scale-110 transition-transform`}>
                    <Rocket className="w-6 h-6" style={{ color: rocket.color }} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">Status: Active</span>
                </div>

                <h3 className="text-4xl font-black text-white mb-1 tracking-tighter">{rocket.name}</h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">{rocket.fullName}</p>
                
                <p className="text-gray-400 text-sm mb-10 leading-relaxed min-h-[60px]">
                  {rocket.desc}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Payload LEO</p>
                    <p className="text-xl font-black text-white">{rocket.payload}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Launches</p>
                    <p className="text-xl font-black text-white">{rocket.launches}</p>
                  </div>
                </div>

                <button className="mt-10 w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white text-black transition-all group/btn">
                  Technical Specs <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FleetCarousel;