"use client";
import InstagramIcon from "@/components/ui/InstagramIcon";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { SiteConfig } from "@/data/site-config";
import { menuItems } from "@/data/menu";

export default function HomePage() {
  // Extract featured popular items
  const popularItems = menuItems.filter((item) => item.featured && item.available);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="film-grain min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-chocolate overflow-hidden px-6 pt-24 md:pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=1600&auto=format&fit=crop&q=80"
            alt="Things Premium Table Setting"
            fill
            priority
            className="object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate via-brand-chocolate/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-cream/10 border border-brand-cream/15 text-brand-coffee text-xs md:text-sm font-semibold tracking-widest uppercase"
          >
            <span>{SiteConfig.brandName} • ANKARA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-7xl font-extrabold text-brand-cream leading-[1.1] tracking-tight"
          >
            TATLI ŞEYLER.<br />
            TUZLU ŞEYLER.<br />
            <span className="text-brand-coffee">GÜZEL ANLAR.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-brand-cream/80 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Kahveden matchaya, çikolatalı tatlılardan ekşi mayalı taze kruvasanlara uzanan Things lezzetlerini keşfedin.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-coffee hover:bg-brand-coffee/90 text-brand-cream text-sm font-bold uppercase tracking-wider rounded-full transition-premium shadow-lg"
            >
              Menüyü Keşfet
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href={SiteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-cream/10 hover:bg-brand-cream hover:text-brand-chocolate text-brand-cream text-sm font-bold uppercase tracking-wider rounded-full border border-brand-cream/20 hover:border-brand-cream transition-premium"
            >
              Yol Tarifi Al
            </a>
            <a
              href={SiteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-brand-cream/80 hover:text-brand-coffee text-xs font-semibold tracking-wider transition-premium space-x-2"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram&apos;da Takip Et</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Featured / Popular Items Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-brand-coffee uppercase">Müşterilerimizin Seçimi</h2>
            <p className="font-serif text-3xl md:text-5xl font-extrabold text-brand-chocolate leading-tight">
              En Popüler Things Lezzetleri
            </p>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-brand-chocolate hover:text-brand-coffee transition-premium group"
          >
            <span>Tüm Menüyü Gör</span>
            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-premium" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {popularItems.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group bg-brand-white rounded-3xl overflow-hidden border border-brand-chocolate/5 shadow-md hover:shadow-xl transition-premium flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-premium"
                />
                {item.badge && (
                  <span className="absolute top-4 left-4 bg-brand-chocolate text-brand-cream text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-brand-cream/10">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-coffee uppercase tracking-wider">{item.subcategory}</span>
                    {item.price && <span className="font-bold text-brand-chocolate">{item.price} TL</span>}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-chocolate group-hover:text-brand-coffee transition-premium">
                    {item.name}
                  </h3>
                  <p className="text-sm text-brand-text/80 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-brand-chocolate/5 mt-6">
                  <Link
                    href={`/menu/${item.slug}`}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-chocolate hover:text-brand-coffee transition-premium group/btn"
                  >
                    <span>İncele & İçerik</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-premium" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Atmosphere Section */}
      <section className="bg-brand-chocolate text-brand-cream py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-xs font-bold tracking-widest text-brand-coffee uppercase">Things Mekan & Atmosfer</h2>
            <p className="font-serif text-3xl md:text-5xl font-extrabold leading-tight">
              Güzel şeyler burada buluşur.
            </p>
            <p className="text-brand-cream/80 text-sm md:text-base leading-relaxed">
              Things, sade ve zarif iç mimarisiyle sıcacık bir buluşma noktası. Arkadaşlarınızla keyifli sohbetler yapabileceğiniz, kahvenizi yudumlarken kitabınızı okuyabileceğiniz ve Belçika çikolatalı gurme tatlılarımızla gününüzü renklendirebileceğiniz bir mekan tasarladık.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-3 bg-brand-cream/5 border border-brand-cream/10 px-5 py-3.5 rounded-2xl">
                <Clock className="w-5 h-5 text-brand-coffee" />
                <span className="text-sm font-medium">{SiteConfig.hours}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-brand-cream/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
              alt="Things Cafe Atmosphere Interior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Instagram / Social Masonry Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xs font-bold tracking-widest text-brand-coffee uppercase">Sosyal Medyada Biz</h2>
          <p className="font-serif text-3xl md:text-5xl font-extrabold text-brand-chocolate">
            @thingsankara
          </p>
          <p className="text-sm text-brand-text/70 max-w-md mx-auto">
            Gününüzü tatlandıran en güzel paylaşımları ve anları Instagram hesabımızdan takip edin.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&auto=format&fit=crop&q=80",
          ].map((url, i) => (
            <div key={i} className="relative h-64 md:h-80 rounded-2xl overflow-hidden group border border-brand-chocolate/5 shadow-sm">
              <Image
                src={url}
                alt={`Instagram Post ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-premium"
              />
              <div className="absolute inset-0 bg-brand-chocolate/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-premium">
                <InstagramIcon className="w-8 h-8 text-brand-cream" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href={SiteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-chocolate hover:bg-brand-coffee text-brand-cream text-xs font-bold uppercase tracking-wider rounded-full transition-premium shadow-md"
          >
            <InstagramIcon className="w-4 h-4 mr-2" />
            Takip Et
          </a>
        </div>
      </section>

      {/* 5. Contact & Location Section */}
      <section className="bg-brand-white py-24 px-6 border-t border-brand-chocolate/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-widest text-brand-coffee uppercase">Ulaşım & İletişim</h2>
              <p className="font-serif text-3xl md:text-5xl font-extrabold text-brand-chocolate leading-tight">
                Kahve Bahane,<br />Sohbet Şahane.
              </p>
              <p className="text-brand-text/80 text-sm md:text-base leading-relaxed">
                Kentkoop Mahallesi&apos;ndeki şubemizde sizleri ağırlamaktan mutluluk duyarız. Bize telefonla ulaşabilir, yol tarifi alabilir veya çalışma saatlerimizi inceleyebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-brand-cream/30 border border-brand-chocolate/5">
                <MapPin className="w-5 h-5 text-brand-coffee shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-bold text-brand-chocolate text-sm uppercase tracking-wider">Adres</h4>
                  <p className="text-xs text-brand-text/80 leading-relaxed">{SiteConfig.address}</p>
                  <a
                    href={SiteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-brand-coffee hover:underline mt-2"
                  >
                    Google Haritada Aç
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-brand-cream/30 border border-brand-chocolate/5">
                <Phone className="w-5 h-5 text-brand-coffee shrink-0 mt-1" />
                <div className="space-y-2">
                  <h4 className="font-bold text-brand-chocolate text-sm uppercase tracking-wider">İletişim</h4>
                  <p className="text-xs text-brand-text/80">{SiteConfig.phone}</p>
                  <p className="text-[10px] text-brand-text/50">Sipariş ve Sorularınız İçin</p>
                  <a
                    href={SiteConfig.phoneLink}
                    className="inline-flex items-center justify-center px-4 py-2 bg-brand-coffee text-brand-cream text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-brand-coffee/95 transition-premium mt-2"
                  >
                    Bizi Ara
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed or Static Map Link */}
          <div className="relative h-[350px] lg:h-full min-h-[350px] rounded-3xl overflow-hidden shadow-lg border border-brand-chocolate/5">
            {/* Interactive Map Embed */}
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
      </section>

      {/* Local Business JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            "name": "Things Chocolate & Coffee",
            "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&auto=format&fit=crop&q=80",
            "@id": "https://thingsmenu.com",
            "url": "https://thingsmenu.com",
            "telephone": "+903122518937",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kentkoop Mahallesi, 1865. Cadde, No:19C",
              "addressLocality": "Batıkent, Yenimahalle",
              "addressRegion": "Ankara",
              "postalCode": "06370",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.9983995,
              "longitude": 32.7237937
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "08:30",
              "closes": "23:30"
            },
            "sameAs": [
              "https://www.instagram.com/thingsankara/"
            ]
          })
        }}
      />
    </div>
  );
}
