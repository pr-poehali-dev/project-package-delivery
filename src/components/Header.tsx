interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold uppercase tracking-[0.3em]">AURA</div>
        <nav className="flex gap-8">
          <a
            href="#how"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Как заказать
          </a>
          <a
            href="https://www.donationalerts.com/r/aura_ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white/40 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm px-4 py-1.5 rounded-full"
          >
            Заказать
          </a>
        </nav>
      </div>
    </header>
  );
}