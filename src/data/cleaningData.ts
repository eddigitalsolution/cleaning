export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tag: string;
  priceStart: string;
  iconName: string;
  crewSize: string;
  duration: string;
  surfaceFocus: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: 'Living' | 'Kitchen' | 'Workspace' | 'Bath';
  description: string;
  beforeImg: string;
  afterImg: string;
  highlights: string[];
}

export interface PackageItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
}

export interface CalculatorAddon {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const COMPANY_CONTACT = {
  phone: '+60 11-3071 9502',
  phoneDisplay: '+60 11-3071 9502',
  phoneRaw: '+601130719502',
  telLink: 'tel:+601130719502',
  email: 'concierge@sanctuaryclean.com',
  address: '8400 Wilshire Blvd, Beverly Hills, CA 90211'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'architectural-sanctuary',
    title: 'Architectural Sanctuary',
    subtitle: 'Residential Deep Care',
    description: 'Precision deep cleaning engineered for minimalist luxury residences, custom millwork, raw timber, and sensitive marble finishes.',
    features: ['HEPA micro-particle air filtration', 'Non-toxic organic enzyme formulas', 'Custom stone & marble sealing', 'Art & light fixture detailing'],
    tag: 'MOST POPULAR',
    priceStart: 'RM 280',
    iconName: 'Home',
    crewSize: '2-3 Technicians',
    duration: '4-6 Hours',
    surfaceFocus: 'Carrara Marble, Oiled Walnut, Glass'
  },
  {
    id: 'commercial-monolith',
    title: 'Corporate Monolith',
    subtitle: 'Executive Workspaces',
    description: 'Continuous maintenance and after-hours restoration for executive offices, design studios, art galleries, and architectural headquarters.',
    features: ['After-hours silent service', 'Disinfectant electrostatic misting', 'Curtain wall glass polishing', 'HVAC vent bio-sanitization'],
    tag: 'ENTERPRISE',
    priceStart: 'RM 450',
    iconName: 'Building2',
    crewSize: '3-5 Technicians',
    duration: 'Custom Schedule',
    surfaceFocus: 'Acoustic Felt, Matte Steel, Low-E Glass'
  },
  {
    id: 'deep-remediation',
    title: 'Remediation & Reset',
    subtitle: 'Move-In & Restoration',
    description: 'Complete baseline reset for newly acquired properties, seasonal overhaul, or post-tenancy restoration to pristine origin state.',
    features: ['Post-tenancy deep sanitization', 'Deep grout & tile steam extraction', 'Appliance disassembly deep-clean', 'Bio-enzyme odor neutralization'],
    tag: 'RESTORATION',
    priceStart: 'RM 380',
    iconName: 'Sparkles',
    crewSize: '2-4 Technicians',
    duration: '5-8 Hours',
    surfaceFocus: 'Grout Restoration, Appliances, Sub-flooring'
  },
  {
    id: 'seasonal-overhaul',
    title: 'Post-Construction Detail',
    subtitle: 'Architectural Completion',
    description: 'Extracting microscopic drywall silica dust, paint over-spray, silicone residues, and protective films for new builds and renovations.',
    features: ['Micro-fine dust HEPA extraction', 'Adhesive residue solvent neutralization', 'Window track & frame detailing', 'Final white-glove UV audit'],
    tag: 'SPECIALIZED',
    priceStart: 'RM 520',
    iconName: 'Wrench',
    crewSize: '4-6 Technicians',
    duration: 'Full Day',
    surfaceFocus: 'Fresh Joinery, Glazing, Architectural Fixtures'
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'penthouse-living',
    title: 'Penthouse Living Sanctuary',
    category: 'Living',
    description: 'Restoring a dusty, cluttered minimalist living space to crisp, serene architectural perfection.',
    beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Marble floor polishing', 'Dust extraction', 'Zero visual noise']
  },
  {
    id: 'minimalist-kitchen',
    title: 'Architectural Kitchen & Island',
    category: 'Kitchen',
    description: 'Removing grease buildup and stone haze to reveal mirror-smooth matte quartz countertops and flawless oak cabinetry.',
    beforeImg: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Degreased stainless steel', 'Grout line restoration', 'Matte quartz treatment']
  },
  {
    id: 'executive-office',
    title: 'Design Studio Workspace',
    category: 'Workspace',
    description: 'Acoustic felt vacuuming, cable organization, and streak-free floor-to-ceiling glass wall restoration.',
    beforeImg: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Acoustic felt vacuuming', 'Glass streak removal', 'Sanitized peripherals']
  },
  {
    id: 'spa-bathroom',
    title: 'Monolithic Travertine Bath',
    category: 'Bath',
    description: 'Dissolving limescale deposits, applying water-repellent sealant, and infusing calming botanical essences.',
    beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
    afterImg: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Zero hard-water deposits', 'Crystal clear shower glass', 'Botanical scent infusion']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Spatial Profile',
    subtitle: 'Assessment & Custom Blueprint',
    description: 'We analyze your property’s square footage, material sensitivities (stone, raw wood, brass), and specific sanitization requirements.'
  },
  {
    step: '02',
    title: 'Eco-Enzyme Prep',
    subtitle: 'Non-Toxic Chemical Matrix',
    description: 'We formulate organic, non-toxic cleaning agents tailored specifically to your finishes — safe for children, pets, and delicate art.'
  },
  {
    step: '03',
    title: 'Precision Ritual',
    subtitle: 'Systematic Top-to-Bottom Execution',
    description: 'Our white-glove team works in dual-operator pairs utilizing HEPA 14 micro-extraction tools and steam sanitizers.'
  },
  {
    step: '04',
    title: 'Final Audit',
    subtitle: 'White-Glove Inspection & Botanical Infusion',
    description: 'Every surface undergoes UV inspection followed by a subtle organic cedar & amber botanical aroma infusion.'
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'essential',
    name: 'Essential Sanctuary',
    tagline: 'Bi-weekly or monthly upkeep for pristine modern homes',
    price: 'RM 240',
    period: '/ visit',
    features: [
      'Top-to-bottom surface dusting & wiping',
      'HEPA filtration vacuuming & hard floor wash',
      'Kitchen counter & appliance exterior sanitization',
      'Bathroom deep disinfection & glass polish',
      'Trash removal & linen change'
    ],
    highlighted: false,
    ctaText: 'Select Essential'
  },
  {
    id: 'signature',
    name: 'Signature Restoration',
    badge: 'MOST REQUESTED',
    tagline: 'Full comprehensive deep clean for architectural excellence',
    price: 'RM 380',
    period: '/ visit',
    features: [
      'Everything in Essential Sanctuary',
      'Inside oven, microwave & refrigerator detail',
      'Deep steam sanitization of tile & grout lines',
      'Baseboard, door frame & light fixture wipe down',
      'Balcony glass & interior window cleaning',
      'Botanical aromatherapy ambient infusion'
    ],
    highlighted: true,
    ctaText: 'Reserve Signature'
  },
  {
    id: 'residence-membership',
    name: 'Private Estate Membership',
    tagline: 'Dedicated crew, custom schedule & priority emergency response',
    price: 'RM 890',
    period: '/ month',
    features: [
      'Weekly scheduled maintenance sessions',
      '24-Hour emergency spot remediation',
      'Stone sealant & leather conditioning twice yearly',
      'Dedicated lead technician & zero-rotation staff',
      'Keyless secure access protocol compliance',
      'Custom inventory & restocking management'
    ],
    highlighted: false,
    ctaText: 'Inquire Membership'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Safety & Non-Toxic',
    question: 'Are your cleaning products safe for expensive marble, hardwood, and pets?',
    answer: 'Absolutely. We formulate proprietary pH-neutral, plant-based, non-abrasive solutions specifically for sensitive architectural materials including Carrara marble, matte quartz, unsealed brass, and oiled hardwoods. All formulas are 100% pet-safe, hypoallergenic, and non-toxic.'
  },
  {
    id: 'faq-2',
    category: 'Security & NDAs',
    question: 'How do you handle security, confidentiality, and access for private residences?',
    answer: 'All our technicians undergo rigorous multi-tier background checks, sign strict non-disclosure agreements (NDAs), and are bonded and insured up to RM 5,000,000. We support keyless smart-lock access codes, secure lockboxes, or concierge key dispatch.'
  },
  {
    id: 'faq-3',
    category: 'Operations',
    question: 'What happens if I need to reschedule or request emergency cleaning?',
    answer: 'Rescheduling is seamless with 24 hours notice. Estate Members also receive priority same-day emergency spot remediation for accidental spills or sudden hosting needs.'
  },
  {
    id: 'faq-4',
    category: 'Equipment',
    question: 'Do you bring your own equipment and supplies?',
    answer: 'Yes. Our teams arrive fully equipped with professional-grade HEPA 14 filtration vacuums, commercial steam extractors, fresh color-coded microfiber linens, and non-toxic sanitizing solutions.'
  },
  {
    id: 'faq-5',
    category: 'Security & NDAs',
    question: 'Are your crews background-checked and covered under insurance?',
    answer: 'Every single crew member is a direct W-2 employee with verified identity checks, criminal background screening, drug testing, and continuous professional training. We carry full RM 5,000,000 umbrella commercial liability insurance.'
  },
  {
    id: 'faq-6',
    category: 'Safety & Non-Toxic',
    question: 'Do your products leave any artificial scents or chemical residues behind?',
    answer: 'Never. We leave behind zero synthetic fragrances or chemical residues. At the end of each session, we offer an optional botanical infusion of natural cedar, hinoki wood, or white amber derived from organic plant extracts.'
  }
];

export const SERVICE_AREAS = [
  { code: '50490', area: 'Damansara Heights & Mont Kiara, KL', status: 'Active Daily Crew' },
  { code: '59100', area: 'Bangsar & Kenny Hills, KL', status: 'Active Daily Crew' },
  { code: '10470', area: 'Tanjung Tokong & Gurney Drive, Penang', status: 'Active Daily Crew' },
  { code: '79100', area: 'Iskandar Puteri & East Ledang, JB', status: 'Active Daily Crew' },
  { code: '90210', area: 'Beverly Hills & Bel Air, CA', status: 'Active Daily Crew' },
  { code: '10013', area: 'Tribeca & SoHo, NY', status: 'Active Daily Crew' },
  { code: '33139', area: 'Miami Beach & Star Island, FL', status: 'Active Daily Crew' },
  { code: '81611', area: 'Aspen & Snowmass, CO', status: 'Seasonal Dedicated Crew' }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Sanctuary is the first cleaning service that truly understands architectural materials. Our unsealed French oak floors and Calacatta marble were treated with museum-grade care. There is zero chemical smell—only pure calmness.',
    author: 'Elena Rostova',
    role: 'Managing Principal, Studio Rostova Architecture',
    location: 'Damansara Heights, KL',
    projectType: '8,400 sq ft Modernist Estate',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'As an estate manager managing multiple high-profile residences, security and discretion are non-negotiable. Sanctuary’s bonded crews, biometric NDA protocols, and flawless execution make them our only trusted partner.',
    author: 'Marcus Vance',
    role: 'Private Estate Director',
    location: 'Bangsar, Kuala Lumpur',
    projectType: 'Historic Penthouse Duplex',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'After our extensive 18-month renovation, the drywall dust felt impossible to remove. Sanctuary completed the post-construction detail in 8 hours. Every millwork joint and light fixture was immaculate.',
    author: 'David Chen, AIA',
    role: 'Residential Architect',
    location: 'Mont Kiara, KL',
    projectType: 'Architectural Renovation',
    rating: 5
  }
];

export const CALCULATOR_ADDONS: CalculatorAddon[] = [
  {
    id: 'marble-seal',
    name: 'Carrara & Quartz Hydrophobic Sealing',
    description: 'Nanotech breathable seal preventing citrus, wine, and oil stains on natural stone.',
    price: 95
  },
  {
    id: 'chandelier-detail',
    name: 'Architectural Lighting & Chandelier Polish',
    description: 'Hand-detailing of crystal prisms, brass arms, and high-ceiling recessed fixtures.',
    price: 80
  },
  {
    id: 'wine-cellar',
    name: 'Climate-Controlled Wine Cellar Care',
    description: 'Vibration-free dust extraction and humidity sensor cleaning for delicate vintages.',
    price: 110
  },
  {
    id: 'balcony-glazing',
    name: 'Exterior Balcony & Glass Balustrade Glaze',
    description: 'Hydrophobic streak-free coating on exterior windbreak glass and railings.',
    price: 75
  }
];
