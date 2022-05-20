import styled from "styled-components";
import { IText } from "./IText";

export const Text = styled.p<IText>`
   {
    font-size: ${(props) => props.fontSize};
    justify-content: start;
    text-align: start;
    font-family: "Poppins", sans-serif;
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    color: ${(props) => (props.disabled ? "#c9c9c9" : props.color)};
    font-weight: bold;
  }
`;
