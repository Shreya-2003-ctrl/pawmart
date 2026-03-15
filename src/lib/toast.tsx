"use client";

import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

export const productAddedToast = (
  name: string,
  image: string
) => {
  toast.custom(() => (
    <div className="flex items-center gap-3 bg-white shadow-lg rounded-lg p-3 border w-[320px]">

      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
        className="rounded-md"
      />

      <div className="flex flex-col flex-1">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-500">Added to cart 🐾</p>

        <Link
          href="/cart"
          className="text-xs text-blue-600 mt-1"
        >
          View Cart
        </Link>
      </div>

    </div>
  ));
};