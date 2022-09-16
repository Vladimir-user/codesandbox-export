import styled from "styled-components";
import Vector from "/src/assets/vector.svg";

export const CheckLabel = styled.span`
  position: relative;
  display: block;
  height: 24px;
  width: 24px;
  background-color: ${(props) => props.theme.colorForButton};
  border: 1px solid rgba(0, 0, 0, 0.1);

  &::before {
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
