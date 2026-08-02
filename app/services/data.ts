export interface LocationSEOData {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  eta: string;
  keyAreasCovered: string[];
  popularServices: string[];
}

export const DUBAI_LOCATIONS: Record<string, LocationSEOData> = {
  'sheikh-zayed-road': {
    slug: 'sheikh-zayed-road',
    name: 'Sheikh Zayed Road (SZR)',
    title: '24/7 Car Towing Sheikh Zayed Road Dubai | Emergency Recovery',
    description: 'Stuck on Sheikh Zayed Road? Dr. Light Recovery provides rapid 15-minute emergency car towing, battery jumpstart, and flat tyre recovery on SZR Dubai.',
    heroHeadline: '24/7 Car Towing Sheikh Zayed Road',
    heroSubheadline: 'Fastest 15-minute emergency breakdown response on E11 / Sheikh Zayed Road, Dubai. Flatbed towing, sports car transport & battery jumpstart.',
    eta: '15 Minutes',
    keyAreasCovered: ['Trade Centre', 'Financial Centre / DIFC', 'Business Bay SZR Exit', 'Al Safa SZR', 'Al Manara SZR', 'MOE Interchange'],
    popularServices: ['Emergency Highway Towing', 'Flatbed Recovery', 'Battery Jumpstart', 'Fuel Delivery', 'Flat Tyre Replacement'],
  },
  'dubai-marina': {
    slug: 'dubai-marina',
    name: 'Dubai Marina & JBR',
    title: 'Car Towing Service Dubai Marina & JBR | 24/7 Recovery',
    description: 'Fast vehicle towing & roadside assistance in Dubai Marina, JBR, and Bluewaters Island. Scratch-free flatbed recovery for all cars and SUVs.',
    heroHeadline: 'Fast Towing Service in Dubai Marina & JBR',
    heroSubheadline: '24/7 emergency vehicle recovery in Dubai Marina, JBR Walk, and Marina Promenade. Safe hydraulic flatbed towing for luxury cars.',
    eta: '15 - 20 Minutes',
    keyAreasCovered: ['Dubai Marina Promenade', 'Jumeirah Beach Residence (JBR)', 'Bluewaters Island', 'Marina Mall Area', 'JLT Interchanges'],
    popularServices: ['Low clearance Towing', 'Luxury Car Recovery', 'Flat Tyre Repair', 'Car Battery Service', 'Underground Parking Towing'],
  },
  'downtown-dubai': {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai & Burj Khalifa',
    title: 'Car Towing Downtown Dubai | 24/7 Emergency Vehicle Recovery',
    description: 'Professional car recovery in Downtown Dubai, Dubai Mall area, and Boulevard. Fast response towing for sports cars, luxury sedans, and SUVs.',
    heroHeadline: 'Emergency Towing Downtown Dubai',
    heroSubheadline: 'Rapid 15-minute towing arrival around Burj Khalifa, Mohammed Bin Rashid Boulevard, and Dubai Mall. Premium 24/7 vehicle assistance.',
    eta: '15 Minutes',
    keyAreasCovered: ['MBR Boulevard', 'Dubai Mall Parking', 'Burj Vista', 'Address Downtown', 'Executive Towers Access'],
    popularServices: ['VIP Supercar Towing', 'Zero-Angle Flatbed Recovery', 'Battery Jumpstart Service', 'Lockout Assistance', 'Flat Tyre Change'],
  },
  'palm-jumeirah': {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    title: '24/7 Car Towing Palm Jumeirah Dubai | Premium Recovery',
    description: 'Dedicated car recovery and towing on Palm Jumeirah fronds, Crescent, and Atlantis area. 24/7 roadside assistance for luxury and sports cars.',
    heroHeadline: 'Premium Towing Service Palm Jumeirah',
    heroSubheadline: 'Exclusive flatbed recovery service on Palm Jumeirah Fronds, Crescent Road, and Nakheel Mall area. Scratch-free VIP transport guarantee.',
    eta: '20 Minutes',
    keyAreasCovered: ['Palm Crescent East & West', 'The Pointe', 'Nakheel Mall', 'Fronds A to N', 'Atlantis / Royal Atlantis'],
    popularServices: ['VIP Flatbed Recovery', 'Sports Car Towing', 'Battery Replacement', 'Off-Road Sand Removal', 'Flat Tyre Repair'],
  },
  'business-bay': {
    slug: 'business-bay',
    name: 'Business Bay',
    title: 'Car Towing Service Business Bay Dubai | 24/7 Roadside Assistance',
    description: 'Reliable vehicle towing in Business Bay Dubai. Fast arrival for canal-side breakdowns, office towers, and hotel parking emergencies.',
    heroHeadline: '24/7 Vehicle Recovery in Business Bay',
    heroSubheadline: 'Instant car towing and recovery assistance along Marasi Drive, Al Abraj Street, and Executive Towers in Business Bay.',
    eta: '15 Minutes',
    keyAreasCovered: ['Marasi Drive', 'Al Abraj Street', 'Bay Avenue', 'Executive Towers', 'Canal Front Buildings'],
    popularServices: ['Emergency Car Towing', 'Underground Parking Extraction', 'Dead Battery Jumpstart', 'Flat Tyre Change', 'Fuel Top-Up'],
  },
  'al-barsha': {
    slug: 'al-barsha',
    name: 'Al Barsha & Barsha Heights',
    title: 'Car Towing Al Barsha & Barsha Heights (TECOM) | 24/7 Recovery',
    description: 'Fast car recovery in Al Barsha 1, 2, 3, South, and TECOM / Barsha Heights. 24/7 flatbed towing, battery jumpstart, and tyre repair.',
    heroHeadline: 'Towing & Recovery Service Al Barsha',
    heroSubheadline: '15-minute towing response near Mall of the Emirates, Al Barsha 1, 2, 3, Science Park, and Barsha Heights.',
    eta: '15 Minutes',
    keyAreasCovered: ['Al Barsha 1, 2, 3', 'Barsha South', 'Barsha Heights (TECOM)', 'Mall of the Emirates Area', 'Dubai Science Park'],
    popularServices: ['Flatbed Tow Truck', 'Battery Jumpstart', 'Desert Recovery 4x4', 'Flat Tyre Repair', 'Accident Vehicle Pulling'],
  },
  'deira-bur-dubai': {
    slug: 'deira-bur-dubai',
    name: 'Deira & Bur Dubai',
    title: 'Car Towing Service Deira & Bur Dubai | 24/7 Emergency Assistance',
    description: 'Affordable and fast car recovery in Deira, Bur Dubai, Karama, Rigga, and Airport Road. Available 24/7 for all vehicle types.',
    heroHeadline: '24/7 Car Recovery Deira & Bur Dubai',
    heroSubheadline: 'Quick towing trucks deployed across Deira, Bur Dubai, Al Karama, Port Rashid, and Al Garhoud.',
    eta: '15 - 20 Minutes',
    keyAreasCovered: ['Al Rigga & Muraqqabat', 'Al Karama & Oud Metha', 'Bur Dubai Textile Souk Area', 'Al Garhoud & DXB Airport Road', 'Deira City Centre Area'],
    popularServices: ['Budget Flatbed Towing', 'Commercial Vehicle Recovery', 'Battery Jumpstart', 'Tyre Change Service', 'Fuel Delivery'],
  },
  'desert-offroad-dubai': {
    slug: 'desert-offroad-dubai',
    name: 'Dubai Desert & Off-Road Dunes',
    title: 'Desert Recovery Dubai | 4x4 Off-Road Dune Winching & Rescue',
    description: 'Stuck in Dubai desert sand dunes? Our heavy-duty 4x4 winching rescue team will pull your SUV or dune buggy out safely 24/7.',
    heroHeadline: '24/7 Desert & Off-Road Recovery Dubai',
    heroSubheadline: 'Specialized 4x4 desert pull-out and dune winching service in Al Qudra, Lahbab Red Dunes, Fossil Rock, and Dubai outskirts.',
    eta: '25 - 35 Minutes',
    keyAreasCovered: ['Al Qudra Lakes & Desert', 'Lahbab Red Dunes', 'Fossil Rock Area', 'Half Desert Road E66', 'Al Lisaili & Marmoom'],
    popularServices: ['4x4 Dune Winching', 'Sand Stuck Car Pullout', 'Tyre Deflation/Inflation', 'Desert SUV Towing', 'Emergency GPS Pin Retrieval'],
  },
};
