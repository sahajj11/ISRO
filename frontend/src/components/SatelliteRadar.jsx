import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Crosshair, Zap, Navigation } from 'lucide-react';

const SatelliteRadar = () => {
  return (
    <section className="bg-[#050505] py-24 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Interactive Visual */}
          <div className="relative aspect-square max-w-[500px] mx-auto">
            {/* Radar Circles */}
            <div className="absolute inset-0 border border-white/5 rounded-full" />
            <div className="absolute inset-[15%] border border-white/5 rounded-full" />
            <div className="absolute inset-[30%] border border-white/10 rounded-full" />
            
            {/* Rotating Radar Line */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F47216]/20 rounded-full"
              style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 0%)' }}
            />

            {/* Satellite "Pings" */}
            {[
              { top: '20%', left: '70%', name: 'NavIC-1S' },
              { top: '60%', left: '30%', name: 'EOS-08' },
              { top: '40%', left: '50%', name: 'Cartosat-3' },
            ].map((sat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="absolute flex flex-col items-center"
                style={{ top: sat.top, left: sat.left }}
              >
                <div className="w-2 h-2 bg-[#F47216] rounded-full shadow-[0_0_10px_#F47216]" />
                <span className="text-[8px] font-mono text-[#F47216] mt-2 tracking-widest uppercase">{sat.name}</span>
              </motion.div>
            ))}

            {/* Center Globe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-16 h-16 text-white/10" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E88D3]/10 border border-[#0E88D3]/30">
              <Navigation className="w-3 h-3 text-[#0E88D3]" />
              <span className="text-[10px] font-bold text-[#0E88D3] uppercase tracking-widest text-white">Real-time Telemetry</span>
            </div>

            <h2 className="text-5xl font-black text-white leading-tight tracking-tighter">
              ORBITAL <br /> <span className="text-[#F47216]">SURVEILLANCE.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Monitoring over 50+ active assets in Low Earth Orbit (LEO) and Geostationary Orbit. 
              Our ground stations across India provide sub-millisecond data synchronization.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <Crosshair className="w-5 h-5 text-[#F47216] mb-3" />
                <p className="text-white font-bold">NavIC</p>
                <p className="text-xs text-gray-500">Regional Navigation</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <Zap className="w-5 h-5 text-[#0E88D3] mb-3" />
                <p className="text-white font-bold">GSAT</p>
                <p className="text-xs text-gray-500">Comm Networks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SatelliteRadar;