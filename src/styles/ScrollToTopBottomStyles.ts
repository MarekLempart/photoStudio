// src/styles/ScrollToTopBottomStyles.ts
import styled from "styled-components";

// Kontener pozycjonowany centralnie, o maksymalnej szerokości takiej jak Header
export const ScrollContainer = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    bottom: 20px;
  /* Centrowanie kontenera na ekranie */
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    /* Pobieramy szerokość desktopową z theme (np. 1440px), żeby przycisk nie uciekał na bok */
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    /* Wyrównanie przycisku do prawej strony tego kontenera */
    display: flex;
    justify-content: flex-end;
    /* Margines od krawędzi kontenera */
    padding-right: 20px;
    z-index: 1000;
    /* Płynne pokazywanie/ukrywanie */
    opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    /* Ważne: Kontener jest szeroki, więc wyłączamy jego klikalność, 
     żeby nie zasłaniał treści pod spodem. Klikalny będzie tylko przycisk w środku. */
    pointer-events: none;

    @media ${({ theme }) => theme.media.desktop} {
        bottom: 40px;
        /* Na dużych ekranach margines może być mniejszy, bo trzyma nas max-width */
        padding-right: 0px;
    }
`;

export const ScrollButton = styled.button`
    /* Włączamy klikanie dla samego guzika */
    pointer-events: auto;

    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textWhite};
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hover};
        transform: scale(1.1);
    }

    svg {
        width: 16px;
        height: 16px;
    }

    @media ${({ theme }) => theme.media.tabletAndDesktop} {
        width: 45px;
        height: 45px;

        svg {
        width: 20px;
        height: 20px;
        }
    }
`;