import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Award } from "lucide-react";
import CoffeeSteam from "@/components/ui/CoffeeSteam";

export const metadata = {
  title: "Hakkımızda | Things Chocolate & Coffee",
  description: "Things Chocolate & Coffee marka hikayesi. El yapımı çikolatalar, nitelikli kahveler ve geleneksel Matcha kültürünün hikayesini keşfedin.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* 1. Editorial Page Header */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-xs font-bold tracking-widest text-brand-coffee uppercase">Marka Hikayemiz</h1>
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-brand-chocolate leading-tight">
            Neden Biz? Ve Nasıl Hazırlıyoruz?
          </h2>
          <p className="text-sm md:text-base text-brand-text/80 leading-relaxed">
            Biz kahve kokusunun çikolatanın o eşsiz dokusuyla birleştiği anın hayranıyız. Batıkent&apos;teki şubemizde, misafirlerimize sıradan bir kafe deneyiminden fazlasını sunmak, kendilerini evlerinde hissedecekleri sıcak bir ortam oluşturmak amacıyla yola çıktık.
          </p>
          <p className="text-sm md:text-base text-brand-text/80 leading-relaxed">
            Things olarak bizim için her tabak ve her bardak bir sunum sanatı. Malzemelerimizin taze olmasına, çikolatalarımızın eriyişine ve kahvelerimizin demlenme saniyelerine varıncaya kadar her detayı büyük bir özenle takip ediyoruz.
          </p>
        </div>
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-md border border-brand-chocolate/5">
          <Image
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&auto=format&fit=crop&q=80"
            alt="Things Chocolate and Coffee table details"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 2. Artisanal Focus Columns */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <div className="p-8 rounded-3xl bg-brand-white border border-brand-chocolate/5 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-cream/60 flex items-center justify-center text-brand-coffee">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-chocolate">Çikolata Sanatı</h3>
          <p className="text-xs text-brand-text/80 leading-relaxed">
            Kullandığımız akışkan Belçika çikolatası tatlılarımızın kalbini oluşturur. Taze çilek ve muz dilimleri, pastacı kreması ve kırıntılarla mükemmel bir ahenk yaratır.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-brand-white border border-brand-chocolate/5 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="w-16 h-16 mx-auto">
            <CoffeeSteam />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-chocolate">Nitelikli Demlemeler</h3>
          <p className="text-xs text-brand-text/80 leading-relaxed">
            Espressodan Türk kahvesine kadar menümüzdeki tüm kahveler, çekirdeklerin aromatik profili korunarak doğru sıcaklık ve basınç değerlerinde demlenir.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-brand-white border border-brand-chocolate/5 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-cream/60 flex items-center justify-center text-brand-coffee">
            <Leaf className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-chocolate">Matcha Kültürü</h3>
          <p className="text-xs text-brand-text/80 leading-relaxed">
            Japonya&apos;dan ithal edilen birinci sınıf seremoniyal matcha tozunu geleneksel tariflerle birleştirerek hem sıcak hem de buzlu matcha latteleler olarak sunuyoruz.
          </p>
        </div>
      </section>

      {/* 3. The Story of Matcha Section */}
      <section className="bg-brand-chocolate text-brand-cream rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-xl">
        <div className="relative h-80 lg:h-[350px] rounded-2xl overflow-hidden border border-brand-cream/10">
          <Image
            src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&auto=format&fit=crop&q=80"
            alt="Premium Matcha Whisk and Ceremony"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-xs font-bold tracking-widest text-brand-coffee uppercase">Yeşil Güç: Matcha</h3>
          <h4 className="font-serif text-2xl md:text-4xl font-extrabold leading-tight">Matcha Kültürünün İncelikleri</h4>
          <p className="text-brand-cream/80 text-sm leading-relaxed">
            Matcha, gölgede yetiştirilen yeşil çay yapraklarının (Tencha) el değmeden taş değirmenlerde öğütülmesiyle elde edilen kadim bir çay tozudur. Demleme yaprak çayların aksine, matcha içerken çay yaprağının tamamını tükettiğiniz için yüksek oranda antioksidan ve amino asit alırsınız.
          </p>
          <p className="text-brand-cream/80 text-sm leading-relaxed">
            Things&apos;te matchalarımızı geleneksel bambu fırça (Chasen) kullanarak hazırlar, pürüzsüz ve kadifemsi kremasını kremsi sütle buluşturarak servis ederiz.
          </p>
          <div className="pt-2">
            <Link
              href="/menu?cat=iced"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-coffee hover:text-brand-cream transition-premium"
            >
              Matchalarımızı Keşfedin
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
