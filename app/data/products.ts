export interface Product {
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  description: string;
}

export interface Variant {
  id: string;
  label: string;
  price: number;
}

export interface ProductDetail {
  features: { label: string; value: string }[];
  fullDescription: string;
}

export const allProducts: Product[] = [
  { title: "Malvani Bhajka Masala", price: "₹266", originalPrice: "₹345", discount: "23%", image: "kala vatna.jpg", description: "Authentic Malvani blend with sun-dried spices for traditional coastal curries." },
  { title: "Malvani Macchi Masala", price: "₹227", originalPrice: "₹302", discount: "25%", image: "fish.jpg", description: "Coastal spice mix with organic kokum for authentic Konkani fish preparations." },
  { title: "Special Malvani Chicken Masala", price: "₹319", originalPrice: "₹399", discount: "20%", image: "chicken.jpg", description: "Hand-ground spices with Byadgi chillies for rich, aromatic chicken dishes." },
  { title: "Pavbhaji Masala", price: "₹274", originalPrice: "₹356", discount: "23%", image: "Pav Bhaji Food.jpg", description: "Mumbai street-style blend with roasted cumin for authentic pav bhaji flavor." },
  { title: "Kulith Pith", price: "₹127", originalPrice: "₹159", discount: "20%", image: "Pithla.jpg", description: "Stone-ground horse gram flour, protein-rich and naturally gluten-free." },
  { title: "Vade Pith", price: "₹154", originalPrice: "₹220", discount: "30%", image: "vade.jpg", description: "Pure urad dal flour for soft, fluffy vadas - traditionally stone-milled." },
  // { title: "Gavathi Halad", price: "₹137", originalPrice: "₹182", discount: "25%", image: "halad.jpg", description: "Organic farm-fresh turmeric with high curcumin, naturally sun-dried." },
  { title: "Kohala Sandage", price: "₹396", originalPrice: "₹495", discount: "20%", image: "Sandge-Featured.jpg", description: "Handmade sun-dried lentil wafers, preservative-free traditional Konkani snack." },
];

export const productVariants: { [key: string]: Variant[] } = {
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
  // "Gavathi Halad": [
  //   { id: "250g", label: "250g", price: 137 },
  //   { id: "500g", label: "500g", price: 258 },
  //   { id: "1kg", label: "1kg", price: 487 },
  // ],
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

export const productDetails: { [key: string]: ProductDetail } = {
  "Malvani Bhajka Masala": {
    features: [
      { label: "Product", value: "Malvani Bhajaka Masala" },
      { label: "Ingredients", value: "Chili, Coriander, Black Pepper, Fennel, Poppy Seeds, Cinnamon, Mace, Cloves, Nutmeg, Spice Cardamom, Star Anise, Bay Leaf, Caraway Seeds, Asafoetida, Dry Ginger, Turmeric, Stone Flower, Nagkesar, Mustard, Fenugreek, Cardamom, Cumin, Rampatri, Sesame, Trifal, Kasturi Methi" },
      { label: "Net Quantity", value: "250gr. / 500gr. / 1000gr." },
      { label: "Product Feature", value: "Original and Authentic" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "For Bulk Order", value: "9422024902" },
    ],
    fullDescription: `Experience the soulful, deep-roasted flavors of coastal Maharashtra with Shreedhar Malvani Bhajaka Masala. Crafted in the heart of Sindhudurg, this "Bhajaka" (roasted) masala follows a traditional heritage recipe that brings the legendary spice profile of the Konkan region directly to your kitchen.

Key Highlights
- Authentically Roasted: Unlike standard spice powders, this masala is made from carefully selected spices that are roasted to perfection to unlock a rich, smoky aroma and deep flavor.
- Pure & Natural: Committed to your health and the purity of tradition, our masala contains: No Preservatives, No Artificial Colors.
- Heritage Recipe: Produced by Shreedhar Masale and Food Products in Pokharan (A small village in Sindhudurg district) Maharashtra, ensuring an honest, home-style taste.

Usage Suggestions
This versatile masala is the secret ingredient for classic Malvani dishes. It is perfect for:
- Malvani Chicken/Mutton Curry
- Spicy Fish Curries
- Traditional Veggie Preparations (like Usal or Kala Vatana Sambhar or Aamti)

This product is a result of traditional craftsmanship, bringing the "soulful flavors of Konkan" to every household.`,
  },

  "Malvani Macchi Masala": {
    features: [
      { label: "Product", value: "Malvani Macchi Masala" },
      { label: "Ingredients", value: "Chili, Coriander, Fennel, Turmeric, Trifal" },
      { label: "Net Quantity", value: "250gr. / 500gr. / 1000gr." },
      { label: "Product Feature", value: "Original and Authentic" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "For Bulk Order", value: "9422024902" },
    ],
    fullDescription: `Experience the soulful and vibrant flavors of coastal Maharashtra with Shreedhar Malvani Macchi Masala. Crafted by Shreedhar Masale and Food Products in the heart of Sindhudurg, this heritage blend is designed to bring the true essence of Malvani seafood to your dining table.

Why Choose Our Masala?
- Pure & Natural: We believe in honesty and quality. Our masala contains No Preservatives and No Artificial Colors, ensuring you get the healthiest and most authentic spice experience.
- Heritage Recipe: Rooted in our vision to celebrate the traditional foods of Konkan, this blend is made with love and traditional techniques passed down through generations.
- Premium Ingredients: A curated mix of high-quality spices, including the distinct Trifal, which gives Malvani fish curries their unique, aromatic signature.`,
  },

  "Special Malvani Chicken Masala": {
    features: [
      { label: "Product", value: "Malvani Chicken Masala" },
      { label: "Ingredients", value: "Chilli, Coriander seeds, Black Pepper, Poppy Seed, Clove, Cinnamon, Nutmeg, Cashew, Black Cardamom, Bay Leaf, Fennel Seeds, Mace, Star Anise, Cardamom, Turmeric, Mustard, Sesame, Caraway Seeds, Stone Flower, Rampatri, Cumin, Dry Ginger, Nagkesar, Fenugreek, Asafoetida, Kasturi Methi, Trifal" },
      { label: "Net Quantity", value: "250gr. / 500gr. / 1000gr." },
      { label: "Special Addition", value: "Includes Cashews and Poppy Seeds for a rich, signature texture" },
      { label: "Product Feature", value: "100% Pure, Original and Authentic" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "For Bulk Orders", value: "9422024902" },
    ],
    fullDescription: `Experience the soulful, bold, and fiery flavors of coastal Maharashtra with Shreedhar Malvani Chicken Masala. Crafted in the heart of Sindhudurg, this authentic blend follows a traditional heritage recipe designed to bring the legendary spice profile of the Konkan region directly to your kitchen.

Key Highlights
- The Authentic Taste of Konkan: Specially formulated to recreate the rich, deep-red gravies and aromatic masalas that define traditional Malvani chicken preparations.
- Pure & Natural: Committed to your health and the purity of tradition, our masala contains: No Preservatives & No Artificial Colors.
- Heritage Recipe: Produced by Shreedhar Masale and Food Products in Pokharan (Sindhudurg), ensuring an honest, home-style taste made with heritage recipes and love.

Usage Suggestions
This premium blend is the secret to achieving professional-grade Malvani flavors at home. It is perfect for:
- Malvani Chicken Rassa (Curry)
- Chicken Sukka (Dry)
- Mutton and Egg Curries
- Konkani-style Spicy Starters`,
  },

  "Pavbhaji Masala": {
    features: [
      { label: "Product", value: "Pavbhaji Masala" },
      { label: "Ingredients", value: "Chilli, Coriander Seeds, Cumin, Fennel Seeds, Black Pepper, Cinnamon, Cloves, Black Cardamom, Star Anise, Fenugreek, Cardamom, Bay Leaf, Amchur Powder, Kasturi Methi" },
      { label: "Net Quantity", value: "250g / 500g / 1000g" },
      { label: "Product Feature", value: "Original and Authentic" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "For Bulk Orders", value: "9422024902" },
    ],
    fullDescription: `Experience the rich and vibrant flavors of India's favorite street food with Shreedhar Special Pavbhaji Masala. Carefully crafted using a balanced blend of premium spices, this masala delivers the authentic taste, aroma, and color that make pavbhaji truly irresistible.

Produced in the heart of Sindhudurg, Maharashtra, by Shreedhar Masale and Food Products, this masala reflects the purity and traditional spice craftsmanship of Konkan, bringing delicious street-style flavor directly to your kitchen.

Key Highlights
- Perfectly Balanced Spice Blend: Prepared using carefully selected spices that create the ideal combination of aroma, mild heat, and tangy flavor required for authentic pavbhaji.
- Pure & Natural: Made with a commitment to quality and health. Our masala contains: No Preservatives & No Artificial Colors.
- Authentic Taste from Konkan: Produced by Shreedhar Masale and Food Products in Pokharan (A small village of Sindhudurg district), ensuring a genuine homemade taste inspired by traditional spice blending.

Usage Suggestions
This flavorful masala is perfect for preparing delicious dishes such as:
- Classic Mumbai Style Pavbhaji
- Masala Bhaji or Mixed Vegetable Curry
- Tawa Pulao
- Masala Toast and Street-Style Snacks

(Just add a spoonful while cooking to enhance the aroma and give your dish a rich, authentic taste.)

This product is prepared with care and traditional expertise, bringing the authentic taste of Indian street food to every household.`,
  },

  "Kohala Sandage": {
    features: [
      { label: "Product", value: "Kohala Sandage" },
      { label: "Ingredients", value: "Ash Gourd, Pumpkin, Ginger, Chili, Coriander, Sabudana, Udid Dal, Chanadal, Mungdal, Asafoetida, Salt" },
      { label: "Net Quantity", value: "100gr. / 250gr. / 500gr." },
      { label: "Product Feature", value: "Original and Authentic" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "For Bulk Order", value: "9422024902" },
    ],
    fullDescription: `Experience the authentic, sun-dried goodness of traditional Maharashtrian heritage with Shreedhar Kohala Sandage. Crafted with care, these "Sandage" follow a time-honored recipe that captures the rustic, savory essence of home-style Konkan cooking.

Key Highlights
- Traditionally Sun-Dried: Made during the peak summer months, these dumplings are naturally dried to preserve their nutrient density, unique texture, and deep flavor.
- Pure & Natural: Committed to your health and the purity of tradition, our Sandage contains: No Preservatives, No Artificial Flavors.
- Heritage Recipe: Produced by Shreedhar Masale and Food Products in Pokharan (A small village in Sindhudurg district), Maharashtra, ensuring an honest, village-style taste in every bite.

Usage Suggestions
This versatile product is a staple for a quick and nutritious Maharashtrian meal. It is perfect for:
- Sandage Chi Bhaji: Sauté with onions and local spices for a classic, protein-rich gravy.
- Crunchy Side Dish: Deep-fry until golden brown and serve as a crispy accompaniment to Varan Bhaat.
- Traditional Amti: Drop them into hot dal or buttermilk kadhi to add a unique texture and savory punch.

This product is a result of traditional craftsmanship, bringing the "soulful flavors of Konkan" to every household.`,
  },

  "Vade Pith": {
    features: [
      { label: "Product", value: "Malvani Vade Pith" },
      { label: "Ingredients", value: "Rice, Udid Dal, Moong, Chanadal, Coriander Seeds, Methi" },
      { label: "Net Quantity", value: "500gr. / 1000gr." },
      { label: "Product Feature", value: "Original and Authentic" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "For Bulk Order", value: "9422024902" },
    ],
    fullDescription: `Experience the legendary, golden-fried flavors of coastal Maharashtra with Shreedhar Malvani Vade Pith. Crafted in the heart of Sindhudurg, this "Vade Pith" (multi-grain flour) follows a traditional heritage recipe that is the foundation of the world-famous Malvani Kombdi Vade feast.

Key Highlights
- Perfectly Balanced Blend: A masterfully proportioned mix of high-quality rice and protein-rich lentils, ensuring your Vades are fluffy on the inside and perfectly crisp on the outside.
- Pure & Natural: Committed to your health and the purity of tradition, our flour contains: No Preservatives, No Artificial Flavors.
- Heritage Recipe: Produced by Shreedhar Masale and Food Products in Pokharan (a small village in Sindhudurg district), Maharashtra, ensuring an honest, festive taste that honors Konkan culture.

Usage Suggestions
This specialty flour is the essential ingredient for the most iconic coastal meal. It is perfect for:
- Classic Kombdi Vade: Thick, puffed, and fried bread served alongside spicy Malvani Chicken or Mutton Curry.
- Veggie Accompaniment: Pairs exceptionally well with Kala Vatana Sambhar (Black Pea Curry) for a traditional vegetarian treat.
- Breakfast Vade: Enjoy them hot with fresh chutney or a simple potato bhaji.

This product is a result of traditional craftsmanship, bringing the "soulful flavors of Konkan" to every household.`,
  },

  "Kulith Pith": {
    features: [
      { label: "Product", value: "Kulith Pith" },
      { label: "Ingredients", value: "Horse Gram, Coriander Seeds, Fennel Seeds, Turmeric" },
      { label: "Net Quantity", value: "250gr. / 500gr. / 1000gr." },
      { label: "Product Feature", value: "Original and Authentic" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "For Bulk Order", value: "9422024902" },
    ],
    fullDescription: `Experience the rustic, wholesome goodness of traditional Konkan nutrition with Shreedhar Kulith Pith. Crafted in the heart of Sindhudurg, this "Pith" follows a time-honored heritage recipe that brings the legendary health benefits and earthy flavors of the coastal region directly to your kitchen.

Key Highlights
- Nutrient-Dense Powerhouse: Made from premium Horse Gram (Kulith), known for its high protein and mineral content, making it an essential part of a healthy Maharashtrian diet.
- Pure & Natural: Committed to your health and the purity of tradition, our flour contains: No Preservatives, No Artificial Flavors.
- Heritage Recipe: Produced by Shreedhar Masale and Food Products in Pokharan (a small village in Sindhudurg district), Maharashtra, ensuring an honest, home-style taste and authentic aroma.

Usage Suggestions
This versatile flour is the secret to many comforting and healthy Konkan delicacies. It is perfect for:
- Kulith Pithla: A thick, savory, and spicy porridge that pairs beautifully.
- Kulith Aamti / Usal: A thin, tempered soup that is both nourishing and delicious during the winter months.

This product is a result of traditional craftsmanship, bringing the "soulful flavors of Konkan" to every household.`,
  },
};
