import { motion } from "framer-motion";
import { useState, useMemo } from "react";

interface StarData {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ShootingStarData {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface NebulaData {
  id: number;
  x: number;
  y: number;
  scale: number;
  hue: number;
  duration: number;
  delay: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function StarryBackground() {
  const stars = useMemo<StarData[]>(() =>
    Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 3) * 100,
      y: seededRandom(i * 7) * 100,
      size: seededRandom(i * 11) * 2.5 + 0.5,
      opacity: seededRandom(i * 13) * 0.6 + 0.2,
      duration: seededRandom(i * 17) * 4 + 2,
      delay: seededRandom(i * 19) * 6,
    })), []);

  const shootingStars = useMemo<ShootingStarData[]>(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 23) * 70 + 5,
      size: seededRandom(i * 29) * 100 + 80,
      duration: seededRandom(i * 31) * 1.5 + 1,
      delay: seededRandom(i * 37) * 12 + i * 2,
      opacity: seededRandom(i * 41) * 0.5 + 0.5,
    })), []);

  const nebulae = useMemo<NebulaData[]>(() =>
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 43) * 80 + 10,
      y: seededRandom(i * 47) * 80 + 10,
      scale: seededRandom(i * 53) * 1.5 + 0.8,
      hue: [260, 220, 280, 200, 300][i],
      duration: seededRandom(i * 59) * 10 + 15,
      delay: seededRandom(i * 61) * 8,
    })), []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#000008] via-[#03001c] to-[#000010]" />

      {nebulae.map((n) => (
        <motion.div
          key={n.id}
          className="absolute rounded-full"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            width: 400 * n.scale,
            height: 300 * n.scale,
            background: `radial-gradient(ellipse, hsla(${n.hue}, 80%, 40%, 0.06) 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            filter: "blur(40px)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: n.duration,
            delay: n.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            boxShadow: s.size > 1.5 ? `0 0 ${s.size * 2}px rgba(255,255,255,0.4)` : "none",
          }}
          animate={{ opacity: [s.opacity, s.opacity * 0.2, s.opacity] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {shootingStars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{ left: `${s.x}%`, top: "-2%", width: s.size, height: 1.5 }}
          initial={{ y: "-5vh", x: 0, opacity: 0 }}
          animate={{
            y: "115vh",
            x: "50vw",
            opacity: [0, s.opacity, s.opacity, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: Math.sin(s.id * 7) * 5 + 8,
            ease: "linear",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(180,180,255,0.3) 30%, rgba(255,255,255,0.95) 100%)",
              boxShadow: "0 0 6px 2px rgba(200,200,255,0.4)",
              borderRadius: 2,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
