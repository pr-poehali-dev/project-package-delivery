export default function Featured() {
  const benefits = [
    { num: "01", title: "Живые аккаунты", desc: "Все отзывы пишутся с реальных профилей — никаких ботов и фейков." },
    { num: "02", title: "Без риска блокировки", desc: "Работаем аккуратно: постепенный прирост, естественный темп." },
    { num: "03", title: "Любая тематика", desc: "Ресторан, салон, магазин, клиника — адаптируем текст под вас." },
    { num: "04", title: "Быстрый результат", desc: "Первые отзывы появляются уже в течение 24–48 часов." },
  ];

  return (
    <div id="how" className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Почему выбирают Aura</h3>
        <p className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight max-w-2xl">
          Рейтинг в Яндекс.Картах — это первое, что видят ваши клиенты.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {benefits.map((b) => (
            <div key={b.num} className="bg-white p-8 lg:p-12">
              <span className="text-xs text-neutral-400 uppercase tracking-widest">{b.num}</span>
              <h4 className="text-xl font-semibold mt-4 mb-3 text-neutral-900">{b.title}</h4>
              <p className="text-neutral-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 lg:p-12 bg-neutral-900 text-white">
          <h3 className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Как заказать</h3>
          <ol className="space-y-4 text-lg">
            <li><span className="text-neutral-400 mr-3">1.</span>Нажмите «Заказать отзывы» — откроется страница оплаты DonationAlerts</li>
            <li><span className="text-neutral-400 mr-3">2.</span>В сообщении к платежу укажите: ссылку на вашу компанию в Яндекс.Картах, нужное количество отзывов и пожелания к содержанию (тон, ключевые слова, оценка)</li>
            <li><span className="text-neutral-400 mr-3">3.</span>Мы свяжемся с вами и согласуем детали перед стартом</li>
          </ol>
          <a
            href="https://www.donationalerts.com/r/aura_ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-black uppercase tracking-widest text-sm px-8 py-4 font-semibold hover:bg-neutral-200 transition-colors duration-300"
          >
            Заказать отзывы
          </a>
        </div>
      </div>
    </div>
  );
}
