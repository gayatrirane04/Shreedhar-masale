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
      <div className="rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer bg-white overflow-hidden">
        
        {/* Image section - main focus */}
        <div className="relative bg-white p-3">
          <img src={image} alt={title} className="w-full h-52 object-contain rounded-lg" />

          {/* Veg icon */}
          <div className="absolute top-4 left-4 bg-white rounded-md p-1 shadow-lg">
            <div className="w-5 h-5 border-2 border-green-600 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
          </div>

          {/* Discount badge */}
          <div className="absolute top-4 right-4">
            <div className="relative w-10 h-10">
              <img src="/discount.png" alt="discount" className="w-full h-full object-contain" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-[9px] drop-shadow-2xl leading-none pb-1">{discount}</span>
            </div>
          </div>
        </div>

        {/* Text section - always visible below image */}
        <div className="px-3 pb-3">
          <h3 className="text-sm font-bold text-gray-800 mb-1 leading-tight">{title}</h3>
          <p className="text-gray-500 text-xs mb-2 line-clamp-2">{description}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-400 line-through text-xs">{originalPrice}</span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full text-sm font-bold">{price}</span>
          </div>
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-1.5 px-4 rounded-lg text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}
