"use client";

import { useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, X, Coffee, ChevronRight, AlertCircle } from "lucide-react";
import { menuItems } from "@/data/menu";

function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Derived state directly from search parameters
  const selectedCategory = searchParams.get("cat") || "all";
  const searchQuery = searchParams.get("q") || "";

  // Auto-focus search input if focus query is present
  useEffect(() => {
    const focus = searchParams.get("focus");
    if (focus === "search" && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchParams]);

  // Handle category tab change
  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("cat");
    } else {
      params.set("cat", category);
    }
    params.delete("focus"); // Clear focus trigger
    router.replace(`/menu?${params.toString()}`);
  };

  // Handle search text change
  const handleSearchChange = (query: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!query) {
      params.delete("q");
    } else {
      params.set("q", query);
    }
    params.delete("focus"); // Clear focus trigger
    router.replace(`/menu?${params.toString()}`);
  };

  const clearSearch = () => {
    handleSearchChange("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Categories list
  const categories = [
    { id: "all", name: "Tümü" },
    { id: "sweety", name: "Sweety Things" },
    { id: "salty", name: "Salty Things" },
    { id: "iced", name: "Iced Things" },
    { id: "hot", name: "Hot Things" },
  ];

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    if (!item.available || !item.verified) return false;

    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="space-y-4 mb-12 text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-6xl font-extrabold text-brand-chocolate">Things Menü</h1>
        <p className="text-sm md:text-base text-brand-text/70 max-w-xl">
          Çikolatanın sanata dönüştüğü tatlılar, ekşi mayalı enfes kruvasanlar ve özenle seçilmiş kahveler.
        </p>
      </div>

      {/* Search and Filters Layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-none gap-2 -mx-6 px-6 md:mx-0 md:px-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-premium ${
                selectedCategory === cat.id
                  ? "bg-brand-chocolate text-brand-cream shadow-md"
                  : "bg-brand-cream/40 border border-brand-chocolate/5 text-brand-chocolate/80 hover:bg-brand-cream/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Ürün veya kategori ara..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-full bg-brand-white border border-brand-chocolate/10 text-brand-text text-sm focus:outline-none focus:border-brand-coffee transition-premium shadow-sm"
          />
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-brand-text/40" />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-3.5 p-0.5 rounded-full hover:bg-brand-cream text-brand-text/40 hover:text-brand-text transition-premium"
              aria-label="Aramayı temizle"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Menu Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/menu/${item.slug}`}
              className="group bg-brand-white rounded-3xl overflow-hidden border border-brand-chocolate/5 shadow-sm hover:shadow-lg transition-premium flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden bg-brand-cream/35">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-103 transition-premium"
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
                  <h3 className="font-serif text-lg font-bold text-brand-chocolate group-hover:text-brand-coffee transition-premium">
                    {item.name}
                  </h3>
                  <p className="text-xs text-brand-text/80 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-chocolate/5 mt-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-brand-coffee font-semibold">Detayları Gör</span>
                  <ChevronRight className="w-4 h-4 text-brand-coffee group-hover:translate-x-1 transition-premium" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-brand-white rounded-3xl border border-brand-chocolate/5 p-6">
          <AlertCircle className="w-12 h-12 text-brand-coffee mx-auto mb-4" />
          <h3 className="text-lg font-bold text-brand-chocolate mb-2">Ürün Bulunamadı</h3>
          <p className="text-sm text-brand-text/75 max-w-sm mx-auto">
            Aramanıza veya seçtiğiniz filtreye uygun bir menü ürünü bulamadık. Lütfen yazımı kontrol edin veya başka bir kategori seçin.
          </p>
        </div>
      )}

      {/* Mandatory Regulatory Disclaimer */}
      <div className="mt-16 p-4 rounded-2xl bg-brand-chocolate/5 border border-brand-chocolate/5 flex items-start space-x-3 max-w-2xl mx-auto">
        <AlertCircle className="w-5 h-5 text-brand-coffee shrink-0 mt-0.5" />
        <p className="text-[11px] md:text-xs text-brand-text/75 leading-relaxed">
          Ürün içerikleri, fiyatlar ve alerjen bilgileri değişiklik gösterebilir. En güncel ve kesin bilgiler için lütfen sipariş öncesinde işletmeyle iletişime geçiniz.
        </p>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center space-y-4">
          <Coffee className="w-12 h-12 text-brand-coffee animate-bounce mx-auto" />
          <p className="text-sm text-brand-chocolate font-medium">Menü yükleniyor...</p>
        </div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}
