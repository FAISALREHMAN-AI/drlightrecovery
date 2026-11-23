import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Luxury Car Recovery Dubai | Sports & Premium Car Towing",
  description:
    "Need luxury or sports car recovery in Dubai? Get careful vehicle towing for low-clearance, performance and high-value cars with suitable recovery equipment.",
  alternates: {
    canonical: "https://www.drlightrecovery.com/luxury-sports-car-towing-dubai/",
  },
  openGraph: {
    title: "Luxury Car Recovery Dubai | Sports & Premium Car Towing",
    description:
      "Need luxury or sports car recovery in Dubai? Get careful vehicle towing for low-clearance, performance and high-value cars.",
    url: "https://www.drlightrecovery.com/luxury-sports-car-towing-dubai/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Luxury & Sports Car Towing Dubai",
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
    "Specialized luxury, sports, exotic, and performance car recovery and towing with low-clearance hydraulic flatbed equipment in Dubai.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you recover a low-clearance sports car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, low-clearance sports cars can be assessed for recovery based on their location, condition and loading requirements. Customers should mention that the vehicle has low clearance when requesting recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Can you recover a luxury car after an accident?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, an accident-damaged luxury vehicle can be assessed for recovery. The recovery method depends on the vehicle’s condition and how it is positioned after the accident.",
      },
    },
    {
      "@type": "Question",
      name: "How much does luxury car recovery cost in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on factors such as vehicle type, location, destination, distance, condition and loading requirements. Customers can contact DR Light Recovery with their vehicle and location details for a quote.",
      },
    },
    {
      "@type": "Question",
      name: "Can you recover a non-starting sports car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a non-starting sports car can be assessed for towing and recovery. The vehicle’s condition and location will help determine the appropriate recovery arrangement.",
      },
    },
    {
      "@type": "Question",
      name: "Can you transport a luxury car to a workshop or dealership?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, luxury vehicles may require transportation to a workshop, dealership or another requested destination. The recovery requirement can be discussed before arranging the service.",
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
      name: "Luxury & Sports Car Towing",
      item: "https://www.drlightrecovery.com/luxury-sports-car-towing-dubai/",
    },
  ],
};

export default function LuxurySportsCarTowingDubaiPage() {
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
          <span className="text-yellow-500 font-medium">Luxury & Sports Car Towing Dubai</span>
        </div>

        {/* 2. HERO SECTION */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
          {/* Subtle ambient gold glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(234,179,8,0.14),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            Low-Clearance Specialist — Exotic & Sports Vehicles
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.15]">
            Luxury & Sports Car Towing in{" "}
            <span className="text-yellow-500 relative">
              Dubai
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            Luxury and sports cars require careful recovery because of their low clearance, vehicle condition, loading requirements and high-value components. DR Light Recovery provides vehicle recovery and towing solutions for luxury, sports and performance vehicles across Dubai.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:shadow-[#C62828]/35 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>📞 Call Now for Luxury Car Recovery</span>
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20a%20quote%20for%20luxury/sports%20car%20towing."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:shadow-[#1DA851]/30 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>💬 WhatsApp for a Recovery Quote</span>
            </a>
          </div>
        </section>

        {/* 3. RECOVERY DESIGNED AROUND HIGH-VALUE VEHICLES */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Specialized Care
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Recovery Designed Around High-Value Vehicles
            </h2>
            <div className="p-8 rounded-2xl bg-black/60 border border-neutral-800/80 mb-6 max-w-3xl mx-auto">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                Luxury and performance vehicles can require a different approach from a standard <Link href="/car-towing-dubai" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-medium">professional car towing service</Link>. Vehicle clearance, loading position, condition and suitable recovery equipment should be considered before transportation.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Our recovery process focuses on understanding the vehicle and recovery situation first, then arranging an appropriate towing solution.
              </p>
            </div>
          </div>
        </section>

        {/* 4. WHAT MAKES LUXURY CAR TOWING DIFFERENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Zero-Damage Standards</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              What Makes Luxury Car Towing Different?
            </h2>
            <p className="text-neutral-400 text-sm">
              Handling precision designed to prevent contact and preserve vehicle integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Low-Clearance Vehicle Handling</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Many sports and performance cars sit closer to the ground than standard vehicles. Their clearance should be considered during loading and transportation to reduce the risk of unnecessary contact with the vehicle.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Careful Loading</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Luxury vehicles should be loaded with attention to their condition, position and accessibility. The recovery team should assess the vehicle before deciding how it can be safely moved.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Suitable Recovery Equipment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The appropriate recovery vehicle and equipment depend on the vehicle type, condition and recovery requirement. Equipment selection should be based on the specific situation rather than using the same approach for every vehicle.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Secure Transportation</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Once the vehicle is loaded, it should be secured appropriately for transportation to the requested destination, such as a workshop, dealership or other suitable location.
              </p>
            </div>
          </div>
        </section>

        {/* 5. WHEN YOUR LUXURY OR SPORTS CAR NEEDS RECOVERY */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Tailored Scenarios</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                When Your Luxury or Sports Car Needs Recovery
              </h2>
              <p className="text-neutral-400 text-sm">
                Common scenarios where sports cars and luxury sedans require dedicated recovery support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-yellow-400 transition-colors">Vehicle Breakdown</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If a luxury or sports car stops because of a mechanical or electrical problem, recovery may be required when the vehicle cannot safely continue driving.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-yellow-400 transition-colors">Accident or Vehicle Damage</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  After an accident, continuing to drive may not be suitable depending on the vehicle’s condition. A dedicated <Link href="/emergency-car-recovery-dubai" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-medium">emergency car recovery service</Link> can help transport the damaged vehicle to the required destination.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-yellow-400 transition-colors">Non-Starting Sports Car</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  A sports or performance vehicle that will not start may require towing when roadside assistance cannot resolve the issue or when transportation to a workshop is necessary.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-yellow-400 transition-colors">Workshop or Dealership Transport</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Luxury vehicles may need to be transported between locations for inspection, servicing, repairs or other vehicle-related requirements.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group md:col-span-2">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-yellow-400 transition-colors">Vehicle Stuck in an Inaccessible Position</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If a vehicle is stuck or positioned where normal driving is not possible, the recovery team can assess the situation and determine the appropriate way to move it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. VEHICLES WE CAN ASSESS FOR RECOVERY */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Vehicle Classes</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Luxury, Sports & Performance Vehicles We Can Assess for Recovery
            </h2>
            <p className="text-neutral-400 text-sm">
              Our recovery solutions are suited for high-end vehicle categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Luxury Cars</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Luxury sedans, premium vehicles and high-value cars can be assessed for appropriate towing and recovery based on their condition and location.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Sports Cars</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Sports cars may have low ground clearance and specific loading requirements. The recovery method should therefore be selected according to the vehicle.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Exotic & Performance Cars</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Exotic and performance vehicles can require additional attention during recovery because of their design, clearance and vehicle condition.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Low-Profile Vehicles</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Low-profile vehicles should be assessed before loading to determine the appropriate recovery approach.
              </p>
            </div>
          </div>
        </section>

        {/* 7. HOW LUXURY CAR RECOVERY WORKS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Structured Workflow</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                How Luxury Car Recovery Works
              </h2>
              <p className="text-neutral-400 text-sm">
                A 5-step careful process designed around valuable vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  01
                </span>
                <h3 className="text-white font-bold text-base mb-2">Share Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide your current vehicle location so the recovery requirement can be assessed and the service can be arranged.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  02
                </span>
                <h3 className="text-white font-bold text-base mb-2">Tell Us About the Vehicle</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Share the vehicle type and relevant details, especially if it is a luxury, sports, exotic or low-clearance vehicle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  03
                </span>
                <h3 className="text-white font-bold text-base mb-2">Explain the Recovery Requirement</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tell us whether the vehicle has broken down, has been involved in an accident, will not start, or needs transportation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  04
                </span>
                <h3 className="text-white font-bold text-base mb-2">Recovery Arrangement</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Based on the vehicle and situation, the appropriate towing or recovery arrangement can be determined.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 sm:col-span-2">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  05
                </span>
                <h3 className="text-white font-bold text-base mb-2">Secure Vehicle Transportation</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  The vehicle is loaded and transported to the requested destination according to the recovery requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY SPECIALIZED RECOVERY MATTERS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Vehicle Protection</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Why Specialized Recovery Matters for Luxury Cars
            </h2>
            <p className="text-neutral-400 text-sm">
              Standard towing procedures can risk front splitters, diffusers, and carbon-fiber underbodies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Vehicle Clearance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Low-clearance vehicles require consideration during loading and unloading to avoid unnecessary contact with the road or recovery equipment.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Vehicle Condition</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A vehicle that has suffered accident damage or a mechanical failure may have different recovery requirements from a normally operational vehicle.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Loading Requirements</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The loading method should take the vehicle’s design, clearance and condition into account.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Destination Requirements</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The destination also matters. A vehicle may need to be taken to a workshop, dealership or another specified location.
              </p>
            </div>
          </div>
        </section>

        {/* 9. LUXURY CAR RECOVERY ACROSS DUBAI */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Dubai Coverage</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Luxury Car Recovery Across Dubai
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Luxury and sports car towing can be required anywhere across Dubai, including residential areas, business districts, highways, parking facilities, workshops and other locations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
              {serviceAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 text-xs text-neutral-300 font-medium transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
              Searching for luxury car recovery near me, sports car towing near me or a recovery truck near me? Contact DR Light Recovery with your exact location and vehicle details.
            </p>
          </div>
        </section>

        {/* 10. LUXURY & SPORTS CAR TOWING COST IN DUBAI */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
            Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Luxury & Sports Car Towing Cost in Dubai
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            The cost of luxury or sports car towing in Dubai depends on the vehicle and the recovery situation. There is no single price that applies to every luxury vehicle recovery.
          </p>

          <div className="p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-sm mb-3 text-center text-yellow-500">Get a Clear Quote Before Recovery</h3>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              Factors affecting towing cost include vehicle type and size, current vehicle condition, pickup location, destination, distance, clearance, and equipment required.
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Customers can share their vehicle and recovery details before the service is arranged so the applicable cost can be confirmed upfront.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/971528787066"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Request a Luxury Car Towing Quote</span>
            </a>
            <a
              href="https://wa.me/971528787066?text=I%20would%20like%20a%20quote%20for%20luxury%20car%20towing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp for a Recovery Quote</span>
            </a>
          </div>
        </section>

        {/* 11. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Got Questions?</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 text-sm">
                Common questions about specialized sports and luxury car recovery in Dubai.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Can you recover a low-clearance sports car?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Yes, low-clearance sports cars can be assessed for recovery based on their location, condition and loading requirements. Customers should mention that the vehicle has low clearance when requesting recovery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Can you recover a luxury car after an accident?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Yes, an accident-damaged luxury vehicle can be assessed for recovery. The recovery method depends on the vehicle’s condition and how it is positioned after the accident.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>How much does luxury car recovery cost in Dubai?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  The cost depends on factors such as vehicle type, location, destination, distance, condition and loading requirements. Customers can contact DR Light Recovery with their vehicle and location details for a quote.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Can you recover a non-starting sports car?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Yes, a non-starting sports car can be assessed for towing and recovery. The vehicle’s condition and location will help determine the appropriate recovery arrangement.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Can you transport a luxury car to a workshop or dealership?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Yes, luxury vehicles may require transportation to a workshop, dealership or another requested destination. The recovery requirement can be discussed before arranging the service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-yellow-500/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Need Luxury or Sports Car Towing in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Need to move a luxury, sports, exotic or performance vehicle? Contact DR Light Recovery with your vehicle type, current location and destination so the appropriate towing or recovery requirement can be discussed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:shadow-[#C62828]/35 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>📞 Call Now for Luxury Car Towing</span>
              </a>
              <a
                href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20assistance%20with%20a%20luxury/sports%20car."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:shadow-[#1DA851]/30 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>💬 WhatsApp for Recovery Assistance</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCta callLabel="Luxury Towing" />
    </div>
  );
}
