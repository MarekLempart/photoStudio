// src/components/PortfolioGalleryStyles.ts

import styled from 'styled-components';

export const GalleryWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const GalleryContainer = styled.div`
    display: inline-grid;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);

    @media ${({ theme }) => theme.media.tablet} {
        gap: 24px;
        grid-template-columns: repeat(4, 1fr);
    }

    @media ${({ theme }) => theme.media.desktop} {
        grid-template-columns: repeat(6, 1fr);
    }
`;

export const ThumbnailWrapper = styled.div`
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 8px;
`;
