import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="max-w-4xl mx-auto relative z-10 text-center" ref={ref}>
        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Убедитесь сами
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Реальные примеры наших работ
        </motion.h2>

        <motion.p
          className="text-neutral-400 text-lg mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Скриншоты, кейсы и живые отзывы клиентов — в нашем Telegram-канале
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="https://t.me/+wCu-erwzWmw0NDAy"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 border border-white/20 text-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.278 13.67l-2.948-.924c-.64-.203-.654-.64.136-.954l11.5-4.435c.537-.194 1.006.131.596.891z" />
            </svg>
            <span className="uppercase tracking-widest text-sm font-semibold">
              Смотреть отзывы в Telegram
            </span>
          </a>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "500+", label: "выполненных заказов" },
            { value: "98%", label: "довольных клиентов" },
            { value: "24ч", label: "среднее время старта" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}