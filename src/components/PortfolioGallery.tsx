// src/components/PortfolioGallery.tsx
import React from 'react';
import Slider from 'react-slick';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import usePortfolioImages, { Category, ImageData } from '../hooks/usePortfolioImages';
import {
    CategoryBlock,
    CategoryTitle,
    CategoryDescription,
    SliderWrapper,
    Thumbnail,
} from '../styles/PortfolioGalleryStyles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

// Komponenty dla niestandardowych strzałek
const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <FaChevronRight />
        </div>
    );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style }} onClick={onClick}>
            <FaChevronLeft />
        </div>
    );
};

const PortfolioGallery: React.FC = () => {
    const categories: Category[] = usePortfolioImages();

    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true, // Włączamy strzałki
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
        <>
            {categories.map((category: Category) => (
                // Każda kategoria ma swój własny PhotoProvider, co izoluje zdjęcia.
                <PhotoProvider
                    key={category.id}
                    // Dodajemy niestandardowy pasek narzędzi z licznikiem
                    toolbarRender={({ index, images }) => {
                        return (
                            <div className="react-photo-view-toolbar">
                                {`${index + 1} / ${images.length}`}
                            </div>
                        );
                    }}
                >
                    <CategoryBlock>
                        <CategoryTitle>{category.name}</CategoryTitle>
                        <CategoryDescription>{category.description}</CategoryDescription>
                        <SliderWrapper>
                            <Slider {...sliderSettings}>
                                {category.images.map((img: ImageData) => (
                                    <div key={img.id}>
                                        <PhotoView src={img.fullSize}>
                                            <Thumbnail src={img.thumbnail} alt={img.alt} />
                                        </PhotoView>
                                    </div>
                                ))}
                            </Slider>
                        </SliderWrapper>
                    </CategoryBlock>
                </PhotoProvider>
            ))}
        </>
    );
};

export default PortfolioGallery;
