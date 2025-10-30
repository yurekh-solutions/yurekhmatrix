import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface TimelineMilestone {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}

interface DynamicTimelineProps {
  milestones: TimelineMilestone[];
}

const DynamicTimeline = ({ milestones }: DynamicTimelineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Animated Timeline Line */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 timeline-line rounded-full opacity-30"
        style={{ height: "100%" }}
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
            }
            transition={{ 
              duration: 0.8, 
              delay: index * 0.3,
              ease: "easeOut"
            }}
          >
            {/* Content Card */}
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
              <GlassCard 
                variant="premium" 
                className="transform hover:scale-105 transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <motion.div 
                    className="flex items-center space-x-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.3 + 0.2,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="outline" className="glass-morphism bg-primary/10 border-primary/30">
                      {milestone.date}
                    </Badge>
                  </motion.div>
                  <CardTitle className="text-xl text-foreground">
                    {milestone.title}
                  </CardTitle>
                  <motion.p 
                    className="text-lg font-semibold text-accent"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                  >
                    {milestone.subtitle}
                  </motion.p>
                </CardHeader>
                <CardContent>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.6 }}
                  >
                    {milestone.description}
                  </motion.p>
                </CardContent>
              </GlassCard>
            </div>

            {/* Animated Timeline Dot */}
            <motion.div 
              className="relative z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView
                  ? { scale: 1, rotate: 0 }
                  : { scale: 0, rotate: -180 }
              }
              transition={{ 
                duration: 0.6, 
                delay: index * 0.3 + 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-primary shadow-lg"
                animate={
                  isInView
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(255, 102, 51, 0.7)",
                          "0 0 0 10px rgba(255, 102, 51, 0)",
                          "0 0 0 0 rgba(255, 102, 51, 0)"
                        ]
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3 + 1
                }}
              />
            </motion.div>

            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DynamicTimeline;