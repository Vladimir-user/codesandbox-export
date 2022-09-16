import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
  margin: 0;
}

body {
  width: ${(props) => props.theme.pageWidth};
  min-height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  font-weight: ${(props) => props.theme.fontWeightDefault};
  color: ${(props) => props.theme.textColor};
  margin: 0 auto;
}
`;
