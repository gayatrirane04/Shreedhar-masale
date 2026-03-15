import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Devanagari, Tiro_Devanagari_Marathi } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const tiroDevanagari = Tiro_Devanagari_Marathi({
  variable: "--font-tiro",
  subsets: ["devanagari"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shreedhar Masale - Premium Indian Spices",
  description: "Authentic, high-quality spices made with traditional recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoDevanagari.variable} ${tiroDevanagari.variable} antialiased`}
      >
        <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
          <CartProvider>
            {children}
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
