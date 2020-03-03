import React, { useState } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Button from "./inputs/Button";

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

const RealEstate = () => {
  const [property, setProperty] = useState("");

  const propertyArr = ["Byt", "Dům", "Komerční objekt", "Jiné"];

  console.log(property);
  return (
    <>
      <NavBar />
      <Body>
        <Wrapper>
          <H1>O jakou nemovitost se jedná?</H1>
          <div>
            {propertyArr &&
              propertyArr.map((property: string, index: number) => (
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
              ))}
          </div>
          <div>
            <Button type='submit' label='Pokračovat' />
          </div>
        </Wrapper>
      </Body>
    </>
  );
};

export default RealEstate;
