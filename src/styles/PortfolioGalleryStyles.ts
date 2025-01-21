// src/components/PortfolioGalleryStyles.ts

import styled from 'styled-components';

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    padding: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 24px;
    }
`;

export const ThumbnailWrapper = styled.div`
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    display: block;
`;
