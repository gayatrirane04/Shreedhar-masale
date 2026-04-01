"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg shadow-md">
            <img src="/logo.png" alt="Shreedhar Masale Logo" className="h-8 w-auto object-contain" />
            <span className="text-orange-600 font-bold text-base sm:text-lg">Shreedhar Masale</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden hover:bg-white/20 p-2 rounded transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <ul className="hidden md:flex gap-6 text-sm">
              <li><a href="/#home" className="hover:bg-white/20 px-3 py-2 rounded transition">Home</a></li>
              <li><a href="/#about" className="hover:bg-white/20 px-3 py-2 rounded transition">About</a></li>
              <li><a href="/#contact" className="hover:bg-white/20 px-3 py-2 rounded transition">Contact</a></li>
              <li><a href="/#reviews" className="hover:bg-white/20 px-3 py-2 rounded transition">Reviews</a></li>
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
        
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-2 mt-4 pb-2">
            <li><a href="/#home" onClick={() => setIsMenuOpen(false)} className="block hover:bg-white/20 px-3 py-2 rounded transition">Home</a></li>
            <li><a href="/#about" onClick={() => setIsMenuOpen(false)} className="block hover:bg-white/20 px-3 py-2 rounded transition">About</a></li>
            <li><a href="/#contact" onClick={() => setIsMenuOpen(false)} className="block hover:bg-white/20 px-3 py-2 rounded transition">Contact</a></li>
            <li><a href="/#reviews" onClick={() => setIsMenuOpen(false)} className="block hover:bg-white/20 px-3 py-2 rounded transition">Reviews</a></li>
            <li><a href="/#latest" onClick={() => setIsMenuOpen(false)} className="block hover:bg-white/20 px-3 py-2 rounded transition">Latest</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
