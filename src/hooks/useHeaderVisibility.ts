// src/hooks/useHeaderVisibility.ts
import { useState, useEffect, useRef } from "react";

const SCROLL_DELTA = 5;

export const useHeaderVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= SCROLL_DELTA) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_DELTA) {
        return;
      }
      const isScrollingDown = currentScrollY > lastScrollY.current;
      setIsVisible(!isScrollingDown);
      lastScrollY.current = currentScrollY;
      // const currentScrollY = window.scrollY;

      // if (Math.abs(currentScrollY - lastScrollY.current) < SCROLL_DELTA) {
      //   return;
      // }

      // if (currentScrollY < 10 || currentScrollY < lastScrollY.current) {
      //   setIsVisible(true);
      // } else {
      //   setIsVisible(false);
      // }

      // lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};
