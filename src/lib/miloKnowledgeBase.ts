// Milo AI Comprehensive Knowledge Base
// This contains all training data for the Milo AI assistant

export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  category: string;
  followUp?: string;
}

// RitzYard Platform Knowledge
export const ritzYardKnowledge: KnowledgeEntry[] = [
  {
    keywords: ['ritzyard', 'what is ritzyard', 'about ritzyard', 'tell me about ritzyard'],
    response: "ritzyard is India's leading AI-powered construction material procurement platform. We connect builders, contractors, and enterprises with 500+ verified suppliers across 28 states. Our platform offers instant quotes, real-time pricing, quality assurance, and 98% on-time delivery. Features include AI-powered supplier matching, price intelligence, automated RFQ generation, and end-to-end procurement management.",
    category: 'platform',
    followUp: "Would you like to know about our specific features or how to get started?"
  },
  {
    keywords: ['how does ritzyard work', 'how to use ritzyard', 'using ritzyard'],
    response: "Using ritzyard is simple! 1) Browse our catalog of 1000+ construction materials, 2) Submit a material inquiry with your requirements, 3) Receive competitive quotes from multiple verified suppliers within 2 hours, 4) Compare prices and choose the best offer, 5) Place your order with secure payment, 6) Track delivery in real-time. You can also use me, Milo, to get instant pricing and supplier recommendations!",
    category: 'platform',
    followUp: "Ready to get started with your first order?"
  },
  {
    keywords: ['supplier', 'verified supplier', 'supplier verification', 'how many suppliers'],
    response: "ritzyard has 500+ verified suppliers across 28 Indian states. Every supplier undergoes our rigorous verification process: GST verification, quality certifications check (ISO, BIS), business documentation review, and track record assessment. We maintain a 4.6+ average supplier rating and 98% on-time delivery rate. Top suppliers include Tata Steel, UltraTech, ACC, JSW, Ambuja, and many regional certified suppliers.",
    category: 'platform'
  },
  {
    keywords: ['delivery', 'shipping', 'how long delivery', 'delivery time'],
    response: "ritzyard offers pan-India delivery with real-time tracking. Standard delivery: 3-7 business days. Express delivery (metro cities): 24-48 hours. FREE delivery on orders above ₹50,000. All deliveries include insurance coverage, quality inspection at delivery, and dedicated delivery support. We partner with major logistics providers for reliable shipping.",
    category: 'platform'
  },
  {
    keywords: ['payment', 'payment method', 'how to pay', 'payment options'],
    response: "ritzyard supports multiple payment options: Credit/Debit Cards, Net Banking, UPI (GPay, PhonePe, Paytm), Bank Transfer (NEFT/RTGS), Credit Terms (for verified businesses), and Cash on Delivery (for orders under ₹50,000). All payments are secure with 256-bit encryption. We also offer flexible payment terms for bulk orders.",
    category: 'platform'
  },
  {
    keywords: ['rfq', 'request for quotation', 'quotation', 'quote', 'get quote'],
    response: "I can help you create an RFQ instantly! Just provide: 1) Material type (cement, steel, TMT, bricks, etc.), 2) Required quantity with unit, 3) Delivery location (city/state), 4) Required timeline. You'll receive competitive quotes from 3-5 verified suppliers within 2 hours. Would you like to create an RFQ now?",
    category: 'platform',
    followUp: "What material do you need a quote for?"
  },
  {
    keywords: ['contact', 'support', 'help', 'customer service', 'phone', 'email'],
    response: "You can reach ritzyard support through: Email: support@ritzyard.com, WhatsApp: Available 24/7 for instant support, Contact form on our website, or chat with me (Milo) anytime! Our support team responds within 2 hours during business hours. For urgent procurement needs, use our WhatsApp for fastest response.",
    category: 'platform'
  },
  {
    keywords: ['milo', 'who are you', 'what can you do', 'your name'],
    response: "I'm Milo, your AI-powered procurement assistant at ritzyard! I can help you with: Real-time material pricing, Supplier recommendations, Creating RFQs, Delivery tracking, Market intelligence, Material specifications, and answering any questions about construction materials. I'm available 24/7 and can communicate in both English and Hindi. How can I assist you today?",
    category: 'platform'
  }
];

// Construction Materials Knowledge
export const materialsKnowledge: KnowledgeEntry[] = [
  // Cement
  {
    keywords: ['cement', 'cement price', 'cement types', 'cement rate'],
    response: "Cement is available in several types:\n\n• **OPC (Ordinary Portland Cement)**: Grade 43 (₹340-380/bag), Grade 53 (₹360-420/bag) - Best for structural work\n• **PPC (Portland Pozzolana Cement)**: ₹320-400/bag - Ideal for plastering, waterproofing\n• **PSC (Portland Slag Cement)**: ₹330-410/bag - Good for mass concreting\n• **White Cement**: ₹550-700/bag - For decorative work\n\nTop brands: UltraTech, ACC, Ambuja, JK Cement, Shree Cement, Dalmia. Bulk orders (100+ bags) get 5-12% discount.",
    category: 'materials',
    followUp: "Which type of cement do you need? I can provide specific quotes."
  },
  {
    keywords: ['opc', 'opc cement', 'ordinary portland cement', 'opc 43', 'opc 53'],
    response: "OPC (Ordinary Portland Cement) comes in two main grades:\n\n• **OPC 43 Grade**: ₹340-380/bag, setting time 30-600 min, compressive strength 43 MPa. Best for general construction, plastering.\n• **OPC 53 Grade**: ₹360-420/bag, faster setting, strength 53 MPa. Ideal for RCC, high-rise buildings, bridges.\n\nOPC is preferred for structural work requiring quick strength gain. Not recommended for mass concreting due to heat generation.",
    category: 'materials'
  },
  {
    keywords: ['ppc', 'ppc cement', 'pozzolana cement'],
    response: "PPC (Portland Pozzolana Cement) costs ₹320-400/bag. It contains fly ash/pozzolanic materials making it:\n\n• More durable and waterproof\n• Lower heat of hydration\n• Better workability\n• Eco-friendly (uses industrial waste)\n\nIdeal for: Plastering, waterproofing, marine structures, mass concreting. Slower initial strength but gains strength over time. Major brands: UltraTech PPC, ACC Gold, Ambuja Plus.",
    category: 'materials'
  },
  // Steel & TMT
  {
    keywords: ['steel', 'tmt', 'tmt bars', 'steel bars', 'rebar', 'reinforcement'],
    response: "TMT Steel Bars (Thermo-Mechanically Treated) are essential for RCC construction:\n\n**Grades & Prices:**\n• Fe 415: ₹48-54/kg - Standard construction\n• Fe 500: ₹50-56/kg - High-rise buildings (most popular)\n• Fe 550: ₹52-58/kg - Heavy structures, bridges\n• Fe 600: ₹55-62/kg - Special applications\n\n**Sizes:** 8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm\n\n**Top Brands:** Tata Tiscon, JSW Neosteel, SAIL TMT, Vizag Steel, Kamdhenu\n\nBulk orders (5+ tons) get 2-5% discount. Delivery in 3-5 days.",
    category: 'materials',
    followUp: "What grade and size do you need? I can get you competitive quotes."
  },
  {
    keywords: ['fe 500', 'fe500', 'fe 500d', 'fe500d'],
    response: "Fe 500/Fe 500D is the most popular TMT grade in India:\n\n• **Price:** ₹50-56/kg (varies by brand & region)\n• **Yield Strength:** 500 N/mm² minimum\n• **Elongation:** 12% minimum (Fe 500D has 16%)\n• **Bendability:** Can bend at 3D without cracks\n\nFe 500D is earthquake-resistant with higher ductility. Recommended for:\n- High-rise buildings (10+ floors)\n- Commercial complexes\n- Seismic Zone III, IV, V areas\n\nTop Fe 500 brands: Tata Tiscon 500D, JSW Neosteel, SAIL TMT.",
    category: 'materials'
  },
  // Bricks
  {
    keywords: ['brick', 'bricks', 'red brick', 'building blocks'],
    response: "Bricks and blocks available at ritzyard:\n\n• **Red Clay Bricks:** ₹6-9/piece - Traditional, good insulation\n• **Fly Ash Bricks:** ₹3.5-5.5/piece - Lightweight, uniform, eco-friendly\n• **AAC Blocks:** ₹45-70/block - Lightweight, insulating, faster construction\n• **Concrete Blocks:** ₹25-45/block - Strong, durable\n• **Hollow Blocks:** ₹30-50/block - Thermal insulation\n\nMinimum order: 5000 pieces. Free delivery on 10,000+ orders.\n\nAAC blocks are trending for modern construction - 50% faster laying, better insulation.",
    category: 'materials',
    followUp: "Which type would suit your project? I can explain the pros and cons."
  },
  {
    keywords: ['aac', 'aac blocks', 'autoclaved aerated concrete'],
    response: "AAC (Autoclaved Aerated Concrete) Blocks:\n\n• **Price:** ₹45-70 per block (600x200x100mm standard)\n• **Weight:** 50-60% lighter than clay bricks\n• **Strength:** 3-4.5 N/mm² compressive strength\n\n**Advantages:**\n- 50% faster construction\n- Better thermal insulation (reduces AC costs)\n- Fire resistant (4 hours rating)\n- Sound insulation\n- Earthquake resistant\n- Eco-friendly\n\n**Brands:** Magicrete, JK Lakshmi, HIL, Ultratech AAC\n\nIdeal for: High-rise buildings, villas, commercial spaces.",
    category: 'materials'
  },
  // Sand & Aggregates
  {
    keywords: ['sand', 'river sand', 'm sand', 'manufactured sand', 'construction sand'],
    response: "Sand types for construction:\n\n• **River Sand:** ₹45-65/cft - Natural, good for plastering. Limited availability.\n• **M Sand (Manufactured Sand):** ₹35-50/cft - Crushed from rocks, consistent quality, eco-friendly alternative.\n• **Pit Sand:** ₹30-45/cft - For mortar, foundations.\n\n**M Sand Grades:**\n- Zone II: For concrete (₹35-45/cft)\n- Zone III: For plastering (₹40-50/cft)\n\nM Sand is increasingly preferred due to river sand mining restrictions. It offers consistent grading and zero impurities.",
    category: 'materials'
  },
  {
    keywords: ['aggregate', 'aggregates', 'stone aggregate', 'grit', 'metal', 'jelly'],
    response: "Construction Aggregates:\n\n• **20mm Aggregate:** ₹55-75/cft - Standard for concrete\n• **10mm Aggregate:** ₹60-80/cft - For thin sections, plastering\n• **40mm Aggregate:** ₹50-65/cft - Foundations, mass concreting\n• **Stone Dust:** ₹25-35/cft - Filling, leveling\n• **Gravel:** ₹40-55/cft - Drainage, pathways\n\nQuality check: Aggregates should be clean, angular, well-graded. We source from certified crushers only.",
    category: 'materials'
  },
  // Pipes & Plumbing
  {
    keywords: ['pipe', 'pipes', 'pvc pipe', 'cpvc', 'plumbing', 'water pipe'],
    response: "Plumbing Pipes available:\n\n• **PVC Pipes:** ₹30-120/meter - Drainage, sewage\n• **CPVC Pipes:** ₹50-150/meter - Hot/cold water supply\n• **UPVC Pipes:** ₹40-130/meter - Pressure applications\n• **GI Pipes:** ₹150-400/meter - Water supply, structural\n• **PPR Pipes:** ₹60-180/meter - Hot water, industrial\n\n**Top Brands:** Supreme, Astral, Finolex, Prince, Ashirvad\n\nChoose CPVC for hot water (up to 93°C), PVC for cold water and drainage.",
    category: 'materials'
  },
  // Paint
  {
    keywords: ['paint', 'paints', 'wall paint', 'exterior paint', 'interior paint'],
    response: "Paint categories and prices:\n\n**Interior Paints:**\n• Distemper: ₹150-300/litre - Economy\n• Emulsion: ₹250-500/litre - Mid-range\n• Premium Emulsion: ₹400-800/litre - High quality\n\n**Exterior Paints:**\n• Exterior Emulsion: ₹350-600/litre\n• Weatherproof: ₹450-900/litre\n• Texture Paint: ₹500-1200/litre\n\n**Top Brands:** Asian Paints, Berger, Nerolac, Dulux, Indigo\n\nCoverage: 100-120 sq.ft/litre (2 coats). Premium paints last 5-7 years.",
    category: 'materials'
  },
  // Tiles
  {
    keywords: ['tile', 'tiles', 'floor tiles', 'wall tiles', 'ceramic', 'vitrified'],
    response: "Tiles available at ritzyard:\n\n• **Ceramic Tiles:** ₹25-60/sq.ft - Walls, light traffic areas\n• **Vitrified Tiles:** ₹40-150/sq.ft - Floors, commercial spaces\n• **Porcelain Tiles:** ₹60-200/sq.ft - Premium, high durability\n• **Natural Stone:** ₹80-500/sq.ft - Marble, granite, slate\n• **Parking Tiles:** ₹35-80/sq.ft - Heavy-duty outdoor\n\n**Popular Sizes:** 2x2 ft, 2x4 ft, 4x4 ft\n\n**Brands:** Kajaria, Somany, Johnson, Nitco, Orient Bell\n\nVitrified tiles are most popular - low water absorption, scratch resistant.",
    category: 'materials'
  },
  // Plywood & Wood
  {
    keywords: ['plywood', 'wood', 'timber', 'furniture board', 'mdf', 'particle board'],
    response: "Wood & Board products:\n\n• **Commercial Plywood:** ₹45-70/sq.ft - General furniture\n• **BWR Plywood:** ₹65-100/sq.ft - Boiling water resistant\n• **Marine Plywood:** ₹90-150/sq.ft - Waterproof, exterior\n• **MDF Board:** ₹35-55/sq.ft - Smooth finish, interior\n• **Particle Board:** ₹25-40/sq.ft - Economy option\n• **Block Board:** ₹55-85/sq.ft - Doors, partitions\n\n**Thickness:** 6mm, 9mm, 12mm, 18mm, 25mm\n\n**Brands:** Century, Greenply, Kitply, Archid, Merino",
    category: 'materials'
  },
  // Electrical
  {
    keywords: ['electrical', 'wire', 'wires', 'cable', 'cables', 'electrical wire'],
    response: "Electrical wires and cables:\n\n• **House Wiring (FR):** ₹1200-2500/coil (90m) - 1.5/2.5 sq.mm\n• **Industrial Cable:** ₹80-300/meter - Various sizes\n• **Armoured Cable:** ₹150-500/meter - Underground\n• **Flexible Wire:** ₹50-150/meter - Appliances\n\n**Wire Sizes:** 0.75, 1.0, 1.5, 2.5, 4.0, 6.0 sq.mm\n\n**Brands:** Havells, Polycab, Finolex, V-Guard, KEI\n\nAlways use ISI marked, FR (Fire Retardant) wires. Copper > Aluminium for safety.",
    category: 'materials'
  },
  // MS Steel Products
  {
    keywords: ['ms', 'ms pipe', 'ms angle', 'ms channel', 'mild steel', 'structural steel'],
    response: "MS (Mild Steel) Products:\n\n• **MS Angles:** ₹55-65/kg - Frames, structures\n• **MS Channels:** ₹58-68/kg - Beams, supports\n• **MS Pipes (Round):** ₹60-75/kg - Scaffolding, railings\n• **MS Pipes (Square):** ₹65-80/kg - Furniture, gates\n• **MS Sheets:** ₹65-80/kg - Fabrication\n• **MS Flats:** ₹58-68/kg - Grills, frames\n\n**Common Sizes:** Angles (25x25 to 100x100mm), Channels (75mm to 300mm)\n\nMS is versatile, weldable, and cost-effective for structural applications.",
    category: 'materials'
  },
  // Stainless Steel
  {
    keywords: ['stainless steel', 'ss', 'ss pipe', 'ss sheet', 'ss 304', 'ss 316'],
    response: "Stainless Steel Products:\n\n• **SS 304 Grade:** ₹180-220/kg - General purpose, most common\n• **SS 316 Grade:** ₹250-300/kg - Marine, chemical resistant\n• **SS 202 Grade:** ₹150-180/kg - Economy option\n\n**Products:**\n- SS Pipes: ₹200-400/kg\n- SS Sheets: ₹180-280/kg\n- SS Rods: ₹190-250/kg\n\nSS 304 is ideal for kitchen, railings, decorative. SS 316 for coastal areas, chemical industries. Both are corrosion resistant and durable.",
    category: 'materials'
  }
];

// General Knowledge Base
export const generalKnowledge: KnowledgeEntry[] = [
  // Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! I'm Milo, your AI procurement assistant at ritzyard. I can help you with construction material pricing, supplier recommendations, RFQ creation, market insights, and answer any questions you have. What can I assist you with today?",
    category: 'greeting'
  },
  {
    keywords: ['how are you', 'how do you do', 'whats up', "what's up"],
    response: "I'm functioning at 100% and ready to help you! As an AI assistant, I'm constantly learning about construction materials and market trends. I can help you find the best materials at competitive prices. What are you looking for today?",
    category: 'greeting'
  },
  {
    keywords: ['thank', 'thanks', 'thank you', 'appreciated'],
    response: "You're welcome! I'm happy to help. Feel free to ask me anything about construction materials, pricing, suppliers, or any other questions. I'm here 24/7 to assist you with your procurement needs!",
    category: 'greeting'
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'later'],
    response: "Goodbye! Thank you for chatting with me. Remember, I'm available 24/7 whenever you need help with construction materials or procurement. Visit ritzyard.com anytime for the best deals. Take care!",
    category: 'greeting'
  },
  // Geographic Knowledge
  {
    keywords: ['india', 'about india'],
    response: "India is the world's largest democracy with 1.4+ billion people. Key facts:\n\n• **Capital:** New Delhi\n• **Financial Hub:** Mumbai\n• **Tech Center:** Bangalore\n• **States:** 28 states + 8 UTs\n• **Economy:** 5th largest globally\n\nIndia's construction industry is valued at $700+ billion, growing 7-8% annually. ritzyard operates across all 28 states with 500+ verified suppliers.",
    category: 'geography'
  },
  {
    keywords: ['china', 'about china'],
    response: "China is the world's second-largest economy and most populous country:\n\n• **Capital:** Beijing\n• **Financial Hub:** Shanghai\n• **Population:** 1.4 billion\n• **Economy:** $18 trillion GDP\n\nChina is the world's largest producer of cement, steel, and construction materials. Many raw materials used in Indian construction are imported from China.",
    category: 'geography'
  },
  {
    keywords: ['dubai', 'uae', 'about dubai'],
    response: "Dubai is the most populous city in the United Arab Emirates:\n\n• **Country:** UAE\n• **Famous For:** Burj Khalifa (world's tallest building), luxury real estate\n• **Population:** 3.5 million\n• **Economy:** Tourism, trade, real estate\n\nDubai is known for innovative construction projects and is a major hub for construction material trade in the Middle East.",
    category: 'geography'
  },
  {
    keywords: ['usa', 'america', 'united states'],
    response: "The United States of America is the world's largest economy:\n\n• **Capital:** Washington D.C.\n• **Financial Hub:** New York City\n• **Tech Hub:** Silicon Valley\n• **Population:** 330 million\n• **GDP:** $25 trillion\n\nThe USA has one of the most developed construction industries with advanced building technologies and standards.",
    category: 'geography'
  },
  // Weather
  {
    keywords: ['weather', 'temperature', 'climate'],
    response: "I don't have real-time weather data, but I can tell you that weather affects construction material selection:\n\n• **Hot Climate:** Use heat-resistant materials, PPC cement\n• **Rainy Areas:** Waterproof materials, quick-setting cement\n• **Cold Regions:** Frost-resistant concrete additives\n• **Coastal Areas:** SS 316 grade steel, marine plywood\n\nWould you like material recommendations for your specific location?",
    category: 'general'
  },
  // Time
  {
    keywords: ['time', 'what time', 'current time', 'date', 'today'],
    response: "I don't have access to real-time clock, but I can tell you that ritzyard operates 24/7! Our platform is always available for material inquiries, and I'm here to assist you anytime. Business hours for customer support are 9 AM to 8 PM IST, but you can reach us via WhatsApp 24/7.",
    category: 'general'
  },
  // Construction Tips
  {
    keywords: ['construction tip', 'building tip', 'construction advice'],
    response: "Here are some valuable construction tips:\n\n1. **Plan thoroughly** before starting - avoid costly changes later\n2. **Quality over price** - cheap materials cost more in repairs\n3. **Verify suppliers** - check certifications and reviews\n4. **Weather-proof** your materials - store cement, steel properly\n5. **Buy in bulk** - save 5-15% on large orders\n6. **Use modern materials** - AAC blocks, M-sand are efficient\n7. **Get multiple quotes** - compare at least 3 suppliers\n\nWant specific advice for your project?",
    category: 'tips'
  },
  // Calculator/Estimation
  {
    keywords: ['calculate', 'calculator', 'estimation', 'how much', 'quantity'],
    response: "I can help you estimate material quantities! Common calculations:\n\n• **Cement:** 1 bag = 50 kg, covers ~1.25 sq.m plaster\n• **Steel:** 1% of concrete volume for slabs, 2.5% for columns\n• **Bricks:** ~500 bricks per 100 sq.ft wall\n• **Sand:** 1 cft sand per 3 bags cement\n• **Paint:** 1 litre covers ~100-120 sq.ft (2 coats)\n\nTell me your project dimensions, and I'll calculate the exact quantities needed!",
    category: 'calculator'
  },
  // Quality Standards
  {
    keywords: ['quality', 'standard', 'certification', 'bis', 'iso', 'is code'],
    response: "Quality standards for construction materials in India:\n\n• **Cement:** IS 269 (OPC), IS 1489 (PPC), ISI mark mandatory\n• **Steel/TMT:** IS 1786, BIS certification required\n• **Bricks:** IS 1077 (clay), IS 12894 (fly ash)\n• **Plywood:** IS 303 (MR), IS 710 (BWR/Marine)\n• **Pipes:** IS 4985 (PVC), IS 15778 (CPVC)\n\nAlways verify ISI/BIS mark before purchasing. ritzyard only works with certified suppliers.",
    category: 'quality'
  },
  // Jokes/Fun
  {
    keywords: ['joke', 'funny', 'tell me a joke', 'make me laugh'],
    response: "Here's a construction joke for you! 😄\n\nWhy did the construction worker turn down a promotion? Because he didn't want to raise the roof!\n\nOkay, that was pretty bad. But you know what's not a joke? Getting the best construction material prices on ritzyard! How can I help you with your material needs?",
    category: 'fun'
  },
  // Math
  {
    keywords: ['math', 'mathematics', 'calculate number', 'addition', 'multiply'],
    response: "While I'm primarily a construction assistant, I can help with construction-related calculations! Need help with:\n\n• Material quantity estimation\n• Cost calculation\n• Area/volume computation\n• Conversion between units\n\nJust tell me what you're building, the dimensions, and I'll calculate material requirements!",
    category: 'math'
  },
  // Comparison
  {
    keywords: ['compare', 'difference', 'versus', 'vs', 'which is better'],
    response: "I'd be happy to compare! Some common construction material comparisons I can help with:\n\n• OPC vs PPC cement\n• Red bricks vs AAC blocks\n• River sand vs M-sand\n• Fe 500 vs Fe 550 TMT\n• Ceramic vs Vitrified tiles\n• Marine vs BWR plywood\n\nWhich materials would you like me to compare?",
    category: 'comparison'
  },
  // Price Negotiation
  {
    keywords: ['negotiate', 'discount', 'bargain', 'better price', 'reduce price'],
    response: "Here are tips to get the best prices on construction materials:\n\n1. **Buy in bulk** - 5-15% discount on large orders\n2. **Compare multiple suppliers** - We show you 3-5 quotes\n3. **Off-season buying** - Prices drop during monsoon\n4. **Cash payment** - Some suppliers offer 2-3% discount\n5. **Long-term relationship** - Regular buyers get priority pricing\n6. **Use ritzyard** - Our AI finds you the best deals automatically!\n\nWant me to find competitive quotes for you?",
    category: 'tips'
  }
];

// Supplier Portal & Onboarding Knowledge
export const supplierPortalKnowledge: KnowledgeEntry[] = [
  // Seller Onboarding
  {
    keywords: ['become seller', 'become supplier', 'how to sell', 'seller registration', 'supplier registration', 'join as seller', 'seller onboarding', 'supplier onboarding'],
    response: "Great choice! Here's how to become a seller on ritzyard:\n\n**Step 1: Register**\n- Visit supplierportal.ritzyard.com\n- Click 'Join as Supplier' button\n- Fill in your business details\n\n**Step 2: Verification**\n- Upload GST certificate\n- Business registration documents\n- Quality certifications (ISO, BIS if available)\n- Bank account details\n\n**Step 3: Profile Setup**\n- Add product catalog\n- Set pricing and MOQ\n- Upload product images\n- Add delivery zones\n\n**Step 4: Go Live**\n- Profile reviewed within 24-48 hours\n- Start receiving buyer inquiries!\n\nBenefits: Access to 10,000+ verified buyers, zero listing fees, automated lead generation!",
    category: 'supplier',
    followUp: "Would you like me to guide you through the registration process?"
  },
  {
    keywords: ['supplier portal', 'seller portal', 'vendor portal', 'supplier dashboard'],
    response: "ritzyard Supplier Portal (supplierportal.ritzyard.com) is your business hub:\n\n**Dashboard Features:**\n- Real-time order management\n- Buyer inquiry notifications\n- Sales analytics & reports\n- Inventory management\n- Payment tracking\n- Rating & review management\n\n**Key Benefits:**\n- Zero commission on first 10 orders\n- Direct buyer communication\n- Pan-India market access\n- Verified buyer leads\n- Fast payment settlements (T+3)\n\nLogin to manage your supplier account or register as new supplier!",
    category: 'supplier'
  },
  {
    keywords: ['seller requirements', 'supplier requirements', 'documents needed seller', 'seller documents'],
    response: "Documents required for supplier registration:\n\n**Mandatory Documents:**\n1. GST Certificate\n2. PAN Card (Business/Individual)\n3. Business Registration (Proprietorship/Partnership/Pvt Ltd)\n4. Bank Account Details\n5. Address Proof\n\n**Optional (Recommended):**\n- ISO Certification\n- BIS License\n- Factory/Warehouse photos\n- Product quality certificates\n- Previous client references\n\n**Verification Timeline:** 24-48 hours\n\nSuppliers with certifications get 'Verified' badge and higher visibility!",
    category: 'supplier'
  },
  {
    keywords: ['seller benefits', 'supplier benefits', 'why sell on ritzyard', 'seller advantages'],
    response: "Benefits of selling on ritzyard:\n\n**Business Growth:**\n- Access to 10,000+ verified buyers\n- Pan-India market reach\n- Automated lead generation\n\n**Financial Benefits:**\n- Zero listing fees\n- Low commission (5-8%)\n- Fast payments (T+3 settlement)\n- Credit facility available\n\n**Operational Support:**\n- Free supplier dashboard\n- Order management tools\n- Logistics support\n- Dedicated account manager\n\n**Marketing:**\n- Featured supplier program\n- Promotional campaigns\n- SEO optimized listings\n\nTop suppliers earn ₹50L+ monthly on ritzyard!",
    category: 'supplier'
  },
  {
    keywords: ['seller commission', 'supplier commission', 'ritzyard fees', 'platform fees'],
    response: "ritzyard commission structure for sellers:\n\n**Standard Commission:**\n- Cement/Steel: 5%\n- Bricks/Sand/Aggregates: 6%\n- Plumbing/Electrical: 7%\n- Paints/Tiles: 8%\n\n**No Commission On:**\n- First 10 orders (new sellers)\n- Direct repeat buyers\n- Bulk orders above ₹10 Lakhs\n\n**Other Fees:**\n- Registration: FREE\n- Listing: FREE\n- Payment gateway: 2% (buyer pays)\n\nCompare to other platforms charging 15-20%! ritzyard offers best seller economics.",
    category: 'supplier'
  },
  {
    keywords: ['seller dashboard', 'supplier dashboard', 'manage orders seller', 'seller account'],
    response: "Your Seller Dashboard features:\n\n**Order Management:**\n- View new orders & inquiries\n- Accept/decline orders\n- Update order status\n- Print invoices & challans\n\n**Inventory:**\n- Add/edit products\n- Update prices & stock\n- Set MOQ and delivery time\n\n**Analytics:**\n- Sales reports\n- Revenue tracking\n- Top performing products\n- Buyer demographics\n\n**Communication:**\n- Chat with buyers\n- WhatsApp notifications\n- Email alerts\n\nAccess at supplierportal.ritzyard.com",
    category: 'supplier'
  },
  // Buyer Guide
  {
    keywords: ['buyer', 'how to buy', 'purchase', 'buying guide', 'buyer registration'],
    response: "Buying on ritzyard is simple:\n\n**Step 1: Browse or Search**\n- Explore 1000+ construction materials\n- Use filters (category, price, location)\n- Compare multiple suppliers\n\n**Step 2: Request Quote**\n- Submit material inquiry\n- Specify quantity & delivery location\n- Receive 3-5 quotes within 2 hours\n\n**Step 3: Compare & Select**\n- Review supplier ratings\n- Check certifications\n- Compare prices & delivery time\n\n**Step 4: Order & Pay**\n- Place order online\n- Multiple payment options\n- Track delivery in real-time\n\nNo registration required to browse. Sign up for exclusive deals & faster ordering!",
    category: 'buyer',
    followUp: "What material are you looking to buy?"
  },
  {
    keywords: ['buyer benefits', 'why buy ritzyard', 'buyer advantages'],
    response: "Benefits of buying on ritzyard:\n\n**Best Prices:**\n- Direct from verified suppliers\n- Compare multiple quotes\n- Bulk discounts up to 15%\n\n**Quality Assurance:**\n- 500+ verified suppliers\n- ISI/BIS certified products\n- Quality inspection at delivery\n\n**Convenience:**\n- 1000+ materials catalog\n- Instant AI quotes (Milo)\n- Pan-India delivery\n- Real-time tracking\n\n**Support:**\n- 24/7 customer support\n- Easy returns & refunds\n- Credit terms for businesses\n\nSave 10-20% on construction materials!",
    category: 'buyer'
  },
  // Buyer vs Seller
  {
    keywords: ['buyer seller difference', 'buyer vs seller', 'seller vs buyer', 'difference buyer seller'],
    response: "**Buyer vs Seller on ritzyard:**\n\n**BUYER (Construction Professionals):**\n- Browse & purchase materials\n- Request quotes from suppliers\n- Compare prices & suppliers\n- Track orders & deliveries\n- Access: ritzyard.com\n\n**SELLER (Suppliers/Manufacturers):**\n- List products for sale\n- Receive buyer inquiries\n- Manage orders & inventory\n- Track payments & analytics\n- Access: supplierportal.ritzyard.com\n\n**Who Should Register?**\n- Contractors, Builders → Buyer\n- Manufacturers, Dealers → Seller\n- Both? Register on both platforms!\n\nAre you a buyer or seller?",
    category: 'platform',
    followUp: "Would you like help with buyer registration or seller onboarding?"
  },
  {
    keywords: ['register', 'sign up', 'create account', 'registration'],
    response: "Registration options on ritzyard:\n\n**FOR BUYERS:**\n- Visit ritzyard.com\n- Click 'Sign Up' or 'Register'\n- Enter mobile number & OTP\n- Add business details (optional)\n- Start buying immediately!\n\n**FOR SELLERS:**\n- Visit supplierportal.ritzyard.com\n- Click 'Join as Supplier'\n- Complete business verification\n- Upload documents (GST, PAN)\n- Add product catalog\n- Go live in 24-48 hours!\n\nBuyer registration: Instant\nSeller verification: 24-48 hours\n\nWhich type of account do you need?",
    category: 'platform'
  },
  // Seller Support
  {
    keywords: ['seller support', 'supplier support', 'seller help', 'seller problem'],
    response: "Seller Support at ritzyard:\n\n**Contact Options:**\n- Email: seller-support@ritzyard.com\n- WhatsApp: Dedicated seller helpline\n- Dashboard: Raise support ticket\n\n**Common Issues We Help With:**\n- Account verification\n- Product listing assistance\n- Order management\n- Payment queries\n- Returns & disputes\n\n**Resources:**\n- Seller training videos\n- FAQ section\n- Best practices guide\n\nDedicated account managers for sellers with 50+ monthly orders!",
    category: 'supplier'
  },
  {
    keywords: ['seller payment', 'supplier payment', 'when payment', 'payment settlement'],
    response: "Seller Payment & Settlement:\n\n**Settlement Timeline:**\n- Standard: T+3 (3 days after delivery)\n- Premium Sellers: T+1 (next day)\n\n**Payment Methods:**\n- Direct bank transfer (NEFT/RTGS)\n- UPI\n\n**Payment Dashboard:**\n- View pending settlements\n- Download payment reports\n- GST invoice generation\n- TDS certificates\n\n**Payout Schedule:**\n- Daily settlements available\n- Minimum payout: ₹1000\n\nNo hidden charges. Transparent commission deduction shown!",
    category: 'supplier'
  },
  {
    keywords: ['add product', 'list product', 'product listing', 'how to list'],
    response: "How to list products on ritzyard:\n\n**Step 1: Login to Supplier Dashboard**\n\n**Step 2: Go to 'Products' → 'Add New'**\n\n**Step 3: Fill Product Details:**\n- Category (Cement/Steel/Bricks etc.)\n- Product name & description\n- Brand (if applicable)\n- Price per unit\n- MOQ (Minimum Order Quantity)\n- Available stock\n- Delivery time\n\n**Step 4: Add Images**\n- High quality product photos\n- Certificates (if any)\n\n**Step 5: Submit for Review**\n- Products go live within 2-4 hours\n\nTip: Complete listings with good images get 3x more inquiries!",
    category: 'supplier'
  }
];

// General Difference & Comparison Knowledge
export const comparisonKnowledge: KnowledgeEntry[] = [
  {
    keywords: ['opc vs ppc', 'ppc vs opc', 'opc ppc difference'],
    response: "**OPC vs PPC Cement:**\n\n| Feature | OPC | PPC |\n|---------|-----|-----|\n| Full Form | Ordinary Portland Cement | Portland Pozzolana Cement |\n| Price | ₹360-420/bag | ₹320-400/bag |\n| Strength | Fast early strength | Slower, gains over time |\n| Heat | High heat generation | Low heat |\n| Durability | Standard | More durable |\n| Use | Structural RCC | Plastering, waterproofing |\n\n**When to use OPC:** High-rise buildings, quick construction\n**When to use PPC:** Mass concreting, marine structures, eco-projects",
    category: 'comparison'
  },
  {
    keywords: ['red brick vs aac', 'aac vs red brick', 'brick block difference', 'traditional vs aac'],
    response: "**Red Bricks vs AAC Blocks:**\n\n| Feature | Red Bricks | AAC Blocks |\n|---------|------------|------------|\n| Price | ₹6-9/piece | ₹45-70/block |\n| Weight | Heavy | 50% lighter |\n| Construction Speed | Slow | 3x faster |\n| Thermal Insulation | Low | Excellent |\n| Strength | 3.5 N/mm² | 3-4.5 N/mm² |\n| Fire Resistance | 2 hours | 4+ hours |\n\n**Choose Red Bricks:** Budget projects, traditional look\n**Choose AAC:** Modern buildings, faster construction, better insulation",
    category: 'comparison'
  },
  {
    keywords: ['river sand vs m sand', 'm sand vs river sand', 'sand difference', 'natural vs manufactured'],
    response: "**River Sand vs M-Sand:**\n\n| Feature | River Sand | M-Sand |\n|---------|------------|--------|\n| Price | ₹45-65/cft | ₹35-50/cft |\n| Availability | Scarce (mining banned) | Abundant |\n| Quality | Variable, impurities | Consistent, clean |\n| Shape | Rounded | Angular |\n| Strength | Standard | 10-15% more |\n| Eco-friendly | No (river damage) | Yes |\n\n**Verdict:** M-Sand is recommended - cheaper, consistent quality, eco-friendly.\nMany states have banned river sand mining.",
    category: 'comparison'
  },
  {
    keywords: ['ceramic vs vitrified', 'vitrified vs ceramic', 'tile difference'],
    response: "**Ceramic vs Vitrified Tiles:**\n\n| Feature | Ceramic | Vitrified |\n|---------|---------|-----------|\n| Price | ₹25-60/sq.ft | ₹40-150/sq.ft |\n| Strength | Moderate | High |\n| Water Absorption | 10-20% | <0.5% |\n| Scratch Resistance | Low | High |\n| Best For | Walls, light areas | Floors, commercial |\n| Durability | 10-15 years | 20+ years |\n\n**Choose Ceramic:** Walls, bathrooms, budget areas\n**Choose Vitrified:** Living rooms, commercial, heavy traffic",
    category: 'comparison'
  },
  {
    keywords: ['fe 500 vs fe 550', 'tmt grade difference', 'steel grade comparison'],
    response: "**Fe 500 vs Fe 550 TMT Bars:**\n\n| Feature | Fe 500 | Fe 550 |\n|---------|--------|--------|\n| Price | ₹50-56/kg | ₹52-58/kg |\n| Yield Strength | 500 N/mm² | 550 N/mm² |\n| Elongation | 12% | 10% |\n| Best For | General buildings | Heavy structures |\n| Ductility | Higher | Moderate |\n\n**Fe 500:** Residential buildings, standard construction\n**Fe 500D:** Earthquake zones (better ductility)\n**Fe 550:** Bridges, flyovers, industrial structures",
    category: 'comparison'
  },
  {
    keywords: ['plywood types', 'mdf vs plywood', 'particle board vs plywood'],
    response: "**Wood Board Comparison:**\n\n| Type | Price/sq.ft | Water Resist | Use |\n|------|-------------|--------------|-----|\n| Commercial Ply | ₹45-70 | Low | Interior furniture |\n| BWR Plywood | ₹65-100 | Good | Kitchens, bathrooms |\n| Marine Ply | ₹90-150 | Excellent | Exterior, boats |\n| MDF | ₹35-55 | Low | Smooth finish work |\n| Particle Board | ₹25-40 | Very Low | Economy furniture |\n\n**Recommendations:**\n- Kitchen: BWR or Marine Plywood\n- Bedroom: Commercial Plywood\n- Wet areas: Marine Plywood only",
    category: 'comparison'
  },
  {
    keywords: ['pvc vs cpvc', 'cpvc vs pvc', 'pipe difference'],
    response: "**PVC vs CPVC Pipes:**\n\n| Feature | PVC | CPVC |\n|---------|-----|------|\n| Price | ₹30-120/m | ₹50-150/m |\n| Max Temperature | 60°C | 93°C |\n| Use | Cold water, drainage | Hot & cold water |\n| Chemical Resistance | Good | Excellent |\n| Lifespan | 25 years | 50+ years |\n\n**Use PVC:** Drainage, sewage, cold water supply\n**Use CPVC:** Geysers, hot water lines, industrial\n\nNever use PVC for hot water - it will deform!",
    category: 'comparison'
  },
  {
    keywords: ['contractor vs builder', 'builder vs developer', 'construction roles'],
    response: "**Construction Industry Roles:**\n\n**Contractor:**\n- Executes construction work\n- Manages labor & materials\n- Works on contract basis\n\n**Builder:**\n- Owns & develops projects\n- May also be contractor\n- Sells completed properties\n\n**Developer:**\n- Acquires land\n- Plans & finances projects\n- Hires builders/contractors\n\n**Architect:**\n- Designs buildings\n- Creates blueprints\n- Supervises aesthetics\n\n**Structural Engineer:**\n- Designs structural elements\n- Ensures building safety\n\nAll can use ritzyard for material procurement!",
    category: 'construction'
  }
];

// Extended General Knowledge
export const extendedKnowledge: KnowledgeEntry[] = [
  // Construction Process
  {
    keywords: ['construction process', 'building process', 'how to build house', 'construction steps'],
    response: "**House Construction Steps:**\n\n**Phase 1: Pre-Construction**\n1. Land selection & purchase\n2. Architect & design\n3. Approvals & permits\n4. Budget planning\n\n**Phase 2: Foundation**\n5. Site clearing\n6. Excavation\n7. Foundation laying\n\n**Phase 3: Structure**\n8. Plinth beam\n9. Column & beam casting\n10. Slab casting\n11. Brick/block work\n\n**Phase 4: Finishing**\n12. Plastering\n13. Electrical & plumbing\n14. Flooring & tiles\n15. Painting\n16. Doors & windows\n\nritzyard supplies materials for all phases!",
    category: 'construction'
  },
  {
    keywords: ['construction cost', 'building cost', 'cost per sqft', 'house cost'],
    response: "**Construction Cost in India (2024):**\n\n**Cost per Square Foot:**\n- Basic: ₹1,200-1,500/sq.ft\n- Standard: ₹1,500-2,000/sq.ft\n- Premium: ₹2,000-3,000/sq.ft\n- Luxury: ₹3,000-5,000/sq.ft\n\n**Cost Breakdown:**\n- Foundation: 10-15%\n- Structure (RCC): 35-40%\n- Finishing: 30-35%\n- MEP (Electrical/Plumbing): 10-15%\n\n**Material Cost Share:**\n- Cement: 15-17%\n- Steel: 20-25%\n- Bricks: 8-10%\n- Sand/Aggregate: 10-12%\n\nUse ritzyard to save 10-15% on materials!",
    category: 'construction'
  },
  {
    keywords: ['best cement', 'which cement', 'cement recommendation', 'top cement brand'],
    response: "**Top Cement Brands in India:**\n\n**Premium Brands:**\n1. UltraTech - Market leader, consistent quality\n2. ACC - Trusted since 1936\n3. Ambuja - Strong & durable\n\n**Value for Money:**\n4. JK Cement - Good quality, competitive price\n5. Shree Cement - Popular in North India\n6. Dalmia Cement - Eco-friendly options\n\n**Regional Leaders:**\n- South: Ramco, Chettinad\n- East: Birla Corp\n- West: Sanghi, Saurashtra\n\n**My Recommendation:** UltraTech/ACC for structure, PPC variant for plastering.",
    category: 'recommendation'
  },
  {
    keywords: ['best steel', 'which tmt', 'steel recommendation', 'top tmt brand'],
    response: "**Top TMT Steel Brands in India:**\n\n**Premium Brands:**\n1. Tata Tiscon - Industry benchmark\n2. JSW Neosteel - Modern manufacturing\n3. SAIL TMT - Government trusted\n\n**Good Quality:**\n4. Vizag Steel - Value for money\n5. Kamdhenu - Wide availability\n6. Shyam Steel - Popular in East\n\n**Features to Check:**\n- BIS certification (IS 1786)\n- Fe 500D grade for earthquake zones\n- Bendability test certificates\n\n**My Recommendation:** Tata Tiscon Fe 500D for residential, JSW for commercial.",
    category: 'recommendation'
  },
  {
    keywords: ['waterproofing', 'waterproof', 'leakage', 'seepage', 'water leak'],
    response: "**Waterproofing Solutions:**\n\n**Types of Waterproofing:**\n\n1. **Cementitious Coating**\n   - Price: ₹15-30/sq.ft\n   - Use: Bathrooms, water tanks\n\n2. **Liquid Membrane**\n   - Price: ₹40-60/sq.ft\n   - Use: Roofs, terraces\n\n3. **Bituminous Membrane**\n   - Price: ₹50-80/sq.ft\n   - Use: Basements, foundations\n\n4. **PU Coating**\n   - Price: ₹60-100/sq.ft\n   - Use: Exposed terraces\n\n**Brands:** Dr. Fixit, Fosroc, SikaTop\n\nPrevention is cheaper than repair - waterproof during construction!",
    category: 'construction'
  },
  {
    keywords: ['readymix concrete', 'rmc', 'ready mix', 'concrete grade'],
    response: "**Ready Mix Concrete (RMC):**\n\n**Grades & Applications:**\n- M15: ₹3,500-4,000/cum - PCC, leveling\n- M20: ₹4,000-4,500/cum - General construction\n- M25: ₹4,500-5,000/cum - Residential RCC\n- M30: ₹5,000-5,500/cum - Commercial buildings\n- M35+: ₹5,500+/cum - High-rise, special\n\n**Advantages:**\n- Consistent quality\n- Faster construction\n- Less labor\n- No material storage\n\n**Providers:** UltraTech RMC, ACC Concrete, RDC\n\n'M' number = compressive strength in N/mm² after 28 days",
    category: 'materials'
  },
  {
    keywords: ['interior design', 'interior', 'home interior', 'interior cost'],
    response: "**Interior Design Costs:**\n\n**Cost Ranges:**\n- Basic: ₹400-800/sq.ft\n- Standard: ₹800-1,500/sq.ft\n- Premium: ₹1,500-3,000/sq.ft\n- Luxury: ₹3,000+/sq.ft\n\n**Components:**\n- Modular Kitchen: ₹1-3 Lakhs\n- Wardrobes: ₹50K-1.5L per room\n- False Ceiling: ₹80-150/sq.ft\n- Flooring: ₹40-200/sq.ft\n- Painting: ₹15-40/sq.ft\n\n**Materials from ritzyard:**\n- Plywood & laminates\n- Tiles & flooring\n- Paints\n- Electrical fittings",
    category: 'construction'
  },
  // Technology
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'technology'],
    response: "**AI in Construction (What ritzyard uses):**\n\n**Our AI Features:**\n- Milo AI: Instant price quotes & recommendations\n- Smart Supplier Matching\n- Dynamic Pricing Intelligence\n- Demand Forecasting\n\n**AI in Construction Industry:**\n- BIM (Building Information Modeling)\n- Drone surveys\n- Predictive maintenance\n- Safety monitoring\n- Quality inspection\n\nAI helps reduce construction costs by 10-20% and time by 15-25%.\n\nI'm Milo, your AI assistant - ask me anything!",
    category: 'technology'
  },
  {
    keywords: ['mobile app', 'ritzyard app', 'download app'],
    response: "**ritzyard Mobile App:**\n\n**Features:**\n- Browse 1000+ materials\n- Instant price checks\n- Submit material inquiries\n- Track orders\n- Chat with Milo AI\n- WhatsApp integration\n\n**Coming Soon:**\n- iOS & Android apps\n- Offline catalog\n- AR visualization\n- Voice ordering\n\n**Currently Available:**\n- Mobile-optimized website: ritzyard.com\n- Works on any smartphone browser\n\nSave ritzyard.com to your home screen for app-like experience!",
    category: 'platform'
  },
  {
    keywords: ['government scheme', 'subsidy', 'pmay', 'housing scheme'],
    response: "**Government Housing Schemes:**\n\n**PMAY (Pradhan Mantri Awas Yojana):**\n- Subsidy: Up to ₹2.67 Lakhs\n- For: First-time homebuyers\n- Income limit: Up to ₹18 LPA\n\n**Other Schemes:**\n- State housing subsidies\n- Home loan interest deduction\n- GST benefits on construction\n\n**ritzyard Benefits:**\n- Quality materials at best prices\n- Documentation for scheme compliance\n- Verified suppliers\n\nBuild your dream home affordably with government schemes + ritzyard savings!",
    category: 'general'
  },
  // Fun & Misc
  {
    keywords: ['good morning', 'good afternoon', 'good evening', 'good night'],
    response: "Good day to you! I'm Milo, ready to help with your construction material needs. Whether you're starting a new project, need a quick price check, or want supplier recommendations - I'm here 24/7!\n\nWhat can I help you with today? Maybe:\n- Check current cement/steel prices?\n- Find verified suppliers?\n- Learn about materials?\n- Create an RFQ?",
    category: 'greeting'
  },
  {
    keywords: ['who made you', 'who created you', 'your creator', 'developer'],
    response: "I'm Milo, the AI assistant created by the ritzyard team! I was developed to help construction professionals get instant material information, pricing, and supplier recommendations.\n\nMy purpose is to make construction material procurement easy, fast, and cost-effective for everyone in India.\n\nI'm constantly learning to serve you better. How can I assist you today?",
    category: 'platform'
  },
  {
    keywords: ['love you', 'i love', 'like you', 'best ai'],
    response: "Thank you so much! I appreciate the kind words! 😊 While I'm just an AI assistant, I'm always here to help make your construction journey easier.\n\nMy goal is to save you time, money, and effort in material procurement. Let me know if you need any help with:\n- Material prices\n- Supplier recommendations\n- Construction advice\n\nI'm grateful to assist you!",
    category: 'greeting'
  },
  {
    keywords: ['boring', 'bored', 'entertainment', 'fun fact'],
    response: "Here's an interesting construction fact! 🏗️\n\n**Did you know?**\n- The Great Wall of China used sticky rice in its mortar!\n- Burj Khalifa has enough steel to stretch to the moon and back!\n- Ancient Romans invented concrete 2000 years ago!\n- India's construction industry employs 50+ million people!\n\nNow, back to work - what materials do you need? I can make procurement fun and easy!",
    category: 'fun'
  }
];

// Hindi Knowledge Base
export const hindiKnowledge: KnowledgeEntry[] = [
  {
    keywords: ['नमस्ते', 'हेलो', 'हाय'],
    response: "नमस्ते! मैं मिलो हूं, ritzyard में आपका AI खरीद सहायक। मैं निर्माण सामग्री की कीमतें, आपूर्तिकर्ता सिफारिशें, और किसी भी प्रश्न में आपकी मदद कर सकता हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
    category: 'greeting'
  },
  {
    keywords: ['सीमेंट', 'सीमेंट की कीमत'],
    response: "सीमेंट के प्रकार और कीमतें:\n\n• **OPC 43 ग्रेड:** ₹340-380/बैग\n• **OPC 53 ग्रेड:** ₹360-420/बैग\n• **PPC सीमेंट:** ₹320-400/बैग\n• **सफेद सीमेंट:** ₹550-700/बैग\n\nब्रांड: UltraTech, ACC, Ambuja, JK Cement\n\nबड़े ऑर्डर पर 5-12% छूट मिलती है!",
    category: 'materials'
  },
  {
    keywords: ['स्टील', 'टीएमटी', 'सरिया'],
    response: "TMT सरिया की कीमतें:\n\n• **Fe 415:** ₹48-54/किग्रा\n• **Fe 500:** ₹50-56/किग्रा\n• **Fe 550:** ₹52-58/किग्रा\n\nसाइज: 8mm, 10mm, 12mm, 16mm, 20mm\n\nब्रांड: Tata Tiscon, JSW, SAIL\n\n5 टन से ज्यादा ऑर्डर पर 2-5% छूट!",
    category: 'materials'
  },
  {
    keywords: ['ईंट', 'ब्लॉक'],
    response: "ईंटों के प्रकार और कीमतें:\n\n• **लाल ईंटें:** ₹6-9/पीस\n• **फ्लाई एश ईंटें:** ₹3.5-5.5/पीस\n• **AAC ब्लॉक:** ₹45-70/ब्लॉक\n\nन्यूनतम ऑर्डर: 5000 पीस\n10,000+ पर मुफ्त डिलीवरी!",
    category: 'materials'
  },
  {
    keywords: ['धन्यवाद', 'शुक्रिया'],
    response: "आपका स्वागत है! मुझे खुशी है कि मैं मदद कर सका। निर्माण सामग्री या कीमतों के बारे में कोई भी सवाल हो तो पूछें। मैं 24/7 आपकी सेवा में हूं!",
    category: 'greeting'
  }
];

// Function to search knowledge base
export const searchKnowledge = (query: string): KnowledgeEntry | null => {
  const lowerQuery = query.toLowerCase();
  
  // Search all knowledge bases
  const allKnowledge = [
    ...ritzYardKnowledge,
    ...materialsKnowledge,
    ...generalKnowledge,
    ...supplierPortalKnowledge,
    ...comparisonKnowledge,
    ...extendedKnowledge,
    ...hindiKnowledge
  ];
  
  // Find best match
  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;
  
  for (const entry of allKnowledge) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lowerQuery.includes(keyword.toLowerCase())) {
        score += keyword.length; // Longer matches score higher
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }
  
  return bestMatch;
};

// Get response with follow-up
export const getKnowledgeResponse = (query: string): { response: string; followUp?: string } => {
  const match = searchKnowledge(query);
  
  if (match) {
    return {
      response: match.response,
      followUp: match.followUp
    };
  }
  
  // Default response for unknown queries
  return {
    response: "That's an interesting question! As ritzyard's AI assistant, I specialize in construction materials and procurement. I can help you with:\n\n• Material pricing (cement, steel, bricks, sand, etc.)\n• Supplier recommendations\n• Creating RFQs\n• Quality standards and specifications\n• Construction tips and advice\n\nCould you please tell me more about what you're looking for? Or ask about any specific construction material!",
    followUp: "What construction material can I help you with?"
  };
};

export default {
  ritzYardKnowledge,
  materialsKnowledge,
  generalKnowledge,
  supplierPortalKnowledge,
  comparisonKnowledge,
  extendedKnowledge,
  hindiKnowledge,
  searchKnowledge,
  getKnowledgeResponse
};
