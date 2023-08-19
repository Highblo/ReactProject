import { styled } from "styled-components";

export const Button = ({ children, icon, outline = false }) => {
  return (
    <SButton outline={outline}>
      {icon}
      {children}
    </SButton>
  );
};

const SButton = styled.button`
  padding: 18px 10px;
  background-color: ${(props) => (props.outline ? "white" : "black")};
  color: ${(props) => (props.outline ? "black" : "white")};
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
