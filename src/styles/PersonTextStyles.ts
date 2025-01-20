// src/styles/PersonTextStyles.ts

import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 840px;
  overflow: hidden;
  margin: 0px auto;
  padding-top: 50px;
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: 3 / 4;
    width: 100%;
  }
`;

export const StyledText = styled.div`
  font-family: "Montserrat", cursive;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  text-align: start;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    gap: 10px;
    padding: 10px;
    font-size: 18px;
    line-height: 1.25;
  }

  @media ${({ theme }) => theme.media.desktop} {
    gap: 25px;
    padding: 15px;
    font-size: 20px;
    line-height: 1.5;
  }
`;
