import React, { useState } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Button from "./inputs/Button";
import { data, countyArr } from "../data/index";

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
const H4 = styled.h4`
  padding: 0;
  margin: 0;
  font-weight: 500;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
`;
const Item = styled.div`
  margin: 0 10px 0 0;
`;
const Location = () => {
  const [district, setDistrict] = useState(""); // okres
  const [county, setCounty] = useState(""); // kraj

  return (
    <>
      <NavBar />
      <Body>
        <Wrapper>
          <H1>Kde se nachází vaše nemovitost?</H1>
          <H4>Klikněte na kraj a následně vyberte okres</H4>
          <div>
            <select
              value={county}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCounty(e.target.value)
              }
            >
              {countyArr.map((county: string) => (
                <option value={county}>{county}</option>
              ))}
            </select>
          </div>

          <p>Vyberte okres</p>
          <List>
            {county &&
              data[county].map((district: string, index: number) => (
                <Item key={index}>
                  <label>
                    <input
                      name='district'
                      type='radio'
                      value={district}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDistrict(e.target.value)
                      }
                    ></input>
                    {district}
                  </label>
                </Item>
              ))}
          </List>

          <div>
            <Button type='submit' label='Pokračovat' />
          </div>
        </Wrapper>
      </Body>
    </>
  );
};

export default Location;
