import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Car Towing Service Dubai | Reliable & Affordable Towing",
  description:
    "Need a reliable car towing service in Dubai? DR Light Recovery provides professional vehicle towing with suitable equipment and support across Dubai.",
  alternates: {
    canonical: "https://www.drlightrecovery.com/car-towing-dubai/",
  },
  openGraph: {
    title: "Car Towing Service Dubai | Reliable & Affordable Towing",
    description:
      "Need a reliable car towing service in Dubai? DR Light Recovery provides professional vehicle towing with suitable equipment and support across Dubai.",
    url: "https://www.drlightrecovery.com/car-towing-dubai/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Car Towing Service Dubai",
  provider: {
    "@type": "AutomotiveBusiness",
    name: "DR Light Recovery",
    telephone: "+971528787066",
    url: "https://www.drlightrecovery.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
  description:
    "Professional car towing service in Dubai for SUVs, sedans, 4x4s, and electric vehicles across all areas of Dubai.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide 24/7 car towing in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If 24/7 towing is part of the current service, customers can contact DR Light Recovery at any time for towing assistance. Availability may depend on the situation and operational capacity.",
      },
    },
    {
      "@type": "Question",
      name: "How much does car towing cost in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The price can depend on the pickup location, destination, vehicle type, vehicle condition and towing requirements. Contact us with your vehicle and location details for a quote based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you tow an electric vehicle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Electric vehicles may require specific towing procedures depending on the model and its condition. Tell our team that the vehicle is electric when requesting assistance so the appropriate towing method can be considered.",
      },
    },
    {
      "@type": "Question",
      name: "How long does car towing take in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The time required depends on factors such as your location, traffic, destination and the vehicle's condition. Providing your exact location and destination can help the team assess the towing requirements.",
      },
    },
    {
      "@type": "Question",
      name: "When should I use car towing instead of driving my vehicle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Towing may be appropriate when a vehicle is not safe or practical to drive, has suffered a serious mechanical problem, has been involved in an accident, or needs to be transported to a workshop or another destination.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.drlightrecovery.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Car Towing Dubai",
      item: "https://www.drlightrecovery.com/car-towing-dubai/",
    },
  ],
};

export default function CarTowingDubaiPage() {
  const serviceAreas = [
    "Dubai Marina", "Downtown Dubai", "Business Bay", "JLT", "Deira",
    "Al Barsha", "Al Quoz", "Jebel Ali", "Other areas across Dubai"
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="pt-20">
        {/* Breadcrumb nav */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-xs text-neutral-400">
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <span className="mx-2 text-neutral-600">/</span>
          <span className="text-yellow-500 font-medium">Car Towing Service Dubai</span>
        </div>

        {/* 2. HERO SECTION */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
          {/* Subtle ambient gold glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(234,179,8,0.12),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

          {/* Live pulse badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            Reliable & Affordable Towing Service
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.15]">
            Professional Car Towing Service in{" "}
            <span className="text-yellow-500 relative">
              Dubai
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-4 leading-relaxed font-normal">
            When your vehicle needs to be moved safely, having the right towing service and equipment matters. DR Light Recovery provides car towing service in Dubai for drivers who need reliable vehicle transportation across the city.
          </p>

          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you need your car taken to a workshop, garage, dealership or another destination, our team can help arrange suitable towing assistance based on your vehicle and situation.
          </p>

          {/* CTA — Immediately after description */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:shadow-[#C62828]/35 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>📞 Call Now: +971 52 878 7066</span>
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20car%20towing%20service%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:shadow-[#1DA851]/30 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>💬 WhatsApp Now</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-yellow-500 font-semibold tracking-wide flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
            Reliable & Affordable Towing Service
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
          </p>
        </section>

        {/* 3. PROFESSIONAL TEAM & EQUIPMENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Towing Excellence</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Professional Towing Team & Suitable Equipment
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Safe towing starts with using the right equipment for the vehicle and the situation. Our towing team can assess the vehicle’s condition, location and destination to determine the appropriate towing approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Professional Assistance</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Clear communication helps the team understand where your vehicle is, where it needs to go and what condition it is in.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Suitable Towing Equipment</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Different vehicles and situations may require different towing methods. Using appropriate equipment helps reduce unnecessary risk during loading and transportation.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Careful Vehicle Handling</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Vehicles should be secured correctly before transportation. Our focus is on moving your car safely from the pickup location to the required destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAST TOWING NEAR YOU */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Every Area Covered</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Fast Car Towing Near You Across Dubai
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-4 leading-relaxed">
            A vehicle may need towing after an unexpected mechanical fault requiring <Link href="/breakdown-recovery-dubai" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-medium">roadside breakdown recovery</Link>, following an accident that calls for immediate <Link href="/emergency-car-recovery-dubai" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-medium">emergency car recovery</Link>, or when it simply needs to be transported to another location.
          </p>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            DR Light Recovery provides towing assistance across Dubai. If you’re searching for car towing near me, tow truck near me or towing service near me, contact our team with your location and vehicle details. Response time can depend on your location, traffic and current demand.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 text-xs text-neutral-300 font-medium transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. TYPES OF VEHICLES WE TOW */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Vehicle Compatibility</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Vehicles We Tow
              </h2>
              <p className="text-neutral-400 text-sm">
                Different vehicles can have different towing requirements. Our service can support the following vehicle types:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                  🚙
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">SUVs</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  SUVs can be larger and heavier than standard passenger cars, so appropriate towing equipment and secure loading are important.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                  🚗
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Sedans</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  We provide towing assistance for standard passenger sedans that need transportation to a garage, workshop or other destination.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                  🛞
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">4×4 Vehicles</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  4×4 vehicles may require suitable towing equipment depending on their size, condition and drivetrain configuration.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-neutral-400">
              For high-value or low-clearance performance vehicles, please visit our{" "}
              <Link href="/luxury-sports-car-towing-dubai" className="text-yellow-500 hover:underline">
                Luxury & Sports Car Towing Dubai
              </Link>{" "}
              page.
            </div>
          </div>
        </section>

        {/* 6. WHAT MAKES US DIFFERENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Our Standards</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              What Makes Our Towing Service Different?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Choosing a towing company should not be based only on how quickly a truck can arrive. The service should also provide clear communication, appropriate equipment and careful vehicle handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Clear & Transparent Pricing</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                We aim to explain the relevant towing requirements and pricing before arranging the service, helping customers understand what they are paying for.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Professional Approach</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Our team focuses on understanding the vehicle and situation before deciding how it should be moved.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Suitable Equipment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Using equipment appropriate for the vehicle helps support safer loading and transportation.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Convenient Communication</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Call or WhatsApp to share your location, vehicle type and destination easily.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group md:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Local Dubai Coverage</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Our towing service is available across Dubai, helping customers arrange vehicle transportation from different parts of the city. Also check our{" "}
                <Link href="/car-recovery-dubai" className="text-yellow-500 hover:underline">
                  car recovery service in Dubai
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Got Questions?</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 text-sm">
                Common questions about car towing services across Dubai.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Do you provide 24/7 car towing in Dubai?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  If 24/7 towing is part of the current service, customers can contact DR Light Recovery at any time for towing assistance. Availability may depend on the situation and operational capacity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>How much does car towing cost in Dubai?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  The price can depend on the pickup location, destination, vehicle type, vehicle condition and towing requirements. Contact us with your vehicle and location details for a quote based on your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Can you tow an electric vehicle?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Electric vehicles may require specific towing procedures depending on the model and its condition. Tell our team that the vehicle is electric when requesting assistance so the appropriate towing method can be considered.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>How long does car towing take in Dubai?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  The time required depends on factors such as your location, traffic, destination and the vehicle’s condition. Providing your exact location and destination can help the team assess the towing requirements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>When should I use car towing instead of driving my vehicle?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Towing may be appropriate when a vehicle is not safe or practical to drive, has suffered a serious mechanical problem, has been involved in an accident, or needs to be transported to a workshop or another destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-yellow-500/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Need Reliable Car Towing in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether your vehicle needs to reach a workshop, garage, dealership or another destination, DR Light Recovery can help arrange suitable towing assistance. Share your location and vehicle details with our team to get started.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:shadow-[#C62828]/35 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>📞 Call Now: +971 52 878 7066</span>
              </a>
              <a
                href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20car%20towing%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:shadow-[#1DA851]/30 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>💬 WhatsApp Now</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCta callLabel="Call for Towing" />
    </div>
  );
}
