// src/hooks/usePortfolioImages.ts
import { useMemo } from "react";

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
                categoriesMap.set(folderName, {
                    id: folderName,
                    name: `Kategoria ${index} – ${prettyFolder}`,
                    description: `Krótki opis dla zdjęć w folderze "${prettyFolder}" w kategorii nr ${index}`,
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

// // src/hooks/usePortfolioImages.ts
// import { useMemo } from "react";

// export interface ImageData {
//     id: string;
//     thumbnail: string;
//     fullSize: string;
//     alt: string;
// }

// export interface Category {
//     id: string;
//     name: string;
//     description: string;
//     images: ImageData[];
// }

// // import wszystkich .webp
// const allModules = import.meta.glob<string>(
//     "../img/**/*.webp",
//     { eager: true, import: "default" }
// );

// const usePortfolioImages = (): Category[] => {
//     return useMemo(() => {
//         const categoriesMap = new Map<string, Category>();

//         // Podziel moduły na miniaturki i pełne
//         const entries = Object.entries(allModules);
//         const thumbnailEntries = entries.filter(([path]) =>
//             path.endsWith("_miniature.webp")
//         );
//         const fullEntries = entries.filter(
//             ([path]) => !path.endsWith("_miniature.webp")
//         );

//         thumbnailEntries.forEach(([thumbPath, thumbnail]) => {
//             const segments = thumbPath.split("/");
//             const folder = segments[2];            // np. 'abstrakcje'
//             const fileName = segments[3];          // np. '001_miniature.webp'
//             const base = fileName.replace("_miniature.webp", ""); // '001'
//             const prettyFolder = folder.charAt(0).toUpperCase() + folder.slice(1);

//             // stwórz kategorię, jeśli nie ma
//             if (!categoriesMap.has(folder)) {
//                 const idx = categoriesMap.size + 1;
//                 categoriesMap.set(folder, {
//                     id: folder,
//                     name: `Kategoria ${idx} – ${prettyFolder}`,
//                     description: `Krótki opis dla zdjęć w folderze "${prettyFolder}" w kategorii nr ${idx}`,
//                     images: [],
//                 });
//             }

//             // znajdź odpowiadający pełen obraz przez dopasowanie ścieżki
//             const found = fullEntries.find(([fullPath]) =>
//                 fullPath.includes(`/${folder}/${base}.webp`)
//             );
//             if (!found) {
//                 console.warn("Brak dopasowania full dla", thumbPath);
//                 return;
//             }
//             const fullSize = found[1];

//             const cat = categoriesMap.get(folder)!;
//             cat.images.push({
//                 id: `${folder}_${base}`,
//                 thumbnail,
//                 fullSize,
//                 alt: `Zdjęcie z folderu "${prettyFolder}", pozycja ${cat.images.length + 1}`,
//             });
//         });

//         return Array.from(categoriesMap.values());
//     }, []);
// };

// export default usePortfolioImages;