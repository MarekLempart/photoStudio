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
  /* Ustawiamy kontener na 100% szerokości rodzica (czyli <Container>) */
  width: 100%;
  
  /* To jest najważniejsza zasada - ukrywamy wszystko, co próbuje "wyjść" poza ten kontener */
  overflow: hidden;
  
  /* Dajemy mu kontekst pozycjonowania dla strzałek itp. */
  position: relative;
`;

// export const SliderContainer = styled.div`
//   max-width: ${({ theme }) => theme.breakpoints.mobile};
//   width: 90%;
//   margin: 5px auto;
//   padding: ${({ theme }) => theme.spacing.mobilePadding};
//   position: relative;
//   overflow: hidden;

//   @media ${({ theme }) => theme.media.tablet} {
//     max-width: ${({ theme }) => theme.breakpoints.tablet};
//     padding: ${({ theme }) => theme.spacing.tabletPadding};
//   }

//   @media ${({ theme }) => theme.media.desktop} {
//     max-width: ${({ theme }) => theme.breakpoints.desktop};
//     padding: 10px;
//   }
// `;

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