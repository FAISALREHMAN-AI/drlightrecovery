"use client";

// @ts-nocheck
/* eslint-disable */

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCta from '@/components/StickyMobileCta';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Section 3: Exactly the 6 approved services with dedicated Learn More buttons
  const services = [
    {
      title: "Car Recovery Dubai",
      href: "/car-recovery-dubai",
      desc: "Reliable car recovery across Dubai for vehicles that cannot be driven or need to be safely transported. Share your location and vehicle details with our team to arrange the appropriate recovery service.",
      badge: "24/7 Service"
    },
    {
      title: "Car Towing Service",
      href: "/car-towing-dubai",
      desc: "Our car towing service in Dubai helps move vehicles safely from their current location to a workshop, home, or another required destination.",
      badge: "Safe Transport"
    },
    {
      title: "Breakdown Recovery",
      href: "/breakdown-recovery-dubai",
      desc: "If your vehicle breaks down and you cannot continue your journey, our breakdown recovery service in Dubai can help arrange safe transportation for your vehicle.",
      badge: "Quick Dispatch"
    },
    {
      title: "Emergency Car Recovery",
      href: "/emergency-car-recovery-dubai",
      desc: "Vehicle problems can happen unexpectedly. Our 24/7 emergency car recovery service in Dubai helps customers arrange professional recovery when their vehicle cannot safely continue.",
      badge: "Urgent Response"
    },
    {
      title: "Luxury & Sports Car Towing",
      href: "/luxury-sports-car-towing-dubai",
      desc: "Luxury and sports vehicles require careful handling during transportation. Our luxury car towing service in Dubai focuses on secure handling and suitable vehicle transportation.",
      badge: "Zero-Angle Flatbed"
    },
    {
      title: "Motorcycle Recovery",
      href: "/motorbike-recovery-dubai",
      desc: "If your motorcycle cannot be ridden or needs to be transported, our motorcycle recovery service in Dubai can help move your bike safely.",
      badge: "Specialized Cradle"
    }
  ];

  const coverageAreas = [
    "Downtown Dubai", "Dubai Marina", "Jumeirah", "Business Bay", "Deira", "Bur Dubai",
    "Al Barsha", "Al Quoz", "Umm Suqeim", "Jumeirah Village Circle (JVC)", "Dubai Hills Estate",
    "Dubai Sports City", "International City", "Dubai Silicon Oasis", "Mirdif", "Al Qusais",
    "Al Nahda Dubai", "Jebel Ali", "Al Furjan", "Dubai South"
  ];

  const faqs = [
    {
      q: "How much does car recovery cost in Dubai?",
      a: "The cost depends on factors such as your vehicle type, location, recovery distance, and the type of service required. Contact us with your vehicle and location details for a recovery quote."
    },
    {
      q: "Are you available 24/7 for car recovery in Dubai?",
      a: "Yes, DR Light Recovery provides car recovery and towing services 24/7 across Dubai."
    },
    {
      q: "How quickly can a recovery truck reach my location?",
      a: "Response time depends on your location, traffic conditions, and the type of recovery required. Share your exact location with our team so we can assess the situation and arrange the appropriate service."
    },
    {
      q: "What areas of Dubai do you cover?",
      a: "We provide car recovery and towing services across Dubai, including residential communities, business districts, and major roads."
    },
    {
      q: "What types of vehicles can you recover?",
      a: "We provide recovery for cars, SUVs, 4x4s, luxury and sports cars, and motorcycles, depending on the recovery requirements."
    },
    {
      q: "What should I do if my car breaks down in Dubai?",
      a: "Move to a safe location if possible, switch on your hazard lights, and contact DR Light Recovery. Share your location, vehicle type, and details about the problem."
    },
    {
      q: "How do I request a car recovery service?",
      a: "Call or WhatsApp DR Light Recovery and provide your current location, vehicle type, and the reason recovery is required."
    },
    {
      q: "Can you recover a car after an accident?",
      a: "Yes, we provide accident vehicle recovery across Dubai for vehicles that cannot be safely driven after an accident."
    },
    {
      q: "Can you tow luxury and sports cars?",
      a: "Yes. We provide luxury and sports car towing with careful vehicle handling during transportation."
    },
    {
      q: "Can you tow a vehicle from a parking garage?",
      a: "If your vehicle needs to be moved from a parking facility, contact us with the location and vehicle details so we can assess the recovery requirements and arrange suitable towing where accessible."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      <Header />

      <main className="pt-20">
        {/* ================= 1. HERO SECTION ================= */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 border-b border-neutral-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative max-w-4xl mx-auto text-center py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              24/7 Car Recovery Dubai
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              24/7 Car Recovery Service in <span className="text-yellow-500">Dubai</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Need reliable car recovery in Dubai? DR Light Recovery provides professional car recovery and towing services across Dubai. Whether your vehicle has broken down, needs towing, or requires safe transportation, our team is available 24/7 to help.
            </p>

            {/* CTAs: Call Now -> tel: | WhatsApp Now -> https://wa.me/ */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all duration-200 shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>📞</span>
                <span>Call Now: 052 878 7066</span>
              </a>
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all duration-200 shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>💬</span>
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Supporting line */}
            <p className="text-xs sm:text-sm text-neutral-400 font-semibold tracking-wide">
              24/7 Availability • Dubai-Wide Coverage • Professional Vehicle Handling
            </p>
          </div>
        </section>

        {/* ================= 2. RELIABLE CAR RECOVERY ACROSS DUBAI ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Reliable Car Recovery Across Dubai
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              When your vehicle cannot safely continue its journey, getting professional recovery support can make the situation easier. DR Light Recovery provides reliable car recovery and towing services across Dubai, helping with breakdowns, vehicle transportation and other recovery needs. Share your location and vehicle details with our team to get the appropriate recovery assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-bold mb-4 text-lg">
                ⏱
              </div>
              <h3 className="text-white font-bold text-base mb-2">24/7 Availability</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Vehicle problems can happen at any time. Our recovery service is available 24/7 across Dubai.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-bold mb-4 text-lg">
                📍
              </div>
              <h3 className="text-white font-bold text-base mb-2">Dubai-Wide Coverage</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                We provide comprehensive car recovery and towing services throughout all districts of Dubai.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-bold mb-4 text-lg">
                🛡
              </div>
              <h3 className="text-white font-bold text-base mb-2">Professional Handling</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                We focus on careful and secure handling during vehicle loading, recovery, and transportation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-bold mb-4 text-lg">
                ⚡
              </div>
              <h3 className="text-white font-bold text-base mb-2">Simple Assistance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Call or WhatsApp us, share your location and vehicle details, and we&apos;ll guide you through the process.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 3. OUR CAR RECOVERY & TOWING SERVICES ================= */}
        {/* Requirement: Card is NOT clickable. Only "Learn More" button links to dedicated page. */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Our Car Recovery & Towing Services in Dubai
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                We provide reliable vehicle recovery and towing services across Dubai for different recovery situations. Whether your car has broken down, needs towing, or needs to be transported to another location, our team can help arrange the appropriate recovery service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-black border border-neutral-800 hover:border-yellow-500/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-block px-2.5 py-1 rounded bg-neutral-900 text-yellow-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                      {srv.badge}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-yellow-500 hover:text-black text-xs font-bold text-yellow-400 tracking-wider uppercase transition-colors group"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 4. CAR RECOVERY NEAR ME ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Car Recovery Near Me in Dubai
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-4 leading-relaxed">
              Looking for car recovery near me? DR Light Recovery provides professional car recovery and towing services across Dubai. Whether your vehicle is at home, work, a parking facility, or on the road, share your current location and vehicle details with our team so we can help arrange the appropriate recovery service.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Our recovery near me service is designed to make it easier to get professional vehicle recovery wherever you are in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Call -> Phone dialer */}
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-7 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
              >
                Find Car Recovery Near Me
              </a>
              {/* Other contact -> WhatsApp */}
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Share Location on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ================= 5. TOWING SERVICES ACROSS DUBAI ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Towing Services Across Dubai
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Need a tow truck for a vehicle that cannot be driven? DR Light Recovery provides professional towing services across Dubai for breakdowns, vehicle transportation, and other towing requirements. Whether you&apos;re searching for car towing near me or a reliable towing service in another part of Dubai, contact our team with your location and vehicle details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-7 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-lg font-bold text-white mb-3">Car Towing Near Me</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  When your vehicle needs to be moved from its current location, our team can help arrange the appropriate towing service based on your vehicle and destination.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-black border border-neutral-800">
                <h3 className="text-lg font-bold text-white mb-3">Tow Truck Service</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Tell us where your vehicle is located and what type of vehicle needs recovery. We&apos;ll help determine the appropriate towing solution for your situation.
                </p>
              </div>
            </div>

            <div className="text-center">
              {/* Call -> Phone dialer */}
              <a
                href="tel:+971528787066"
                className="inline-block px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
              >
                Find a Tow Truck Near Me
              </a>
            </div>
          </div>
        </section>

        {/* ================= 6. 24/7 EMERGENCY CAR RECOVERY ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-3">
              Urgent Assistance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              24/7 Emergency Car Recovery in Dubai
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Car trouble can happen at any time. DR Light Recovery provides 24/7 emergency car recovery across Dubai, helping you arrange professional vehicle recovery when you cannot continue your journey. Contact us, share your location and vehicle details, and our team will help with the next steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Available 24/7</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Contact us whenever you need emergency vehicle recovery, day or night.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Across Dubai</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                We provide rapid emergency recovery services throughout the emirate of Dubai.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-base mb-2">Simple Recovery Process</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Share your location, vehicle type, and situation so the appropriate recovery service can be arranged.
              </p>
            </div>
          </div>

          <div className="text-center">
            {/* Call button -> Phone dialer */}
            <a
              href="tel:+971528787066"
              className="inline-block px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-red-600/20"
            >
              Call for Emergency Recovery
            </a>
          </div>
        </section>

        {/* ================= 7. WHAT SHOULD YOU DO IF YOUR CAR BREAKS DOWN ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                What Should You Do If Your Car Breaks Down in Dubai?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                If your car breaks down, your safety should come first. If it is safe to do so, move your vehicle away from moving traffic, switch on your hazard lights, and stay in a safe position. Contact DR Light Recovery and provide your location, vehicle type, and basic information about the problem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-2xl mb-3 block">01</span>
                <h3 className="text-white font-bold text-sm mb-2">Move to a Safe Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  If possible, safely steer or move your vehicle away from moving highway traffic.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-2xl mb-3 block">02</span>
                <h3 className="text-white font-bold text-sm mb-2">Turn On Hazard Lights</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Make your vehicle immediately visible to other oncoming road users.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-2xl mb-3 block">03</span>
                <h3 className="text-white font-bold text-sm mb-2">Share Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide your exact GPS pin and vehicle details when contacting our dispatch.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-2xl mb-3 block">04</span>
                <h3 className="text-white font-bold text-sm mb-2">Arrange Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Our team determines the appropriate recovery or towing solution for your vehicle.
                </p>
              </div>
            </div>

            <div className="text-center">
              {/* Call -> Phone dialer */}
              <a
                href="tel:+971528787066"
                className="inline-block px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
              >
                Get Breakdown Recovery
              </a>
            </div>
          </div>
        </section>

        {/* ================= 8. CAR RECOVERY SERVICES ACROSS DUBAI (GEO) ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Car Recovery Services Across Dubai
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
              DR Light Recovery provides car recovery and towing services across Dubai. From residential communities and business districts to major roads and surrounding areas, our team can assist with vehicle recovery throughout the city.
            </p>
            <p className="text-xs text-yellow-500 font-bold uppercase tracking-widest">
              Areas We Cover
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
            {coverageAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-center text-xs text-neutral-300 font-medium hover:border-yellow-500/40 transition-colors"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Need recovery in another part of Dubai? Share your exact location with our team and we&apos;ll assess the recovery requirements.
            </p>
            {/* Request Assistance / Other contact -> WhatsApp */}
            <a
              href="https://wa.me/971528787066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
            >
              Request Recovery
            </a>
          </div>
        </section>

        {/* ================= 9. HOW OUR CAR RECOVERY SERVICE WORKS ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                How Our Car Recovery Service Works
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Need car recovery in Dubai but not sure what to do? Our process is simple. Contact DR Light Recovery, provide your location and vehicle details, and our team will help arrange the appropriate recovery service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">Step 1</span>
                <h3 className="text-white font-bold text-sm mb-2">Contact Us</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Call or WhatsApp and tell us what happened to your vehicle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">Step 2</span>
                <h3 className="text-white font-bold text-sm mb-2">Share Your Location</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Provide your current GPS location and basic vehicle details.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">Step 3</span>
                <h3 className="text-white font-bold text-sm mb-2">Arrange Recovery</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Our team will help determine the appropriate recovery or towing vehicle.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <span className="text-yellow-500 font-black text-xl mb-2 block">Step 4</span>
                <h3 className="text-white font-bold text-sm mb-2">Transport Your Vehicle</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Your vehicle is handled carefully and transported to the required destination.
                </p>
              </div>
            </div>

            <div className="text-center">
              {/* Request Assistance / Other contact -> WhatsApp */}
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
              >
                Request Car Recovery
              </a>
            </div>
          </div>
        </section>

        {/* ================= 10. HOW MUCH DOES CAR RECOVERY COST IN DUBAI ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              How Much Does Car Recovery Cost in Dubai?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              The cost of car recovery in Dubai can vary depending on your vehicle type, pickup location, recovery distance, and the type of service required. Contact DR Light Recovery with your vehicle and location details so our team can understand your situation and provide the appropriate recovery option.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-sm mb-2">Vehicle Type</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Different vehicles (sedans, SUVs, luxury low-clearance) may require different recovery equipment.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-sm mb-2">Recovery Distance</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                The distance between the pickup location and your destination workshop or garage affects service requirements.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-sm mb-2">Pickup Location</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Your vehicle&apos;s location (open highway, basement parking, or side street) influences the recovery approach.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800">
              <h3 className="text-white font-bold text-sm mb-2">Type of Recovery</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Different recovery situations (rolling breakdown vs accident damage) require specialized handling.
              </p>
            </div>
          </div>

          <div className="text-center">
            {/* Get a Quote / Non-call contact -> WhatsApp */}
            <a
              href="https://wa.me/971528787066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
            >
              Get a Recovery Quote
            </a>
          </div>
        </section>

        {/* ================= 11. WHAT TYPES OF VEHICLES CAN WE RECOVER ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                What Types of Vehicles Can We Recover?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                DR Light Recovery provides recovery and towing services for different types of vehicles across Dubai. Contact us with your vehicle details so we can understand your requirements and arrange the appropriate recovery solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <div className="text-2xl mb-3">🚗</div>
                <h3 className="text-white font-bold text-base mb-2">Cars</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Recovery and towing for everyday sedans and hatchbacks that need to be transported safely.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <div className="text-2xl mb-3">🚙</div>
                <h3 className="text-white font-bold text-base mb-2">SUVs & 4x4s</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Suitable recovery solutions and heavy-duty towing equipment for larger vehicles based on the situation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <div className="text-2xl mb-3">🏎</div>
                <h3 className="text-white font-bold text-base mb-2">Luxury & Sports Cars</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Careful zero-angle towing and transportation for premium, low-clearance performance vehicles.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-800">
                <div className="text-2xl mb-3">🏍</div>
                <h3 className="text-white font-bold text-base mb-2">Motorcycles</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Recovery and transportation for motorcycles, scooters, and bikes that cannot be ridden or need to be moved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 12. FREQUENTLY ASKED QUESTIONS ================= */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Frequently Asked Questions About Car Recovery in Dubai
            </h2>
            <p className="text-neutral-400 text-sm">
              Common questions about our vehicle recovery, towing processes, and Dubai coverage.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 text-white hover:text-yellow-400 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.q}</span>
                    <span className="text-xl text-yellow-500 font-bold">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-neutral-400 text-xs sm:text-sm leading-relaxed border-t border-neutral-900">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 13. FINAL CTA ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Need Car Recovery in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether your vehicle has broken down, needs towing, or requires safe transportation, DR Light Recovery is available 24/7 across Dubai. Contact our team, share your location and vehicle details, and get the recovery process started.
            </p>

            {/* Call Now -> tel: | WhatsApp Now -> https://wa.me/ */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="tel:+971528787066"
                className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-yellow-500/20 active:scale-95"
              >
                📞 Call Now: 052 878 7066
              </a>
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-emerald-600/20 active:scale-95"
              >
                💬 WhatsApp Now
              </a>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 font-semibold tracking-wide">
              24/7 Car Recovery • Towing Services • Dubai-Wide Coverage
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCta />
    </div>
  );
}
