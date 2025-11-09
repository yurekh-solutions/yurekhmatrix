import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  trigger?: boolean;
}

const AnimatedCounter = ({ 
  start = 0, 
  end, 
  duration = 2, 
  decimals = 0, 
  suffix = "", 
  prefix = "",
  className = "",
  trigger = true
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(end);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimatedRef.current) {
      return;
    }

    // Reset count to start value
    setCount(start);
    hasAnimatedRef.current = true;

    // Start animation
    const totalFrames = duration * 60;
    const increment = (end - start) / totalFrames;
    let currentFrame = 0;
    
    const timer = setInterval(() => {
      currentFrame++;
      const newValue = start + (increment * currentFrame);
      
      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(newValue);
      }
    }, 1000 / 60);

    return () => {
      clearInterval(timer);
    };
  }, [start, end, duration, trigger]);

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