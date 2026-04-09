export default function Featured() {
  const benefits = [
    { num: "01", title: "Живые аккаунты", desc: "Все отзывы пишутся с реальных профилей — никаких ботов и фейков. Яндекс не сможет их отфильтровать." },
    { num: "02", title: "Без риска блокировки", desc: "Работаем аккуратно: постепенный прирост, естественный темп публикаций." },
    { num: "03", title: "Любая тематика", desc: "Ресторан, салон, магазин, клиника — адаптируем текст под вашу нишу." },
    { num: "04", title: "Быстрый результат", desc: "Первые отзывы появляются уже через 24–48 часов после оплаты." },
  ];

  const prices = [
    { count: "5 отзывов", price: "от 2 500 ₽", note: "Стартовый пакет" },
    { count: "10 отзывов", price: "от 4 500 ₽", note: "Популярный" },
    { count: "20 отзывов", price: "от 8 000 ₽", note: "Максимальный эффект" },
    { count: "Индивидуально", price: "по запросу", note: "Любое количество" },
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

        <div className="mt-16">
          <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-8">Стоимость</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
            {prices.map((p) => (
              <div key={p.count} className="bg-white p-8 flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-neutral-400">{p.note}</span>
                <h4 className="text-2xl font-bold text-neutral-900 mt-2">{p.price}</h4>
                <p className="text-neutral-500 text-sm">{p.count}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 lg:p-12 bg-neutral-900 text-white">
          <h3 className="uppercase text-sm tracking-widest text-neutral-400 mb-6">Как заказать</h3>
          <ol className="space-y-5 text-lg">
            <li className="flex gap-4">
              <span className="text-neutral-400 shrink-0 font-mono">1.</span>
              <span>Нажмите «Заказать отзывы» — откроется страница оплаты DonationAlerts</span>
            </li>
            <li className="flex gap-4">
              <span className="text-neutral-400 shrink-0 font-mono">2.</span>
              <span>
                В сообщении к платежу обязательно укажите:
                <ul className="mt-3 space-y-1.5 text-base text-neutral-300 list-none ml-0">
                  <li className="flex gap-2"><span className="text-neutral-500">—</span> ссылку на вашу компанию в Яндекс.Картах</li>
                  <li className="flex gap-2"><span className="text-neutral-500">—</span> нужное количество отзывов</li>
                  <li className="flex gap-2"><span className="text-neutral-500">—</span> желаемый тон и ключевые слова</li>
                  <li className="flex gap-2"><span className="text-neutral-500">—</span> нужную оценку (например, 5 звёзд)</li>
                  <li className="flex gap-2"><span className="text-neutral-500">—</span> любые пожелания к содержанию</li>
                </ul>
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-neutral-400 shrink-0 font-mono">3.</span>
              <span>Мы свяжемся с вами и согласуем детали перед стартом</span>
            </li>
          </ol>
          <a
            href="https://www.donationalerts.com/r/aura_ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-white text-black uppercase tracking-widest text-sm px-10 py-4 font-semibold hover:bg-neutral-200 transition-colors duration-300"
          >
            Заказать отзывы
          </a>
        </div>
      </div>
    </div>
  );
}
