export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  iconName: string;
  popular?: boolean;
}

export interface BrandModelMap {
  [brand: string]: string[];
}

export interface PriceEstimateTable {
  id: string;
  device: string;
  brand: string;
  service: string;
  price: number;
  duration: string;
  warranty: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Screen' | 'Battery' | 'Hardware' | 'Before & After';
  description: string;
  image: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  device: string;
  repair: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: 'FIXORA',
  suffix: 'MOBILE CARE',
  fullName: 'FIXORA MOBILE CARE',
  tagline: 'Fast. Reliable. Professional.',
  description: 'Premier mobile phone repair and servicing center in Uttara, Dhaka. Fast screen replacement, battery repair, chip-level troubleshooting, and genuine quality parts.',
  address: 'House 12, Road 5, Sector 4, Uttara, Dhaka-1230, Bangladesh',
  landmark: 'Near Rajlakshmi Complex, Uttara',
  phone: '+880 1712-984251',
  phoneDisplay: '+880 1XXX-XXXXXX',
  whatsappNumber: '8801712984251',
  whatsappDisplay: '+880 1XXX-XXXXXX',
  hoursWeekday: 'Saturday – Thursday: 10:00 AM – 9:00 PM',
  hoursFriday: 'Friday: 2:00 PM – 9:00 PM',
  currency: '৳',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'screen',
    name: 'Screen Replacement',
    description: 'Cracked glass, distorted colors, unresponsive touch or damaged OLED/LCD panel replacement with warranty.',
    startingPrice: 1500,
    iconName: 'Smartphone',
    popular: true,
  },
  {
    id: 'battery',
    name: 'Battery Replacement',
    description: 'Fix quick battery drain, unexpected shutdowns, slow charging, or swollen battery with genuine grade cells.',
    startingPrice: 1200,
    iconName: 'BatteryCharging',
    popular: true,
  },
  {
    id: 'charging',
    name: 'Charging Port Repair',
    description: 'Fix loose ports, cable disconnects, moisture detection errors, and burnt Type-C/Lightning connector pins.',
    startingPrice: 800,
    iconName: 'Zap',
  },
  {
    id: 'camera',
    name: 'Camera Repair',
    description: 'Resolve blurred photos, camera shaking, cracked sapphire lenses, black screen viewfinder, and autofocus glitches.',
    startingPrice: 1000,
    iconName: 'Camera',
  },
  {
    id: 'audio',
    name: 'Speaker & Microphone',
    description: 'Fix low call volume, crackling earpiece, silent loudspeaker, or mic issues where callers cannot hear you.',
    startingPrice: 700,
    iconName: 'Volume2',
  },
  {
    id: 'software',
    name: 'Software & OS Issues',
    description: 'Bootloop fix, OS recovery, storage cleanup, system freeze diagnosis, and secure firmware flashing.',
    startingPrice: 500,
    iconName: 'Cpu',
  },
  {
    id: 'water',
    name: 'Water Damage',
    description: 'Ultrasonic motherboard wash, corrosion removal, short-circuit diagnostics, and component recovery service.',
    startingPrice: 1000,
    iconName: 'Droplets',
  },
  {
    id: 'backglass',
    name: 'Back Glass Replacement',
    description: 'Laser removal and precision fitment for shattered glass back covers on iPhone and flagship Android phones.',
    startingPrice: 1500,
    iconName: 'ShieldAlert',
  },
];

export const BRANDS = [
  { name: 'Apple', tag: 'iPhone & iPad Specialists', logoChar: '' },
  { name: 'Samsung', tag: 'Galaxy S, A & Note Series', logoChar: 'S' },
  { name: 'Xiaomi', tag: 'Mi, Poco & Flagship Repair', logoChar: 'Mi' },
  { name: 'Redmi', tag: 'Note & Budget Series Care', logoChar: 'R' },
  { name: 'Realme', tag: 'Number & GT Series Service', logoChar: 'r' },
  { name: 'Oppo', tag: 'Reno & Find Series Care', logoChar: 'O' },
  { name: 'Vivo', tag: 'V & Y Series Screen & Battery', logoChar: 'V' },
  { name: 'OnePlus', tag: 'OxygenOS & Hardware Support', logoChar: '1+' },
];

export const BRAND_MODELS: BrandModelMap = {
  Apple: ['iPhone 15 Pro Max', 'iPhone 15 / 15 Plus', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13 / 13 Pro', 'iPhone 12 / 12 Pro', 'iPhone 11', 'iPhone X / XR / XS', 'iPad Air / Pro'],
  Samsung: ['Galaxy S24 / S24 Ultra', 'Galaxy S23 / S23 FE', 'Galaxy S22 Ultra', 'Galaxy A54 5G', 'Galaxy A34 5G', 'Galaxy A14 / A15', 'Galaxy Note 20 Ultra', 'Galaxy M-series'],
  Xiaomi: ['Xiaomi 13 / 13 Pro', 'Xiaomi 12 / 12X', 'Xiaomi 11T Pro', 'Poco X5 Pro', 'Poco F5 / F4', 'Poco X3 Pro', 'Xiaomi Pad 6'],
  Redmi: ['Redmi Note 13 Pro+ / 13', 'Redmi Note 12 / 12 Pro', 'Redmi Note 11', 'Redmi Note 10 Pro', 'Redmi 12 / 13C', 'Redmi 10A / 9A'],
  Realme: ['Realme 12 Pro+ 5G', 'Realme 11 Pro 5G', 'Realme GT Neo 3/5', 'Realme 10', 'Realme 9 Pro+', 'Realme C55 / C53'],
  Oppo: ['Oppo Reno 11 Pro', 'Oppo Reno 10 5G', 'Oppo Reno 8 / 8 Pro', 'Oppo F25 Pro', 'Oppo F21 Pro', 'Oppo A78 / A58'],
  Vivo: ['Vivo V30 / V30 Pro', 'Vivo V29 / V29e', 'Vivo V27 5G', 'Vivo Y200', 'Vivo Y27 / Y36', 'Vivo X80 / X90'],
  OnePlus: ['OnePlus 12 / 12R', 'OnePlus 11 5G', 'OnePlus 10 Pro', 'OnePlus 9 Pro / 9', 'OnePlus Nord 3', 'OnePlus Nord CE 3 Lite'],
};

export const COMMON_PROBLEMS = [
  { id: 'screen', name: 'Broken Screen / Display Issue', baseMultiplier: 1.0 },
  { id: 'battery', name: 'Battery Draining Fast / Dead', baseMultiplier: 0.5 },
  { id: 'charging', name: 'Charging Port Loose / Not Charging', baseMultiplier: 0.3 },
  { id: 'camera', name: 'Broken Camera / Blurry Lens', baseMultiplier: 0.45 },
  { id: 'speaker', name: 'No Sound / Mic Not Working', baseMultiplier: 0.28 },
  { id: 'backglass', name: 'Cracked Back Glass Cover', baseMultiplier: 0.55 },
  { id: 'water', name: 'Water / Liquid Dropped', baseMultiplier: 0.4 },
  { id: 'software', name: 'Stuck on Logo / Software Issue', baseMultiplier: 0.2 },
];

export const POPULAR_PRICING: PriceEstimateTable[] = [
  {
    id: 'p1',
    device: 'iPhone 13',
    brand: 'Apple',
    service: 'Screen Replacement',
    price: 8500,
    duration: '45 mins',
    warranty: '90 Days Warranty',
  },
  {
    id: 'p2',
    device: 'Samsung Galaxy A54',
    brand: 'Samsung',
    service: 'Super AMOLED Display',
    price: 6000,
    duration: '40 mins',
    warranty: '60 Days Warranty',
  },
  {
    id: 'p3',
    device: 'iPhone Series (11-13)',
    brand: 'Apple',
    service: 'Battery Replacement',
    price: 3500,
    duration: '30 mins',
    warranty: '180 Days Warranty',
  },
  {
    id: 'p4',
    device: 'Samsung A/M Series',
    brand: 'Samsung',
    service: 'Original Grade Battery',
    price: 2500,
    duration: '30 mins',
    warranty: '180 Days Warranty',
  },
  {
    id: 'p5',
    device: 'Universal Type-C / Lightning',
    brand: 'All Brands',
    service: 'Charging Port Repair',
    price: 800,
    duration: '25 mins',
    warranty: '30 Days Warranty',
  },
  {
    id: 'p6',
    device: 'Android / iOS System',
    brand: 'All Brands',
    service: 'Software & OS Recovery',
    price: 500,
    duration: '30 mins',
    warranty: 'Service Guarantee',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Technicians',
    description: 'Skilled professionals with 5+ years of micro-soldering and hands-on repair experience across iOS and Android flagships.',
    iconName: 'Wrench',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear upfront quotation before any work begins. No hidden workbench fees or unexpected repair charges.',
    iconName: 'Receipt',
  },
  {
    title: 'Quality Parts',
    description: 'We source genuine OEM-grade replacement displays, battery packs, and flex cables tested for durability.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Service Warranty',
    description: 'Up to 90 days service warranty on screen and component replacements for peace of mind.',
    iconName: 'BadgeCheck',
  },
  {
    title: 'Fast Turnaround',
    description: 'Most common repairs like screens and batteries are completed within 30 to 60 minutes right before your eyes.',
    iconName: 'Clock',
  },
  {
    title: 'Customer First',
    description: 'Direct communication, free basic diagnosis, and live updates while your gadget is on our workbench.',
    iconName: 'HeartHandshake',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Request',
    description: 'Tell us about your phone model and the problem online or via WhatsApp.',
  },
  {
    step: '02',
    title: 'Diagnosis',
    description: 'Our technician inspects your device and gives a transparent estimate.',
  },
  {
    step: '03',
    title: 'Repair',
    description: 'We service your phone using suitable precision parts in our Uttara lab.',
  },
  {
    step: '04',
    title: 'Pickup',
    description: 'Test your phone thoroughly, receive your warranty invoice, and take it home.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Rafi H.',
    location: 'Sector 3, Uttara',
    device: 'iPhone 13',
    repair: 'Screen Replacement',
    rating: 5,
    comment: 'Got my iPhone screen replaced on the same day. The touch response and True Tone are working like original. Smooth and professional.',
    date: '2 weeks ago',
  },
  {
    id: 't2',
    name: 'Tanvir M.',
    location: 'Sector 7, Uttara',
    device: 'Samsung Galaxy A54',
    repair: 'Charging Port & Speaker',
    rating: 5,
    comment: 'They explained the exact issue and pricing before starting the repair. Done in just 40 minutes while I waited in their clean shop.',
    date: '1 month ago',
  },
  {
    id: 't3',
    name: 'Sadia K.',
    location: 'Sector 11, Uttara',
    device: 'Redmi Note 12 Pro',
    repair: 'Battery Replacement',
    rating: 5,
    comment: 'Battery backup is back to full day like new. Transparent people, honest warranty card, highly recommended for Uttara residents.',
    date: '3 weeks ago',
  },
  {
    id: 't4',
    name: 'Ashiqur Rahman',
    location: 'Sector 9, Uttara',
    device: 'Xiaomi 11T Pro',
    repair: 'Motherboard IC Repair',
    rating: 5,
    comment: 'Other shops said motherboard was dead and unfixable. Fixora diagnosed a shorted capacitor and fixed it at a very reasonable price.',
    date: 'Just recently',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'How long does a typical repair take?',
    answer: 'Common repairs like screen replacements, battery swaps, and charging ports usually take 30 to 60 minutes. Chip-level motherboard diagnosis and severe water damage recovery can take 24 to 48 hours for ultrasonic cleaning and circuit tracing.',
  },
  {
    question: 'Do you provide a service warranty on repairs?',
    answer: 'Yes! We provide 30 to 90 days service warranty depending on the repair type and the replacement parts selected. Screen and battery replacements include written warranty receipts.',
  },
  {
    question: 'Do I need an appointment before coming to Uttara?',
    answer: 'Walk-ins are warmly welcome during shop hours (10:00 AM – 9:00 PM). However, booking an appointment online or letting us know via WhatsApp helps us reserve the required parts for your model so you get immediate priority service.',
  },
  {
    question: 'How do I know the exact repair price?',
    answer: 'Prices shown on our website are starting estimates for standard configurations. When you bring your phone, our technician performs a free preliminary inspection and confirms the exact quotation before starting any work.',
  },
  {
    question: 'Do you repair all smartphone brands and models?',
    answer: 'We support all major brands in Bangladesh: Apple iPhone/iPad, Samsung, Xiaomi, Redmi, Poco, Realme, Oppo, Vivo, OnePlus, and Google Pixel. If your specific model is not listed, message us on WhatsApp and we will check parts availability right away.',
  },
];
