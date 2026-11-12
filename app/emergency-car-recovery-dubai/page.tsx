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
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-200">Emergency Car Recovery Dubai</span>
        </div>

        {/* 3. HERO SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            Priority Response
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Emergency Car Recovery in Dubai
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            When your vehicle suddenly stops, will not start, is involved in an accident or is unsafe to drive, DR Light Recovery provides emergency car recovery assistance across Dubai.
          </p>

          {/* Primary CTA: Call Now, Secondary: WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-red-600/20 active:scale-95"
            >
              📞 Call for Emergency Recovery
            </a>
            <a
              href="https://wa.me/971528787066?text=EMERGENCY:%20I%20need%20urgent%20car%20recovery%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
            >
              💬 WhatsApp Now
            </a>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 font-medium tracking-wide">
            Emergency vehicle recovery assistance for stranded, damaged and non-starting vehicles.
          </p>
        </section>

        {/* 4. EMERGENCY ACTION SECTION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
              Emergency? Tell Us What Happened
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              If your car is stranded or cannot safely continue, contact DR Light Recovery and tell us what happened. Share your current location, vehicle details and the type of emergency so the appropriate recovery assistance can be arranged.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/971528787066?text=My%20location%20and%20emergency%20details:"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Share Location on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 5. EMERGENCY SITUATIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              When You May Need Emergency Car Recovery
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Vehicle problems can happen unexpectedly. Emergency car recovery may be needed when your vehicle cannot continue safely or needs to be moved from its current location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Car Stopped Suddenly</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If your car suddenly stops and cannot continue driving safely, emergency vehicle recovery can help move it from the roadside or current location.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Vehicle Won’t Start</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A vehicle that will not start may leave you stranded at home, work, a parking area or on the road. Contact DR Light Recovery to arrange suitable car recovery assistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Accident or Collision</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                After an accident, a vehicle may be damaged or unsafe to drive. Emergency recovery can help move the vehicle when continuing to drive is not appropriate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Stranded on the Road</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If your vehicle has left you stranded on a road or another location in Dubai, contact the recovery team and provide your exact location and vehicle details.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 md:col-span-2 lg:col-span-2">
              <h3 className="text-white font-bold text-base mb-2">Unsafe to Drive</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If your vehicle has a condition or damage that makes driving unsafe, recovery can provide a way to move the vehicle without continuing the journey.
              </p>
            </div>
          </div>
        </section>

        {/* 6. INFORMATION REQUIRED */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                What Information Do We Need From You?
              </h2>
              <p className="text-neutral-400 text-sm">
                Providing a few basic details helps the recovery team understand your situation and arrange the appropriate assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider mb-2 block">Detail 1</span>
                <h3 className="text-white font-bold text-base mb-2">Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Send your exact vehicle location through WhatsApp or provide the road name, area or a nearby landmark.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider mb-2 block">Detail 2</span>
                <h3 className="text-white font-bold text-base mb-2">Vehicle Details</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide the vehicle type and, where possible, the make and model of the vehicle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider mb-2 block">Detail 3</span>
                <h3 className="text-white font-bold text-base mb-2">What Happened?</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tell us whether the vehicle broke down, won’t start, was involved in an accident, is stranded, or is unsafe to drive.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-bold text-sm uppercase tracking-wider mb-2 block">Detail 4</span>
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
                className="inline-block px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
              >
                Share Your Location
              </a>
            </div>
          </div>
        </section>

        {/* 7. RECOVERY PROCESS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              How Emergency Car Recovery Works
            </h2>
            <p className="text-neutral-400 text-sm">
              The emergency recovery process is kept straightforward so you can provide the necessary information and arrange vehicle recovery without unnecessary steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <span className="text-yellow-500 font-black text-xl mb-2 block">01</span>
              <h3 className="text-white font-bold text-base mb-2">Contact Us</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Call or WhatsApp DR Light Recovery and explain your emergency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <span className="text-yellow-500 font-black text-xl mb-2 block">02</span>
              <h3 className="text-white font-bold text-base mb-2">Share Your Location</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Provide your current location so the recovery requirements can be assessed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <span className="text-yellow-500 font-black text-xl mb-2 block">03</span>
              <h3 className="text-white font-bold text-base mb-2">Explain the Situation</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Tell the team what happened, your vehicle type and whether the vehicle can move safely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <span className="text-yellow-500 font-black text-xl mb-2 block">04</span>
              <h3 className="text-white font-bold text-base mb-2">Recovery Is Arranged</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The appropriate recovery vehicle and equipment are arranged according to the vehicle and recovery situation.
              </p>
            </div>
          </div>
        </section>

        {/* 8. DIFFERENT EMERGENCY RECOVERY NEEDS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Emergency Recovery for Different Situations
              </h2>
              <p className="text-neutral-400 text-sm">
                Emergency vehicle recovery can be required for different roadside and vehicle situations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Breakdown Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  When a vehicle becomes disabled because of a breakdown and cannot continue, recovery may be required to move it safely.
                </p>
                <Link
                  href="/breakdown-recovery-dubai"
                  className="text-xs font-bold text-yellow-500 hover:underline"
                >
                  Learn about breakdown recovery service →
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Accident Vehicle Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  An accident can leave a vehicle damaged or unable to continue. Recovery assistance can be arranged according to the vehicle’s condition and location.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Stranded Vehicle Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If your vehicle is stranded and you cannot safely continue your journey, provide your location and vehicle details to arrange recovery assistance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Damaged Vehicle Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  Vehicles with damage that prevents safe driving may need to be recovered rather than driven to another location.
                </p>
                <Link
                  href="/car-towing-dubai"
                  className="text-xs font-bold text-yellow-500 hover:underline"
                >
                  Explore car towing service options →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9. DUBAI LOCAL COVERAGE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Emergency Car Recovery Across Dubai
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            DR Light Recovery provides car recovery assistance across Dubai. If you are searching for emergency car recovery near me, emergency recovery near me or car recovery near me, contact us with your exact location and vehicle details.
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

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mb-6">
            If you are unsure whether your current location is covered, contact DR Light Recovery and provide your location.
          </p>

          <a
            href="tel:+971528787066"
            className="inline-block px-8 py-3.5 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-red-600/20"
          >
            Call for Emergency Recovery
          </a>
        </section>

        {/* 10. PRICING */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
              Emergency Recovery Pricing
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              Emergency car recovery cost in Dubai can vary depending on your vehicle type, current location, vehicle condition, recovery distance and the equipment required.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8">
              DR Light Recovery can provide pricing based on your actual recovery requirements. Share your location and vehicle details to discuss the recovery service you need.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
              >
                Get a Recovery Quote
              </a>
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-8 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* 11. TRUST SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Reliable Emergency Recovery Service
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              When your vehicle is stranded or damaged, clear communication and suitable recovery equipment are important for arranging the right assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Clear Communication</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Tell us your location, vehicle details and what happened so the recovery requirements can be understood clearly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Suitable Recovery Equipment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery equipment should match the vehicle and the situation to support appropriate vehicle handling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Careful Vehicle Handling</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Your vehicle should be handled appropriately during loading, recovery, transportation and unloading.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Transparent Pricing</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery costs can depend on the circumstances. Pricing should be communicated according to the actual recovery requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 12. FAQ SECTION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 text-sm">
                Answers to common emergency car recovery inquiries in Dubai.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Do you provide emergency car recovery in Dubai?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Yes. DR Light Recovery provides emergency car recovery assistance in Dubai for situations such as breakdowns, accidents, stranded vehicles and vehicles that cannot safely continue driving.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">How much does emergency car recovery cost in Dubai?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  The cost depends on factors such as your vehicle type, location, vehicle condition, recovery distance and the equipment required. Contact DR Light Recovery with your location and vehicle details for pricing based on your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">How quickly can emergency recovery be arranged?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  The time required can depend on your location, traffic, current demand and the recovery requirements. Providing your exact location helps the recovery team understand your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Can you recover a car after an accident?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Yes, recovery assistance may be arranged for a vehicle after an accident when the vehicle is damaged or cannot safely continue. The recovery requirements depend on the vehicle’s condition and location.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Can you recover a car that will not start?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Yes. A vehicle that will not start may require recovery if it cannot be safely moved or driven. Provide your vehicle details and location so the appropriate recovery assistance can be arranged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Need Emergency Car Recovery in Dubai?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            If your vehicle is stranded, damaged, will not start or is unsafe to drive, contact DR Light Recovery and share your location and vehicle details. Get the appropriate emergency car recovery assistance for your situation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+971528787066"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-red-600/20 active:scale-95"
            >
              📞 Call for Emergency Recovery
            </a>
            <a
              href="https://wa.me/971528787066?text=EMERGENCY:%20I%20need%20recovery%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
            >
              💬 WhatsApp Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCta callLabel="Emergency Call" />
    </div>
  );
}
