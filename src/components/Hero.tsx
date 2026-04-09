import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function ShootingStar({ star }: { star: Star }) {
  return (
    <motion.div
      key={star.id}
      className="absolute"
      style={{
        left: `${star.x}%`,
        top: "-2%",
        width: star.size,
        height: 1,
      }}
      initial={{ y: "-10vh", x: 0, opacity: 0 }}
      animate={{
        y: "110vh",
        x: "40vw",
        opacity: [0, star.opacity, star.opacity, 0],
      }}
      transition={{
        duration: star.duration,
        delay: star.delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 4 + 2,
        ease: "linear",
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.9), rgba(255,255,255,${star.opacity}))`,
          boxShadow: "0 0 4px 1px rgba(255,255,255,0.3)",
        }}
      />
    </motion.div>
  );
}

function StaticStars() {
  const [stars] = useState(() =>
    Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4,
    }))
  );

  return (
    <>
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [s.opacity, s.opacity * 0.3, s.opacity] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

function ShootingStars() {
  const [stars] = useState(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 80,
      size: Math.random() * 80 + 60,
      duration: Math.random() * 1.5 + 1,
      delay: Math.random() * 8 + i * 1.5,
      opacity: Math.random() * 0.6 + 0.4,
    }))
  );

  return (
    <>
      {stars.map((star) => (
        <ShootingStar key={star.id} star={star} />
      ))}
    </>
  );
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000005] via-[#05001a] to-[#000010]" />
        <StaticStars />
        <ShootingStars />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-6">
          Яндекс.Карты · Отзывы
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none mb-8">
          AURA
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-neutral-400 leading-relaxed mb-10">
          Повышаем рейтинг вашего бизнеса в Яндекс.Картах с помощью
          живых, естественных отзывов
        </p>
        <a
          href="#how"
          className="inline-block border border-white/30 text-white uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
        >
          Узнать больше
        </a>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-white/20 mx-auto"
        />
      </div>
    </div>
  );
}
