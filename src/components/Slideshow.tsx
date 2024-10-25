// src/components/Slideshow.tsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Slideshow.module.css";
import imagesMethodologySystem from "../data/imageData";

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true); // Rozpocznij animację
  };

  const handleAnimationComplete = () => {
    // Zmień obrazek po zakończeniu animacji
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesMethodologySystem.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(false); // Zatrzymaj animację
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Automatyczne przejście co 3 sekundy
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.lens}>
        {/* Obrazek */}
        <motion.img
          src={imagesMethodologySystem[currentImageIndex].src}
          alt={imagesMethodologySystem[currentImageIndex].id}
          className={styles.image}
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 0 : 1 }} // Przezroczystość animacji
          transition={{ duration: 0.5 }}
          onAnimationComplete={isAnimating ? handleAnimationComplete : undefined} // Zmiana obrazu tylko po animacji
        />
        {/* Ciemna nakładka */}
        {isAnimating && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setTimeout(() => setIsAnimating(false), 2000)} // Przerwa przed otwarciem
          />
        )}
      </div>
    </div>
  );
};

export default Slideshow;
