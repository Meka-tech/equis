import React from "react";
import styled from "styled-components";
import { DashboardSidebar, PrimaryButton } from "../../../components";
import { Body, Container } from "../style";
import { InputElement } from "./input";

export const DashboardProfile = () => {
  return (
    <Container>
      <DashboardSidebar activeNav="Profile" />
      <Body>
        <Referral>
          <h3>Special Referral Link: </h3>
          <a>Equis27299T1z3mq</a>
        </Referral>
        <Inputs>
          <InputElement label="Account Name" />
          <InputElement label="Username" />
          <InputElement label="Email Address" />
          <InputElement label="Registration Date" />
          <InputElement label="Bitcoin Withdrawal Address" />
          <InputElement label="Ethereum Withdrawal Address" />
          <InputElement label="Password" />
          <InputElement label="Change Password" />
        </Inputs>
        <Button>
          <PrimaryButton text="Change Data" />
        </Button>
      </Body>
    </Container>
  );
};

const Inputs = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 40% 40%;
  align-items: center;
  justify-content: space-between;
  grid-row-gap: 3rem;
  margin-bottom: 5rem;
`;
const Referral = styled.div`
  position: absolute;
  font-family: "poppins", sans-serif;
  h3 {
    display: inline;
    font-size: 1.5rem;
  }
  a {
    color: rgba(0, 147, 255, 1);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
const Button = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 3rem;
`;
