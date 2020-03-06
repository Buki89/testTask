import React, { useState } from "react";
import NavBar from "./NavBar";
import Button from "./inputs/Button";
import Input from "./inputs/Input";
import { connect } from "react-redux";
import { addContact } from "../store/actions/clientInfo";
import { H1, Body, Wrapper } from "../lib/styles";

interface Props {
  addContact: typeof addContact;
  location: {
    pathname: string;
  };
  history: {
    push(url: string): void;
  };
}

const ContactPage = ({ addContact, location, history }: Props) => {
  const [agreement, setAgreement] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && phone && agreement) {
      addContact(name, email, phone, agreement);
      history.push("/finalpage");
    }
  };

  const handleGetPhone = (value: string) => {
    const regEx = /^\d{9}$/;
    if (regEx.test(value)) {
      setPhone(value);
    }
  };
  return (
    <>
      <NavBar location={location.pathname} />
      <Body>
        <Wrapper>
          <H1>Zadejte vaše kontaktní údaje</H1>
          <form onSubmit={handleSubmit}>
            <Input type='text' label='Jméno a příjmení' getValue={setName} />
            <Input type='email' label='E-mail' getValue={setEmail} />
            <Input type='number' label='Telefon' getValue={handleGetPhone} />
            <label>
              <input
                type='checkbox'
                required
                checked={agreement}
                onChange={() => {
                  setAgreement(!agreement);
                }}
              ></input>
              Souhlasím se zpracováním osobních údajů pro obchodní účely.
            </label>
            <div>
              {name && phone && agreement && email && (
                <Button label='odeslat' type='submit' />
              )}
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
