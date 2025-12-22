// src/hooks/usePortfolioImages.ts
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();

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

            // Tworzymy kategorię, jeśli nie istnieje
            if (!categoriesMap.has(folderName)) {
                // const index = categoriesMap.size + 1;

                // Używamy klucza z pliku JSON, a jako fallback - nazwę folderu
                const translatedName = t(`portfolio.categoryNames.${folderName}`, { defaultValue: folderName });
                // Tworzymy tytuł kategorii
                // const categoryName = t('portfolio.categoryTitle', { index, name: translatedName });
                const categoryName = translatedName;
                // Pobieramy opis z pliku JSON
                const description = t(`portfolio.descriptions.${folderName}`, { defaultValue: "Brak opisu." });

                categoriesMap.set(folderName, {
                    id: folderName,
                    name: categoryName,
                    description: description,
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
                alt: t('portfolio.imageAlt',
                    {
                        folderName:
                            t(`portfolio.categoryNames.${folderName}`,
                                { defaultValue: folderName }),
                        index: category.images.length + 1
                    })
            };
            category.images.push(imageData);
        });

        return Array.from(categoriesMap.values());
    }, [t]);
};

export default usePortfolioImages;
