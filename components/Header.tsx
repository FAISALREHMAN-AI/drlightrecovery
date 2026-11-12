"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-black tracking-widest text-white group-hover:text-yellow-400 transition-colors">
            DR. LIGHT <span className="text-yellow-500">RECOVERY</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-xs xl:text-sm font-bold tracking-wider text-neutral-300">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            HOME
          </Link>
          <Link href="/car-recovery-dubai" className="hover:text-yellow-400 transition-colors">
            CAR RECOVERY
          </Link>
          <Link href="/emergency-car-recovery-dubai" className="hover:text-yellow-400 transition-colors">
            EMERGENCY
          </Link>
          <Link href="/car-towing-dubai" className="hover:text-yellow-400 transition-colors">
            CAR TOWING
          </Link>
          <Link href="/breakdown-recovery-dubai" className="hover:text-yellow-400 transition-colors">
            BREAKDOWN
          </Link>
          <Link href="/luxury-sports-car-towing-dubai" className="hover:text-yellow-400 transition-colors">
            LUXURY & SPORTS
          </Link>
          <Link href="/motorbike-recovery-dubai" className="hover:text-yellow-400 transition-colors">
            MOTORBIKE
          </Link>
        </nav>

        {/* Header CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+971528787066"
            className="px-4 py-2.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md shadow-yellow-500/20"
          >
            📞 +971 52 878 7066
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/car-recovery-dubai"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            Car Recovery Dubai
          </Link>
          <Link
            href="/emergency-car-recovery-dubai"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            Emergency Car Recovery
          </Link>
          <Link
            href="/car-towing-dubai"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            Car Towing Service
          </Link>
          <Link
            href="/breakdown-recovery-dubai"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            Car Breakdown Service
          </Link>
          <Link
            href="/luxury-sports-car-towing-dubai"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            Luxury & Sports Car Towing
          </Link>
          <Link
            href="/motorbike-recovery-dubai"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            Motorbike Recovery Dubai
          </Link>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <a
              href="tel:+971528787066"
              className="w-full py-3 text-center bg-yellow-500 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg"
            >
              📞 Call: +971 52 878 7066
            </a>
            <a
              href="https://wa.me/971528787066?text=Hello%20DR%20Light%20Recovery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
