import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/productCard";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-b from-orange-50 via-white to-yellow-50">
        <div className="absolute -top-32 -left-32 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 bg-yellow-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 relative">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
              🐾 Trusted by 10,000+ Pet Parents
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800">
              Everything Your Pet
              <span className="text-orange-500"> Loves</span>, Delivered.
            </h1>

            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              Healthy food, fun toys, grooming & essentials — curated to keep tails wagging and whiskers happy.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full px-8 bg-orange-500 hover:bg-orange-600">
                <Link href="/shop">
                  Shop Now <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-orange-200">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 max-w-lg">
            <Image
              src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=2070&auto=format&fit=crop"
              alt="Happy pets"
              width={600}
              height={600}
              className="rounded-3xl shadow-xl object-cover border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-white py-10 border-y">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, label: "Free Shipping ₹499+" },
            { icon: Shield, label: "Vet Approved Products" },
            { icon: Clock, label: "Fast Delivery" },
            { icon: Star, label: "4.9★ Happy Customers" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-orange-50 hover:bg-orange-100 transition"
            >
              <b.icon className="w-7 h-7 text-orange-500 mb-2" />
              <span className="text-sm font-semibold text-gray-700">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20 bg-linear-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Best Sellers 🔥
            </h2>
            <Link href="/shop" className="text-orange-500 font-semibold hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">
            New Arrivals ✨
          </h2>
          <Link href="/shop" className="text-orange-500 font-semibold hover:underline">
            Explore →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}