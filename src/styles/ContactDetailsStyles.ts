// src/styles/ContactDetailsStyles.ts
import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    flex: 1;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.distinction};
  margin-bottom: 15px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-bottom: 60px;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${({ theme }) => theme.media.tablet} {
    margin-left: 60px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    margin-left: 150px;
  }
`;

export const DetailIcon = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.distinction};
`;

export const DetailText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};

  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    padding: 0;
    font-size: inherit;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    cursor: pointer;
    text-align: left;

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
