import { motion } from "framer-motion";
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3,
} from "lucide-react";
import aiSourcingImage from "@/assets/ai-sourcing-optimization.jpg";
import rateManagementImage from "@/assets/rate-management.jpg";
import supplierVerificationImage from "@/assets/supplier-verification.jpg";
import autonomousProcurementImage from "@/assets/autonomous-procurement.jpg";

interface GridCard {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const ProcurementGrid = () => {
  const gridCards: GridCard[] = [
    {
      id: 2,
      title: "Autonomous Ordering",
      description: "Automated procurement with AI-driven demand prediction and smart inventory management",
      icon: Zap,
      image: autonomousProcurementImage,
    },
    {
      id: 1,
      title: "AI Procurement Strategy",
      description: "Intelligent sourcing recommendations powered by machine learning and predictive analytics",
      icon: Brain,
      image: aiSourcingImage,
    },
    {
      id: 3,
      title: "Real-Time Rate Analytics",
      description: "Live market intelligence for optimal pricing decisions and cost optimization",
      icon: BarChart3,
      image: rateManagementImage,
    },
    {
      id: 4,
      title: "Verified Supplier Network",
      description: "AI-powered quality assurance with continuous performance monitoring",
      icon: Shield,
      image: supplierVerificationImage,
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            All-in-One <span className="text-gradient">AI Procurement Suite</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered tools designed to transform 
            your construction material procurement process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {gridCards.map((card, index) => {
            const Icon = card.icon;
            const isLargeCard = index < 4;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  isLargeCard ? "sm:col-span-1 lg:row-span-2" : ""
                }`}
              >
                {/* Glass morphism background */}
                {card.image ? (
                  <div className="absolute inset-0">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/40 opacity-80 group-hover:opacity-70 transition-opacity" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20" />
                )}

                {/* Glass overlay */}
                <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5 dark:bg-black/10 border border-white/20 dark:border-white/10" />

                {/* Content */}
                <div className={`relative z-10 p-4 md:p-5 lg:p-6 flex flex-col h-full ${
                  isLargeCard ? "min-h-[300px] md:min-h-[350px] justify-end" : "min-h-[180px] md:min-h-[200px] justify-center"
                }`}>
                  {/* Icon with glass effect */}
                  <div className="mb-3 md:mb-4">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-primary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-xl border border-white/30 dark:border-white/20 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white drop-shadow-lg group-hover:rotate-6 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1.5 md:mb-2 drop-shadow-lg">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm lg:text-base text-white/95 leading-relaxed drop-shadow-md">
                    {card.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-3 md:mt-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold drop-shadow-lg">Explore</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcurementGrid;
