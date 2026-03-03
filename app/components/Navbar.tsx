"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-md">
          <img src="/logo.png" alt="Shreedhar Masale Logo" className="h-8 sm:h-10 w-auto object-contain" />
          <span className="text-orange-600 font-bold text-lg sm:text-xl">Shreedhar Masale</span>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm sm:text-base">
            <li><a href="/#home" className="hover:bg-white/20 px-3 py-2 rounded transition">Home</a></li>
            <li><a href="/#about" className="hover:bg-white/20 px-3 py-2 rounded transition">About</a></li>
            <li><a href="/#contact" className="hover:bg-white/20 px-3 py-2 rounded transition">Contact</a></li>
            <li><a href="/#latest" className="hover:bg-white/20 px-3 py-2 rounded transition">Latest</a></li>
          </ul>
          <Link href="/cart" className="relative hover:bg-white/20 p-2 rounded transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
