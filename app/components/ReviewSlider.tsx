"use client";
import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best quality masale! The aroma and taste are authentic. My family loves the Garam Masala.",
    location: "Mumbai"
  },
  {
    name: "Rajesh Patel",
    rating: 5,
    text: "Excellent products! The Biryani Masala makes restaurant-quality biryani at home.",
    location: "Ahmedabad"
  },
  {
    name: "Anita Desai",
    rating: 5,
    text: "Traditional taste just like my grandmother used to make. Highly recommended!",
    location: "Pune"
  },
  {
    name: "Vikram Singh",
    rating: 5,
    text: "Fresh and aromatic spices. The packaging keeps them fresh for long time.",
    location: "Delhi"
  }
];

export default function ReviewSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += 0.5;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    const interval = setInterval(scroll, 20);
    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={scrollRef} className="flex gap-6 overflow-x-hidden cursor-pointer">
        {[...reviews, ...reviews].map((review, index) => (
          <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl shadow-2xl p-8">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-6 h-6 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-base italic text-center mb-4">"{review.text}"</p>
            <p className="text-orange-600 font-bold text-center">{review.name}</p>
            <p className="text-gray-500 text-sm text-center">{review.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
