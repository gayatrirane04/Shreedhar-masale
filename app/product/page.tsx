"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { allProducts, productVariants, productDetails } from "../data/products";

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
  const [readMore, setReadMore] = useState(false);
  const details = productDetails[product.title];

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
        {details && (
          <div className="mt-10 border border-orange-100 rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-6 py-4 border-b border-orange-100">
              <h2 className="text-xl font-bold text-gray-800">Features &amp; Details</h2>
            </div>
            <div className="divide-y divide-orange-50">
              {details.features.map((f) => (
                <div key={f.label} className="flex gap-4 px-6 py-3">
                  <span className="text-base font-semibold text-orange-700 min-w-[140px]">{f.label}</span>
                  <span className="text-base text-gray-700">{f.value}</span>
                </div>
              ))}
            </div>
            {readMore && (
              <div className="px-6 py-4 bg-orange-50/40 border-t border-orange-100 space-y-2">
                {details.fullDescription.split('\n').map((line, i) => {
                  if (!line.trim()) return <div key={i} className="h-2" />;
                  const isHeading = !line.startsWith('-') && !line.startsWith('(') && line === line.trimStart() && !line.startsWith('Perfect') && !line.startsWith('This') && !line.startsWith('Just') && !line.startsWith('Experience') && !line.startsWith('Produced') && !line.startsWith('Crafted');
                  return isHeading
                    ? <p key={i} className="text-base font-bold text-gray-900">{line}</p>
                    : <p key={i} className="text-base text-gray-600 leading-relaxed">{line}</p>;
                })}
              </div>
            )}
            <div className="px-6 py-3 border-t border-orange-100">
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-orange-600 font-semibold text-base hover:underline"
              >
                {readMore ? "Show Less ▲" : "Read More ▼"}
              </button>
            </div>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">You may also like</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {allProducts.filter(p => p.title !== product.title).map((p) => (
              <Link
                key={p.title}
                href={`/product?data=${encodeURIComponent(JSON.stringify({ title: p.title, image: p.image, description: p.description }))}`}
                className="min-w-[160px] max-w-[160px] flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all relative"
              >
                <img src={p.image} alt={p.title} className="w-full h-32 object-cover" />
                <div className="p-2 bg-white">
                  <p className="text-xs font-semibold text-gray-800 leading-tight line-clamp-2">{p.title}</p>
                  <p className="text-orange-600 font-bold text-sm mt-1">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
