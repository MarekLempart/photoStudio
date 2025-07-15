// src/styles/RegulationsTextStyles.ts
import styled from "styled-components";

export const RegulationsTextContainer = styled.div`
    width: 90%;
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    margin: 20px auto 0px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    border-radius: 8px;
    box-shadow: 10px 15px 20px rgba(168, 162, 138, 0.3);

    @media ${({ theme }) => theme.media.mobile} {
        padding: 15px;
    }

    @media ${({ theme }) => theme.media.tablet} {
        padding: 20px;
    }

    @media ${({ theme }) => theme.media.desktop} {
        padding: 25px;
    }
`;

export const Section = styled.section`
    margin-bottom: 20px;

    h3 {
        font-family: "Oswald", sans-serif;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.textPrimary};
        margin-bottom: 10px;
    }

    @media ${({ theme }) => theme.media.mobile} {
        h3 {
        font-size: 1.2rem;
        }
    }
`;

export const Title = styled.h2`
    font-family: "Oswald", sans-serif;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.accent};

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 1.8rem;
    }
`;

export const Point = styled.p`
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    margin: 10px 0;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SubPoint = styled.li`
    font-family: "Montserrat", sans-serif;
    font-size: 0.9rem;
    margin-left: 20px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media ${({ theme }) => theme.media.mobile} {
        font-size: 0.8rem;
    }
`;