// src/pages/Offer.tsx

import HeroSlideshow from "../components/HeroSlideshow";
import PortfolioGallery from "../components/PortfolioGallery";
import {
  Container,
} from "../styles/OfferStyles";

const Offer = () => {
  return (
    <Container>
      <HeroSlideshow />
      <PortfolioGallery />
    </Container>
  );
};

export default Offer;