import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/b9c4768e-c16b-4664-b66a-2b614a35a4c2/files/a63f99bb-a67e-4aa4-b7a7-65c06e45e376.jpg"
            alt="Aura abstract background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base tracking-widest">
        Aura — доверие начинается здесь
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl z-10 leading-tight">
        93% покупателей читают отзывы перед визитом. Позвольте первому впечатлению работать на вас — каждый день.
      </p>

      <a
        href="https://www.donationalerts.com/r/aura_ru"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-12 left-6 z-10 border border-white/50 text-white uppercase tracking-widest text-xs px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
      >
        Заказать сейчас
      </a>
    </div>
  );
}
