import { SiteConfig } from "@/data/site-config";

export const metadata = {
  title: "Gizlilik Politikası | Things Chocolate & Coffee",
  description: "Things Chocolate & Coffee web sitesi gizlilik sözleşmesi ve veri güvenliği ilkeleri.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto prose prose-brown">
      <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-chocolate mb-8">
        Gizlilik Politikası
      </h1>
      <div className="space-y-6 text-sm text-brand-text/85 leading-relaxed">
        <p>
          <strong>{SiteConfig.brandName}</strong> olarak, web sitemizi ziyaret eden kullanıcıların gizliliğine ve veri güvenliğine saygı gösteriyoruz. Bu Gizlilik Politikası, sitemizi ziyaret ettiğinizde toplanabilecek veriler ve bunların korunma yöntemleri hakkında bilgi sunar.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">1. Toplanan Bilgiler</h3>
        <p>
          Web sitemizi ziyaret ettiğinizde, tarayıcı türünüz, erişim saatleriniz, IP adresiniz ve incelediğiniz sayfalar gibi standart log bilgileri otomatik olarak sunucularımız tarafından kaydedilebilir. Bu bilgiler kimliğinizi doğrudan saptamaz ve yalnızca web sitesi performans analizi ile güvenlik takipleri için kullanılır.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">2. İletişim Kanalları ve Bilgi Paylaşımı</h3>
        <p>
          Telefon araması veya sosyal medya yönlendirmeleri ile bizimle iletişim kurduğunuz takdirde paylaştığınız bilgiler (telefon numarası, sosyal medya adı), yalnızca taleplerinize cevap vermek amacıyla saklanır. Verileriniz, yasal zorunluluklar hariç olmak üzere üçüncü kişilerle asla paylaşılmaz veya satılmaz.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">3. Bilgi Güvenliği</h3>
        <p>
          Things, sitemiz üzerinden eriştiğiniz bağlantıların ve verilerinizin güvenliğini korumak için uygun idari ve teknik tedbirleri almaktadır. Sitemiz SSL sertifikası (HTTPS) ile korunmakta olup, veri iletimi şifreli olarak gerçekleştirilmektedir.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">4. Diğer Web Sitelerine Bağlantılar</h3>
        <p>
          Sitemizde, mevcut dijital menümüz (thingsmenu.com) veya sosyal medya hesaplarımız (Instagram) gibi üçüncü taraf platformlara yönlendiren bağlantılar bulunabilir. Bu platformların kendilerine has gizlilik politikaları mevcut olup, yönlendirildiğiniz sitelerin içerik ve gizlilik ilkelerinden Things sorumlu tutulamaz.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">5. Politika Güncellemeleri</h3>
        <p>
          Bu Gizlilik Politikası, hizmet standartlarımızdaki veya mevzuattaki değişikliklere paralel olarak zaman zaman güncellenebilir. Güncellemeler sitemizde yayınlandığı andan itibaren geçerlilik kazanır. Sitemizi kullanmaya devam ederek bu koşulları kabul etmiş sayılırsınız.
        </p>
      </div>
    </div>
  );
}
