"use client";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.z += 0.001;
    sphereRef.current.rotation.y += 0.001;

  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial color="blue" wireframe/>
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 4]} intensity={1} />

      <OrbitControls />

      {/* اینجا داخل Canvas هست */}
      <AnimatedSphere />
    </Canvas>
  );
}