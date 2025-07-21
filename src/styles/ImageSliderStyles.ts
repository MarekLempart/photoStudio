// src/styles/ImageSliderStyles.ts
import styled from 'styled-components';

export const SliderWrapper = styled.div`
    width: 100%;
    height: auto;

    .slick-slide > div {
        padding: 10px;
        box-sizing: border-box;
    }

    .slick-slide img {
        width: 100%;
        aspect-ratio: 1 / 1;
        display: block;
        object-fit: cover;
        border-radius: 8px;
    }

    .slick-list {
        overflow: hidden;
    }
`;
