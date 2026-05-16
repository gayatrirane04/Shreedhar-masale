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
      <div className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group">
        
        {/* Image - fully visible with padding */}
        <div className="bg-white p-3">
          <img src={image} alt={title} className="w-full h-64 object-contain rounded-lg" />
        </div>

        {/* Veg icon - always visible */}
        <div className="absolute top-2 left-2 z-20 bg-white rounded-md p-1 shadow-lg">
          <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          </div>
        </div>

        {/* Discount badge - always visible */}
        <div className="absolute top-2 right-2 z-20">
          <div className="relative w-10 h-10">
            <img src="/discount.png" alt="discount" className="w-full h-full object-contain" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-[9px] drop-shadow-2xl leading-none pb-1">{discount}</span>
          </div>
        </div>

        {/* Hover overlay with text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-sm font-bold text-white mb-1 leading-tight">{title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-300 line-through text-xs">{originalPrice}</span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full text-sm font-bold shadow-md">{price}</span>
          </div>
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-1.5 px-4 rounded-lg transition text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}
