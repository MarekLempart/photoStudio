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
        gap: 18px;
        grid-template-columns: repeat(4, 1fr);
    }

    @media ${({ theme }) => theme.media.desktop} {
        gap: 20px;
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
    justify-content: space-between;

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

export const CategoryBlock = styled.section`
    margin-bottom: 10px;
    margin-top: 80px;
`;

export const CategoryTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 8px;
`;

export const CategoryDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 16px;
`;

