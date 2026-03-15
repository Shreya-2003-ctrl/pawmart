"use client";

type CheckoutButtonProps = {
  amount: number;
};

export default function CheckoutButton({ amount }: CheckoutButtonProps) {

  const handleCheckout = async () => {

    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    window.location.href = data.url;
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-bold"
    >
      Proceed to Checkout 🐾
    </button>
  );
}