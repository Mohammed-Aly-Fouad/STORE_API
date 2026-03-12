const baseProducts = [
  { "name": "accent chair", "price": 25, "company": "marcos", "rating": 4 },
  { "name": "albany sectional", "price": 109, "company": "liddy", "rating": 5 },
  { "name": "albany table", "price": 309, "company": "liddy", "rating": 4.9 },
  { "name": "armchair", "price": 125, "company": "marcos", "rating": 4.8 },
  { "name": "bar stool", "price": 40, "company": "liddy", "rating": 4.6 },
  { "name": "dining table", "price": 42, "company": "ikea", "rating": 4.55 },
  { "name": "emperor bed", "price": 23, "company": "ikea" },
  { "name": "entertainment center", "price": 59, "featured": true, "company": "caressa" },
  { "name": "high-back bench", "price": 39, "featured": true, "company": "ikea" },
  { "name": "leather sofa", "price": 99, "company": "caressa" },
  { "name": "modern bookshelf", "price": 31, "featured": true, "company": "caressa" },
  { "name": "modern poster", "price": 30, "company": "liddy" },
  { "name": "shelf", "price": 30, "company": "ikea" },
  { "name": "simple chair", "price": 109, "company": "liddy" },
  { "name": "sofa set", "price": 129, "company": "marcos" },
  { "name": "suede armchair", "price": 15, "company": "caressa" },
  { "name": "utopia sofa", "price": 79, "featured": true, "company": "liddy" },
  { "name": "vase table", "price": 120, "featured": true, "company": "marcos" },
  { "name": "wooden bed", "price": 25, "company": "ikea" },
  { "name": "wooden desk", "price": 15, "company": "ikea" },
  { "name": "wooden table", "price": 23, "featured": true, "company": "caressa" }
];

const fullProducts = [];

for (let i = 1; i <= 200; i++) {
  // Cycle through the base products
  const base = baseProducts[i % baseProducts.length];
  
  fullProducts.push({
    ...base,
    // Make names unique for better search testing
    name: `${base.name} v${i}`,
    // Vary price slightly: base price + (0 to 50)
    price: base.price + Math.floor(Math.random() * 50),
    // Randomize rating if not present
    rating: base.rating || (Math.random() * (5 - 3) + 3).toFixed(1),
    featured: i % 5 === 0 // Make every 5th item featured
  });
}

console.log(JSON.stringify(fullProducts, null, 2));