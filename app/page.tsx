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

  const services = [
    {
      title: "Car Recovery Dubai",
      href: "/car-recovery-dubai",
      desc: "Reliable car recovery across Dubai for vehicles that cannot be driven or need to be safely transported. Share your location and vehicle details with our team to arrange the appropriate recovery service.",
      badge: "24/7 Service",
      icon: "🚗",
      anchorText: "Car Recovery Service in Dubai",
    },
    {
      title: "Car Towing Service",
      href: "/car-towing-dubai",
      desc: "Our car towing service in Dubai helps move vehicles safely from their current location to a workshop, home, or another required destination.",
      badge: "Safe Transport",
      icon: "🚛",
      anchorText: "Professional Car Towing Service",
    },
    {
      title: "Breakdown Recovery",
      href: "/breakdown-recovery-dubai",
      desc: "If your vehicle breaks down and you cannot continue your journey, our breakdown recovery service in Dubai can help arrange safe transportation for your vehicle.",
      badge: "Quick Dispatch",
      icon: "⚙️",
      anchorText: "Roadside Breakdown Recovery",
    },
    {
      title: "Emergency Car Recovery",
      href: "/emergency-car-recovery-dubai",
      desc: "Vehicle problems can happen unexpectedly. Our 24/7 emergency car recovery service in Dubai helps customers arrange professional recovery when their vehicle cannot safely continue.",
      badge: "Urgent Response",
      icon: "🚨",
      anchorText: "Emergency Car Recovery",
    },
    {
      title: "Luxury & Sports Car Towing",
      href: "/luxury-sports-car-towing-dubai",
      desc: "Luxury and sports vehicles require careful handling during transportation. Our luxury car towing service in Dubai focuses on secure handling and suitable vehicle transportation.",
      badge: "Zero-Angle Flatbed",
      icon: "🏎️",
      anchorText: "Luxury & Sports Car Towing",
    },
    {
      title: "Motorcycle Recovery",
      href: "/motorbike-recovery-dubai",
      desc: "If your motorcycle cannot be ridden or needs to be transported, our motorcycle recovery service in Dubai can help move your bike safely.",
      badge: "Specialized Cradle",
      icon: "🏍️",
      anchorText: "Motorbike Recovery Service",
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black relative">
      {/* ================= FIXED FULL HOMEPAGE BACKGROUND ================= */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/homepage-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      >
        {/* Dark overlay to ensure contrast and readability while showcasing the image */}
        <div className="absolute inset-0 bg-black/75 md:bg-black/70 backdrop-blur-[1px]" />
      </div>

      <Header />

      <main className="pt-20 relative z-10">

        {/* ================= 1. HERO SECTION ================= */}
        <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Subtle gradient highlights */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(234,179,8,0.12),transparent)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          <div className="relative max-w-5xl mx-auto text-center py-24">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              Available Now — 24/7 Car Recovery Dubai
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              24/7 Car Recovery<br />
              Service in{" "}
              <span className="text-yellow-500 relative">
                Dubai
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Need reliable car recovery in Dubai? DR Light Recovery provides professional car recovery and towing services across Dubai — available 24/7 to get you back on the road.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="tel:+971528787066"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-2xl shadow-[#E53935]/30 hover:shadow-[#C62828]/40 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call Now: 052 878 7066</span>
              </a>
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-2xl shadow-[#25D366]/25 hover:shadow-[#1DA851]/35 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Trust signals row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                24/7 Availability
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                Dubai-Wide Coverage
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                Professional Vehicle Handling
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                All Vehicle Types
              </span>
            </div>
          </div>
        </section>

        {/* ================= 2. KEY TRUST PILLARS ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-800/60 bg-black/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Why DR Light Recovery</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Reliable Car Recovery Across Dubai
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                When your vehicle cannot safely continue its journey, getting professional recovery support makes the situation easier. DR Light Recovery provides reliable car recovery and towing across all districts of Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2"/>
                    </svg>
                  ),
                  title: "24/7 Availability",
                  desc: "Vehicle problems happen at any hour. Our recovery service is available around the clock, every day of the year."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ),
                  title: "Dubai-Wide Coverage",
                  desc: "From Downtown to Jebel Ali, Dubai Marina to Mirdif — comprehensive recovery coverage across all parts of Dubai."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  ),
                  title: "Professional Handling",
                  desc: "Careful and secure handling during vehicle loading, recovery, and transportation — for all vehicle types."
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  ),
                  title: "Simple Process",
                  desc: "Call or WhatsApp us, share your location and vehicle details — our team handles the rest."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 hover:bg-neutral-900/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. OUR SERVICES ================= */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/75 backdrop-blur-md border-y border-neutral-800/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">What We Offer</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Our Car Recovery & Towing Services in Dubai
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Whether your car has broken down, needs towing, or needs to be transported to another location — our team can arrange the right recovery service for your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className="group relative p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/50 hover:bg-neutral-900/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/0 group-hover:via-yellow-500/60 to-transparent transition-all duration-500" />

                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-3xl">{srv.icon}</span>
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[11px] font-bold uppercase tracking-wider">
                        {srv.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-50 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={srv.href}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-yellow-500 hover:text-black text-sm font-bold text-yellow-400 tracking-wide transition-all duration-200 group/btn"
                    >
                      <span>{srv.anchorText}</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 4. CAR RECOVERY NEAR ME ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/60 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800 overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.07),transparent_60%)]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

              <div className="relative text-center">
                <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Wherever You Are</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                  Car Recovery Near Me in Dubai
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-3 leading-relaxed">
                  Looking for car recovery near me? DR Light Recovery provides professional car recovery and towing across Dubai. Whether your vehicle is at home, work, a parking facility, or on the road — share your location and we'll help arrange the right recovery.
                </p>
                <p className="text-neutral-500 text-sm max-w-xl mx-auto mb-10">
                  Our recovery near me service is designed to make professional vehicle recovery accessible wherever you are in Dubai.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+971528787066"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Find Car Recovery Near Me
                  </a>
                  <a
                    href="https://wa.me/971528787066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:-translate-y-0.5 active:scale-95"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Share Location on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. TOWING SERVICES ACROSS DUBAI ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/70 backdrop-blur-sm border-t border-neutral-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Towing Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Towing Services Across Dubai
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Need a tow truck for a vehicle that cannot be driven? DR Light Recovery provides professional towing services across Dubai for breakdowns, vehicle transportation, and other towing requirements. Contact our team with your location and vehicle details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="group p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Car Towing Near Me</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  When your vehicle needs to be moved from its current location, our team can help arrange the appropriate towing service based on your vehicle type and destination.
                </p>
              </div>
              <div className="group p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Tow Truck Service</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Tell us where your vehicle is located and what type of vehicle needs recovery. We'll help determine the appropriate towing solution for your situation.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="tel:+971528787066"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Find a Tow Truck Near Me
              </a>
            </div>
          </div>
        </section>

        {/* ================= 6. 24/7 EMERGENCY CAR RECOVERY ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/65 backdrop-blur-sm border-t border-neutral-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
                </span>
                Urgent Assistance
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                24/7 Emergency Car Recovery in Dubai
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Car trouble can happen at any time. DR Light Recovery provides 24/7 emergency car recovery across Dubai — helping you arrange professional vehicle recovery when you cannot continue your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              {[
                {
                  title: "Available 24/7",
                  desc: "Contact us whenever you need emergency vehicle recovery — day or night, weekday or weekend.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2"/>
                    </svg>
                  )
                },
                {
                  title: "Across Dubai",
                  desc: "Emergency recovery services throughout all residential areas, business districts, and major roads in Dubai.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                    </svg>
                  )
                },
                {
                  title: "Simple Process",
                  desc: "Share your location, vehicle type, and situation — the appropriate recovery service will be arranged.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-black border border-neutral-800 hover:border-yellow-500/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="tel:+971528787066"
                className="inline-flex items-center gap-3 px-9 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/25 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call for Emergency Recovery
              </a>
            </div>
          </div>
        </section>

        {/* ================= 7. WHAT TO DO WHEN YOUR CAR BREAKS DOWN ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/70 backdrop-blur-sm border-t border-neutral-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Step-by-Step Guide</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                What Should You Do If Your Car Breaks Down in Dubai?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                If your car breaks down, your safety comes first. If it is safe to do so, move your vehicle away from traffic, switch on your hazard lights, and stay in a safe position. Then contact DR Light Recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {[
                {
                  step: "01",
                  title: "Move to Safety",
                  desc: "If possible, safely steer your vehicle away from moving traffic to a safe location."
                },
                {
                  step: "02",
                  title: "Turn On Hazard Lights",
                  desc: "Make your vehicle immediately visible to other road users by switching on hazard lights."
                },
                {
                  step: "03",
                  title: "Share Your Location",
                  desc: "Provide your exact GPS location and vehicle details when you contact our dispatch team."
                },
                {
                  step: "04",
                  title: "Arrange Recovery",
                  desc: "Our team determines and arranges the appropriate recovery or towing solution for your vehicle."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 transition-all duration-300 overflow-hidden">
                  <span className="absolute top-4 right-5 text-5xl font-black text-neutral-800 leading-none select-none">{item.step}</span>
                  <div className="relative">
                    <span className="text-yellow-500 font-black text-3xl mb-4 block">{item.step}</span>
                    <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="tel:+971528787066"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#E53935]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Get Breakdown Recovery
              </a>
            </div>
          </div>
        </section>

        {/* ================= 8. COVERAGE AREAS (GEO) ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/65 backdrop-blur-sm border-t border-neutral-800/60">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Areas We Serve</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Car Recovery Services Across Dubai
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                DR Light Recovery provides car recovery and towing services across Dubai — from residential communities and business districts to major roads and surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
              {coverageAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-black border border-neutral-800 text-center text-xs text-neutral-300 font-medium hover:border-yellow-500/50 hover:text-yellow-400 hover:bg-yellow-500/5 transition-all duration-200 cursor-default"
                >
                  {area}
                </div>
              ))}
            </div>

            <div className="text-center max-w-xl mx-auto">
              <p className="text-sm text-neutral-500 mb-6">
                Need recovery in another part of Dubai? Share your exact location with our team and we&apos;ll assess your recovery requirements.
              </p>
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Request Recovery on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ================= 9. HOW IT WORKS ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/70 backdrop-blur-sm border-t border-neutral-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">The Process</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
                How Our Car Recovery Service Works
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                Need car recovery in Dubai but not sure what to do? Our process is simple. Contact DR Light Recovery, provide your location and vehicle details — and our team will arrange the appropriate recovery service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {[
                {
                  step: "Step 1",
                  title: "Contact Us",
                  desc: "Call or WhatsApp and tell us what happened to your vehicle."
                },
                {
                  step: "Step 2",
                  title: "Share Your Location",
                  desc: "Provide your current GPS location and basic vehicle information."
                },
                {
                  step: "Step 3",
                  title: "Arrange Recovery",
                  desc: "Our team determines and arranges the right recovery or towing vehicle."
                },
                {
                  step: "Step 4",
                  title: "Vehicle Transported",
                  desc: "Your vehicle is carefully handled and transported to your required destination."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative group p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/40 transition-all duration-300">
                  {/* Connector line between cards (desktop) */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-9 -right-2.5 w-5 h-px bg-neutral-700 z-10" />
                  )}
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-500/20 flex items-center justify-center mb-4">
                    <span className="text-yellow-400 font-black text-sm">{idx + 1}</span>
                  </div>
                  <span className="text-yellow-500/50 font-bold text-xs uppercase tracking-widest mb-1 block">{item.step}</span>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Request Car Recovery
              </a>
            </div>
          </div>
        </section>

        {/* ================= 10. PRICING FACTORS ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/65 backdrop-blur-sm border-t border-neutral-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Transparent Pricing</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                How Much Does Car Recovery Cost in Dubai?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                The cost of car recovery in Dubai varies depending on your vehicle type, pickup location, recovery distance, and the type of service required. Contact DR Light Recovery with your details so our team can help arrange the right recovery option.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {[
                {
                  title: "Vehicle Type",
                  desc: "Different vehicles (sedans, SUVs, low-clearance luxury cars) may require different recovery equipment.",
                  icon: "🚗"
                },
                {
                  title: "Recovery Distance",
                  desc: "The distance between the pickup location and destination workshop or garage affects the service requirements.",
                  icon: "📍"
                },
                {
                  title: "Pickup Location",
                  desc: "Your vehicle's location — open highway, basement parking, or side street — influences the recovery approach.",
                  icon: "🗺️"
                },
                {
                  title: "Type of Recovery",
                  desc: "Different recovery situations (rolling breakdown vs accident damage) require specialized handling and equipment.",
                  icon: "⚙️"
                }
              ].map((item, idx) => (
                <div key={idx} className="p-7 rounded-2xl bg-black border border-neutral-800 hover:border-yellow-500/40 transition-all duration-300">
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-xl shadow-[#25D366]/20 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get a Recovery Quote on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ================= 11. VEHICLE TYPES ================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/70 backdrop-blur-sm border-t border-neutral-800/60">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">All Vehicle Types</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                What Types of Vehicles Can We Recover?
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                DR Light Recovery provides recovery and towing services for different types of vehicles across Dubai. Contact us with your vehicle details so we can arrange the appropriate recovery solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  emoji: "🚗",
                  title: "Cars",
                  desc: "Recovery and towing for everyday sedans and hatchbacks that need to be transported safely."
                },
                {
                  emoji: "🚙",
                  title: "SUVs & 4x4s",
                  desc: "Suitable recovery solutions and heavy-duty towing equipment for larger vehicles based on the situation."
                },
                {
                  emoji: "🏎️",
                  title: "Luxury & Sports Cars",
                  desc: "Careful zero-angle towing and transportation for premium, low-clearance performance vehicles."
                },
                {
                  emoji: "🏍️",
                  title: "Motorcycles",
                  desc: "Recovery and transportation for motorcycles, scooters, and bikes that cannot be ridden or need moving."
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-7 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-yellow-500/50 hover:bg-neutral-900/50 transition-all duration-300">
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-200">{item.emoji}</div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 12. FAQ ================= */}
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/75 backdrop-blur-md border-t border-neutral-800/80">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">Common Questions</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Frequently Asked Questions About Car Recovery in Dubai
              </h2>
              <p className="text-neutral-400 text-sm">
                Common questions about our vehicle recovery, towing services, and Dubai coverage.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border overflow-hidden transition-all duration-200 ${isOpen ? 'bg-neutral-900 border-yellow-500/30' : 'bg-black border-neutral-800 hover:border-neutral-700'}`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4"
                    >
                      <span className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? 'text-yellow-400' : 'text-white'}`}>{faq.q}</span>
                      <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${isOpen ? 'bg-yellow-500 border-yellow-500 text-black' : 'bg-transparent border-neutral-700 text-yellow-500'}`}>
                        <span className="font-bold text-base leading-none">{isOpen ? "−" : "+"}</span>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= 13. FINAL CTA ================= */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/75 backdrop-blur-md border-t border-neutral-800/80 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(234,179,8,0.08),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              Available 24/7
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Need Car Recovery<br />in Dubai?
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
              Whether your vehicle has broken down, needs towing, or requires safe transportation — DR Light Recovery is available 24/7 across Dubai. Contact our team, share your location and vehicle details, and get the recovery process started.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="tel:+971528787066"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-2xl shadow-[#E53935]/30 hover:shadow-[#C62828]/40 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call Now: 052 878 7066</span>
              </a>
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl transition-all duration-200 shadow-2xl shadow-[#25D366]/25 hover:shadow-[#1DA851]/35 hover:-translate-y-0.5 active:scale-95"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp Now</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-600 font-medium">
              <span>24/7 Car Recovery</span>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span>Towing Services</span>
              <span className="w-1 h-1 rounded-full bg-neutral-700" />
              <span>Dubai-Wide Coverage</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <StickyMobileCta />
    </div>
  );
}
