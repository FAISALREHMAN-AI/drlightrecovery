"use client";

import Link from "next/link";
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

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-black tracking-widest text-white group-hover:text-yellow-400 transition-colors">
            DR. LIGHT <span className="text-yellow-500">RECOVERY</span>
          </span>
        </Link>

        {/* Desktop Navigation: HOME | SERVICES ▾ | FAQ | CONTACT US */}
        <nav className="hidden lg:flex items-center gap-8 text-xs xl:text-sm font-bold tracking-wider text-neutral-300">
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

        {/* Desktop Call CTA (Direct phone dialer) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+971528787066"
            className="px-4 py-2.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md shadow-yellow-500/20"
          >
            📞 052 878 7066
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

          {/* Action Buttons */}
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            {/* Call Now -> Direct Dialer */}
            <a
              href="tel:+971528787066"
              className="w-full py-3 text-center bg-yellow-500 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg"
            >
              📞 Call Now: 052 878 7066
            </a>
            {/* WhatsApp / Message -> WhatsApp */}
            <a
              href="https://wa.me/971528787066"
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
