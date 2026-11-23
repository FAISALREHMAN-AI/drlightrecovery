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
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <span className="mx-2 text-neutral-600">/</span>
          <span className="text-yellow-500 font-medium">Motorbike Recovery Dubai</span>
        </div>

        {/* 2. HERO SECTION */}
        <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden">
          {/* Subtle ambient gold glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(234,179,8,0.12),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            Motorcycle & Scooter Transport — 24/7 Dubai Support
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.15]">
            Motorbike Recovery in{" "}
            <span className="text-yellow-500 relative">
              Dubai
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            When your motorbike cannot be ridden because of a breakdown, accident, mechanical problem or other issue, DR Light Recovery can help arrange suitable motorcycle recovery and towing in Dubai.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+971528787066"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:shadow-[#C62828]/35 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>📞 Call for Motorbike Recovery</span>
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20motorbike%20recovery%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:shadow-[#1DA851]/30 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>💬 WhatsApp for Bike Recovery</span>
            </a>
          </div>
        </section>

        {/* 3. YOUR BIKE IS STUCK — WHAT CAN BE DONE? */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Immediate Help
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Your Bike Is Stuck — What Can Be Done?
            </h2>
            <div className="p-8 rounded-2xl bg-black/60 border border-neutral-800/80 mb-6 max-w-3xl mx-auto text-left">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                A motorcycle that cannot be ridden does not always need roadside repair. If the bike cannot safely continue, our <Link href="/breakdown-recovery-dubai" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-medium">roadside breakdown assistance</Link> network can arrange suitable transport when on-site fixes are not practical.
              </p>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4">
                DR Light Recovery can assess the situation and arrange transportation based on the motorcycle’s condition, location and destination.
              </p>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Whether the bike has stopped on the roadside, is parked at home, has been involved in an accident or needs urgent <Link href="/emergency-car-recovery-dubai" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-medium">emergency vehicle recovery</Link>, provide the location and motorcycle details when contacting the recovery team.
              </p>
            </div>
          </div>
        </section>

        {/* 4. MOTORBIKE RECOVERY FOR DIFFERENT BIKE SITUATIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Rider Support</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Motorbike Recovery for Different Bike Situations
            </h2>
            <p className="text-neutral-400 text-sm">
              We provide secure motorcycle towing for a variety of rider issues across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Bike Won’t Start</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A motorcycle that will not start may need to be transported to a workshop for diagnosis or repair. This can apply to bikes affected by electrical, battery, ignition or mechanical problems.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Flat Tyre or Wheel Problem</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A puncture, damaged tyre or wheel problem can make riding unsafe. If the issue cannot be resolved at the location, motorcycle towing can be arranged.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Battery Failure</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A motorcycle with a discharged or failed battery may be unable to start. Depending on the situation, recovery may be required to move the bike to a suitable destination.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Engine or Mechanical Failure</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Engine problems, transmission issues and other mechanical failures can leave a motorcycle unable to continue. Recovery provides a way to transport the bike without riding it.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group md:col-span-2">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Bike Damaged After a Fall</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A motorcycle that has fallen may have damaged controls, wheels, bodywork or other components. If the bike is not safe to ride, it should be assessed for recovery rather than ridden away.
              </p>
            </div>
          </div>
        </section>

        {/* 5. MOVING A MOTORCYCLE WITHOUT RIDING IT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Planned Logistics</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Moving a Motorcycle Without Riding It
              </h2>
              <p className="text-neutral-400 text-sm">
                Not every motorcycle recovery request starts with a roadside emergency. Sometimes the bike simply needs to be moved from one location to another.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">When Riding Is Not Safe</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If the motorcycle has a mechanical problem, visible damage or another issue that makes riding unsuitable, transportation can be arranged instead.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Workshop Transport</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  A non-running or damaged motorcycle may need to reach a mechanic or motorcycle workshop for inspection and repair.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Collection From Home</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Motorbike towing may also be required when a motorcycle is stored at a home, residential building, office, garage or parking location.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Moving Between Locations</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Motorcycle transport can be useful when a bike needs to be moved between selected locations without being ridden on the road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. MOTORCYCLE TYPES WE RECOVER */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">All Two-Wheelers</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Motorcycle Types We Recover
            </h2>
            <p className="text-neutral-400 text-sm">
              The recovery requirement can vary depending on the motorcycle’s size, design and condition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="text-3xl mb-3">🛵</div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Scooters</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Scooters and smaller two-wheelers that cannot be ridden can be assessed for recovery and transportation.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="text-3xl mb-3">🏍</div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Standard Motorbikes</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Standard motorcycles with mechanical, electrical or other problems can be transported to a suitable destination.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="text-3xl mb-3">🏎</div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Sports Bikes</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Sports bikes may have different dimensions and components from standard motorcycles. Loading requirements are considered before recovery.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <div className="text-3xl mb-3">🛣</div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Touring & Larger Bikes</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Larger motorcycles may require additional consideration because of their weight and dimensions.
              </p>
            </div>
          </div>
        </section>

        {/* 7. WHAT TO TELL US BEFORE COLLECTING YOUR BIKE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Preparation Details</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                What to Tell Us Before Collecting Your Bike
              </h2>
              <p className="text-neutral-400 text-sm">
                Providing the right information helps the recovery team understand what type of motorcycle recovery is required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-white font-bold text-base mb-2 text-yellow-500">Motorcycle Type</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tell us whether the vehicle is a scooter, standard motorbike, sports bike, touring motorcycle or another two-wheeler.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-white font-bold text-base mb-2 text-yellow-500">Bike Condition</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Explain whether the motorcycle is running, non-starting, damaged, fallen over or unable to roll normally.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-white font-bold text-base mb-2 text-yellow-500">Pickup Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide the exact location, road name, landmark or suitable location details so the recovery requirement can be assessed.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-black/60 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300">
                <h3 className="text-white font-bold text-base mb-2 text-yellow-500">Destination</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tell us whether the motorcycle needs to go to a workshop, home, garage, dealership or another destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. MOTORCYCLE RECOVERY AFTER AN ACCIDENT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Post-Accident Transport</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Motorcycle Recovery After an Accident
            </h2>
            <p className="text-neutral-400 text-sm">
              An accident can leave a motorcycle with damage that makes it unsafe or impossible to ride.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Fallen Bike</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                A motorcycle that has fallen may need to be moved from the accident location before it can be inspected or repaired.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Damaged Wheels or Steering</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Wheel, tyre or steering damage can affect the motorcycle’s ability to move safely. In these situations, motorcycle recovery may be more appropriate than riding the bike.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Bike Unable to Move</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                If the motorcycle cannot roll, start or move normally after an accident, provide the recovery team with details about its condition before collection.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-yellow-500/40 transition-all duration-300 group">
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-yellow-400 transition-colors">Post-Accident Transportation</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                After recovery from the accident location, the motorcycle can be transported to the destination requested by the customer, subject to recovery requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 9. WORKSHOP TRANSPORTATION */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Service Delivery
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Motorcycle Recovery for Workshops & Service Centres
            </h2>
            <div className="p-8 rounded-2xl bg-black/60 border border-neutral-800/80 mb-8 max-w-3xl mx-auto">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Motorcycle recovery is not limited to roadside breakdowns. A bike may need transportation to a workshop because it will not start, has mechanical damage, electrical problems, a damaged tyre, or requires scheduled maintenance.
              </p>
            </div>
            <a
              href="tel:+971528787066"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Arrange Motorcycle Transport</span>
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
              Answers to common queries regarding motorcycle recovery and transport in Dubai.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>Can you recover a motorcycle that will not start?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Yes. A non-starting motorcycle can be assessed for recovery and transportation depending on its condition and location.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>Can you recover a bike after an accident?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Yes. Accident-damaged motorcycles can be assessed for recovery when the bike cannot or should not be ridden from the accident location.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>Do you recover scooters as well as motorbikes?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Scooters and different types of motorcycles can be assessed for recovery. Customers should provide the bike type when requesting the service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>Can you take my motorcycle to a workshop?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                Yes. If your motorcycle needs inspection or repair and cannot be ridden, you can provide the workshop destination when requesting motorcycle recovery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-all">
              <h3 className="font-bold text-white text-base mb-2 flex items-start gap-2.5">
                <span className="text-yellow-500 font-extrabold">Q:</span>
                <span>How is motorcycle recovery charged in Dubai?</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed pl-6">
                The cost depends on factors such as motorcycle type, condition, pickup location, destination, distance and recovery requirements. Contact DR Light Recovery with your details for a quote.
              </p>
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950/80 border-t border-neutral-900 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-yellow-500/20 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Need Motorbike Recovery in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              If your motorcycle is broken down, damaged, non-starting or simply needs to be transported without riding it, contact DR Light Recovery. Share your bike type, current location, condition and destination so the appropriate motorcycle recovery requirement can be discussed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+971528787066"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:shadow-[#C62828]/35 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>📞 Call Now for Motorbike Recovery</span>
              </a>
              <a
                href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery,%20I%20need%20motorbike%20recovery%20in%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:shadow-[#1DA851]/30 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>💬 WhatsApp for Bike Towing</span>
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
