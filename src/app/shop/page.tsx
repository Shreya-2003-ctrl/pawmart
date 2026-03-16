"use client";

export const dynamic = "force-dynamic";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X, PawPrint } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/productCard";
import { products, categories, type Category } from "@/data/products";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as Category | null) || null;

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(initialCategory);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  /* FILTER LOGIC */
  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory(null);
    setSortBy("popular");
  };

  return (
    <main className="bg-linear-to-b from-orange-50 via-white to-yellow-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">

        {/* PAGE HEADER */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-semibold mb-4">
            <PawPrint className="w-4 h-4" />
            Shop for Your Furry Friends
          </div>

          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Pet Essentials Store 🐾
          </h1>

          <p className="text-gray-600">
            Premium food, toys, grooming & accessories your pet will love.
          </p>
        </div>

        {/* SEARCH + SORT */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search treats, toys, food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 rounded-full h-12 shadow-sm"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-full border px-5 h-12 bg-white shadow-sm font-semibold"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <Button
            variant="outline"
            className="rounded-full md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex gap-8">

          {/* SIDEBAR FILTER */}
          <aside
            className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64`}
          >
            <div className="bg-white p-6 rounded-2xl shadow-md border space-y-4">
              <h3 className="font-bold text-lg">Categories 🐶</h3>

              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === c.id ? null : c.id)
                  }
                  className={`w-full text-left px-4 py-2 rounded-xl font-medium transition ${
                    selectedCategory === c.id
                      ? "bg-orange-500 text-white"
                      : "hover:bg-orange-50"
                  }`}
                >
                  {c.icon} {c.name}
                </button>
              ))}

              {(search || selectedCategory) && (
                <Button
                  variant="ghost"
                  className="w-full mt-2"
                  onClick={clearFilters}
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-5">
              Showing {filtered.length} products
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}