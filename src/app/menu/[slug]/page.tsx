import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, AlertTriangle, ShieldAlert } from "lucide-react";
import { menuItems } from "@/data/menu";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = menuItems.find((p) => p.slug === slug);

  if (!item || !item.available || !item.verified) {
    return {
      title: "Ürün Bulunamadı | Things Chocolate & Coffee",
    };
  }

  return {
    title: `${item.name} | Things Chocolate & Coffee`,
    description: item.description,
    openGraph: {
      title: `${item.name} | Things Chocolate & Coffee`,
      description: item.description,
      images: [{ url: item.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = menuItems.find((p) => p.slug === slug);

  // If the product is unavailable or unverified in production, return 404
  if (!item || !item.available || !item.verified) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/menu"
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-chocolate hover:text-brand-coffee transition-premium group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-premium" />
          Menüye Geri Dön
        </Link>
      </div>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-brand-white rounded-3xl overflow-hidden border border-brand-chocolate/5 p-6 md:p-10 shadow-sm">
        {/* Product Image */}
        <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-brand-cream/35 border border-brand-chocolate/5">
          <Image
            src={item.image}
            alt={item.name}
            fill
            priority
            className="object-cover"
          />
          {item.badge && (
            <span className="absolute top-4 left-4 bg-brand-chocolate text-brand-cream text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-brand-cream/10">
              {item.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-brand-coffee uppercase tracking-widest">{item.subcategory}</span>
            <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-chocolate">{item.name}</h1>
            {item.price && (
              <div className="text-2xl font-extrabold text-brand-chocolate pt-2">
                {item.price} <span className="text-lg font-medium text-brand-coffee">TL</span>
              </div>
            )}
          </div>

          <p className="text-sm text-brand-text/80 leading-relaxed pt-2 border-t border-brand-chocolate/5">
            {item.description}
          </p>

          {/* Ingredients list */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-brand-chocolate/5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-brand-chocolate">İçindekiler</h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 rounded-lg bg-brand-cream/40 border border-brand-chocolate/5 text-xs text-brand-chocolate font-medium"
                  >
                    <Check className="w-3.5 h-3.5 mr-1 text-brand-coffee" />
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Allergens warning */}
          {item.allergens && item.allergens.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-brand-chocolate/5">
              <h3 className="font-bold text-xs uppercase tracking-wider text-brand-chocolate flex items-center text-brand-berry">
                <AlertTriangle className="w-4 h-4 mr-1.5" />
                Alerjen Uyarısı
              </h3>
              <p className="text-xs text-brand-text/75 leading-relaxed">
                Bu ürün şu alerjenleri içermektedir: <span className="font-semibold text-brand-chocolate">{item.allergens.join(", ")}</span>.
              </p>
            </div>
          )}

          {/* Service Disclaimer */}
          <div className="pt-6 border-t border-brand-chocolate/5 text-[10px] text-brand-text/50 leading-relaxed flex items-start space-x-2">
            <ShieldAlert className="w-4 h-4 text-brand-coffee shrink-0 mt-0.5" />
            <span>
              Things mutfaklarında tüm tatlı ve kahvelerimiz özenle hazırlanmaktadır. Detaylı hassasiyetleriniz ve çapraz bulaşma riskleri hakkında lütfen servis öncesinde personelimize danışınız.
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumb List JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://thingsmenu.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Menü",
                "item": "https://thingsmenu.com/menu"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": item.name,
                "item": `https://thingsmenu.com/menu/${item.slug}`
              }
            ]
          })
        }}
      />
    </div>
  );
}
