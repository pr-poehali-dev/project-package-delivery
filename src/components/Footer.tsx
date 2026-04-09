export default function Footer() {
  return (
    <div className="relative bg-black border-t border-white/5 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-12 mb-12">
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 uppercase text-neutral-500 text-xs tracking-widest">Навигация</h3>
            <a href="#how" className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
              Как заказать
            </a>
            <a
              href="https://www.donationalerts.com/r/aura_ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Заказать отзывы
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 uppercase text-neutral-500 text-xs tracking-widest">Отзывы</h3>
            <a
              href="https://t.me/+wCu-erwzWmw0NDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Telegram-канал
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="mb-2 uppercase text-neutral-500 text-xs tracking-widest">Оплата</h3>
            <a
              href="https://www.donationalerts.com/r/aura_ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
            >
              DonationAlerts
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-8 border-t border-white/5">
          <h1 className="text-[18vw] sm:text-[14vw] leading-[0.8] text-white font-bold tracking-tight">
            AURA
          </h1>
          <p className="text-neutral-600 text-sm">{new Date().getFullYear()} © Aura</p>
        </div>
      </div>
    </div>
  );
}
