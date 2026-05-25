import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';
import ArcGalleryHero from '@/components/ArcGalleryHero';

const SPARKLES = [
  { top: '8%',  left: '6%',  delay: '0s',   size: 9  },
  { top: '20%', left: '91%', delay: '0.8s', size: 7  },
  { top: '55%', left: '4%',  delay: '1.6s', size: 8  },
  { top: '70%', left: '87%', delay: '0.4s', size: 6  },
  { top: '35%', left: '94%', delay: '2s',   size: 8  },
  { top: '80%', left: '12%', delay: '1.2s', size: 6  },
  { top: '15%', left: '72%', delay: '0.6s', size: 7  },
];

type WowHeroProps = {
  images: string[];
};

const WowHero = ({ images }: WowHeroProps) => {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const anim = (delay: string, duration = '0.9s') =>
    visible
      ? `slide-up ${duration} ${delay} cubic-bezier(0.16,1,0.3,1) forwards`
      : 'none';

  const fadeIn = (delay: string) =>
    visible ? `fade-in 0.8s ${delay} ease-out forwards` : 'none';

  return (
    <div ref={heroRef} className="relative">

      {/* ═══ HERO ═══ */}
      <section className="relative hero-gradient overflow-hidden flex flex-col">

        {/* Фоновые градиентные пятна */}
        <div
          className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(180,100,130,0.15) 0%, transparent 70%)',
            transform: `translateY(${scrollY * 0.12}px)`,
          }}
        />
        <div
          className="absolute bottom-[5%] left-[-60px] w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(240,160,185,0.12) 0%, transparent 70%)',
            transform: `translateY(${scrollY * -0.08}px)`,
          }}
        />

        {/* Блёстки — только на md+ */}
        <div className="hidden sm:block">
          {SPARKLES.map((s, i) => (
            <div
              key={i}
              className="absolute pointer-events-none animate-sparkle"
              style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            >
              <svg width={s.size} height={s.size} viewBox="0 0 10 10">
                <path d="M5 0 L5.5 4.5 L10 5 L5.5 5.5 L5 10 L4.5 5.5 L0 5 L4.5 4.5 Z" fill="#c4748e" opacity="0.6" />
              </svg>
            </div>
          ))}
        </div>

        {/* ── Шапка ── */}
        <header className="relative z-50 w-full px-4 sm:px-6 pt-4 sm:pt-5">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="opacity-0" style={{ animation: fadeIn('0.2s') }}>
              <span className="font-display text-base sm:text-lg font-light tracking-[0.12em] text-foreground/80">
                Lumière{' '}
                <span className="text-primary font-semibold">by Alexandra</span>
              </span>
            </div>
            <div className="opacity-0" style={{ animation: fadeIn('0.4s') }}>
              <a
                href="tel:+79881388714"
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full glass-card text-xs sm:text-sm text-primary font-medium hover:shadow-md transition-all whitespace-nowrap"
              >
                <Icon name="Phone" size={13} />
                <span className="hidden xs:inline">+7 988 138-87-14</span>
                <span className="xs:hidden">Позвонить</span>
              </a>
            </div>
          </div>
        </header>

        {/* ── Заголовок ── */}
        <div className="relative z-10 text-center px-4 mt-6 sm:mt-8 md:mt-10">
          <div className="opacity-0" style={{ animation: anim('0.3s') }}>
            <p className="text-[9px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-primary/60 font-medium mb-3 sm:mb-4">
              Визажист · Москва · Выезд к клиенту
            </p>
          </div>
          <div className="opacity-0" style={{ animation: anim('0.5s', '1.1s') }}>
            <h1 className="font-display leading-none font-light tracking-tight">
              <span className="block text-foreground/25 text-[11px] sm:text-[14px] tracking-[0.5em] uppercase font-sans font-light mb-2 sm:mb-3">
                makeup artist
              </span>
              <span className="block text-shimmer font-semibold text-[52px] sm:text-[76px] md:text-[96px] lg:text-[112px]">
                Lumière
              </span>
              <span className="block text-foreground/70 italic text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] font-light mt-1">
                by Alexandra
              </span>
            </h1>
          </div>
        </div>

        {/* ── Галерея-дуга ── */}
        <div className="opacity-0 w-full" style={{ animation: fadeIn('0.7s') }}>
          <ArcGalleryHero
            images={images}
            startAngle={20}
            endAngle={160}
            radiusLg={420}
            radiusMd={310}
            radiusSm={210}
            cardSizeLg={136}
            cardSizeMd={106}
            cardSizeSm={80}
          />
        </div>

        {/* ── CTA под галереей ── */}
        <div
          className="relative z-20 text-center px-4 pb-12 sm:pb-14 md:pb-16 opacity-0"
          style={{ animation: anim('1s') }}
        >
          <p className="text-sm sm:text-base text-foreground/50 max-w-[260px] sm:max-w-sm mx-auto mb-6 font-light leading-relaxed">
            Каждый образ — это история.<br className="hidden sm:block" />
            Нежная, выразительная, неповторимая.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+79881388714"
              className="animate-glow w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-0.5 transform duration-200"
            >
              <Icon name="Phone" size={15} />
              Записаться на макияж
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-card text-foreground/60 text-sm font-medium hover:shadow-md transition-all hover:-translate-y-0.5 transform duration-200"
            >
              Смотреть работы
              <Icon name="ArrowDown" size={14} />
            </a>
          </div>
        </div>

        {/* Скролл-хинт */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-scroll-hint opacity-40 pointer-events-none">
          <div className="w-px h-6 bg-gradient-to-b from-transparent to-primary/50" />
          <Icon name="ChevronDown" size={11} className="text-primary/50" />
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <div
        className="bg-white/90 backdrop-blur border-y border-border/40 py-5 sm:py-6 px-4 opacity-0"
        style={{ animation: fadeIn('1.3s') }}
      >
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 text-center">
          {[
            { num: '5+',   label: 'лет опыта'           },
            { num: '500+', label: 'довольных клиенток'   },
            { num: '100%', label: 'стойкий результат'    },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-xl sm:text-3xl font-semibold text-primary">{s.num}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WowHero;
