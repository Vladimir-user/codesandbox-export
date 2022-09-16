import styled from "styled-components";

const Form = styled.form`
  position: relative;
  display: block;
  width: ${(props) => props.$width}px;
  box-sizing: border-box;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 3;
`;

export default Form;
