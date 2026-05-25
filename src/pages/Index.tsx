import { useState } from "react";
import Icon from "@/components/ui/icon";
import WowHero from "@/components/WowHero";

const services = [
  {
    name: "Дневной",
    desc: "Лёгкий свежий образ с акцентом на естественную красоту",
    price: "3 500 ₽",
  },
  {
    name: "Свадебный",
    desc: "Нежный, утончённый и стойкий макияж в самый важный день",
    price: "5 000 ₽",
    highlight: true,
  },
  {
    name: "Вечерний",
    desc: "Выразительный образ для особенных событий",
    price: "3 500 ₽",
  },
  {
    name: "Лифтинг",
    desc: "Визуальное освежение и мягкий лифтинг лица. Лёгкие текстуры, деликатная коррекция",
    price: "3 500 ₽",
  },
  {
    name: "Образ для фотосессии",
    desc: "Макияж + лёгкая укладка",
    price: "5 000 ₽",
  },
  {
    name: "Выезд к клиенту",
    desc: "В пределах МКАД",
    price: "+ 2 000 ₽",
  },
];

const aboutImage = "https://cdn.poehali.dev/projects/1b096a44-0c81-4524-82a9-090523ac4c74/bucket/85b0535e-ca79-49bd-b958-70ecacfc11f8.png";

const portfolioImages = [
  "https://cdn.poehali.dev/projects/d1f29c46-c17d-48bd-954d-de2b0beb2c4a/bucket/b9957893-c4bc-414e-9a36-3c0540ba7673.JPG",
  "https://cdn.poehali.dev/projects/d1f29c46-c17d-48bd-954d-de2b0beb2c4a/bucket/5b43f160-495f-4836-82f5-08109ed7c4da.JPG",
  "https://cdn.poehali.dev/projects/1b096a44-0c81-4524-82a9-090523ac4c74/bucket/6bd233cf-4646-4f3e-8325-92299487afe1.JPG",
  "https://cdn.poehali.dev/projects/1b096a44-0c81-4524-82a9-090523ac4c74/bucket/4cd2d055-04b8-42ad-9fbb-f421641e81af.JPG",
  "https://cdn.poehali.dev/projects/1b096a44-0c81-4524-82a9-090523ac4c74/bucket/ccf64f94-cf4e-439f-b076-9462f639a342.JPG",
];

const Index = () => {
  const [selected, setSelected] = useState<string | null>("Свадебный");

  return (
    <main className="relative min-h-screen bg-background">

      {/* WOW Hero — галерея + анимации + CTA */}
      <WowHero images={portfolioImages} />

      {/* Обо мне */}
      <section className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-2/5 flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-primary/10 translate-x-3 translate-y-3" />
            <img
              src={aboutImage}
              alt="Александра — визажист"
              className="relative rounded-3xl w-full object-cover aspect-[3/4] shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-3">Обо мне</p>
          <h2 className="font-display text-4xl font-light text-foreground mb-4">Александра</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Профессиональный визажист с опытом создания образов для свадеб, фотосессий и особых событий. Работаю с каждой клиенткой индивидуально — чтобы макияж подчёркивал вашу естественную красоту.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Использую только проверенные бренды премиум-класса. Выезд в пределах МКАД.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            {["Свадебный", "Вечерний", "Лифтинг"].map((tag) => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Прайс */}
      <section className="bg-secondary/40 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium text-center mb-2">Стоимость</p>
          <h2 className="font-display text-4xl font-light text-foreground text-center mb-10">Прайс-лист</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => {
              const isActive = selected === s.name;
              return (
                <div
                  key={s.name}
                  onClick={() => setSelected(isActive ? null : s.name)}
                  className={`rounded-2xl p-5 flex flex-col gap-2 cursor-pointer transition-all duration-300 select-none ${
                    isActive
                      ? "bg-primary text-white shadow-xl scale-[1.02] ring-2 ring-primary/40"
                      : "bg-white border border-border hover:shadow-md hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className={`font-semibold text-base ${isActive ? "text-white" : "text-foreground"}`}>
                      {s.name}
                    </h3>
                    <Icon
                      name={isActive ? "Star" : "Gem"}
                      fallback="Star"
                      size={16}
                      className={isActive ? "text-white/70 flex-shrink-0 mt-0.5" : "text-primary flex-shrink-0 mt-0.5"}
                    />
                  </div>
                  <p className={`text-sm leading-relaxed flex-1 ${isActive ? "text-white/80" : "text-muted-foreground"}`}>
                    {s.desc}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className={`text-xl font-bold ${isActive ? "text-white" : "text-primary"}`}>
                      {s.price}
                    </p>
                    {isActive && (
                      <a
                        href="tel:+79881388714"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-white/90 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-all"
                      >
                        <Icon name="Phone" size={11} />
                        Записаться
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium text-center mb-2">Работы</p>
          <h2 className="font-display text-4xl font-light text-foreground text-center mb-10">Портфолио</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {portfolioImages.map((src, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl shadow-md ${i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`Работа ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="bg-foreground text-background py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-2">Контакты</p>
          <h2 className="font-display text-4xl font-light mb-3">Записаться</h2>
          <p className="text-background/60 mb-8">
            Свяжитесь со мной — обсудим ваш образ и выберем удобное время
          </p>
          <a
            href="tel:+79881388714"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
          >
            <Icon name="Phone" size={20} />
            +7 988 138-87-14
          </a>
          <p className="mt-4 text-background/40 text-sm">Александра · Москва, в пределах МКАД</p>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-foreground border-t border-background/10 py-4 text-center">
        <p className="text-background/30 text-xs">© 2025 Lumière by Alexandra · Визажист в Москве</p>
      </footer>
    </main>
  );
};

export default Index;