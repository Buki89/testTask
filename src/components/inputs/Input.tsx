import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 5px;
  background-color: #e0e0eb;
  border: none;
  min-height: 30px;
  margin: 2px 0 10px 0;
  padding: 5px;
  font-size: 18px;
  :focus {
    outline: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  label: string;
  type: "text" | "email" | "number";
  getValue?: (value: string) => void;
}

const Input = ({ label, type, getValue }: Props) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <StyledInput
        required
        type={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getValue(e.target.value);
        }}
      ></StyledInput>
    </Wrapper>
  );
};

export default Input;
