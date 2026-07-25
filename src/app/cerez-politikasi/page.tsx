import { SiteConfig } from "@/data/site-config";

export const metadata = {
  title: "Çerez Politikası | Things Chocolate & Coffee",
  description: "Things Chocolate & Coffee web sitesi çerez (cookie) kullanım politikası ve ayarları.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto prose prose-brown">
      <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-chocolate mb-8">
        Çerez Politikası
      </h1>
      <div className="space-y-6 text-sm text-brand-text/85 leading-relaxed">
        <p>
          <strong>{SiteConfig.brandName}</strong> olarak sitemizi ziyaret eden tüm kullanıcılarımızın deneyimlerini iyileştirmek, sitemizin teknik altyapısını optimize etmek ve kararlılığını sağlamak için çerezler (cookies) kullanmaktayız.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">1. Çerez (Cookie) Nedir?</h3>
        <p>
          Çerezler, sitemizi ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web tarayıcınızın sitemizi hatırlamasını sağlayarak bir sonraki ziyaretinizde gezinmenizi kolaylaştırır ve site fonksiyonlarının düzgün çalışmasına yardımcı olur.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">2. Hangi Çerezleri Kullanıyoruz?</h3>
        <p>
          Sitemizde kullanılan temel çerez türleri şunlardır:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Zorunlu Çerezler:</strong> Sitemizin temel işlevlerinin (sayfa geçişleri, güvenli bağlantı) çalışabilmesi için teknik olarak zorunlu olan çerezlerdir.
          </li>
          <li>
            <strong>İşlevsel/Performans Çerezleri:</strong> Ziyaretçilerin siteyi nasıl kullandıklarını analiz eden, sayfa yükleme hızlarını ölçen ve kullanıcı deneyimini iyileştiren anonim çerezlerdir.
          </li>
        </ul>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">3. Çerez Ayarlarını Nasıl Değiştirebilirim?</h3>
        <p>
          Çoğu web tarayıcısı, varsayılan olarak çerezleri kabul edecek şekilde yapılandırılmıştır. Tarayıcınızın ayarlarına girerek çerezleri tamamen engelleyebilir, sitemizi ziyaret ettiğinizde uyarı verilmesini sağlayabilir veya geçmiş çerezleri silebilirsiniz. Çerezlerin devre dışı bırakılması durumunda sitemizdeki bazı işlevlerin düzgün çalışmayabileceğini hatırlatmak isteriz.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">4. İletişim</h3>
        <p>
          Çerez politikamız hakkında her türlü soru ve önerileriniz için bizimle <strong>{SiteConfig.phone}</strong> telefon numarası üzerinden veya şubemizi ziyaret ederek doğrudan iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  );
}
