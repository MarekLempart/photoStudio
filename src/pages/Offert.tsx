// src/pages/Offert.tsx
import OffertText01 from "../components/OffertText01";
import OffertText02 from "../components/OffertText02";
import ImageSlider from "../components/ImageSlider";
import { Container, SliderContainer } from "../styles/OffertStyles";

const Offert = () => {
  return (
    <Container>
      <OffertText01 />
      <SliderContainer>
        <ImageSlider folder="wizerunkowe biznesowe" />
      </SliderContainer>
      <OffertText02 />
      <SliderContainer>
        <ImageSlider folder="oferta biznesowa" />
      </SliderContainer>
    </Container>
  );
};

export default Offert;