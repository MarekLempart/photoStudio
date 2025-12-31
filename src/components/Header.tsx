// src/components/Header.tsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import useAppContext from "../hooks/useAppContext";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebook,
  FaHome,
  FaCloudSun,
  FaCloudMoon,
} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { IoImagesOutline } from "react-icons/io5";
import { GiCutDiamond } from "react-icons/gi";
import { useHeaderVisibility } from "../hooks/useHeaderVisibility";
import {
  HeaderWrapper,
  Logo,
  StyledImage,
  Nav,
  StyledNavLink,
  MobileMenuIcon,
  MobileNav,
  MobileNavLink,
  SocialMediaWrapper,
  Overlay,
  TogglesWrapper,
  ThemeToggleButtonWrapper,
  ThemeToggleSlider,
  ThemeToggleButton,
  LanguageToggleSlider,
  LanguageToggleButton,
  MobileIconsContainer,
} from "../styles/HeaderStyles";
import LogoMMphotoImage from "../img/Marta MP.png";

const PlFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
    <rect width="8" height="5" fill="#fff" />
    <rect width="8" height="2.5" y="2.5" fill="#dc143c" />
  </svg>
);

const GbFlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path
      d="M0,0 L60,30 M60,0 L0,30"
      clipPath="url(#s)"
      stroke="#c8102e"
      strokeWidth="4"
    />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
  </svg>
);

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { theme: currentTheme, toggleTheme, language, changeLanguage } = useAppContext();
  const isDarkMode = currentTheme === "dark";

  const breakpointTablet = useMemo(
    () => parseInt(theme.breakpoints.tablet),
    [theme.breakpoints.tablet]
  );
  const isHeaderVisible = useHeaderVisibility();
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(
    window.innerWidth < breakpointTablet
  );

  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobileOrTablet = window.innerWidth < breakpointTablet;
      setIsMobileOrTablet(isNowMobileOrTablet);

      if (!isNowMobileOrTablet && isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, toggleMenu, breakpointTablet]);

  const handleMenuClick = (event: React.MouseEvent) => {
    if (isMobileOrTablet) {
      toggleMenu();
    }
    event.stopPropagation();
  };

  const handleCloseClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleMenu();
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      toggleMenu();
    }
    event.stopPropagation();
  };

  const handleSocialMediaClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isMobileOrTablet) {
      toggleMenu();
    }
  };

  const ImageComponent = () => (
    <StyledImage src={LogoMMphotoImage} alt="MM Photo Logo" />
  );

  return (
    <>
      <HeaderWrapper
        className={`${isHeaderVisible ? "visible" : "hidden"} ${isMenuOpen ? "menu-open" : ""}`}
      >
        <Logo>
          <NavLink to="/" onClick={handleMenuClick} style={{ display: 'flex', alignItems: 'center' }}>
            <ImageComponent />
          </NavLink>
        </Logo>

        <Nav>
          <StyledNavLink as={NavLink} to="/" onClick={handleMenuClick}>
            <FaHome /> {t('nav.home')}
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/portfolio" onClick={handleMenuClick}>
            <IoImagesOutline /> {t('nav.portfolio')}
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/offer" onClick={handleMenuClick}>
            <GiCutDiamond /> {t('nav.offer')}
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/regulations" onClick={handleMenuClick}>
            <AiOutlineSolution /> {t('nav.regulations')}
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/contact" onClick={handleMenuClick}>
            <MdContactPhone /> {t('nav.contact')}
          </StyledNavLink>
          <StyledNavLink as={NavLink} to="/about" onClick={handleMenuClick}>
            <FaPenNib /> {t('nav.about')}
          </StyledNavLink>

          <SocialMediaWrapper>
            <a
              href="https://www.instagram.com/marta_mmphoto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialMediaClick}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063678755467"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSocialMediaClick}
            >
              <FaFacebook />
            </a>
          </SocialMediaWrapper>

          <TogglesWrapper>
            <ThemeToggleSlider
              onClick={toggleTheme}
              $active={isDarkMode}
            >
              <ThemeToggleButton $active={isDarkMode}>
                {isDarkMode ? <FaCloudMoon /> : <FaCloudSun />}
              </ThemeToggleButton>
            </ThemeToggleSlider>

            <LanguageToggleSlider
              onClick={() => changeLanguage(language === "pl" ? "en" : "pl")}
              $isDarkMode={isDarkMode}
            >

              <LanguageToggleButton $active={language === "en"}>
                {language === "en" ? <GbFlagIcon /> : <PlFlagIcon />}
              </LanguageToggleButton>
            </LanguageToggleSlider>
          </TogglesWrapper>
        </Nav>

        {/* Kontener dla mobilnych ikon */}
        {isMobileOrTablet && (
          <MobileIconsContainer>
            <ThemeToggleButtonWrapper>
              <LanguageToggleSlider
                onClick={() => changeLanguage(language === "pl" ? "en" : "pl")}
                $isDarkMode={isDarkMode}
              >
                <LanguageToggleButton $active={language === "en"}>
                  {language === "en" ? <GbFlagIcon /> : <PlFlagIcon />}
                </LanguageToggleButton>
              </LanguageToggleSlider>
            </ThemeToggleButtonWrapper>

            <ThemeToggleButtonWrapper>
              <ThemeToggleSlider
                onClick={toggleTheme}
                $active={isDarkMode}
              >
                <ThemeToggleButton $active={isDarkMode}>
                  {isDarkMode ? <FaCloudMoon /> : <FaCloudSun />}
                </ThemeToggleButton>
              </ThemeToggleSlider>
            </ThemeToggleButtonWrapper>

            <MobileMenuIcon onClick={toggleMenu}>
              <FaBars />
            </MobileMenuIcon>
          </MobileIconsContainer>
        )}
      </HeaderWrapper>

      {isMenuOpen && (
        <Overlay ref={overlayRef} onClick={handleOverlayClick}>
          <MobileNav>
            <button onClick={handleCloseClick}>
              <FaTimes />
            </button>

            <MobileNavLink as={NavLink} to="/" onClick={handleMenuClick}>
              <FaHome /> {t('nav.home')}
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/portfolio" onClick={handleMenuClick}>
              <IoImagesOutline /> {t('nav.portfolio')}
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/offer" onClick={handleMenuClick}>
              <GiCutDiamond /> {t('nav.offer')}
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/regulations" onClick={handleMenuClick}>
              <AiOutlineSolution /> {t('nav.regulations')}
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/contact" onClick={handleMenuClick}>
              <MdContactPhone /> {t('nav.contact')}
            </MobileNavLink>
            <MobileNavLink as={NavLink} to="/about" onClick={handleMenuClick}>
              <FaPenNib /> {t('nav.about')}
            </MobileNavLink>

            <TogglesWrapper
              style={{
                marginTop: "auto",
                marginBottom: "20px",
                alignItems: "flex-start",
                marginLeft: "15px",
              }}
            >
              <ThemeToggleSlider
                onClick={toggleTheme}
                $active={isDarkMode}
              >
                <ThemeToggleButton $active={isDarkMode}>
                  {isDarkMode ? <FaCloudMoon /> : <FaCloudSun />}
                </ThemeToggleButton>
              </ThemeToggleSlider>

              <LanguageToggleSlider
                onClick={() => changeLanguage(language === "pl" ? "en" : "pl")}
                $isDarkMode={isDarkMode}
              >

                <LanguageToggleButton $active={language === "en"}>
                  {language === "en" ? <GbFlagIcon /> : <PlFlagIcon />}
                </LanguageToggleButton>
              </LanguageToggleSlider>
            </TogglesWrapper>

            <SocialMediaWrapper>
              <a
                href="https://www.instagram.com/marta_mmphoto"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialMediaClick}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063678755467"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialMediaClick}
              >
                <FaFacebook />
              </a>
            </SocialMediaWrapper>
          </MobileNav>
        </Overlay>
      )}
    </>
  );
};

export default Header;
