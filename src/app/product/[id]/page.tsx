"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Star } from "lucide-react";

export default function ProductDetailsPage() {
  const params = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <h1 className="text-3xl font-black">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-primary text-primary" />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-muted-foreground">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-extrabold text-primary">
              ₹{product.price}
            </span>

            {product.originalPrice && (
              <span className="line-through text-muted-foreground">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Highlights */}
          {product.highlights && (
            <ul className="space-y-2">
              {product.highlights.map((h, i) => (
                <li key={i} className="text-sm">
                  ✅ {h}
                </li>
              ))}
            </ul>
          )}

          {/* Sizes */}
          {product.sizes && (
            <div>
              <h3 className="font-bold mb-2">Available Sizes:</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 border rounded-md text-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add To Cart */}
          <Button
            size="lg"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-x transition transform hover:scale-[1.02]"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2 w-5 h-5" />
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}