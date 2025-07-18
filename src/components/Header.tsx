// src/components/Header.tsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "styled-components";
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
// import { useHeaderVisibility } from "../hooks/useHeaderVisibility";
import useThemeContext from "../hooks/useThemeContext";
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
  ThemeToggleButtonWrapper,
  ThemeToggleSlider,
  ThemeToggleButton,
  MobileIconsContainer,
} from "../styles/HeaderStyles";
import LogoMMphotoImage from "../img/Marta MP.png";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const theme = useTheme();
  const { theme: currentTheme, toggleTheme } = useThemeContext();
  const breakpointTablet = useMemo(
    () => parseInt(theme.breakpoints.tablet),
    [theme.breakpoints.tablet]
  );
  // const isHeaderVisible = useHeaderVisibility();
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
      {/* <HeaderWrapper
        className={`${isHeaderVisible ? "visible" : "hidden"} ${isMenuOpen ? "menu-open" : ""
          }`}
      > */}
      <HeaderWrapper className={isMenuOpen ? "menu-open" : ""}>
        <Logo>
          <ImageComponent />
        </Logo>

        <Nav>
          <StyledNavLink as={NavLink} to="/" onClick={handleMenuClick}>
            <FaHome /> Home
          </StyledNavLink>

          <StyledNavLink as={NavLink} to="/portfolio" onClick={handleMenuClick}>
            <IoImagesOutline /> Portfolio
          </StyledNavLink>

          <StyledNavLink as={NavLink} to="/offer" onClick={handleMenuClick}>
            <GiCutDiamond /> Oferta
          </StyledNavLink>

          <StyledNavLink as={NavLink} to="/regulations" onClick={handleMenuClick}>
            <AiOutlineSolution /> Regulamin
          </StyledNavLink>

          <StyledNavLink as={NavLink} to="/contact" onClick={handleMenuClick}>
            <MdContactPhone /> Kontakt
          </StyledNavLink>

          <StyledNavLink as={NavLink} to="/about" onClick={handleMenuClick}>
            <FaPenNib /> O mnie
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
          <ThemeToggleButtonWrapper>
            <ThemeToggleSlider onClick={toggleTheme} $active={currentTheme === "dark"}>
              <ThemeToggleButton $active={currentTheme === "dark"}>
                {currentTheme === "dark" ? <FaCloudMoon /> : <FaCloudSun />}
              </ThemeToggleButton>
            </ThemeToggleSlider>
          </ThemeToggleButtonWrapper>
        </Nav>

        {/* Kontener dla mobilnych ikon */}
        {isMobileOrTablet && (
          <MobileIconsContainer>
            <ThemeToggleButtonWrapper>
              <ThemeToggleSlider onClick={toggleTheme} $active={currentTheme === "dark"}>
                <ThemeToggleButton $active={currentTheme === "dark"}>
                  {currentTheme === "dark" ? <FaCloudMoon /> : <FaCloudSun />}
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
              <FaHome /> Home
            </MobileNavLink>

            <MobileNavLink as={NavLink} to="/portfolio" onClick={handleMenuClick}>
              <IoImagesOutline /> Portfolio
            </MobileNavLink>

            <MobileNavLink as={NavLink} to="/offer" onClick={handleMenuClick}>
              <GiCutDiamond /> Oferta
            </MobileNavLink>

            <MobileNavLink as={NavLink} to="/regulations" onClick={handleMenuClick}>
              <AiOutlineSolution /> Regulamin
            </MobileNavLink>

            <MobileNavLink as={NavLink} to="/contact" onClick={handleMenuClick}>
              <MdContactPhone /> Kontakt
            </MobileNavLink>

            <MobileNavLink as={NavLink} to="/about" onClick={handleMenuClick}>
              <FaPenNib /> O mnie
            </MobileNavLink>

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
