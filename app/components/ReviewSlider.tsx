"use client";
import { useState, useRef, useEffect } from "react";
import reviewImages from "../data/reviews";

export default function ReviewSlider() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const lightboxIndexRef = useRef<number | null>(null);

  // Keep ref in sync with state
  useEffect(() => {
    lightboxIndexRef.current = lightboxIndex;
  }, [lightboxIndex]);

  // Attach native touch events to bypass passive listener restriction
  useEffect(() => {
    const el = lightboxRef.current;
    if (!el) return;

    const onStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };

    const onMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const onEnd = (e: TouchEvent) => {
      const diff = startX.current - e.changedTouches[0].clientX;
      const current = lightboxIndexRef.current;
      if (current === null) return;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setLightboxIndex((current + 1) % reviewImages.length);
        } else {
          setLightboxIndex((current - 1 + reviewImages.length) % reviewImages.length);
        }
      }
    };

    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: false });
    el.addEventListener('touchend', onEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onEnd);
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  if (reviewImages.length === 0) {
    return <div className="text-center py-8 text-gray-400">No reviews yet.</div>;
  }

  const doubled = [...reviewImages, ...reviewImages];

  return (
    <div>
      {!showAll && (
        <div className="overflow-hidden">
          <div className="flex gap-3 animate-marquee">
            {doubled.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightboxIndex(i % reviewImages.length)}
                className="min-w-[140px] h-[180px] sm:min-w-[180px] sm:h-[220px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-md"
              >
                <img src={`/reviews/${img}`} alt={`Review ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      {showAll && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 sm:gap-2">
          {reviewImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition shadow-sm"
            >
              <img src={`/reviews/${img}`} alt={`Review ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-2.5 rounded-full font-semibold hover:scale-105 transition shadow-lg text-sm"
        >
          {showAll ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>

      {lightboxIndex !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 bg-black/95 z-50 flex flex-col"
        >
          <div className="flex items-center justify-between px-4 py-3 flex-shrink-0">
            <p className="text-white text-sm font-medium">{lightboxIndex + 1} / {reviewImages.length}</p>
            <button className="text-white text-3xl font-bold leading-none" onClick={() => setLightboxIndex(null)}>✕</button>
          </div>

          <div className="flex-1 flex items-center justify-center px-4 overflow-hidden">
            <img
              src={`/reviews/${reviewImages[lightboxIndex]}`}
              alt="Review"
              className="max-w-full max-h-full object-contain rounded-xl"
              draggable={false}
            />
          </div>

          <div className="flex justify-center gap-1.5 py-4 flex-shrink-0">
            {reviewImages.map((_, i) => (
              <div
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${i === lightboxIndex ? 'bg-orange-500 w-5' : 'bg-white/40 w-2'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
