// src/components/BlurSlideshow.tsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles/BlurSlideshow.module.css";
import imagesMethodologySystem from "../data/imageData";

const BlurSlideshow = () => {
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
      <motion.img
        src={imagesMethodologySystem[currentImageIndex].src}
        alt={imagesMethodologySystem[currentImageIndex].id}
        className={styles.image}
        initial={{ filter: "blur(0px)" }}
        animate={{ filter: isAnimating ? "blur(30px)" : "blur(0px)" }} // Rozmycie animacji
        transition={{ duration: 1 }}
        onAnimationComplete={isAnimating ? handleAnimationComplete : undefined} // Zmiana obrazu tylko po animacji
      />
    </div>
  );
};

export default BlurSlideshow;
