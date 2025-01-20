// src/components/PersonCard.tsx

import React from "react";
import { ImageCardContainer, StyledImageCard } from "../styles/ImageCardStyles";
import { TextContainer, StyledText } from "../styles/PersonTextStyles";
import {
  PersonCardContainer,
  TextWrapper,
  ImageWrapper,
} from "../styles/ContactStyles";

interface PersonCardProps {
  image: { id: string; src: string };
  text: { id: string; description: string; quote: string };
  $reverse?: boolean;
  $smallImage?: boolean;
}

const PersonCard: React.FC<PersonCardProps> = ({
  image,
  text,
  $reverse = false,
  $smallImage = false,
}) => (
  <PersonCardContainer $reverse={$reverse}>
    <ImageWrapper $smallImage={$smallImage}>
      <ImageCardContainer>
        <StyledImageCard src={image.src} alt={image.id} />
      </ImageCardContainer>
    </ImageWrapper>
    <TextWrapper>
      <TextContainer>
        <StyledText>
          <p>{text.description}</p>
          <blockquote>
            <em>{text.quote}</em>
          </blockquote>
        </StyledText>
      </TextContainer>
    </TextWrapper>
  </PersonCardContainer>
);

export default PersonCard;
