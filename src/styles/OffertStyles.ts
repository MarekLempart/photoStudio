// src/styles/OffertStyles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 ${({ theme }) => theme.spacing.mobilePadding};
  margin: 0px auto 20px;
  width: 100%;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 ${({ theme }) => theme.spacing.tabletPadding};
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 0 ${({ theme }) => theme.spacing.desktopPadding};
  }
`;

export const SliderContainer = styled.div`
  width: 95%;
  margin: 0px auto;
  overflow: hidden;
  position: relative;
`;
