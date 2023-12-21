import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const ComputerModel = () => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');

  return <primitive 
  object={scene} 
  scale = {0.8}
  position={[0, - 3.25, -1.5]}/>;
};

const ComputersCanvas = () => {

  return (
    <Canvas
      frameLoop = "demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }}
    >
      <mesh>
        <hemisphereLight intensity ={1}
        groundColor = "black" />
        <pointLight intensity={10} />
        <spotLight 
        position = {[-20, 50, 10]}
        angle = {0.12}
        penumbra = {1}
        intensity = {0.5}
        castShadow 
        shadow-mapSize={1024}
        ></spotLight>
      </mesh>
      <Suspense fallback={null}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle = {Math.PI / 2}
        minPolarAngle = {Math.PI / 2}
        />
        <ComputerModel />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
