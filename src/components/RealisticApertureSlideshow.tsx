// src/components/RealisticApertureSlideshow.tsx

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "../styles/RealisticApertureSlideshow.module.css";
import imagesMethodologySystem from "../data/imageData";

const RealisticApertureSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true); // Rozpocznij animację zamknięcia
    }
  }, [isAnimating]);

  const handleAnimationComplete = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesMethodologySystem.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(false); // Zatrzymaj animację
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Automatyczne przejście co 5 sekund
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className={styles.apertureContainer}>
      {/* Obrazek */}
      <motion.img
        src={imagesMethodologySystem[currentImageIndex].src}
        alt={imagesMethodologySystem[currentImageIndex].id}
        className={styles.image}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isAnimating ? 0 : 1 }} // Delikatne pojawienie się obrazu
        transition={{ duration: 0.6 }}
      />
      
      {/* Listki przysłony */}
      {Array.from({ length: 10 }).map((_, index) => (
        <motion.div
          key={index}
          className={styles.leaf}
          initial={{ rotate: 0, scaleY: 1 }}
          animate={
            isAnimating
              ? { rotate: 360 / 10 * index, scaleY: 0 }
              : { rotate: 360 / 10 * index, scaleY: 1 }
          }
          transition={{ duration: 0.5, delay: index * 0.05 }} // Opóźnienie dla efektu spiralnego
          onAnimationComplete={index === 0 ? handleAnimationComplete : undefined}
        />
      ))}
    </div>
  );
};

export default RealisticApertureSlideshow;
