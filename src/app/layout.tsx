import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Script from "next/script";

export const metadata = {
  title: "PawMart",
  description: "Pet shop for happy pets 🐾",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning>

          {/* Razorpay Script */}
          <Script
            src="https://checkout.razorpay.com/v1/checkout.js"
            strategy="afterInteractive"
          />

          {/* Toast notifications */}
          <Toaster position="top-center" richColors />

          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>

        </body>
      </html>
    </ClerkProvider>
  );
}