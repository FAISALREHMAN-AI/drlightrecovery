import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DUBAI_LOCATIONS } from '../data';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(DUBAI_LOCATIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const location = DUBAI_LOCATIONS[resolvedParams.slug];

  if (!location) {
    return {
      title: 'Location Not Found | Dr. Light Recovery',
    };
  }

  const baseUrl = 'https://drlight-recovery.vercel.app';

  return {
    title: location.title,
    description: location.description,
    keywords: [
      `Car Towing ${location.name}`,
      `Vehicle Recovery ${location.name}`,
      `Emergency Towing ${location.name} Dubai`,
      `Flat Tyre Repair ${location.name}`,
      `Battery Jumpstart ${location.name}`,
      `Towing Service ${location.name}`,
      'Dr. Light Recovery Dubai',
    ],
    alternates: {
      canonical: `${baseUrl}/services/${location.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.description,
      url: `${baseUrl}/services/${location.slug}`,
      siteName: 'Dr. Light Recovery',
      locale: 'en_AE',
      type: 'website',
      images: [
        {
          url: '/branded-truck.png',
          width: 1200,
          height: 630,
          alt: `Dr. Light Recovery in ${location.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: location.title,
      description: location.description,
      images: ['/branded-truck.png'],
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const resolvedParams = await params;
  const location = DUBAI_LOCATIONS[resolvedParams.slug];

  if (!location) {
    notFound();
  }

  // Schema.org LocalBusiness JSON-LD for this specific area
  const locationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: `Dr. Light Recovery - ${location.name}`,
    description: location.description,
    telephone: '+971528787066',
    url: `https://drlight-recovery.vercel.app/services/${location.slug}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: location.name,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />

      {/* Header Bar */}
      <header className="px-6 py-6 border-b border-neutral-800 bg-neutral-950 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-xl md:text-2xl font-extrabold tracking-widest text-white">
          DR. LIGHT <span className="text-yellow-500">RECOVERY</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-white text-sm font-semibold hidden md:block">
            ← Back to Home
          </Link>
          <a
            href="tel:+971528787066"
            className="px-5 py-2.5 bg-yellow-500 text-black font-extrabold rounded-full text-sm shadow-[0_0_15px_rgba(234,179,8,0.5)]"
          >
            📞 052 878 7066
          </a>
        </div>
      </header>

      {/* Location Hero */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 font-bold text-xs md:text-sm mb-6 uppercase tracking-wider">
          📍 Direct Coverage in {location.name} • ETA: {location.eta}
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight uppercase">
          {location.heroHeadline}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          {location.heroSubheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+971528787066"
            className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-extrabold text-lg rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:bg-yellow-400 transition"
          >
            📞 Call Towing Now: 052 878 7066
          </a>
          <a
            href={`https://wa.me/971528787066?text=Hi,%20I%20need%20emergency%20towing%20assistance%20in%20${encodeURIComponent(
              location.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white font-extrabold text-lg rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:bg-green-400 transition"
          >
            💬 Send WhatsApp GPS Pin
          </a>
        </div>
      </section>

      {/* Local Coverage Grid */}
      <section className="py-16 px-6 bg-neutral-900 border-t border-b border-neutral-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-500">
              Areas Covered in {location.name}
            </h2>
            <ul className="space-y-3">
              {location.keyAreasCovered.map((area, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200 font-medium">
                  <span className="text-yellow-500 font-bold">✓</span> {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-500">
              Available 24/7 Services
            </h2>
            <ul className="space-y-3">
              {location.popularServices.map((service, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-200 font-medium">
                  <span className="text-yellow-500 font-bold">🛠️</span> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Immediate Recovery in <span className="text-yellow-500">{location.name}</span>?
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Our flatbed drivers are dispatched immediately across {location.name}. Average response time: {location.eta}.
        </p>
        <a
          href="tel:+971528787066"
          className="inline-block px-10 py-5 bg-yellow-500 text-black font-extrabold text-xl rounded-xl shadow-[0_0_25px_rgba(234,179,8,0.6)]"
        >
          📞 Dispatch Driver Now (052 878 7066)
        </a>
      </section>

      {/* Footer link back */}
      <footer className="py-12 px-6 bg-neutral-950 border-t border-neutral-900 text-center text-gray-500 text-sm">
        <p>© 2026 Dr. Light Recovery Services UAE • {location.name} Sector</p>
        <div className="mt-4">
          <Link href="/" className="text-yellow-500 hover:underline">
            Return to main homepage
          </Link>
        </div>
      </footer>
    </main>
  );
}
