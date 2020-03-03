import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  padding: 10px;
  background: #3385ff;
  border-radius: 15px;
  border: none;
`;

interface Props {
  type: "button" | "submit" | "reset";
  label: string;
}
const Button = ({ type, label }: Props) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

export default Button;
