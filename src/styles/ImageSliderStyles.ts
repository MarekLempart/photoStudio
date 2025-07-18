// src/styles/ImageSliderStyles.ts
import styled from 'styled-components';

export const SliderWrapper = styled.div`
    width: 100%;
    margin: 5px auto;
    overflow: hidden;

    .slick-slide > div {
        padding: 10px;
        border-radius: 8px;
        overflow: hidden;
    }

    .slick-slide img {
        width: 100%;
        aspect-ratio: 1 / 1;
        margin: 0px auto;
        object-fit: cover;
        border-radius: 8px;
    }

    .slick-list {
        overflow: hidden;
        margin: 0;
    }

    .slick-track {
        display: flex;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 0px auto;
    }
`;
