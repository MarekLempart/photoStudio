// src/styles/ImageCardStyles.ts
import styled from "styled-components";
import { motion } from "framer-motion";

export const PositionImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 0px 10px;
  width: 100%;
  max-width: 1400px;
  aspect-ratio: 3 / 2;
`;

export const ImageCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: fit-content;
  max-width: 100%;
  height: auto;

  overflow: hidden;
  margin: 0px auto;
  border-radius: 10px;
  background: #000;
  box-shadow: 10px 15px 20px rgba(168, 162, 138, 0.6);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: fit-content;
  }
`;

export const StyledImageCard = styled(motion.img)`
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 170px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-height: 60vh;
  }
  object-fit: cover;
  border-radius: 10px;
`;
