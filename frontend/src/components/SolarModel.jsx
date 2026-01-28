// import React, { useRef, useMemo } from 'react';

// import { Canvas, useFrame } from '@react-three/fiber';
// import { Sphere, OrbitControls, Stars, Float, Html } from '@react-three/drei';
// import * as THREE from 'three';


// const Satellite = ({ radius, speed, color, name }) => {
//   const satRef = useRef();

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * speed;
//     satRef.current.position.x = Math.cos(t) * radius;
//     satRef.current.position.z = Math.sin(t) * radius;
   
//     satRef.current.position.y = Math.sin(t * 0.5) * (radius * 0.2);
//   });

//   return (
//     <group ref={satRef}>
//       <mesh>
//         <boxGeometry args={[0.2, 0.2, 0.2]} />
//         <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
//       </mesh>
//       <Html distanceFactor={8} position={[0, 0.4, 0]}>
//         <div className="whitespace-nowrap">
//           <span className="text-[6px] font-mono text-white/50 uppercase tracking-tighter bg-black/40 px-1 py-0.5 rounded">
//             {name}
//           </span>
//         </div>
//       </Html>
//     </group>
//   );
// };

// const Planet = ({ position, size, color, name, missionName, satellites = [] }) => {
//   const ref = useRef();
  
//   useFrame(() => {
//     ref.current.rotation.y += 0.005;
//   });

//   return (
//     <group position={position}>
//       <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
//         <mesh ref={ref}>
//           <sphereGeometry args={[size, 32, 32]} />
//           <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
          
//           <Html distanceFactor={10} position={[0, size + 0.5, 0]}>
//             <div className="flex flex-col items-center group pointer-events-none">
//               <div className="w-2 h-2 bg-[#F47216] rounded-full animate-ping mb-2" />
//               <span className="text-white text-[10px] font-black tracking-widest uppercase">{name}</span>
//             </div>
//           </Html>
//         </mesh>
//       </Float>

      
//       {satellites.map((sat, i) => (
//         <Satellite 
//           key={i} 
//           radius={size + sat.dist} 
//           speed={sat.speed} 
//           color={sat.color} 
//           name={sat.name} 
//         />
//       ))}

     
//       {satellites.map((sat, i) => (
//         <mesh key={`ring-${i}`} rotation={[Math.PI / 2, 0, 0]}>
//           <ringGeometry args={[size + sat.dist, (size + sat.dist) + 0.02, 64]} />
//           <meshBasicMaterial color="white" opacity={0.05} transparent />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// const SolarModel = () => {
//   return (
//     <div className="h-[700px] w-full bg-[#050505] rounded-[3rem] overflow-hidden border border-white/5 relative">
//       <Canvas camera={{ position: [0, 15, 30], fov: 45 }}>
//         <color attach="background" args={['#050505']} />
//         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
//         <ambientLight intensity={0.3} />
//         <pointLight position={[10, 10, 10]} intensity={1.5} />

       
//         <Planet 
//           position={[0, 0, 0]} 
//           size={2.5} 
//           color="#0E88D3" 
//           name="Earth" 
//           satellites={[
//             { name: "EOS-08", dist: 1.5, speed: 0.8, color: "#F47216" },
//             { name: "NavIC", dist: 2.5, speed: 0.4, color: "#0E88D3" }
//           ]} 
//         />
        
      
//         <Planet 
//           position={[10, 3, -5]} 
//           size={0.8} 
//           color="#94a3b8" 
//           name="Moon" 
//           satellites={[
//             { name: "CH-3 PM", dist: 0.8, speed: 1.2, color: "#FFFFFF" }
//           ]} 
//         />
        
     
//         <Planet 
//           position={[-18, -2, -12]} 
//           size={1.5} 
//           color="#ef4444" 
//           name="Mars" 
//           satellites={[
//             { name: "Mangalyaan", dist: 1.2, speed: 0.6, color: "#F47216" }
//           ]} 
//         />

//         <OrbitControls enableZoom={true} />
//       </Canvas>

//       <div className="absolute top-10 left-10 z-10 pointer-events-none">
//         <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">Live Mission <span className="text-[#F47216]">Telemetry</span></h3>
//         <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Orbital Dynamics Engine v2.0</p>
//       </div>
//     </div>
//   );
// };

// export default SolarModel;

// import React, { useRef, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, Float, Html, useTexture } from '@react-three/drei';
// import * as THREE from 'three';


// const Satellite = ({ radius, speed, color, name }) => {
//   const satRef = useRef();

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * speed;
//     satRef.current.position.x = Math.cos(t) * radius;
//     satRef.current.position.z = Math.sin(t) * radius;
//     satRef.current.position.y = Math.sin(t * 0.5) * (radius * 0.2);
//   });

//   return (
//     <group ref={satRef}>
//       <mesh>
//         <boxGeometry args={[0.2, 0.2, 0.2]} />
//         <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
//       </mesh>
//       <Html distanceFactor={8} position={[0, 0.4, 0]}>
//         <div className="whitespace-nowrap">
//           <span className="text-[6px] font-mono text-white/50 uppercase tracking-tighter bg-black/40 px-1 py-0.5 rounded">
//             {name}
//           </span>
//         </div>
//       </Html>
//     </group>
//   );
// };

// const Planet = ({ position, size, textureUrl, name, satellites = [] }) => {
//   const ref = useRef();
//   // Load the texture
//   const texture = useTexture(textureUrl);
  
//   useFrame(() => {
//     ref.current.rotation.y += 0.003; 
//   });

//   return (
//     <group position={position}>
//       <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
//         <mesh ref={ref}>
//           <sphereGeometry args={[size, 64, 64]} /> {}
//           <meshStandardMaterial 
//             map={texture} 
//             metalness={0.1} 
//             roughness={0.8} 
//           />
          
//           <Html distanceFactor={10} position={[0, size + 0.5, 0]}>
//             <div className="flex flex-col items-center group pointer-events-none">
//               <div className="w-2 h-2 bg-[#F47216] rounded-full animate-ping mb-2" />
//               <span className="text-white text-[10px] font-black tracking-widest uppercase shadow-black drop-shadow-md">
//                 {name}
//               </span>
//             </div>
//           </Html>
//         </mesh>
//       </Float>

//       {satellites.map((sat, i) => (
//         <Satellite 
//           key={i} 
//           radius={size + sat.dist} 
//           speed={sat.speed} 
//           color={sat.color} 
//           name={sat.name} 
//         />
//       ))}

//       {satellites.map((sat, i) => (
//         <mesh key={`ring-${i}`} rotation={[Math.PI / 2, 0, 0]}>
//           <ringGeometry args={[size + sat.dist, (size + sat.dist) + 0.02, 64]} />
//           <meshBasicMaterial color="white" opacity={0.1} transparent />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// const SolarModel = () => {
//   return (
//     <div className="h-[750px] w-full bg-[#050505] rounded-[3rem] overflow-hidden border border-white/5 relative">
//       <Suspense fallback={
//         <div className="absolute inset-0 flex items-center justify-center text-white font-mono text-xs">
//           INITIALIZING TELEMETRY...
//         </div>
//       }>
//         <Canvas camera={{ position: [0, 15, 35], fov: 45 }}>
//           <color attach="background" args={['#050505']} />
//           <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
          
//           <ambientLight intensity={0.5} />
//           <pointLight position={[15, 15, 15]} intensity={2} />

       
//           <Planet 
//             position={[0, 0, 0]} 
//             size={3} 
//             textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
//             name="Earth" 
//             satellites={[
//               { name: "EOS-08", dist: 1.5, speed: 0.8, color: "#F47216" },
//               { name: "NavIC", dist: 2.8, speed: 0.3, color: "#0E88D3" }
//             ]} 
//           />
          
         
//           <Planet 
//             position={[12, 4, -8]} 
//             size={0.9} 
//             textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"
//             name="Moon" 
//             satellites={[
//               { name: "CH-3 PM", dist: 1.0, speed: 1.5, color: "#FFFFFF" }
//             ]} 
//           />
          
         
//           <Planet 
//             position={[-20, -3, -15]} 
//             size={1.8} 
//             textureUrl="https://solartextures.b-cdn.net/2k_mars.jpg"
//             name="Mars" 
//             satellites={[
//               { name: "Mangalyaan", dist: 1.5, speed: 0.5, color: "#F47216" }
//             ]} 
//           />

//           <OrbitControls enableZoom={true} maxDistance={60} minDistance={10} />
//         </Canvas>
//       </Suspense>

      
//       <div className="absolute top-10 left-10 z-10 pointer-events-none">
//         <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">
//           DEEP SPACE <span className="text-[#F47216]">DASHBOARD</span>
//         </h3>
//         <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mt-1">
//           Interactive WebGL Asset Mapping • Jan 2026
//         </p>
//       </div>

//       <div className="absolute bottom-10 right-10 text-right z-10">
//         <p className="text-white/30 font-mono text-[8px] uppercase tracking-[0.4em]">
//           Scroll to Zoom • Drag to Rotate
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SolarModel;

// import React, { useRef, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, Float, Html, useTexture } from '@react-three/drei';
// import * as THREE from 'three';


// const PlanetPlaceholder = () => (
//   <mesh>
//     <sphereGeometry args={[1, 16, 16]} />
//     <meshBasicMaterial color="#111" wireframe />
//   </mesh>
// );

// const Satellite = ({ radius, speed, color, name }) => {
//   const satRef = useRef();
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * speed;
//     satRef.current.position.x = Math.cos(t) * radius;
//     satRef.current.position.z = Math.sin(t) * radius;
//     satRef.current.position.y = Math.sin(t * 0.5) * (radius * 0.2);
//   });
//   return (
//     <group ref={satRef}>
//       <mesh>
//         <boxGeometry args={[0.2, 0.2, 0.2]} />
//         <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
//       </mesh>
//       <Html distanceFactor={8} position={[0, 0.4, 0]}>
//         <span className="text-[6px] font-mono text-white/50 uppercase bg-black/40 px-1 py-0.5 rounded">{name}</span>
//       </Html>
//     </group>
//   );
// };

// const Planet = ({ position, size, textureUrl, name, satellites = [] }) => {
//   const ref = useRef();
//   const texture = useTexture(textureUrl);
  
//   useFrame(() => {
//     ref.current.rotation.y += 0.003;
//   });

//   return (
//     <group position={position}>
//       <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
//         <mesh ref={ref}>
//           <sphereGeometry args={[size, 64, 64]} />
//           <meshStandardMaterial map={texture} metalness={0.1} roughness={0.8} />
//           <Html distanceFactor={10} position={[0, size + 0.5, 0]}>
//             <div className="flex flex-col items-center pointer-events-none">
//               <div className="w-2 h-2 bg-[#F47216] rounded-full animate-ping mb-2" />
//               <span className="text-white text-[10px] font-black tracking-widest uppercase drop-shadow-md">{name}</span>
//             </div>
//           </Html>
//         </mesh>
//       </Float>
//       {satellites.map((sat, i) => <Satellite key={i} radius={size + sat.dist} speed={sat.speed} color={sat.color} name={sat.name} />)}
//       {satellites.map((sat, i) => (
//         <mesh key={`ring-${i}`} rotation={[Math.PI / 2, 0, 0]}>
//           <ringGeometry args={[size + sat.dist, (size + sat.dist) + 0.02, 64]} />
//           <meshBasicMaterial color="white" opacity={0.1} transparent />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// const SolarModel = () => {
//   return (
//     <div className="h-[750px] w-full bg-[#050505] rounded-[3rem] overflow-hidden border border-white/5 relative">
      
//       <Canvas 
//         style={{ background: '#050505' }} 
//         camera={{ position: [0, 15, 35], fov: 45 }}
//       >
       
//         <color attach="background" args={['#050505']} />
//         <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
//         <ambientLight intensity={0.5} />
//         <pointLight position={[15, 15, 15]} intensity={2} />

//         <Suspense fallback={<PlanetPlaceholder />}>
//           <Planet 
//             position={[0, 0, 0]} 
//             size={3} 
//             textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
//             name="Earth" 
//             satellites={[
//               { name: "EOS-08", dist: 1.5, speed: 0.8, color: "#F47216" },
//               { name: "NavIC", dist: 2.8, speed: 0.3, color: "#0E88D3" }
//             ]} 
//           />
//           <Planet 
//             position={[12, 4, -8]} 
//             size={0.9} 
//             textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"
//             name="Moon" 
//             satellites={[{ name: "CH-3 PM", dist: 1.0, speed: 1.5, color: "#FFFFFF" }]} 
//           />
//           <Planet 
//             position={[-20, -3, -15]} 
//             size={1.8} 
//             textureUrl="https://solartextures.b-cdn.net/2k_mars.jpg"
//             name="Mars" 
//             satellites={[{ name: "Mangalyaan", dist: 1.5, speed: 0.5, color: "#F47216" }]} 
//           />
//         </Suspense>

//         <OrbitControls enableZoom={true} maxDistance={60} minDistance={10} />
//       </Canvas>

//       <div className="absolute top-10 left-10 z-10 pointer-events-none">
//         <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">DEEP SPACE <span className="text-[#F47216]">DASHBOARD</span></h3>
//         <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mt-1">Interactive WebGL Asset Mapping • Jan 2026</p>
//       </div>
//     </div>
//   );
// };

// export default SolarModel;

// import React, { useRef, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Stars, Float, Html, useTexture } from '@react-three/drei';
// import * as THREE from 'three';


// const PlanetPlaceholder = () => (
//   <mesh>
//     <sphereGeometry args={[1, 16, 16]} />
//     <meshBasicMaterial color="#0a255e" wireframe opacity={0.3} transparent />
//   </mesh>
// );

// const Satellite = ({ radius, speed, color, name }) => {
//   const satRef = useRef();
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * speed;
//     satRef.current.position.x = Math.cos(t) * radius;
//     satRef.current.position.z = Math.sin(t) * radius;
//     satRef.current.position.y = Math.sin(t * 0.5) * (radius * 0.2);
//   });
//   return (
//     <group ref={satRef}>
//       <mesh>
//         <boxGeometry args={[0.2, 0.2, 0.2]} />
//         <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
//       </mesh>
//       <Html distanceFactor={8} position={[0, 0.4, 0]}>
//         <span className="text-[6px] font-mono text-white/50 uppercase bg-black/40 px-1 py-0.5 rounded border border-white/5">{name}</span>
//       </Html>
//     </group>
//   );
// };

// const Planet = ({ position, size, textureUrl, name, satellites = [], isEarth = false }) => {
//   const ref = useRef();
//   const texture = useTexture(textureUrl);
  
//   useFrame(() => {
//     ref.current.rotation.y += 0.003;
//   });

//   return (
//     <group position={position}>
//       <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
//         <mesh ref={ref}>
//           <sphereGeometry args={[size, 64, 64]} />
//           <meshStandardMaterial 
//             map={texture} 
//             metalness={0.1} 
//             roughness={0.6}
           
//             emissive={isEarth ? new THREE.Color("#0a255e") : new THREE.Color("#000")}
//             emissiveIntensity={isEarth ? 0.6 : 0}
//           />
//           <Html distanceFactor={10} position={[0, size + 0.5, 0]}>
//             <div className="flex flex-col items-center pointer-events-none">
//               <div className={`w-2 h-2 ${isEarth ? 'bg-[#0E88D3]' : 'bg-[#F47216]'} rounded-full animate-ping mb-2`} />
//               <span className="text-white text-[10px] font-black tracking-widest uppercase drop-shadow-md drop-shadow-black">{name}</span>
//             </div>
//           </Html>
//         </mesh>
//       </Float>

     
//       {satellites.map((sat, i) => (
//         <Satellite key={i} radius={size + sat.dist} speed={sat.speed} color={sat.color} name={sat.name} />
//       ))}

     
//       {satellites.map((sat, i) => (
//         <mesh key={`ring-${i}`} rotation={[Math.PI / 2, 0, 0]}>
//           <ringGeometry args={[size + sat.dist, (size + sat.dist) + 0.02, 64]} />
//           <meshBasicMaterial color={isEarth ? "#0E88D3" : "white"} opacity={0.1} transparent />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// const SolarModel = () => {
//   return (
//     <div className="h-[750px] w-full bg-[#050505] rounded-[3rem] overflow-hidden border border-white/5 relative">
//       <Canvas 
//         style={{ background: '#050505' }} 
//         camera={{ position: [0, 15, 35], fov: 45 }}
//         gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping }}
//       >
//         <color attach="background" args={['#050505']} />
//         <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
        
      
//         <ambientLight intensity={0.8} /> 
//         <pointLight position={[20, 20, 20]} intensity={2.5} color="#fff" />
       
//         <pointLight position={[-20, -10, -10]} intensity={1.5} color="#0E88D3" />

//         <Suspense fallback={<PlanetPlaceholder />}>
//           <Planet 
//             isEarth={true}
//             position={[0, 0, 0]} 
//             size={3.2} 
//             textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"
//             name="Earth" 
//             satellites={[
//               { name: "EOS-08", dist: 1.5, speed: 0.8, color: "#F47216" },
//               { name: "NavIC", dist: 2.8, speed: 0.3, color: "#0E88D3" }
//             ]} 
//           />
//           <Planet 
//             position={[12, 4, -8]} 
//             size={0.9} 
//             textureUrl="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg"
//             name="Moon" 
//             satellites={[{ name: "CH-3 PM", dist: 1.0, speed: 1.5, color: "#FFFFFF" }]} 
//           />
//           <Planet 
//             position={[-20, -3, -15]} 
//             size={1.8} 
//             textureUrl="https://solartextures.b-cdn.net/2k_mars.jpg"
//             name="Mars" 
//             satellites={[{ name: "Mangalyaan", dist: 1.5, speed: 0.5, color: "#F47216" }]} 
//           />
//         </Suspense>

//         <OrbitControls 
//           enableZoom={true} 
//           maxDistance={60} 
//           minDistance={10}
//           enableDamping={true}
//           dampingFactor={0.05}
//         />
//       </Canvas>

      
//       <div className="absolute top-10 left-10 z-10 pointer-events-none">
//         <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">
//           DEEP SPACE <span className="text-[#F47216]">DASHBOARD</span>
//         </h3>
//         <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mt-1">
//           Interactive WebGL Asset Mapping • Jan 2026
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SolarModel; 

import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Html, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const PlanetBody = ({ size, color, isSun, atmosphereColor, roughness, metalness }) => {
  const meshRef = useRef();
  
  // Use a custom shader material for a realistic "rim light" (Fresnel) effect
  // This makes the edges of the planet glow based on the atmosphereColor
  return (
    <group>
      {/* Main Surface */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          color={color}
          metalness={isSun ? 0 : metalness || 0.5} 
          roughness={isSun ? 0 : roughness || 0.7}
          emissive={new THREE.Color(isSun ? color : atmosphereColor || color)}
          emissiveIntensity={isSun ? 4 : 0.2}
        />
      </mesh>

      {/* Atmospheric Glow (Outer Layer) */}
      {!isSun && (
        <mesh>
          <sphereGeometry args={[size * 1.03, 64, 64]} />
          <meshPhongMaterial 
            color={atmosphereColor || color}
            transparent
            opacity={0.2}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* Sun's Heat Haze / Corona */}
      {isSun && (
        <mesh>
          <sphereGeometry args={[size * 1.2, 64, 64]} />
          <meshBasicMaterial 
            color={color}
            transparent
            opacity={0.1}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}
    </group>
  );
};

const Planet = ({ distance, size, color, name, satellites = [], isEarth = false, isSun = false, hasRings = false, orbitSpeed = 1, rotationSpeed = 1, atmosphereColor, roughness, metalness }) => {
  const orbitRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (orbitRef.current && !isSun) orbitRef.current.rotation.y = t * orbitSpeed;
  });

  return (
    <group ref={orbitRef}>
      <group position={[distance, 0, 0]}>
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
          <PlanetBody 
            size={size} 
            color={color} 
            isSun={isSun} 
            atmosphereColor={atmosphereColor} 
            roughness={roughness} 
            metalness={metalness} 
          />
          
          <Html distanceFactor={15} position={[0, size + 1.5, 0]}>
            <div className="flex flex-col items-center pointer-events-none">
              <div className={`w-1 h-8 ${isSun ? 'bg-yellow-400' : 'bg-white/20'} mb-2`} />
              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase drop-shadow-lg">{name}</span>
            </div>
          </Html>
        </Float>

        {hasRings && (
          <group rotation={[Math.PI / 2.2, 0, 0]}>
            {/* Main Ring Dust */}
            <mesh>
              <torusGeometry args={[size * 2.2, 0.4, 2, 100]} />
              <meshStandardMaterial color={color} opacity={0.2} transparent />
            </mesh>
            {/* Sharp Ring Gaps */}
            <mesh>
              <torusGeometry args={[size * 2, 0.01, 2, 100]} />
              <meshBasicMaterial color="white" opacity={0.3} transparent />
            </mesh>
          </group>
        )}

        {satellites.map((sat, i) => (
          <Satellite key={i} radius={size + sat.dist} speed={sat.speed} color={sat.color} name={sat.name} />
        ))}
      </group>

      {!isSun && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[distance - 0.05, distance + 0.05, 128]} />
          <meshBasicMaterial color="white" opacity={0.05} transparent side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
};

const Satellite = ({ radius, speed, color }) => {
  const satRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    satRef.current.position.set(Math.cos(t) * radius, 0, Math.sin(t) * radius);
  });
  return (
    <mesh ref={satRef}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
};

const SolarModel = () => {
  return (
    <div className="h-[800px] w-full bg-[#020202] rounded-[3rem] overflow-hidden border border-white/5 relative">
      <Canvas camera={{ position: [0, 250, 400], fov: 40 }} gl={{ antialias: true, logarithmicDepthBuffer: true }}>
        <color attach="background" args={['#010101']} />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
        
        <ambientLight intensity={0.2} /> 
        {/* Warm Sun Light */}
        <pointLight position={[0, 0, 0]} intensity={20} color="#ffccaa" decay={0} />
        {/* Cold Galactic Rim Light */}
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#44aaff" />

        <Suspense fallback={null}>
          <Planet isSun distance={0} size={16} color="#ffaa00" name="SOL" />
          
          <Planet distance={40} size={1.2} color="#4a4a4a" atmosphereColor="#777777" name="Mercury" orbitSpeed={0.5} roughness={0.9} />
          <Planet distance={70} size={2.2} color="#e3bb76" atmosphereColor="#ffccaa" name="Venus" orbitSpeed={0.35} roughness={0.4} />
          
          {/* Earth: Shiny oceans (low roughness) and high atmosphere glow */}
          <Planet isEarth distance={105} size={3.2} color="#0044ff" atmosphereColor="#00aaff" name="Earth" orbitSpeed={0.25} roughness={0.2} metalness={0.8} satellites={[{ name: "Moon", dist: 2, speed: 2, color: "#fff" }]} />
          
          <Planet distance={140} size={2.5} color="#ff3300" atmosphereColor="#ff6600" name="Mars" orbitSpeed={0.2} roughness={1} metalness={0} />
          
          <Planet distance={200} size={8} color="#d39c7e" atmosphereColor="#ffeebb" name="Jupiter" orbitSpeed={0.1} roughness={0.3} />
          <Planet hasRings distance={270} size={6.5} color="#c5ab6e" atmosphereColor="#f0e68c" name="Saturn" orbitSpeed={0.07} roughness={0.5} />
          <Planet distance={330} size={4.5} color="#b4d9d9" atmosphereColor="#e0ffff" name="Uranus" orbitSpeed={0.04} roughness={0.1} />
          <Planet distance={380} size={4.2} color="#4566ad" atmosphereColor="#0000ff" name="Neptune" orbitSpeed={0.03} roughness={0.2} />
        </Suspense>

        <OrbitControls enableZoom={true} maxDistance={800} minDistance={100} enableDamping />
      </Canvas>

      <div className="absolute top-12 left-12 z-10 pointer-events-none">
        <h3 className="text-5xl font-black text-white tracking-tighter uppercase italic opacity-80">COSMOS</h3>
        <p className="text-[#F47216] font-mono text-xs tracking-[0.5em] font-bold">DEEP SPACE TELEMETRY</p>
      </div>
    </div>
  );
};

export default SolarModel;