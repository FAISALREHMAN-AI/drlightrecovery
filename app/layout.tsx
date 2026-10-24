import type { Metadata } from "next";
import Script from 'next/script';
import ConversionTracking from '@/components/ConversionTracking';
import "./globals.css";

// ================= ADVANCED SEO METADATA =================
export const metadata: Metadata = {
  metadataBase: new URL("https://drlight-recovery.vercel.app"),
  title: {
    default: "Dr. Light Recovery | 24/7 Car Towing Service in Dubai",
    template: "%s | Dr. Light Recovery Dubai",
  },
  description:
    "Fast and reliable 24/7 emergency vehicle recovery, flat tyre repair, desert recovery, and battery jumpstart services anywhere in Dubai. Call Dr. Light Recovery now!",
  keywords: [
    "Dr Light Recovery",
    "Dr. Light Recovery Dubai",
    "Car Towing Near Me",
    "Battery Jumpstart Dubai",
    "Emergency car recovery Dubai 24/7",
    "Best car towing service in Dubai",
    "Flat tyre repair Dubai",
    "Sports car recovery service Dubai",
    "Fast vehicle towing Dubai",
    "Towing Sheikh Zayed Road",
    "Dubai Marina car towing",
    "Desert recovery Dubai 4x4",
    "Downtown Dubai car recovery",
    "Roadside assistance Dubai",
  ],
  authors: [{ name: "Dr. Light Recovery", url: "https://drlight-recovery.vercel.app" }],
  creator: "Dr. Light Recovery",
  publisher: "Dr. Light Recovery",
  formatDetection: {
    telephone: true,
  },
  alternates: {
    canonical: "https://drlight-recovery.vercel.app",
    languages: {
      "en-AE": "https://drlight-recovery.vercel.app",
    },
  },
  openGraph: {
    title: "Dr. Light Recovery | 24/7 Fast Car Towing in Dubai",
    description:
      "Stranded on the road? We provide 24/7 emergency towing, flat tyre repair, and roadside assistance anywhere in Dubai.",
    url: "https://drlight-recovery.vercel.app",
    siteName: "Dr. Light Recovery",
    images: [
      {
        url: "/branded-truck.png",
        width: 1200,
        height: 630,
        alt: "Dr. Light Recovery Branded Tow Truck in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Light Recovery | 24/7 Fast Car Towing in Dubai",
    description:
      "Stranded on the road? We provide 24/7 emergency towing and roadside assistance anywhere in Dubai.",
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
  "@id": "https://drlight-recovery.vercel.app/#organization",
  name: "Dr. Light Recovery",
  alternateName: ["Dr Light Recovery Dubai", "Dr Light Towing Service"],
  url: "https://drlight-recovery.vercel.app",
  logo: "https://drlight-recovery.vercel.app/branded-truck.png",
  image: "https://drlight-recovery.vercel.app/branded-truck.png",
  description:
    "24/7 Emergency car recovery, flatbed towing, sports car transport, flat tyre repair, and 4x4 desert recovery services in Dubai, UAE.",
  email: "drlightrecovery@gmail.com",
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
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Towing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Flatbed Car Towing",
          description: "Scratch-free towing for everyday cars and SUVs across Dubai.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "VIP & Sports Car Recovery",
          description: "Zero-angle hydraulic flatbeds for luxury and supercars.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "4x4 Desert & Off-Road Winching",
          description: "Specialized desert pull-out for vehicles stuck in sand dunes.",
        },
      },
    ],
  },
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How fast can Dr. Light Recovery reach my location in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our average arrival time is 15 to 25 minutes anywhere in Dubai, including Sheikh Zayed Road, Dubai Marina, Downtown, and Al Barsha.",
      },
    },
    {
      "@type": "Question",
      name: "Is my sports car safe during flatbed towing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we use specialized zero-angle hydraulic flatbed tow trucks designed specifically for low clearance supercars to guarantee zero scratches.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide 24/7 desert off-road recovery in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We operate heavy-duty 4x4 assistance vehicles equipped with winches to pull out vehicles stuck in deep sand dunes 24/7.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="oO7Hoem-rJpvXV0GunmSSGj7yKZxJKU7_PBgXmsfvN4" />
        {/* Inject JSON-LD Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(automotiveBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
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