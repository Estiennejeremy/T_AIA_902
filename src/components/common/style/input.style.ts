import styled from "styled-components";

export const Input = styled.input`
   {
    border-radius: 50px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    -webkit-appearance: none;
    height: 40px;
    width: 300px;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 40px;
      height: 40px;
      background: linear-gradient(190deg, #e1f5f7, #81cbd4);
      cursor: pointer;
      border-radius: 50%;
    }
  }
`;
