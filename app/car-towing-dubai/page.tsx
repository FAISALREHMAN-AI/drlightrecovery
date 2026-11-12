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
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-200">Car Towing Service Dubai</span>
        </div>

        {/* 2. HERO SECTION */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Professional Car Towing Service in Dubai
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
              className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-yellow-500/20 active:scale-95"
            >
              📞 Call Now: +971 52 878 7066
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20car%20towing%20service%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
            >
              💬 WhatsApp Now
            </a>
          </div>

          <p className="text-xs sm:text-sm text-yellow-500 font-semibold tracking-wide">
            Reliable & Affordable Towing Service
          </p>
        </section>

        {/* 3. PROFESSIONAL TEAM & EQUIPMENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Professional Towing Team & Suitable Equipment
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Safe towing starts with using the right equipment for the vehicle and the situation. Our towing team can assess the vehicle’s condition, location and destination to determine the appropriate towing approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Professional Assistance</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Clear communication helps the team understand where your vehicle is, where it needs to go and what condition it is in.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Suitable Towing Equipment</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Different vehicles and situations may require different towing methods. Using appropriate equipment helps reduce unnecessary risk during loading and transportation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Careful Vehicle Handling</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Vehicles should be secured correctly before transportation. Our focus is on moving your car safely from the pickup location to the required destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAST TOWING NEAR YOU */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Fast Car Towing Near You Across Dubai
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-4 leading-relaxed">
            A vehicle may need towing after a breakdown, mechanical problem, accident or when it simply needs to be transported to another location.
          </p>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            DR Light Recovery provides towing assistance across Dubai. If you’re searching for car towing near me, tow truck near me or towing service near me, contact our team with your location and vehicle details. Response time can depend on your location, traffic and current demand.
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
        </section>

        {/* 5. TYPES OF VEHICLES WE TOW */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Vehicles We Tow
              </h2>
              <p className="text-neutral-400 text-sm">
                Different vehicles can have different towing requirements. Our service can support the following vehicle types:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <div className="text-2xl mb-3">🚙</div>
                <h3 className="text-white font-bold text-base mb-2">SUVs</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  SUVs can be larger and heavier than standard passenger cars, so appropriate towing equipment and secure loading are important.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <div className="text-2xl mb-3">🚗</div>
                <h3 className="text-white font-bold text-base mb-2">Sedans</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  We provide towing assistance for standard passenger sedans that need transportation to a garage, workshop or other destination.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <div className="text-2xl mb-3">🛞</div>
                <h3 className="text-white font-bold text-base mb-2">4×4 Vehicles</h3>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              What Makes Our Towing Service Different?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Choosing a towing company should not be based only on how quickly a truck can arrive. The service should also provide clear communication, appropriate equipment and careful vehicle handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Clear & Transparent Pricing</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                We aim to explain the relevant towing requirements and pricing before arranging the service, helping customers understand what they are paying for.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Professional Approach</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Our team focuses on understanding the vehicle and situation before deciding how it should be moved.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Suitable Equipment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Using equipment appropriate for the vehicle helps support safer loading and transportation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Convenient Communication</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Call or WhatsApp to share your location, vehicle type and destination easily.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 md:col-span-2">
              <h3 className="text-white font-bold text-base mb-2">Local Dubai Coverage</h3>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 text-sm">
                Common questions about car towing services across Dubai.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Do you provide 24/7 car towing in Dubai?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  If 24/7 towing is part of the current service, customers can contact DR Light Recovery at any time for towing assistance. Availability may depend on the situation and operational capacity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">How much does car towing cost in Dubai?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  The price can depend on the pickup location, destination, vehicle type, vehicle condition and towing requirements. Contact us with your vehicle and location details for a quote based on your situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">Can you tow an electric vehicle?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Electric vehicles may require specific towing procedures depending on the model and its condition. Tell our team that the vehicle is electric when requesting assistance so the appropriate towing method can be considered.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">How long does car towing take in Dubai?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  The time required depends on factors such as your location, traffic, destination and the vehicle’s condition. Providing your exact location and destination can help the team assess the towing requirements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="font-bold text-white text-base mb-2">When should I use car towing instead of driving my vehicle?</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Towing may be appropriate when a vehicle is not safe or practical to drive, has suffered a serious mechanical problem, has been involved in an accident, or needs to be transported to a workshop or another destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Need Reliable Car Towing in Dubai?
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether your vehicle needs to reach a workshop, garage, dealership or another destination, DR Light Recovery can help arrange suitable towing assistance. Share your location and vehicle details with our team to get started.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+971528787066"
              className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-yellow-500/20 active:scale-95"
            >
              📞 Call Now: +971 52 878 7066
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20car%20towing%20service."
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
      <StickyMobileCta callLabel="Call for Towing" />
    </div>
  );
}
