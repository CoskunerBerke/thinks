import { SiteConfig } from "@/data/site-config";

export const metadata = {
  title: "KVKK Aydınlatma Metni | Things Chocolate & Coffee",
  description: "Things Chocolate & Coffee Kişisel Verilerin Korunması Kanunu (KVKK) aydınlatma ve rıza metni.",
};

export default function KvkkPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto prose prose-brown">
      <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-chocolate mb-8">
        KVKK Aydınlatma Metni
      </h1>
      <div className="space-y-6 text-sm text-brand-text/85 leading-relaxed">
        <p>
          <strong>{SiteConfig.brandName}</strong> (“Şirket” veya “Things”) olarak, müşterilerimiz, ziyaretçilerimiz ve iş ortaklarımızın kişisel verilerinin korunmasına büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun” veya “KVKK”) kapsamında veri sorumlusu sıfatıyla yürüttüğümüz kişisel veri işleme süreçleri hakkında sizleri bilgilendirmek isteriz.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">1. Kişisel Verilerin Elde Edilmesi ve İşlenme Amaçları</h3>
        <p>
          Things, fiziksel şubemizi ziyaret ettiğinizde, iletişim numaralarımız üzerinden bize ulaştığınızda veya dijital menü platformlarımızı kullandığınızda ad-soyad, telefon numarası ve lokasyon verileri gibi temel bilgileri elde edebilir. Bu veriler:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hizmetlerimizin sunulması, sipariş süreçlerinin yönetimi ve koordinasyonu,</li>
          <li>Talep, şikayet ve önerilerinizin takibi ile müşteri memnuniyetinin artırılması,</li>
          <li>Kanuni ve hukuki yükümlülüklerin yerine getirilmesi</li>
        </ul>
        <p>amaçlarıyla Kanun&apos;un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde işlenmektedir.</p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">2. İşlenen Kişisel Verilerin Aktarılması</h3>
        <p>
          Toplanan kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda; kanunen yetkili kamu kurum ve kuruluşları ile adli/idari makamlara, ilgili yasal yükümlülüklerin ifası sınırlarında aktarılabilecektir. Verileriniz ticari veya pazarlama amacıyla izniniz olmaksızın üçüncü taraflarla paylaşılmaz.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
        <p>
          Kişisel verileriniz, internet sitemiz, telefon aramaları, sosyal medya hesaplarımız ve şubemizdeki yüz yüze görüşmeler kanalıyla sözlü, yazılı veya elektronik ortamda toplanmaktadır. Bu süreçte veriler, Kanun&apos;un 5. maddesinde yer alan “bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması” hukuki sebebine dayanarak işlenmektedir.
        </p>

        <h3 className="font-serif text-lg font-bold text-brand-chocolate mt-6">4. Veri Sahibinin Hakları</h3>
        <p>
          Kanun&apos;un 11. maddesi uyarınca, veri sahipleri olarak; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini talep etme haklarına sahipsiniz. Haklarınızı kullanmak için yazılı başvurunuzu <strong>{SiteConfig.address}</strong> adresine iletebilirsiniz.
        </p>
      </div>
    </div>
  );
}
