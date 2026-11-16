import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const facebookUrl = "https://www.facebook.com/share/1GYiTa8pZV/";
  const instagramUrl = "https://www.instagram.com/drlightrecovery?igsh=NjBoNGszNzF1MTIx";
  const emailAddress = "drlightrecovery@gmail.com";

  return (
    <footer className="relative z-20 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 text-neutral-300 text-sm pt-16 pb-36 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {/* SECTION 1 — COMPANY BRANDING */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-yellow-500/30 flex-shrink-0 bg-black">
                <Image
                  src="/brand-logo.jpg"
                  alt="DR LIGHT RECOVERY Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-xl font-black tracking-wider text-white group-hover:text-yellow-400 transition-colors">
                DR LIGHT <span className="text-yellow-500">RECOVERY</span>
              </span>
            </Link>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Professional 24/7 car recovery and towing services across Dubai. Fast, reliable, and equipped for breakdowns, accidents, luxury cars, and motorcycles.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Dubai, United Arab Emirates</span>
              </p>
              <p className="flex items-center gap-2">
                <span>⏱</span>
                <span>Available 24 Hours / 7 Days / 365 Days</span>
              </p>
            </div>
          </div>

          {/* SECTION 2 — CONTACT US */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest border-l-2 border-yellow-500 pl-2.5">
              Contact Us
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Stranded on the road or need urgent assistance? Reach our dispatch desk immediately:
            </p>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 pt-1">
              {/* CALL NOW BUTTON */}
              <a
                href="tel:+971528787066"
                className="w-full py-3 px-5 bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#E53935]/20 active:scale-95 flex items-center justify-center gap-2.5"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>CALL NOW: 052 878 7066</span>
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#25D366]/20 active:scale-95 flex items-center justify-center gap-2.5"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* EMAIL ADDRESS */}
            <div className="pt-2">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2.5 text-xs text-neutral-300 hover:text-yellow-400 transition-colors group break-all"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-yellow-400 group-hover:border-yellow-500/50 flex-shrink-0 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span className="font-semibold underline decoration-neutral-700 underline-offset-4 group-hover:decoration-yellow-400">{emailAddress}</span>
              </a>
            </div>
          </div>

          {/* SECTION 3 — FOLLOW US */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest border-l-2 border-yellow-500 pl-2.5">
              Follow Us
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Connect with DR Light Recovery on social media for updates, tips, and live vehicle transport stories:
            </p>

            <div className="flex items-center gap-4 pt-1">
              {/* FACEBOOK ICON (Original Recognizable Blue Branding #1877F2) */}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DR Light Recovery on Facebook"
                className="w-12 h-12 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center shadow-lg shadow-[#1877F2]/25 hover:scale-105 active:scale-95 transition-all"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* INSTAGRAM ICON (Original Recognizable Instagram Gradient Colours) */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DR Light Recovery on Instagram"
                className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white flex items-center justify-center shadow-lg shadow-[#dc2743]/25 hover:scale-105 active:scale-95 transition-all"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <div className="pt-2 text-xs text-neutral-400">
              <p>Facebook & Instagram official support channels</p>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4 text-center sm:text-left">
          <p className="font-medium text-neutral-300">
            © 2026 Dr Light Recovery. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-400">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <span>•</span>
            <Link href="/car-recovery-dubai" className="hover:text-yellow-400 transition-colors">Services</Link>
            <span>•</span>
            <a href="tel:+971528787066" className="hover:text-yellow-400 transition-colors">Call Us</a>
            <span>•</span>
            <a href="https://wa.me/971528787066" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
