// src/pages/Regulations.tsx

import RegulationsText from "../components/RegulationsText";
import PortfolioGallery from "../components/PortfolioGallery";
import {
  Container,
} from "../styles/RegulationsStyles";

const Regulations = () => {
  return (
    <Container>
      <RegulationsText />
      <PortfolioGallery />
    </Container>
  );
};

export default Regulations;