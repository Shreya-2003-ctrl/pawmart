import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "PawMart Order 🐾",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],

      success_url: "http://localhost:3000/payment-success",
      cancel_url: "http://localhost:3000/checkout",
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Payment failed" }, { status: 500 });
  }
}