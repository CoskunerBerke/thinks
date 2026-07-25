export type MenuCategory = "sweety" | "salty" | "iced" | "hot";

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: MenuCategory;
  subcategory: string;
  price?: number;
  image: string; // fallback SVG or placeholder patterns
  ingredients?: string[];
  allergens?: string[];
  available: boolean;
  featured: boolean;
  verified: boolean;
  badge?: string;
}

export const menuItems: MenuItem[] = [
  // ================= SWEETY THINGS =================
  {
    id: "sweety-1",
    slug: "bowl-midnight-cocoa",
    name: "Bowl Midnight Cocoa",
    description: "Dilimlenmiş çikolatalı kek tabanı üzerinde Things özel pastacı kreması, taze çilek, muz dilimleri ve akışkan sütlü/beyaz Belçika çikolatası. Altın sarısı Fransız bisküvisi ile taçlandırılmıştır.",
    category: "sweety",
    subcategory: "Bowl Things",
    price: 380,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Çikolatalı Kek", "Things Pastacı Kreması", "Taze Çilek", "Muz", "Sütlü Belçika Çikolatası", "Beyaz Belçika Çikolatası", "Fransız Bisküvisi"],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta"],
    available: true,
    featured: true,
    verified: true,
    badge: "İlk Gelenler İçin Tavsiye"
  },
  {
    id: "sweety-2",
    slug: "bowl-crepe",
    name: "Bowl Crepe",
    description: "İncecik kesilmiş spagetti krep hamurları arasında Things pastacı kreması, taze çilek ve muz dilimleri. Akışkan sıcak Belçika çikolatası ve çıtır Fransız bisküvisi dolgulu.",
    category: "sweety",
    subcategory: "Bowl Things",
    price: 380,
    image: "https://images.unsplash.com/photo-1622896784083-cc051313dbab?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Krep Hamuru", "Things Pastacı Kreması", "Taze Çilek", "Muz", "Sütlü Belçika Çikolatası", "Beyaz Belçika Çikolatası", "Fransız Bisküvisi"],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta"],
    available: true,
    featured: true,
    verified: true
  },
  {
    id: "sweety-3",
    slug: "bowl-anatolian-pistachio",
    name: "Bowl Anatolian Pistachio",
    description: "Yeşil fıstık lezzetiyle bezenmiş dilimlenmiş Antep fıstıklı kek, yoğun pastacı kreması, taze çilek ve muz dilimleri. Sıcak çikolata sosu ve hakiki Antep fıstığı tozu serpintili.",
    category: "sweety",
    subcategory: "Bowl Things",
    price: 380,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Antep Fıstıklı Kek", "Things Pastacı Kreması", "Taze Çilek", "Muz", "Sütlü Belçika Çikolatası", "Beyaz Belçika Çikolatası", "Antep Fıstığı Tozu"],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta", "Kuruyemiş (Fıstık)"],
    available: true,
    featured: true,
    verified: true,
    badge: "Çok Satan"
  },
  {
    id: "sweety-4",
    slug: "bowl-red-affair",
    name: "Bowl Red Affair",
    description: "Göz alıcı kadife dokulu dilimlenmiş Red Velvet kek, Things pastacı kreması, taze çilek ve muz dilimleri. Akışkan çikolata katmanları, çıtır Fransız bisküvisi ve taze fındık kırıkları.",
    category: "sweety",
    subcategory: "Bowl Things",
    price: 380,
    image: "https://images.unsplash.com/photo-1616260828576-95bc52ddf16d?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Red Velvet Kek", "Things Pastacı Kreması", "Taze Çilek", "Muz", "Sütlü Belçika Çikolatası", "Beyaz Belçika Çikolatası", "Fransız Bisküvisi", "Fındık"],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta", "Kuruyemiş (Fındık)"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "sweety-5",
    slug: "bowl-soft-base",
    name: "Bowl Soft Base",
    description: "Yumuşacık sade pandispanya kek dilimleri, Things özel pastacı kreması, taze meyve dilimleri, sütlü ve beyaz Belçika çikolatası. Fındık ve Antep fıstığı tozu ile zenginleştirilmiştir.",
    category: "sweety",
    subcategory: "Bowl Things",
    price: 380,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Pandispanya Kek", "Things Pastacı Kreması", "Taze Çilek", "Muz", "Sütlü Belçika Çikolatası", "Beyaz Belçika Çikolatası", "Fındık", "Antep Fıstığı Tozu"],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta", "Kuruyemiş"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "sweety-6",
    slug: "love-thing",
    name: "Love Thing (Sevgililer Günü Özel)",
    description: "Aşkın en tatlı hali! Yumuşacık kırmızı Red Velvet kek katmanları arasında özel pastacı kreması, taze çilek ve muz dilimleri, akışkan çikolatalar. Yanında ikram edilen 2 adet taze demlenmiş çay ile servis edilir.",
    category: "sweety",
    subcategory: "Chocolate Things",
    price: 360,
    image: "https://images.unsplash.com/photo-1518195868443-496b4b400e8f?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Red Velvet Kek", "Things Pastacı Kreması", "Çilek", "Muz", "Sütlü ve Beyaz Belçika Çikolatası", "2 Demleme Çay"],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta"],
    available: true,
    featured: true,
    verified: true,
    badge: "Sevgililer Gününe Özel"
  },

  // ================= SALTY THINGS =================
  {
    id: "salty-1",
    slug: "salty-1",
    name: "Salty.1 (Sade Kruvasan)",
    description: "Taş fırında taze pişmiş, dışı çıtır içi yumuşak, kat kat tereyağlı sade ekşi mayalı kruvasan.",
    category: "salty",
    subcategory: "Croissant Things",
    price: 160,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Ekşi Mayalı Un", "Fransız Tereyağı"],
    allergens: ["Gluten", "Süt Ürünleri"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "salty-2",
    slug: "salty-2-pesto-smoked-turkey",
    name: "Salty.2 Pesto & Smoked Turkey",
    description: "Ekşi mayalı kruvasan arasında gurme fesleğenli pesto sosu, ince dilimlenmiş hindi füme, taze yeşillikler ve erimiş peynir.",
    category: "salty",
    subcategory: "Croissant Things",
    price: 260,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Ekşi Mayalı Kruvasan", "Fesleğen Pesto", "Hindi Füme", "Peynir", "Roka / Yeşillik"],
    allergens: ["Gluten", "Süt Ürünleri", "Kuruyemiş (Pesto Fıstık)"],
    available: true,
    featured: true,
    verified: true,
    badge: "Favori"
  },
  {
    id: "salty-3",
    slug: "salty-3-egg-advocado",
    name: "Salty.3 Egg & Avocado",
    description: "Tereyağlı çıtır kruvasan yatağında olgunlaşmış kremamsı avokado püresi, taze haşlanmış veya çırpılmış yumurta dilimleri, hafif baharatlar.",
    category: "salty",
    subcategory: "Croissant Things",
    price: 270,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Ekşi Mayalı Kruvasan", "Avokado Püresi", "Yumurta", "Mikro Yeşillikler"],
    allergens: ["Gluten", "Yumurta"],
    available: true,
    featured: true,
    verified: true
  },
  {
    id: "salty-4",
    slug: "salty-4-beef-egg",
    name: "Salty.4 Beef & Egg",
    description: "Ekşi mayalı kruvasan arasında fırınlanmış dana rozbif dilimleri, yumurta, karamelize soğan ve cheddar peyniri.",
    category: "salty",
    subcategory: "Croissant Things",
    price: 285,
    image: "https://images.unsplash.com/photo-1549611016-3a70d82b5040?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Ekşi Mayalı Kruvasan", "Dana Rozbif", "Yumurta", "Cheddar Peyniri", "Karamelize Soğan"],
    allergens: ["Gluten", "Süt Ürünleri", "Yumurta"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "salty-5",
    slug: "salty-5-chicken-sausage",
    name: "Salty.5 Chicken Sausage",
    description: "Tereyağlı sıcak kruvasan içerisinde ızgara tavuk sosis dilimleri, hardal sosu, kornişon turşu ve kaşar peyniri dolgusu.",
    category: "salty",
    subcategory: "Croissant Things",
    price: 275,
    image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Ekşi Mayalı Kruvasan", "Tavuk Sosis", "Hardal", "Kornişon Turşu", "Kaşar Peyniri"],
    allergens: ["Gluten", "Süt Ürünleri", "Hardal"],
    available: true,
    featured: false,
    verified: true
  },

  // ================= ICED THINGS =================
  {
    id: "iced-1",
    slug: "iced-matcha-latte",
    name: "Iced Matcha Latte",
    description: "Japonya'nın Uji bölgesinden gelen özel seremoniyal matcha tozu, soğuk süt ve buz küpleri ile ferahlatıcı bir buluşma.",
    category: "iced",
    subcategory: "Matcha Things",
    price: 230,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Uji Ceremonial Matcha", "Soğuk Süt", "Buz"],
    allergens: ["Süt Ürünleri (Alternatif süt seçilebilir)"],
    available: true,
    featured: true,
    verified: true,
    badge: "Matcha Favorisi"
  },
  {
    id: "iced-2",
    slug: "limonata",
    name: "Things Ev Yapımı Limonata",
    description: "Taze sıkılmış limon suyu, limon kabuğu rendesi, taze nane yaprakları ve hafif şekerli soğuk yaz ferahlığı.",
    category: "iced",
    subcategory: "Lemony Things",
    price: 160,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Limon Suyu", "Taze Nane", "Buz", "Limon Dilimleri"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "iced-3",
    slug: "iced-americano",
    name: "Iced Americano",
    description: "Çift shot espresso ve soğuk suyun buzla serinleten klasik birleşimi.",
    category: "iced",
    subcategory: "Caffeinated Things",
    price: 160,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Espresso Blend", "Soğuk Su", "Buz"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "iced-4",
    slug: "iced-latte",
    name: "Iced Latte",
    description: "Yumuşak içimli çift shot espresso, soğuk süt ve bol buz.",
    category: "iced",
    subcategory: "Caffeinated Things",
    price: 175,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Espresso Blend", "Soğuk Süt", "Buz"],
    allergens: ["Süt Ürünleri"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "iced-5",
    slug: "iced-mocha",
    name: "Iced Mocha",
    description: "Espresso, süt, eritilmiş Belçika çikolatası sosu ve buzlu soğuk içim.",
    category: "iced",
    subcategory: "Caffeinated Things",
    price: 190,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Espresso", "Belçika Çikolatası Sosu", "Süt", "Buz"],
    allergens: ["Süt Ürünleri"],
    available: true,
    featured: true,
    verified: true
  },

  // ================= HOT THINGS =================
  {
    id: "hot-1",
    slug: "espresso",
    name: "Espresso",
    description: "Özel harmanlanmış kahve çekirdeklerimizden geleneksel yöntemle demlenen aromatik sek kahve.",
    category: "hot",
    subcategory: "Coffee Things",
    price: 100,
    image: "https://images.unsplash.com/photo-1510707577719-ee7c21f95e03?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Premium Kahve Çekirdeği"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "hot-2",
    slug: "americano",
    name: "Americano",
    description: "Double shot espresso üzerine eklenen sıcak su ile dengeli ve pürüzsüz kahve deneyimi.",
    category: "hot",
    subcategory: "Coffee Things",
    price: 150,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Espresso", "Sıcak Su"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "hot-3",
    slug: "latte",
    name: "Latte / Cappuccino",
    description: "Espresso shot ile kremsi buğulanmış süt köpüğünün harika uyumu.",
    category: "hot",
    subcategory: "Coffee Things",
    price: 165,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Espresso", "Süt Köpüğü"],
    allergens: ["Süt Ürünleri"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "hot-4",
    slug: "filtre-kahve",
    name: "Filtre Kahve",
    description: "Özenle seçilmiş kahve çekirdeklerinin taze öğütülüp demlenmesiyle elde edilen klasik kahve.",
    category: "hot",
    subcategory: "Coffee Things",
    price: 145,
    image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Öğütülmüş Çekirdek Kahve"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "hot-5",
    slug: "turk-kahvesi",
    name: "Geleneksel Türk Kahvesi",
    description: "Közde yavaş pişirilmiş, yoğun köpüklü, lokum ikramı ile geleneksel lezzet.",
    category: "hot",
    subcategory: "Coffee Things",
    price: 110,
    image: "https://images.unsplash.com/photo-1579888944880-d98341148721?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Taze Öğütülmüş Türk Kahvesi"],
    available: true,
    featured: false,
    verified: true
  },
  {
    id: "hot-6",
    slug: "mocha",
    name: "Mocha / White Chocolate Mocha",
    description: "Espresso shot, yoğun çikolata sosu veya beyaz çikolata sosu, sıcak süt ve krema dolgusu.",
    category: "hot",
    subcategory: "Coffee Things",
    price: 180,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Espresso", "Belçika Çikolatası Sosu", "Süt Köpüğü"],
    allergens: ["Süt Ürünleri"],
    available: true,
    featured: true,
    verified: true
  },
  {
    id: "hot-7",
    slug: "matcha-latte",
    name: "Sıcak Matcha Latte",
    description: "Uji ceremonial matcha tozu ve sıcak buğulanmış kremsi sütün şifalı yeşil buluşması.",
    category: "hot",
    subcategory: "Matchas Things",
    price: 220,
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Ceremonial Matcha", "Sıcak Buğulanmış Süt"],
    allergens: ["Süt Ürünleri"],
    available: true,
    featured: true,
    verified: true
  },
  {
    id: "hot-8",
    slug: "sicak-cikolata",
    name: "Things Sıcak Çikolata",
    description: "Things özel tarifi ile hakiki eritilmiş Belçika sütlü çikolatası ve sıcak sütün yoğun, kadifemsi kıvamdaki eşsiz lezzeti.",
    category: "hot",
    subcategory: "Chill Things",
    price: 195,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80",
    ingredients: ["Eritilmiş Belçika Çikolatası", "Tam Yağlı Süt"],
    allergens: ["Süt Ürünleri"],
    available: true,
    featured: true,
    verified: true,
    badge: "Çikolata Aşkına"
  }
];

export const getUpdatedAt = () => "2026-07-25";
