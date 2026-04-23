"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Sparkles,
  Environment,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { OrnateDivider } from "@/components/common/OrnateDivider";
import { SectionBrandMark } from "@/components/common/WeddingBrand";

export function MandapScene() {
  return (
    <section
      id="mandap"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,30,63,0.3), transparent 60%), linear-gradient(180deg, #0A0807 0%, #1A0409 50%, #3F0712 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <SectionBrandMark />
          <span className="section-eyebrow">The Sacred Circle</span>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-6xl">
            Beneath the{" "}
            <span className="italic gold-text-shimmer">Mandap</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg italic text-ivory/70">
            Four pillars, four vows, and the sacred fire that binds two souls
            for seven lifetimes.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <OrnateDivider glyph="flower" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="relative mt-14 h-[520px] overflow-hidden rounded-3xl ornate-border md:h-[640px]"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl"
            style={{
              boxShadow:
                "inset 0 0 100px rgba(212,175,55,0.1), 0 30px 80px rgba(0,0,0,0.6)",
            }}
          />
          <Canvas
            camera={{ position: [0, 2.2, 7], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.8]}
          >
            <Suspense fallback={null}>
              <color attach="background" args={["#080306"]} />
              <fog attach="fog" args={["#08030a", 8, 16]} />

              <ambientLight intensity={0.18} color="#8B1E3F" />
              <pointLight position={[0, 2.2, 0]} intensity={2.2} color="#F5A742" distance={10} />
              <pointLight position={[3, 3, 3]} intensity={0.8} color="#D4AF37" />
              <pointLight position={[-3, 3, -3]} intensity={0.6} color="#8B1E3F" />
              <directionalLight position={[0, 5, 5]} intensity={0.3} color="#F5E7B3" />

              <Mandap />
              <SacredFire />
              <HangingFlowers />

              <Sparkles
                count={80}
                scale={[8, 5, 8]}
                size={2}
                speed={0.25}
                color="#F5E7B3"
              />
              <Stars radius={40} depth={50} count={800} factor={2} fade speed={0.5} />

              <Environment preset="sunset" background={false} />

              <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2.1}
                autoRotate
                autoRotateSpeed={0.4}
                rotateSpeed={0.5}
              />
            </Suspense>
          </Canvas>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-matte to-transparent" />
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-xs uppercase tracking-[0.4em] text-champagne-200/80">
            ✦ Drag to explore ✦
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Mandap() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.03;
    }
  });

  const pillarPositions: [number, number, number][] = [
    [-2, 0, -2],
    [2, 0, -2],
    [-2, 0, 2],
    [2, 0, 2],
  ];

  return (
    <group ref={groupRef}>
      {/* Base platform */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <cylinderGeometry args={[3.2, 3.4, 0.2, 32]} />
        <meshStandardMaterial
          color="#3a1a0f"
          roughness={0.5}
          metalness={0.3}
          emissive="#2a0c05"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[2.8, 2.8, 0.06, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          roughness={0.25}
          metalness={0.85}
          emissive="#8B6F1B"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Pillars */}
      {pillarPositions.map((p, i) => (
        <Pillar key={i} position={p} />
      ))}

      {/* Canopy beams */}
      <group position={[0, 2.9, 0]}>
        <mesh position={[0, 0, -2]}>
          <boxGeometry args={[4.1, 0.12, 0.12]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0, 2]}>
          <boxGeometry args={[4.1, 0.12, 0.12]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[0.12, 0.12, 4.1]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[0.12, 0.12, 4.1]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.25} />
        </mesh>
      </group>

      {/* Dome canopy */}
      <Canopy />

      {/* Floating lights */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2.3;
        return (
          <Float
            key={i}
            speed={1.5}
            rotationIntensity={0.3}
            floatIntensity={0.6}
          >
            <mesh
              position={[
                Math.cos(angle) * radius,
                1.3 + Math.sin(i) * 0.3,
                Math.sin(angle) * radius,
              ]}
            >
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial
                color="#FFE8A0"
                emissive="#FFB347"
                emissiveIntensity={3}
              />
              <pointLight intensity={0.3} color="#F5A742" distance={2} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

function Pillar({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <group position={position}>
      {/* Base */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.28, 0.32, 0.3, 16]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* Shaft */}
      <mesh position={[0, 1.45, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 2.3, 16]} />
        <meshStandardMaterial
          color="#C5A028"
          metalness={0.9}
          roughness={0.25}
          emissive="#8B6F1B"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Decorative rings (rotating) */}
      <group ref={ref} position={[0, 1.45, 0]}>
        {[-0.7, 0, 0.7].map((y) => (
          <mesh key={y} position={[0, y, 0]}>
            <torusGeometry args={[0.26, 0.025, 8, 24]} />
            <meshStandardMaterial color="#F5E7B3" metalness={1} roughness={0.15} />
          </mesh>
        ))}
      </group>

      {/* Capital */}
      <mesh position={[0, 2.72, 0]}>
        <cylinderGeometry args={[0.32, 0.22, 0.25, 16]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.85} roughness={0.2} />
      </mesh>
    </group>
  );
}

function Canopy() {
  return (
    <group position={[0, 3.05, 0]}>
      {/* Dome */}
      <mesh>
        <sphereGeometry args={[1.6, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#8B1E3F"
          emissive="#5C0A1C"
          emissiveIntensity={0.35}
          metalness={0.5}
          roughness={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Top finial */}
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.12, 0.35, 8]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[0, 1.75, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#F5E7B3"
          emissive="#D4AF37"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

function SacredFire() {
  const fireRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (fireRef.current) {
      fireRef.current.scale.y = 1 + Math.sin(t * 8) * 0.1;
      fireRef.current.scale.x = 1 + Math.sin(t * 6) * 0.05;
    }
    if (glowRef.current) {
      glowRef.current.intensity = 2 + Math.sin(t * 10) * 0.5;
    }
  });

  return (
    <group position={[0, 0.25, 0]}>
      {/* Kund base */}
      <mesh>
        <boxGeometry args={[0.9, 0.15, 0.9]} />
        <meshStandardMaterial color="#2a0c05" metalness={0.4} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.75, 0.05, 0.75]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.85} roughness={0.3} />
      </mesh>

      {/* Flame */}
      <mesh ref={fireRef} position={[0, 0.35, 0]}>
        <coneGeometry args={[0.18, 0.55, 16]} />
        <meshBasicMaterial color="#FFB347" transparent opacity={0.9} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <coneGeometry args={[0.26, 0.45, 16]} />
        <meshBasicMaterial color="#FF6B35" transparent opacity={0.45} />
      </mesh>
      <mesh position={[0, 0.22, 0]}>
        <coneGeometry args={[0.3, 0.35, 16]} />
        <meshBasicMaterial color="#FFEB66" transparent opacity={0.3} />
      </mesh>

      <pointLight
        ref={glowRef}
        position={[0, 0.4, 0]}
        color="#FFA050"
        intensity={2.4}
        distance={6}
      />
    </group>
  );
}

function HangingFlowers() {
  const strands = 12;
  return (
    <group position={[0, 2.9, 0]}>
      {Array.from({ length: strands }).map((_, i) => {
        const side = i % 4;
        const t = Math.floor(i / 4);
        const offset = (t - 1) * 1.2;
        let pos: [number, number, number];
        if (side === 0) pos = [offset, 0, -2];
        else if (side === 1) pos = [offset, 0, 2];
        else if (side === 2) pos = [-2, 0, offset];
        else pos = [2, 0, offset];

        return <FlowerStrand key={i} position={pos} delay={i * 0.2} />;
      })}
    </group>
  );
}

function FlowerStrand({
  position,
  delay,
}: {
  position: [number, number, number];
  delay: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.8 + delay) * 0.08;
    }
  });

  const colors = ["#F5A742", "#8B1E3F", "#F5E7B3", "#D4AF37"];

  return (
    <group ref={ref} position={position}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[0, -0.2 - i * 0.22, 0]}>
          <sphereGeometry args={[0.07, 10, 10]} />
          <meshStandardMaterial
            color={colors[i % colors.length]}
            emissive={colors[i % colors.length]}
            emissiveIntensity={0.2}
            roughness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}
