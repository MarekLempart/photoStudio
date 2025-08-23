// src/hooks/useSliderImages.ts
import { useMemo } from 'react';

export interface ImagePair {
    thumbnail: string;
    full: string;
}

const folderImports = {
    'twój wizerunek': {
        thumbnails: import.meta.glob<string>(
            '../img/twój wizerunek/*_miniature.webp',
            { eager: true, import: 'default' }
        ),
        fulls: import.meta.glob<string>(
            '../img/twój wizerunek/*.webp',
            { eager: true, import: 'default' }
        ),
    },
    'twój biznes': {
        thumbnails: import.meta.glob<string>(
            '../img/twój biznes/*_miniature.webp',
            { eager: true, import: 'default' }
        ),
        fulls: import.meta.glob<string>(
            '../img/twój biznes/*.webp',
            { eager: true, import: 'default' }
        ),
    },
    'produktowe': {
        thumbnails: import.meta.glob<string>(
            '../img/produktowe/*_miniature.webp',
            { eager: true, import: 'default' }
        ),
        fulls: import.meta.glob<string>(
            '../img/produktowe/*.webp',
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
