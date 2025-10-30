import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FlipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  backTitle: string;
  backContent: string;
  delay?: number;
}

const FlipCard = ({
  icon: Icon,
  title,
  description,
  backTitle,
  backContent,
  delay = 0,
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)} // tap for mobile
      className="relative h-[280px] sm:h-[300px] w-full [perspective:1000px]"
    >
      <motion.div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden animated-border backdrop-blur-md bg-white/10 shadow-lg shadow-orange-200/40">
          <div className="relative h-full bg-card/70 p-6 flex flex-col justify-center items-center text-center z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-md shadow-orange-300/40">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden animated-border backdrop-blur-md bg-gradient-to-br from-primary to-secondary shadow-lg shadow-orange-200/40">
          <div className="relative h-full p-6 flex flex-col justify-center items-center text-center z-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
              {backTitle}
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {backContent}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlipCard;
