// src/pages/About.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import personImageData from "../data/personImageData";
import PersonCard from "../components/PersonCard";
import { ContactContainer } from "../styles/ContactStyles";

interface PersonText {
  description: string;
  quote: string;
}

const About: React.FC = () => {
  const { t } = useTranslation();
  const personText = t('about.person1', { returnObjects: true }) as PersonText;
  const image = personImageData.find((img) => img.id === 'person1');
  if (!image || !personText) return null;

  return (
    <ContactContainer>
      <PersonCard
        key={'person1'}
        image={image}
        text={personText}
        $reverse={false}
      />
    </ContactContainer>
  );
};

export default About;
