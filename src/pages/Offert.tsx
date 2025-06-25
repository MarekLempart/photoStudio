// src/pages/Offer.tsx
import OffertText01 from "../components/OffertText01";
import OffertText02 from "../components/OffertText02";
import PortfolioGallery from "../components/PortfolioGallery";
import {
  Container,
} from "../styles/OfferStyles";

const Offer = () => {
  return (
    <Container>
      <OffertText01 />
      <OffertText02 />
      <PortfolioGallery />
    </Container>
  );
};

export default Offer;