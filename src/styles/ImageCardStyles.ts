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
  align-items: center;
  position: relative;
  width: 100%;

  overflow: hidden;
  margin: 0px auto;
  border-radius: 10px;
  background: #000;
  box-shadow: 5px 15px 20px rgba(168, 162, 138, 0.5);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const StyledImageCard = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
