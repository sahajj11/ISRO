import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Rocket, Globe, Database } from 'lucide-react';

const MissionBento = () => {
  return (
    <section className="bg-[#050505] py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Mission Control</h2>
          <div className="h-1 w-20 bg-[#F47216] rounded-full" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Main Card: Gaganyaan (Big) */}
          <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-gradient-to-br from-[#F47216]/20 to-transparent border border-white/10 p-8 flex flex-col justify-between group cursor-pointer hover:border-[#F47216]/50 transition-all">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-[#F47216] rounded-2xl"><Rocket className="text-white w-6 h-6" /></div>
              <span className="text-[10px] font-bold text-[#F47216] tracking-widest uppercase bg-[#F47216]/10 px-3 py-1 rounded-full border border-[#F47216]/20">Priority Mission</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight">GAGANYAAN G1</h3>
              <p className="text-gray-400 text-sm max-w-xs mb-4">India's first uncrewed flight test for the human spaceflight program. Carrying 'Vyommitra' humanoid.</p>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} className="h-full bg-[#F47216]" />
              </div>
              <p className="text-[10px] text-gray-500 mt-2 font-mono uppercase">System Readiness: 85%</p>
            </div>
          </div>

          {/* Card 2: Live Satellites */}
          <div className="md:col-span-2 rounded-[2rem] bg-white/5 border border-white/10 p-6 flex items-center justify-between hover:bg-white/[0.08] transition-all">
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Active Satellites</p>
              <h4 className="text-5xl font-black text-white">58</h4>
            </div>
            <div className="relative h-20 w-20 flex items-center justify-center">
               <Globe className="text-[#0E88D3] w-12 h-12 animate-pulse" />
               <div className="absolute inset-0 border-2 border-dashed border-[#0E88D3]/20 rounded-full animate-[spin_10s_linear_infinite]" />
            </div>
          </div>

          {/* Card 3: Recent Launch */}
          <div className="rounded-[2rem] bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-green-500/30 transition-all">
            <Activity className="text-green-400 w-6 h-6" />
            <div>
              <p className="text-white font-bold text-lg leading-tight">PSLV-C62</p>
              <p className="text-gray-500 text-[10px] font-mono uppercase">Successful Deployment</p>
            </div>
          </div>

          {/* Card 4: Payload Data */}
          <div className="rounded-[2rem] bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all">
            <Database className="text-blue-400 w-6 h-6" />
            <div>
              <p className="text-white font-bold text-lg leading-tight">2.5TB</p>
              <p className="text-gray-500 text-[10px] font-mono uppercase">Daily Downlink Data</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionBento;