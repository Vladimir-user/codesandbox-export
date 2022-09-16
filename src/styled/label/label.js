import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin-bottom: ${(props) => props.$margin || 0}px;
  cursor: pointer;
`;

export default Label;
