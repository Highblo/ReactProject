import styled from "styled-components";

export const SButton = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000;
  border-radius: 5px;
  border: none;
  min-width: 220px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #fff;
    border: 1px solid black;
    color: black;
  }
`;

export const SOutlineButton = styled(SButton)`
    background-color: #fff;
    color: #000;
    border: 1px solid black;

  &:hover {
    background-color: #000;
    border: 1px solid transparent;
    color: white;
  }
`;
