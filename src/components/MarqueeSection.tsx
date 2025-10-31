import { motion } from "framer-motion";
import { Bot, TrendingUp, Shield, Zap, Globe, Package, Clock, BarChart3 } from "lucide-react";
import aiProcurementDashboard from "@/assets/ai-procurement-dashboard.jpg";
import smartAutomation from "@/assets/smart-automation.jpg";
import supplierNetwork from "@/assets/supplier-network.jpg";
import qualityControl from "@/assets/quality-control.jpg";

interface MarqueeCard {
  title: string;
  description: string;
  stat: string;
  icon: React.ElementType;
  image: string;
}

const marqueeCards: MarqueeCard[] = [
  {
    title: "AI-Powered Matching",
    description: "Intelligent supplier recommendations",
    stat: "98%",
    icon: Bot,
    image: aiProcurementDashboard,
  },
  {
    title: "Smart Automation",
    description: "Streamlined procurement workflow",
    stat: "10x",
    icon: Zap,
    image: smartAutomation,
  },
  {
    title: "Real-Time Tracking",
    description: "Live order and delivery updates",
    stat: "24/7",
    icon: Clock,
    image: supplierNetwork,
  },
  {
    title: "Quality Assurance",
    description: "AI-verified material standards",
    stat: "100%",
    icon: Shield,
    image: qualityControl,
  },
  {
    title: "Global Network",
    description: "500+ verified suppliers",
    stat: "500+",
    icon: Globe,
    image: aiProcurementDashboard,
  },
  {
    title: "Cost Savings",
    description: "Average procurement savings",
    stat: "35%",
    icon: TrendingUp,
    image: smartAutomation,
  },
  {
    title: "Fast Delivery",
    description: "Average delivery time",
    stat: "4.2d",
    icon: Package,
    image: supplierNetwork,
  },
  {
    title: "Data Analytics",
    description: "Predictive insights & reporting",
    stat: "∞",
    icon: BarChart3,
    image: qualityControl,
  },
];

const MarqueeCard = ({ card }: { card: MarqueeCard }) => {
  const Icon = card.icon;
  
  return (

    <motion.div
      className="relative flex-shrink-0 w-[240px] sm:w-[300px] h-[180px] sm:h-[260px] rounded-3xl overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/80 to-transparent" />
      </div>

      {/* Glass Effect Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-primary/40 transition-all duration-300" />

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-xl" />

      {/* Content */}
      <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                 <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
          </div>
          <motion.div 
            className="text-4xl sm:text-3xl text-gray-200 font-medium "
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
          >
            {card.stat}
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-primary transition-colors duration-300">
            {card.title}
          </h3>
          <p className="text-sm sm:text-base text-white">
            {card.description}
          </p>
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Animated Box Shadow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10" />
    </motion.div>
  );
};

const MarqueeRow = ({ cards, direction = "left", duration = 40 }: { cards: MarqueeCard[], direction?: "left" | "right", duration?: number }) => {
  // Duplicate cards to create seamless loop
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-12">

    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedCards.map((card, index) => (
          <MarqueeCard key={`${card.title}-${index}`} card={card} />
        ))}
      </motion.div>
    </div>
    </div>
  );
};

const MarqueeSection = () => {
  // Split cards into two rows
  const firstRowCards = marqueeCards.slice(0, 4);
  const secondRowCards = marqueeCards.slice(4);

  return (
    <section className="py-16 sm:py-24 bg-[#f9f7f6] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-12">
       
      </div>

      {/* Marquee Rows */}
      <div className="space-y-6">
        <MarqueeRow cards={firstRowCards} direction="left" duration={35} />
        <MarqueeRow cards={secondRowCards} direction="right" duration={40} />
      </div>
    </section>
  );
};

export default MarqueeSection;
