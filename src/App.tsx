import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Heart, 
  MessageCircle, 
  Truck, 
  Award, 
  CheckCircle2, 
  Camera, 
  X,
  Instagram,
  Youtube,
  ShieldCheck,
  BadgeCheck,
  Star
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: 'festive' | 'leather' | 'baby' | 'resin' | 'drinkware' | 'corporate';
  tag: string;
  image: string;
  description: string;
  features: string[];
  badge?: string;
  price: number;
  originalPrice?: number;
}

const PRODUCTS: Product[] = [
  {
    id: 'karwa-thali-set',
    name: 'Karwa Chauth Pooja Thali 5-Piece Set',
    category: 'festive',
    tag: 'Karwa Chauth Special',
    image: '/assets/karwachauth-thali.png',
    description: 'Custom couple photo Thali, matching Chalni (sieve), Lota, Steel Glass, and velvet embroidered cover with golden gota borders.',
    features: [
      '5-Piece Matching Set with Couple Photo',
      'Intricate Gota Patti & Mirror Lace Work',
      'Includes Diya & Shagun Roli Containers'
    ],
    badge: 'Festive Bestseller',
    price: 999,
    originalPrice: 1100
  },
  {
    id: 'karwa-led-lamp',
    name: 'Karwa Chauth Glowing LED Acrylic Lamp',
    category: 'festive',
    tag: 'Couple Keepsake',
    image: '/assets/karwachauth-lamp.png',
    description: 'Optical acrylic couple portrait lamp with festive floral accents, Diya motifs, and warm illuminated wooden base.',
    features: [
      'Personalised Couple Photo & Names',
      'Warm Ambient Light Wooden Base (USB)',
      'Fade-Proof Japanese UV Inks'
    ],
    badge: 'Popular Gift',
    price: 699,
    originalPrice: 800
  },
  {
    id: 'leather-wallet-combo',
    name: 'Custom Leather Wallet, Pen & Keychain Set',
    category: 'leather',
    tag: 'Men & Couples',
    image: '/assets/wallets.png',
    description: 'Stitched leather wallet with engraved metallic nameplate and custom charm, paired with an engraved pen and photo keychain.',
    features: [
      'Custom Nameplate + Charm (Crown, Bike, Heart)',
      'Matching Engraved Pen & Photo Keychain',
      'Luxury Velvet-Padded Gift Box'
    ],
    badge: 'Bestseller',
    price: 699,
    originalPrice: 800
  },
  {
    id: 'baby-birth-frame',
    name: '3D Wooden Baby Birth Milestone Frame',
    category: 'baby',
    tag: 'Newborn Keepsake',
    image: '/assets/baby-milestone.png',
    description: '3D wooden milestone frame capturing baby photo, birth date, time, weight, blood group, hospital, and rasi details.',
    features: [
      'Dimensional 3D Date, Time & Weight Badges',
      'Available in Red, Pink Footprint, Black & Natural Wood',
      'Custom Baby Photo & Parents’ Names'
    ],
    badge: 'Parent’s Choice',
    price: 499,
    originalPrice: 599
  },
  {
    id: 'resin-pearl-plaque',
    name: 'Epoxy Resin Photo Plaque with Pearls',
    category: 'resin',
    tag: 'Resin Art',
    image: '/assets/resin-plaque.png',
    description: 'Handcrafted round resin plaque with organic gold foil edges, embedded faux pearls, and personalized photo.',
    features: [
      '100% Handcrafted Non-Yellowing Crystal Resin',
      'Lustrous Pearl Border & Golden Shimmer Edges',
      'Custom Photo Embed & Gold Lettering'
    ],
    badge: 'Handmade',
    price: 649,
    originalPrice: 800
  },
  {
    id: 'glass-sipper-bamboo',
    name: 'Glass Can Sipper with Bamboo Lid & Straw',
    category: 'drinkware',
    tag: 'Drinkware',
    image: '/assets/glass-sipper.png',
    description: 'Borosilicate glass can tumbler with natural eco-friendly bamboo lid, bent glass straw, and custom calligraphy name.',
    features: [
      'Pure Borosilicate Glass (Hot & Cold Safe)',
      'Natural Bamboo Lid with Splash-Proof Ring',
      'Permanent Water-Resistant Name Calligraphy'
    ],
    badge: 'Trending',
    price: 599,
    originalPrice: 899
  },
  {
    id: 'corporate-executive-set',
    name: 'Executive Insulated Bottle & Diary Hamper',
    category: 'corporate',
    tag: 'Executive Set',
    image: '/assets/corporate-set.png',
    description: 'Double-wall stainless steel thermal bottle with laser-engraved name, matching faux leather diary planner, and metal pen.',
    features: [
      '12-Hour Thermal Insulated Steel Bottle',
      'Faux Leather Diary with Magnetic Lock',
      'Laser Precision Name / Logo Engraving'
    ],
    badge: 'Corporate',
    price: 849,
    originalPrice: 1000
  }
];

const WHATSAPP_NUMBER = '919588338984';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewName, setPreviewName] = useState<string>('DEEPESH');
  const [previewCharm, setPreviewCharm] = useState<string>('crown');
  const [previewPlateColor, setPreviewPlateColor] = useState<'gold' | 'rosegold' | 'silver'>('gold');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const sendWhatsApp = (msg: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleLivePreviewOrder = () => {
    const charms: Record<string, string> = {
      crown: 'Crown 👑',
      mustache: 'Mustache 🥸',
      bike: 'Motorcycle 🏍️',
      heart: 'Heart ❤️'
    };
    const msg = `Hi Gift Case India! I want to order a custom gift with:\n• Name: ${previewName}\n• Charm: ${charms[previewCharm] || previewCharm}\n• Finish: ${previewPlateColor.toUpperCase()}\n\nPlease share price, mockup & details on WhatsApp.`;
    sendWhatsApp(msg);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#331118] font-sans antialiased selection:bg-[#E68F9F] selection:text-white">
      
      {/* Top Bar */}
      <div className="bg-[#41101C] text-[#FCF7EB] text-xs py-2 px-4 text-center font-medium tracking-wide">
        <span>✨ Handcrafted Personalised Gifts · Pan India Express Shipping · Instant WhatsApp Ordering</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F9DCE2] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <img 
              src="/assets/logo.png" 
              alt="Gift Case India Logo" 
              className="w-13 h-13 rounded-full object-cover border border-[#F2BAC7] shadow-sm group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="block font-display font-bold text-2xl tracking-tight text-[#41101C] leading-none">
                Gift Case <span className="text-[#D5657B] italic">India</span>
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C99E3F] mt-0.5">
                @giftcaseindia
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#5A1B29]">
            <a href="#products" className="hover:text-[#D5657B] transition-colors">Products</a>
            <a href="#customizer" className="hover:text-[#D5657B] transition-colors flex items-center gap-1 text-[#D5657B]">
              <Sparkles className="w-3.5 h-3.5 text-[#DFB75A]" /> Live Preview
            </a>
            <a href="#trust" className="hover:text-[#D5657B] transition-colors">Trust &amp; Safety</a>
            <a href="#how-it-works" className="hover:text-[#D5657B] transition-colors">How to Order</a>
          </nav>

          {/* Social Links & WhatsApp CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-1">
              <a 
                href="https://www.youtube.com/@Giftcaseindia" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#5A1B29] hover:text-red-600 transition-colors p-2 rounded-full hover:bg-[#FDF0F3]"
                title="Watch on YouTube @Giftcaseindia"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4 text-red-600" />
              </a>
              <a 
                href="https://instagram.com/giftcaseindia" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#5A1B29] hover:text-[#D5657B] transition-colors p-2 rounded-full hover:bg-[#FDF0F3]"
                title="Follow on Instagram @giftcaseindia"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4 text-[#D5657B]" />
              </a>
            </div>

            <button
              onClick={() => sendWhatsApp('Hi Gift Case India! I would like to inquire about placing a custom gift order.')}
              className="btn-luxury bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="pt-8 pb-14 md:pt-12 md:pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FDF0F3] border border-[#F2BAC7] rounded-full px-3.5 py-1 text-xs font-semibold text-[#943349]">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Personalised Gifts Made with Love</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#41101C] leading-tight">
              Unique Custom Gifts <br />
              <span className="font-heading italic text-[#D5657B]">for Every Moment</span>
            </h1>

            <p className="text-sm sm:text-base text-[#5A1B29]/80 max-w-lg mx-auto md:mx-0">
              Custom name-engraved leather wallets, Karwa Chauth pooja thalis &amp; LED lamps, 3D baby milestone frames, resin keepsakes, and aesthetic glass sippers.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a href="#products" className="btn-luxury bg-[#41101C] text-white px-6 py-3 rounded-full text-sm font-bold shadow">
                View Collection
              </a>
              <a href="#customizer" className="btn-luxury bg-white border border-[#DFB75A] text-[#41101C] px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:bg-[#FCF7EB]">
                Try Name Preview ✨
              </a>
            </div>

            {/* Feature highlights */}
            <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#5A1B29] font-medium">
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#C99E3F]" /> Laser Engraved</span>
              <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#D5657B]" /> HD UV Photo Prints</span>
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-emerald-600" /> Pan India Delivery</span>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="md:col-span-5">
            <div className="bg-white p-3 rounded-3xl shadow-lg border border-[#F9DCE2]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#FDF0F3]">
                <img 
                  src="/assets/karwachauth-thali.png" 
                  alt="Karwa Chauth Pooja Thali Set" 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 left-3 bg-[#DFB75A] text-[#2A0810] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shadow">
                  Festive Special
                </span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-[#41101C]">Karwa Chauth 5-Pc Thali Set</h3>
                  <p className="text-xs text-[#752A3B]">Custom Photo Thali, Channi &amp; Lota</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-bold text-[#41101C] text-sm">₹999</span>
                    <span className="text-[11px] text-[#752A3B]/60 line-through">₹1,100</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded">Save 25%</span>
                  </div>
                </div>
                <button 
                  onClick={() => sendWhatsApp('Hi Gift Case India! I would like to order the Karwa Chauth Pooja Thali Set (₹1,499).')}
                  className="bg-[#D5657B] hover:bg-[#B54961] text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-sm cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section id="products" className="py-14 bg-white border-t border-[#F9DCE2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#41101C]">Our Handcrafted Gifts</h2>
            <p className="text-xs sm:text-sm text-[#752A3B] mt-1">Select any item to customize with names, charms, or photos.</p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {[
                { id: 'all', label: 'All' },
                { id: 'festive', label: 'Karwa Chauth' },
                { id: 'leather', label: 'Wallets' },
                { id: 'baby', label: 'Baby Frames' },
                { id: 'drinkware', label: 'Glass Sipper' },
                { id: 'resin', label: 'Resin Plaques' },
                { id: 'corporate', label: 'Corporate' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#41101C] text-white'
                      : 'bg-[#FFF9F6] text-[#752A3B] border border-[#F9DCE2] hover:border-[#41101C]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                className="bg-[#FFF9F6] rounded-2xl border border-[#F9DCE2] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] bg-[#FDF0F3] overflow-hidden group">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-[#41101C] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      {product.tag}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-display font-bold text-lg text-[#41101C] leading-snug">
                      {product.name}
                    </h3>

                    {/* Price display */}
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-lg font-bold text-[#41101C]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-[#752A3B]/60 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#752A3B] mt-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mt-3 space-y-1">
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#5A1B29] font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="grid grid-cols-2 gap-2 border-t border-[#F9DCE2] pt-3">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="bg-white hover:bg-[#FDF0F3] text-[#41101C] text-xs font-bold py-2 rounded-xl border border-[#F9DCE2] transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => sendWhatsApp(`Hi Gift Case India! I want to order the *${product.name}* (Price: ₹${product.price.toLocaleString('en-IN')}). Please share details & mockup.`)}
                      className="btn-luxury bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Product Footer Small Badges */}
          <div className="mt-12 pt-8 border-t border-[#F9DCE2] flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="inline-flex items-center gap-2 bg-[#FFF9F6] border border-[#F9DCE2] px-4 py-2 rounded-full text-xs font-semibold text-[#41101C] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Safe &amp; Secure</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FFF9F6] border border-[#F9DCE2] px-4 py-2 rounded-full text-xs font-semibold text-[#41101C] shadow-xs">
              <Award className="w-4 h-4 text-[#C99E3F] shrink-0" />
              <span>Premium Quality</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FFF9F6] border border-[#F9DCE2] px-4 py-2 rounded-full text-xs font-semibold text-[#41101C] shadow-xs">
              <Heart className="w-4 h-4 text-[#D5657B] fill-[#D5657B] shrink-0" />
              <span>Made in India</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#FFF9F6] border border-[#F9DCE2] px-4 py-2 rounded-full text-xs font-semibold text-[#41101C] shadow-xs">
              <Truck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Pan-India Safe Delivery</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= LIVE NAME ENGRAVING PREVIEW ================= */}
      <section id="customizer" className="py-14 bg-[#FDF0E3] border-t border-[#F9DCE2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-md mx-auto mb-8">
            <span className="text-[#D5657B] font-script text-2xl">Interactive Preview</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#41101C]">Live Nameplate Preview</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#F9DCE2] grid md:grid-cols-2 gap-6 items-center">
            
            {/* Form Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-[#41101C] mb-1">Enter Name to Engrave</label>
                <input 
                  type="text" 
                  value={previewName} 
                  maxLength={20}
                  onChange={(e) => setPreviewName(e.target.value.toUpperCase())}
                  placeholder="e.g. DEEPESH"
                  className="w-full bg-[#FFF9F6] border border-[#F2BAC7] rounded-xl px-3 py-2 text-sm font-bold uppercase tracking-wider focus:outline-none focus:border-[#D5657B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#41101C] mb-1">Select Charm</label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { id: 'crown', label: 'Crown', icon: '👑' },
                    { id: 'mustache', label: 'Mustache', icon: '🥸' },
                    { id: 'bike', label: 'Bike', icon: '🏍️' },
                    { id: 'heart', label: 'Heart', icon: '❤️' }
                  ].map(c => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setPreviewCharm(c.id)}
                      className={`py-1.5 rounded-lg text-xs font-bold flex flex-col items-center gap-0.5 border cursor-pointer ${
                        previewCharm === c.id ? 'border-[#41101C] bg-[#FFF9F6]' : 'border-[#F9DCE2] bg-white'
                      }`}
                    >
                      <span className="text-base">{c.icon}</span>
                      <span className="text-[10px]">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#41101C] mb-1">Finish</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewPlateColor('gold')}
                    className={`py-1.5 text-xs font-bold rounded-lg border cursor-pointer ${
                      previewPlateColor === 'gold' ? 'border-[#41101C] bg-amber-50' : 'border-[#F9DCE2]'
                    }`}
                  >
                    Brass Gold
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewPlateColor('rosegold')}
                    className={`py-1.5 text-xs font-bold rounded-lg border cursor-pointer ${
                      previewPlateColor === 'rosegold' ? 'border-[#41101C] bg-rose-50' : 'border-[#F9DCE2]'
                    }`}
                  >
                    Rose Gold
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewPlateColor('silver')}
                    className={`py-1.5 text-xs font-bold rounded-lg border cursor-pointer ${
                      previewPlateColor === 'silver' ? 'border-[#41101C] bg-zinc-50' : 'border-[#F9DCE2]'
                    }`}
                  >
                    Silver
                  </button>
                </div>
              </div>
            </div>

            {/* Visual preview */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#2F1C1B] text-white text-center space-y-4 shadow-inner">
              <div className="text-3xl">
                {previewCharm === 'crown' && '👑'}
                {previewCharm === 'mustache' && '🥸'}
                {previewCharm === 'bike' && '🏍️'}
                {previewCharm === 'heart' && '❤️'}
              </div>

              <div 
                className={`px-5 py-2 rounded-md shadow flex items-center justify-center gap-2 ${
                  previewPlateColor === 'gold' ? 'brass-plate text-[#2A0810]' :
                  previewPlateColor === 'rosegold' ? 'rosegold-plate text-[#41101C]' :
                  'silver-plate text-[#18181b]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                <span className="font-display font-bold tracking-widest text-sm uppercase">
                  {previewName || 'NAME'}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
              </div>

              <button
                type="button"
                onClick={handleLivePreviewOrder}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 rounded-full text-xs shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>Order on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ================= TRUST & CREDIBILITY SECTION ================= */}
      <section id="trust" className="py-14 bg-white border-t border-[#F9DCE2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D5657B] uppercase tracking-wider mb-2">
              <BadgeCheck className="w-4 h-4" />
              <span>Why Customers Choose Us</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#41101C]">
              Trust &amp; Credibility
            </h2>
            <p className="text-xs sm:text-sm text-[#752A3B] mt-1">
              Over 50,000+ personalised gifts lovingly crafted and delivered across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#FFF9F6] border border-[#F9DCE2] flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-[#FDF0F3] border border-[#F2BAC7] flex items-center justify-center mb-3 text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-[#41101C]">100% Safe &amp; Secure</h3>
              <p className="text-xs text-[#752A3B] mt-1 leading-relaxed">
                Multi-layer protective bubble transit packing to ensure every fragile keepsake arrives undamaged.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF9F6] border border-[#F9DCE2] flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-[#FDF0F3] border border-[#F2BAC7] flex items-center justify-center mb-3 text-[#C99E3F]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-[#41101C]">Premium Quality</h3>
              <p className="text-xs text-[#752A3B] mt-1 leading-relaxed">
                Precision fiber laser engraving, non-yellowing crystal epoxy, and Japanese UV fade-proof inks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF9F6] border border-[#F9DCE2] flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-[#FDF0F3] border border-[#F2BAC7] flex items-center justify-center mb-3 text-[#D5657B]">
                <Heart className="w-6 h-6 fill-[#D5657B]" />
              </div>
              <h3 className="font-display font-bold text-base text-[#41101C]">Made in India</h3>
              <p className="text-xs text-[#752A3B] mt-1 leading-relaxed">
                Proudly crafted in India by dedicated artisans, supporting local artistry and fine craft tradition.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF9F6] border border-[#F9DCE2] flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-full bg-[#FDF0F3] border border-[#F2BAC7] flex items-center justify-center mb-3 text-[#41101C]">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-display font-bold text-base text-[#41101C]">Free Mockup Preview</h3>
              <p className="text-xs text-[#752A3B] mt-1 leading-relaxed">
                Check and approve your custom digital design on WhatsApp before we begin final production.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW TO ORDER ================= */}
      <section id="how-it-works" className="py-14 bg-[#FFF9F6] border-t border-[#F9DCE2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#41101C]">How to Order</h2>
          <p className="text-xs sm:text-sm text-[#752A3B] mt-1">Easy 3-step ordering process on WhatsApp</p>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="p-5 rounded-2xl bg-white border border-[#F9DCE2] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#41101C] text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-bold text-sm text-[#41101C]">Pick Gift</h3>
              <p className="text-xs text-[#752A3B] mt-1">Select your preferred item from our catalog.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#F9DCE2] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#D5657B] text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-bold text-sm text-[#41101C]">Send Name &amp; Photo</h3>
              <p className="text-xs text-[#752A3B] mt-1">Share customization details with our team on WhatsApp.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#F9DCE2] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#DFB75A] text-[#41101C] font-bold text-sm flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-bold text-sm text-[#41101C]">Approve &amp; Dispatch</h3>
              <p className="text-xs text-[#752A3B] mt-1">Approve your free digital mockup before fast dispatch.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= DIRECT CONTACT & FOOTER ================= */}
      <footer id="contact" className="bg-[#41101C] text-[#FDF0F3] pt-12 pb-6 border-t border-[#DFB75A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          
          <div className="flex items-center justify-center gap-3">
            <img 
              src="/assets/logo.png" 
              alt="Gift Case India" 
              className="w-12 h-12 rounded-full object-cover bg-white border border-white/20 shadow-sm" 
            />
            <div className="text-left">
              <span className="block font-display font-bold text-xl text-white">Gift Case India</span>
              <span className="block text-[11px] text-[#DFB75A]">@giftcaseindia</span>
            </div>
          </div>

          <p className="text-xs text-[#F2BAC7] max-w-md mx-auto">
            Personalised gifts, festive hampers, leather accessories &amp; custom keepsakes dispatched across India.
          </p>

          {/* Social Links & WhatsApp */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
            <button 
              onClick={() => sendWhatsApp('Hi Gift Case India! I would like to order a custom gift.')}
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>Chat &amp; Order on WhatsApp</span>
            </button>
            <a 
              href="https://www.youtube.com/@Giftcaseindia" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white/10 hover:bg-red-600/30 text-white px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-colors border border-white/10"
              title="YouTube @Giftcaseindia"
            >
              <Youtube className="w-4 h-4 text-red-400" />
              <span>YouTube</span>
            </a>
            <a 
              href="https://instagram.com/giftcaseindia" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white/10 hover:bg-[#D5657B]/30 text-white px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-colors border border-white/10"
              title="Instagram @giftcaseindia"
            >
              <Instagram className="w-4 h-4 text-pink-300" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 text-[11px] text-[#F2BAC7]/60">
            © 2026 Gift Case India (@giftcaseindia). All Rights Reserved.
          </div>

        </div>
      </footer>

      {/* ================= FLOATING WHATSAPP BUTTON ================= */}
      <button
        onClick={() => sendWhatsApp('Hi Gift Case India! I would like to place a custom order.')}
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white" />
        <span className="hidden sm:inline text-xs font-bold pr-1">Order on WhatsApp</span>
      </button>

      {/* ================= PRODUCT DETAILS MODAL ================= */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative shadow-2xl border border-[#F9DCE2]">
            <button 
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 text-[#752A3B] hover:text-[#41101C] p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#FDF0F3] mb-4">
              <img src={activeModalProduct.image} alt={activeModalProduct.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="font-display font-bold text-xl text-[#41101C]">{activeModalProduct.name}</h3>

            <div className="flex items-baseline gap-2 mt-1.5">
              <span className="text-xl font-bold text-[#41101C]">
                ₹{activeModalProduct.price.toLocaleString('en-IN')}
              </span>
              {activeModalProduct.originalPrice && (
                <span className="text-xs text-[#752A3B]/60 line-through">
                  ₹{activeModalProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {activeModalProduct.originalPrice && (
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  Save {Math.round(((activeModalProduct.originalPrice - activeModalProduct.price) / activeModalProduct.originalPrice) * 100)}%
                </span>
              )}
            </div>

            <p className="text-xs text-[#752A3B] mt-2">{activeModalProduct.description}</p>

            <div className="mt-3 space-y-1">
              {activeModalProduct.features.map((f, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-[#5A1B29]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                sendWhatsApp(`Hi Gift Case India! I want to customize and order the *${activeModalProduct.name}* (Price: ₹${activeModalProduct.price.toLocaleString('en-IN')}). Please send details.`);
                setActiveModalProduct(null);
              }}
              className="w-full mt-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-full text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>Order on WhatsApp (₹{activeModalProduct.price.toLocaleString('en-IN')})</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
