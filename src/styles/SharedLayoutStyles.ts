// src/styles/SharedLayoutStyles.ts
import styled from "styled-components";
import { Spin } from "antd";

export const MainWrapper = styled.div`
  width: 100%;
  padding-top: ${({ theme }) => theme.headerHeight};
  /* min-height: 100vh; */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

// export const MainWrapper = styled.main`
//   width: 100%;
//   padding-top: ${({ theme }) => theme.headerHeight};
//   flex-grow: 1;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
// `;

export const Spiner = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
