"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser, SignInButton } from "@clerk/nextjs";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Your wishlist is empty ❤️</h1>
        <Link
          href="/shop"
          className="text-orange-500 font-semibold hover:underline"
        >
          Browse products →
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10">Your Wishlist ❤️</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm"
          >
            <Link href={`/product/${product.id}`}>
              <div className="relative h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </Link>

            <h3 className="font-semibold mb-1">{product.name}</h3>

            <p className="text-orange-600 font-bold mb-4">
              ₹{product.price}
            </p>

            <div className="flex gap-3">

              {/* Move to Cart */}
              <button
                onClick={() => {
                  addToCart(product, 1);
                  removeFromWishlist(product.id);

                  toast.success("Moved to cart 🛒", {
                    description: product.name,
                  });
                }}
                className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
              >
                <ShoppingCart className="h-4 w-4" />
                Move to Cart
              </button>

              {/* Remove */}
              <button
                onClick={() => {
                  removeFromWishlist(product.id);
                  toast("Removed from wishlist");
                }}
                className="p-2 border rounded-lg hover:bg-gray-50"
              >
                <Trash2 className="h-5 w-5 text-red-500" />
              </button>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}