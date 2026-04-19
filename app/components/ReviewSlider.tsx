"use client";
import { useState } from "react";
import reviewImages from "../data/reviews";

export default function ReviewSlider() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (reviewImages.length === 0) {
    return <div className="text-center py-8 text-gray-400">No reviews yet.</div>;
  }

  // Duplicate images for seamless infinite loop
  const doubled = [...reviewImages, ...reviewImages];

  return (
    <div>
      {/* Auto-scrolling strip */}
      {!showAll && (
        <div className="overflow-hidden">
          <div className="flex gap-3 animate-marquee">
            {doubled.map((img, i) => (
              <div
                key={i}
                onClick={() => setLightbox(img)}
                className="min-w-[140px] h-[180px] sm:min-w-[180px] sm:h-[220px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-md"
              >
                <img
                  src={`/reviews/${img}`}
                  alt={`Review ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      {showAll && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 sm:gap-2">
          {reviewImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(img)}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition shadow-sm"
            >
              <img
                src={`/reviews/${img}`}
                alt={`Review ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Show More / Show Less */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-2.5 rounded-full font-semibold hover:scale-105 transition shadow-lg text-sm"
        >
          {showAll ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={`/reviews/${lightbox}`}
            alt="Review"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
