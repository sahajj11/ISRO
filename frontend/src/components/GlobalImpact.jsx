import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';
import { Globe2, Rocket, Users, ShieldCheck } from 'lucide-react';

const StatItem = ({ icon: Icon, value, label, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="group p-8 border-r border-b border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-colors">
      <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-[#F47216] group-hover:scale-110 group-hover:bg-[#F47216]/10 transition-all">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <span className="text-5xl font-black text-white tracking-tighter mb-2">
          {displayValue.toLocaleString()}{suffix}
        </span>
        <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">
          {label}
        </span>
      </div>
    </div>
  );
};

const GlobalImpact = () => {
  return (
    <section className="bg-[#050505] py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight uppercase">
              Global Impact <span className="text-[#F47216]">Report</span>
            </h2>
            <p className="text-gray-400 font-medium">
              Beyond exploration, ISRO provides critical infrastructure and education to 
              billions, fostering a new era of space-tech accessibility.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#F47216] font-mono text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> Data Verified Jan 2026
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/5 rounded-3xl overflow-hidden">
          <StatItem 
            icon={Rocket} 
            value={105} 
            label="Total Launches" 
          />
          <StatItem 
            icon={Globe2} 
            value={424} 
            label="Intl. Satellites" 
          />
          <StatItem 
            icon={ShieldCheck} 
            value={120} 
            label="Spacecraft Missions" 
          />
          <StatItem 
            icon={Users} 
            value={10} 
            label="Students Reached" 
            suffix="M+"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;