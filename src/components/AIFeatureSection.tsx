import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Database, Shield } from "lucide-react";
import aiSourcingImage from "@/assets/dashboard-aii.jpg";
import autonomousProcurementImage from "@/assets/ai-dashboard.jpg";
import rateManagementImage from "@/assets/sourcing-optimizer.png";
import supplierVerificationImage from "@/assets/supplier-verification.jpg";

interface FeatureData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ElementType;
  badges: string[];
  buttonText: string;
  reverse?: boolean;
}

const AIFeatureSection = () => {
  const features: FeatureData[] = [
    {
      title: "AI Powered Reasoning",
      subtitle: "with Sourcing Optimization",
      description: "Whether you're running small, medium or large scale tenders, enable the sourcing team to launch RFPs quickly and efficiently and evaluate award scenarios that only AI can find.",
      image: aiSourcingImage,
      icon: Brain,
      badges: ["Sourcing Optimization", "Autonomous Sourcing", "Rate Manager"],
      buttonText: "Sourcing Optimizer",
      reverse: false,
    },
    {
      title: "Autonomous Procurement",
      subtitle: "AI-Powered Inventory Management",
      description: "Automate your material procurement with intelligent AI systems that predict demand, optimize inventory levels, and ensure timely delivery of construction materials.",
      image: autonomousProcurementImage,
      icon: Zap,
      badges: ["Auto Ordering", "Smart Inventory", "24/7 Monitoring"],
      buttonText: "Learn More",
      reverse: true,
    },
    {
      title: "Real-Time Rate Management",
      subtitle: "Dynamic Price Intelligence",
      description: "Stay ahead with real-time market price tracking and analysis. Our AI continuously monitors price fluctuations to ensure you always get the best rates for your materials.",
      image: rateManagementImage,
      icon: Database,
      badges: ["Live Pricing", "Market Analytics", "Cost Optimization"],
      buttonText: "View Rates",
      reverse: false,
    },
    {
      title: "Verified Supplier Network",
      subtitle: "Trust & Quality Assurance",
      description: "Every supplier undergoes rigorous AI-powered verification and continuous performance monitoring to ensure only the highest quality materials reach your construction site.",
      image: supplierVerificationImage,
      icon: Shield,
      badges: ["AI Verification", "Performance Tracking", "Quality Assured"],
      buttonText: "Explore Network",
      reverse: true,
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-16 md:mb-20 lg:mb-24 ${
                feature.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`${feature.reverse ? "lg:col-start-2" : ""} space-y-4 md:space-y-6`}>
                {/* Icon with glass effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-block mb-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl" />
                    <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/20 dark:border-white/10 shadow-lg">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {feature.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="text-xs md:text-sm font-bold text-primary bg-primary/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/15 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-3 leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gradient font-semibold mb-4 md:mb-6">
                    {feature.subtitle}
                  </p>
                </div>

                <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {feature.description}
                </p>

                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-full hover-lift shadow-elegant mt-2 md:mt-4"
                >
                  {feature.buttonText}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Button>
              </div>

              {/* Image with glass morphism */}
              <motion.div
                className={`${feature.reverse ? "lg:col-start-1 lg:row-start-1" : ""} relative group`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glass container */}
                <div className="relative bg-gradient-to-br from-primary/5 via-background/50 to-secondary/5 backdrop-blur-sm border border-white/20 dark:border-white/10 p-2 md:p-3 rounded-2xl">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[260px] md:h-[360px] lg:h-[460px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/60 to-transparent p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <p className="text-xs md:text-sm lg:text-base text-foreground font-semibold flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Powered by Advanced AI Technology
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AIFeatureSection;
