import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  label: string;
  type: "text" | "email" | "number";
  pattern?: any;
}

const StyledInput = styled.input`
  border-radius: 5px;
  background-color: #e0e0eb;
  border: none;
  min-height: 30px;
  margin: 5px 0 10px 0;
  padding: 5px;
  font-size: 18px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = ({ label, type }: Props) => {
  const [value, setValue] = useState(undefined);
  console.log(value);
  return (
    <Wrapper>
      <label>{label}</label>
      <StyledInput
        required
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      ></StyledInput>
    </Wrapper>
  );
};

export default Input;
