// src/components/Footer.tsx
import {
  FooterContainer,
  FooterText,
  ContactSection,
  ContactLine,
} from "../styles/FooterStyles";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>

      {/* Sekcja fotografa */}
      <ContactSection>
        <ContactLine>{t('footer.photographer')}</ContactLine>
        <ContactLine>Marta Matczuk-Pisarek</ContactLine>
        <ContactLine>
          <a href="tel:+48603758565">
            <FiPhoneCall /> +48 603 758 565
          </a>
        </ContactLine>
      </ContactSection>

      {/* Informacje na dole */}
      <FooterText> {t('footer.copyright')}</FooterText>
    </FooterContainer>
  );
};

export default Footer;
