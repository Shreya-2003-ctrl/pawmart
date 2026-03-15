"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/productCard";
import { products } from "@/data/products";
import AddToCartButton from "@/components/products/AddToCartButton";
import WishListButton from "@/components/WishListButton";
import { useState } from "react";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const product = products.find((p) => p.id === params.id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">🐾</p>
        <h1 className="text-2xl font-bold mb-2">Product not found</h1>

        <Button asChild variant="outline" className="rounded-full mt-4">
          <Link href="/shop">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </Button>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="mb-6 text-muted-foreground"
      >
        <Link href="/shop">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Shop
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Image */}
        <div className="bg-card rounded-2xl overflow-hidden border relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-5">
          <h1 className="text-3xl font-black">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(product.rating)
                    ? "fill-primary text-primary"
                    : "text-muted"
                }`}
              />
            ))}
            <span className="text-sm">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-primary">
              ${product.price}
            </span>

            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-foreground/70">{product.description}</p>

          {/* Quantity */}
          <div>
            <label className="text-sm font-bold mb-2 block">
              Quantity
            </label>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                -
              </Button>

              <span className="w-10 text-center font-bold">
                {quantity}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Add to Cart + Wishlist */}
          <div className="flex gap-3 pt-2">
            <AddToCartButton
              product={product}
              quantity={quantity}
            />

            <WishListButton product={product} />
          </div>

          {/* Product Features */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            {[Truck, Shield, RotateCcw].map((Icon, i) => (
              <div
                key={i}
                className="text-center p-3 rounded-xl bg-muted"
              >
                <Icon className="w-5 h-5 mx-auto mb-1 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-black mb-6">
            You May Also Like 🐾
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;