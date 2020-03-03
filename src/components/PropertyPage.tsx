import React, { useState } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Button from "./inputs/Button";
import { connect } from "react-redux";
import { addProperty } from "../store/actions/clientInfo";

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
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 1);
  background-color: #fff;
`;
const H1 = styled.h1`
  padding: 0;
  margin: 0;
`;

interface Props {
  addProperty: typeof addProperty;
  history: {
    push(url: string): void;
  };
}

const PropertyPage = ({ addProperty, history }: Props) => {
  const [property, setProperty] = useState("");

  const propertyArr = ["Byt", "Dům", "Komerční objekt", "Jiné"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProperty(property);
    history.push("/ContactPage");
  };

  console.log(property);
  return (
    <>
      <NavBar />
      <Body>
        <Wrapper>
          <H1>O jakou nemovitost se jedná?</H1>
          <form onSubmit={handleSubmit}>
            {propertyArr &&
              propertyArr.map((property: string, index: number) => (
                <div key={index}>
                  <label>
                    <input
                      name='district'
                      type='radio'
                      value={property}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setProperty(e.target.value)
                      }
                    ></input>
                    {property}
                  </label>
                </div>
              ))}
            <div>
              <Button type='submit' label='Pokračovat' />
            </div>
          </form>
        </Wrapper>
      </Body>
    </>
  );
};

const mapDispatchToProps = {
  addProperty
};

export default connect(null, mapDispatchToProps)(PropertyPage);
