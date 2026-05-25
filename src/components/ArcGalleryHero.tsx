import { useEffect, useState } from 'react';

type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
};

const ArcGalleryHero = ({
  images,
  startAngle = -110,
  endAngle = 110,
  radiusLg = 340,
  radiusMd = 280,
  radiusSm = 200,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = '',
}: ArcGalleryHeroProps) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: dimensions.radius * 1.15 }}
    >
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
        {images.map((src, i) => {
          const angle = startAngle + step * i;
          const angleRad = (angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * dimensions.radius;
          const y = Math.sin(angleRad) * dimensions.radius;

          return (
            <div
              key={i}
              className="absolute opacity-0 animate-fade-in-up"
              style={{
                width: dimensions.cardSize,
                height: dimensions.cardSize,
                left: `calc(50% + ${x}px)`,
                bottom: `${y}px`,
                transform: 'translate(-50%, 50%)',
                animationDelay: `${i * 100}ms`,
                animationFillMode: 'forwards',
                zIndex: count - i,
              }}
            >
              <div
                className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-white/60 bg-card transition-transform hover:scale-105 w-full h-full"
                style={{ transform: `rotate(${angle / 4}deg)` }}
              >
                <img
                  src={src}
                  alt=""
                  className="block w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArcGalleryHero;
