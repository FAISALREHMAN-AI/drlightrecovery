import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';
import ConversionTracking from '../components/ConversionTracking';

// ================= ADVANCED SEO METADATA =================
export const metadata: Metadata = {
  metadataBase: new URL("https://www.drlightrecovery.com"),
  title: {
    default: "DR Light Recovery | 24/7 Car Recovery & Towing in Dubai",
    template: "%s | DR Light Recovery Dubai",
  },
  description:
    "24/7 emergency car recovery, towing service, breakdown assistance, luxury car transport, and motorbike recovery across Dubai. Available 24/7. Call +971 52 878 7066.",
  keywords: [
    "DR Light Recovery",
    "Car Recovery Dubai",
    "Emergency car recovery Dubai",
    "Car Towing Service Dubai",
    "Car Breakdown Service Dubai",
    "Luxury Car Recovery Dubai",
    "Motorbike Recovery Dubai",
    "Car Towing Near Me",
    "Recovery Near Me Dubai",
    "Flatbed Towing Dubai",
  ],
  authors: [{ name: "DR Light Recovery", url: "https://www.drlightrecovery.com" }],
  creator: "DR Light Recovery",
  publisher: "DR Light Recovery",
  formatDetection: {
    telephone: true,
  },
  alternates: {
    canonical: "https://www.drlightrecovery.com",
    languages: {
      "en-AE": "https://www.drlightrecovery.com",
    },
  },
  openGraph: {
    title: "DR Light Recovery | 24/7 Car Recovery & Towing in Dubai",
    description:
      "Need car recovery or towing in Dubai? DR Light Recovery provides 24/7 recovery for breakdowns, accidents, luxury cars, and motorcycles across Dubai.",
    url: "https://www.drlightrecovery.com",
    siteName: "DR Light Recovery",
    images: [
      {
        url: "/branded-truck.png",
        width: 1200,
        height: 630,
        alt: "DR Light Recovery Tow Truck in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DR Light Recovery | 24/7 Car Recovery & Towing in Dubai",
    description:
      "24/7 emergency car recovery and towing across Dubai. Fast, reliable vehicle transportation.",
    images: ["/branded-truck.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ================= SCHEMA.ORG JSON-LD DATA =================
const automotiveBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": "https://www.drlightrecovery.com/#organization",
  name: "DR Light Recovery",
  alternateName: ["DR Light Recovery Dubai", "DR Light Car Towing Service"],
  url: "https://www.drlightrecovery.com",
  logo: "https://www.drlightrecovery.com/branded-truck.png",
  image: "https://www.drlightrecovery.com/branded-truck.png",
  description:
    "24/7 Emergency car recovery, car towing, breakdown assistance, luxury sports car transport, and motorcycle recovery in Dubai, UAE.",
  telephone: "+971528787066",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "AdministrativeArea", name: "Downtown Dubai" },
    { "@type": "AdministrativeArea", name: "Dubai Marina" },
    { "@type": "AdministrativeArea", name: "Business Bay" },
    { "@type": "AdministrativeArea", name: "JBR" },
    { "@type": "AdministrativeArea", name: "JLT" },
    { "@type": "AdministrativeArea", name: "Al Barsha" },
    { "@type": "AdministrativeArea", name: "Al Quoz" },
    { "@type": "AdministrativeArea", name: "Deira" },
    { "@type": "AdministrativeArea", name: "Bur Dubai" },
    { "@type": "AdministrativeArea", name: "Jebel Ali" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vehicle Recovery & Towing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Recovery Dubai",
          description: "24/7 car recovery for breakdown, accident and disabled vehicles across Dubai.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Car Recovery Dubai",
          description: "Urgent vehicle recovery assistance for stranded and non-starting vehicles in Dubai.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Towing Service Dubai",
          description: "Safe flatbed and wheel-lift towing for sedans, SUVs, and 4x4 vehicles in Dubai.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Breakdown Recovery Dubai",
          description: "Safe vehicle transportation for mechanical and non-starting breakdowns in Dubai.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury & Sports Car Towing Dubai",
          description: "Specialized low-clearance hydraulic flatbed towing for exotic and performance cars.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorbike Recovery Dubai",
          description: "Motorcycle, scooter, and bike recovery and transport across Dubai.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(automotiveBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-black text-white">
          <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18385462444" strategy="afterInteractive" />
          <Script id="google-ads-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18385462444');
            `}
          </Script>
          <ConversionTracking />
          {children}
        </body>
    </html>
  );
}
