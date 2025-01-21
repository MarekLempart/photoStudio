// src/components/PortfolioGallery.tsx

import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import imagePortfolioData from '../data/imagePortfolioData';
import { GalleryContainer, Thumbnail, ThumbnailWrapper } from '../styles/PortfolioGalleryStyles';

const PortfolioGallery: React.FC = () => {
  return (
    <PhotoProvider>
      <GalleryContainer>
        {imagePortfolioData.map((image) => (
          <ThumbnailWrapper key={image.id}>
            <PhotoView src={image.src}>
              <Thumbnail src={image.src} alt={image.alt} />
            </PhotoView>
          </ThumbnailWrapper>
        ))}
      </GalleryContainer>
    </PhotoProvider>
  );
};

export default PortfolioGallery;
