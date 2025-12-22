// src/components/ScrollToTopBottom.tsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { ScrollContainer, ScrollButton } from "../styles/ScrollToTopBottomStyles";

const ScrollToTopBottom: React.FC = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    // Przechowujemy ostatnią pozycję scrolla, żeby wiedzieć w którą stronę idzie użytkownik
    const lastScrollY = useRef(0);

    // Lista ścieżek, na których przyciski mają być widoczne
    // Uwaga: ścieżki w react-routerze zaczynają się od "/"
    const allowedPaths = ["/offer", "/portfolio", "/regulations"];
    // Sprawdzamy, czy obecna ścieżka jest na liście dozwolonych
    const shouldShow = allowedPaths.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // 1. Logika widoczności (pokaż dopiero po przewinięciu 50px)
            if (currentScrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            // 2. Logika kierunku (góra vs dół)
            // Jeśli obecny scroll jest większy niż poprzedni -> idziemy w dół
            if (currentScrollY > lastScrollY.current) {
                setScrollDirection("down");
            }
            // Jeśli obecny scroll jest mniejszy -> idziemy w górę
            else if (currentScrollY < lastScrollY.current) {
                setScrollDirection("up");
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        if (scrollDirection === "up") {
            // Jeśli scrolowaliśmy w górę -> przycisk zabiera nas na sam szczyt
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            // Jeśli scrolowaliśmy w dół -> przycisk zabiera nas na sam dół
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }
    };

    if (!shouldShow) {
        return null;
    }

    return (
        <ScrollContainer $isVisible={isVisible}>
            <ScrollButton
                onClick={handleClick}
                aria-label={scrollDirection === "up" ? "Przewiń do góry" : "Przewiń na dół"}
            >
                {scrollDirection === "up" ? <FaChevronUp /> : <FaChevronDown />}
            </ScrollButton>
        </ScrollContainer>
    );
};

export default ScrollToTopBottom;