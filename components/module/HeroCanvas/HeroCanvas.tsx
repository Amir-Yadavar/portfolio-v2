"use client";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useFrame(() => {
    let targetZ = 3.8;

    if (size.width < 480) {
      targetZ = 7;
    } else if (size.width < 768) {
      targetZ = 5.5;
    } else if (size.width < 1024) {
      targetZ = 4.5;
    } else if (size.width < 1400) {
      targetZ = 3.2;
    }

    camera.position.set(0, 0, targetZ);
    camera.updateProjectionMatrix();
  });

  return null;
}

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh | null>(null);

  const onyxRoughnessTexture = useTexture("/texture/onyx/Onyx_Roughness.jpg");
  const onyxColorTexture = useTexture("/texture/onyx/Onyx_Color_new.png");

  useFrame((state, delta) => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.z += 0.08 * delta;
    sphereRef.current.rotation.y += 0.08 * delta;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhysicalMaterial
        color="#000000"
        emissive="#a855f7"
        emissiveIntensity={2}
        emissiveMap={onyxColorTexture}
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

function Torus() {
  const ring1Ref = useRef<THREE.Mesh | null>(null);
  const ring2Ref = useRef<THREE.Mesh | null>(null);

  // محاسبه موقعیت ۵ ستاره دور دایره
  const totalStars = 5;
  const starPositions = Array.from({ length: totalStars }).map((_, index) => {
    const angle = (index / totalStars) * Math.PI * 2;
    return [2.5 * Math.cos(angle), 2.5 * Math.sin(angle), 0];
  });

  const localAxis = new THREE.Vector3(0, 0, 1);

  useFrame((state, delta) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotateOnAxis(localAxis, 0.12 * delta);
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotateOnAxis(localAxis, 0.12 * delta);
    }
  });

  return (
    <group>
      {/* میله اول با مقادیر عددی ثابت شما */}
      <mesh ref={ring1Ref} rotation={[0, -0.02, 0]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#3e2852"
          emissive="#3e2852"
          emissiveIntensity={0.1}
        />

        {starPositions.map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.04, 4, 4]} />
            <meshStandardMaterial
              color="#c084fc"
              emissive="#a855f7"
              emissiveIntensity={4}
              toneMapped={false}
            />
          </mesh>
        ))}
      </mesh>

      {/* میله دوم با مقادیر عددی ثابت شما */}
      <mesh ref={ring2Ref} rotation={[-1.4, 0.32, 0]}>
        <torusGeometry args={[2.5, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#3e2852"
          emissive="#3e2852"
          emissiveIntensity={0.1}
        />
        {starPositions.map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <sphereGeometry args={[0.04, 4, 4]} />
            <meshStandardMaterial
              color="#c084fc"
              emissive="#a855f7"
              emissiveIntensity={4}
              toneMapped={false}
            />
          </mesh>
        ))}
      </mesh>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5.5] }}
    >
      <ambientLight intensity={1} />
      <ResponsiveCamera />

      <AnimatedSphere />
      <Torus />
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
