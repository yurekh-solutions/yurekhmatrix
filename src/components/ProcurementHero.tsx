import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Headphones, BarChart3, Database, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import aiSourcingImg from "@/assets/ai-sourcing-optimization.jpg";
import autonomousImg from "@/assets/autonomous-procurement.jpg";
import rateManagementImg from "@/assets/rate-management.jpg";
import aidashboard from "@/assets/ai-dashboar.jpg";
import aisourcing from "@/assets/network-3d.jpg";
import autonomous from "@/assets/autonomous-procurement.jpg";

const ProcurementHero = () => {
  const cards = [
    {
      id: 1,
      icon: Headphones,
      title: "24/7 AI Support",
      desc: "Round-the-clock AI assistance for procurement queries, pricing, and supplier verification with intelligent chatbots.",
      color: "from-primary/20 via-primary/10 to-transparent",
      image: aiSourcingImg,
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "98% Verified Suppliers",
      desc: "Access India's largest network of verified suppliers with comprehensive background checks and quality certifications.",
      color: "from-secondary/20 via-secondary/10 to-transparent",
      image: autonomousImg,
    },
    {
      id: 3,
      icon: BarChart3,
      title: "₹500Cr+ Transactions",
      desc: "Process billions in construction material transactions with real-time tracking and transparent pricing.",
      color: "from-primary/15 via-secondary/10 to-transparent",
      image: rateManagementImg,
    },
    {
      id: 4,
      icon: Database,
      title: "AI Procurement Dashboard",
      desc: "Centralized intelligent dashboard managing sourcing, suppliers, inventory, and delivery tracking seamlessly.",
      color: "from-secondary/15 via-primary/10 to-transparent",
      image: aidashboard,
    },
    {
      id: 5,
      icon: Zap,
      title: "AI Sourcing Optimization",
      desc: "Automate RFQs, reduce costs by 30%, and connect with optimal suppliers through predictive market analytics.",
      color: "from-primary/25 via-secondary/5 to-transparent",
      image: aisourcing,
    },
    {
      id: 6,
      icon: Brain,
      title: "Autonomous Procurement",
      desc: "Self-learning AI engine handling negotiations, supplier validation, order processing, and delivery tracking autonomously.",
      color: "from-secondary/25 via-primary/5 to-transparent",
      image: autonomous,
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-swipe loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-[#f4f0ec]">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-16 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-24 right-16 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
       
<div className="grid lg:grid-cols-2  items-center md:gap-3 lg:gap-4">

          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold  text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transform Construction Procurement</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                MaterialMatrix leverages advanced AI algorithms to revolutionize how construction companies source, purchase, and manage materials. Our platform reduces costs, improves efficiency, and ensures quality across your entire supply chain.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">AI-Powered Matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">Verified Network</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">Instant Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                  <Database className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">Real-time Analytics</span>
              </div>
            </div>

            <Link to="/contact">
              <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 text-lg mt-10">
                Experience AI Procurement
              </Button>
            </Link>
          </div>

          {/* Right Cards - Animated Loop with 3D Stack */}
          <div className="relative flex justify-center lg:justify-center items-center w-full h-[460px] md:h-[500px] mt-20 ">
            <AnimatePresence>
              {cards.map((card, i) => {
                const Icon = card.icon;
                const cardIndex = (i + index) % cards.length;
                const isActive = cardIndex === 0;

                return (
                  <motion.div
                    key={`${card.id}-${index}`}
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{
                      opacity: 1,
                      scale: isActive ? 1 : 0.95,
                      x: isActive ? 0 : (cardIndex - 1) * 20,
                      y: (cardIndex - 1) * -25,
                      rotateY: (cardIndex - 1) * 5,
                    }}
                    exit={{ opacity: 0, scale: 0.9, x: -50 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className={`absolute w-64 sm:w-72 md:w-80 h-[260px] md:h-[300px] rounded-3xl overflow-hidden border border-primary/20 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
                      isActive
                        ? "shadow-2xl shadow-primary/20"
                        : "shadow-lg"
                    }`}
                    style={{
                      zIndex: cards.length - cardIndex,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color}`} />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="rounded-2xl p-3 w-fit mb-3 bg-gradient-to-br from-primary to-secondary shadow-lg">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcurementHero;
