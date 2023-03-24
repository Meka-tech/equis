import React from "react";
import styled from "styled-components";
import { DashboardSidebar, PrimaryButton } from "../../../components";
import { tab } from "../../../utilities/responsive";
import { Body, Container } from "../style";
import { InputElement } from "./input";

export const DashboardProfile = () => {
  const data: any = localStorage.getItem("userData");
  const userData = JSON.parse(data);
  return (
    <Container>
      <DashboardSidebar activeNav="Profile" />
      <Body>
        <Referral>
          <h3>Special Referral Link: </h3>
          <a>Equis27299T1z3mq</a>
        </Referral>
        <Inputs>
          <InputElement label="Account Name" value={userData.name} readOnly />
          <InputElement label="Username" value={userData.username} />
          <InputElement label="Email Address" value={userData.email} />
          <InputElement label="Registration Date" value={userData.regdate} />
          <InputElement
            label="Bitcoin Withdrawal Address"
            value={userData.btcaddress}
          />
          <InputElement
            label="Ethereum Withdrawal Address"
            value={userData.ethaddress}
          />
          <InputElement label="Password" value={userData.password} />
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

  justify-content: space-between;
  grid-row-gap: 3rem;
  margin-bottom: 5rem;
  ${tab({
    display: "flex",
    flexDirection: "column"
  })}
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
