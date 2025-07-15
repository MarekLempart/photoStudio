// src/components/PortfolioGallery.tsx
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import usePortfolioImages, { Category, ImageData } from '../hooks/usePortfolioImages';
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
    const categories: Category[] = usePortfolioImages();

    return (
        <PhotoProvider>
            {categories.map((category: Category) => (
                <CategoryBlock key={category.id}>
                    <CategoryTitle>{category.name}</CategoryTitle>
                    <CategoryDescription>{category.description}</CategoryDescription>
                    <GalleryWrapper>
                        <GalleryContainer>
                            {category.images.map((img: ImageData) => (
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
