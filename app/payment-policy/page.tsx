"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsConditions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-8">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Policy</h1>
          </div>

          <div className="text-gray-800 space-y-8">
            <p className="text-lg leading-relaxed">
              At <strong>Shreedhar Masale and Food Products</strong>, we believe in a fair and transparent relationship with our customers. To ensure the smooth processing of your order and the freshness of our handmade spices, we follow a two-step payment process.
            </p>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">25% Advance Payment (Pre-Dispatch)</h2>
              <p className="text-gray-700 mb-4">
                To confirm your order and begin the packaging process, we require a <strong>25% advance payment</strong> of the total invoice value. Once your order is placed, you will receive payment details (UPI/Bank Transfer). Your order will be officially processed and prepared for dispatch only after this 25% deposit is received.
              </p>
              <p className="text-gray-700 mb-4">
                This helps us prevent "fake orders" and ensures that our small-batch, fresh food products are reserved specifically for genuine customers.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-600 text-sm italic">
                  Please note that once a 25% advance payment is made, the order is considered confirmed and cannot be cancelled. This deposit covers initial processing and material costs secured specifically for your order.
                </p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">75% Cash on Delivery (COD)</h2>
              <p className="text-gray-700 mb-4">
                The remaining <strong>75% of the amount</strong> is to be paid at the time of delivery. You can pay the balance in cash or via available digital methods directly to the delivery partner when the parcel reaches your doorstep.
              </p>
              <p className="text-gray-700">
                This gives you the peace of mind that the majority of the payment is only made once the product is in your hands.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accepted Payment Methods</h2>
              <p className="mb-4 text-gray-700">For your convenience, we accept:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Digital Payments:</strong> GPay, PhonePe, or UPI for the 25% advance.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Cash:</strong> For the remaining 75% at the time of delivery.</div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Do We Have This Policy?</h2>
              <p className="text-gray-700 mb-4">
                As a business dealing in authentic, perishable food products from the Konkan region, we take great care in preparing every pack. This "Partial Advance" policy ensures a commitment from both sides — we commit to sending you the highest quality spices, and you commit to receiving them.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-600 text-sm italic">
                  Note: If you wish to pay 100% in advance to avoid handling cash at delivery, please let us know during the order process, and we will be happy to assist you.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <a href="/" className="text-orange-600 hover:text-orange-700 font-medium">← Back to Home</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}