// src/styles/ImageSliderStyles.ts
import styled from 'styled-components';

export const SliderWrapper = styled.div`
    width: 100%;
    margin: 30px 0;

    .slick-slide > div {
        padding: 10px;
        overflow: hidden;
    }

    .slick-slide img {
        width: 100%;
        margin: auto;
        object-fit: cover;
        border-radius: 8px;
    }
`;

export const SlideImage = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`;
