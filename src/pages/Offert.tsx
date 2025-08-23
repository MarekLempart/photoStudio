// src/pages/Offert.tsx
import OffertText from "../components/OffertText";
import ImageSlider from "../components/ImageSlider";
import { offertTextData01 } from "../data/offertTextData01";
import { offertTextData02 } from "../data/offertTextData02";
import { offertTextData03 } from "../data/offertTextData03";
import { offertTextData04 } from "../data/offertTextData04";
import { offertTextData05 } from "../data/offertTextData05";

import { Container, SliderContainer } from "../styles/OffertStyles";

const Offert = () => {
  return (
    <Container>
      <OffertText data={offertTextData01} />
      <SliderContainer>
        <ImageSlider folder="twój wizerunek" />
      </SliderContainer>
      <OffertText data={offertTextData02} />
      <SliderContainer>
        <ImageSlider folder="twój biznes" />
      </SliderContainer>
      <OffertText data={offertTextData03} />
      <SliderContainer>
        <ImageSlider folder="produktowe" />
      </SliderContainer>
      <OffertText data={offertTextData04} />
      <SliderContainer>
        <ImageSlider folder="dzieci" />
      </SliderContainer>
      <OffertText data={offertTextData05} />
      <SliderContainer>
        <ImageSlider folder="stylizowane kobiece" />
      </SliderContainer>
    </Container>
  );
};

export default Offert;