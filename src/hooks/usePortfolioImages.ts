// src/hooks/usePortfolioImages.ts
import { useMemo } from "react";
import { portfolioDescriptions } from "../data/portfolioDescriptions";

export interface ImageData {
    id: string;
    thumbnail: string;
    fullSize: string;
    alt: string;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    images: ImageData[];
}

// Vite: dynamiczne importy wszystkich plików .webp w katalogu img
const allModules = import.meta.glob<string>(
    "../img/**/*.webp",
    { eager: true, import: "default" }
);

/**
 * Hook generujący kategorie z obrazami (miniatury i pełne).
 */
const usePortfolioImages = (): Category[] => {
    return useMemo(() => {
        const categoriesMap = new Map<string, Category>();

        // Podziel pliki na miniaturki i pełne
        const thumbnailsEntries = Object.entries(allModules).filter(
            ([path]) => path.endsWith("_miniature.webp")
        );
        const fullEntries = Object.entries(allModules).filter(
            ([path]) => !path.endsWith("_miniature.webp")
        );
        const fullMap = new Map(fullEntries);

        thumbnailsEntries.forEach(([path, thumbnail]) => {
            // Ścieżka np. '../img/kategoria1/001_miniature.webp'
            const segments = path.split("/");
            const folderName = segments[2]; // 'kategoria1'
            const fileName = segments[3]; // '001_miniature.webp'
            const baseName = fileName.replace(/_miniature\.webp$/, ""); // '001'
            const prettyFolder = folderName.charAt(0).toUpperCase() + folderName.slice(1);

            // Tworzymy kategorię, jeśli nie istnieje
            if (!categoriesMap.has(folderName)) {
                const index = categoriesMap.size + 1;

                const autoDescription = `Krótki opis dla zdjęć w folderze "${prettyFolder}" w kategorii nr ${index}.`;
                const manualDescription = portfolioDescriptions[folderName] || "Brak dodatkowego opisu.";

                categoriesMap.set(folderName, {
                    id: folderName,
                    name: `Kategoria ${index} – ${prettyFolder}`,
                    description: `${autoDescription} ${manualDescription}`,
                    // description: `Krótki opis dla zdjęć w folderze "${prettyFolder}" w kategorii nr ${index}`,
                    images: []
                });
            }
            const category = categoriesMap.get(folderName)!;

            // Szukamy pełnego zdjęcia
            const fullPath = `../img/${folderName}/${baseName}.webp`;
            const fullSize = fullMap.get(fullPath);
            if (!fullSize) {
                console.warn(`Brak pliku pełnego dla miniatury: ${fullPath}`);
                return;
            }

            const imageData: ImageData = {
                id: `${folderName}_${baseName}`,
                thumbnail,
                fullSize,
                alt: `Zdjęcie z folderu "${prettyFolder}", pozycja ${category.images.length + 1}`
            };
            category.images.push(imageData);
        });

        return Array.from(categoriesMap.values());
    }, []);
};

export default usePortfolioImages;
