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
import { useHeaderVisibility } from "../hooks/useHeaderVisibility";
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
  const breakpointMobile = useMemo(
    () => parseInt(theme.breakpoints.mobile),
    [theme.breakpoints.mobile]
  );
  const isHeaderVisible = useHeaderVisibility();
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= breakpointMobile
  );

  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= breakpointMobile;
      setIsMobile(isNowMobile);

      if (!isNowMobile && isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, toggleMenu, breakpointMobile]);

  const handleMenuClick = (event: React.MouseEvent) => {
    if (isMobile) {
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
    if (isMobile) {
      toggleMenu();
    }
  };

  const ImageComponent = () => (
    <StyledImage src={LogoMMphotoImage} alt="MM Photo Logo" />
  );

  return (
    <>
      <HeaderWrapper
        className={`${isHeaderVisible ? "visible" : "hidden"} ${
          isMenuOpen ? "menu-open" : ""
        }`}
      >
        <Logo>
          <ImageComponent />
        </Logo>
        <Nav>
          <StyledNavLink as={NavLink} to="/" onClick={handleMenuClick}>
            <FaHome /> Home
          </StyledNavLink>

          <StyledNavLink as={NavLink} to="/portfolio" onClick={handleMenuClick}>
            <FaPenNib /> Portfolio
          </StyledNavLink>

          <StyledNavLink as={NavLink} to="/offer" onClick={handleMenuClick}>
            <FaPenNib /> Oferta
          </StyledNavLink>

          <StyledNavLink as={NavLink} to="/regulations" onClick={handleMenuClick}>
            <FaPenNib /> Regulamin
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
        {isMobile && (
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
              <FaPenNib /> Portfolio
            </MobileNavLink>

            <MobileNavLink as={NavLink} to="/offer" onClick={handleMenuClick}>
              <FaPenNib /> Oferta
            </MobileNavLink>

            <MobileNavLink as={NavLink} to="/regulations" onClick={handleMenuClick}>
              <FaPenNib /> Regulamin
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
