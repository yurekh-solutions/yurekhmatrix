import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ImageCarousel = ({ 
  images, 
  autoPlay = true, 
  interval = 4000,
  className = ""
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="carousel-container h-full">
        <motion.div
          className="flex h-full"
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary shadow-glow" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;