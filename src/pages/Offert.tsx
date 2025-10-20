// src/pages/Offert.tsx
import OffertText from "../components/OffertText";
import ImageSlider from "../components/ImageSlider";
import { Container, SliderContainer } from "../styles/OffertStyles";

const Offert = () => {
  return (
    <Container>
      <OffertText dataKey="offer.business1" />
      <SliderContainer>
        <ImageSlider folder="twój wizerunek" />
      </SliderContainer>
      <OffertText dataKey="offer.business2" />
      <SliderContainer>
        <ImageSlider folder="twój biznes" />
      </SliderContainer>
      <OffertText dataKey="offer.info" />
      <SliderContainer>
        <ImageSlider folder="produktowe" />
      </SliderContainer>
      <OffertText dataKey="offer.personal" />
      <SliderContainer>
        <ImageSlider folder="dzieci" />
      </SliderContainer>
      <OffertText dataKey="offer.additionalInfo" />
      <SliderContainer>
        <ImageSlider folder="stylizowane kobiece" />
      </SliderContainer>
    </Container>
  );
};

export default Offert;