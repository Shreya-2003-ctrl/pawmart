"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CheckoutButton from "@/components/CheckoutButton";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* USER NOT LOGGED IN */}
          <SignedOut>
        <div className="flex justify-center items-center min-h-screen">
          <SignIn routing="hash" />
        </div>
      </SignedOut>

      {/* USER LOGGED IN */}
      <SignedIn>
        {items.length === 0 ? (
          <main className="container mx-auto px-4 py-24 text-center">
            <ShoppingCart className="h-16 w-16 text-orange-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Your cart is empty 🐾</h1>

            <p className="text-muted-foreground mb-6">
              Looks like your furry friend hasn’t picked anything yet.
            </p>

            <Link
              href="/shop"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition"
            >
              Start Shopping
            </Link>
          </main>
        ) : (
          <main className="container mx-auto px-4 py-10">
            <Link
              href="/shop"
              className="flex items-center gap-2 text-sm mb-6 text-orange-600"
            >
              <ArrowLeft className="h-4 w-4" /> Continue Shopping
            </Link>

            <h1 className="text-3xl font-black mb-8">
              Your Cart ({totalItems} items)
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* CART ITEMS */}
              <div className="lg:col-span-2 space-y-5">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-5 bg-white border border-orange-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={100}
                      height={100}
                      className="rounded-xl object-cover bg-orange-50"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{item.product.name}</h3>

                      <p className="text-orange-600 font-semibold">
                        ₹{item.product.price}
                      </p>

                      <div className="flex items-center gap-3 mt-4">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-2 rounded-lg bg-orange-100 hover:bg-orange-200"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="font-bold">{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-2 rounded-lg bg-orange-100 hover:bg-orange-200"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* ORDER SUMMARY */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 h-fit">
                <h2 className="text-xl font-bold mb-4">Order Summary 🐶</h2>

                <div className="flex justify-between text-sm mb-2">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span>Shipping</span>
                  <span>{totalPrice >= 999 ? "Free 🎉" : "₹99"}</span>
                </div>

                <div className="border-t my-4"></div>

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>
                    ₹{(totalPrice + (totalPrice >= 999 ? 0 : 99)).toFixed(2)}
                  </span>
                </div>

                <CheckoutButton
                  amount={totalPrice + (totalPrice >= 999 ? 0 : 99)}
                />
              </div>
            </div>
          </main>
        )}
      </SignedIn>
    </>
  );
}