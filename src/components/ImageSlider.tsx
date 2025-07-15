// src/components/ImageSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import useSliderImages from '../hooks/useSliderImages';
import { SliderWrapper, SlideImage } from '../styles/ImageSliderStyles';

interface ImageSliderProps {
    // folder: string;
    folder: 'wizerunkowe biznesowe' | 'oferta biznesowa';
}

const ImageSlider: React.FC<ImageSliderProps> = ({ folder }) => {
    const images = useSliderImages(folder);

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
                breakpoint: 1200, // tablet
                settings: { slidesToShow: 4, slidesToScroll: 2 },
            },
            {
                breakpoint: 768, // mobile
                settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
        ],
    };

    return (
        <SliderWrapper>
            <Slider {...settings}>
                {images.map((src, idx) => (
                    <div key={idx}>
                        <SlideImage src={src} alt={`Galeria ${folder} - ${idx + 1}`} />
                    </div>
                ))}
            </Slider>
        </SliderWrapper>
    );
};

export default ImageSlider;