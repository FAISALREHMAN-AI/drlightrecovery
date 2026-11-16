import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Motorbike Recovery Dubai | Motorcycle Towing Service",
  description:
    "Need motorbike recovery in Dubai? DR Light Recovery helps transport motorcycles, scooters and bikes after breakdowns, accidents or non-starting issues.",
  alternates: {
    canonical: "https://www.drlightrecovery.com/motorbike-recovery-dubai/",
  },
  openGraph: {
    title: "Motorbike Recovery Dubai | Motorcycle Towing Service",
    description:
      "Need motorbike recovery in Dubai? DR Light Recovery helps transport motorcycles, scooters and bikes after breakdowns, accidents or non-starting issues.",
    url: "https://www.drlightrecovery.com/motorbike-recovery-dubai/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Motorbike Recovery Dubai",
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
    "Motorcycle, motorbike, scooter and bike recovery and towing service across Dubai for breakdowns, flat tyres, accidents, and workshop transportation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you recover a motorcycle that will not start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A non-starting motorcycle can be assessed for recovery and transportation depending on its condition and location.",
      },
    },
    {
      "@type": "Question",
      name: "Can you recover a bike after an accident?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Accident-damaged motorcycles can be assessed for recovery when the bike cannot or should not be ridden from the accident location.",
      },
    },
    {
      "@type": "Question",
      name: "Do you recover scooters as well as motorbikes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scooters and different types of motorcycles can be assessed for recovery. Customers should provide the bike type when requesting the service.",
      },
    },
    {
      "@type": "Question",
      name: "Can you take my motorcycle to a workshop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your motorcycle needs inspection or repair and cannot be ridden, you can provide the workshop destination when requesting motorcycle recovery.",
      },
    },
    {
      "@type": "Question",
      name: "How is motorcycle recovery charged in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on factors such as motorcycle type, condition, pickup location, destination, distance and recovery requirements. Contact DR Light Recovery with your details for a quote.",
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
      name: "Motorbike Recovery Dubai",
      item: "https://www.drlightrecovery.com/motorbike-recovery-dubai/",
    },
  ],
};

export default function MotorbikeRecoveryDubaiPage() {
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
          <span className="text-neutral-200">Motorbike Recovery Dubai</span>
        </div>

        {/* 3. H1 — MOTORBIKE RECOVERY IN DUBAI */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
            Motorcycle & Scooter Transport
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Motorbike Recovery in Dubai
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            When your motorbike cannot be ridden because of a breakdown, accident, mechanical problem or other issue, DR Light Recovery can help arrange suitable motorcycle recovery and towing in Dubai.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#E53935]/20 active:scale-95"
            >
              📞 Call for Motorbike Recovery
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20motorbike%20recovery%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#25D366]/20 active:scale-95"
            >
              💬 WhatsApp for Bike Recovery
            </a>
          </div>
        </section>

        {/* 4. H2 — YOUR BIKE IS STUCK — WHAT CAN BE DONE? */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
              Your Bike Is Stuck — What Can Be Done?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              A motorcycle that cannot be ridden does not always need roadside repair. If the bike cannot safely continue, recovery may be the more practical option.
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
              DR Light Recovery can assess the situation and arrange transportation based on the motorcycle’s condition, location and destination.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Whether the bike has stopped on the roadside, is parked at home, has been involved in an accident or needs to reach a workshop, provide the location and motorcycle details when contacting the recovery team.
            </p>
          </div>
        </section>

        {/* 5. H2 — MOTORBIKE RECOVERY FOR DIFFERENT BIKE SITUATIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Motorbike Recovery for Different Bike Situations
            </h2>
            <p className="text-neutral-400 text-sm">
              We provide secure motorcycle towing for a variety of rider issues across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Bike Won’t Start</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A motorcycle that will not start may need to be transported to a workshop for diagnosis or repair. This can apply to bikes affected by electrical, battery, ignition or mechanical problems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Flat Tyre or Wheel Problem</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A puncture, damaged tyre or wheel problem can make riding unsafe. If the issue cannot be resolved at the location, motorcycle towing can be arranged.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Battery Failure</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A motorcycle with a discharged or failed battery may be unable to start. Depending on the situation, recovery may be required to move the bike to a suitable destination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Engine or Mechanical Failure</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Engine problems, transmission issues and other mechanical failures can leave a motorcycle unable to continue. Recovery provides a way to transport the bike without riding it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 md:col-span-2">
              <h3 className="text-white font-bold text-base mb-2">Bike Damaged After a Fall</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A motorcycle that has fallen may have damaged controls, wheels, bodywork or other components. If the bike is not safe to ride, it should be assessed for recovery rather than ridden away.
              </p>
            </div>
          </div>
        </section>

        {/* 6. H2 — MOVING A MOTORCYCLE WITHOUT RIDING IT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Moving a Motorcycle Without Riding It
              </h2>
              <p className="text-neutral-400 text-sm">
                Not every motorcycle recovery request starts with a roadside emergency. Sometimes the bike simply needs to be moved from one location to another.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">When Riding Is Not Safe</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If the motorcycle has a mechanical problem, visible damage or another issue that makes riding unsuitable, transportation can be arranged instead.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Workshop Transport</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  A non-running or damaged motorcycle may need to reach a mechanic or motorcycle workshop for inspection and repair.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Collection From Home</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Motorbike towing may also be required when a motorcycle is stored at a home, residential building, office, garage or parking location.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Moving Between Locations</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Motorcycle transport can be useful when a bike needs to be moved between selected locations without being ridden on the road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. H2 — MOTORCYCLE TYPES WE RECOVER */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Motorcycle Types We Recover
            </h2>
            <p className="text-neutral-400 text-sm">
              The recovery requirement can vary depending on the motorcycle’s size, design and condition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="text-2xl mb-2">🛵</div>
              <h3 className="text-white font-bold text-base mb-2">Scooters</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Scooters and smaller two-wheelers that cannot be ridden can be assessed for recovery and transportation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="text-2xl mb-2">🏍</div>
              <h3 className="text-white font-bold text-base mb-2">Standard Motorbikes</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Standard motorcycles with mechanical, electrical or other problems can be transported to a suitable destination.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="text-2xl mb-2">🏎</div>
              <h3 className="text-white font-bold text-base mb-2">Sports Bikes</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Sports bikes may have different dimensions and components from standard motorcycles. Loading requirements are considered before recovery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <div className="text-2xl mb-2">🛣</div>
              <h3 className="text-white font-bold text-base mb-2">Touring & Larger Bikes</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Larger motorcycles may require additional consideration because of their weight and dimensions.
              </p>
            </div>
          </div>
        </section>

        {/* 8. H2 — WHAT TO TELL US BEFORE COLLECTING YOUR BIKE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                What to Tell Us Before Collecting Your Bike
              </h2>
              <p className="text-neutral-400 text-sm">
                Providing the right information helps the recovery team understand what type of motorcycle recovery is required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Motorcycle Type</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tell us whether the vehicle is a scooter, standard motorbike, sports bike, touring motorcycle or another two-wheeler.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Bike Condition</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Explain whether the motorcycle is running, non-starting, damaged, fallen over or unable to roll normally.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Pickup Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide the exact location, road name, landmark or suitable location details so the recovery requirement can be assessed.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-white font-bold text-base mb-2">Destination</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tell us whether the motorcycle needs to go to a workshop, home, garage, dealership or another destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. H2 — MOTORCYCLE RECOVERY AFTER AN ACCIDENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Motorcycle Recovery After an Accident
            </h2>
            <p className="text-neutral-400 text-sm">
              An accident can leave a motorcycle with damage that makes it unsafe or impossible to ride.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Fallen Bike</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A motorcycle that has fallen may need to be moved from the accident location before it can be inspected or repaired.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Damaged Wheels or Steering</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Wheel, tyre or steering damage can affect the motorcycle’s ability to move safely. In these situations, motorcycle recovery may be more appropriate than riding the bike.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Bike Unable to Move</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If the motorcycle cannot roll, start or move normally after an accident, provide the recovery team with details about its condition before collection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Post-Accident Transportation</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                After recovery from the accident location, the motorcycle can be transported to the destination requested by the customer, subject to recovery requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 10. H2 — WORKSHOP TRANSPORTATION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Motorcycle Recovery for Workshops & Service Centres
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              Motorcycle recovery is not limited to roadside breakdowns. A bike may need transportation to a workshop because it will not start, has mechanical damage, electrical problems, a damaged tyre, or requires scheduled maintenance.
            </p>
            <a
              href="tel:+971528787066"
              className="inline-block px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-[#E53935]/20"
            >
              Arrange Motorcycle Transport
            </a>
          </div>
        </section>

        {/* 11. H2 — FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-sm">
              Answers to common queries regarding motorcycle recovery and transport in Dubai.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">Can you recover a motorcycle that will not start?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Yes. A non-starting motorcycle can be assessed for recovery and transportation depending on its condition and location.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">Can you recover a bike after an accident?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Yes. Accident-damaged motorcycles can be assessed for recovery when the bike cannot or should not be ridden from the accident location.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">Do you recover scooters as well as motorbikes?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Scooters and different types of motorcycles can be assessed for recovery. Customers should provide the bike type when requesting the service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">Can you take my motorcycle to a workshop?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Yes. If your motorcycle needs inspection or repair and cannot be ridden, you can provide the workshop destination when requesting motorcycle recovery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="font-bold text-white text-base mb-2">How is motorcycle recovery charged in Dubai?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                The cost depends on factors such as motorcycle type, condition, pickup location, destination, distance and recovery requirements. Contact DR Light Recovery with your details for a quote.
              </p>
            </div>
          </div>
        </section>

        {/* 12. H2 — FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Need Motorbike Recovery in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              If your motorcycle is broken down, damaged, non-starting or simply needs to be transported without riding it, contact DR Light Recovery. Share your bike type, current location, condition and destination so the appropriate motorcycle recovery requirement can be discussed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#E53935]/20 active:scale-95"
              >
                📞 Call Now for Motorbike Recovery
              </a>
              <a
                href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20motorbike%20recovery%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#25D366]/20 active:scale-95"
              >
                💬 WhatsApp for Bike Towing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCta callLabel="Bike Recovery" />
    </div>
  );
}
