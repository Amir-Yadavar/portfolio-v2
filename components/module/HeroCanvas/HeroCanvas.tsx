"use client";
import * as THREE from "three";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh | null>(null);

  const onyxRoughnessTexture = useTexture("/texture/onyx/Onyx_Roughness.jpg");

  useFrame(() => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.z += 0.001;
    sphereRef.current.rotation.y += 0.001;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshPhysicalMaterial
        color="#000000"
        emissive="#a855f7"
        emissiveIntensity={2}
        emissiveMap={onyxRoughnessTexture}
        roughness={0.05}
        roughnessMap={onyxRoughnessTexture}
        metalness={0.05}
        transmission={1.0}
        ior={1.5}
        thickness={2.5}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1} />
      {/* <directionalLight position={[3, 2, 4]} intensity={1} /> */}
      <OrbitControls />
      <pointLight position={[0, 0, -5]} intensity={5} color="#a855f7" />
      {/* اینجا داخل Canvas هست */}
      <AnimatedSphere />

      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
