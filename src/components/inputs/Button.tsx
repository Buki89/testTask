import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  padding: 10px;
  background: #3385ff;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  margin: 15px 0 0 0;
`;

interface Props {
  type: "button" | "submit" | "reset";
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button = ({ type, label, onClick }: Props) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
