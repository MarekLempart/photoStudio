// src/styles/MapStyles.ts
import styled from "styled-components";

export const MapOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const MapWrapper = styled.div`
  background: white;
  position: relative;
  width: 90%;
  height: 70%;
  border-radius: 8px;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    width: 50%;
    height: 50%;
  }
`;

export const MapCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1001;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textDarkNavy};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.textChickenComb};
  }
`;
