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
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-200">Car Recovery Dubai</span>
        </div>

        {/* 2. HERO SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Car Recovery Dubai
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            When your car breaks down, is involved in an accident, or cannot safely continue driving, DR Light Recovery provides reliable car recovery in Dubai to help move your vehicle safely.
          </p>

          {/* CTA — Immediately after description */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#E53935]/20 active:scale-95"
            >
              📞 Call Now: +971 52 878 7066
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20car%20recovery%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#25D366]/20 active:scale-95"
            >
              💬 WhatsApp Now
            </a>
          </div>

          <p className="text-xs sm:text-sm text-yellow-500 font-semibold tracking-wide">
            Fast, Reliable & Available 24/7
          </p>
        </section>

        {/* 3. TRANSPARENT PRICING */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
              Transparent Car Recovery Pricing — No Hidden Costs
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              Car recovery costs can vary depending on your location, destination, vehicle type, condition and the type of recovery required.
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              We aim to provide clear pricing based on your actual recovery requirements, so you know what to expect before arranging the service.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8">
              If you’re looking for cheap car recovery in Dubai, don’t choose based on price alone. Clear pricing, suitable equipment and safe vehicle handling matter too.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-[#E53935]/20"
              >
                Get a Quote / Call Now
              </a>
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Choose Our Car Recovery Service in Dubai?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Choosing a recovery company is about more than getting a truck to your location. Your vehicle needs to be handled appropriately and safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Reliable Recovery Assistance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Support for breakdowns, accidents and vehicles that cannot continue driving normally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">24/7 Availability</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery assistance when vehicle problems happen outside normal hours, subject to operational availability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Suitable Recovery Equipment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery equipment should match the vehicle and the situation, from standard passenger cars to larger 4x4s.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Clear Communication</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Share your location, vehicle details and destination so the recovery team can understand your requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 md:col-span-2 lg:col-span-2">
              <h3 className="text-white font-bold text-base mb-2">Dubai-Wide Coverage</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Recovery assistance across Dubai for drivers who need to move their vehicle safely from residential areas, highways, and parking facilities.
              </p>
            </div>
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                How Our Car Recovery Service Works
              </h2>
              <p className="text-neutral-400 text-sm">
                A straightforward four-step process for fast car recovery and vehicle transportation across Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">1</span>
                <h3 className="text-white font-bold text-sm mb-2">Contact Us</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Call or WhatsApp DR Light Recovery and explain your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">2</span>
                <h3 className="text-white font-bold text-sm mb-2">Share Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide your current location, vehicle details and destination where possible.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">3</span>
                <h3 className="text-white font-bold text-sm mb-2">Recovery Is Arranged</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  The appropriate recovery vehicle and equipment are arranged based on your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">4</span>
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
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 border border-neutral-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
              Car Recovery vs Car Towing — What’s the Difference?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-neutral-300 text-xs sm:text-sm leading-relaxed">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800/80">
                <h3 className="text-white font-bold text-base mb-3 text-yellow-500">Car Recovery</h3>
                <p>
                  Car Recovery generally involves helping a vehicle that cannot safely continue its journey because of a breakdown, accident or similar problem. It focuses on safely retrieving a disabled vehicle from the roadside or parking spot.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800/80">
                <h3 className="text-white font-bold text-base mb-3 text-yellow-500">Car Towing</h3>
                <p>
                  Car Towing generally focuses on transporting a vehicle from one location to another, such as to a garage, workshop or dealership. The right service depends on your vehicle’s condition and situation.
                </p>
                <div className="mt-4">
                  <Link
                    href="/car-towing-dubai"
                    className="text-xs font-bold text-yellow-500 hover:underline"
                  >
                    View Car Towing Dubai →
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Car Recovery Near You Across Dubai
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Vehicle problems can happen anywhere. DR Light Recovery provides car recovery assistance across Dubai.
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
              If you’re searching for car recovery near me or recovery near me, contact us with your exact location and vehicle details.
            </p>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm">
              Answers to common queries about our car recovery services in Dubai.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">How much does car recovery cost in Dubai?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                The cost depends on factors such as location, destination, vehicle type, vehicle condition and the recovery required. Contact us with your details for pricing based on your situation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">How quickly can you provide car recovery in Dubai?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Response time can depend on your location, traffic, demand and the recovery requirements. Share your exact location when contacting us so the team can assess your situation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">Which areas of Dubai do you cover?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                We provide recovery assistance across Dubai, including Dubai Marina, Downtown Dubai, Business Bay, JLT, Deira, Al Barsha and Al Quoz. Contact us if you’re unsure about your location.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">Do you provide 24/7 car recovery?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Yes, if 24/7 service is currently available, customers can contact DR Light Recovery for breakdown and emergency recovery assistance at any time.
              </p>
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Need Car Recovery in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Don’t leave a broken-down or damaged vehicle where it could create additional risk. Contact DR Light Recovery, share your location and vehicle details, and arrange the appropriate recovery assistance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#E53935]/20 active:scale-95"
              >
                📞 Call Now: +971 52 878 7066
              </a>
              <a
                href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20car%20recovery%20in%20Dubai."
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
      <StickyMobileCta />
    </div>
  );
}
