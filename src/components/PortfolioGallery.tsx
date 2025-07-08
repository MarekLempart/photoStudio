// src/components/PortfolioGallery.tsx
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import usePortfolioImages from '../hooks/usePortfolioImages';
import {
    GalleryWrapper,
    GalleryContainer,
    Thumbnail,
    ThumbnailWrapper,
    CategoryBlock,
    CategoryTitle,
    CategoryDescription,
} from '../styles/PortfolioGalleryStyles';

const PortfolioGallery: React.FC = () => {
    const categories = usePortfolioImages();

    return (
        <PhotoProvider>
            {categories.map((category) => (
                <CategoryBlock key={category.id}>
                    <CategoryTitle>{category.name}</CategoryTitle>
                    <CategoryDescription>{category.description}</CategoryDescription>
                    <GalleryWrapper>
                        <GalleryContainer>
                            {category.images.map((img) => (
                                <ThumbnailWrapper key={img.id}>
                                    <PhotoView src={img.fullSize}>
                                        <Thumbnail src={img.thumbnail} alt={img.alt} />
                                    </PhotoView>
                                </ThumbnailWrapper>
                            ))}
                        </GalleryContainer>
                    </GalleryWrapper>
                </CategoryBlock>
            ))}
        </PhotoProvider>
    );
};

export default PortfolioGallery;


// // src/components/PortfolioGallery.tsx
// import React from 'react';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import 'react-photo-view/dist/react-photo-view.css';
// import imagePortfolioData from '../data/imagePortfolioData';
// import {
//     GalleryWrapper,
//     GalleryContainer,
//     Thumbnail,
//     ThumbnailWrapper
// } from '../styles/PortfolioGalleryStyles';

// const PortfolioGallery: React.FC = () => {
//     return (
//         <PhotoProvider>
//             <GalleryWrapper>
//                 <GalleryContainer>
//                     {imagePortfolioData.map((image) => (
//                         <ThumbnailWrapper key={image.id}>
//                             <PhotoView src={image.src}>
//                                 <Thumbnail src={image.src} alt={image.alt} />
//                             </PhotoView>
//                         </ThumbnailWrapper>
//                     ))}
//                 </GalleryContainer>
//             </GalleryWrapper>

//         </PhotoProvider>
//     );
// };

// export default PortfolioGallery;
