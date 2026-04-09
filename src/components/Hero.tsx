import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/b9c4768e-c16b-4664-b66a-2b614a35a4c2/files/260433f4-8af5-44f1-87de-4ad709c09d50.jpg"
          alt="Aura background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-6">
          Яндекс.Карты · Отзывы
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none mb-8">
          AURA
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-neutral-300 leading-relaxed mb-10">
          Повышаем рейтинг вашего бизнеса в Яндекс.Картах с помощью
          живых, естественных отзывов
        </p>
        <a
          href="#how"
          className="inline-block border border-white/50 text-white uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
        >
          Узнать больше
        </a>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-white/30 mx-auto mb-2"
        />
      </div>
    </div>
  );
}
