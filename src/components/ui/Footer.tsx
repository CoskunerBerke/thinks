import InstagramIcon from "@/components/ui/InstagramIcon";
import Link from "next/link";
import { Coffee, Phone, MapPin, Clock } from "lucide-react";
import { SiteConfig } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="bg-brand-chocolate text-brand-cream border-t border-brand-cream/10 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-wide text-brand-cream">
              {SiteConfig.shortBrandName}
            </span>
            <Coffee className="w-5 h-5 text-brand-coffee" />
          </div>
          <p className="text-sm text-brand-cream/70 leading-relaxed max-w-xs">
            Batıkent’in kalbinde el yapımı Belçika çikolatalı tatlıları, taze demlenmiş nitelikli kahveleri ve zengin matcha çeşitleri ile güzel anları paylaşıyoruz.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href={SiteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-brand-cream/5 hover:bg-brand-coffee hover:text-brand-cream rounded-full transition-premium"
              aria-label="Instagram'da bizi takip edin"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-brand-coffee">Hızlı Bağlantılar</h3>
          <ul className="space-y-3">
            {[
              { name: "Ana Sayfa", href: "/" },
              { name: "Menümüz", href: "/menu" },
              { name: "Galeri", href: "/galeri" },
              { name: "Hakkımızda", href: "/hakkimizda" },
              { name: "İletişim", href: "/iletisim" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-cream/70 hover:text-brand-cream hover:underline decoration-brand-coffee underline-offset-4 transition-premium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-brand-coffee">İletişim</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-sm text-brand-cream/70">
              <MapPin className="w-5 h-5 text-brand-coffee shrink-0" />
              <a
                href={SiteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cream hover:underline transition-premium"
              >
                {SiteConfig.address}
              </a>
            </li>
            <li className="flex items-center space-x-3 text-sm text-brand-cream/70">
              <Phone className="w-5 h-5 text-brand-coffee shrink-0" />
              <a href={SiteConfig.phoneLink} className="hover:text-brand-cream hover:underline transition-premium">
                {SiteConfig.phone}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours Info */}
        <div>
          <h3 className="font-serif text-lg font-semibold mb-6 text-brand-coffee">Çalışma Saatleri</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-sm text-brand-cream/70">
              <Clock className="w-5 h-5 text-brand-coffee shrink-0" />
              <div>
                <p className="font-medium text-brand-cream">Haftanın Her Günü</p>
                <p className="text-xs text-brand-cream/60 mt-1">{SiteConfig.hours.replace("Haftanın her günü ", "")}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-brand-cream/50 text-center md:text-left">
          &copy; {new Date().getFullYear()} {SiteConfig.brandName}. Tüm Hakları Saklıdır.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "KVKK Politikası", href: "/kvkk" },
            { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
            { name: "Çerez Politikası", href: "/cerez-politikasi" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-brand-cream/50 hover:text-brand-cream transition-premium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
