import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AIFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const AIFeatureCard = ({ icon: Icon, title, description, delay = 0 }: AIFeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glass-effect rounded-2xl p-6 hover-lift group border border-primary/10"
    >
      <div className="relative inline-block mb-4">
        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative glass-effect rounded-xl p-3 border border-primary/20 group-hover:border-primary/40 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default AIFeatureCard;
