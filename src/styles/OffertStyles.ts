// src/styles/OffertStyles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: ${({ theme }) => theme.spacing.mobilePadding};
  margin: 0px auto 20px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: ${({ theme }) => theme.spacing.tabletPadding};
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: ${({ theme }) => theme.spacing.desktopPadding};
  }
`;

export const SliderContainer = styled.div`
  width: 90%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 40px auto;        /* odstęp od tekstu */
  position: relative;       /* by z-index działał wewnątrz */
  overflow: hidden;         /* schowa ewentualne „wychodzące” elementy */
`;