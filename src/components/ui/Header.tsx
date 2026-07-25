"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Coffee } from "lucide-react";
import { SiteConfig } from "@/data/site-config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Menü", href: "/menu" },
    { name: "Galeri", href: "/galeri" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-premium ${
          isScrolled || isOpen
            ? "bg-brand-chocolate/95 shadow-lg backdrop-blur-md border-b border-brand-cream/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-wide text-brand-cream group-hover:text-brand-coffee transition-premium">
              {SiteConfig.shortBrandName}
            </span>
            <Coffee className="w-5 h-5 text-brand-coffee group-hover:rotate-12 transition-premium" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-premium relative py-1 ${
                  isActive(link.href)
                    ? "text-brand-coffee"
                    : "text-brand-cream/80 hover:text-brand-cream"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-coffee rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-brand-coffee hover:bg-brand-coffee/90 text-brand-cream rounded-full transition-premium shadow-md hover:shadow-lg"
            >
              Menüyü Gör
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-cream hover:text-brand-coffee transition-premium focus:outline-none"
            aria-label="Menüyü Aç/Kapat"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-brand-chocolate transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <nav className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              onClick={() => setIsOpen(false)}
              href={link.href}
              className={`text-xl font-medium tracking-widest uppercase transition-premium ${
                isActive(link.href) ? "text-brand-coffee font-semibold" : "text-brand-cream/70 hover:text-brand-cream"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            onClick={() => setIsOpen(false)}
            href="/menu"
            className="w-full max-w-xs text-center px-6 py-3.5 text-sm font-semibold uppercase tracking-wider bg-brand-coffee text-brand-cream rounded-full transition-premium shadow-md"
          >
            Menüyü Gör
          </Link>
        </nav>
      </div>
    </>
  );
}
