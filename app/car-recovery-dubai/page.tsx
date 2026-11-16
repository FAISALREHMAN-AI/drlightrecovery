import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Car Recovery Dubai | 24/7 Car Recovery Service",
  description:
    "Need car recovery in Dubai? DR Light Recovery provides recovery assistance for breakdowns, accidents and stranded vehicles. Call or WhatsApp for help.",
  alternates: {
    canonical: "https://www.drlightrecovery.com/car-recovery-dubai/",
  },
  openGraph: {
    title: "Car Recovery Dubai | 24/7 Car Recovery Service",
    description:
      "Need car recovery in Dubai? DR Light Recovery provides recovery assistance for breakdowns, accidents and stranded vehicles.",
    url: "https://www.drlightrecovery.com/car-recovery-dubai/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Car Recovery Dubai",
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
    "Professional car recovery in Dubai for vehicle breakdowns, accidents, stranded vehicles, and safe vehicle transportation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does car recovery cost in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on factors such as location, destination, vehicle type, vehicle condition and the recovery required. Contact us with your details for pricing based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you provide car recovery in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Response time can depend on your location, traffic, demand and the recovery requirements. Share your exact location when contacting us so the team can assess your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Dubai do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide recovery assistance across Dubai, including Dubai Marina, Downtown Dubai, Business Bay, JLT, Deira, Al Barsha and Al Quoz. Contact us if you're unsure about your location.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide 24/7 car recovery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if 24/7 service is currently available, customers can contact DR Light Recovery for breakdown and emergency recovery assistance at any time.",
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
      name: "Car Recovery Dubai",
      item: "https://www.drlightrecovery.com/car-recovery-dubai/",
    },
  ],
};

export default function CarRecoveryDubaiPage() {
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
          <span className="text-yellow-500 font-medium">Car Recovery Dubai</span>
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
            Available Now — 24/7 Car Recovery Dubai
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.15]">
            Car Recovery <span className="text-yellow-500 relative">Dubai<span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" /></span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            When your car breaks down, is involved in an accident, or cannot safely continue driving, DR Light Recovery provides reliable car recovery in Dubai to help move your vehicle safely.
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
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20car%20recovery%20in%20Dubai."
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
            Fast, Reliable & Available 24/7
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
          </p>
        </section>

        {/* 3. TRANSPARENT PRICING */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Clear Estimates
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Transparent Car Recovery Pricing — No Hidden Costs
            </h2>
            <div className="p-8 rounded-2xl bg-black/60 border border-neutral-800/80 mb-8 max-w-3xl mx-auto">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                Car recovery costs can vary depending on your location, destination, vehicle type, condition and the type of recovery required.
              </p>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                We aim to provide clear pricing based on your actual recovery requirements, so you know what to expect before arranging the service.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                If you’re looking for cheap car recovery in Dubai, don’t choose based on price alone. Clear pricing, suitable equipment and safe vehicle handling matter too.
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="tel:+971528787066"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Get a Quote / Call Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Professional Advantage</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Why Choose Our Car Recovery Service in Dubai?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Choosing a recovery company is about more than getting a truck to your location. Your vehicle needs to be handled appropriately and safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Reliable Recovery Assistance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Support for breakdowns, accidents and vehicles that cannot continue driving normally.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">24/7 Availability</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery assistance when vehicle problems happen outside normal hours, subject to operational availability.
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
                Recovery equipment should match the vehicle and the situation, from standard passenger cars to larger 4x4s.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Clear Communication</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Share your location, vehicle details and destination so the recovery team can understand your requirements.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Dubai-Wide Coverage</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery assistance across Dubai for drivers who need to move their vehicle safely from residential areas, highways, and parking facilities.
              </p>
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Simple 4-Step Process</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                How Our Car Recovery Service Works
              </h2>
              <p className="text-neutral-400 text-sm">
                A straightforward four-step process for fast car recovery and vehicle transportation across Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  01
                </span>
                <h3 className="text-white font-bold text-sm mb-2">Contact Us</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Call or WhatsApp DR Light Recovery and explain your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  02
                </span>
                <h3 className="text-white font-bold text-sm mb-2">Share Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide your current location, vehicle details and destination where possible.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  03
                </span>
                <h3 className="text-white font-bold text-sm mb-2">Recovery Is Arranged</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  The appropriate recovery vehicle and equipment are arranged based on your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                  04
                </span>
                <h3 className="text-white font-bold text-sm mb-2">Your Vehicle Is Recovered</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Your vehicle is safely recovered or transported to the required destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CAR RECOVERY VS CAR TOWING */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950/80 border border-neutral-800/80 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-10">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Service Comparison</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Car Recovery vs Car Towing — What’s the Difference?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-neutral-300 text-xs sm:text-sm leading-relaxed">
              <div className="p-7 rounded-2xl bg-black/70 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="inline-block px-3 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
                   roadside assistance
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 text-yellow-500">Car Recovery</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Car Recovery generally involves helping a vehicle that cannot safely continue its journey because of a breakdown, accident or similar problem. It focuses on safely retrieving a disabled vehicle from the roadside or parking spot.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/70 border border-neutral-800 hover:border-yellow-500/40 transition-colors">
                <div className="inline-block px-3 py-1 rounded bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider mb-3">
                  Vehicle transport
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 text-yellow-500">Car Towing</h3>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Car Towing generally focuses on transporting a vehicle from one location to another, such as to a garage, workshop or dealership. The right service depends on your vehicle’s condition and situation.
                </p>
                <div>
                  <Link
                    href="/car-towing-dubai"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    <span>View Car Towing Dubai</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-neutral-400">
              Related services: Explore our{" "}
              <Link href="/breakdown-recovery-dubai" className="text-yellow-500 hover:underline">
                Breakdown Recovery Dubai
              </Link>
              ,{" "}
              <Link href="/emergency-car-recovery-dubai" className="text-yellow-500 hover:underline">
                Emergency Car Recovery Dubai
              </Link>
              , or{" "}
              <Link href="/luxury-sports-car-towing-dubai" className="text-yellow-500 hover:underline">
                Luxury & Sports Car Towing
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 7. NEAR YOU / SERVICE AREAS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Local Assistance</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Car Recovery Near You Across Dubai
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Vehicle problems can happen anywhere. DR Light Recovery provides car recovery assistance across Dubai.
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
              If you’re searching for car recovery near me or recovery near me, contact us with your exact location and vehicle details.
            </p>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Got Questions?</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm">
              Answers to common queries about our car recovery services in Dubai.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>How much does car recovery cost in Dubai?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                The cost depends on factors such as location, destination, vehicle type, vehicle condition and the recovery required. Contact us with your details for pricing based on your situation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>How quickly can you provide car recovery in Dubai?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Response time can depend on your location, traffic, demand and the recovery requirements. Share your exact location when contacting us so the team can assess your situation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>Which areas of Dubai do you cover?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                We provide recovery assistance across Dubai, including Dubai Marina, Downtown Dubai, Business Bay, JLT, Deira, Al Barsha and Al Quoz. Contact us if you’re unsure about your location.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>Do you provide 24/7 car recovery?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Yes, if 24/7 service is currently available, customers can contact DR Light Recovery for breakdown and emergency recovery assistance at any time.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/80 border-t border-neutral-900 text-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(234,179,8,0.1),transparent)] pointer-events-none" />

          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-yellow-500/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Need Car Recovery in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Don’t leave a broken-down or damaged vehicle where it could create additional risk. Contact DR Light Recovery, share your location and vehicle details, and arrange the appropriate recovery assistance.
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
                href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20car%20recovery%20in%20Dubai."
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
      <StickyMobileCta />
    </div>
  );
}
