"use client";
import InstagramIcon from "@/components/ui/InstagramIcon";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { SiteConfig } from "@/data/site-config";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: "product" | "atmosphere";
}

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&auto=format&fit=crop&q=80",
      alt: "Things Premium Masa Düzeni",
      category: "atmosphere",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
      alt: "Belçika Çikolatalı Bowl Midnight Cocoa",
      category: "product",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80",
      alt: "Sıcak Kafe Atmosferi",
      category: "atmosphere",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&auto=format&fit=crop&q=80",
      alt: "Salty.2 Pesto & Füme Hindi Kruvasan",
      category: "product",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&auto=format&fit=crop&q=80",
      alt: "Iced Matcha Latte Lezzeti",
      category: "product",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop&q=80",
      alt: "Köpüklü Latte Sanatı",
      category: "product",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80",
      alt: "Belçika Çikolatalı Sıcak Çikolata",
      category: "product",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800&auto=format&fit=crop&q=80",
      alt: "Kahve Demleme İşlemi",
      category: "atmosphere",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-brand-chocolate">Galeri</h1>
        <p className="text-sm md:text-base text-brand-text/70 max-w-xl">
          Things&apos;in sıcacık ortamını, el yapımı çikolatalı tatlılarımızın hazırlanışını ve keyifli anları izleyin.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            onClick={() => setActiveImage(img)}
            className="group relative h-72 md:h-80 bg-brand-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-brand-chocolate/5 cursor-zoom-in transition-premium"
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover group-hover:scale-103 transition-premium"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-brand-chocolate/40 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-6 transition-premium">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cream bg-brand-coffee px-3 py-1 rounded-full w-max border border-brand-cream/10">
                {img.category === "product" ? "Ürün" : "Atmosfer"}
              </span>
              <div className="flex items-center justify-between text-brand-cream">
                <p className="text-xs font-semibold">{img.alt}</p>
                <ZoomIn className="w-5 h-5 shrink-0 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Instagram CTA */}
      <div className="mt-20 p-8 md:p-12 bg-brand-chocolate text-brand-cream rounded-3xl text-center space-y-6 max-w-3xl mx-auto shadow-md">
        <InstagramIcon className="w-10 h-10 text-brand-coffee mx-auto" />
        <h3 className="font-serif text-2xl md:text-3xl font-extrabold">Bizimle Paylaşın</h3>
        <p className="text-brand-cream/80 text-sm leading-relaxed max-w-md mx-auto">
          Mekanımızda geçirdiğiniz güzel anları ve tatlılarımızın fotoğraflarını <span className="font-semibold text-brand-coffee">@thingsankara</span> adresini etiketleyerek paylaşın, sayfamızda yayınlayalım!
        </p>
        <div className="pt-2">
          <a
            href={SiteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-coffee hover:bg-brand-coffee/90 text-brand-cream text-xs font-bold uppercase tracking-wider rounded-full transition-premium"
          >
            Bizi Instagram&apos;da Takip Et
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-brand-chocolate/95 flex items-center justify-center p-4 md:p-8 animate-fade-in cursor-zoom-out"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-2 bg-brand-cream/10 hover:bg-brand-cream/20 text-brand-cream rounded-full transition-premium focus:outline-none"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden border border-brand-cream/10 bg-brand-chocolate flex items-center justify-center shadow-2xl"
          >
            <Image
              src={activeImage.url}
              alt={activeImage.alt}
              fill
              className="object-contain"
            />
            {/* Title Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-chocolate via-brand-chocolate/80 to-transparent p-6 text-brand-cream">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-coffee">
                {activeImage.category === "product" ? "Ürün" : "Atmosfer"}
              </span>
              <h4 className="font-serif text-lg font-bold mt-1">{activeImage.alt}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
