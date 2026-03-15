"use client";

import Link from "next/link";
import { XCircle, ShoppingCart, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-orange-50 px-4">
      
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center border border-orange-100">

        <XCircle className="mx-auto text-red-500 w-16 h-16 mb-4" />

        <h1 className="text-2xl font-bold mb-2">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-6">
          No worries! Your payment was not completed.  
          You can return to your cart and try again.
        </p>

        <div className="flex flex-col gap-3">

          <Link
            href="/cart"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition"
          >
            <ShoppingCart size={18} />
            Return to Cart
          </Link>

          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 border border-orange-300 text-orange-600 py-3 rounded-full font-semibold hover:bg-orange-100 transition"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}