import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #9494b8;
  padding: 10px;
  div {
    color: #fff;
    margin: 0 5px;
    font-weight: 600;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <div>MĚSTO</div>
      <div>></div>
      <div>TYP NEMOVITOSTI</div>
      <div>></div>
      <div>KONTAKT</div>
    </Wrapper>
  );
};

export default NavBar;
