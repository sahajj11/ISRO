
import FleetCarousel from "./components/FleetCarousel";
import Footer from "./components/Footer";
import GlobalImpact from "./components/GlobalImpact";
import Hero from "./components/Hero";
import MissionBento from "./components/MissionBento";
import Navbar from "./components/Navbar";
import NextFrontier from "./components/NextFrontier";
import PlanetaryMissions from "./components/PlaneteryMissions";
import SatelliteRadar from "./components/SatelliteRadar";
import Home from "./pages/Home";
import MissionsPage from "./pages/MissionsPage";





export default function App() {
  return (
    // Base dark background with a custom selection color
    <div className="min-h-screen bg-[#050505] text-[#e2e8f0] font-sans selection:bg-[#F47216]/30">
      
   <MissionsPage />
    
   
    </div>
  );
}