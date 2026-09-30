# Things Chocolate & Coffee — Website

**Mobile-first website and digital menu for Things Chocolate & Coffee, a café in Kentkoop, Batıkent (Yenimahalle, Ankara).**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

> Client project — designed and developed by Berke Coşkuner for **Things Chocolate & Coffee**.

---

## Overview

A Turkish-language café website that works as a browsable menu on phones. Guests can search and filter drinks and desserts, open a detail page for each product (ingredients, allergens, price), see the café's atmosphere and social links, and get directions. Business details and the full menu are kept in two data files, so prices and products can be updated without touching the UI.

## Features

- **Home page**: hero, featured products ("Müşterilerimizin Seçimi"), atmosphere section, social media section, location & contact block
- **About page** (`/hakkimizda`) with an animated coffee-steam illustration
- **Menu** (`/menu`) with category tabs (Sweety, Salty, Iced, Hot Things) and live search; state is kept in the URL (`?cat=` / `?q=`), and `?focus=search` opens the search field directly
- **Product detail pages** (`/menu/[slug]`) with ingredients, allergens and price; items marked `available: false` or `verified: false` return 404
- **25 menu items** across sub-categories such as Bowl, Croissant, Coffee, Matcha and Chocolate Things
- **Gallery** (`/galeri`) with an Instagram call-to-action
- **Contact** (`/iletisim`) with an embedded Google Map, phone link and opening hours
- **Mobile bottom bar** for quick access to the menu and search
- **SEO**: `CafeOrCoffeeShop` and `BreadcrumbList` JSON-LD, dynamic `sitemap.xml` and `robots.txt`
- **Legal pages**: KVKK, privacy policy, cookie policy

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | lucide-react |
| Images | `next/image` with Unsplash remote patterns |

## Project structure

```text
src/
├── app/
│   ├── page.tsx              # Home
│   ├── menu/                 # Menu list + [slug] product detail
│   ├── galeri/, hakkimizda/, iletisim/
│   ├── kvkk/, gizlilik-politikasi/, cerez-politikasi/
│   ├── robots.ts, sitemap.ts
├── components/ui/            # Header, Footer, MobileBottomBar, CoffeeSteam, InstagramIcon
└── data/
    ├── menu.ts               # All menu items (price, ingredients, allergens, flags)
    └── site-config.ts        # Phone, address, hours, social links, SEO
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm run start
```

No environment variables are required. `.env.example` only lists optional placeholders (`NEXT_PUBLIC_ANALYTICS_ID`, `EMAIL_SERVICE_API_KEY`) that the current code does not use.

## Updating content

- **Products and prices** → `src/data/menu.ts`. Each item has `name`, `description`, `category`, `subcategory`, `price`, `image`, `ingredients`, `allergens`, and the flags `available` (shown in the menu) and `verified` (otherwise the detail page returns 404).
- **Images** → set `image` to a remote URL or put a file in `public/images/` and use `/images/<file>.webp`.
- **Business details** (phone, address, hours, Instagram, map link, SEO) → `src/data/site-config.ts`.

### Content notes

- Product and atmosphere photos are licensed Unsplash stock images, meant to be replaced with the café's own photos.
- Croissant ("Salty Things") prices and the seasonal "Love Thing" item should be confirmed by the business before going live.

## Deployment

The project is Vercel-ready: import `CoskunerBerke/thinks` as a new project, keep the Next.js preset and deploy.

---

## Türkçe

**Things Chocolate & Coffee için mobil öncelikli web sitesi ve dijital menü — Kentkoop, Batıkent (Yenimahalle, Ankara).**

> Müşteri projesi — **Things Chocolate & Coffee** için Berke Coşkuner tarafından tasarlandı ve geliştirildi.

### Genel bakış

Telefonda dijital menü gibi çalışan Türkçe kafe web sitesi. Misafirler içecek ve tatlıları arayıp filtreleyebilir, her ürünün detay sayfasında içerik, alerjen ve fiyatı görebilir, mekânın atmosferine ve sosyal medya hesaplarına göz atabilir ve yol tarifi alabilir. İşletme bilgileri ve menünün tamamı iki veri dosyasında tutulur.

### Özellikler

- Hero, öne çıkan ürünler, atmosfer, sosyal medya ve ulaşım bölümlerinden oluşan ana sayfa; animasyonlu kahve buharı efektli hakkımızda sayfası
- Kategori sekmeleri (Sweety, Salty, Iced, Hot Things) ve anlık arama içeren **menü** sayfası; filtreler URL'de saklanır
- İçerik, alerjen ve fiyat bilgili **ürün detay sayfaları** (`/menu/[slug]`); `available` veya `verified` olmayan ürünler 404 döner
- 25 menü ürünü (Bowl, Croissant, Coffee, Matcha, Chocolate Things vb.)
- Instagram yönlendirmeli galeri, Google Haritalı iletişim sayfası
- Menüye ve aramaya hızlı erişim için mobil alt bar
- `CafeOrCoffeeShop` ve `BreadcrumbList` JSON-LD, dinamik sitemap ve robots
- KVKK, gizlilik ve çerez politikası sayfaları

### Teknolojiler

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, lucide-react.

### Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

Ortam değişkeni gerekmez.

### İçerik güncelleme

- Ürünler ve fiyatlar → `src/data/menu.ts`
- Telefon, adres, çalışma saatleri, Instagram ve SEO → `src/data/site-config.ts`
- Görseller şu an Unsplash stok fotoğraflarıdır; kafenin kendi fotoğraflarıyla değiştirilmesi planlanmıştır. Kruvasan fiyatları ve "Love Thing" ürünü işletme tarafından onaylanmalıdır.

### Yayınlama

Vercel ile uyumludur: depoyu yeni proje olarak import edip Next.js ön ayarıyla yayınlayın.

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
