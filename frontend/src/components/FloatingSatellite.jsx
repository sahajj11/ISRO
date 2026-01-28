import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, PerspectiveCamera, Environment, ContactShadows, Html } from '@react-three/drei';
import { ErrorBoundary } from 'react-error-boundary';

// 1. Create a Fallback for when things go wrong
function ErrorFallback({ error }) {
  return (
    <Html center>
      <div className="text-red-500 bg-white p-4 rounded shadow-lg">
        <p>Model failed to load:</p>
        <pre className="text-xs">{error.message}</pre>
      </div>
    </Html>
  );
}

function SatelliteModel() {
  const satelliteRef = useRef();
  
  // 2. Updated to a reliable GLB URL (Official Khronos sample)
  // Replace this with your own local /model.glb file eventually!
  const { scene } = useGLTF('https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (satelliteRef.current) {
      satelliteRef.current.rotation.y = t * 0.2;
    }
  });

  return <primitive ref={satelliteRef} object={scene} scale={2} />;
}

const SatelliteHero = () => {
  return (
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing bg-slate-900">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* 3. Wrap in ErrorBoundary and Suspense */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Html center>Loading 3D Scene...</Html>}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <SatelliteModel />
            </Float>
          </Suspense>
        </ErrorBoundary>

        <Environment preset="city" />
        <ContactShadows opacity={0.4} scale={10} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
};

export default SatelliteHero;