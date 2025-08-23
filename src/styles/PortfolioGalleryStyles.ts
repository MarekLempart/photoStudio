// src/styles/PortfolioGalleryStyles.ts
import styled from 'styled-components';

export const CategoryBlock = styled.section`
    width: 100%;
    margin-bottom: 60px;
`;

export const CategoryTitle = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 8px;
    padding: 10px;
    text-align: left;
`;

export const CategoryDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 10px;
    text-align: left;
    box-shadow: 10px 15px 20px rgba(168, 162, 138, 0.6);
`;

export const SliderWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;

    .slick-slide > div {
        padding: 0 10px;
    }

    .slick-prev,
    .slick-next {
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);

        &:before {
            content: '';
        }

        svg {
            color: white;
            font-size: 20px;
            transform: translateY(45%) translateX(50%);
        }
    }

    .slick-prev {
        left: 15px;
    }

    .slick-next {
        right: 15px;
    }
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;