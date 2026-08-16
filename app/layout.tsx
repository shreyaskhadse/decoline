import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://decoline.vercel.app";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Decoline — Art Drawn in Metal",
  description: "Original handcrafted metal art by Rajesh Khadse, made in Nagpur, India.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Decoline — Art Drawn in Metal",
    description: "Original handcrafted metal art by Rajesh Khadse.",
    type: "website",
    url: siteUrl,
    images: [{ url: `${siteUrl}/og-v2.jpg`, width: 1400, height: 737, alt: "Decoline — Objects with Presence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Decoline — Art Drawn in Metal",
    description: "Original handcrafted metal art by Rajesh Khadse.",
    images: [`${siteUrl}/og-v2.jpg`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
