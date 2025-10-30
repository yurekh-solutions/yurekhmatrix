import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter = ({ 
  start = 0, 
  end, 
  duration = 2, 
  decimals = 0, 
  suffix = "", 
  prefix = "",
  className = ""
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const increment = (end - start) / (duration * 60);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <motion.span
      className={`counter-number ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;