import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(120,60,200,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          Aura — доверие начинается здесь
        </motion.p>

        <motion.p
          className="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          93% покупателей читают отзывы{" "}
          <span className="text-neutral-500">перед визитом.</span>
        </motion.p>

        <motion.p
          className="text-neutral-400 text-xl mt-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Позвольте первому впечатлению работать на вас — каждый день, без остановки.
        </motion.p>

        <motion.a
          href="https://www.donationalerts.com/r/aura_ru"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 border border-white/30 text-white uppercase tracking-widest text-sm px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Заказать сейчас
        </motion.a>
      </div>
    </div>
  );
}
