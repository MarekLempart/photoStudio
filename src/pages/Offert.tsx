// src/pages/Offert.tsx
import OffertText from "../components/OffertText";
import ImageSlider from "../components/ImageSlider";
import { offertTextData01 } from "../data/offertTextData01";
import { offertTextData02 } from "../data/offertTextData02";
import { Container, SliderContainer } from "../styles/OffertStyles";

const Offert = () => {
  return (
    <Container>
      <OffertText data={offertTextData01} />
      <SliderContainer>
        <ImageSlider folder="wizerunkowe biznesowe" />
      </SliderContainer>
      <OffertText data={offertTextData02} />
      <SliderContainer>
        <ImageSlider folder="oferta biznesowa" />
      </SliderContainer>
    </Container>
  );
};

export default Offert;