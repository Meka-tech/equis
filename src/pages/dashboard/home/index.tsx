import React from "react";
import styled from "styled-components";
import { DashboardSidebar, PrimaryButton } from "../../../components";
import { Body, Container } from "../style";

export const DashboardHome = () => {
  return (
    <Container>
      <DashboardSidebar />
      <Body>
        <Header>Crypto Trading Dashboard</Header>
        <DepositDiv>
          <DepositRow>
            <h2>Active Deposit</h2>
            <h3>$0.00</h3>
            <ColorGreen />
          </DepositRow>
          <DepositRow>
            {" "}
            <h2>Total Deposit</h2>
            <h3>$0.00</h3>
            <ColorBlue />
          </DepositRow>
          <DepositRow>
            {" "}
            <h2>Total Withdrawal</h2>
            <h3>$0.00</h3>
            <ColorPink />
          </DepositRow>
        </DepositDiv>
        <Details>
          <Detail>
            <h2>Equis User:</h2>
          </Detail>
          <Detail>
            <h2>Account Balance:</h2>
          </Detail>
          <Detail>
            <h2>Total Earnings:</h2>
          </Detail>
          <Detail>
            <h2>Pending Withdrawal:</h2>
          </Detail>
          <Detail>
            <h2>Investment Plan:</h2>
          </Detail>
          <Button>
            <PrimaryButton
              text="Invest"
              to="/current-opportunities-crypto-investment"
            />
          </Button>
        </Details>
        <DepositDiv>
          <DepositRow>
            <h2>Active Deposit</h2>
            <h3>$0.00</h3>
            <ColorGreen />
          </DepositRow>
          <DepositRow>
            {" "}
            <h2>Total Deposit</h2>
            <h3>$0.00</h3>
            <ColorBlue />
          </DepositRow>
          <DepositRow>
            {" "}
            <h2>Total Withdrawal</h2>
            <h3>$0.00</h3>
            <ColorPink />
          </DepositRow>
        </DepositDiv>
        <Details>
          <Detail>
            <h2>Equis User:</h2>
          </Detail>
          <Detail>
            <h2>Account Balance:</h2>
          </Detail>
          <Detail>
            <h2>Total Earnings:</h2>
          </Detail>
          <Detail>
            <h2>Pending Withdrawal:</h2>
          </Detail>
          <Detail>
            <h2>Investment Plan:</h2>
          </Detail>
          <Button>
            <PrimaryButton
              text="Invest"
              to="/current-opportunities-real-estate"
            />
          </Button>
        </Details>
      </Body>
    </Container>
  );
};

const Header = styled.h1`
  text-align: center;
  color: rgba(0, 147, 255, 1);
  font-family: "poppins", sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const DepositDiv = styled.div`
  background-color: rgba(229, 244, 255, 1);
  width: 100%;
  height: 24rem;
  margin-bottom: 5rem;
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

const DepositRow = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid rgba(217, 217, 217, 1);
  font-family: "poppins", sans-serif;
  :nth-child(3) {
    border-right: none;
  }
  h2 {
    font-weight: 500;
    margin-bottom: 4rem;
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
`;

const ColorGreen = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: rgba(68, 255, 2, 1);
`;

const ColorBlue = styled(ColorGreen)`
  background-color: rgba(69, 3, 255, 1);
`;

const ColorPink = styled(ColorGreen)`
  background-color: rgba(253, 2, 228, 1);
`;

const Details = styled.div`
  padding: 5rem;
  background-color: rgba(229, 244, 255, 1);
  width: 100%;
  margin-bottom: 10rem;
`;

const Detail = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  padding-top: 4rem;
  margin-bottom: 4rem;
  font-family: "poppins", sans-serif;
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
const Button = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
