import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Twitter, Youtube, Instagram, Github, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#F47216]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* 1. Brand & Newsletter */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#F47216] rounded-xl">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase">ISRO <span className="text-[#F47216]">2.0</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stay updated with India's journey to the stars. Join our mission briefing for the latest launch alerts and space science insights.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="groundcontrol@isro.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#F47216] transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-lg text-[10px] font-black uppercase hover:bg-[#F47216] hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['Missions', 'Fleet', 'Science', 'Gallery', 'Careers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[#F47216] transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-[#F47216] rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Official Resources */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="https://www.isro.gov.in/Tenders.html" target="_blank" className="hover:text-white flex items-center gap-2">Tenders <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://www.isro.gov.in/Careers.html" target="_blank" className="hover:text-white flex items-center gap-2">Careers <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="https://www.isro.gov.in/contact.html" target="_blank" className="hover:text-white flex items-center gap-2">Contact Us <ExternalLink className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* 4. Ground Control (Contact) */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Ground Control</h4>
            <ul className="space-y-6 text-sm text-gray-500">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#F47216] flex-shrink-0" />
                <span>ISRO HQ, Antariksh Bhavan, New BEL Road, Bengaluru-560 094</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#F47216]" />
                <span>+91 80 22172294</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#F47216]" />
                <span>isropr@isro.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] font-mono tracking-widest uppercase">
            © {currentYear} ISRO REDESIGN PROJECT • DEVELOPED BY SAHAJ RAJPUT
          </p>
          
          <div className="flex items-center gap-6">
            {[Twitter, Youtube, Instagram, Github].map((Icon, i) => (
              <motion.a 
                key={i} 
                href="#" 
                whileHover={{ y: -5, color: '#F47216' }}
                className="text-gray-500 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;