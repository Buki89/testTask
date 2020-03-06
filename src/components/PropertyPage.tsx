import React, { useState } from "react";
import NavBar from "./NavBar";
import Button from "./inputs/Button";
import { connect } from "react-redux";
import { addProperty } from "../store/actions/clientInfo";
import { propertyArr } from "../data/index";
import { H1, Body, Wrapper } from "../lib/styles";

interface Props {
  addProperty: typeof addProperty;
  history: {
    push(url: string): void;
  };
  location: {
    pathname: string;
  };
}

const PropertyPage = ({ addProperty, history, location }: Props) => {
  const [property, setProperty] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProperty(property);
    history.push("/contactpage");
  };

  return (
    <>
      <NavBar location={location.pathname} />
      <Body>
        <Wrapper>
          <H1>O jakou nemovitost se jedná?</H1>
          <form onSubmit={handleSubmit}>
            {propertyArr &&
              propertyArr.map((property: string, index: number) => (
                <div key={index}>
                  <label>
                    <input
                      required
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
            <div>{property && <Button type='submit' label='Pokračovat' />}</div>
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
