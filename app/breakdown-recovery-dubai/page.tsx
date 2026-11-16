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
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-200">Breakdown Recovery Dubai</span>
        </div>

        {/* 2. HERO SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Car Breakdown Service in Dubai
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            When your car breaks down, will not start, or cannot safely continue driving, DR Light Recovery provides breakdown recovery assistance across Dubai.
          </p>

          {/* CTA — Immediately After Short Description */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#E53935]/20 active:scale-95"
            >
              📞 Call Now: +971 52 878 7066
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20my%20car%20has%20broken%20down%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#25D366]/20 active:scale-95"
            >
              💬 WhatsApp Now
            </a>
          </div>

          <p className="text-xs sm:text-sm text-yellow-500 font-semibold tracking-wide">
            Reliable Breakdown Recovery Assistance Across Dubai
          </p>
        </section>

        {/* 3. FAST & RELIABLE BREAKDOWN RECOVERY */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
              Fast & Reliable Breakdown Recovery in Dubai
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              Car problems can happen unexpectedly. Whether your vehicle stops working, will not start, develops a mechanical problem, or becomes unsafe to drive, breakdown recovery can help move it safely.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              DR Light Recovery provides assistance for drivers who need a suitable recovery solution for a vehicle that cannot continue its journey. If you need a reliable car breakdown service near me or breakdown recovery in Dubai, our team is equipped to assist.
            </p>
          </div>
        </section>

        {/* 4. WHAT OUR BREAKDOWN RECOVERY SERVICE COVERS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              What Our Breakdown Recovery Service Covers
            </h2>
            <p className="text-neutral-400 text-sm">
              Common vehicle situations where breakdown recovery is required in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Car Won’t Start</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                For vehicles that fail to start and cannot safely be driven to a garage or other destination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Mechanical Breakdown</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                For vehicles affected by engine overheating, gearbox failure, or mechanical problems that prevent normal driving.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Vehicle Stranded on the Road</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                For drivers whose vehicles have stopped working while travelling on major Dubai highways or local roads and need recovery assistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Breakdown After an Accident</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                If a vehicle cannot safely continue after an accident or collision, recovery may be required to transport it safely.
              </p>
              <Link
                href="/emergency-car-recovery-dubai"
                className="text-xs font-bold text-yellow-500 hover:underline"
              >
                View Emergency Car Recovery Dubai →
              </Link>
            </div>
          </div>
        </section>

        {/* 5. PROFESSIONAL TEAM & EQUIPMENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Professional Breakdown Recovery Team & Equipment
              </h2>
              <p className="text-neutral-400 text-sm">
                Vehicle recovery requires appropriate handling based on the vehicle and its condition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Experienced Recovery Assistance</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Our dispatchers and recovery operators handle vehicle situations calmly and professionally across Dubai roads.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Suitable Recovery Equipment</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Recovery equipment is selected to match the vehicle type and situation, including flatbeds for secure transportation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Safe Vehicle Handling</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Vehicles are loaded, secured, and unloaded carefully to prevent secondary damage during transport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BREAKDOWN RECOVERY NEAR YOU */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Breakdown Recovery Near You Across Dubai
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Vehicle breakdowns can happen anywhere in Dubai. Tell DR Light Recovery your exact location, vehicle type and nature of the problem so the appropriate recovery assistance can be arranged.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            {serviceAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 font-medium"
              >
                {area}
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
            Looking for car breakdown service near me or breakdown recovery near me? Contact us with your exact location.
          </p>
        </section>

        {/* 7. HOW IT WORKS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                How Our Breakdown Recovery Service Works
              </h2>
              <p className="text-neutral-400 text-sm">
                A simple four-step process: Contact → Location → Recovery Arrangement → Vehicle Recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">1</span>
                <h3 className="text-white font-bold text-base mb-2">Contact DR Light Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Call or WhatsApp and explain what has happened to your vehicle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">2</span>
                <h3 className="text-white font-bold text-base mb-2">Share Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide your current location, vehicle details and destination where possible.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">3</span>
                <h3 className="text-white font-bold text-base mb-2">Recovery Is Arranged</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  The appropriate recovery vehicle and equipment are arranged according to the vehicle and situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">4</span>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Choose Our Breakdown Recovery Service?
            </h2>
            <p className="text-neutral-400 text-sm">
              Dedicated vehicle breakdown support with suitable equipment and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Reliable Breakdown Assistance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Support for vehicles that cannot safely continue driving after a breakdown.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Professional Team & Equipment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery equipment and handling appropriate for the vehicle and its condition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Transparent Pricing</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Clear pricing based on factors such as location, vehicle type, condition and recovery requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Dubai-Wide Coverage</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Breakdown recovery assistance across all primary residential and commercial districts of Dubai.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+971528787066"
              className="inline-block px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-[#E53935]/20"
            >
              Get Breakdown Recovery Assistance
            </a>
          </div>
        </section>

        {/* 9. BREAKDOWN RECOVERY PRICING */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              How Much Does Breakdown Recovery Cost in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              The cost can vary depending on your location, vehicle type, condition, recovery requirements and destination. For an accurate quote, customers should provide their location and vehicle details before arranging the service.
            </p>
            <a
              href="tel:+971528787066"
              className="inline-block px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-[#E53935]/20"
            >
              Call for a Quote
            </a>
          </div>
        </section>

        {/* 10. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm">
              Common questions about vehicle breakdown recovery in Dubai.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">Is breakdown recovery available 24/7 in Dubai?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Yes, DR Light Recovery operates 24/7 across Dubai for breakdown and towing assistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">How much does breakdown recovery cost in Dubai?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                The cost depends on factors such as location, vehicle type, vehicle condition, recovery requirements and destination. Customers should contact DR Light Recovery with their details for an accurate quote.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">How quickly can breakdown recovery reach me?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Response time can depend on location, traffic, demand and the recovery requirements. Customers should provide their exact location when contacting the service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">Can you recover a car that will not start?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Yes, where the vehicle can be safely recovered using suitable equipment. The customer should provide the vehicle details and location so the appropriate recovery solution can be arranged.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">What information should I provide when requesting breakdown recovery?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Customers should provide their current location, vehicle type, vehicle condition and destination where possible. This helps the recovery team understand the situation and determine the appropriate assistance.
              </p>
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Need Breakdown Recovery in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              If your vehicle has broken down and cannot safely continue driving, contact DR Light Recovery and provide your location and vehicle details.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#E53935]/20 active:scale-95"
              >
                📞 Call Now: +971 52 878 7066
              </a>
              <a
                href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20breakdown%20recovery%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#25D366]/20 active:scale-95"
              >
                💬 WhatsApp Now
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
