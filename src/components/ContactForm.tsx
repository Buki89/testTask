import React, { useState } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Button from "./inputs/Button";
import Input from "./inputs/Input";

const Body = styled.div`
  display: flex;
  background-color: #e0e0eb;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 1);
  background-color: #fff;
`;
const H1 = styled.h1`
  padding: 0;
  margin: 0;
`;

const ContactForm = () => {
  const [agreement, setAgreement] = useState(false);
  console.log(agreement);
  return (
    <>
      <NavBar />
      <Body>
        <Wrapper>
          <H1>Zadejte vaše kontanktní údaje</H1>
          <Input type='text' label='Jméno a příjmení' />
          <Input type='email' label='E-mail' />
          <Input type='number' label='Telefon' />
          <label>
            <input
              type='checkbox'
              checked={agreement}
              onChange={() => {
                setAgreement(!agreement);
              }}
            ></input>
            Souhlasím se zpracováním osobních údajů pro obchodní účely.
          </label>
          <div>
            <Button label='odeslat' type='submit' />
          </div>
        </Wrapper>
      </Body>
    </>
  );
};

export default ContactForm;
