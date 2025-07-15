// src/hooks/useSliderImages.ts
import { useMemo } from 'react';

// Zadeklaruj ręcznie wszystkie foldery z obrazami
const allImports = {
    'wizerunkowe biznesowe': import.meta.glob<string>(
        '../img/wizerunkowe biznesowe/*_miniature.webp',
        { eager: true, import: 'default' }
    ),
    'oferta biznesowa': import.meta.glob<string>(
        '../img/oferta biznesowa/*_miniature.webp',
        { eager: true, import: 'default' }
    ),
    // Dodaj kolejne foldery w razie potrzeby
} as const;

type FolderKey = keyof typeof allImports;

const useSliderImages = (folderName: FolderKey): string[] => {
    const imagesMap = allImports[folderName] as Record<string, string>;

    return useMemo<string[]>(() => {
        // Object.entries domyślnie zwraca [string, unknown]
        // dlatego rzutujemy na [string, string][]
        const entries = Object.entries(imagesMap) as [string, string][];
        return entries
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([, src]) => src);
    }, [imagesMap]);
};

export default useSliderImages;