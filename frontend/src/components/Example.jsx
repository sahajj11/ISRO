import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Database, Shield, Zap } from 'lucide-react';

const Example= () => {
  return (
    <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* 1. Background Visuals */}
      <div className="absolute inset-0 z-0">
        {/* Animated Radial Gradient for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F47216]/5 via-transparent to-transparent opacity-60" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* 2. Left Content: The "Hook" */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F47216]/30 bg-[#F47216]/5"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#F47216] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#F47216] uppercase">Future of Exploration</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
          >
            BEYOND THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">HORIZON.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-lg text-lg text-gray-400 font-medium leading-relaxed"
          >
            Experience ISRO’s next chapter. From Gaganyaan’s first uncrewed flight to the upcoming NVS-03 launch, we are redefining India’s footprint in the cosmos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-[#F47216] hover:text-white transition-all group">
              VIEW MISSIONS <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 font-bold text-white hover:bg-white/10 transition-all">
              <Play className="w-4 h-4 fill-white" /> WATCH LIVE
            </button>
          </motion.div>
        </div>

        {/* 3. Right Content: The "Functional Stats" Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Stats Card */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 space-y-8 shadow-2xl relative z-10">
            <div className="flex justify-between items-center border-b border-white/5 pb-6">
              <h3 className="text-xl font-bold text-white tracking-tight">Mission Metrics</h3>
              <Database className="w-5 h-5 text-gray-500" />
            </div>

            <div className="space-y-6">
              {/* Stat 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Shield className="w-4 h-4" /></div>
                  <span className="text-sm font-medium text-gray-400">Total Launches</span>
                </div>
                <span className="text-xl font-mono font-bold text-white">105</span>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F47216]/10 rounded-lg text-[#F47216]"><Zap className="w-4 h-4" /></div>
                  <span className="text-sm font-medium text-gray-400">Gaganyaan G1 Status</span>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-[#F47216]/20 text-[#F47216] rounded-md uppercase tracking-wider">Ready</span>
              </div>
            </div>

            {/* Bottom Graphic */}
            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">
                <span>Payload Analysis</span>
                <span>Active</span>
              </div>
              <div className="flex gap-1 h-8 items-end">
                {[40, 70, 45, 90, 65, 30, 80, 50, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-[#F47216] to-[#F47216]/30 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating Element: Rocket ID Tag */}
          <div className="absolute -top-6 -right-6 bg-[#0E88D3] px-4 py-2 rounded-xl border border-white/20 shadow-xl z-20 -rotate-3">
            <span className="text-[10px] font-black text-white uppercase italic">LVM3 - HUMAN RATED</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Example;