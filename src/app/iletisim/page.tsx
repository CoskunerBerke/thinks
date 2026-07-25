import InstagramIcon from "@/components/ui/InstagramIcon";
import { MapPin, Phone, Clock, ExternalLink, Coffee } from "lucide-react";
import { SiteConfig } from "@/data/site-config";

export const metadata = {
  title: "İletişim | Things Chocolate & Coffee",
  description: "Things Chocolate & Coffee Yenimahalle Ankara iletişim bilgileri, telefon numarası, çalışma saatleri ve yol tarifi bağlantıları.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-brand-chocolate">İletişim</h1>
        <p className="text-sm md:text-base text-brand-text/70 max-w-xl">
          Bizimle telefonla iletişime geçebilir, harita üzerinden yol tarifi alabilir veya çalışma saatlerimizi kontrol edebilirsiniz.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* Contact Info Cards */}
        <div className="space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-brand-chocolate">Bize Ulaşın</h2>
            <p className="text-sm text-brand-text/80 leading-relaxed">
              Sorularınız, iş ortaklıkları veya rezervasyon (özel durumlar) talepleriniz için aşağıdaki doğrudan iletişim kanallarını kullanabilirsiniz.
            </p>

            <div className="space-y-4">
              {/* Card 1: Phone */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-brand-white border border-brand-chocolate/5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-cream/60 flex items-center justify-center text-brand-coffee shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-text/50">Telefon Numarası</p>
                  <a href={SiteConfig.phoneLink} className="text-base font-bold text-brand-chocolate hover:text-brand-coffee transition-premium hover:underline">
                    {SiteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Card 2: Address */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-brand-white border border-brand-chocolate/5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-cream/60 flex items-center justify-center text-brand-coffee shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-text/50">Açık Adres</p>
                  <p className="text-sm font-semibold text-brand-chocolate leading-relaxed">{SiteConfig.address}</p>
                </div>
              </div>

              {/* Card 3: Hours */}
              <div className="flex items-center space-x-4 p-5 rounded-2xl bg-brand-white border border-brand-chocolate/5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand-cream/60 flex items-center justify-center text-brand-coffee shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-text/50">Çalışma Saatleri</p>
                  <p className="text-sm font-semibold text-brand-chocolate">{SiteConfig.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social CTAs */}
          <div className="p-6 rounded-3xl bg-brand-chocolate text-brand-cream space-y-4 shadow-md mt-6 lg:mt-0">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-lg font-bold">Things Sosyal Medya</span>
              <Coffee className="w-4 h-4 text-brand-coffee" />
            </div>
            <p className="text-xs text-brand-cream/70 leading-relaxed">
              Form doldurmak yerine doğrudan Instagram üzerinden bize mesaj gönderebilirsiniz. Güncel paylaşımlarımızı kaçırmayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={SiteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-coffee hover:bg-brand-coffee/90 text-brand-cream text-xs font-bold uppercase tracking-wider rounded-xl transition-premium shadow-md space-x-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram&apos;dan Yazın</span>
              </a>
              <a
                href={SiteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-cream/10 hover:bg-brand-cream hover:text-brand-chocolate text-brand-cream text-xs font-bold uppercase tracking-wider rounded-xl transition-premium border border-brand-cream/10 space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Yol Tarifi Alın</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="h-[450px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-md border border-brand-chocolate/5 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.471900130635!2d32.723793776363065!3d39.99839958136349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3477eef2770d1%3A0xe54e63e18a95d0bf!2sThings%20Chocolate%20%26%20Coffee!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Things Chocolate & Coffee Google Maps Location"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
