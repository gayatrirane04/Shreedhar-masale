"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShippingPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-8">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shipping Policy</h1>
          </div>

          <div className="text-gray-800 space-y-8">
            <p className="text-lg leading-relaxed">
              At <strong>Shreedhar Masale and Food Products</strong>, we strive to bring the authentic taste of Malvan to your doorstep at the most reasonable shipping rates possible. Since spices and food products vary in weight, our delivery charges are calculated to ensure your order arrives safely and fresh.
            </p>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Standard Delivery Charges</h2>
              <p className="mb-4 text-gray-700">
                To keep our shipping sustainable, a delivery fee of <strong>₹50 per kg</strong> applies to:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>Orders below <strong>₹1,999</strong> in Maharashtra and Goa</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>All orders under <strong>₹2,999</strong> for the rest of India</div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Free Delivery Thresholds</h2>
              <p className="mb-4 text-gray-700">
                We are pleased to offer Free Delivery based on the following order values:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Within Maharashtra & Goa:</strong> Free shipping on all orders above <strong>₹1,999</strong></div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Across India:</strong> Free shipping on all orders above <strong>₹2,999</strong></div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Timelines</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing Time:</h3>
                  <p className="text-gray-700">Orders are typically processed and dispatched from our facility in Kudal, Sindhudurg within <strong>24-48 hours</strong>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Transit Time:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400">•</span>
                      <div><strong>Within Maharashtra:</strong> 3-6 business days</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-400">•</span>
                      <div><strong>Rest of India:</strong> 6-9 business days</div>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Note: Delivery times may vary slightly during public holidays or extreme weather conditions.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Local Delivery (Sindhudurg Region)</h2>
              <p className="text-gray-700">
                Customers located within a <strong>25 km radius</strong> of our location facility may be eligible for discounted or express local delivery.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Important Delivery Terms</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Correct Address:</strong> Please ensure your shipping address and contact number are accurate. Re-delivery charges will apply if a parcel is returned to us due to an incorrect address or unavailability of the recipient.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Tracking:</strong> Once your Masale are on their way, we will share a tracking ID via SMS or Email so you can monitor your parcel's journey.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Packaging:</strong> We use moisture-resistant, food-grade packaging to ensure your food products retain their aroma and flavor during transit.</div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-800 font-medium">
                <strong>Our Commitment:</strong> We do not profit from shipping. The charges you pay go directly toward the high-quality packaging and reliable courier services required to keep our food products safe.
              </p>
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