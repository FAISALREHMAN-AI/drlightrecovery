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
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-200">Luxury & Sports Car Towing Dubai</span>
        </div>

        {/* 2. H1 — HERO SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
            Low-Clearance Specialist
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Luxury & Sports Car Towing in Dubai
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            Luxury and sports cars require careful recovery because of their low clearance, vehicle condition, loading requirements and high-value components. DR Light Recovery provides vehicle recovery and towing solutions for luxury, sports and performance vehicles across Dubai.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#E53935]/20 active:scale-95"
            >
              📞 Call Now for Luxury Car Recovery
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20a%20quote%20for%20luxury/sports%20car%20towing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#25D366]/20 active:scale-95"
            >
              💬 WhatsApp for a Recovery Quote
            </a>
          </div>
        </section>

        {/* 3. H2 — RECOVERY DESIGNED AROUND HIGH-VALUE VEHICLES */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
              Recovery Designed Around High-Value Vehicles
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              Luxury and performance vehicles can require a different approach from standard car towing. Vehicle clearance, loading position, condition and suitable recovery equipment should be considered before transportation.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Our recovery process focuses on understanding the vehicle and recovery situation first, then arranging an appropriate towing solution.
            </p>
          </div>
        </section>

        {/* 4. H2 — WHAT MAKES LUXURY CAR TOWING DIFFERENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              What Makes Luxury Car Towing Different?
            </h2>
            <p className="text-neutral-400 text-sm">
              Handling precision designed to prevent contact and preserve vehicle integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Low-Clearance Vehicle Handling</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Many sports and performance cars sit closer to the ground than standard vehicles. Their clearance should be considered during loading and transportation to reduce the risk of unnecessary contact with the vehicle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Careful Loading</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Luxury vehicles should be loaded with attention to their condition, position and accessibility. The recovery team should assess the vehicle before deciding how it can be safely moved.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Suitable Recovery Equipment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The appropriate recovery vehicle and equipment depend on the vehicle type, condition and recovery requirement. Equipment selection should be based on the specific situation rather than using the same approach for every vehicle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Secure Transportation</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Once the vehicle is loaded, it should be secured appropriately for transportation to the requested destination, such as a workshop, dealership or other suitable location.
              </p>
            </div>
          </div>
        </section>

        {/* 5. H2 — WHEN YOUR LUXURY OR SPORTS CAR NEEDS RECOVERY */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                When Your Luxury or Sports Car Needs Recovery
              </h2>
              <p className="text-neutral-400 text-sm">
                Common scenarios where sports cars and luxury sedans require dedicated recovery support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Vehicle Breakdown</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If a luxury or sports car stops because of a mechanical or electrical problem, recovery may be required when the vehicle cannot safely continue driving.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Accident or Vehicle Damage</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  After an accident, continuing to drive may not be suitable depending on the vehicle’s condition. A recovery service can help transport the damaged vehicle to the required destination.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Non-Starting Sports Car</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  A sports or performance vehicle that will not start may require towing when roadside assistance cannot resolve the issue or when transportation to a workshop is necessary.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Workshop or Dealership Transport</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Luxury vehicles may need to be transported between locations for inspection, servicing, repairs or other vehicle-related requirements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800 md:col-span-2">
                <h3 className="text-white font-bold text-base mb-2">Vehicle Stuck in an Inaccessible Position</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If a vehicle is stuck or positioned where normal driving is not possible, the recovery team can assess the situation and determine the appropriate way to move it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. H2 — VEHICLES WE CAN ASSESS FOR RECOVERY */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Luxury, Sports & Performance Vehicles We Can Assess for Recovery
            </h2>
            <p className="text-neutral-400 text-sm">
              Our recovery solutions are suited for high-end vehicle categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Luxury Cars</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Luxury sedans, premium vehicles and high-value cars can be assessed for appropriate towing and recovery based on their condition and location.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Sports Cars</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Sports cars may have low ground clearance and specific loading requirements. The recovery method should therefore be selected according to the vehicle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Exotic & Performance Cars</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Exotic and performance vehicles can require additional attention during recovery because of their design, clearance and vehicle condition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Low-Profile Vehicles</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Low-profile vehicles should be assessed before loading to determine the appropriate recovery approach.
              </p>
            </div>
          </div>
        </section>

        {/* 7. H2 — HOW LUXURY CAR RECOVERY WORKS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                How Luxury Car Recovery Works
              </h2>
              <p className="text-neutral-400 text-sm">
                A 5-step careful process designed around valuable vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">1</span>
                <h3 className="text-white font-bold text-base mb-2">Share Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide your current vehicle location so the recovery requirement can be assessed and the service can be arranged.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">2</span>
                <h3 className="text-white font-bold text-base mb-2">Tell Us About the Vehicle</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Share the vehicle type and relevant details, especially if it is a luxury, sports, exotic or low-clearance vehicle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">3</span>
                <h3 className="text-white font-bold text-base mb-2">Explain the Recovery Requirement</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tell us whether the vehicle has broken down, has been involved in an accident, will not start, or needs transportation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">4</span>
                <h3 className="text-white font-bold text-base mb-2">Recovery Arrangement</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Based on the vehicle and situation, the appropriate towing or recovery arrangement can be determined.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800 sm:col-span-2">
                <span className="text-yellow-500 font-black text-xl mb-2 block">5</span>
                <h3 className="text-white font-bold text-base mb-2">Secure Vehicle Transportation</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  The vehicle is loaded and transported to the requested destination according to the recovery requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. H2 — WHY SPECIALIZED RECOVERY MATTERS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Specialized Recovery Matters for Luxury Cars
            </h2>
            <p className="text-neutral-400 text-sm">
              Standard towing procedures can risk front splitters, diffusers, and carbon-fiber underbodies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Vehicle Clearance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Low-clearance vehicles require consideration during loading and unloading to avoid unnecessary contact with the road or recovery equipment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Vehicle Condition</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A vehicle that has suffered accident damage or a mechanical failure may have different recovery requirements from a normally operational vehicle.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Loading Requirements</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The loading method should take the vehicle’s design, clearance and condition into account.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Destination Requirements</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The destination also matters. A vehicle may need to be taken to a workshop, dealership or another specified location.
              </p>
            </div>
          </div>
        </section>

        {/* 9. H2 — LUXURY CAR RECOVERY ACROSS DUBAI */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Luxury Car Recovery Across Dubai
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Luxury and sports car towing can be required anywhere across Dubai, including residential areas, business districts, highways, parking facilities, workshops and other locations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
              {serviceAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-black border border-neutral-800 text-xs text-neutral-300 font-medium"
                >
                  {area}
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
              Searching for luxury car recovery near me, sports car towing near me or a recovery truck near me? Contact DR Light Recovery with your exact location and vehicle details.
            </p>
          </div>
        </section>

        {/* 10. H2 — LUXURY & SPORTS CAR TOWING COST IN DUBAI */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Luxury & Sports Car Towing Cost in Dubai
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            The cost of luxury or sports car towing in Dubai depends on the vehicle and the recovery situation. There is no single price that applies to every luxury vehicle recovery.
          </p>

          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-sm mb-3 text-center">Get a Clear Quote Before Recovery</h3>
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
              className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-[#25D366]/20"
            >
              Request a Luxury Car Towing Quote
            </a>
            <a
              href="https://wa.me/971528787066?text=I%20would%20like%20a%20quote%20for%20luxury%20car%20towing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-[#25D366]/20"
            >
              WhatsApp for a Recovery Quote
            </a>
          </div>
        </section>

        {/* 11. H2 — FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 text-sm">
                Common questions about specialized sports and luxury car recovery in Dubai.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Can you recover a low-clearance sports car?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Yes, low-clearance sports cars can be assessed for recovery based on their location, condition and loading requirements. Customers should mention that the vehicle has low clearance when requesting recovery.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Can you recover a luxury car after an accident?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Yes, an accident-damaged luxury vehicle can be assessed for recovery. The recovery method depends on the vehicle’s condition and how it is positioned after the accident.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">How much does luxury car recovery cost in Dubai?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  The cost depends on factors such as vehicle type, location, destination, distance, condition and loading requirements. Customers can contact DR Light Recovery with their vehicle and location details for a quote.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Can you recover a non-starting sports car?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Yes, a non-starting sports car can be assessed for towing and recovery. The vehicle’s condition and location will help determine the appropriate recovery arrangement.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Can you transport a luxury car to a workshop or dealership?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Yes, luxury vehicles may require transportation to a workshop, dealership or another requested destination. The recovery requirement can be discussed before arranging the service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. H2 — FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Need Luxury or Sports Car Towing in Dubai?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Need to move a luxury, sports, exotic or performance vehicle? Contact DR Light Recovery with your vehicle type, current location and destination so the appropriate towing or recovery requirement can be discussed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+971528787066"
              className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#E53935]/20 active:scale-95"
            >
              📞 Call Now for Luxury Car Towing
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20assistance%20with%20a%20luxury/sports%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#25D366]/20 active:scale-95"
            >
              💬 WhatsApp for Recovery Assistance
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCta callLabel="Luxury Towing" />
    </div>
  );
}
