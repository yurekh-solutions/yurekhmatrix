import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aiSourcingImg from "@/assets/ai-sourcing-optimization.jpg";
import autonomousImg from "@/assets/autonomous-procurement.jpg";
import rateManagementImg from "@/assets/rate-management.jpg";

const ScrollVideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Video zoom effect based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI-Powered <span className="text-gradient">Procurement Revolution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of construction material procurement with intelligent automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 items-center">
          {/* Left side - 3 images stacked */}
          <div className="lg:col-span-3 space-y-4">
            {[aiSourcingImg, autonomousImg, rateManagementImg].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                className="relative group"
              >
                <div className="glass-effect rounded-2xl p-2 hover-lift">
                  <div className="relative rounded-xl overflow-hidden h-40 md:h-48">
                    <img
                      src={img}
                      alt={`AI Feature ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center - Video/Main content with zoom effect */}
          <motion.div
            style={{ scale, opacity }}
            className="lg:col-span-6 relative"
          >
            <div className="glass-effect rounded-3xl p-3 shadow-elegant">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                {/* Simulated video player - replace with actual video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                    >
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      Watch AI in Action
                    </h3>
                    <p className="text-white/90 drop-shadow-md">
                      See how our intelligent system transforms procurement
                    </p>
                  </div>
                </div>
                <img
                  src={autonomousImg}
                  alt="AI Procurement Demo"
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Large feature image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-effect rounded-2xl p-3 hover-lift group">
              <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px]">
                <img
                  src={rateManagementImg}
                  alt="Real-time Analytics"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-bold mb-2 drop-shadow-lg">Real-Time Intelligence</h4>
                  <p className="text-sm text-white/90 drop-shadow-md">
                    AI-powered insights for smarter decisions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideoSection;
