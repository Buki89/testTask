import React, { useState } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Button from "./inputs/Button";
import Input from "./inputs/Input";
import { connect } from "react-redux";
import { addContact } from "../store/actions/clientInfo";

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

interface Props {
  addContact: typeof addContact;
}

const ContactPage = ({ addContact }: Props) => {
  const [agreement, setAgreement] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addContact(name, email, phone, agreement);
  };

  return (
    <>
      <NavBar />
      <Body>
        <Wrapper>
          <H1>Zadejte vaše kontanktní údaje</H1>
          <form onSubmit={handleSubmit}>
            <Input type='text' label='Jméno a příjmení' getValue={setName} />
            <Input type='email' label='E-mail' getValue={setEmail} />
            <Input type='number' label='Telefon' getValue={setPhone} />
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
          </form>
        </Wrapper>
      </Body>
    </>
  );
};

const mapDispatchToProps = {
  addContact
};

export default connect(null, mapDispatchToProps)(ContactPage);
