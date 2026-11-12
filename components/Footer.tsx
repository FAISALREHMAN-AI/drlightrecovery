import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-sm pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-white tracking-wider">
              DR. LIGHT <span className="text-yellow-500">RECOVERY</span>
            </h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Professional 24/7 car recovery and towing services across Dubai. Fast, reliable, and equipped for breakdowns, accidents, luxury cars, and motorcycles.
            </p>
            <div className="pt-2 text-xs text-neutral-300 space-y-1">
              <p>📍 Dubai, United Arab Emirates</p>
              <p>📞 052 878 7066</p>
              <p>⏱ Available 24 Hours / 7 Days</p>
            </div>
          </div>

          {/* Core Recovery Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/car-recovery-dubai" className="hover:text-yellow-400 transition-colors">
                  Car Recovery Dubai
                </Link>
              </li>
              <li>
                <Link href="/car-towing-dubai" className="hover:text-yellow-400 transition-colors">
                  Car Towing Service
                </Link>
              </li>
              <li>
                <Link href="/breakdown-recovery-dubai" className="hover:text-yellow-400 transition-colors">
                  Breakdown Recovery
                </Link>
              </li>
              <li>
                <Link href="/emergency-car-recovery-dubai" className="hover:text-yellow-400 transition-colors">
                  Emergency Car Recovery
                </Link>
              </li>
              <li>
                <Link href="/luxury-sports-car-towing-dubai" className="hover:text-yellow-400 transition-colors">
                  Luxury & Sports Car Towing
                </Link>
              </li>
              <li>
                <Link href="/motorbike-recovery-dubai" className="hover:text-yellow-400 transition-colors">
                  Motorcycle Recovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Dubai Coverage Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-neutral-400">
              <span>Downtown Dubai</span>
              <span>Dubai Marina</span>
              <span>Business Bay</span>
              <span>Jumeirah</span>
              <span>JLT</span>
              <span>Al Barsha</span>
              <span>Al Quoz</span>
              <span>Deira</span>
              <span>Bur Dubai</span>
              <span>Jebel Ali</span>
              <span>JVC</span>
              <span>Dubai Hills</span>
            </div>
          </div>

          {/* Immediate Assistance */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Immediate Assistance
            </h4>
            <p className="text-xs text-neutral-400">
              Stranded on a Dubai road or need a tow truck right now? Call our 24/7 dispatch desk or message on WhatsApp.
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              {/* Call Now -> Direct Dialer */}
              <a
                href="tel:+971528787066"
                className="w-full py-2.5 px-4 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg text-center transition-colors shadow-md"
              >
                📞 Call Now: 052 878 7066
              </a>
              {/* WhatsApp -> Direct WhatsApp */}
              <a
                href="https://wa.me/971528787066"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg text-center transition-colors shadow-md"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {currentYear} DR Light Recovery. All rights reserved. Professional vehicle recovery across Dubai, UAE.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-neutral-400">Home</Link>
            <Link href="/car-recovery-dubai" className="hover:text-neutral-400">Services</Link>
            <a href="tel:+971528787066" className="hover:text-neutral-400">Call Us</a>
            <a href="https://wa.me/971528787066" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
