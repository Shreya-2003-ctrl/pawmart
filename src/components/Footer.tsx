import { PawPrint } from "lucide-react";
import Link from "next/link";

const Footer = () => (
  <footer className="mt-20 border-t border-orange-100 bg-linear-to-b from-orange-50 via-white to-yellow-50">
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <PawPrint className="h-7 w-7 text-orange-500" />
            <span className="text-2xl font-extrabold text-orange-600">
              PawMart
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Your trusted neighborhood pet store 🐾  
            From nutritious meals to playful toys — we help pets live
            healthier, happier lives every day.
          </p>

          <div className="mt-4 text-sm text-gray-500">
            <p>🕒 Mon – Sat: 9AM – 9PM</p>
            <p>📦 Fast delivery across the city</p>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/shop" className="hover:text-orange-500 transition">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/shop?category=food" className="hover:text-orange-500 transition">
                Healthy Food
              </Link>
            </li>
            <li>
              <Link href="/shop?category=toys" className="hover:text-orange-500 transition">
                Fun Toys
              </Link>
            </li>
            <li>
              <Link href="/shop?category=grooming" className="hover:text-orange-500 transition">
                Grooming Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition">
                Contact Us
              </Link>
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              Shipping Information
            </li>
            <li className="hover:text-orange-500 transition cursor-pointer">
              Easy Returns
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4 text-gray-800">Join Our Pet Club 🐶</h4>
          <p className="text-sm text-gray-600 mb-4">
            Get exclusive discounts, care tips, and new arrivals first!
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-orange-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition">
              Join
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            We promise — no spam, only pet happiness 🐾
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-6 border-t border-orange-100 text-center text-sm text-gray-500">
        © 2026 PawMart • Made by Shreya with ❤️ for pets & their humans.
      </div>
    </div>
  </footer>
);

export default Footer;