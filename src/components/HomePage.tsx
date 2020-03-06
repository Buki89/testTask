import React from "react";
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

interface Props {
  history: {
    push(url: string): void;
  };
  location: {
    pathname: string;
  };
}

const HomePage = ({ history, location }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    history.push("/locationpage");
  };
  return (
    <div>
      <NavBar location={location.pathname} />
      <Body>
        <Wrapper>
          <Button type='button' label='Začít' onClick={handleClick} />
        </Wrapper>
      </Body>
    </div>
  );
};

export default HomePage;
