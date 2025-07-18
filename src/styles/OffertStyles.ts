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
  max-width: ${({ theme }) => theme.breakpoints.mobile};
  width: 90%;
  margin: 5px auto;
  padding: ${({ theme }) => theme.spacing.mobilePadding};
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
    padding: ${({ theme }) => theme.spacing.tabletPadding};
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    padding: 10px;
  }
`;

// export const SliderContainer = styled.div`
//   width: 100%;
//   margin: 20px auto;
//   padding: ${({ theme }) => theme.spacing.mobilePadding};

//   @media ${({ theme }) => theme.media.tablet} {
//     padding: ${({ theme }) => theme.spacing.tabletPadding};
//   }

//   @media ${({ theme }) => theme.media.desktop} {
//     padding: ${({ theme }) => theme.spacing.desktopPadding};
//   }
// `;