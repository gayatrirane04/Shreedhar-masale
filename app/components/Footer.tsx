export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Shreedhar Masale Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold">Shreedhar Masale</span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Premium authentic Indian spices and masalas crafted with traditional recipes for over generations.
            </p>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Our Address</h3>
            <div className="text-amber-100 text-sm space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-amber-300 mt-1">📍</span>
                <span>
                  SHREEDHAR MASALE AND FOOD PRODUCTS<br />
                  Pokharan (khalchiwadi)<br />
                  Tal. Kudal, Dist. Sindhudurg<br />
                  Maharashtra, India - 416628
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-300">📞</span>
                <span>9422024902</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-300">✉️</span>
                <span>sales.shreedharmasale@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#home" className="text-amber-100 hover:text-white transition">Home</a></li>
              <li><a href="/#about" className="text-amber-100 hover:text-white transition">About Us</a></li>
              <li><a href="/#contact" className="text-amber-100 hover:text-white transition">Contact</a></li>
              <li><a href="/#reviews" className="text-amber-100 hover:text-white transition">Reviews</a></li>
              <li><a href="/#latest" className="text-amber-100 hover:text-white transition">Upcoming Products</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy-policy" 
                   className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span>📄</span> Privacy Policy
                </a>
              </li>
              <li>
                <a href="/return-refund-policy" 
                   className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span>🔄</span> Return & Refund Policy
                </a>
              </li>
              <li>
                <a href="/shipping-policy" 
                   className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span>🚚</span> Shipping Policy
                </a>
              </li>
              <li>
                <a href="/payment-policy" 
                   className="text-amber-100 hover:text-white transition flex items-center gap-2">
                  <span>📋</span> Payment Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-amber-200 text-sm">
            © 2026 Gayatri Rane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}