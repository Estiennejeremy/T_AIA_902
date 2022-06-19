import styled from "styled-components";

export const Button = styled.button`
   {
    border: none;
    width: 250px;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow: 20px 20px 30px #d9d9d9, -20px -20px 60px #ffffff;
    font-size: 20px;
    font-weight: bold;
    /* color: #b3b3b3; */
    transition: background 1s ease-out;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
  }
  :hover {
    border-radius: 50px;
    background: #ffffff;
    box-shadow: inset 10px 10px 20px 10px #ededed,
      inset -20px -20px 60px #ffffff;
  }
`;
