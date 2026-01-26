import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Rocket, CalendarDays, ChevronRight } from 'lucide-react';
import gaganyan from "../assets/gaganyan.png"

const NextFrontier = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
     
      <img 
        src={gaganyan}
        alt="Gaganyaan G1 Mission preparing for launch"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
   
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />

      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#F47216]/10 border border-[#F47216]/30 text-[#F47216] text-sm font-bold uppercase tracking-widest">
            <Clock className="w-4 h-4" /> Next Frontier
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Gaganyaan G1: <br className="hidden md:block" /> India's Human Spaceflight Mission
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            The first uncrewed flight test of the Gaganyaan mission, carrying the 'Vyommitra' humanoid. A critical step towards India's crewed spaceflight program in 2027.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-gray-300">
              <CalendarDays className="w-5 h-5 text-[#0E88D3]" />
              <span className="font-bold">Target: March 2026</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Rocket className="w-5 h-5 text-[#F47216]" />
              <span className="font-bold">Vehicle: Human-Rated LVM3</span>
            </div>
          </div>

          <button className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F47216] hover:text-white transition-all group">
            Learn More About Gaganyaan <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NextFrontier;

