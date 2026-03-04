"use client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ReviewSlider from "./components/ReviewSlider";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aboutSlide, setAboutSlide] = useState(0);
  const aboutImages = [
    'about1.jpg', 'about2.jpg', 'about3.jpg', 'about4.jpg',
    'about5.jpg', 'about6.jpg', 'about7.jpg', 'about8.jpg',
    'about9.jpg', 'about10.jpg', 'about11.jpg', 'about12.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAboutSlide((prev) => (prev + 1) % aboutImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Navbar />
      
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Slide 1 - Logo */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}>
          <img src="/logo.png" alt="Shreedhar Masale" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/80 via-amber-50/80 to-red-100/80"></div>
          <div className="relative w-full h-full flex items-center justify-center z-20">
            <div className="text-center px-4">
              <img src="/logo.png" alt="Shreedhar Masale" className="w-64 h-64 mx-auto mb-8 object-contain drop-shadow-2xl" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-600 mb-4">Shreedhar Masale</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">The Authentic taste of Konkan</p>
              <a href="#products" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition inline-block">Explore Products</a>
            </div>
          </div>
        </div>

        {/* Slide 2 - Hero Image */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}>
          <img 
            src="bucket.jpg" 
            alt="Spices" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Shreedhar Masale</h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">The Authentic taste of Konkan</p>
              <a href="#products" className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition inline-block">Explore Products</a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          <button onClick={() => setCurrentSlide(0)} className={`w-3 h-3 rounded-full transition ${
            currentSlide === 0 ? "bg-orange-600" : "bg-white/50"
          }`} />
          <button onClick={() => setCurrentSlide(1)} className={`w-3 h-3 rounded-full transition ${
            currentSlide === 1 ? "bg-orange-600" : "bg-white/50"
          }`} />
        </div>
      </section>

      <section id="products" className="bg-gradient-to-b from-amber-50 via-orange-50 to-white py-8 sm:py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 sm:mb-8">Our Premium Masale Collection</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <ProductCard 
            title="Malvani Bhajka Masala" 
            price="₹266"
            originalPrice="₹345"
            discount="23%"
            image="kala vatna.jpg"
            description="Authentic Malvani blend with sun-dried spices for traditional coastal curries."
          />
          <ProductCard 
            title="Malvani Macchi Masala" 
            price="₹227"
            originalPrice="₹302"
            discount="25%"
            image="fish.jpg"
            description="Coastal spice mix with organic kokum for authentic Konkani fish preparations."
          />
          <ProductCard 
            title="Special Malvani Chicken Masala" 
            price="₹319"
            originalPrice="₹399"
            discount="20%"
            image="chicken.jpg"
            description="Hand-ground spices with Byadgi chillies for rich, aromatic chicken dishes."
          />
          <ProductCard 
            title="Pavbhaji Masala" 
            price="₹274"
            originalPrice="₹356"
            discount="23%"
            image="Pav Bhaji Food.jpg"
            description="Mumbai street-style blend with roasted cumin for authentic pav bhaji flavor."
          />
          <ProductCard 
            title="Kulith Pith" 
            price="₹127"
            originalPrice="₹159"
            discount="20%"
            image="Pithla.jpg"
            description="Stone-ground horse gram flour, protein-rich and naturally gluten-free."
          />
          <ProductCard 
            title="Vade Pith" 
            price="₹154"
            originalPrice="₹220"
            discount="30%"
            image="vade.jpg"
            description="Pure urad dal flour for soft, fluffy vadas - traditionally stone-milled."
          />
          <ProductCard 
            title="Gavathi Halad" 
            price="₹137"
            originalPrice="₹182"
            discount="25%"
            image="halad.jpg"
            description="Organic farm-fresh turmeric with high curcumin, naturally sun-dried."
          />
          <ProductCard 
            title="Kohala Sandage" 
            price="₹396"
            originalPrice="₹495"
            discount="20%"
            image="Sandge-Featured.jpg"
            description="Handmade sun-dried lentil wafers, preservative-free traditional Konkani snack."
           />
        </div>
      </section>

      <section id="about" className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8 text-center">Our Journey</h2>
          
          <div className="relative backdrop-blur-md bg-gradient-to-br from-orange-100/60 via-white/40 to-amber-100/60 border-2 border-orange-300/50 rounded-3xl shadow-[0_8px_32px_rgba(251,146,60,0.25)] p-6 sm:p-8 overflow-hidden">
            {aboutImages.map((img, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 z-0 ${
                aboutSlide === index ? "opacity-100" : "opacity-0"
              }`}>
                <img src={`/${img}`} alt="Journey" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-white/50"></div>
              </div>
            ))}
            <div className="text-center mb-6 relative z-20">
              <button 
                onClick={() => {
                  const content = document.getElementById('about-content');
                  const btn = document.getElementById('translate-btn');
                  if (content?.classList.contains('marathi')) {
                    content.classList.remove('marathi');
                    content.classList.add('english');
                    btn!.textContent = 'मराठी मध्ये वाचा';
                  } else {
                    content?.classList.remove('english');
                    content?.classList.add('marathi');
                    btn!.textContent = 'Read in English';
                  }
                }}
                id="translate-btn"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-semibold transition shadow-lg hover:scale-105"
              >
                Read in English
              </button>
            </div>
            
            <div id="about-content" className="marathi text-gray-900 space-y-4 leading-relaxed text-base sm:text-lg relative z-10 font-semibold" style={{fontFamily: 'var(--font-devanagari)'}}>
              <div className="marathi-text max-h-96 overflow-y-auto pr-2">
                <p>तळकोकणातील एका छोट्याशा गावात…</p>
                <p>मातीच्या घरातल्या चुलीवर शिजणाऱ्या स्वयंपाकाचा दरवळ संपूर्ण अंगणात पसरायचा.</p>
                <p>तो फक्त सुगंध नव्हता—</p>
                <p>तो होता आठवणींचा, मायेचा आणि पिढ्यान्-पिढ्या जपलेल्या परंपरेचा श्वास. 🌾</p>
                <br/>
                <p>घरच्या गृहलक्ष्मीच्या हातची चव काही वेगळीच होती…</p>
                <p>कारण त्या चवीत मिसळलेली होती</p>
                <p>मेहनत, संयम आणि प्रेमाची ऊब. ❤️</p>
                <br/>
                <p>त्या मसाल्यांमध्ये रसायन नव्हती,</p>
                <p>होते फक्त शुद्ध सेंद्रिय शेतमाल,</p>
                <p>उन्हात वाळवलेली मिरची,</p>
                <p>निवडक धने-जिरे</p>
                <p>आणि अनुभवातून आलेली अचूक हाताळणी.</p>
                <br/>
                <p>काळ बदलला…</p>
                <p>बाजारात झगमगती, रंगीत पॅकेट्स आली.</p>
                <p>पण मनात एकच प्रश्न घोळत राहिला—</p>
                <p>"या पॅकेट्समध्ये खरंच कोकणची अस्सल चव आणि घरची माया मिळते का?"</p>
                <br/>
                <p>पूर्वी मसाले बनायचे मुसळ-दगडी जात्यावर…</p>
                <p>हाताची साल निघायची,</p>
                <p>डोळे पाणावायचे,</p>
                <p>पण चेहऱ्यावर समाधान झळकायचं.</p>
                <p>कारण त्या मसाल्यांनी घरच्या जेवणाला ओळख दिलेली असायची. 🔥</p>
                <br/>
                <p>आणि तिथेच एक स्वप्न आकार घेत होतं—</p>
                <p>"ही हरवलेली पारंपरिक चव पुन्हा लोकांपर्यंत पोहोचवायची."</p>
                <br/>
                <p>पैसे कमी होते…</p>
                <p>साधनं मर्यादित होती…</p>
                <p>पण आत्मविश्वास अफाट होता.</p>
                <br/>
                <p>घरच्या घरी, अगदी छोट्या प्रमाणात</p>
                <p>मसाले बनवण्यापासून सुरुवात झाली.</p>
                <br/>
                <p>शेजारी, नातेवाईक, मित्र…</p>
                <p>सगळ्यांच्या ओठांवर एकच वाक्य होतं—</p>
                <p>"ही चव तर हरवली होती!"</p>
                <br/>
                <p>हळूहळू त्या मेहनतीला एक नाव मिळालं—</p>
                <p className="font-bold text-orange-700 text-xl">'SHREEDHAR MASALE AND FOOD PRODUCTS'</p>
                <br/>
                <p>हे फक्त व्यवसायाचं नाव नाही…</p>
                <p>ही आहे घरची परंपरा,</p>
                <p>ही आहे कोकणची खाद्य संस्कृती,</p>
                <p>आणि एका कष्टाळू स्त्रीच्या</p>
                <p>प्रामाणिक मेहनतीची ओळख. 🙏</p>
                <br/>
                <p>आजही प्रत्येक मसाला बनवताना</p>
                <p>मनात एकच विचार असतो—</p>
                <p className="font-semibold">👉 "आपण हे आपल्या घरासाठीच बनवत आहोत."</p>
                <br/>
                <p>म्हणूनच…</p>
                <p>❌ कुठलाही कृत्रिम रंग नाही</p>
                <p>❌ कुठलेही प्रिझर्वेटिव्ह नाहीत</p>
                <p>✔️ फक्त शुद्धता</p>
                <p>✔️ आणि विश्वास</p>
                <br/>
                <p className="font-bold text-orange-700">SHREEDHAR MASALE AND FOOD PRODUCTS म्हणजे—</p>
                <p>🌾 कोकणची अस्सल पारंपरिक चव</p>
                <p>❤️ घरगुती प्रेम</p>
                <p>🔥 आणि प्रत्येक स्वयंपाकघरात दरवळणारी परंपरा</p>
                <br/>
                <p>हा प्रवास अजून संपलेला नाही…</p>
                <p>कारण जेव्हा-जेव्हा</p>
                <p>कुठल्याही घरात आमच्या मसाल्यांचा सुगंध पसरतो,</p>
                <p>तेव्हा ही कथा…</p>
                <p className="font-semibold">पुन्हा एकदा जिवंत होते</p>
              </div>
              
              <div className="english-text hidden max-h-96 overflow-y-auto pr-2">
                <p>In a small village in the coastal Konkan region…</p>
                <p>The aroma of food cooking on an earthen stove would spread throughout the courtyard.</p>
                <p>It wasn't just a fragrance—</p>
                <p>It was the breath of memories, love, and traditions preserved through generations. 🌾</p>
                <br/>
                <p>The taste from the hands of the homemaker was something special…</p>
                <p>Because mixed in that taste was</p>
                <p>Hard work, patience, and the warmth of love. ❤️</p>
                <br/>
                <p>Those spices had no chemicals,</p>
                <p>Only pure organic produce,</p>
                <p>Sun-dried chilies,</p>
                <p>Selected coriander and cumin,</p>
                <p>And precise handling that came from experience.</p>
                <br/>
                <p>Times changed…</p>
                <p>Glittering, colorful packets arrived in the market.</p>
                <p>But one question kept lingering in the mind—</p>
                <p>"Do these packets really contain the authentic taste of Konkan and the love of home?"</p>
                <br/>
                <p>Earlier, spices were made on stone grinders…</p>
                <p>Hands would get rough,</p>
                <p>Eyes would water,</p>
                <p>But satisfaction would shine on the face.</p>
                <p>Because those spices gave identity to home-cooked meals. 🔥</p>
                <br/>
                <p>And that's where a dream began to take shape—</p>
                <p>"To bring back this lost traditional taste to people."</p>
                <br/>
                <p>Money was limited…</p>
                <p>Resources were scarce…</p>
                <p>But confidence was immense.</p>
                <br/>
                <p>At home, on a very small scale,</p>
                <p>The journey of making spices began.</p>
                <br/>
                <p>Neighbors, relatives, friends…</p>
                <p>Everyone had the same words on their lips—</p>
                <p>"This taste was lost!"</p>
                <br/>
                <p>Gradually, that hard work got a name—</p>
                <p className="font-bold text-orange-700 text-xl">'SHREEDHAR MASALE AND FOOD PRODUCTS'</p>
                <br/>
                <p>This is not just a business name…</p>
                <p>This is a home tradition,</p>
                <p>This is Konkan's food culture,</p>
                <p>And the identity of a hardworking woman's</p>
                <p>Honest efforts. 🙏</p>
                <br/>
                <p>Even today, while making every spice,</p>
                <p>There's only one thought in mind—</p>
                <p className="font-semibold">👉 "We are making this for our own home."</p>
                <br/>
                <p>That's why…</p>
                <p>❌ No artificial colors</p>
                <p>❌ No preservatives</p>
                <p>✔️ Only purity</p>
                <p>✔️ And trust</p>
                <br/>
                <p className="font-bold text-orange-700">SHREEDHAR MASALE AND FOOD PRODUCTS means—</p>
                <p>🌾 Authentic traditional taste of Konkan</p>
                <p>❤️ Homemade love</p>
                <p>🔥 And tradition that spreads in every kitchen</p>
                <br/>
                <p>This journey is not over yet…</p>
                <p>Because whenever</p>
                <p>The fragrance of our spices spreads in any home,</p>
                <p>This story…</p>
                <p className="font-semibold">Comes alive once again</p>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .marathi .english-text { display: none; }
          .english .marathi-text { display: none; }
          .english .english-text { display: block; }
        `}</style>
      </section>

      <section id="contact" className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8 text-center">Contact Us</h2>
          
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-orange-700 mb-6 text-center tracking-wide">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 backdrop-blur-sm bg-white/30 border border-white/40 rounded-xl hover:bg-white/40 hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2.5 rounded-full shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-1 tracking-wide">Our Location</p>
                  <p className="font-semibold text-orange-700 text-sm">SHREEDHAR MASALE AND FOOD PRODUCTS</p>
                  <p className="text-gray-800 text-sm leading-relaxed">Pokharan (khalchiwadi)</p>
                  <p className="text-gray-800 text-sm leading-relaxed">Tal. Kudal, Dist. Sindhudurg</p>
                  <p className="text-gray-800 text-sm leading-relaxed">Maharashtra, India - 416628</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 backdrop-blur-sm bg-white/30 border border-white/40 rounded-xl hover:bg-white/40 hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2.5 rounded-full shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-1 tracking-wide">Call Us</p>
                  <a href="tel:9156234902" className="text-orange-700 hover:text-orange-800 font-semibold text-lg tracking-wide">9156234902</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 backdrop-blur-sm bg-white/30 border border-white/40 rounded-xl hover:bg-white/40 hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2.5 rounded-full shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-1 tracking-wide">Email Us</p>
                  <a href="mailto:info@shreedharmasale.com" className="text-orange-700 hover:text-orange-800 font-semibold text-sm tracking-wide">info@shreedharmasale.com</a>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/919156234902" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-bold text-base tracking-wide transition mt-6 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6 text-center">Licenses & Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="text-lg font-bold text-orange-600 mb-2">FSSAI License</h3>
              <p className="text-sm text-gray-600">Food Safety & Standards Authority of India</p>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-lg font-bold text-orange-600 mb-2">ISO Certification</h3>
              <p className="text-sm text-gray-600">Quality Management System</p>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-lg font-bold text-orange-600 mb-2">Organic Certificate</h3>
              <p className="text-sm text-gray-600">Certified Organic Products</p>
            </a>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">Customer Reviews</h2>
          <ReviewSlider />
        </div>
      </section>

      <section id="latest" className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-amber-50 to-orange-50">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 text-center">Latest Launches</h2>
        <p className="text-sm sm:text-base text-gray-700 text-center mb-8">Discover our newest premium masale blends!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
            </div>
            <img 
              src="paneer.jpg" 
              alt="Paneer Tikka Masala" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-bold text-lg">Paneer Tikka Masala</h3>
              <p className="text-orange-300 font-semibold">₹170 / 100g</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
            </div>
            <img 
              src="kolhapuri.jpg" 
              alt="Kolhapuri Masala" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-bold text-lg">Kolhapuri Masala</h3>
              <p className="text-orange-300 font-semibold">₹195 / 100g</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&q=80" 
              alt="Rajasthani Masala" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-bold text-lg">Rajasthani Masala</h3>
              <p className="text-orange-300 font-semibold">₹185 / 100g</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all">
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
            </div>
            <img 
              src="Goan Fish Curry.jpg" 
              alt="Fish Curry Masala" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-bold text-lg">Fish Curry Masala</h3>
              <p className="text-orange-300 font-semibold">₹175 / 100g</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white text-center py-4 sm:py-6 mt-8">
        <p className="text-sm sm:text-base">&copy; 2026 Gayatri Rane. All rights reserved.</p>
      </footer>
    </div>
  );
}
