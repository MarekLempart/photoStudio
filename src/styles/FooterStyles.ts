// src/components/FooterStyles.ts
import styled from "styled-components";

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-top: 3px solid ${({ theme }) => theme.colors.colGrannySmith};
`;

export const ContactSection = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

export const ContactLine = styled.p`
  margin: 2px 0;
  font-size: 13px;
  line-height: 1, 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;

  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    transition: color 200ms, transform 200ms;

    &:hover {
      color: ${({ theme }) => theme.colors.colGrannySmith};
      transform: scale(1.05);
    }
  }

  svg {
    font-size: 15px;
  }

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    font-size: 16px;
  }
`;

export const FooterText = styled.p`
  margin-top: 8px;
  font-size: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    font-size: 10px;
  }
`;
