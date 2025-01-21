// src/styles/RegulationsStyles.ts

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