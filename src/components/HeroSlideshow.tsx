// src/components/HeroSlideshow.tsx
import { useState, useEffect } from "react";
import imageHero from "../data/imageDataHero";
import {
  SlideshowContainer,
  StyledImage,
  TextOverlay,
  HeroText,
  DarkOverlay,
} from "../styles/HeroSlideshowStyles";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

const HeroSlideshow = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setScreenSize("mobile");
    } else if (width < 1200) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  };

  const nextSlide = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageHero.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    const interval = setInterval(nextSlide, 5000);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
      clearInterval(interval);
    };
  }, []);

  const currentImage =
    screenSize === "mobile"
      ? imageHero[currentImageIndex].srcMobile
      : screenSize === "tablet"
        ? imageHero[currentImageIndex].srcTablet
        : imageHero[currentImageIndex].srcDesktop;

  return (
    <SlideshowContainer>
      <StyledImage
        src={currentImage}
        alt={imageHero[currentImageIndex].id}
      // initial={{ filter: "blur(0px)" }}
      // animate={{ filter: isAnimating ? "blur(30px)" : "blur(0px)" }}
      // transition={{ duration: 1 }}
      // onAnimationComplete={isAnimating ? handleAnimationComplete : undefined}
      />
      <DarkOverlay
        initial={{ opacity: 0 }} // Rozpoczyna bez zaciemnienia
        animate={{ opacity: isAnimating ? 1 : 0 }} // W trakcie animacji pełne zaciemnienie
        transition={{ duration: 1 }} // Płynna animacja trwająca 1 sekundę
        onAnimationComplete={isAnimating ? handleAnimationComplete : undefined}
      />
      <TextOverlay>
        <HeroText
          initial={{ opacity: 0, y: 0 }} // Startuje poniżej z zerową widocznością
          animate={{ opacity: 1, y: 0 }} // Pojawia się z przesunięciem
          transition={{ duration: 1, delay: 0.5 }} // Płynna animacja z opóźnieniem
        >
          <TypeAnimation
            sequence={[
              t('hero.line1'),
              1000,
              t('hero.line2'),
              3000,
            ]}
            speed={50}
            wrapper="span"
            repeat={5}
            cursor={false}
          />
        </HeroText>
      </TextOverlay>
    </SlideshowContainer>
  );
};

export default HeroSlideshow;
