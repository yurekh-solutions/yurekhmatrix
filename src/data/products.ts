// Import all product images
import msRoundBars from "@/assets/products/ms-round-bars.jpg";
import msPlates from "@/assets/products/ms-plates.jpg";
import msBeamsChannels from "@/assets/products/ms-beams-channels.jpg";
import msAngles from "@/assets/products/ms-angles.jpg";
import steelCoils from "@/assets/products/steel-coils.jpg";
import msTubes from "@/assets/products/ms-tubes.jpg";
import tmtBars from "@/assets/products/tmt-bars.jpg";
import msPipes from "@/assets/products/ms-pipes.jpg";
import galvanizedSheets from "@/assets/products/galvanized-sheets.jpg";
import wireRods from "@/assets/products/wire-rods.jpg";
import msFlatBars from "@/assets/products/ms-flat-bars.jpg";
import msGratings from "@/assets/products/ms-gratings.jpg";
import forgedComponents from "@/assets/products/forged-components.jpg";
import chequeredPlates from "@/assets/products/chequered-plates.jpg";
import ssMirrorPlates from "@/assets/products/ss-mirror-plates.jpg";
import ssPipes from "@/assets/products/ss-pipes.jpg";
import ssCoils from "@/assets/products/ss-coils.jpg";
import ssTubes from "@/assets/products/ss-tubes.jpg";
import ssRoundBars from "@/assets/products/ss-round-bars.jpg";
import ssSheets from "@/assets/products/ss-sheets.jpg";
import ssAnglesChannels from "@/assets/products/ss-angles-channels.jpg";
import ssPerforatedMesh from "@/assets/products/ss-perforated-mesh.jpg";
import ssFittings from "@/assets/products/ss-fittings.jpg";
import hexBars from "@/assets/products/hex-bars.jpg";
import cement from "@/assets/products/cement.jpg";
import aggregates from "@/assets/products/aggregates.jpg";
import bricks from "@/assets/products/bricks.jpg";
import concreteBlocks from "@/assets/products/concrete-blocks.jpg";
import aacBlocks from "@/assets/products/aac-blocks.jpg";
import readyMixConcrete from "@/assets/products/ready-mix-concrete.jpg";
import plywood from "@/assets/products/plywood.jpg";
import waterproofing from "@/assets/products/waterproofing.jpg";
import paintsCoatings from "@/assets/products/paints-coatings.jpg";
import wallPutty from "@/assets/products/wall-putty.jpg";
import tileAdhesive from "@/assets/products/tile-adhesive.jpg";
import whiteCement from "@/assets/products/white-cement.jpg";
import woodPreservative from "@/assets/products/wood-preservative.jpg";
import electricalCables from "@/assets/products/electrical-cables.jpg";
import armouredCables from "@/assets/products/armoured-cables.jpg";
import flexibleCables from "@/assets/products/flexible-cables.jpg";
import coaxialCables from "@/assets/products/coaxial-cables.jpg";
import switchesSockets from "@/assets/products/switches-sockets.jpg";
import powerSockets from "@/assets/products/power-sockets.jpg";
import usbSockets from "@/assets/products/usb-sockets.jpg";
import electricalConduits from "@/assets/products/electrical-conduits.jpg";
import flexibleConduits from "@/assets/products/flexible-conduits.jpg";
import metalConduits from "@/assets/products/metal-conduits.jpg";
import junctionBoxes from "@/assets/products/junction-boxes.jpg";
import cableTrays from "@/assets/products/cable-trays.jpg";
import ledLights from "@/assets/products/led-lights.jpg";
import ledBulbs from "@/assets/products/led-bulbs.jpg";
import ledTubes from "@/assets/products/led-tubes.jpg";
import ledDownlights from "@/assets/products/led-downlights.jpg";
import ledFloodlights from "@/assets/products/led-floodlights.jpg";
import circuitBreakers from "@/assets/products/circuit-breakers.jpg";
import mcbBreakers from "@/assets/products/mcb-breakers.jpg";
import rccbBreakers from "@/assets/products/rccb-breakers.jpg";
import distributionBoard from "@/assets/products/distribution-board.jpg";
import panelBoards from "@/assets/products/panel-boards.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  applications: string[];
  features: string[];
}

export const categories = [
  { value: "all", label: "All" },
  { value: "mild-steel", label: "Mild Steel" },
  { value: "stainless-steel", label: "Stainless Steel" },
  { value: "construction", label: "Construction Materials" },
  { value: "electrical", label: "Electrical Materials" },
  { value: "stainlesses", label: "Stainless " },
  { value: "constructionnn", label: "Construction " },
   { value: "mildd", label: "Mild " },
  { value: "stainlesseses", label: "Stainlesses " },
  { value: "constructionp", label: "Construction Materialss" },

];

// 100 Premium Products with Professional Product Images
export const products: Product[] = [
  // Mild Steel Products (25 products)
  {
    id: "1",
    name: "MS Round Bars IS 2062",
    category: "mild-steel",
    description: "Premium quality mild steel round bars manufactured to IS 2062 specifications. Perfect for machining, fabrication, and construction applications with excellent weldability and machinability.",
    image: msRoundBars,
    applications: ["Precision Machining", "Industrial Fabrication", "Construction Framework", "Automotive Components"],
    features: ["High Tensile Strength", "Uniform Diameter", "Smooth Surface Finish", "Cost Effective"]
  },
  {
    id: "2",
    name: "MS Plates Grade A",
    category: "mild-steel",
    description: "Heavy-duty mild steel plates conforming to Grade A standards. Ideal for shipbuilding, pressure vessels, and heavy industrial applications with superior strength.",
    image: msPlates,
    applications: ["Ship Building", "Pressure Vessels", "Industrial Machinery", "Structural Engineering"],
    features: ["High Load Bearing", "Uniform Thickness", "Easy to Weld", "Corrosion Resistant Coating"]
  },
  {
    id: "3",
    name: "MS Channels ISMC 100",
    category: "mild-steel",
    description: "Indian Standard Medium Channels manufactured to precise specifications. Widely used in construction and infrastructure projects for structural support.",
    image: msBeamsChannels,
    applications: ["Building Construction", "Bridge Structures", "Industrial Sheds", "Support Beams"],
    features: ["High Strength-to-Weight Ratio", "Easy Installation", "Durable Finish", "Multiple Sizes Available"]
  },
  {
    id: "4",
    name: "MS Angles L-Section",
    category: "mild-steel",
    description: "Equal and unequal angle sections for diverse construction needs. Precision-cut with excellent straightness for easy installation.",
    image: msAngles,
    applications: ["Roof Trusses", "Support Structures", "Frame Making", "Industrial Racking"],
    features: ["Precise Dimensions", "High Rigidity", "Corrosion Protection", "Easy to Cut & Weld"]
  },
  {
    id: "5",
    name: "MS H-Beams Wide Flange",
    category: "mild-steel",
    description: "Wide flange H-beams for heavy structural applications. Provides exceptional load-bearing capacity for high-rise buildings and bridges.",
    image: msBeamsChannels,
    applications: ["High-Rise Buildings", "Bridge Construction", "Industrial Plants", "Heavy Machinery Bases"],
    features: ["Superior Load Capacity", "Excellent Bending Resistance", "Long Span Coverage", "Seismic Resistant"]
  },
  {
    id: "6",
    name: "CR Coils Cold Rolled",
    category: "mild-steel",
    description: "Cold rolled steel coils with premium surface finish. Perfect for applications requiring aesthetic appeal and precision thickness.",
    image: steelCoils,
    applications: ["Automotive Parts", "Home Appliances", "Metal Furniture", "Precision Components"],
    features: ["Smooth Surface", "Tight Tolerances", "High Tensile Strength", "Paintable Surface"]
  },
  {
    id: "7",
    name: "HR Coils Hot Rolled",
    category: "mild-steel",
    description: "Hot rolled steel coils for general fabrication work. Cost-effective solution for non-critical applications with good formability.",
    image: steelCoils,
    applications: ["General Fabrication", "Structural Components", "Industrial Equipment", "Agricultural Machinery"],
    features: ["Good Formability", "Cost Effective", "High Strength", "Easy to Weld"]
  },
  {
    id: "8",
    name: "MS Square Tubes",
    category: "mild-steel",
    description: "Hollow square sections for structural and decorative applications. Available in various wall thicknesses and sizes.",
    image: msTubes,
    applications: ["Structural Framework", "Furniture Manufacturing", "Handrails", "Fencing"],
    features: ["Uniform Wall Thickness", "Precision Cut Ends", "Easy to Join", "Aesthetically Pleasing"]
  },
  {
    id: "9",
    name: "MS Rectangular Tubes",
    category: "mild-steel",
    description: "Rectangular hollow sections ideal for construction and industrial applications requiring directional strength.",
    image: msTubes,
    applications: ["Building Frames", "Support Columns", "Industrial Equipment", "Automotive Chassis"],
    features: ["High Directional Strength", "Clean Appearance", "Easy Fabrication", "Corrosion Resistant"]
  },
  {
    id: "10",
    name: "TMT Bars Fe 500D",
    category: "mild-steel",
    description: "Thermo-Mechanically Treated reinforcement bars with superior strength and ductility. Earthquake resistant for modern construction.",
    image: tmtBars,
    applications: ["RCC Structures", "Earthquake-Prone Zones", "High-Rise Buildings", "Infrastructure Projects"],
    features: ["Seismic Resistant", "Superior Bonding", "Corrosion Protection", "High Ductility"]
  },
  {
    id: "11",
    name: "MS Flat Bars",
    category: "mild-steel",
    description: "Versatile flat steel bars for various fabrication needs. Available in multiple widths and thicknesses.",
    image: msFlatBars,
    applications: ["Brackets & Supports", "Frame Making", "Industrial Fabrication", "Hardware Manufacturing"],
    features: ["Precise Dimensions", "Smooth Edges", "Easy to Machine", "Multiple Sizes"]
  },
  {
    id: "12",
    name: "MS I-Beams ISLB",
    category: "mild-steel",
    description: "Indian Standard Light Beams for medium load applications. Cost-effective alternative to H-beams for lighter structures.",
    image: msBeamsChannels,
    applications: ["Medium Span Structures", "Mezzanine Floors", "Industrial Shelving", "Support Beams"],
    features: ["Good Load Capacity", "Economical", "Easy to Install", "Standard Sizes"]
  },
  {
    id: "13",
    name: "MS Pipes ERW Black",
    category: "mild-steel",
    description: "Electric Resistance Welded pipes for structural and plumbing applications. Strong and durable for multiple uses.",
    image: msPipes,
    applications: ["Water Supply", "Gas Distribution", "Structural Framework", "Industrial Piping"],
    features: ["Leak Proof Joints", "High Pressure Rating", "Corrosion Resistant", "Cost Effective"]
  },
  {
    id: "14",
    name: "MS Pipes Seamless",
    category: "mild-steel",
    description: "Seamless steel pipes for high-pressure applications. Superior quality with no welded joints for critical installations.",
    image: msPipes,
    applications: ["High Pressure Systems", "Oil & Gas", "Hydraulic Systems", "Boiler Tubes"],
    features: ["No Welded Seam", "High Pressure Capacity", "Superior Strength", "Long Service Life"]
  },
  {
    id: "15",
    name: "MS Sheet HR Grade",
    category: "mild-steel",
    description: "Hot rolled steel sheets for general fabrication and manufacturing. Available in various gauges and sizes.",
    image: msPlates,
    applications: ["Industrial Fabrication", "Equipment Manufacturing", "Automotive Panels", "General Engineering"],
    features: ["Good Formability", "Uniform Thickness", "Weldable", "Cost Effective"]
  },
  {
    id: "16",
    name: "MS Beams ISMB",
    category: "mild-steel",
    description: "Indian Standard Medium Beams for heavy structural applications. Ideal for long-span construction projects.",
    image: msBeamsChannels,
    applications: ["Long Span Structures", "Industrial Buildings", "Bridge Construction", "Heavy Machinery Platforms"],
    features: ["High Load Bearing", "Standard Dimensions", "Easy Handling", "Durable"]
  },
  {
    id: "17",
    name: "MS Wire Rods",
    category: "mild-steel",
    description: "High-quality wire rods for drawing into wires. Used in various manufacturing processes.",
    image: wireRods,
    applications: ["Wire Drawing", "Nail Manufacturing", "Fastener Production", "Spring Making"],
    features: ["Uniform Diameter", "Good Ductility", "Clean Surface", "Consistent Quality"]
  },
  {
    id: "18",
    name: "Chequered Plates MS",
    category: "mild-steel",
    description: "Anti-skid chequered plates for flooring and walkways. Provides excellent grip and safety.",
    image: chequeredPlates,
    applications: ["Industrial Flooring", "Walkways", "Staircases", "Vehicle Flooring"],
    features: ["Anti-Skid Surface", "High Durability", "Easy to Clean", "Corrosion Resistant"]
  },
  {
    id: "19",
    name: "MS Structural Sections",
    category: "mild-steel",
    description: "Custom structural steel sections for specialized construction needs. Fabricated to exact specifications.",
    image: msBeamsChannels,
    applications: ["Custom Structures", "Specialized Equipment", "Architectural Features", "Industrial Applications"],
    features: ["Custom Fabrication", "Precise Dimensions", "Quality Certified", "Quick Delivery"]
  },
  {
    id: "20",
    name: "MS Joists and Purlins",
    category: "mild-steel",
    description: "Lightweight steel joists and purlins for roof structures. Economical solution for industrial roofing.",
    image: msBeamsChannels,
    applications: ["Roof Structures", "Industrial Sheds", "Warehouse Roofing", "Agricultural Buildings"],
    features: ["Lightweight", "High Strength", "Easy Installation", "Cost Efficient"]
  },
  {
    id: "21",
    name: "GP Sheets Galvanized",
    category: "mild-steel",
    description: "Galvanized plain sheets with zinc coating for corrosion protection. Ideal for roofing and cladding.",
    image: galvanizedSheets,
    applications: ["Roofing", "Wall Cladding", "Duct Work", "Industrial Enclosures"],
    features: ["Zinc Coated", "Weather Resistant", "Long Lasting", "Maintenance Free"]
  },
  {
    id: "22",
    name: "GC Sheets Corrugated",
    category: "mild-steel",
    description: "Galvanized corrugated sheets for superior strength and water drainage. Perfect for industrial roofing.",
    image: galvanizedSheets,
    applications: ["Industrial Roofing", "Warehouse Covers", "Agricultural Structures", "Temporary Shelters"],
    features: ["High Strength", "Water Drainage", "Easy Installation", "Rust Resistant"]
  },
  {
    id: "23",
    name: "MS Gratings Heavy Duty",
    category: "mild-steel",
    description: "Heavy-duty steel gratings for industrial flooring and drainage. Load-bearing and durable.",
    image: msGratings,
    applications: ["Industrial Platforms", "Drainage Covers", "Walkways", "Trenches"],
    features: ["High Load Capacity", "Anti-Slip", "Drainage Friendly", "Long Lasting"]
  },
  {
    id: "24",
    name: "MS Strips Cold Rolled",
    category: "mild-steel",
    description: "Precision cold rolled steel strips for manufacturing. Tight tolerances and excellent surface finish.",
    image: steelCoils,
    applications: ["Precision Parts", "Small Components", "Hardware Manufacturing", "Automotive Parts"],
    features: ["Tight Tolerances", "Smooth Finish", "High Accuracy", "Consistent Quality"]
  },
  {
    id: "25",
    name: "MS Forged Components",
    category: "mild-steel",
    description: "Custom forged steel components for heavy machinery. Superior strength through forging process.",
    image: forgedComponents,
    applications: ["Heavy Machinery", "Automotive Parts", "Industrial Equipment", "Construction Equipment"],
    features: ["High Strength", "Grain Refined", "Impact Resistant", "Custom Shapes"]
  },

  // Stainless Steel Products (25 products)
  {
    id: "26",
    name: "SS 304 Plates Mirror Finish",
    category: "stainless-steel",
    description: "Premium grade SS 304 plates with mirror finish. Highly corrosion resistant for food and pharmaceutical industries.",
    image: ssMirrorPlates,
    applications: ["Food Processing", "Pharmaceutical Equipment", "Kitchen Equipment", "Decorative Applications"],
    features: ["Corrosion Resistant", "Hygienic Surface", "Easy to Clean", "Aesthetic Appeal"]
  },
  {
    id: "27",
    name: "SS 316 Pipes Seamless",
    category: "stainless-steel",
    description: "Marine grade SS 316 seamless pipes with superior corrosion resistance. Ideal for chemical and marine applications.",
    image: ssPipes,
    applications: ["Chemical Plants", "Marine Equipment", "Oil & Gas", "Pharmaceutical Piping"],
    features: ["Marine Grade", "Chloride Resistant", "High Temperature", "No Welded Seam"]
  },
  {
    id: "28",
    name: "SS Channels ISSC",
    category: "stainless-steel",
    description: "Stainless steel channels for corrosive environments. Combines strength with corrosion resistance.",
    image: ssAnglesChannels,
    applications: ["Chemical Plants", "Food Processing", "Clean Rooms", "Coastal Structures"],
    features: ["Rust Proof", "High Strength", "Low Maintenance", "Long Service Life"]
  },
  {
    id: "29",
    name: "SS Coils 304 Grade",
    category: "stainless-steel",
    description: "SS 304 coils for fabrication and manufacturing. Excellent formability and weldability.",
    image: ssCoils,
    applications: ["Kitchen Sinks", "Appliances", "Architectural Features", "Industrial Equipment"],
    features: ["Good Formability", "Weldable", "Polishable", "Corrosion Resistant"]
  },
  {
    id: "30",
    name: "SS Square Pipes Polished",
    category: "stainless-steel",
    description: "Polished stainless steel square pipes for architectural and decorative applications.",
    image: ssTubes,
    applications: ["Handrails", "Balustrades", "Furniture", "Decorative Structures"],
    features: ["High Polish Finish", "Aesthetic Appeal", "Corrosion Proof", "Easy Maintenance"]
  },
  {
    id: "31",
    name: "SS Rectangular Tubes",
    category: "stainless-steel",
    description: "Rectangular stainless steel hollow sections for modern architecture and industrial use.",
    image: ssTubes,
    applications: ["Modern Architecture", "Display Systems", "Industrial Frames", "Equipment Stands"],
    features: ["Contemporary Look", "Strong & Lightweight", "Weather Resistant", "Versatile"]
  },
  {
    id: "32",
    name: "SS Round Bars 316",
    category: "stainless-steel",
    description: "Marine grade SS 316 round bars for precision machining in harsh environments.",
    image: ssRoundBars,
    applications: ["Marine Hardware", "Chemical Equipment", "Fasteners", "Valve Components"],
    features: ["Marine Grade", "Precision Ground", "Corrosion Resistant", "High Strength"]
  },
  {
    id: "33",
    name: "SS Sheets 2B Finish",
    category: "stainless-steel",
    description: "Standard 2B finish stainless steel sheets for general fabrication. Cost-effective with good surface quality.",
    image: ssSheets,
    applications: ["General Fabrication", "Industrial Equipment", "Kitchen Equipment", "Architectural Panels"],
    features: ["Standard Finish", "Good Formability", "Weldable", "Cost Effective"]
  },
  {
    id: "34",
    name: "SS Angles Equal & Unequal",
    category: "stainless-steel",
    description: "Stainless steel angle sections for structural and decorative applications.",
    image: ssAnglesChannels,
    applications: ["Support Structures", "Frame Making", "Architectural Features", "Equipment Stands"],
    features: ["Rust Proof", "High Strength", "Aesthetic Appeal", "Easy Fabrication"]
  },
  {
    id: "35",
    name: "SS Flat Bars 304",
    category: "stainless-steel",
    description: "Versatile SS 304 flat bars for various fabrication needs. Excellent corrosion resistance.",
    image: ssSheets,
    applications: ["Hardware Manufacturing", "Brackets", "Support Structures", "Machine Parts"],
    features: ["Corrosion Resistant", "Easy to Machine", "Good Finish", "Weldable"]
  },
  {
    id: "36",
    name: "SS Wire Rods 316L",
    category: "stainless-steel",
    description: "Low carbon SS 316L wire rods for specialized applications. Superior corrosion resistance.",
    image: ssRoundBars,
    applications: ["Wire Drawing", "Springs", "Medical Devices", "Marine Applications"],
    features: ["Low Carbon", "Marine Grade", "High Ductility", "Corrosion Proof"]
  },
  {
    id: "37",
    name: "SS Perforated Sheets",
    category: "stainless-steel",
    description: "Perforated stainless steel sheets for filtration and decorative applications.",
    image: ssPerforatedMesh,
    applications: ["Filters", "Architectural Screens", "Ventilation", "Decorative Panels"],
    features: ["Custom Perforation", "Rust Resistant", "Aesthetic Design", "Lightweight"]
  },
  {
    id: "38",
    name: "SS Welded Pipes 304L",
    category: "stainless-steel",
    description: "Low carbon SS 304L welded pipes for general applications. Good weldability.",
    image: ssPipes,
    applications: ["General Piping", "Handrails", "Structures", "Industrial Applications"],
    features: ["Good Weldability", "Corrosion Resistant", "Cost Effective", "Smooth Finish"]
  },
  {
    id: "39",
    name: "SS Chequered Plates",
    category: "stainless-steel",
    description: "Anti-skid stainless steel chequered plates for hygienic flooring applications.",
    image: ssSheets,
    applications: ["Food Processing Floors", "Clean Rooms", "Marine Walkways", "Hospital Floors"],
    features: ["Anti-Skid", "Hygienic", "Corrosion Proof", "Easy to Clean"]
  },
  {
    id: "40",
    name: "SS Hex Bars 316",
    category: "stainless-steel",
    description: "Hexagonal stainless steel bars for precision components and fasteners.",
    image: hexBars,
    applications: ["Fasteners", "Nuts & Bolts", "Precision Parts", "Machine Components"],
    features: ["Precision Tolerance", "Marine Grade", "Easy Machining", "Corrosion Resistant"]
  },
  {
    id: "41",
    name: "SS Expanded Metal Mesh",
    category: "stainless-steel",
    description: "Expanded stainless steel mesh for filters and architectural applications.",
    image: ssPerforatedMesh,
    applications: ["Filters", "Walkway Gratings", "Architectural Screens", "Security Barriers"],
    features: ["High Strength", "Lightweight", "Corrosion Proof", "Ventilation Friendly"]
  },
  {
    id: "42",
    name: "SS Strips BA Finish",
    category: "stainless-steel",
    description: "Bright annealed finish stainless steel strips for precision applications.",
    image: ssSheets,
    applications: ["Precision Components", "Electronics", "Medical Devices", "Automotive Parts"],
    features: ["Bright Finish", "Tight Tolerances", "Clean Surface", "High Quality"]
  },
  {
    id: "43",
    name: "SS I-Beams Structural",
    category: "stainless-steel",
    description: "Structural stainless steel I-beams for corrosive environments.",
    image: ssAnglesChannels,
    applications: ["Chemical Plants", "Marine Structures", "Coastal Buildings", "Clean Room Structures"],
    features: ["Corrosion Proof", "High Load Capacity", "Long Service Life", "Low Maintenance"]
  },
  {
    id: "44",
    name: "SS Capillary Tubes",
    category: "stainless-steel",
    description: "Precision stainless steel capillary tubes for instrumentation.",
    image: ssPipes,
    applications: ["Instrumentation", "Medical Equipment", "Analytical Instruments", "Pressure Gauges"],
    features: ["Precision Bore", "Clean Inside", "Tight Tolerances", "High Pressure"]
  },
  {
    id: "45",
    name: "SS Gratings Industrial",
    category: "stainless-steel",
    description: "Industrial grade stainless steel gratings for hygienic environments.",
    image: ssAnglesChannels,
    applications: ["Food Processing", "Pharmaceutical Plants", "Clean Rooms", "Chemical Plants"],
    features: ["Hygienic Design", "Load Bearing", "Corrosion Proof", "Easy to Clean"]
  },
  {
    id: "46",
    name: "SS Fittings 316L",
    category: "stainless-steel",
    description: "Marine grade SS 316L pipe fittings for critical applications.",
    image: ssFittings,
    applications: ["Chemical Processing", "Marine Systems", "Food Processing", "Pharmaceutical"],
    features: ["Marine Grade", "Leak Proof", "Easy Installation", "Corrosion Resistant"]
  },
  {
    id: "47",
    name: "SS Precision Tubes",
    category: "stainless-steel",
    description: "Precision drawn stainless steel tubes for high-quality applications.",
    image: ssPipes,
    applications: ["Automotive", "Hydraulics", "Pneumatics", "Precision Machinery"],
    features: ["Tight Tolerances", "Smooth Finish", "High Strength", "Dimensional Accuracy"]
  },
  {
    id: "48",
    name: "SS Plates 316Ti",
    category: "stainless-steel",
    description: "Titanium stabilized SS 316Ti plates for high-temperature applications.",
    image: ssSheets,
    applications: ["High Temperature", "Chemical Equipment", "Heat Exchangers", "Boilers"],
    features: ["High Temperature Resistant", "Corrosion Proof", "Stabilized Grade", "Durable"]
  },
  {
    id: "49",
    name: "SS Profiles Custom",
    category: "stainless-steel",
    description: "Custom stainless steel profiles for specialized architectural needs.",
    image: ssAnglesChannels,
    applications: ["Architectural Features", "Custom Structures", "Interior Design", "Facades"],
    features: ["Custom Shapes", "Aesthetic Appeal", "Corrosion Proof", "Precision Made"]
  },
  {
    id: "50",
    name: "SS Rods Threaded",
    category: "stainless-steel",
    description: "Threaded stainless steel rods for fastening applications.",
    image: ssRoundBars,
    applications: ["Fastening", "Construction", "Marine Hardware", "Industrial Assembly"],
    features: ["Pre-Threaded", "Corrosion Resistant", "High Strength", "Easy Installation"]
  },

  // Construction Materials (25 products)
  {
    id: "51",
    name: "Portland Cement OPC 53",
    category: "construction",
    description: "High-grade Ordinary Portland Cement 53 grade for superior strength concrete. Ideal for high-rise buildings and infrastructure.",
    image: cement,
    applications: ["High-Rise Buildings", "Bridges", "Dams", "Infrastructure Projects"],
    features: ["High Strength", "Fast Setting", "Low Heat of Hydration", "Superior Durability"]
  },
  {
    id: "52",
    name: "Portland Pozzolana Cement PPC",
    category: "construction",
    description: "Environment-friendly PPC cement with enhanced durability. Ideal for marine and mass concrete applications.",
    image: cement,
    applications: ["Marine Structures", "Mass Concrete", "Dams", "Underground Structures"],
    features: ["Eco-Friendly", "Low Heat Generation", "High Durability", "Sulfate Resistant"]
  },
  {
    id: "53",
    name: "River Sand Fine Grade",
    category: "construction",
    description: "Premium quality fine river sand for plastering and finishing work. Washed and graded.",
    image: aggregates,
    applications: ["Plastering", "Finishing Work", "Brickwork", "Block Work"],
    features: ["Washed & Clean", "Uniform Grade", "Low Silt Content", "Quality Tested"]
  },
  {
    id: "54",
    name: "M-Sand Manufactured Sand",
    category: "construction",
    description: "High-quality manufactured sand as eco-friendly alternative to river sand. Consistent quality.",
    image: aggregates,
    applications: ["Concrete Work", "Plastering", "Brickwork", "General Construction"],
    features: ["Eco-Friendly", "Consistent Quality", "Better Bonding", "Cost Effective"]
  },
  {
    id: "55",
    name: "20mm Aggregates Crushed Stone",
    category: "construction",
    description: "Premium 20mm crushed stone aggregates for concrete work. High strength and durability.",
    image: aggregates,
    applications: ["Concrete Mix", "Foundation Work", "Road Construction", "RCC Work"],
    features: ["High Strength", "Angular Shape", "Clean & Washed", "Graded Quality"]
  },
  {
    id: "56",
    name: "10mm Aggregates Blue Metal",
    category: "construction",
    description: "Quality 10mm blue metal aggregates for fine concrete work and finishing.",
    image: aggregates,
    applications: ["Fine Concrete", "Flooring", "Plastering", "Paver Blocks"],
    features: ["Uniform Size", "High Density", "Low Absorption", "Quality Certified"]
  },
  {
    id: "57",
    name: "Red Clay Bricks First Class",
    category: "construction",
    description: "Traditional first-class red clay bricks for load-bearing walls. High compressive strength.",
    image: bricks,
    applications: ["Load Bearing Walls", "Foundation Work", "Boundary Walls", "General Construction"],
    features: ["High Compressive Strength", "Uniform Size", "Low Water Absorption", "Durable"]
  },
  {
    id: "58",
    name: "Fly Ash Bricks AAC",
    category: "construction",
    description: "Eco-friendly Autoclaved Aerated Concrete bricks with excellent thermal insulation.",
    image: aacBlocks,
    applications: ["Walls", "Partitions", "High-Rise Buildings", "Earthquake Zones"],
    features: ["Lightweight", "Thermal Insulation", "Fire Resistant", "Eco-Friendly"]
  },
  {
    id: "59",
    name: "Concrete Hollow Blocks 6 inch",
    category: "construction",
    description: "Standard 6-inch concrete hollow blocks for partition walls. Cost-effective and durable.",
    image: concreteBlocks,
    applications: ["Partition Walls", "Boundary Walls", "Non-Load Bearing Walls", "Industrial Sheds"],
    features: ["Economical", "Easy Installation", "Good Insulation", "Durable"]
  },
  {
    id: "60",
    name: "Concrete Solid Blocks 4 inch",
    category: "construction",
    description: "Solid concrete blocks for heavy-duty construction applications.",
    image: concreteBlocks,
    applications: ["Load Bearing Walls", "Retaining Walls", "Foundation Work", "Industrial Buildings"],
    features: ["High Strength", "Weather Resistant", "Fire Proof", "Long Lasting"]
  },
  {
    id: "61",
    name: "Ready Mix Concrete M25 Grade",
    category: "construction",
    description: "Pre-mixed M25 grade concrete for beams, columns, and slabs. Quality assured.",
    image: readyMixConcrete,
    applications: ["Beams", "Columns", "Slabs", "Foundation"],
    features: ["Quality Assured", "Consistent Mix", "Timely Delivery", "No Site Mixing"]
  },
  {
    id: "62",
    name: "Plywood Marine Grade BWP",
    category: "construction",
    description: "Boiling Water Proof marine plywood for exterior applications. Waterproof bonding.",
    image: plywood,
    applications: ["Exterior Shuttering", "Marine Applications", "Kitchen Cabinets", "Furniture"],
    features: ["Waterproof", "Termite Resistant", "High Strength", "Durable"]
  },
  {
    id: "63",
    name: "Plywood Commercial BWR",
    category: "construction",
    description: "Boiling Water Resistant commercial plywood for interior applications.",
    image: plywood,
    applications: ["Interior Furniture", "False Ceiling", "Wall Paneling", "General Carpentry"],
    features: ["Moisture Resistant", "Smooth Finish", "Easy to Work", "Cost Effective"]
  },
  {
    id: "64",
    name: "Shuttering Plywood Film Faced",
    category: "construction",
    description: "Film faced shuttering plywood for concrete formwork. Reusable multiple times.",
    image: plywood,
    applications: ["Concrete Formwork", "Shuttering", "Construction Scaffolding", "Temporary Structures"],
    features: ["Reusable", "Smooth Finish", "High Density", "Water Resistant"]
  },
  {
    id: "65",
    name: "Waterproofing Membrane Bitumen",
    category: "construction",
    description: "High-quality bitumen waterproofing membrane for roofs and terraces.",
    image: waterproofing,
    applications: ["Roof Waterproofing", "Terrace", "Basement", "Underground Structures"],
    features: ["Weather Resistant", "Flexible", "Easy Application", "Long Lasting"]
  },
  {
    id: "66",
    name: "Waterproofing Coating Liquid",
    category: "construction",
    description: "Liquid waterproofing coating for bathrooms and wet areas. Easy to apply.",
    image: waterproofing,
    applications: ["Bathrooms", "Kitchens", "Balconies", "Water Tanks"],
    features: ["Easy Application", "Crack Bridging", "Flexible", "Chemical Resistant"]
  },
  {
    id: "67",
    name: "White Cement Birla",
    category: "construction",
    description: "Premium white cement for finishing and decorative work. Bright white finish.",
    image: whiteCement,
    applications: ["Wall Putty", "Floor Finish", "Decorative Work", "Repair Work"],
    features: ["Bright White", "Smooth Finish", "High Strength", "Quick Setting"]
  },
  {
    id: "68",
    name: "Wall Putty Acrylic Based",
    category: "construction",
    description: "Acrylic-based wall putty for smooth wall finish. Water-resistant.",
    image: wallPutty,
    applications: ["Interior Walls", "Exterior Walls", "Ceiling", "Surface Preparation"],
    features: ["Smooth Finish", "Water Resistant", "Easy to Apply", "Crack Resistant"]
  },
  {
    id: "69",
    name: "Tile Adhesive Polymer Modified",
    category: "construction",
    description: "High-bond polymer modified tile adhesive for all types of tiles.",
    image: tileAdhesive,
    applications: ["Wall Tiling", "Floor Tiling", "Swimming Pools", "Exterior Tiling"],
    features: ["High Bond Strength", "Water Resistant", "Non-Slip", "Easy Application"]
  },
  {
    id: "70",
    name: "Tile Grout Epoxy Based",
    category: "construction",
    description: "Epoxy-based tile grout for stain-resistant and durable tile joints.",
    image: tileAdhesive,
    applications: ["Kitchen Tiles", "Bathroom Tiles", "Swimming Pools", "Commercial Spaces"],
    features: ["Stain Resistant", "Water Proof", "Anti-Fungal", "Easy to Clean"]
  },
  {
    id: "71",
    name: "Asian Paints Apex Exterior",
    category: "construction",
    description: "Premium exterior emulsion paint with weather-proof technology.",
    image: paintsCoatings,
    applications: ["Exterior Walls", "Boundary Walls", "Facades", "Outdoor Structures"],
    features: ["Weather Proof", "Fade Resistant", "Crack Resistance", "Long Lasting"]
  },
  {
    id: "72",
    name: "Asian Paints Royale Interior",
    category: "construction",
    description: "Luxury interior emulsion with smooth silk finish and advanced stain guard.",
    image: paintsCoatings,
    applications: ["Interior Walls", "Living Rooms", "Bedrooms", "Offices"],
    features: ["Smooth Finish", "Stain Guard", "Low Odor", "Washable"]
  },
  {
    id: "73",
    name: "Enamel Paint Oil Based",
    category: "construction",
    description: "High-gloss oil-based enamel paint for wood and metal surfaces.",
    image: paintsCoatings,
    applications: ["Doors", "Windows", "Metal Grills", "Furniture"],
    features: ["High Gloss", "Weather Resistant", "Durable Finish", "Rust Protection"]
  },
  {
    id: "74",
    name: "Primer Cement Based",
    category: "construction",
    description: "Cement-based primer for better paint adhesion on walls.",
    image: paintsCoatings,
    applications: ["New Walls", "Old Walls", "Interior", "Exterior"],
    features: ["Better Adhesion", "Fills Minor Cracks", "Economical", "Easy Application"]
  },
  {
    id: "75",
    name: "Wood Preservative Treatment",
    category: "construction",
    description: "Chemical wood preservative for termite and borer protection.",
    image: woodPreservative,
    applications: ["Wooden Structures", "Furniture", "Doors", "Window Frames"],
    features: ["Termite Protection", "Borer Protection", "Long Lasting", "Deep Penetration"]
  },

  // Electrical Materials (25 products)
  {
    id: "76",
    name: "Polycab FRLS Cables 2.5 sq mm",
    category: "electrical",
    description: "Flame Retardant Low Smoke cables for residential wiring. IS certified.",
    image: electricalCables,
    applications: ["House Wiring", "Commercial Buildings", "Offices", "Apartments"],
    features: ["Fire Retardant", "Low Smoke Emission", "IS Certified", "Long Life"]
  },
  {
    id: "77",
    name: "Havells House Wire 1.5 sq mm",
    category: "electrical",
    description: "Standard house wiring cable for lighting circuits. Flexible and durable.",
    image: electricalCables,
    applications: ["Lighting Circuits", "Switch Boards", "Residential Wiring", "Small Appliances"],
    features: ["Flexible", "Tinned Copper", "Heat Resistant", "Quality Certified"]
  },
  {
    id: "78",
    name: "Armoured Cables 3 Core 10 sq mm",
    category: "electrical",
    description: "Heavy-duty armoured cables for outdoor and industrial installations.",
    image: armouredCables,
    applications: ["Outdoor Installation", "Industrial", "Underground", "Heavy Equipment"],
    features: ["Mechanical Protection", "Weather Proof", "High Current Capacity", "Durable"]
  },
  {
    id: "79",
    name: "Flexible Cables Multi-Strand",
    category: "electrical",
    description: "Multi-strand flexible cables for moving equipment and appliances.",
    image: flexibleCables,
    applications: ["Appliances", "Moving Equipment", "Extensions", "Power Tools"],
    features: ["Highly Flexible", "Durable", "Heat Resistant", "Quality Copper"]
  },
  {
    id: "80",
    name: "Coaxial Cable RG6 TV",
    category: "electrical",
    description: "High-quality coaxial cable for TV and satellite connections.",
    image: coaxialCables,
    applications: ["TV Connection", "Satellite Dish", "CCTV", "Broadband"],
    features: ["Low Signal Loss", "Shielded", "Weather Resistant", "Easy Installation"]
  },
  {
    id: "81",
    name: "Legrand Modular Switches",
    category: "electrical",
    description: "Premium modular switches with sleek design and long-lasting performance.",
    image: switchesSockets,
    applications: ["Residential", "Commercial", "Offices", "Hotels"],
    features: ["Sleek Design", "Durable", "Easy Installation", "10 Year Warranty"]
  },
  {
    id: "82",
    name: "Anchor Roma Switches & Sockets",
    category: "electrical",
    description: "Popular modular switches and sockets with classic design.",
    image: switchesSockets,
    applications: ["Homes", "Offices", "Commercial Spaces", "Retail"],
    features: ["Classic Design", "Reliable", "Wide Range", "IS Certified"]
  },
  {
    id: "83",
    name: "Goldmedal G-Volt Switches",
    category: "electrical",
    description: "Modern modular switches with superior build quality and aesthetics.",
    image: switchesSockets,
    applications: ["Modern Homes", "Commercial", "Hospitality", "Healthcare"],
    features: ["Modern Design", "High Quality", "Safe", "15 Year Warranty"]
  },
  {
    id: "84",
    name: "20A Power Sockets 3 Pin",
    category: "electrical",
    description: "Heavy-duty 20A power sockets for high-power appliances.",
    image: powerSockets,
    applications: ["Air Conditioners", "Geysers", "Heavy Appliances", "Industrial Equipment"],
    features: ["High Current Rating", "Safe Design", "Durable", "Universal"]
  },
  {
    id: "85",
    name: "USB Charging Sockets Dual Port",
    category: "electrical",
    description: "Modern USB charging sockets with dual ports for mobile devices.",
    image: usbSockets,
    applications: ["Bedrooms", "Living Rooms", "Offices", "Hotels"],
    features: ["Fast Charging", "Dual Ports", "Space Saving", "Modern Design"]
  },
  {
    id: "86",
    name: "PVC Conduit Pipes 25mm",
    category: "electrical",
    description: "Rigid PVC conduit pipes for electrical wiring protection.",
    image: electricalConduits,
    applications: ["Concealed Wiring", "Wall Mounting", "Ceiling Wiring", "Industrial"],
    features: ["Impact Resistant", "Fire Retardant", "Easy to Install", "Economical"]
  },
  {
    id: "87",
    name: "Flexible Conduits Corrugated",
    category: "electrical",
    description: "Flexible corrugated conduits for difficult routing applications.",
    image: flexibleConduits,
    applications: ["Complex Routes", "Moving Parts", "Tight Spaces", "Retrofit Wiring"],
    features: ["Highly Flexible", "Easy Routing", "Protective", "Reusable"]
  },
  {
    id: "88",
    name: "Metal Conduits GI 20mm",
    category: "electrical",
    description: "Galvanized iron conduits for heavy-duty and outdoor installations.",
    image: metalConduits,
    applications: ["Outdoor", "Industrial", "Commercial", "High Security Areas"],
    features: ["High Protection", "Corrosion Resistant", "Mechanical Strength", "Durable"]
  },
  {
    id: "89",
    name: "Junction Boxes IP65 Rated",
    category: "electrical",
    description: "Weatherproof junction boxes for outdoor electrical connections.",
    image: junctionBoxes,
    applications: ["Outdoor Wiring", "Gardens", "Swimming Pools", "Industrial Areas"],
    features: ["Waterproof", "Dustproof", "Impact Resistant", "UV Resistant"]
  },
  {
    id: "90",
    name: "Cable Trays Perforated",
    category: "electrical",
    description: "Perforated cable trays for organized cable management in buildings.",
    image: cableTrays,
    applications: ["Commercial Buildings", "Data Centers", "Industries", "Large Installations"],
    features: ["Organized", "Easy Access", "Ventilated", "Load Bearing"]
  },
  {
    id: "91",
    name: "LED Bulbs 9W Cool White",
    category: "electrical",
    description: "Energy-efficient LED bulbs with cool white light. Long-lasting.",
    image: ledBulbs,
    applications: ["Homes", "Offices", "Shops", "Outdoor"],
    features: ["Energy Efficient", "Long Life", "Bright Light", "Eco-Friendly"]
  },
  {
    id: "92",
    name: "LED Tube Lights 4 Feet",
    category: "electrical",
    description: "4-feet LED tube lights for commercial and industrial spaces.",
    image: ledTubes,
    applications: ["Offices", "Shops", "Factories", "Warehouses"],
    features: ["High Brightness", "Energy Saving", "Flicker Free", "Easy Installation"]
  },
  {
    id: "93",
    name: "LED Panel Lights 2x2 Feet",
    category: "electrical",
    description: "Slim LED panel lights for false ceiling installation. Uniform lighting.",
    image: ledLights,
    applications: ["False Ceiling", "Offices", "Hospitals", "Commercial Spaces"],
    features: ["Slim Design", "Uniform Light", "Energy Efficient", "Long Life"]
  },
  {
    id: "94",
    name: "LED Downlights COB 7W",
    category: "electrical",
    description: "COB LED downlights for focused lighting in homes and offices.",
    image: ledDownlights,
    applications: ["Living Rooms", "Bedrooms", "Shops", "Showrooms"],
    features: ["Focused Light", "High CRI", "Dimmable", "Energy Saving"]
  },
  {
    id: "95",
    name: "LED Flood Lights 50W",
    category: "electrical",
    description: "High-power LED flood lights for outdoor and security lighting.",
    image: ledFloodlights,
    applications: ["Outdoor", "Security", "Sports Fields", "Billboards"],
    features: ["High Brightness", "Waterproof", "Wide Angle", "Long Range"]
  },
  {
    id: "96",
    name: "MCB 32A C Curve Single Pole",
    category: "electrical",
    description: "Miniature Circuit Breaker for overload protection in electrical circuits.",
    image: mcbBreakers,
    applications: ["Distribution Boards", "Sub Circuits", "Appliance Protection", "Safety"],
    features: ["Trip Indication", "Quick Response", "Reliable", "IS Certified"]
  },
  {
    id: "97",
    name: "RCCB 40A 30mA 4 Pole",
    category: "electrical",
    description: "Residual Current Circuit Breaker for earth leakage protection.",
    image: rccbBreakers,
    applications: ["Main Distribution", "Earth Leakage Protection", "Safety", "Wet Areas"],
    features: ["Life Safety", "Sensitive", "Auto Trip", "Reset Button"]
  },
  {
    id: "98",
    name: "ELCB Earth Leakage Breaker",
    category: "electrical",
    description: "Earth Leakage Circuit Breaker for complete electrical safety.",
    image: circuitBreakers,
    applications: ["Main Incoming", "Safety Device", "Industrial", "Commercial"],
    features: ["Complete Protection", "Reliable", "Fast Acting", "Test Button"]
  },
  {
    id: "99",
    name: "Distribution Board 12 Way",
    category: "electrical",
    description: "12-way metal distribution board for organized circuit distribution.",
    image: distributionBoard,
    applications: ["Residential", "Commercial", "Small Industries", "Offices"],
    features: ["Organized", "Safe Design", "Easy Access", "Metal Enclosure"]
  },
  {
    id: "100",
    name: "Main Panel Board 3 Phase",
    category: "electrical",
    description: "3-phase main panel board for industrial and commercial power distribution.",
    image: panelBoards,
    applications: ["Industrial", "Commercial Buildings", "Large Complexes", "Power Distribution"],
    features: ["High Capacity", "Safe Design", "Organized", "Bus Bar System"]
  },
];
