const u = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export const photos = {
  white: u('photo-1596755094514-f87e34085b2c'),
  rack: u('photo-1602810318383-e386cc2a3ccf'),
  blueMan: u('photo-1598033129183-c4f50c736f10'),
  stripe: u('photo-1620012253295-c15cc3e65df4'),
  linenMan: u('photo-1603252109303-2751441dd157'),
  flat: u('photo-1607345366928-199ea26cfe3e'),
  fashion: u('photo-1598032895397-b9472444bf93'),
  fold: u('photo-1562157873-818bc0726f68'),
  folds: u('photo-1578932750294-f5075e85f44a'),
  tees: u('photo-1489987707025-afc232f7ea0f'),
  colorstripe: u('photo-1558171813-4c088753af8f'),
  hang: u('photo-1523381294911-8d3cead13475'),
  pile: u('photo-1556905055-8f358a7a47b2'),
  tee2: u('photo-1576566588028-4147f3842f27'),
  whitetee: u('photo-1618354691373-d851c5c3a990'),
  navy: u('photo-1594938298603-c8148c4dae35'),
  black: u('photo-1507679799987-c73779587ccf'),
  beige: u('photo-1617137968427-85924c800a22'),
  grey: u('photo-1617127365659-c47fa864d8bc'),
  brown: u('photo-1617137984095-74e4e5e3613f'),
  bomber: u('photo-1591047139829-d91aecb6caea'),
  leather: u('photo-1551028719-00167b16eac5'),
  coat: u('photo-1487222477894-8943e31ef7b2'),
  tie: u('photo-1490114538077-0a7f8cb49891'),
  suit2: u('photo-1593032465175-481ac7f401a0'),
  pants: u('photo-1473966968600-fa801b869a1a'),
  denim: u('photo-1516826957135-700dedea698c'),
  portrait: u('photo-1552374196-1ab2a1c593e8'),
  model: u('photo-1520975916090-3105956dac38'),
  man: u('photo-1505022610485-0249ba5b3675'),
  rack2: u('photo-1434389677669-e08b4cac3105'),
  editorial: u('photo-1490481651871-ab68de25d43d'),
  closet: u('photo-1445205170230-053b83016050'),
  store: u('photo-1441986300917-64674bd600d8'),
  socks: u('photo-1586350977771-b3b0abd50c82'),
  polo: u('photo-1521572163474-6864f9cf17ab'),
  blacktee: u('photo-1583743814966-8936f5b7be1a'),
};

const shirt = (p) => ({
  category: 'shirts',
  brand: 'aura',
  sleeve: 'Full',
  cuff: 'Single',
  stock: 16,
  pattern: 'Solid',
  tags: [],
  ...p,
});

export const products = [
  shirt({ id: 'sera-olive', family: 'sera', name: 'Sera Olive Striped Full Sleeve Single Cuff Tailored Fit Semi Formal Silk Touch Egyptian Giza Cotton Shirt', price: 4529, fit: 'Tailored', occasion: 'Semi Formal', fabric: 'Egyptian Giza Cotton', color: 'Olive', hex: '#6e6a38', pattern: 'Striped', tags: ['new', 'giza'], image: photos.colorstripe, image2: photos.stripe }),
  shirt({ id: 'sera-blue', family: 'sera', name: 'Sera Blue Striped Full Sleeve Single Cuff Tailored Fit Semi Formal Silk Touch Egyptian Giza Cotton Shirt', price: 4529, fit: 'Tailored', occasion: 'Semi Formal', fabric: 'Egyptian Giza Cotton', color: 'Blue', hex: '#3e5f86', pattern: 'Striped', tags: ['new', 'giza'], image: photos.stripe, image2: photos.blueMan }),
  shirt({ id: 'velluto-brown', family: 'velluto', name: 'Velluto Brown Solid Full Sleeve Single Cuff Classic Fit Semi Formal Dark Silk Touch Egyptian Giza Cotton Shirt', price: 4950, fit: 'Classic', occasion: 'Semi Formal', fabric: 'Egyptian Giza Cotton', color: 'Brown', hex: '#5c4632', tags: ['new', 'giza', 'evening'], image: photos.brown, image2: photos.fashion }),
  shirt({ id: 'velluto-navy', family: 'velluto', name: 'Velluto Navy Solid Full Sleeve Single Cuff Classic Fit Semi Formal Dark Silk Touch Egyptian Giza Cotton Shirt', price: 4950, fit: 'Classic', occasion: 'Semi Formal', fabric: 'Egyptian Giza Cotton', color: 'Navy', hex: '#1d2a44', tags: ['new', 'giza'], image: photos.navy, image2: photos.suit2 }),
  shirt({ id: 'velluto-purple', family: 'velluto', name: 'Velluto Purple Solid Full Sleeve Single Cuff Tailored Fit Semi Formal Dark Silk Touch Egyptian Giza Cotton Shirt', price: 4950, fit: 'Tailored', occasion: 'Semi Formal', fabric: 'Egyptian Giza Cotton', color: 'Purple', hex: '#5a3d62', tags: ['giza', 'evening'], image: photos.editorial, image2: photos.coat }),
  shirt({ id: 'velluto-grey', family: 'velluto', name: 'Velluto Dark Grey Solid Full Sleeve Single Cuff Classic Fit Semi Formal Dark Silk Touch Egyptian Giza Cotton Shirt', price: 4999, fit: 'Classic', occasion: 'Semi Formal', fabric: 'Egyptian Giza Cotton', color: 'Grey', hex: '#4d5156', tags: ['giza'], image: photos.grey, image2: photos.model }),
  shirt({ id: 'lumen-olive', family: 'lumen', name: 'Lumen Olive Solid Full Sleeve Single Cuff Tailored Fit Classic Formal Cotton Shirt', price: 3899, fit: 'Tailored', occasion: 'Formal', fabric: 'Cotton', color: 'Olive', hex: '#6a6b45', tags: ['new', 'banker'], image: photos.flat, image2: photos.hang }),
  shirt({ id: 'lumen-white', family: 'lumen', name: 'Lumen White Solid Full Sleeve Single Cuff Tailored Fit Classic Formal Cotton Shirt', price: 3899, fit: 'Tailored', occasion: 'Formal', fabric: 'Cotton', color: 'White', hex: '#f4f1ea', tags: ['best', 'banker', 'white'], image: photos.white, image2: photos.fold }),
  shirt({ id: 'marlowe-olive', family: 'marlowe', name: 'Marlowe Olive Striped Full Sleeve Single Cuff Classic Fit Classic Formal Silk Touch Egyptian Giza Cotton Shirt', price: 4529, fit: 'Classic', occasion: 'Formal', fabric: 'Egyptian Giza Cotton', color: 'Olive', hex: '#7a7344', pattern: 'Striped', tags: ['giza', 'banker'], image: photos.hang, image2: photos.colorstripe }),
  shirt({ id: 'marlowe-brown', family: 'marlowe', name: 'Marlowe Brown Striped Full Sleeve Single Cuff Classic Fit Classic Formal Silk Touch Egyptian Giza Cotton Shirt', price: 4529, fit: 'Classic', occasion: 'Formal', fabric: 'Egyptian Giza Cotton', color: 'Brown', hex: '#6b4e34', pattern: 'Striped', tags: ['giza'], image: photos.coat, image2: photos.brown }),
  shirt({ id: 'bianco-white', family: 'bianco', name: 'Bianco White Striped Full Sleeve Single Cuff Classic Fit Classic Formal Cotton Shirt', price: 4299, fit: 'Classic', occasion: 'Formal', fabric: 'Cotton', color: 'White', hex: '#f7f7f5', pattern: 'Striped', tags: ['new', 'white', 'banker'], image: photos.fold, image2: photos.white }),
  shirt({ id: 'bianco-cream', family: 'bianco', name: 'Bianco Cream Striped Full Sleeve Single Cuff Classic Fit Classic Formal Cotton Shirt', price: 4299, fit: 'Classic', occasion: 'Formal', fabric: 'Cotton', color: 'Cream', hex: '#e7dcc4', pattern: 'Striped', tags: ['banker'], image: photos.folds, image2: photos.linenMan }),
  shirt({ id: 'arden-brown', family: 'arden', name: 'Arden Brown Solid Full Sleeve Single Cuff Tailored Fit Semi Formal Two Ply Mercerized Cotton Shirt', price: 4213, fit: 'Tailored', occasion: 'Semi Formal', fabric: 'Two Ply Mercerized Cotton', color: 'Brown', hex: '#6a4a32', tags: ['mercerized'], image: photos.fashion, image2: photos.brown }),
  shirt({ id: 'arden-navy', family: 'arden', name: 'Arden Navy Solid Full Sleeve Single Cuff Tailored Fit Semi Formal Two Ply Mercerized Cotton Shirt', price: 4213, fit: 'Tailored', occasion: 'Semi Formal', fabric: 'Two Ply Mercerized Cotton', color: 'Navy', hex: '#243656', tags: ['mercerized', 'best'], image: photos.suit2, image2: photos.navy }),
  shirt({ id: 'twill-chocolate', name: 'Fine Twill Chocolate Solid Full Sleeve Single Cuff Classic Fit Semi Formal Superfine Cotton Shirt', price: 4529, fit: 'Classic', occasion: 'Semi Formal', fabric: 'Superfine Cotton', color: 'Chocolate', hex: '#4a3426', tags: ['superfine', 'evening'], image: photos.leather, image2: photos.brown }),
  shirt({ id: 'twill-maroon', name: 'Fine Twill Maroon Solid Full Sleeve Single Cuff Tailored Fit Semi Formal Superfine Cotton Shirt', price: 4529, fit: 'Tailored', occasion: 'Semi Formal', fabric: 'Superfine Cotton', color: 'Maroon', hex: '#6e2433', tags: ['superfine'], image: photos.portrait, image2: photos.editorial }),
  shirt({ id: 'twill-blue', name: 'Fine Twill Blue Solid Full Sleeve Single Cuff Classic Fit Semi Formal Superfine Cotton Shirt', price: 4529, fit: 'Classic', occasion: 'Semi Formal', fabric: 'Superfine Cotton', color: 'Blue', hex: '#3d6494', tags: ['superfine', 'best'], image: photos.blueMan, image2: photos.rack }),
  shirt({ id: 'twill-olive', name: 'Fine Twill Olive Solid Full Sleeve Single Cuff Classic Fit Semi Formal Superfine Cotton Shirt', price: 4529, fit: 'Classic', occasion: 'Semi Formal', fabric: 'Superfine Cotton', color: 'Olive', hex: '#5f6840', tags: ['superfine'], image: photos.pile, image2: photos.flat }),
  shirt({ id: 'orvieto-olive', name: 'Orvieto Olive Solid Full Sleeve Single Cuff Classic Fit Classic Formal Two Ply Mercerized Cotton Shirt', price: 4529, fit: 'Classic', occasion: 'Formal', fabric: 'Two Ply Mercerized Cotton', color: 'Olive', hex: '#5d6236', tags: ['mercerized', 'banker'], image: photos.man, image2: photos.model }),
  shirt({ id: 'nocturne-green', name: 'Nocturne Green Solid Full Sleeve Single Cuff Tailored Fit Semi Formal Dark Silk Touch Egyptian Giza Cotton Shirt', price: 4950, fit: 'Tailored', occasion: 'Evening', fabric: 'Egyptian Giza Cotton', color: 'Green', hex: '#2f4634', tags: ['giza', 'evening'], image: photos.closet, image2: photos.coat }),
  shirt({ id: 'chiara-navy', name: 'Chiara Navy Solid Full Sleeve Single Cuff Tailored Fit Semi Formal Dark Cotton Shirt', price: 3999, fit: 'Tailored', occasion: 'Semi Formal', fabric: 'Cotton', color: 'Navy', hex: '#1c2740', tags: ['new'], image: photos.rack, image2: photos.navy }),
  shirt({ id: 'filo-navy', name: 'Filo Navy Solid Full Sleeve Single Cuff Classic Fit Dark Semi Formal Cotton Shirt', price: 4529, fit: 'Classic', occasion: 'Semi Formal', fabric: 'Cotton', color: 'Navy', hex: '#1a2438', tags: ['evening'], image: photos.black, image2: photos.navy }),
  shirt({ id: 'costa-olive', name: 'Costa Slub Olive Striped Full Sleeve Tailored Fit Casual Cotton Shirt', price: 3159, brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'Cotton', color: 'Olive', hex: '#6d7348', pattern: 'Striped', tags: ['new'], image: photos.denim, image2: photos.colorstripe }),
  shirt({ id: 'harbor-olive', name: 'Harbor Oxford Dark Olive Solid Full Sleeve Tailored Fit Casual Cotton Shirt', price: 3475, brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'Oxford Cotton', color: 'Olive', hex: '#3f4a32', tags: ['best'], image: photos.model, image2: photos.denim }),
  shirt({ id: 'harbor-navy', name: 'Harbor Oxford Navy Solid Full Sleeve Tailored Fit Casual Cotton Shirt', price: 3475, brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'Oxford Cotton', color: 'Navy', hex: '#24344e', tags: ['new'], image: photos.man, image2: photos.blueMan }),
  shirt({ id: 'muslin-beige', name: 'Muslin Beige Solid Full Sleeve Tailored Fit Casual Blended Shirt', price: 3159, brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'Cotton Blend', color: 'Beige', hex: '#cbb892', image: photos.beige, image2: photos.linenMan }),
  shirt({ id: 'dobby-rust', name: 'Dobby Garment Dyed Rust Striped Full Sleeve Tailored Fit Casual Cotton Shirt', price: 3475, brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'Cotton', color: 'Rust', hex: '#8d4b32', pattern: 'Striped', image: photos.pile, image2: photos.editorial }),
  shirt({ id: 'riviera-white', name: 'Riviera White Printed Full Sleeve Single Cuff Slim Fit Party Wear Viscose Shirt', price: 3159, brand: 'club', fit: 'Slim', occasion: 'Party', fabric: 'Viscose', color: 'White', hex: '#f3f3f1', pattern: 'Printed', tags: ['evening'], image: photos.whitetee, image2: photos.fold }),
  shirt({ id: 'gloss-navy', name: 'Gloss Navy Satin Stretch Solid Full Sleeve Single Cuff Slim Fit Party Wear Shirt', price: 3159, brand: 'club', fit: 'Slim', occasion: 'Party', fabric: 'Satin Stretch', color: 'Navy', hex: '#182033', tags: ['best', 'evening', 'tuxedo'], image: photos.blacktee, image2: photos.black }),
  shirt({ id: 'solace-sand', name: 'Solace Sand Satin Full Sleeve Single Cuff Slim Fit Party Wear Poly Satin Shirt', price: 3159, brand: 'club', fit: 'Slim', occasion: 'Party', fabric: 'Poly Satin', color: 'Sand', hex: '#d9c7a4', image: photos.beige, image2: photos.editorial }),
  shirt({ id: 'lido-sky', name: 'Lido Sky Solid Short Sleeve Relaxed Fit Linen Shirt', price: 4290, brand: 'a3', fit: 'Relaxed', occasion: 'Casual', fabric: 'European Linen', color: 'Sky', hex: '#9eb4c8', sleeve: 'Short', tags: ['new', 'linen'], image: photos.linenMan, image2: photos.rack2 }),
  shirt({ id: 'lido-wine', name: 'Lido Wine Solid Full Sleeve Relaxed Fit Pure Linen Shirt', price: 4590, brand: 'a3', fit: 'Relaxed', occasion: 'Casual', fabric: 'European Linen', color: 'Wine', hex: '#6a2e38', tags: ['linen', 'wedding'], image: photos.portrait, image2: photos.editorial }),
  shirt({ id: 'aurelia-white', name: 'Aurelia White Solid Full Sleeve Double Cuff Classic Fit Formal Italian Giza Cotton Shirt', price: 6290, fit: 'Classic', occasion: 'Formal', fabric: 'Italian Egyptian Giza Cotton', color: 'White', hex: '#fbfbf8', cuff: 'Double', tags: ['aurelia', 'italian', 'tuxedo', 'best', 'white'], image: photos.white, image2: photos.tie }),
  shirt({ id: 'aurelia-ivory', name: 'Aurelia Ivory Solid Full Sleeve Double Cuff Classic Fit Formal Italian Giza Cotton Shirt', price: 6490, fit: 'Classic', occasion: 'Evening', fabric: 'Italian Egyptian Giza Cotton', color: 'Ivory', hex: '#f3ead7', cuff: 'Double', tags: ['aurelia', 'italian', 'tuxedo'], image: photos.fold, image2: photos.tie }),
  shirt({ id: 'rosa-pink', name: 'Rosa Pink Solid Full Sleeve Single Cuff Classic Fit Semi Formal Two Ply Mercerized Cotton Shirt', price: 4199, fit: 'Classic', occasion: 'Semi Formal', fabric: 'Two Ply Mercerized Cotton', color: 'Pink', hex: '#e4b7c2', tags: ['mercerized', 'banker'], image: photos.tees, image2: photos.folds }),
  { id: 'trasito-stone', name: 'Trasito Stone Tailored Fit Linen Trousers', price: 5793, category: 'trousers', brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'European Linen', color: 'Stone', hex: '#cfc3ad', tags: ['linen', 'new'], image: photos.pants, image2: photos.beige, stock: 12 },
  { id: 'ledger-navy', name: 'Ledger Navy Classic Fit Formal Wool Blend Trousers', price: 4990, category: 'trousers', brand: 'aura', fit: 'Classic', occasion: 'Formal', fabric: 'Wool Blend', color: 'Navy', hex: '#1c2744', tags: ['best', 'banker'], image: photos.navy, image2: photos.suit2, stock: 10 },
  { id: 'halden-grey', name: 'Halden Grey Tailored Fit Semi Formal Stretch Trousers', price: 4490, category: 'trousers', brand: 'aura', fit: 'Tailored', occasion: 'Semi Formal', fabric: 'Stretch Wool Blend', color: 'Grey', hex: '#8d9094', image: photos.grey, image2: photos.model, stock: 11, tags: [] },
  { id: 'campo-beige', name: 'Campo Beige Relaxed Fit Casual Cotton Chinos', price: 3990, category: 'trousers', brand: 'a3', fit: 'Relaxed', occasion: 'Casual', fabric: 'Cotton', color: 'Beige', hex: '#d8c7a4', tags: ['new'], image: photos.denim, image2: photos.pants, stock: 14 },
  { id: 'regent-navy', name: 'Regent Navy Classic Fit Two Button Wool Jacket', price: 12990, category: 'jackets', brand: 'aura', fit: 'Classic', occasion: 'Formal', fabric: 'Wool', color: 'Navy', hex: '#1a2744', tags: ['best', 'banker'], image: photos.navy, image2: photos.suit2, stock: 6 },
  { id: 'siena-brown', name: 'Siena Brown Bandhgala in Wool Silk', price: 14990, category: 'bandhgalas', brand: 'aura', fit: 'Tailored', occasion: 'Evening', fabric: 'Wool Silk', color: 'Brown', hex: '#5a3b28', tags: ['wedding', 'best'], image: photos.brown, image2: photos.coat, stock: 5 },
  { id: 'siena-black', name: 'Siena Black Bandhgala in Wool Silk', price: 15490, category: 'bandhgalas', brand: 'aura', fit: 'Tailored', occasion: 'Evening', fabric: 'Wool Silk', color: 'Black', hex: '#161616', tags: ['wedding', 'tuxedo'], image: photos.black, image2: photos.leather, stock: 4 },
  { id: 'mistral-olive', name: 'Mistral Olive Unstructured Casual Jacket', price: 8990, category: 'jackets', brand: 'a3', fit: 'Relaxed', occasion: 'Casual', fabric: 'Cotton Linen', color: 'Olive', hex: '#59613a', tags: ['new', 'linen'], image: photos.bomber, image2: photos.coat, stock: 8 },
  { id: 'noir-tuxedo', name: 'Noir Black Single Breasted Tuxedo Jacket', price: 18990, category: 'jackets', brand: 'club', fit: 'Slim', occasion: 'Evening', fabric: 'Wool Barathea', color: 'Black', hex: '#111111', tags: ['tuxedo', 'best'], image: photos.black, image2: photos.suit2, stock: 4 },
  { id: 'navy-silk-tie', name: 'Navy Solid Silk Classic Tie', price: 1967, category: 'ties', brand: 'aura', fit: 'Classic', occasion: 'Formal', fabric: 'Silk', color: 'Navy', hex: '#1d2c4d', tieStyle: 'classic', material: 'Silk', tags: ['best', 'banker'], image: photos.tie, image2: photos.navy, stock: 20 },
  { id: 'burgundy-slim-tie', name: 'Burgundy Silk Slim Tie', price: 2190, category: 'ties', brand: 'aura', fit: 'Slim', occasion: 'Semi Formal', fabric: 'Silk', color: 'Burgundy', hex: '#6e2433', tieStyle: 'slim', material: 'Silk', tags: [], image: photos.editorial, image2: photos.tie, stock: 18 },
  { id: 'black-bow', name: 'Black Silk Bow Tie', price: 2499, category: 'ties', brand: 'club', fit: 'Classic', occasion: 'Evening', fabric: 'Silk', color: 'Black', hex: '#111111', tieStyle: 'bow', material: 'Silk', tags: ['tuxedo'], image: photos.black, image2: photos.tie, stock: 15 },
  { id: 'olive-poly-tie', name: 'Olive Microfibre Classic Tie', price: 1490, category: 'ties', brand: 'aura', fit: 'Classic', occasion: 'Semi Formal', fabric: 'Polyester', color: 'Olive', hex: '#5d6638', tieStyle: 'classic', material: 'Polyester', tags: [], image: photos.flat, image2: photos.tie, stock: 22 },
  { id: 'gilt-cufflinks', name: 'Gilt Oval Brass Cufflinks', price: 2499, category: 'accessories', kind: 'cufflinks', brand: 'aura', occasion: 'Formal', fabric: 'Brass', color: 'Gold', hex: '#b9975b', tags: ['best'], image: photos.closet, image2: photos.white, stock: 20 },
  { id: 'cream-square', name: 'Cream All Over Silk Pocket Square', price: 1290, category: 'accessories', kind: 'pocket-squares', brand: 'aura', occasion: 'Formal', fabric: 'Silk', color: 'Cream', hex: '#eadcbe', tags: [], image: photos.folds, image2: photos.fold, stock: 24 },
  { id: 'suede-belt', name: 'Brown Suede Plain Leather Belt', price: 2499, category: 'accessories', kind: 'belts', brand: 'aura', occasion: 'Casual', fabric: 'Leather', color: 'Brown', hex: '#6b4a32', tags: ['best'], image: photos.leather, image2: photos.brown, stock: 14 },
  { id: 'navy-socks', name: 'Navy Fil d’Ecosse Cotton Socks', price: 690, category: 'accessories', kind: 'socks', brand: 'aura', occasion: 'Formal', fabric: 'Cotton', color: 'Navy', hex: '#1e2a44', tags: [], image: photos.socks, image2: photos.navy, stock: 30 },
  { id: 'white-hank', name: 'White Hemstitched Cotton Handkerchief', price: 490, category: 'accessories', kind: 'handkerchiefs', brand: 'aura', occasion: 'Formal', fabric: 'Cotton', color: 'White', hex: '#f7f7f4', tags: [], image: photos.fold, image2: photos.white, stock: 40 },
  { id: 'vest-navy', name: 'Navy Fine Rib Cotton Vest', price: 1290, category: 'accessories', kind: 'innerwear', brand: 'aura', occasion: 'Casual', fabric: 'Cotton', color: 'Navy', hex: '#24324a', tags: [], image: photos.tee2, image2: photos.whitetee, stock: 18 },
  { id: 'gift-box', name: 'Aura Shirt Gift Box', price: 990, category: 'accessories', kind: 'gift-boxes', brand: 'aura', occasion: 'Formal', fabric: 'Board', color: 'Ivory', hex: '#f3ead7', tags: [], image: photos.store, image2: photos.closet, stock: 25 },
  { id: 'polo-navy', family: 'polo', name: 'Weekend Navy Garment Dyed Polo', price: 2990, category: 'polos', brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'Cotton Pique', color: 'Navy', hex: '#1e2d4a', tags: ['new'], image: photos.polo, image2: photos.navy, stock: 16 },
  { id: 'polo-white', family: 'polo', name: 'Weekend White Garment Dyed Polo', price: 2990, category: 'polos', brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'Cotton Pique', color: 'White', hex: '#f5f5f2', tags: [], image: photos.whitetee, image2: photos.polo, stock: 16 },
  { id: 'polo-olive', family: 'polo', name: 'Weekend Olive Garment Dyed Polo', price: 3190, category: 'polos', brand: 'a3', fit: 'Tailored', occasion: 'Casual', fabric: 'Cotton Pique', color: 'Olive', hex: '#59633a', tags: ['best'], image: photos.blacktee, image2: photos.denim, stock: 12 },
];

export const inr = (n) => `₹ ${Number(n).toLocaleString('en-IN')}`;

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export function familyOf(product) {
  if (!product?.family) return [product].filter(Boolean);
  return products.filter((p) => p.family === product.family);
}

export function sizesFor(product) {
  if (!product) return [];
  if (['shirts', 'jackets', 'bandhgalas'].includes(product.category)) return ['38', '39', '40', '42', '44', '46'];
  if (product.category === 'trousers') return ['30', '32', '34', '36', '38', '40'];
  if (product.category === 'polos') return ['S', 'M', 'L', 'XL', 'XXL'];
  return ['One Size'];
}

export function blurb(product) {
  const fit = (product.fit || 'easy').toLowerCase();
  return `${product.name.split(' ').slice(0, 2).join(' ')} is made in the Aura workroom from ${product.fabric.toLowerCase()}. The ${fit} shape is cut for ${product.occasion.toLowerCase()} dressing, with a collar that sits clean and a cloth that keeps its line through a long day.`;
}

export const care = 'Machine wash cold with similar colours, or dry clean. Warm iron on the reverse. Do not bleach. Hang to dry.';

export function inCollection(product, slug) {
  const c = product.category;
  const tags = product.tags || [];
  switch (slug) {
    case 'new-arrivals': return tags.includes('new');
    case 'best-sellers': return tags.includes('best');
    case 'aura': return product.brand === 'aura';
    case 'aura-club': return product.brand === 'club';
    case 'a3': return product.brand === 'a3';
    case 'classic-fit': return product.fit === 'Classic';
    case 'tailored-fit': return product.fit === 'Tailored';
    case 'slim-fit': return product.fit === 'Slim';
    case 'formal-shirts': return c === 'shirts' && product.occasion === 'Formal';
    case 'semi-formal': return c === 'shirts' && product.occasion === 'Semi Formal';
    case 'linen':
    case 'coastal-linen': return /linen/i.test(product.fabric);
    case 'evening':
    case 'after-hours': return product.occasion === 'Evening' || product.occasion === 'Party' || tags.includes('evening');
    case 'casual-shirts': return c === 'shirts' && product.occasion === 'Casual';
    case 'giza': return /giza/i.test(product.fabric);
    case 'mercerized': return /mercerized/i.test(product.fabric);
    case 'superfine': return /superfine/i.test(product.fabric);
    case 'techno': return /satin|viscose|stretch/i.test(product.fabric);
    case 'white-shirts': return c === 'shirts' && product.color === 'White';
    case 'cream-shirts': return c === 'shirts' && (product.color === 'Cream' || product.color === 'Ivory');
    case 'blue-shirts':
    case 'true-blues': return ['Blue', 'Navy', 'Sky'].includes(product.color);
    case 'pink-shirts': return product.color === 'Pink';
    case 'pristine-whites': return ['White', 'Cream', 'Ivory'].includes(product.color);
    case 'classic-ties': return c === 'ties' && product.tieStyle === 'classic';
    case 'slim-ties': return c === 'ties' && product.tieStyle === 'slim';
    case 'bow-ties': return c === 'ties' && product.tieStyle === 'bow';
    case 'silk-ties': return c === 'ties' && product.material === 'Silk';
    case 'poly-ties': return c === 'ties' && product.material === 'Polyester';
    case 'ties': return c === 'ties';
    case 'classic-jackets': return c === 'jackets' && product.occasion !== 'Casual';
    case 'bandhgalas': return c === 'bandhgalas';
    case 'casual-jackets': return c === 'jackets' && product.occasion === 'Casual';
    case 'jackets': return c === 'jackets';
    case 'formal-trousers': return c === 'trousers' && product.occasion === 'Formal';
    case 'semi-formal-trousers': return c === 'trousers' && product.occasion === 'Semi Formal';
    case 'casual-trousers': return c === 'trousers' && product.occasion === 'Casual';
    case 'trousers': return c === 'trousers';
    case 'shirts': return c === 'shirts';
    case 'accessories': return c === 'accessories';
    case 'polos':
    case 'weekend-polos': return c === 'polos';
    case 'cufflinks': return product.kind === 'cufflinks';
    case 'pocket-squares': return product.kind === 'pocket-squares';
    case 'belts': return product.kind === 'belts';
    case 'innerwear': return product.kind === 'innerwear';
    case 'socks': return product.kind === 'socks';
    case 'handkerchiefs': return product.kind === 'handkerchiefs';
    case 'gift-boxes': return product.kind === 'gift-boxes';
    case 'club-wear':
    case 'trendy-club': return product.brand === 'club' || product.occasion === 'Party';
    case 'tuxedo':
    case 'black-tie': return tags.includes('tuxedo');
    case 'wedding':
    case 'ceremonial': return tags.includes('wedding') || c === 'bandhgalas';
    case 'business':
    case 'bankers':
    case 'wall-street': return tags.includes('banker') || (c === 'shirts' && product.occasion === 'Formal');
    case 'relaxed-luxury': return product.brand === 'a3';
    case 'aurelia': return tags.includes('aurelia');
    case 'italian-giza': return tags.includes('italian') || tags.includes('aurelia');
    case 'short-sleeves': return product.sleeve === 'Short';
    case 'darks': return ['Navy', 'Brown', 'Grey', 'Black', 'Maroon', 'Chocolate', 'Wine', 'Green', 'Purple'].includes(product.color);
    default: return c === slug;
  }
}

export const collections = [
  { slug: 'true-blues', title: 'True Blues for Every Occasion', image: photos.blueMan },
  { slug: 'pristine-whites', title: 'Pristine Whites Crafted to Perfection', image: photos.white },
  { slug: 'giza', title: 'Egyptian Giza Cotton', image: photos.fold },
  { slug: 'mercerized', title: 'Mercerized Two-Ply Cotton', image: photos.fashion },
  { slug: 'linen', title: 'Pure Linen Woven from European Flax', image: photos.linenMan },
  { slug: 'short-sleeves', title: 'Short Sleeves', image: photos.rack2 },
  { slug: 'bankers', title: "The Banker's Collection", image: photos.tie },
  { slug: 'italian-giza', title: 'Italian Woven Egyptian Giza', image: photos.navy },
  { slug: 'darks', title: 'Darks for Evening Wear', image: photos.black },
  { slug: 'wedding', title: 'Sartorial Wedding Specials', image: photos.brown },
  { slug: 'relaxed-luxury', title: 'Relaxed Casuals', image: photos.beige },
  { slug: 'club-wear', title: 'Club Wear', image: photos.editorial },
];

export const occasions = [
  { slug: 'ceremonial', title: 'Ceremonial Dressing', image: photos.brown },
  { slug: 'black-tie', title: 'The Black Tie Look', image: photos.black },
  { slug: 'business', title: 'Classic Business Statements', image: photos.navy },
  { slug: 'after-hours', title: 'Black & White After Hours', image: photos.editorial },
  { slug: 'wall-street', title: 'The Wall Street Look', image: photos.tie },
  { slug: 'relaxed-luxury', title: 'Relaxed Luxury', image: photos.beige },
  { slug: 'coastal-linen', title: 'The Coastal Linen Look', image: photos.linenMan },
  { slug: 'trendy-club', title: 'Trendy Club Wear', image: photos.portrait },
  { slug: 'wedding', title: 'Classic Wedding Ensembles', image: photos.coat },
];

export const ensembles = [
  { id: 'evening-olive', title: 'Evening in Olive', items: ['sera-olive', 'trasito-stone', 'olive-poly-tie'] },
  { id: 'boardroom', title: 'The Boardroom', items: ['aurelia-white', 'ledger-navy', 'navy-silk-tie'] },
  { id: 'after-dark', title: 'After Dark', items: ['noir-tuxedo', 'aurelia-ivory', 'black-bow'] },
];

export const articles = [
  {
    slug: 'tuxedo-shirt',
    title: 'The evening shirt every wardrobe still needs',
    date: '1 Feb 2026',
    author: 'Aura Atelier',
    image: photos.tie,
    excerpt: 'A black-tie evening starts at the collar. The shirt has to hold its shape, take a stud, and stay white under lights.',
    body: [
      'A dinner jacket can only look as calm as the shirt underneath it. The evening shirt is the quiet piece: a firm collar, a bib that stays flat, and cuffs that accept a cufflink without collapsing.',
      'Aura cuts the Aurelia evening shirt in Italian Giza cotton with a double cuff and a clean front. It is meant for weddings, banquets, and the nights when a soft casual shirt would look unfinished.',
      'Own one in white and, if you dress after dark often, a second in ivory. They do different work under warm light, and neither should be the shirt you also wear to the office.',
    ],
  },
  {
    slug: 'white-shirts',
    title: 'One white shirt is a start. A set is a wardrobe.',
    date: '28 Jan 2026',
    author: 'Aura Atelier',
    image: photos.white,
    excerpt: 'White is not a single shirt. Formal, travel, linen, and evening whites are different clothes that happen to share a colour.',
    body: [
      'Most men can point to a white shirt. Fewer can tell you which white shirt belongs in a meeting, which one survives a flight, and which one is reserved for a dark jacket.',
      'A formal cotton with a structured collar is the office piece. A linen white is for heat. A double-cuff Giza white is for the evening. Treating them as one garment is how a white shirt starts to look tired.',
      'Aura keeps these as separate cloths and separate blocks. Build the set slowly. The point is that the right white is already pressed when the day changes plan.',
    ],
  },
  {
    slug: 'blue-shirts',
    title: 'Blue, worn properly, covers almost every day',
    date: '28 Jan 2026',
    author: 'Aura Atelier',
    image: photos.blueMan,
    excerpt: 'From a washed oxford to a navy Giza, blue moves from a Sunday to a boardroom without a costume change.',
    body: [
      'Blue survives because it has range. A sky linen reads as weekend. A mid blue twill reads as the office. A navy silk-touch Giza reads as evening, especially once the jacket comes off the chair.',
      'The mistake is buying five shirts in the same blue. Vary the cloth and the depth. Stripe, solid, oxford, and a darker ground will cover more of the week than a stack of identical sky blues.',
      'Aura’s blue edit runs from casual oxfords in the A3 line to formal Giza in the main collection. Start with one of each if the wardrobe is still thin.',
    ],
  },
  {
    slug: 'linen-shirts',
    title: 'Linen earns its place once the heat arrives',
    date: '28 Jan 2026',
    author: 'Aura Atelier',
    image: photos.linenMan,
    excerpt: 'European flax linen breathes, creases honestly, and gets better after the first season if the cut is right.',
    body: [
      'Hot months do not reward a dense twill. Linen lets air move, takes moisture, and looks correct once you stop fighting the crease.',
      'Aura’s Lido shirts use European flax linen in a relaxed block. They are cut to be worn open at the neck with the stone trouser, or buttoned with a soft jacket when the evening cools.',
      'Wash cold, hang dry, and iron while the cloth is slightly damp if you want a cleaner front. A little texture is the point.',
    ],
  },
  {
    slug: 'friday-dressing',
    title: 'Friday dressing, without the costume',
    date: '20 Jan 2026',
    author: 'Aura Atelier',
    image: photos.beige,
    excerpt: 'The useful Friday shirt is still a proper shirt. It is simply cut with less canvas and a cloth that can leave the office.',
    body: [
      'Friday dressing fails when it looks like a themed outfit. An oxford or a garment-dyed polo, a tailored chino, and a shoe you can walk in is enough.',
      'A3 is Aura’s relaxed line for that day: oxford shirts, polos, and unstructured jackets that still have a collar and a hem that sits right.',
      'Keep one Friday uniform ready. The real problem is deciding again every week.',
    ],
  },
  {
    slug: 'greener-workroom',
    title: 'What the workroom changes, and what it refuses to',
    date: '12 Jan 2026',
    author: 'Aura Atelier',
    image: photos.store,
    excerpt: 'Better cloth lasts longer than a slogan. Aura’s greener practice starts with fewer, longer-lived shirts.',
    body: [
      'A shirt that is replaced every season is the expensive one, even if the tag looks modest. Aura would rather sell a Giza or a linen you keep for years.',
      'Offcuts from the cutting table are held back for handkerchiefs and for the gift-box programme. Packaging is a rigid board box you can reuse.',
      'Clothing is not impact-free. The narrower promise is to make fewer, better clothes, and not waste the cloth already cut.',
    ],
  },
];

export const stores = [
  { city: 'Mumbai', name: 'Aura Bandra', address: 'Linking Road, Bandra West, Mumbai 400050', hours: '11:00 – 21:00', phone: '022 4000 1101' },
  { city: 'Mumbai', name: 'Aura Palladium', address: 'High Street Phoenix, Lower Parel, Mumbai 400013', hours: '11:00 – 21:30', phone: '022 4000 1102' },
  { city: 'New Delhi', name: 'Aura Khan Market', address: 'Khan Market, New Delhi 110003', hours: '11:00 – 20:30', phone: '011 4000 2201' },
  { city: 'Bengaluru', name: 'Aura UB City', address: 'Vittal Mallya Road, Bengaluru 560001', hours: '11:00 – 21:00', phone: '080 4000 3301' },
  { city: 'Hyderabad', name: 'Aura Banjara', address: 'Road No. 12, Banjara Hills, Hyderabad 500034', hours: '11:00 – 21:00', phone: '040 4000 4401' },
  { city: 'Chennai', name: 'Aura Nungambakkam', address: 'Khader Nawaz Khan Road, Chennai 600006', hours: '11:00 – 21:00', phone: '044 4000 5501' },
  { city: 'Pune', name: 'Aura Koregaon Park', address: 'North Main Road, Koregaon Park, Pune 411001', hours: '11:00 – 21:00', phone: '020 4000 6601' },
  { city: 'Chandigarh', name: 'Aura Sector 17', address: 'Sector 17, Chandigarh 160017', hours: '11:00 – 20:30', phone: '0172 4000 7701' },
];

export const categories = [
  { slug: 'shirts', name: 'Shirts', image: photos.blueMan },
  { slug: 'trousers', name: 'Trousers', image: photos.pants },
  { slug: 'jackets', name: 'Jackets', image: photos.navy },
  { slug: 'ties', name: 'Ties', image: photos.tie },
  { slug: 'bandhgalas', name: 'Bandhgalas', image: photos.brown },
  { slug: 'accessories', name: 'Accessories', image: photos.closet },
  { slug: 'polos', name: 'Polos', image: photos.polo },
];

const link = (label, slug) => ({ label, to: `/collection/${slug}` });

export const menus = [
  { label: 'New Arrivals', to: '/collection/new-arrivals' },
  { label: 'Best Sellers', to: '/collection/best-sellers' },
  { label: 'Brands', columns: { Houses: [link('Aura', 'aura'), link('Aura Club', 'aura-club'), link('A3 Relaxed Luxury', 'a3')] } },
  {
    label: 'Shirts',
    to: '/shop/shirts',
    columns: {
      Brands: [link('Aura', 'aura'), link('Aura Club', 'aura-club'), link('A3 Relaxed Luxury', 'a3')],
      Fit: [link('Classic', 'classic-fit'), link('Tailored', 'tailored-fit'), link('Slim', 'slim-fit')],
      Occasion: [link('Formal Shirts', 'formal-shirts'), link('Semi-Formal Shirts', 'semi-formal'), link('Linen Shirts', 'linen'), link('Evening Shirts', 'evening'), link('Casual Shirts', 'casual-shirts')],
      Fabric: [link('Egyptian Giza Cotton', 'giza'), link('Two Ply Mercerized Cotton', 'mercerized'), link('European Linen', 'linen'), link('Superfine Cotton', 'superfine'), link('Techno Fabrics', 'techno')],
      Colour: [link('White Shirts', 'white-shirts'), link('Cream Shirts', 'cream-shirts'), link('Blue Shirts', 'blue-shirts'), link('Pink Shirts', 'pink-shirts')],
    },
  },
  {
    label: 'Ties',
    to: '/shop/ties',
    columns: {
      Shape: [link('Classic', 'classic-ties'), link('Slim', 'slim-ties'), link('Bow', 'bow-ties')],
      Cloth: [link('Silk', 'silk-ties'), link('Polyester', 'poly-ties')],
    },
  },
  {
    label: 'Jackets',
    to: '/shop/jackets',
    columns: { Style: [link('Classic Jackets', 'classic-jackets'), link('Bandhgalas', 'bandhgalas'), link('Casual Jackets', 'casual-jackets')] },
  },
  {
    label: 'Trousers',
    to: '/shop/trousers',
    columns: { Occasion: [link('Formal', 'formal-trousers'), link('Semi-Formal', 'semi-formal-trousers'), link('Casual', 'casual-trousers')] },
  },
  {
    label: 'Accessories',
    to: '/shop/accessories',
    columns: {
      Edit: [link('Cufflinks', 'cufflinks'), link('Pocket Squares', 'pocket-squares'), link('Belts', 'belts'), link('Innerwear', 'innerwear'), link('Socks', 'socks'), link('Handkerchiefs', 'handkerchiefs'), link('Gift Boxes', 'gift-boxes')],
    },
  },
  { label: 'Polos', to: '/shop/polos' },
  { label: 'Collections', to: '/collections' },
];

export function collectionTitle(slug) {
  const found = collections.find((c) => c.slug === slug) || occasions.find((c) => c.slug === slug);
  if (found) return found.title;
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
}

export function related(product, count = 4) {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
}

export function searchProducts(q) {
  const term = q.trim().toLowerCase();
  if (!term) return [];
  return products.filter((p) =>
    [p.name, p.color, p.fabric, p.category, p.fit, p.occasion, p.brand].filter(Boolean).join(' ').toLowerCase().includes(term)
  );
}

export const brandName = { aura: 'Aura', club: 'Aura Club', a3: 'A3 Relaxed Luxury' };
