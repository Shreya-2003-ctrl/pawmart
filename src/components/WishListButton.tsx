"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useUser, SignInButton } from "@clerk/nextjs";

export default function WishlistButton({ product }: any) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isSignedIn } = useUser();

  const saved = isInWishlist(product.id);

  const handleWishlist = () => {
    if (saved) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (!isSignedIn) {
    return (
      <SignInButton mode="modal">
        <button className="rounded-full border px-4 py-3">
          <Heart className="w-5 h-5" />
        </button>
      </SignInButton>
    );
  }

  return (
    <button
      onClick={handleWishlist}
      className="rounded-full border px-4 py-3"
    >
      <Heart
        className={`w-5 h-5 ${
          saved ? "fill-red-500 text-red-500" : "text-gray-500"
        }`}
      />
    </button>
  );
}