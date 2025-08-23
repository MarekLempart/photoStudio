// src/components/ImageSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useSliderImages, { ImagePair, FolderKey } from '../hooks/useSliderImages';
import { SliderWrapper } from '../styles/ImageSliderStyles';

interface ImageSliderProps {
    folder: FolderKey;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ folder }) => {
    const images: ImagePair[] = useSliderImages(folder);

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        accessibility: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <PhotoProvider>
            <SliderWrapper>
                <Slider {...settings}>
                    {images.map(({ thumbnail, full }, idx) => (
                        <div key={idx}>
                            <PhotoView src={full}>
                                <img
                                    src={thumbnail}
                                    alt={`Galeria ${folder}, miniatura ${idx + 1}`}
                                    style={{
                                        width: '100%',
                                        aspectRatio: '1 / 1',
                                        maxHeight: 'calc(100vh - 200px)',
                                        // height: 'auto',
                                        display: 'block',
                                        objectFit: 'cover',
                                    }}
                                />
                            </PhotoView>
                        </div>
                    ))}
                </Slider>
            </SliderWrapper>
        </PhotoProvider>

    );
};

export default ImageSlider;