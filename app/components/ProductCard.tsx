"use client";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  originalPrice: string;
  discount: string;
  image: string;
}

export default function ProductCard({ title, price, description, originalPrice, discount, image }: ProductCardProps) {
  const productData = encodeURIComponent(JSON.stringify({ title, image, description }));
  
  return (
    <Link href={`/product?data=${productData}`}>
      <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all h-72 sm:h-96 cursor-pointer">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 bg-white rounded-md p-1 sm:p-1.5 shadow-lg">
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-green-600 rounded flex items-center justify-center">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="relative h-full flex flex-col justify-between p-3 sm:p-6">
          <div className="flex justify-end">
            <div className="relative w-16 h-16 sm:w-28 sm:h-28">
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-70 animate-pulse"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center text-4xl sm:text-7xl animate-pulse">
                💥
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-extrabold text-xs sm:text-lg drop-shadow-2xl">{discount}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2 leading-tight">{title}</h3>
            <p className="text-gray-200 text-xs sm:text-sm mb-2 sm:mb-3 hidden sm:block">{description}</p>
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="text-gray-300 line-through text-xs sm:text-sm">{originalPrice}</span>
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-sm sm:text-lg font-bold shadow-md">{price}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-1.5 sm:py-2 px-4 rounded-lg transition text-sm sm:text-base">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
