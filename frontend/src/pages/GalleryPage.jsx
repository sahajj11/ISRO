import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Camera, Filter, X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1517976487492-5750f3195933", title: "LVM3 Ignition", category: "Launches", size: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", title: "Earth from Orbit", category: "Space", size: "wide" },
  { id: 3, src: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9", title: "Lunar Horizon", category: "Space", size: "square" },
  { id: 4, src: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2", title: "PSLV Preparation", category: "Infrastructure", size: "tall" },
  { id: 5, src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", title: "Gaganyaan Module", category: "Launches", size: "square" },
  { id: 6, src: "https://images.unsplash.com/photo-1614324901300-24754721469e", title: "Vikas Engine Test", category: "Infrastructure", size: "wide" },
];

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#F47216] font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
              <Camera className="w-3 h-3" /> Image Archives 2026
            </div>
            <h1 className="text-6xl font-black text-white tracking-tighter uppercase">Visual <span className="text-gray-500">History.</span></h1>
          </div>

          <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            {['All', 'Launches', 'Space', 'Infrastructure'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat ? "bg-[#F47216] text-white" : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative group cursor-none overflow-hidden rounded-3xl border border-white/5"
                onClick={() => setSelectedImg(img)}
              >
                <img 
                  src={`${img.src}?auto=format&fit=crop&q=80&w=800`} 
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-[#F47216] font-mono text-[10px] uppercase tracking-widest mb-1">{img.category}</p>
                  <h3 className="text-white font-black uppercase italic text-xl tracking-tight">{img.title}</h3>
                  <div className="mt-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-20"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors">
                <X size={40} />
              </button>
              <motion.img 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                src={selectedImg.src} 
                className="max-w-full max-h-full rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default GalleryPage;