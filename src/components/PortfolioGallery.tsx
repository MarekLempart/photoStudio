// src/components/PortfolioGallery.tsx

import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import imagePortfolioData from "../data/imagePortfolioData";
import {
    GalleryWrapper,
    GalleryContainer,
    ThumbnailWrapper,
    Thumbnail,
} from "../styles/PortfolioGalleryStyles";

interface ImageItem {
    id: string;
    src: string;
    alt: string;
}

const parseBreakpoint = (value: string): number =>
    parseInt(value.replace("px", ""), 10);

    const getColumnsCount = (
        width: number,
        tabletBP: string,
        desktopBP: string
    ): number => {
        const tab = parseBreakpoint(tabletBP);
        const desk = parseBreakpoint(desktopBP);
        if (width >= desk) return 6;
        if (width >= tab) return 4;
        return 2;
    };

    const computeLastRowColumns = (
        itemsInRow: number,
        totalColumns: number
    ): number[] => {
        const positions: number[] = [];
        if (itemsInRow <= 0) return positions;

        const gridCenter = totalColumns / 2 + 0.5;

        if (itemsInRow === 1) {
            positions.push(Math.floor(gridCenter));
            return positions;
        }

        const isOdd = itemsInRow % 2 === 1;
        const middle = isOdd ? (itemsInRow + 1) / 2 : itemsInRow / 2;
        const centerCol = Math.floor(gridCenter);

        if (isOdd) {
            for (let i = 1; i <= itemsInRow; i++) {
            const offset = i - middle;
            positions.push(centerCol + offset);
            }
        } else {
            const leftMiddle = middle;
            const rightMiddle = middle + 1;
            for (let i = 1; i <= itemsInRow; i++) {
            if (i <= leftMiddle) {
                const offset = i - leftMiddle;
                positions.push(centerCol + offset);
                } else {
                    const offset = i - rightMiddle;
                    positions.push(centerCol + 1 + offset);
                }
            }
        }
        return positions;
    };

    const PortfolioGallery: React.FC = () => {
        const theme = useTheme();
        const [columns, setColumns] = useState<number>(2);

        useEffect(() => {
            const handleResize = () => {
            const width = window.innerWidth;
            const newColumns = getColumnsCount(
                width,
                theme.breakpoints.tablet,
                theme.breakpoints.desktop
            );
            setColumns(newColumns);
            };

            handleResize();
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, [theme]);

    const items: ImageItem[] = imagePortfolioData;
    const totalRows = Math.ceil(items.length / columns);

    return (
        <PhotoProvider>
            <GalleryWrapper>
                <GalleryContainer>
                    {items.map((image, index) => {
                        const rowIndex = Math.floor(index / columns);
                        const colIndex = index % columns;

                        let gridColumnStart = colIndex + 1;
                        const gridRowStart = rowIndex + 1;

                        const remainder = items.length % columns || columns;
                        const isLastRow = rowIndex === totalRows - 1 && remainder !== columns;

                        if (isLastRow) {
                            const firstInRowIndex = rowIndex * columns;
                            const indexInLastRow = index - firstInRowIndex;
                            const positions = computeLastRowColumns(remainder, columns);
                            gridColumnStart = positions[indexInLastRow];
                        }

                        const style: React.CSSProperties = { gridColumnStart, gridRowStart };

                        return (
                            <ThumbnailWrapper key={image.id} style={style}>
                                <PhotoView src={image.src}>
                                    <Thumbnail src={image.src} alt={image.alt} />
                                </PhotoView>
                            </ThumbnailWrapper>
                        );
                    })}
                </GalleryContainer>
            </GalleryWrapper>
        </PhotoProvider>
    );
};

export default PortfolioGallery;
