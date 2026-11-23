import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Car Breakdown Service Dubai | Breakdown Recovery 24/7",
  description:
    "Need a car breakdown service in Dubai? DR Light Recovery provides breakdown recovery assistance for vehicles that cannot safely continue driving. Call or WhatsApp for help.",
  alternates: {
    canonical: "https://www.drlightrecovery.com/breakdown-recovery-dubai/",
  },
  openGraph: {
    title: "Car Breakdown Service Dubai | Breakdown Recovery 24/7",
    description:
      "Need a car breakdown service in Dubai? DR Light Recovery provides breakdown recovery assistance for vehicles that cannot safely continue driving.",
    url: "https://www.drlightrecovery.com/breakdown-recovery-dubai/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Car Breakdown Service Dubai",
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
    "Breakdown recovery service in Dubai for non-starting vehicles, mechanical problems, and roadside breakdowns.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is breakdown recovery available 24/7 in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, DR Light Recovery provides 24/7 breakdown recovery assistance across Dubai.",
      },
    },
    {
      "@type": "Question",
      name: "How much does breakdown recovery cost in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on factors such as location, vehicle type, vehicle condition, recovery requirements and destination. Customers should contact DR Light Recovery with their details for an accurate quote.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can breakdown recovery reach me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Response time can depend on location, traffic, demand and the recovery requirements. Customers should provide their exact location when contacting the service.",
      },
    },
    {
      "@type": "Question",
      name: "Can you recover a car that will not start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where the vehicle can be safely recovered using suitable equipment. The customer should provide the vehicle details and location so the appropriate recovery solution can be arranged.",
      },
    },
    {
      "@type": "Question",
      name: "What information should I provide when requesting breakdown recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customers should provide their current location, vehicle type, vehicle condition and destination where possible. This helps the recovery team understand the situation and determine the appropriate assistance.",
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
      name: "Breakdown Recovery Dubai",
      item: "https://www.drlightrecovery.com/breakdown-recovery-dubai/",
    },
  ],
};

export default function BreakdownRecoveryDubaiPage() {
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
          <span className="text-yellow-500 font-medium">Breakdown Recovery Dubai</span>
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
            24/7 Breakdown Assistance Dubai
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.15]">
            Car Breakdown Service in{" "}
            <span className="text-yellow-500 relative">
              Dubai
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            When your car breaks down, will not start, or cannot safely continue driving, DR Light Recovery provides breakdown recovery assistance across Dubai.
          </p>

          {/* CTA — Immediately After Short Description */}
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
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20my%20car%20has%20broken%20down%20in%20Dubai."
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
            Reliable Breakdown Recovery Assistance Across Dubai
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
          </p>
        </section>

        {/* 3. FAST & RELIABLE BREAKDOWN RECOVERY */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Rapid Response
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Fast & Reliable Breakdown Recovery in Dubai
            </h2>
            <div className="p-8 rounded-2xl bg-black/60 border border-neutral-800/80 mb-6 max-w-3xl mx-auto">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                Car problems can happen unexpectedly. Whether your vehicle stops working, will not start, develops a mechanical problem, or becomes unsafe to drive, breakdown recovery can help move it safely.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                As part of our comprehensive <Link href="/car-recovery-dubai" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-medium">car recovery service in Dubai</Link>, DR Light Recovery provides assistance for drivers who need a suitable solution for a vehicle that cannot continue its journey. If you need a reliable car breakdown service near me or breakdown recovery in Dubai, our team is equipped to assist.
              </p>
            </div>
          </div>
        </section>

        {/* 4. WHAT OUR BREAKDOWN RECOVERY SERVICE COVERS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Service Scope</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              What Our Breakdown Recovery Service Covers
            </h2>
            <p className="text-neutral-400 text-sm">
              Common vehicle situations where breakdown recovery is required in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Car Won’t Start</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                For vehicles that fail to start and cannot safely be driven to a garage or other destination.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Mechanical Breakdown</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                For vehicles affected by engine overheating, gearbox failure, or mechanical problems that prevent normal driving.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Vehicle Stranded on the Road</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                For drivers whose vehicles have stopped working while travelling on major Dubai highways or local roads and need recovery assistance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Breakdown After an Accident</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                If a vehicle cannot safely continue after an accident or collision, recovery may be required to transport it safely.
              </p>
              <Link
                href="/emergency-car-recovery-dubai"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <span>Emergency Car Recovery Service</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. PROFESSIONAL TEAM & EQUIPMENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Trained Crew</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Professional Breakdown Recovery Team & Equipment
              </h2>
              <p className="text-neutral-400 text-sm">
                Vehicle recovery requires appropriate handling based on the vehicle and its condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Experienced Recovery Assistance</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Our dispatchers and recovery operators handle vehicle situations calmly and professionally across Dubai roads.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Suitable Recovery Equipment</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Recovery equipment is selected to match the vehicle type and situation, including <Link href="/car-towing-dubai" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-medium">flatbed car towing service</Link> options for secure workshop transportation.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Safe Vehicle Handling</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Vehicles are loaded, secured, and unloaded carefully to prevent secondary damage during transport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BREAKDOWN RECOVERY NEAR YOU */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Coverage Network</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Breakdown Recovery Near You Across Dubai
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Vehicle breakdowns can happen anywhere in Dubai. Tell DR Light Recovery your exact location, vehicle type and nature of the problem so the appropriate recovery assistance can be arranged.
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

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            Looking for car breakdown service near me or breakdown recovery near me? Contact us with your exact location.
          </p>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Straightforward Steps</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                How Our Breakdown Recovery Service Works
              </h2>
              <p className="text-neutral-400 text-sm">
                A simple four-step process: Contact → Location → Recovery Arrangement → Vehicle Recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  01
                </span>
                <h3 className="text-white font-bold text-base mb-2">Contact DR Light Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Call or WhatsApp and explain what has happened to your vehicle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  02
                </span>
                <h3 className="text-white font-bold text-base mb-2">Share Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide your current location, vehicle details and destination where possible.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  03
                </span>
                <h3 className="text-white font-bold text-base mb-2">Recovery Is Arranged</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  The appropriate recovery vehicle and equipment are arranged according to the vehicle and situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  04
                </span>
                <h3 className="text-white font-bold text-base mb-2">Your Vehicle Is Recovered</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  The vehicle is recovered or transported to your required destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY CHOOSE OUR BREAKDOWN RECOVERY SERVICE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Why Drivers Trust Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Why Choose Our Breakdown Recovery Service?
            </h2>
            <p className="text-neutral-400 text-sm">
              Dedicated vehicle breakdown support with suitable equipment and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Reliable Breakdown Assistance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Support for vehicles that cannot safely continue driving after a breakdown.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Professional Team & Equipment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery equipment and handling appropriate for the vehicle and its condition.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Transparent Pricing</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Clear pricing based on factors such as location, vehicle type, condition and recovery requirements.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Dubai-Wide Coverage</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Breakdown recovery assistance across all primary residential and commercial districts of Dubai.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+971528787066"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Get Breakdown Recovery Assistance</span>
            </a>
          </div>
        </section>

        {/* 9. BREAKDOWN RECOVERY PRICING */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Clear Pricing
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              How Much Does Breakdown Recovery Cost in Dubai?
            </h2>
            <div className="p-8 rounded-2xl bg-black/60 border border-neutral-800/80 mb-8 max-w-3xl mx-auto">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                The cost can vary depending on your location, vehicle type, condition, recovery requirements and destination. For an accurate quote, customers should provide their location and vehicle details before arranging the service.
              </p>
            </div>
            <a
              href="tel:+971528787066"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Call for a Quote</span>
            </a>
          </div>
        </section>

        {/* 10. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm">
              Common questions about vehicle breakdown recovery in Dubai.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>Is breakdown recovery available 24/7 in Dubai?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Yes, DR Light Recovery operates 24/7 across Dubai for breakdown and towing assistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>How much does breakdown recovery cost in Dubai?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                The cost depends on factors such as location, vehicle type, vehicle condition, recovery requirements and destination. Customers should contact DR Light Recovery with their details for an accurate quote.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>How quickly can breakdown recovery reach me?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Response time can depend on location, traffic, demand and the recovery requirements. Customers should provide their exact location when contacting the service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>Can you recover a car that will not start?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Yes, where the vehicle can be safely recovered using suitable equipment. The customer should provide the vehicle details and location so the appropriate recovery solution can be arranged.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>What information should I provide when requesting breakdown recovery?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Customers should provide their current location, vehicle type, vehicle condition and destination where possible. This helps the recovery team understand the situation and determine the appropriate assistance.
              </p>
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/80 border-t border-neutral-900 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-yellow-500/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Need Breakdown Recovery in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              If your vehicle has broken down and cannot safely continue driving, contact DR Light Recovery and provide your location and vehicle details.
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
                href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20breakdown%20recovery%20in%20Dubai."
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
      <StickyMobileCta callLabel="Call Breakdown Desk" />
    </div>
  );
}
