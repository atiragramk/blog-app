import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
  width: 1400px;
  margin: 0px auto;
  padding: 50px 0;
`;

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: 'Gentium Book Plus', serif;
  font-size: 16
  }
`;
