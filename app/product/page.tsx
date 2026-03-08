"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

const productVariants: { [key: string]: { id: string; label: string; price: number }[] } = {
  "Malvani Bhajka Masala": [
    { id: "250g", label: "250g", price: 266 },
    { id: "500g", label: "500g", price: 493 },
    { id: "1kg", label: "1kg", price: 939 },
  ],
  "Malvani Macchi Masala": [
    { id: "250g", label: "250g", price: 227 },
    { id: "500g", label: "500g", price: 416 },
    { id: "1kg", label: "1kg", price: 787 },
  ],
  "Special Malvani Chicken Masala": [
    { id: "250g", label: "250g", price: 319 },
    { id: "500g", label: "500g", price: 599 },
    { id: "1kg", label: "1kg", price: 1150 },
  ],
  "Pavbhaji Masala": [
    { id: "250g", label: "250g", price: 274 },
    { id: "500g", label: "500g", price: 510 },
    { id: "1kg", label: "1kg", price: 973 },
  ],
  "Kulith Pith": [
    { id: "250g", label: "250g", price: 127 },
    { id: "500g", label: "500g", price: 238 },
    { id: "1kg", label: "1kg", price: 444 },
  ],
  "Vade Pith": [
    { id: "500g", label: "500g", price: 154 },
    { id: "1kg", label: "1kg", price: 279 },
  ],
  "Gavathi Halad": [
    { id: "250g", label: "250g", price: 137 },
    { id: "500g", label: "500g", price: 258 },
    { id: "1kg", label: "1kg", price: 487 },
  ],
  "Kohala Sandage": [
    { id: "250g", label: "250g", price: 396 },
    { id: "500g", label: "500g", price: 776 },
    { id: "1kg", label: "1kg", price: 1519 },
  ],
  default: [
    { id: "250g", label: "250g", price: 150 },
    { id: "500g", label: "500g", price: 280 },
    { id: "1kg", label: "1kg", price: 520 },
  ],
};

export default function ProductDetail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useCart();

  const productData = searchParams.get("data");
  const product = productData ? JSON.parse(decodeURIComponent(productData)) : {
    title: "Malvani Bhajka Masala",
    image: "https://images.unsplash.com/photo-1599909533730-f9d7e2c1c87d?w=600&q=80",
    description: "Premium blend of aromatic spices perfect for authentic Indian curries and gravies."
  };

  const variants = productVariants[product.title] || productVariants.default;
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: `${product.title}-${selectedVariant.id}`,
      name: product.title,
      variant: selectedVariant.label,
      price: selectedVariant.price,
      quantity,
      image: product.image
    });
    alert("Added to cart!");
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <button onClick={() => router.back()} className="text-orange-600 mb-4 font-semibold">&larr; Back</button>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-4 rounded-xl shadow-lg flex items-center justify-center">
            <img src={product.image} alt="Product" className="w-full h-auto max-h-96 object-contain rounded-xl" />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Select Variant:</h3>
              <div className={`grid gap-2 ${variants.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`border-2 py-2 rounded-lg font-semibold transition text-gray-800 ${
                      selectedVariant.id === v.id ? "border-orange-600 bg-orange-50" : "border-gray-300 bg-white"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-2xl font-bold text-orange-600">₹{selectedVariant.price}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Quantity:</h3>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="bg-gray-200 text-gray-800 px-4 py-2 rounded font-semibold">-</button>
                <span className="text-xl font-semibold text-gray-800">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded font-semibold">+</button>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={handleAddToCart} className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition">
                Add to Cart
              </button>
              <button onClick={() => router.push("/cart")} className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
