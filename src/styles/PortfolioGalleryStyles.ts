// // src/styles/PortfolioGalleryStyles.ts
// import styled from 'styled-components';

// export const CategoryBlock = styled.section`
//     margin: 80px 0 10px;
// `;

// export const CategoryTitle = styled.h2`
//     font-size: 1.5rem;
//     margin-bottom: 8px;
// `;

// export const CategoryDescription = styled.p`
//     font-size: 1rem;
//     color: ${({ theme }) => theme.colors.textSecondary};
//     margin-bottom: 16px;
// `;


// export const GalleryWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
// `;

// export const GalleryContainer = styled.div`
//     display: inline-grid;
//     gap: 16px;
//     grid-template-columns: repeat(2, 1fr);

//     @media ${({ theme }) => theme.media.tablet} {
//         gap: 18px;
//         grid-template-columns: repeat(4, 1fr);
//     }

//     @media ${({ theme }) => theme.media.desktop} {
//         gap: 20px;
//         grid-template-columns: repeat(6, 1fr);
//     }
// `;

// export const ThumbnailWrapper = styled.div`
//     position: relative;
//     cursor: pointer;
//     overflow: hidden;
//     border-radius: 8px;
//     box-shadow: 10px 15px 20px rgba(168, 162, 138, 0.6);
//     transition: transform 0.2s;

//     aspect-ratio: 1;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     &:hover {
//         transform: scale(1.05);
//     }
// `;

// export const Thumbnail = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: block;
//     border-radius: 8px;
// `;

// src/styles/PortfolioGalleryStyles.ts
import styled from 'styled-components';

export const CategoryBlock = styled.section`
    width: 100%;
    margin-bottom: 60px;
`;

export const CategoryTitle = styled.h2`
    font-size: 1.8rem;
    margin-bottom: 8px;
    text-align: left;
`;

export const CategoryDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 24px;
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