"use client";

import { useUser, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

type Props = {
  product: any;
  quantity: number;
};

export default function AddToCartButton({ product, quantity }: Props) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-bold flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <button
          onClick={handleAdd}
          className="rounded-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-bold flex items-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </SignedIn>
    </>
  );
}