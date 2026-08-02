import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// ================= SEO META TAGS & KEYWORDS =================
export const metadata: Metadata = {
  title: "Dr. Light Recovery | 24/7 Car Towing Service in Dubai",
  description: "Fast and reliable 24/7 emergency vehicle recovery, flat tyre repair, and battery jumpstart services anywhere in Dubai. Call Dr. Light Recovery now!",
  keywords: [
    "Car Towing Near Me", 
    "Battery Jumpstart Dubai", 
    "Emergency car recovery Dubai 24/7", 
    "Best car towing service in Dubai", 
    "Flat tyre repair Dubai", 
    "Sports car recovery service Dubai", 
    "Fast vehicle towing Dubai"
  ],
  authors: [{ name: "Dr. Light Recovery" }],
  openGraph: {
    title: "Dr. Light Recovery | Fast Car Towing in Dubai",
    description: "Stranded on the road? We provide 24/7 emergency towing and roadside assistance anywhere in Dubai.",
    url: "https://www.drlightrecovery.com",
    siteName: "Dr. Light Recovery",
    images: [
      {
        url: "/branded-truck.jpg", // Yeh link Facebook/WhatsApp par share karne par nazar aayega
        width: 1200,
        height: 630,
        alt: "Dr. Light Recovery Tow Truck in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon (Website icon in browser tab) */}
        <meta name="google-site-verification" content="oO7Hoem-rJpvXV0GunmSSGj7yKZxJKU7_PBgXmsfvN4" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}