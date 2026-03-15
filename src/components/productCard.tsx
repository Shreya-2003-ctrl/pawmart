"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const wished = isInWishlist(product.id);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden">

      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">

        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-300 cursor-pointer"
          />
        </Link>

        {/* ❤️ Wishlist Button */}
        <button
          onClick={() => {
            if (wished) {
              removeFromWishlist(product.id);
              toast("Removed from wishlist");
            } else {
              addToWishlist(product);
              toast.success("Added to wishlist ❤️");
            }
          }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <Heart
            className={`h-5 w-5 ${
              wished ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
          />
        </button>

      </div>

      <div className="p-5 space-y-3">

        {/* TITLE */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 hover:text-orange-500 transition cursor-pointer">
            {product.name}
          </h3>
        </Link>

        <p className="text-lg font-bold text-orange-600">
          ₹{product.price}
        </p>

        {/* Add to Cart */}
        <button
          onClick={() => {
            addToCart(product, 1);

            toast.success("Added to cart 🐾", {
              description: product.name,
            });
          }}
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>

      </div>
    </div>
  );
}