"use client";
import InstagramIcon from "@/components/ui/InstagramIcon";

import Link from "next/link";
import { Coffee, Search, MapPin } from "lucide-react";
import { SiteConfig } from "@/data/site-config";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe-bottom bg-brand-chocolate/90 backdrop-blur-lg border-t border-brand-cream/10 px-4 py-2 shadow-2xl">
      <div className="flex items-center justify-around h-12">
        {/* Menu Page */}
        <Link href="/menu" className="flex flex-col items-center justify-center space-y-1 text-brand-cream/80 hover:text-brand-coffee transition-premium group">
          <Coffee className="w-5 h-5 group-hover:scale-110 transition-premium" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">Menü</span>
        </Link>

        {/* Search */}
        <Link href="/menu?focus=search" className="flex flex-col items-center justify-center space-y-1 text-brand-cream/80 hover:text-brand-coffee transition-premium group">
          <Search className="w-5 h-5 group-hover:scale-110 transition-premium" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">Ara</span>
        </Link>

        {/* Navigation / Directions */}
        <a
          href={SiteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 text-brand-cream/80 hover:text-brand-coffee transition-premium group"
        >
          <MapPin className="w-5 h-5 group-hover:scale-110 transition-premium" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">Yol Tarifi</span>
        </a>

        {/* Instagram Profile */}
        <a
          href={SiteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center space-y-1 text-brand-cream/80 hover:text-brand-coffee transition-premium group"
        >
          <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-premium" />
          <span className="text-[10px] uppercase font-semibold tracking-wider">Instagram</span>
        </a>
      </div>
    </div>
  );
}
