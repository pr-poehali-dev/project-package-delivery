import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ opacity }} className="relative z-10 text-center text-white px-6">
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Яндекс.Карты · Отзывы
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none mb-8 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ scale }}
        >
          AURA
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-purple-400 blur-3xl select-none pointer-events-none"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            AURA
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-xl mx-auto text-neutral-400 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Повышаем рейтинг вашего бизнеса в Яндекс.Картах с помощью
          живых, естественных отзывов
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a
            href="#how"
            className="inline-block border border-white/30 text-white uppercase tracking-widest text-sm px-8 py-4 hover:bg-white/10 transition-all duration-300"
          >
            Узнать больше
          </a>
          <a
            href="https://www.donationalerts.com/r/aura_ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black uppercase tracking-widest text-sm px-8 py-4 font-semibold hover:bg-neutral-200 transition-all duration-300"
          >
            Заказать отзывы
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <motion.p
          className="text-[10px] uppercase tracking-widest text-neutral-600"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Листай
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </div>
    </div>
  );
}
