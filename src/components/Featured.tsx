import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Featured() {
  const benefits = [
    { num: "01", title: "Живые аккаунты", desc: "Все отзывы пишутся с реальных профилей — никаких ботов и фейков. Яндекс не сможет их отфильтровать." },
    { num: "02", title: "Без риска блокировки", desc: "Работаем аккуратно: постепенный прирост, естественный темп публикаций." },
    { num: "03", title: "Любая тематика", desc: "Ресторан, салон, магазин, клиника — адаптируем текст под вашу нишу." },
    { num: "04", title: "Быстрый результат", desc: "Первые отзывы появляются уже через 24–48 часов после оплаты." },
  ];

  return (
    <div id="how" className="min-h-screen px-6 py-24 relative">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedBlock>
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Почему выбирают Aura</h3>
          <p className="text-3xl lg:text-5xl mb-16 text-white leading-tight max-w-2xl">
            Рейтинг в Яндекс.Картах — это первое, что видят ваши клиенты.
          </p>
        </AnimatedBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {benefits.map((b, i) => (
            <AnimatedBlock key={b.num} delay={i * 0.1}>
              <div className="bg-black/60 backdrop-blur-sm p-8 lg:p-12 h-full border border-white/5 hover:border-white/20 transition-colors duration-500">
                <span className="text-xs text-neutral-600 uppercase tracking-widest">{b.num}</span>
                <h4 className="text-xl font-semibold mt-4 mb-3 text-white">{b.title}</h4>
                <p className="text-neutral-400 leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedBlock>
          ))}
        </div>

        <AnimatedBlock delay={0.3}>
          <div className="mt-16 p-8 lg:p-12 border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-6">Как заказать</h3>
            <ol className="space-y-5 text-lg">
              <li className="flex gap-4 text-white">
                <span className="text-neutral-600 shrink-0 font-mono">1.</span>
                <span>Нажмите «Заказать отзывы» — откроется страница оплаты DonationAlerts</span>
              </li>
              <li className="flex gap-4 text-white">
                <span className="text-neutral-600 shrink-0 font-mono">2.</span>
                <span>
                  В сообщении к платежу обязательно укажите:
                  <ul className="mt-3 space-y-1.5 text-base text-neutral-400 list-none ml-0">
                    <li className="flex gap-2"><span className="text-neutral-600">—</span> ссылку на вашу компанию в Яндекс.Картах</li>
                    <li className="flex gap-2"><span className="text-neutral-600">—</span> нужное количество отзывов</li>
                    <li className="flex gap-2"><span className="text-neutral-600">—</span> желаемый тон и ключевые слова</li>
                    <li className="flex gap-2"><span className="text-neutral-600">—</span> нужную оценку (например, 5 звёзд)</li>
                    <li className="flex gap-2"><span className="text-neutral-600">—</span> любые пожелания к содержанию</li>
                  </ul>
                </span>
              </li>
              <li className="flex gap-4 text-white">
                <span className="text-neutral-600 shrink-0 font-mono">3.</span>
                <span>Мы свяжемся с вами и согласуем детали перед стартом</span>
              </li>
            </ol>
            <a
              href="https://www.donationalerts.com/r/aura_ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-white text-black uppercase tracking-widest text-sm px-10 py-4 rounded-full font-semibold hover:bg-neutral-200 transition-colors duration-300"
            >
              Заказать отзывы
            </a>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
}