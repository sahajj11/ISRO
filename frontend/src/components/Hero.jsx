import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#050505] overflow-hidden">
      
      {/* Background Star-field Effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT COLUMN: Vision & Motto */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block"
          >
            <span className="text-[#F47216] font-mono text-sm tracking-[0.4em] uppercase border-b border-[#F47216]/30 pb-2">
              National Space Agency
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6">
              SERVICE OF <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47216] to-orange-300">
                HUMANKIND.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-500 italic font-serif opacity-80">
              "Manav Jaati Ki Seva Mein Antariksh Praudyogiki"
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md text-gray-400 text-lg leading-relaxed"
          >
            To harness space technology for national development, while pursuing space science research and planetary exploration. 
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#F47216] hover:text-white transition-all flex items-center gap-2 group">
              Explore 2026 Roadmap <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Solar Glow Structure */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex items-center justify-center h-[500px]"
        >
          {/* THE SUN (Core Glow) */}
          <div className="relative w-32 h-32 rounded-full bg-[#F47216] shadow-[0_0_100px_40px_rgba(244,114,22,0.3)] animate-pulse">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600 to-yellow-300" />
          </div>

          {/* ORBIT 1 (Interactive) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[240px] h-[240px] border border-white/10 rounded-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
          </motion.div>

          {/* ORBIT 2 (Interactive) */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px] border border-white/5 rounded-full"
          >
            <div className="absolute bottom-10 right-10 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
          </motion.div>

          {/* Floating Mission Tag on the Right */}
          <div className="absolute bottom-0 right-0 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg"><Zap className="w-4 h-4 text-green-400" /></div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Next Milestone</p>
                <p className="text-white font-bold">Gaganyaan G1 Flight</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;