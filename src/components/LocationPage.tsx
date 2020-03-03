import React, { useState } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Button from "./inputs/Button";
import { data, countyArr } from "../data/index";
import { connect } from "react-redux";
import { addLocation } from "../store/actions/clientInfo";

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

interface Props {
  addLocation: typeof addLocation;
  history: {
    push(url: string): void;
  };
}

const LocationPage = ({ addLocation, history }: Props) => {
  const [district, setDistrict] = useState(""); // okres
  const [county, setCounty] = useState(""); // kraj

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addLocation(county, district);
    history.push("/PropertyPage");
  };

  return (
    <>
      <NavBar />
      <Body>
        <Wrapper>
          <H1>Kde se nachází vaše nemovitost?</H1>
          <H4>Klikněte na kraj a následně vyberte okres</H4>
          <form onSubmit={handleSubmit}>
            <select
              value={county}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCounty(e.target.value)
              }
            >
              {countyArr.map((county: string, index: number) => (
                <option key={index} value={county}>
                  {county}
                </option>
              ))}
            </select>

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
          </form>
        </Wrapper>
      </Body>
    </>
  );
};

const mapDispatchToProps = {
  addLocation
};

export default connect(null, mapDispatchToProps)(LocationPage);
