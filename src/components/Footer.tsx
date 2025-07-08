// src/components/Footer.tsx
import {
  FooterContainer,
  // LogoContainer,
  // Logo,
  FooterText,
  ContactSection,
  ContactLine,
} from "../styles/FooterStyles";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <FooterContainer>

      {/* Sekcja fotografa */}
      <ContactSection>
        <ContactLine>Photographer:</ContactLine>
        <ContactLine>Marta Matczuk-Pisarek</ContactLine>
        <ContactLine>
          <a href="tel:+48603758565">
            <FiPhoneCall /> +48 603 758 565
          </a>
        </ContactLine>
      </ContactSection>

      {/* Logo fotografa */}
      {/* <PhotographerLogo>
                <img src="placeholder-for-logo.png" alt="Photographer logo" />
            </PhotographerLogo> */}


      {/* Informacje na dole */}
      <FooterText>&copy; 2024 Template Vite - React/TS</FooterText>
    </FooterContainer>
  );
};

export default Footer;
