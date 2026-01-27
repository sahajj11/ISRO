// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronRight, Zap } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center pt-20 bg-[#050505] overflow-hidden">
      
     
//       <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

//       <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
       
//         <div className="space-y-8">
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="inline-block"
//           >
//             <span className="text-[#F47216] font-mono text-sm tracking-[0.4em] uppercase border-b border-[#F47216]/30 pb-2">
//               National Space Agency
//             </span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6">
//               SERVICE OF <br /> 
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47216] to-orange-300">
//                 HUMANKIND.
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl font-medium text-gray-500 italic font-serif opacity-80">
//               "Manav Jaati Ki Seva Mein Antariksh Praudyogiki"
//             </p>
//           </motion.div>

//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="max-w-md text-gray-400 text-lg leading-relaxed"
//           >
//             To harness space technology for national development, while pursuing space science research and planetary exploration. 
//           </motion.p>

//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="flex items-center gap-6"
//           >
//             <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#F47216] hover:text-white transition-all flex items-center gap-2 group">
//               Explore 2026 Roadmap <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </motion.div>
//         </div>

       
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="relative flex items-center justify-center h-[500px]"
//         >
          
//           <div className="relative w-32 h-32 rounded-full bg-[#F47216] shadow-[0_0_100px_40px_rgba(244,114,22,0.3)] animate-pulse">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-600 to-yellow-300" />
//           </div>

         
//           <motion.div 
//             animate={{ rotate: 360 }}
//             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[240px] h-[240px] border border-white/10 rounded-full"
//           >
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
//           </motion.div>

       
//           <motion.div 
//             animate={{ rotate: -360 }}
//             transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
//             className="absolute w-[380px] h-[380px] border border-white/5 rounded-full"
//           >
//             <div className="absolute bottom-10 right-10 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)]" />
//           </motion.div>

       
//           <div className="absolute bottom-0 right-0 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-green-500/20 rounded-lg"><Zap className="w-4 h-4 text-green-400" /></div>
//               <div>
//                 <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Next Milestone</p>
//                 <p className="text-white font-bold">Gaganyaan G1 Flight</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Globe, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      
      {/* 1. CINEMATIC BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2000" // Replace with actual ISRO Rocket Launch/Gaganyaan high-res image
          alt="ISRO LVM3 Mission"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* THE FIX: Radial & Linear Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20">
        
        {/* LEFT COLUMN: Vision & Copy */}
        {/* <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F47216]/30 bg-[#F47216]/10 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#F47216] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#F47216] uppercase">2026 Flight Qualification</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6 drop-shadow-2xl">
              SERVICE OF <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47216] to-orange-400">
                HUMANKIND.
              </span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-300 max-w-lg leading-relaxed">
              Harnessing space technology for national development and planetary discovery. Experience the next generation of Indian spaceflight.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="bg-[#F47216] text-white px-10 py-4 rounded-2xl font-black hover:bg-white hover:text-black transition-all flex items-center gap-2 group shadow-[0_0_30px_rgba(244,114,22,0.3)]">
              EXPLORE MISSIONS <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <Play className="w-4 h-4 fill-white" /> MISSION CONTROL
            </button>
          </motion.div>
        </div> */}
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

        

        {/* RIGHT COLUMN: Minimal Data Overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="hidden lg:flex flex-col items-end gap-6"
        >
          {/* <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] w-64 space-y-4">
            <div className="flex justify-between items-center">
              <Shield className="w-4 h-4 text-[#0E88D3]" />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active Status</span>
            </div>
            <div>
              <p className="text-white font-black text-2xl uppercase italic tracking-tighter">LVM3-M4</p>
              <p className="text-xs text-[#F47216] font-bold">READY FOR GAGANYAAN</p>
            </div>
          </div> */}

          {/* <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] w-64 space-y-4 translate-x-[-40px]">
            <div className="flex justify-between items-center">
              <Globe className="w-4 h-4 text-[#F47216]" />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Orbit Tracker</span>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-white font-black text-3xl tracking-tighter">54</p>
              <p className="text-[10px] text-gray-500 font-bold mb-1 uppercase">Satellites Active</p>
            </div>
          </div> */}
        </motion.div>

      </div>

      

      {/* Subtle bottom vignette to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </section>
  );
};

export default Hero;