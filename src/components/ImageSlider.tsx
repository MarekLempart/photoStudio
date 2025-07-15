// src/components/ImageSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useSliderImages from '../hooks/useSliderImages';
import { SliderWrapper } from '../styles/ImageSliderStyles';

interface ImageSliderProps {
    // folder: string;
    folder: 'wizerunkowe biznesowe' | 'oferta biznesowa';
}

const ImageSlider: React.FC<ImageSliderProps> = ({ folder }) => {
    const thumbnails = useSliderImages(folder);
    const getFullSize = (thumb: string) => thumb.replace('_miniature', '');

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
                    {thumbnails.map((src, idx) => (
                        <div key={idx}>
                            <PhotoView src={getFullSize(src)}>
                                <img
                                    src={src}
                                    alt={`Galeria ${folder}, miniatura ${idx + 1}`}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
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