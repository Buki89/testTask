import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #9494b8;
  padding: 10px;
`;

interface NavProps {
  match?: boolean;
}

const Nav = styled.div<NavProps>`
  color: #fff;
  margin: 0 5px;
  font-weight: 600;
  text-decoration: ${({ match }) => (match ? "underline" : "none")};
`;

interface Props {
  location?: string;
}

const NavBar = ({ location = "" }: Props) => {
  return (
    <Wrapper>
      <Nav match={"/" === location}>VÍTEJTE</Nav>
      <Nav>></Nav>
      <Nav match={"/locationpage" === location}>MĚSTO</Nav>
      <Nav>></Nav>
      <Nav match={"/propertypage" === location}>TYP NEMOVITOSTI</Nav>
      <Nav>></Nav>
      <Nav match={"/contactpage" === location}>KONTAKT</Nav>
      <Nav>></Nav>
      <Nav match={"/finalpage" === location}>SOUHRN</Nav>
    </Wrapper>
  );
};

export default NavBar;
