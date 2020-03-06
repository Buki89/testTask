import React from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { H1, H3, Body, Wrapper, Row, P } from "../lib/styles";
import { ClientInfoState } from "../lib/types";

interface Props {
  location: {
    pathname: string;
  };
  name: string;
  email: string;
  phone: string;
  property: string;
  county: string;
  district: string;
}

const FinalPage = ({
  location,
  name,
  email,
  phone,
  county,
  district,
  property
}: Props) => {
  return (
    <>
      <NavBar location={location.pathname} />
      <Body>
        <Wrapper>
          <H1>Konečný souhrn</H1>
          <Row>
            <H3>Jméno:</H3> <P>{name}</P>
          </Row>
          <Row>
            <H3>Email:</H3> <P>{email}</P>
          </Row>
          <Row>
            <H3>Telefonní číslo:</H3> <P>{phone}</P>
          </Row>
          <Row>
            <H3>Majetek:</H3> <P>{property}</P>
          </Row>
          <Row>
            <H3>Kraj:</H3> <P>{county}</P>
          </Row>
          <Row>
            <H3>Okres:</H3> <P>{district}</P>
          </Row>
        </Wrapper>
      </Body>
    </>
  );
};

const mapStatetoProps = (state: ClientInfoState) => {
  return {
    name: state.name,
    email: state.email,
    phone: state.phone,
    agreeent: state.agreement,
    property: state.property,
    county: state.county,
    district: state.district
  };
};

export default connect(mapStatetoProps)(FinalPage);
