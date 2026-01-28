
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FleetCarousel from "./components/FleetCarousel";
import Footer from "./components/Footer";
import GlobalImpact from "./components/GlobalImpact";
import Hero from "./components/Hero";
import MissionBento from "./components/MissionBento";
import Navbar from "./components/Navbar";
import NextFrontier from "./components/NextFrontier";
import PlanetaryMissions from "./components/PlaneteryMissions";
import SatelliteRadar from "./components/SatelliteRadar";
import FleetPage from "./pages/FleetPage";
import Home from "./pages/Home";
import MissionsPage from "./pages/MissionsPage";
import SciencePage from "./pages/SciencePage";
import GalleryPage from "./pages/GalleryPage";
import SatelliteHero from "./components/FloatingSatellite";

import SolarModel from "./components/SolarModel";





export default function App() {
  return (
    // Base dark background with a custom selection color
    <BrowserRouter>

    <div className="min-h-screen bg-[#050505] text-[#e2e8f0] font-sans selection:bg-[#F47216]/30">
      

      <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/missions' element={<MissionsPage />} />
            <Route path='/fleet' element={<FleetPage />} />
            <Route path='/science' element={<SciencePage />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/s' element={<SolarModel />} />
           

            {/* Add more routes here as you build them */}
          </Routes>
    
   
    </div>
    </BrowserRouter>
    
  );
}