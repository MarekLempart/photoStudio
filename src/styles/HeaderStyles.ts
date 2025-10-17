// src/styles/HeaderStyles.ts
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px;
  height: 110px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-bottom: 5px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0px 15px 20px 5px rgba(168, 162, 138, 0.6);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  width: 100%;

  transform: translateY(0);
  transition: transform 0.3s ease-in-out;

  &.hidden {
    transform: translateY(-100%);
  }

  &.visible {
    transform: translateY(0);
  }
  &.menu-open {
    display: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-bottom: 10px solid ${({ theme }) => theme.colors.accent};
    height: 120px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledImage = styled.img`
  display: block;
  width: 110px;
  height: 110px;
  background-color: transparent;
  margin: 5px 0px 0px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 140px;
    height: 140px;
    margin: 0px 5px 0px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 160px;
    height: 160px;
    margin: 0px 10px 10px;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const StyledNavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 16px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.hover};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.textSecondary};
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  z-index: 999;
  padding: 24px 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: flex-start;

  & > button {
    align-self: flex-end;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const MobileNavLink = styled(StyledNavLink)`
  align-self: flex-start;
  margin-left: 15px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      width: 100%;
    }
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 24px;
    transition: color 250ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 0;
    gap: 24px;
  }
`;

export const TogglesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ThemeToggleButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThemeToggleSlider = styled.div<{ $active: boolean }>`
  position: relative;
  width: 45px;
  height: 20px;
  border-radius: 10px;
  padding: 1px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.colGrannySmith : theme.colors.colTan};
  transition: background-color 0.6s ease;
  cursor: pointer;
`;

export const ThemeToggleButton = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  transform: ${({ $active }) =>
    $active ? "translateX(25px)" : "translateX(0px)"};

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const LanguageToggleSlider = styled.div<{ $isDarkMode: boolean }>`
  position: relative;
  width: 45px;
  height: 20px;
  border-radius: 10px;
  padding: 1px;
  background-color: ${({ $isDarkMode, theme }) =>
    $isDarkMode ? theme.colors.colGrannySmith : theme.colors.colTan};
  transition: background-color 0.6s ease;
  cursor: pointer;
`;

export const LanguageToggleButton = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform: ${({ $active }) =>
    $active ? "translateX(25px)" : "translateX(0px)"};

  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const MobileIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
