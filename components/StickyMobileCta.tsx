import Link from "next/link";

interface StickyMobileCtaProps {
  callLabel?: string;
  whatsappLabel?: string;
}

export default function StickyMobileCta({
  callLabel = "Call Now",
  whatsappLabel = "WhatsApp",
}: StickyMobileCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 md:hidden flex gap-3 shadow-2xl">
      {/* Direct Phone Call */}
      <a
        href="tel:+971528787066"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E53935] hover:bg-[#C62828] text-white font-extrabold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#E53935]/20 active:scale-95"
      >
        <span>📞</span>
        <span>{callLabel}</span>
      </a>
      {/* WhatsApp / Contact */}
      <a
        href="https://wa.me/971528787066"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white font-extrabold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#25D366]/20 active:scale-95"
      >
        <span>💬</span>
        <span>{whatsappLabel}</span>
      </a>
    </div>
  );
}
