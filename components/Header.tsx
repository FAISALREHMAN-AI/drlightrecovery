"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: "Car Recovery Dubai", href: "/car-recovery-dubai" },
    { name: "Car Towing Service", href: "/car-towing-dubai" },
    { name: "Breakdown Recovery", href: "/breakdown-recovery-dubai" },
    { name: "Emergency Car Recovery", href: "/emergency-car-recovery-dubai" },
    { name: "Luxury & Sports Car Towing", href: "/luxury-sports-car-towing-dubai" },
    { name: "Motorcycle Recovery", href: "/motorbike-recovery-dubai" },
  ];

  const facebookUrl = "https://www.facebook.com/share/1GYiTa8pZV/";
  const instagramUrl = "https://www.instagram.com/drlightrecovery?igsh=NjBoNGszNzF1MTIx";

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-black/95 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
        {/* LOGO & BRAND NAME */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-yellow-500/30 flex-shrink-0 bg-black">
            <Image
              src="/brand-logo.jpg"
              alt="DR LIGHT RECOVERY Logo"
              width={48}
              height={48}
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-black tracking-wider text-white group-hover:text-yellow-400 transition-colors">
            DR LIGHT <span className="text-yellow-500">RECOVERY</span>
          </span>
        </Link>

        {/* Desktop Navigation: HOME | SERVICES ▾ | FAQ | CONTACT US */}
        <nav className="hidden lg:flex items-center gap-7 text-xs xl:text-sm font-bold tracking-wider text-neutral-300">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            HOME
          </Link>

          {/* SERVICES ▾ Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors py-2 focus:outline-none"
              aria-expanded={servicesDropdownOpen}
            >
              <span>SERVICES</span>
              <span className={`text-[10px] transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-yellow-400" : ""}`}>
                ▾
              </span>
            </button>

            {servicesDropdownOpen && (
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="absolute top-full left-0 w-64 py-2 mt-1 bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150"
              >
                {serviceLinks.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs text-neutral-300 hover:text-yellow-400 hover:bg-neutral-900/80 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#faq" className="hover:text-yellow-400 transition-colors">
            FAQ
          </Link>

          {/* CONTACT US -> Opens WhatsApp */}
          <a
            href="https://wa.me/971528787066"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
          >
            CONTACT US
          </a>
        </nav>

        {/* Desktop Actions: Social Media Icons + Call CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Social Icons */}
          <div className="flex items-center gap-2 mr-1">
            {/* Facebook */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DR Light Recovery on Facebook"
              className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 hover:bg-neutral-800 text-neutral-300 hover:text-yellow-400 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DR Light Recovery on Instagram"
              className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 hover:bg-neutral-800 text-neutral-300 hover:text-yellow-400 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Direct Phone Dialer Button */}
          <a
            href="tel:+971528787066"
            className="px-4 py-2.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md shadow-yellow-500/20 flex items-center gap-1.5"
          >
            <span>📞</span>
            <span>052 878 7066</span>
          </a>
        </div>

        {/* Mobile Actions: Social Icons + Hamburger */}
        <div className="flex items-center gap-2 sm:hidden">
          {/* Mobile Socials */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-yellow-400 flex items-center justify-center"
          >
            <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-yellow-400 flex items-center justify-center"
          >
            <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white"
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

          {/* Mobile SERVICES Dropdown Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-sm font-bold text-neutral-300 hover:text-yellow-400 py-1"
            >
              <span>Services</span>
              <span className={`text-xs transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-yellow-400" : ""}`}>
                ▾
              </span>
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 pt-2 space-y-2 border-l border-neutral-800 ml-2 mt-1">
                {serviceLinks.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    onClick={() => {
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-neutral-400 hover:text-yellow-400 py-1"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            FAQ
          </Link>

          {/* Mobile Contact Us -> WhatsApp */}
          <a
            href="https://wa.me/971528787066"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-neutral-300 hover:text-yellow-400"
          >
            Contact Us
          </a>

          {/* Social Links inside Mobile Menu */}
          <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-3">
            <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Follow Us:</span>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-bold text-neutral-300 hover:text-yellow-400 flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-bold text-neutral-300 hover:text-yellow-400 flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-3">
            {/* Call Now -> Direct Dialer */}
            <a
              href="tel:+971528787066"
              className="w-full py-3 text-center bg-yellow-500 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md"
            >
              📞 Call Now: 052 878 7066
            </a>
            {/* WhatsApp / Message -> WhatsApp */}
            <a
              href="https://wa.me/971528787066"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
