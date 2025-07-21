// src/styles/ImageSliderStyles.ts
// import styled from 'styled-components';

// export const SliderWrapper = styled.div`
//     width: 100%;
//     position: relative;
//     max-width: 100%;
//     margin: 5px auto;
//     overflow: hidden;

//     .slick-slider {
//         width: 100%;
//         max-width: 100%;
//     }

//     .slick-slide > div {
//         padding: 10px;
//         border-radius: 8px;
//         overflow: hidden;
//     }

//     .slick-slide img {
//         width: 100%;
//         aspect-ratio: 1 / 1;
//         margin: 0px auto;
//         object-fit: cover;
//         border-radius: 8px;
//     }

//     .slick-list {
//         margin: 0;
//         overflow: hidden;
//     }

//     .slick-track {
//         display: flex;
//     }

//     /* & .slick-list {
//         margin: 0;
//         overflow: hidden;
//     } */

//     @media (max-width: 768px) {
//         width: 100%;
//         margin: 0px auto;
//     }
// `;

// Nowa, ostateczna zawartość pliku src/styles/ImageSliderStyles.ts
import styled from 'styled-components';

export const SliderWrapper = styled.div`
    /* Ten wrapper ma być prostym blokiem, który nie dodaje własnych, skomplikowanych reguł */
    width: 100%;
    height: auto;

    .slick-slide > div {
        padding: 10px;
        box-sizing: border-box; /* Dodatkowe zabezpieczenie */
    }

    .slick-slide img {
        width: 100%;
        aspect-ratio: 1 / 1;
        display: block;
        object-fit: cover;
        border-radius: 8px;
    }

    /* Ukrywamy domyślny overflow react-slick, bo kontrolujemy go w SliderContainer */
    .slick-list {
        overflow: visible;
    }
`;
