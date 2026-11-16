import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Emergency Car Recovery Dubai | Emergency Recovery Service",
  description:
    "Need emergency car recovery in Dubai? DR Light Recovery provides recovery assistance for breakdowns, accidents and stranded vehicles. Call or WhatsApp now.",
  alternates: {
    canonical: "https://www.drlightrecovery.com/emergency-car-recovery-dubai/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Emergency Car Recovery Dubai | Emergency Recovery Service",
    description:
      "Need emergency car recovery in Dubai? DR Light Recovery provides recovery assistance for breakdowns, accidents and stranded vehicles. Call or WhatsApp now.",
    url: "https://www.drlightrecovery.com/emergency-car-recovery-dubai/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Emergency Car Recovery",
  name: "Emergency Car Recovery in Dubai",
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
    name: "Dubai, UAE",
  },
  description:
    "Emergency car recovery assistance in Dubai for stranded, damaged, non-starting and accident-affected vehicles.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide emergency car recovery in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. DR Light Recovery provides emergency car recovery assistance in Dubai for situations such as breakdowns, accidents, stranded vehicles and vehicles that cannot safely continue driving.",
      },
    },
    {
      "@type": "Question",
      name: "How much does emergency car recovery cost in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on factors such as your vehicle type, location, vehicle condition, recovery distance and the equipment required. Contact DR Light Recovery with your location and vehicle details for pricing based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can emergency recovery be arranged?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The time required can depend on your location, traffic, current demand and the recovery requirements. Providing your exact location helps the recovery team understand your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Can you recover a car after an accident?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, recovery assistance may be arranged for a vehicle after an accident when the vehicle is damaged or cannot safely continue. The recovery requirements depend on the vehicle’s condition and location.",
      },
    },
    {
      "@type": "Question",
      name: "Can you recover a car that will not start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A vehicle that will not start may require recovery if it cannot be safely moved or driven. Provide your vehicle details and location so the appropriate recovery assistance can be arranged.",
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
      name: "Emergency Car Recovery Dubai",
      item: "https://www.drlightrecovery.com/emergency-car-recovery-dubai/",
    },
  ],
};

export default function EmergencyCarRecoveryDubaiPage() {
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
          <span className="text-yellow-500 font-medium">Emergency Car Recovery Dubai</span>
        </div>

        {/* 2. HERO SECTION */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
          {/* Ambient red & gold alert glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(229,57,53,0.12),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

          {/* Priority Response badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Priority Response — 24/7 Emergency Assistance
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.15]">
            Emergency Car Recovery in{" "}
            <span className="text-yellow-500 relative">
              Dubai
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            When your vehicle suddenly stops, will not start, is involved in an accident or is unsafe to drive, DR Light Recovery provides emergency car recovery assistance across Dubai.
          </p>

          {/* Primary CTA: Call Now, Secondary: WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:shadow-[#C62828]/35 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>📞 Call for Emergency Recovery</span>
            </a>
            <a
              href="https://wa.me/971528787066?text=EMERGENCY:%20I%20need%20urgent%20car%20recovery%20in%20Dubai."
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

          <p className="text-xs sm:text-sm text-neutral-400 font-medium tracking-wide">
            Emergency vehicle recovery assistance for stranded, damaged and non-starting vehicles.
          </p>
        </section>

        {/* 3. EMERGENCY ACTION SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
              Urgent Assistance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Emergency? Tell Us What Happened
            </h2>
            <div className="p-8 rounded-2xl bg-black/60 border border-neutral-800/80 mb-8 max-w-3xl mx-auto">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                If your car is stranded or cannot safely continue, contact DR Light Recovery and tell us what happened. Share your current location, vehicle details and the type of emergency so the appropriate recovery assistance can be arranged.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/971528787066?text=My%20location%20and%20emergency%20details:"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Share Location on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. EMERGENCY SITUATIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Scenarios Handled</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              When You May Need Emergency Car Recovery
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Vehicle problems can happen unexpectedly. Emergency car recovery may be needed when your vehicle cannot continue safely or needs to be moved from its current location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-red-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-red-400 transition-colors">Car Stopped Suddenly</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If your car suddenly stops and cannot continue driving safely, emergency vehicle recovery can help move it from the roadside or current location.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Vehicle Won’t Start</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A vehicle that will not start may leave you stranded at home, work, a parking area or on the road. Contact DR Light Recovery to arrange suitable car recovery assistance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-red-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-red-400 transition-colors">Accident or Collision</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                After an accident, a vehicle may be damaged or unsafe to drive. Emergency recovery can help move the vehicle when continuing to drive is not appropriate.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Stranded on the Road</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If your vehicle has left you stranded on a road or another location in Dubai, contact the recovery team and provide your exact location and vehicle details.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Unsafe to Drive</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If your vehicle has a condition or damage that makes driving unsafe, recovery can provide a way to move the vehicle without continuing the journey.
              </p>
            </div>
          </div>
        </section>

        {/* 5. INFORMATION REQUIRED */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Quick Coordination</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                What Information Do We Need From You?
              </h2>
              <p className="text-neutral-400 text-sm">
                Providing a few basic details helps the recovery team understand your situation and arrange the appropriate assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-wider mb-2 block">Detail 1</span>
                <h3 className="text-white font-bold text-base mb-2">Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Send your exact vehicle location through WhatsApp or provide the road name, area or a nearby landmark.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-wider mb-2 block">Detail 2</span>
                <h3 className="text-white font-bold text-base mb-2">Vehicle Details</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide the vehicle type and, where possible, the make and model of the vehicle.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-wider mb-2 block">Detail 3</span>
                <h3 className="text-white font-bold text-base mb-2">What Happened?</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tell us whether the vehicle broke down, won’t start, was involved in an accident, is stranded, or is unsafe to drive.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-wider mb-2 block">Detail 4</span>
                <h3 className="text-white font-bold text-base mb-2">Destination</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If you already know where the vehicle needs to go, provide the destination (workshop, home, garage).
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/971528787066?text=Here%20is%20my%20location%20and%20vehicle%20details:"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Share Your Location</span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. RECOVERY PROCESS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Simple Protocol</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              How Emergency Car Recovery Works
            </h2>
            <p className="text-neutral-400 text-sm">
              The emergency recovery process is kept straightforward so you can provide the necessary information and arrange vehicle recovery without unnecessary steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
              <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                01
              </span>
              <h3 className="text-white font-bold text-base mb-2">Contact Us</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Call or WhatsApp DR Light Recovery and explain your emergency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
              <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                02
              </span>
              <h3 className="text-white font-bold text-base mb-2">Share Your Location</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Provide your current location so the recovery requirements can be assessed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
              <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                03
              </span>
              <h3 className="text-white font-bold text-base mb-2">Explain the Situation</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Tell the team what happened, your vehicle type and whether the vehicle can move safely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
              <span className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 font-black text-sm flex items-center justify-center mb-4">
                04
              </span>
              <h3 className="text-white font-bold text-base mb-2">Recovery Is Arranged</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The appropriate recovery vehicle and equipment are arranged according to the vehicle and recovery situation.
              </p>
            </div>
          </div>
        </section>

        {/* 7. DIFFERENT EMERGENCY RECOVERY NEEDS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Versatile Solutions</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Emergency Recovery for Different Situations
              </h2>
              <p className="text-neutral-400 text-sm">
                Emergency vehicle recovery can be required for different roadside and vehicle situations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">Breakdown Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  When a vehicle becomes disabled because of a breakdown and cannot continue, recovery may be required to move it safely.
                </p>
                <Link
                  href="/breakdown-recovery-dubai"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  <span>Learn about breakdown recovery service</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">Accident Vehicle Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  An accident can leave a vehicle damaged or unable to continue. Recovery assistance can be arranged according to the vehicle’s condition and location.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">Stranded Vehicle Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If your vehicle is stranded and you cannot safely continue your journey, provide your location and vehicle details to arrange recovery assistance.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">Damaged Vehicle Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  Vehicles with damage that prevents safe driving may need to be recovered rather than driven to another location.
                </p>
                <Link
                  href="/car-towing-dubai"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  <span>Explore car towing service options</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. DUBAI LOCAL COVERAGE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Citywide Service</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Emergency Car Recovery Across Dubai
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            DR Light Recovery provides car recovery assistance across Dubai. If you are searching for emergency car recovery near me, emergency recovery near me or car recovery near me, contact us with your exact location and vehicle details.
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

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mb-6">
            If you are unsure whether your current location is covered, contact DR Light Recovery and provide your location.
          </p>

          <a
            href="tel:+971528787066"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>Call for Emergency Recovery</span>
          </a>
        </section>

        {/* 9. PRICING */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Transparent Costs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Emergency Recovery Pricing
            </h2>
            <div className="p-8 rounded-2xl bg-black/60 border border-neutral-800/80 mb-8 max-w-3xl mx-auto">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                Emergency car recovery cost in Dubai can vary depending on your vehicle type, current location, vehicle condition, recovery distance and the equipment required.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                DR Light Recovery can provide pricing based on your actual recovery requirements. Share your location and vehicle details to discuss the recovery service you need.
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
                <span>Get a Recovery Quote</span>
              </a>
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* 10. TRUST SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Safe & Dependable</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Reliable Emergency Recovery Service
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              When your vehicle is stranded or damaged, clear communication and suitable recovery equipment are important for arranging the right assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Clear Communication</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Tell us your location, vehicle details and what happened so the recovery requirements can be understood clearly.
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
                Recovery equipment should match the vehicle and the situation to support appropriate vehicle handling.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-yellow-500/15 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Careful Vehicle Handling</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Your vehicle should be handled appropriately during loading, recovery, transportation and unloading.
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
                Recovery costs can depend on the circumstances. Pricing should be communicated according to the actual recovery requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Got Questions?</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 text-sm">
                Answers to common emergency car recovery inquiries in Dubai.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Do you provide emergency car recovery in Dubai?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Yes. DR Light Recovery provides emergency car recovery assistance in Dubai for situations such as breakdowns, accidents, stranded vehicles and vehicles that cannot safely continue driving.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>How much does emergency car recovery cost in Dubai?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  The cost depends on factors such as your vehicle type, location, vehicle condition, recovery distance and the equipment required. Contact DR Light Recovery with your location and vehicle details for pricing based on your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>How quickly can emergency recovery be arranged?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  The time required can depend on your location, traffic, current demand and the recovery requirements. Providing your exact location helps the recovery team understand your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Can you recover a car after an accident?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Yes, recovery assistance may be arranged for a vehicle after an accident when the vehicle is damaged or cannot safely continue. The recovery requirements depend on the vehicle’s condition and location.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                  <span className="text-yellow-500 font-extrabold">Q:</span>
                  <span>Can you recover a car that will not start?</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                  Yes. A vehicle that will not start may require recovery if it cannot be safely moved or driven. Provide your vehicle details and location so the appropriate recovery assistance can be arranged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-red-500/25 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Need Emergency Car Recovery in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              If your vehicle is stranded, damaged, will not start or is unsafe to drive, contact DR Light Recovery and share your location and vehicle details. Get the appropriate emergency car recovery assistance for your situation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:shadow-[#C62828]/35 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>📞 Call for Emergency Recovery</span>
              </a>
              <a
                href="https://wa.me/971528787066?text=EMERGENCY:%20I%20need%20recovery%20assistance."
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
      <StickyMobileCta callLabel="Emergency Call" />
    </div>
  );
}
