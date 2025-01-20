// src/styles/ContactFormStyles.ts

import styled from "styled-components";

export const PhoneInputStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  position: relative;
  padding: 0px 20px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0px 40px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 0px 80px;
  }

  .PhoneInput {
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.textOrange};
    border-radius: 5px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.bgWhite};
  }

  .PhoneInputInput {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textDarkNavy};
  }

  .PhoneInputCountry {
    margin-right: 10px;
  }

  .PhoneInputCountrySelect {
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textDarkNavy};
    cursor: pointer;
  }

  .PhoneInputCountryIcon {
    width: 20px;
    height: 15px;
    border-radius: 3px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;

  @media ${({ theme }) => theme.media.tabletAndDesktop} {
    flex: 1;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.distinction};
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  position: relative;
  padding: 0px 20px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 0px 40px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 0px 80px;
  }
`;

export const InputTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 140px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.textOrange};
  color: ${({ theme }) => theme.colors.textDarkNavy};
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.textDarkNavy};
  border: 1px solid ${({ theme }) => theme.colors.textOrange};
  border-radius: 5px;
  resize: none;
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.bgOrange};
  color: ${({ theme }) => theme.colors.textDarkNavy};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverButton};
  }
`;

export const ErrorText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.textChickenComb};
  font-size: 12px;
  margin-top: 5px;
  position: absolute;
  bottom: -24px;
`;
