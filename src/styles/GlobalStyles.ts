// src/styles/GlobalStyles.ts

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    min-height: 100vh;
    margin: 0;

    @media ${({ theme }) => theme.media.tabletAndDesktop} {
      font-size: 16px;
    }
  }

  #root {
    display: flex;
    justify-content: center;
  }

  .page-container {
    width: 100%;
    max-width: ${({ theme }) =>
      theme.breakpoints.desktop};
    padding: 0px 5px;
  }

  a {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.accent};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  h1, h2 {
    font-family: 'Oswald', sans-serif;
    text-align: center;
  }
  
  h3, h4, h5, h6 {
    font-family: 'Caveat', cursive;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    text-align: left;
  }

  .header-visible {
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
  }

  .header-hidden {
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }
`;

export default GlobalStyles;
