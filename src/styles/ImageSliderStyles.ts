// src/styles/ImageSliderStyles.ts
import styled from 'styled-components';

export const SliderWrapper = styled.div`
    width: 100%;
    margin: 30px 0;
    overflow: hidden;

    .slick-slide > div {
        padding: 10px;
        border-radius: 8px;
        overflow: hidden;
    }

    .slick-slide img {
        width: 100%;
        aspect-ratio: 1 / 1;
        margin: auto;
        object-fit: cover;
        border-radius: 8px;
    }

    .slick-list {
    overflow: hidden !important;   /* zakrywa wychodzące slajdy */
  }

  .slick-track {
    display: flex;
  }

  @media (max-width: 768px) {
    width: 100%;                   /* na mobile pełna szerokość */
    margin: 20px 0;
  }
`;

// export const SlideImage = styled.img`
//     width: 100%;
//     aspect-ratio: 1 / 1;
//     object-fit: cover;
// `;
