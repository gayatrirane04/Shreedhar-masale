"use client";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";

export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, totalAmount, clearCart } = useCart();
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [orderId, setOrderId] = useState('');
  const [orderDate, setOrderDate] = useState('');

  useEffect(() => {
    setOrderId(`SM${Date.now().toString().slice(-8)}`);
    setOrderDate(new Date().toLocaleDateString('en-IN'));
  }, []);

  const generateAndDownloadInvoice = async (): Promise<void> => {
    if (!invoiceRef.current) return;
    await new Promise(r => setTimeout(r, 100));
    const canvas = await html2canvas(invoiceRef.current, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Shreedhar-Masale-Invoice-${orderId}.png`;
    link.href = imgData;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCheckout = async () => {
    await generateAndDownloadInvoice();

    const itemLines = cart.map(item =>
      `  - ${item.name} (${item.variant}) x${item.quantity} = ₹${item.price * item.quantity}`
    ).join('%0A');

    const message =
      `Hi, I want to place an order:%0A%0A` +
      `*SHREEDHAR MASALE - ORDER INVOICE*%0A` +
      `--------------------------------%0A` +
      `*Order ID:* ${orderId}%0A` +
      `*Date:* ${orderDate}%0A` +
      `--------------------------------%0A` +
      `*Items Ordered:*%0A` +
      `${itemLines}%0A%0A` +
      `--------------------------------%0A` +
      `*Total Amount: ₹${totalAmount}*%0A` +
      `--------------------------------%0A` +
      `📎 _Invoice image has been downloaded. Please attach it to this chat for verification._%0A` +
      `_Shreedhar Masale - The Authentic taste of Konkan_`;

    window.open(`https://wa.me/919422024902?text=${message}`, '_blank');
    clearCart();
  };

  const handleEmailOrder = async () => {
    await generateAndDownloadInvoice();

    const itemLines = cart.map(item =>
      `${item.name} (${item.variant}) x${item.quantity} = \u20b9${item.price * item.quantity}`
    ).join('\n');

    const subject = encodeURIComponent(`New Order - Shreedhar Masale | Order ID: ${orderId}`);
    const body = encodeURIComponent(
      `Hi Shreedhar Masale Team,\n\n` +
      `I would like to place the following order:\n\n` +
      `ORDER DETAILS\n` +
      `---------------------------\n` +
      `Order ID: ${orderId}\n` +
      `Date: ${orderDate}\n\n` +
      `ITEMS ORDERED\n` +
      `---------------------------\n` +
      `${itemLines}\n\n` +
      `---------------------------\n` +
      `Total Amount: \u20b9${totalAmount}\n` +
      `---------------------------\n\n` +
      `Note: Invoice image has been downloaded. I will attach it to this email.\n\n` +
      `Please confirm my order and share payment details.\n\n` +
      `Thank you!`
    );

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      window.location.href = `intent://compose?to=sales.shreedharmasale@gmail.com&subject=${subject}&body=${body}#Intent;scheme=mailto;package=com.google.android.gm;end`;
    } else if (isMobile) {
      window.location.href = `mailto:sales.shreedharmasale@gmail.com?subject=${subject}&body=${body}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&to=sales.shreedharmasale@gmail.com&su=${subject}&body=${body}`, '_blank');
    }

    setTimeout(() => clearCart(), 1500);
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-amber-50 min-h-screen">
      <Navbar />

      {/* Hidden Invoice Template for html2canvas */}
      <div className="fixed -left-[9999px] top-0">
        <div ref={invoiceRef} style={{ width: '700px', backgroundColor: '#ffffff', padding: '40px', fontFamily: 'Arial, sans-serif', color: '#111111' }}>
          <div style={{ textAlign: 'center', borderBottom: '3px solid #ea580c', paddingBottom: '20px', marginBottom: '30px' }}>
            <h1 style={{ color: '#ea580c', fontSize: '28px', margin: '0 0 8px 0' }}>Shreedhar Masale</h1>
            <p style={{ color: '#111111', margin: '4px 0', fontSize: '14px' }}>The Authentic taste of Konkan</p>
            <p style={{ color: '#111111', margin: '4px 0', fontSize: '13px' }}>Phone: 9422024902 | Email: sales.shreedharmasale@gmail.com</p>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '8px', color: '#111111' }}>Order Summary</h2>
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#111111' }}><strong>Order ID:</strong> {orderId}</p>
            <p style={{ margin: '4px 0', fontSize: '14px', color: '#111111' }}><strong>Date:</strong> {orderDate}</p>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f97316', color: '#ffffff' }}>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '14px' }}>Product</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '14px' }}>Variant</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '14px' }}>Price</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '14px' }}>Qty</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '14px' }}>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #ddd', backgroundColor: i % 2 === 0 ? '#ffffff' : '#fff7ed' }}>
                  <td style={{ padding: '10px', fontSize: '13px', color: '#111111' }}>{item.name}</td>
                  <td style={{ padding: '10px', fontSize: '13px', color: '#111111' }}>{item.variant}</td>
                  <td style={{ padding: '10px', fontSize: '13px', color: '#111111' }}>₹{item.price}</td>
                  <td style={{ padding: '10px', fontSize: '13px', color: '#111111' }}>{item.quantity}</td>
                  <td style={{ padding: '10px', fontSize: '13px', color: '#111111' }}>₹{item.price * item.quantity}</td>
                </tr>
              ))}
              <tr style={{ backgroundColor: '#fff7ed', fontWeight: 'bold' }}>
                <td colSpan={4} style={{ padding: '12px', textAlign: 'right', fontSize: '15px', color: '#111111' }}>Total Amount:</td>
                <td style={{ padding: '12px', fontSize: '15px', color: '#ea580c' }}>₹{totalAmount}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: 'center', borderTop: '2px solid #ddd', paddingTop: '20px', fontSize: '13px', color: '#111111' }}>
            <p style={{ margin: '4px 0' }}>Thank you for your order!</p>
            <p style={{ margin: '4px 0' }}>This is a system-generated invoice. Please attach this image when sending your order.</p>
          </div>
        </div>
      </div>

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
              <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2 mb-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order via WhatsApp
              </button>
              <p className="text-xs text-gray-500 text-center mb-3">📎 Invoice image will be downloaded automatically. Please attach it in the WhatsApp chat or Email.</p>
              <button
                onClick={handleEmailOrder}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Order via Email
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
