// src/pages/Regulations.tsx

import HeroSlideshow from "../components/HeroSlideshow";
import PortfolioGallery from "../components/PortfolioGallery";
import {
  Container,
} from "../styles/RegulationsStyles";

const Regulations = () => {
  return (
    <Container>
      <HeroSlideshow />
      <PortfolioGallery />
    </Container>
  );
};

export default Regulations;