import React, { useState } from "react";
import styled from "styled-components";
import { DashboardSidebar, PrimaryButton } from "../../../components";
import { Body, Container } from "../style";
import { ReactComponent as ErrorIcon } from "../../../images/svg/error.svg";
import { ReactComponent as SuccessIcon } from "../../../images/icons/successIcon.svg";

export const DashboardWithdraw = () => {
  const [error, setError] = useState(false);
  const [success, setSucess] = useState(true);
  return (
    <Container>
      <DashboardSidebar activeNav="Withdraw" />
      <Body>
        <Header>Withdrawal Slip</Header>
        {!success ? (
          <Box>
            <Detail>
              <h2>Account balance:</h2>
              <h3>$500</h3>
            </Detail>
            <Detail>
              <h2>Pending withdrawal:</h2>
              <h3>None</h3>
            </Detail>
            <Detail />
            <Detail>
              <h2>Withdrawal Amount ($):</h2>
              <Input placeholder="0.00" />
            </Detail>
            {error && (
              <Error>
                <ErrorIcon width={"1.6rem"} />
                <h3>Insufficient balance</h3>
              </Error>
            )}
            <Button>
              <PrimaryButton text="Withdraw" />
            </Button>
          </Box>
        ) : (
          <Box>
            <SuccessDiv>
              <SuccessIcon />
              <h2>
                Withdrawal placed successfully. Admin will check statistics and
                payout.
              </h2>
            </SuccessDiv>
          </Box>
        )}
      </Body>
    </Container>
  );
};

const Header = styled.div`
  font-family: "poppins", sans-serif;
  display: inline;
  font-size: 1.6rem;
  font-weight: 500;
`;
const Box = styled.div`
  width: 100%;
  height: 50rem;
  background-color: rgba(229, 244, 255, 1);
  margin-top: 5rem;
  max-width: 130rem;
  margin: 0 auto;
  font-family: "poppins", sans-serif;
  padding: 5rem 10rem;
  margin-top: 5rem;
`;

const Detail = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  padding-top: 1rem;
  margin-bottom: 1rem;
  font-family: "poppins", sans-serif;
  min-height: 4rem;
  display: flex;
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-right: 4rem;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
const Input = styled.input`
  outline: none;
  border: none;
  background-color: rgba(196, 196, 196, 0.8);
  margin-left: 2rem;
  padding: 0.5rem 1.5rem;
  width: 25rem;
  color: black;
  font-size: 1.4rem;
  font-family: "poppins", sans-serif;
  font-weight: 500;
  margin-bottom: 0.5rem;
  ::placeholder {
    color: rgb(0, 0, 0);
  }
`;
const Error = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 1rem;
  }
`;
const Button = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 5rem;
`;

const SuccessDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  h2 {
    font-weight: 500;
    font-size: 1.6rem;
    margin-top: 5rem;
    text-align: center;
  }
`;
