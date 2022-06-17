import styled from "styled-components";
import { IDiv } from "./IDiv";

export const Div = styled.div<IDiv>`
   {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    writing-mode: ${(props) => props.writingMode};
    text-orientation: ${(props) => props.textOrientation};
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    background-color: ${(props) => props.backgroundColor};
    border-radius: ${(props) => props.borderRadius};
    background: ${(props) => props.background};
    box-shadow: ${(props) => props.boxShadow};
    flex-wrap: ${(props) => props.flexWrap};
    flex-direction: ${(props) => props.flexDirection};
    transform: ${(props) => props.flexDirection};
  }
`;

export const BigDiv = styled.div<IDiv>`
   {
    background-color: #f2f2f2;
  }
`;
