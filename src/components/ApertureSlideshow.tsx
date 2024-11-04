// src/components/ApertureSlideshow.tsx

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import css from "../styles/ApertureSlideshow.module.css";
import imagesMethodologySystem from "../data/imageData";

const leafCount = 8; // Ustawiamy liczbę listków przysłony

const ApertureSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimationComplete = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesMethodologySystem.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(false);
  };

  const initiateAnimation = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    const interval = setInterval(initiateAnimation, 3000);
    return () => clearInterval(interval);
  }, []);

  const angleStep = 360 / leafCount;

  return (
    <div className={css.apertureContainer}>
      <motion.img
        src={imagesMethodologySystem[currentImageIndex].src}
        alt={imagesMethodologySystem[currentImageIndex].id}
        className={css.image}
        animate={{ opacity: isAnimating ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        onAnimationComplete={isAnimating ? handleAnimationComplete : undefined}
      />

      {/* Listki przysłony */}
      {Array.from({ length: leafCount }).map((_, index) => (
        <motion.div
          key={index}
          className={css.leaf}
          style={{
            transform: `rotate(${index * angleStep}deg) translateY(-50%)`,
          }}
          initial={{ scaleY: 1.5 }}
          animate={{
            scaleY: isAnimating ? 0 : 1.5,
          }}
          transition={{ duration: 0.8 }}
        />
      ))}
    </div>
  );
};

export default ApertureSlideshow;
