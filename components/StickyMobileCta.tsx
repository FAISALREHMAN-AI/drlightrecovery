import Link from "next/link";

interface StickyMobileCtaProps {
  phone?: string;
  whatsapp?: string;
  callLabel?: string;
  whatsappLabel?: string;
}

export default function StickyMobileCta({
  phone = "+971528787066",
  whatsapp = "+971528787066",
  callLabel = "Call Now",
  whatsappLabel = "WhatsApp",
}: StickyMobileCtaProps) {
  const cleanPhone = phone.replace(/\s+/g, "");
  const cleanWhatsApp = whatsapp.replace(/[^0-9]/g, "");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 md:hidden flex gap-3 shadow-2xl">
      <a
        href={`tel:${cleanPhone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-yellow-500/20 active:scale-95"
      >
        <span>📞</span>
        <span>{callLabel}</span>
      </a>
      <a
        href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
          "Hello DR Light Recovery, I need vehicle recovery assistance in Dubai."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/20 active:scale-95"
      >
        <span>💬</span>
        <span>{whatsappLabel}</span>
      </a>
    </div>
  );
}
