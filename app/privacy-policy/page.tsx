"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-8">
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          </div>

          <div className="text-gray-800 space-y-8">
            <p className="text-lg leading-relaxed">
              At <strong>Shreedhar Masale and Food Products</strong>, we value the trust you place in us when sharing your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website or purchase our authentic spices and food products.
            </p>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="mb-4 text-gray-700">
                To provide you with a seamless shopping experience, we collect the following information:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Personal Identifiers:</strong> Name, shipping address, billing address, email address, and phone number.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Transaction Details:</strong> History of products purchased and order value.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Technical Data:</strong> IP address, browser type, and cookies to improve website functionality.</div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="mb-4 text-gray-700">We use your data strictly for business operations, including:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Order Fulfillment:</strong> Processing payments and delivering your order to your doorstep.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Customer Support:</strong> Responding to inquiries or managing returns and compliance.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Marketing & Updates:</strong> Sending you information about new product launches, traditional Malvani recipes, or special seasonal offers (you may opt-out at any time).</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div><strong>Safety & Compliance:</strong> Detecting and preventing fraudulent transactions.</div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your personal information. Your data is stored on secure servers, and we do not sell or rent your personal information to third-party marketers.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="mb-4 text-gray-700">You have the right to:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>Access the personal data we hold about you.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>Request corrections to any inaccurate information.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <div>Request the deletion of your data, subject to legal or transactional record-keeping requirements.</div>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4 text-gray-700">
                If you have questions regarding this Privacy Policy or your data, please reach out to us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Shreedhar Masale and Food Products</p>
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