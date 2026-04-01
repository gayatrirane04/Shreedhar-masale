"use client";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useRef } from "react";

export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, totalAmount, clearCart } = useCart();
  const invoiceRef = useRef<HTMLDivElement>(null);

  const generateInvoice = () => {
    const invoiceWindow = window.open('', '_blank');
    if (!invoiceWindow) return;

    const invoiceHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Order Invoice - Shreedhar Masale</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
          .header { text-align: center; border-bottom: 3px solid #ea580c; padding-bottom: 20px; margin-bottom: 30px; }
          .header h1 { color: #ea580c; margin: 0; }
          .header p { color: #666; margin: 5px 0; }
          .order-details { margin: 30px 0; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #f97316; color: white; }
          .total-row { font-weight: bold; font-size: 18px; background: #fff7ed; }
          .footer { margin-top: 40px; text-align: center; color: #666; border-top: 2px solid #ddd; padding-top: 20px; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🌶️ Shreedhar Masale</h1>
          <p>The Authentic taste of Konkan</p>
          <p>Phone: 9422024902 | Email: sales.shreedharmasale@gmail.com</p>
        </div>
        <div class="order-details">
          <h2>Order Summary</h2>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-IN')}</p>
          <p><strong>Order ID:</strong> SM${Date.now().toString().slice(-8)}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Variant</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${cart.map(item => `
              <tr>
                <td>${item.name}</td>
                <td>${item.variant}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${item.price * item.quantity}</td>
              </tr>
            `).join('')}
            <tr class="total-row">
              <td colspan="4" style="text-align: right;">Total Amount:</td>
              <td>₹${totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <div class="footer">
          <p>Thank you for your order!</p>
          <p>For any queries, contact us at 9422024902</p>
          <button onclick="window.print()" style="background: #f97316; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-top: 20px;">Print Invoice</button>
        </div>
      </body>
      </html>
    `;

    invoiceWindow.document.write(invoiceHTML);
    invoiceWindow.document.close();
  };

  const handleCheckout = () => {
    const orderId = `SM${Date.now().toString().slice(-8)}`;
    const date = new Date().toLocaleDateString('en-IN');
    const itemLines = cart.map(item =>
      `  - ${item.name} (${item.variant}) x${item.quantity} = ₹${item.price * item.quantity}`
    ).join('%0A');

    const message =
      `Hi, I want to place an order:%0A%0A` +
      `*SHREEDHAR MASALE - ORDER INVOICE*%0A` +
      `--------------------------------%0A` +
      `*Order ID:* ${orderId}%0A` +
      `*Date:* ${date}%0A` +
      `--------------------------------%0A` +
      `*Items Ordered:*%0A` +
      `${itemLines}%0A%0A` +
      `--------------------------------%0A` +
      `*Total Amount: ₹${totalAmount}*%0A` +
      `--------------------------------%0A` +
      `_Shreedhar Masale - The Authentic taste of Konkan_`;

    window.open(`https://wa.me/919422024902?text=${message}`, '_blank');
    generateInvoice();
    clearCart();
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-amber-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <button onClick={() => router.push("/")} className="text-orange-600 font-semibold hover:underline">
            &larr; Continue Shopping
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-800 mb-4">Your cart is empty</p>
            <button onClick={() => router.push("/")} className="bg-orange-600 text-white px-6 py-2 rounded-lg">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-700">{item.variant}</p>
                    <p className="text-orange-600 font-bold">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="bg-gray-200 text-black px-3 py-1 rounded font-bold">-</button>
                    <span className="font-semibold text-gray-800">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 text-black px-3 py-1 rounded font-bold">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600 font-semibold">Remove</button>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-100 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-orange-200">
              <div className="flex justify-between text-xl font-bold mb-4 text-gray-800">
                <span>Total:</span>
                <span className="text-orange-600">₹{totalAmount}</span>
              </div>
              <div className="flex items-center justify-between mb-4 p-3 bg-white rounded-lg border border-orange-100">
                <span className="text-sm text-gray-600 font-medium">💳 View Payment Policy</span>
                <a href="/payment-policy" className="text-orange-600 font-semibold text-sm hover:underline">📄 Know More</a>
              </div>
              <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2 mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order via WhatsApp
              </button>
              <a
                href={`mailto:sales.shreedharmasale@gmail.com?subject=New Order - Shreedhar Masale&body=Hi, I want to place an order:%0A%0A${cart.map(item => `${item.name} (${item.variant}) x${item.quantity} = ₹${item.price * item.quantity}`).join('%0A')}%0A%0ATotal: ₹${totalAmount}`}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Order via Email
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
