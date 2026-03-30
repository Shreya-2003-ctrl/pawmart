"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, Menu, X, PawPrint, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Navbar() {
  const { totalItems } = useCart();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { isSignedIn } = useUser(); // ✅ FIXED

  const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* 🐾 Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-orange-100 group-hover:bg-orange-200 transition">
            <PawPrint className="h-6 w-6 text-orange-500" />
          </div>
          <span className="text-2xl font-extrabold text-orange-500 tracking-tight">
            PawMart
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative font-semibold transition ${
                pathname === l.href
                  ? "text-orange-500"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {l.label}

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-orange-400 rounded-full transition-all duration-300 ${
                  pathname === l.href ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* 🔍 Search */}
          <Link
            href="/shop"
            className="p-2 rounded-full hover:bg-orange-100 transition"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </Link>

          {/* ❤️ Wishlist */}
          {isSignedIn ? (
            <Link
              href="/wishlist"
              className="p-2 rounded-full hover:bg-orange-100 transition"
            >
              ❤️
            </Link>
          ) : (
            <SignInButton mode="modal">
              <button className="p-2 rounded-full hover:bg-orange-100 transition">
                ❤️
              </button>
            </SignInButton>
          )}

          {/* 🛒 Cart */}
          {isSignedIn ? (
  <Link
    href="/cart"
    className="relative p-2 rounded-full hover:bg-orange-100 transition"
  >
    <ShoppingCart className="h-5 w-5 text-gray-600" />

    {totalItems > 0 && (
      <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow">
        {totalItems}
      </span>
    )}
  </Link>
) : (
  <SignInButton mode="modal">
    <button className="relative p-2 rounded-full hover:bg-orange-100 transition">
      <ShoppingCart className="h-5 w-5 text-gray-600" />
    </button>
  </SignInButton>
)}

          {/* 👤 Profile Dropdown */}
          <div className="relative">
            <User
              className="h-6 w-6 text-gray-600 cursor-pointer"
              onClick={() => setProfileOpen(!profileOpen)}
            />

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-xl p-3 border border-orange-100 z-50">
                
                <p className="font-semibold text-gray-700 mb-2">
                  My Account
                </p>

                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="block w-full text-left px-2 py-1 rounded hover:bg-orange-50">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="block w-full text-left px-2 py-1 rounded hover:bg-orange-50">
                      Sign Up
                    </button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <div className="mt-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            )}
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-orange-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 px-4 py-4 space-y-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-lg font-medium ${
                pathname === l.href
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-600 hover:bg-orange-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}