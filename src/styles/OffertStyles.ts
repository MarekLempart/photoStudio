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
  margin: 5px auto;
  padding: 0px;
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
    padding: 5px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    max-width: ${({ theme }) => theme.breakpoints.mobile};
    padding: 5px;
  }
`;