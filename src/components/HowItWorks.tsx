import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Search,
  UserCheck,
  Truck,
  HandCoins,
  Zap,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Submit RFQ",
      description:
        "Post your material requirements through our AI-powered form or voice interface.",
      details: [
        "Specify quantities & specifications",
        "Set delivery timeline",
        "Add quality requirements",
      ],
    },
    {
      icon: Zap,
      title: "AI Matching",
      description:
        "Our intelligent system matches you with verified suppliers in under 60 seconds.",
      details: [
        "Real-time price comparison",
        "Quality score analysis",
        "Delivery capability check",
      ],
    },
    {
      icon: UserCheck,
      title: "Supplier Selection",
      description:
        "Review detailed proposals and select the best supplier for your needs.",
      details: [
        "Verified supplier profiles",
        "Past performance data",
        "Transparent pricing",
      ],
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description:
        "Protected transactions through our integrated escrow system.",
      details: [
        "Payment held securely",
        "Release on delivery",
        "Dispute resolution",
      ],
    },
    {
      icon: Truck,
      title: "Real-time Tracking",
      description:
        "Monitor your order from dispatch to delivery with live updates.",
      details: [
        "GPS location tracking",
        "Milestone notifications",
        "Estimated delivery time",
      ],
    },
    {
      icon: HandCoins,
      title: "Delivery & Payment",
      description:
        "Confirm delivery quality and automatic payment release to supplier.",
      details: [
        "Quality inspection",
        "Digital documentation",
        "Instant payment release",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-[#f3f0ec] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c15738]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5c2d23]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            From requirement to delivery – experience seamless procurement in 6
            simple steps.
          </p>
        </motion.div>

        {/* Process Cards - Desktop */}
        <motion.div
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <GlassCard
                variant="premium"
                className="h-full group p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-500 rounded-2xl"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#5c2d23] mb-3 text-center group-hover:text-[#c15738] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-center text-[#5c2d23]/80">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start space-x-2 text-[#5c2d23]/80"
                    >
                      <CheckCircle className="h-4 w-4 text-[#c15738] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#c15738]/50 to-transparent z-0" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Layout - Mobile */}
        <div className="sm:hidden">
          <div className="relative pl-4">
            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c15738] via-[#5c2d23] to-[#c15738]" />

            {steps.map((step, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="relative flex items-start space-x-6 mb-10 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[#c15738] to-[#5c2d23] rounded-full flex items-center justify-center text-white font-bold z-10">
                  <step.icon className="h-6 w-6" />
                </div>

                <div className="flex-1 pt-2 pr-2">
                  <h4 className="text-lg font-semibold text-[#5c2d23] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#5c2d23]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GlassCard className="inline-block p-8 w-full sm:w-auto bg-white/80 backdrop-blur-md shadow-lg rounded-2xl">
            <h3 className="text-2xl font-bold text-[#5c2d23] mb-4">
              Ready to Streamline Your Procurement?
            </h3>
            <p className="text-[#5c2d23]/80 mb-6 max-w-xl mx-auto">
              Join thousands of builders and suppliers transforming construction
              procurement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <button className="border-2 border-[#c15738] text-[#c15738] px-8 py-3 rounded-full font-semibold bg-transparent hover:bg-gradient-to-r hover:from-[#c15738] hover:to-[#5c2d23] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Start Your First RFQ
                </button>
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
