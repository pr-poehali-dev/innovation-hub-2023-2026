import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';
import ArcGalleryHero from '@/components/ArcGalleryHero';

const SPARKLES = [
  { top: '12%', left: '8%', delay: '0s', size: 10 },
  { top: '25%', left: '92%', delay: '0.8s', size: 7 },
  { top: '60%', left: '5%', delay: '1.6s', size: 8 },
  { top: '75%', left: '88%', delay: '0.4s', size: 6 },
  { top: '40%', left: '95%', delay: '2s', size: 9 },
  { top: '85%', left: '15%', delay: '1.2s', size: 7 },
  { top: '18%', left: '75%', delay: '0.6s', size: 8 },
  { top: '50%', left: '2%', delay: '1.9s', size: 6 },
];

type WowHeroProps = {
  images: string[];
};

const WowHero = ({ images }: WowHeroProps) => {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative">

      {/* ═══ FULLSCREEN HERO ═══ */}
      <section className="relative min-h-screen hero-gradient overflow-hidden flex flex-col">

        {/* Декоративные размытые блоки */}
        <div
          className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(180,100,130,0.18) 0%, transparent 70%)',
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(240,160,185,0.15) 0%, transparent 70%)',
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[500px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(245,205,220,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Блёстки */}
        {SPARKLES.map((s, i) => (
          <div
            key={i}
            className="absolute pointer-events-none animate-sparkle"
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          >
            <svg width={s.size} height={s.size} viewBox="0 0 10 10">
              <path d="M5 0 L5.5 4.5 L10 5 L5.5 5.5 L5 10 L4.5 5.5 L0 5 L4.5 4.5 Z" fill="#c4748e" opacity="0.7" />
            </svg>
          </div>
        ))}

        {/* Шапка */}
        <header className="relative z-50 px-5 pt-5 flex items-center justify-between max-w-5xl mx-auto w-full">
          <div
            className="opacity-0"
            style={{
              animation: visible ? 'fade-in 0.8s 0.2s ease-out forwards' : 'none',
            }}
          >
            <span className="font-display text-lg font-light tracking-[0.15em] text-foreground/80">
              Lumière <span className="text-primary font-semibold">by Alexandra</span>
            </span>
          </div>
          <div
            className="opacity-0"
            style={{
              animation: visible ? 'fade-in 0.8s 0.5s ease-out forwards' : 'none',
            }}
          >
            <a
              href="tel:+79881388714"
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary font-medium hover:shadow-md transition-all"
            >
              <Icon name="Phone" size={14} />
              +7 988 138-87-14
            </a>
          </div>
        </header>

        {/* Центральный текст над галереей */}
        <div className="relative z-10 text-center px-4 mt-8 mb-2">
          <div
            className="opacity-0"
            style={{ animation: visible ? 'slide-up 1s 0.3s cubic-bezier(0.16,1,0.3,1) forwards' : 'none' }}
          >
            <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-primary/70 font-medium mb-4">
              Визажист · Москва · Выезд к клиенту
            </p>
          </div>

          <div
            className="opacity-0"
            style={{ animation: visible ? 'slide-up 1.1s 0.5s cubic-bezier(0.16,1,0.3,1) forwards' : 'none' }}
          >
            <h1 className="font-display text-[56px] sm:text-[80px] lg:text-[108px] leading-[0.9] font-light tracking-tight">
              <span className="block text-foreground/20 text-[0.45em] tracking-[0.5em] uppercase font-sans font-light mb-2">
                makeup artist
              </span>
              <span className="block text-shimmer font-semibold">Lumière</span>
              <span className="block text-foreground/80 italic text-[0.6em] font-light">
                by Alexandra
              </span>
            </h1>
          </div>
        </div>

        {/* ARC Gallery */}
        <div
          className="opacity-0 flex-1"
          style={{ animation: visible ? 'fade-in 1.2s 0.7s ease-out forwards' : 'none' }}
        >
          <ArcGalleryHero
            images={images}
            startAngle={20}
            endAngle={160}
            radiusLg={440}
            radiusMd={320}
            radiusSm={230}
            cardSizeLg={140}
            cardSizeMd={108}
            cardSizeSm={84}
          />
        </div>

        {/* Нижний CTA поверх галереи */}
        <div
          className="relative z-20 text-center pb-10 -mt-24 sm:-mt-32 lg:-mt-40 px-4"
          style={{ animation: visible ? 'slide-up 1s 1.1s cubic-bezier(0.16,1,0.3,1) forwards' : 'none', opacity: 0 }}
        >
          <p className="text-sm sm:text-base text-foreground/55 max-w-xs sm:max-w-sm mx-auto mb-6 font-light leading-relaxed">
            Каждый образ — это история.<br />Нежная, выразительная, неповторимая.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+79881388714"
              className="animate-glow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-0.5 transform duration-200"
            >
              <Icon name="Phone" size={15} />
              Записаться на макияж
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-card text-foreground/70 text-sm font-medium hover:shadow-md transition-all hover:-translate-y-0.5 transform duration-200"
            >
              Смотреть работы
              <Icon name="ArrowDown" size={14} />
            </a>
          </div>
        </div>

        {/* Скролл-хинт */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-scroll-hint opacity-50">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-primary/60" />
          <Icon name="ChevronDown" size={12} className="text-primary/60" />
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <div
        className="relative z-10 bg-white/90 backdrop-blur border-y border-border/50 py-5 px-4"
        style={{ animation: visible ? 'fade-in 1s 1.4s ease-out forwards' : 'none', opacity: 0 }}
      >
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { num: '5+', label: 'лет опыта' },
            { num: '500+', label: 'довольных клиенток' },
            { num: '100%', label: 'стойкий результат' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-primary">{s.num}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WowHero;
