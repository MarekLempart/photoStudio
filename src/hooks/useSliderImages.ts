// src/hooks/useSliderImages.ts
import { useMemo } from 'react';

export interface ImagePair {
    thumbnail: string;
    full: string;
}

const folderImports = {
    'wizerunkowe biznesowe': {
        thumbnails: import.meta.glob<string>(
            '../img/wizerunkowe biznesowe/*_miniature.webp',
            { eager: true, import: 'default' }
        ),
        fulls: import.meta.glob<string>(
            '../img/wizerunkowe biznesowe/*.webp',
            { eager: true, import: 'default' }
        ),
    },
    'oferta biznesowa': {
        thumbnails: import.meta.glob<string>(
            '../img/oferta biznesowa/*_miniature.webp',
            { eager: true, import: 'default' }
        ),
        fulls: import.meta.glob<string>(
            '../img/oferta biznesowa/*.webp',
            { eager: true, import: 'default' }
        ),
    },
    'wizerunkowe twój biznes': {
        thumbnails: import.meta.glob<string>(
            '../img/wizerunkowe twój biznes/*_miniature.webp',
            { eager: true, import: 'default' }
        ),
        fulls: import.meta.glob<string>(
            '../img/wizerunkowe twój biznes/*.webp',
            { eager: true, import: 'default' }
        ),
    },
    'dzieci': {
        thumbnails: import.meta.glob<string>(
            '../img/dzieci/*_miniature.webp',
            { eager: true, import: 'default' }
        ),
        fulls: import.meta.glob<string>(
            '../img/dzieci/*.webp',
            { eager: true, import: 'default' }
        ),
    },
    'stylizowane kobiece': {
        thumbnails: import.meta.glob<string>(
            '../img/stylizowane kobiece/*_miniature.webp',
            { eager: true, import: 'default' }
        ),
        fulls: import.meta.glob<string>(
            '../img/stylizowane kobiece/*.webp',
            { eager: true, import: 'default' }
        ),
    },
} as const;

export type FolderKey = keyof typeof folderImports;

const useSliderImages = (folderName: FolderKey): ImagePair[] => {
    return useMemo(() => {
        const { thumbnails, fulls } = folderImports[folderName];
        const fullMap = new Map<string, string>(
            Object.entries(fulls as Record<string, string>).map(([path, url]) => {
                const base = path.replace(/.*\//, '').replace(/\.webp$/, '');
                return [base, url];
            })
        );

        return (Object.entries(thumbnails as Record<string, string>)
            .map(([path, thumbUrl]) => {
                const base = path
                    .replace(/.*\//, '')
                    .replace(/_miniature\.webp$/, '');
                const fullUrl = fullMap.get(base);
                if (!fullUrl) {
                    console.warn(`Brak pełnego pliku dla ${base} w ${folderName}`);
                    return null;
                }
                return { thumbnail: thumbUrl, full: fullUrl };
            })
            .filter((p): p is ImagePair => p !== null)
            .sort((a, b) => a.thumbnail.localeCompare(b.thumbnail)));
    }, [folderName]);
};

export default useSliderImages;
