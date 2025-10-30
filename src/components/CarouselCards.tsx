import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

import aiSourcingImg from "@/assets/ai-sourcing-optimization.jpg";
import autonomousImg from "@/assets/autonomous-procurement.jpg";
import rateManagementImg from "@/assets/rate-management.jpg";
import supplierVerificationImg from "@/assets/supplier-verification.jpg";

interface CarouselCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ElementType;
  stats: { label: string; value: string }[];
}

const CarouselCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cards: CarouselCard[] = [
    {
      id: 1,
      title: "AI Sourcing Optimization",
      subtitle: "Smart Material Discovery",
      description:
        "Leverage advanced AI to find the best suppliers and materials instantly. Our machine learning algorithms analyze thousands of options to match your exact requirements.",
      image: aiSourcingImg,
      icon: Sparkles,
      stats: [
        { label: "Faster Sourcing", value: "10x" },
        { label: "Cost Savings", value: "30%" },
      ],
    },
    {
      id: 2,
      title: "Autonomous Procurement",
      subtitle: "Zero-Touch Ordering",
      description:
        "Automated procurement workflows that predict demand, optimize inventory, and place orders without manual intervention. AI handles the entire process seamlessly.",
      image: autonomousImg,
      icon: Zap,
      stats: [
        { label: "Automation Rate", value: "95%" },
        { label: "Time Saved", value: "40hrs/mo" },
      ],
    },
    {
      id: 3,
      title: "Real-Time Rate Intelligence",
      subtitle: "Dynamic Pricing Insights",
      description:
        "Stay ahead with live market analytics and price forecasting. Our AI continuously monitors price fluctuations to ensure optimal procurement timing.",
      image: rateManagementImg,
      icon: TrendingUp,
      stats: [
        { label: "Price Accuracy", value: "99.2%" },
        { label: "Market Coverage", value: "500+" },
      ],
    },
    {
      id: 4,
      title: "Verified Supplier Network",
      subtitle: "Trust & Quality Assured",
      description:
        "Every supplier undergoes rigorous AI-powered verification. Continuous performance monitoring ensures consistent quality and reliability.",
      image: supplierVerificationImg,
      icon: Shield,
      stats: [
        { label: "Verified Suppliers", value: "500+" },
        { label: "Success Rate", value: "98%" },
      ],
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentCard = cards[currentIndex];
  const Icon = currentCard.icon;

  return (
    <section className="py-16 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              AI Capabilities
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how artificial intelligence transforms every aspect of
            procurement.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative min-h-[550px] sm:min-h-[480px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute inset-0"
              >
                <div className="glass-effect rounded-3xl overflow-hidden h-auto shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative w-full h-auto md:h-full">
                      <img
                        src={currentCard.image}
                        alt={currentCard.title}
                        className="w-full h-auto md:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent" />
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <div className="glass-effect rounded-2xl p-2 sm:p-3 border border-white/30">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-md">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 inline-block mb-3 sm:mb-4">
                          {currentCard.subtitle}
                        </span>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
                          {currentCard.title}
                        </h3>

                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                          {currentCard.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                          {currentCard.stats.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                              className="glass-effect rounded-xl p-3 sm:p-4 border border-primary/10"
                            >
                              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">
                                {stat.value}
                              </div>
                              <div className="text-xs sm:text-sm text-muted-foreground">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-3 sm:px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="glass-effect rounded-full p-2 sm:p-3 hover:bg-primary/20 transition-colors pointer-events-auto shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="glass-effect rounded-full p-2 sm:p-3 hover:bg-primary/20 transition-colors pointer-events-auto shadow-lg"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 sm:w-12 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselCards;
