"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReturnRefundPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-8">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Refund & Return Policy</h1>
          </div>

          <div className="text-gray-800 space-y-8">
            <p className="text-lg leading-relaxed">
              At <strong>Shreedhar Masale and Food Products</strong>, we take immense pride in the quality and purity of our traditional Konkan spices. Because our products are perishable food items, we maintain a strict No Refund and No Return Policy to ensure the hygiene and safety of all our customers.
            </p>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Policy</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>Once a food product is purchased and the seal is broken, it cannot be returned or refunded.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>We do not offer refunds for "change of mind" or personal taste preferences.</div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Damaged or Tampered Parcels</h2>
              <p className="mb-4 text-gray-700">
                The only exception to our no-refund policy is if you receive a physically damaged parcel or if the product packaging was compromised during transit.
              </p>
              <p className="mb-4 text-gray-700 font-semibold">
                To be eligible for a replacement or refund in this case:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>You must report the damage within <strong>24 hours</strong> of receiving the delivery.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Mandatory Requirement:</strong> Please provide clear photos or a short unboxing video of the damaged parcel/product. This helps us verify the issue with our courier partners.</div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process (For Damaged Items Only)</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>Upon verification of the damage, we will either ship a fresh replacement at no extra cost or initiate a refund to your original payment method.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>Approved refunds typically take <strong>5–7 business days</strong> to reflect in your account.</div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why This Policy Exists?</h2>
              <p className="text-gray-700">
                Spices are sensitive to moisture and external contaminants. To guarantee that every pack of our food products reaching a kitchen is 100% safe and authentic, we cannot accept food items back into our inventory once they have left our controlled facility.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4 text-gray-700">
                If you have received a damaged order, please reach out to us immediately:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Shreedhar Masale and Food Products</p>
                <p className="text-gray-700 mb-2">Address: Pokharan, Kudal, Sindhudurg</p>
                <p className="text-gray-700">Email: <a href="mailto:sales.shreedharmasale@gmail.com" className="text-blue-600 hover:text-blue-700 underline">sales.shreedharmasale@gmail.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:9422024902" className="text-blue-600 hover:text-blue-700 underline">9422024902</a></p>
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