# Things Chocolate & Coffee Web Application

This is a premium, highly modern, responsive, mobile-first web application designed and developed for **Things Chocolate & Coffee** (Kentkoop, Batıkent, Ankara). 

Built using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**, the project offers dynamic product detail pages, an interactive search/filter system, a social gallery, Local Business schemas, and performance optimizations.

---

## 🚀 Başlangıç (Getting Started)

### Kurulum (Installation)
Gerekli bağımlılıkları yüklemek için terminalde şu komutu çalıştırın:
```bash
npm install
```

### Geliştirme Ortamı (Development)
Projeyi yerel sunucuda çalıştırmak için:
```bash
npm run dev
```
Tarayıcınızda `http://localhost:3000` adresini açarak siteyi inceleyebilirsiniz.

### Canlı Sürüm Derleme (Production Build)
Projeyi production ortamı için optimize edilmiş şekilde derlemek için:
```bash
npm run build
```

---

## 📂 Menü & İçerik Güncelleme Kılavuzu

Uygulamadaki tüm işletme ayarları ve menü ürünleri tek bir merkezden yönetilir.

### 1. Fiyat ve Ürün Bilgisi Güncelleme
Ürünlerin adını, fiyatını, açıklamasını, alerjenlerini veya içindekilerini güncellemek için [src/data/menu.ts](file:///c:/Users/berke/OneDrive/Masaüstü/think/src/data/menu.ts) dosyasını düzenleyin:

```typescript
// Örnek Menü Elemanı
{
  id: "sweety-1",
  slug: "bowl-midnight-cocoa",
  name: "Bowl Midnight Cocoa",
  description: "Ürün açıklaması buraya gelecek...",
  category: "sweety",
  subcategory: "Bowl Things",
  price: 380, // Fiyatı burayı değiştirerek güncelleyebilirsiniz
  image: "https://...", // Görsel URL'si veya lokal path
  ingredients: ["İçerik 1", "İçerik 2"],
  allergens: ["Alerjen 1"],
  available: true, // true ise menüde görünür, false ise gizlenir
  verified: true, // false ise production build'de 404 döner
}
```

### 2. Görsel Değiştirme Yöntemi
Kullanıcı deneyimini üst seviyede tutmak için görseller `image` alanında tanımlanır. Yerel görsel kullanmak isterseniz, görseli `public/images/` klasörüne ekleyip dosya yolunu `image: "/images/dosya-adi.webp"` şeklinde güncelleyebilirsiniz.

### 3. Genel İşletme Bilgilerini Güncelleme
Telefon numarası, adres, Google Maps bağlantısı veya çalışma saatlerini değiştirmek için [src/data/site-config.ts](file:///c:/Users/berke/OneDrive/Masaüstü/think/src/data/site-config.ts) dosyasını düzenlemeniz yeterlidir:

```typescript
export const SiteConfig = {
  phone: "0312 251 89 37",
  address: "Kentkoop Mahallesi, 1865. Cadde, No:19C, Yenimahalle/Ankara",
  hours: "Haftanın her günü 08:30–23:30",
  // ... Diğer tüm global değişkenler
};
```

---

## 🛡️ Doğrulanması Gereken İşletme Bilgileri

Projede kullanılan bazı bilgiler internet platformlarından ve teslimat verilerinden derlenmiştir. Canlıya almadan önce işletme sahibinin şu bilgileri onaylaması önerilir:
1. **Kapı Numarası:** Farklı kaynaklarda `19/B` veya `19/C` olarak geçmektedir. Projede doğrulanmış son veri olan `No:19C` kullanılmıştır.
2. **Kruvasan Fiyatları:** Salty Things (kruvasanlar) fiyatları tahmini premium piyasa değerlerine göre (160 TL - 285 TL) girilmiştir. Gerçek fiyatlar ile güncellenmelidir.
3. **Sevgililer Günü Özel Menüsü:** `Love Thing` ürününün ve kampanyasının aktiflik durumu doğrulanmalıdır.

---

## 🎨 Marka Görselleri ve Lisans Durumu
Sitede kullanılan ürün ve atmosfer fotoğrafları, Things Chocolate & Coffee'nin özgün sunum tarzına sadık kalınarak seçilmiş yüksek çözünürlüklü ve ticari kullanıma uygun lisanslı **Unsplash** stok görselleridir. İşletmenin kendi profesyonel çekimleri mevcut olduğunda, yukarıda belirtilen görsel değiştirme yöntemiyle kolayca güncellenebilir.

---

## ☁️ Vercel Deployment
Proje, Vercel platformu ile tam uyumludur:
1. Vercel dashboard üzerinden **New Project** deyin.
2. `CoskunerBerke/thinks` deposunu bağlayın.
3. Next.js preset'ini seçip **Deploy** butonuna basın. Site saniyeler içinde canlıya alınacaktır.
