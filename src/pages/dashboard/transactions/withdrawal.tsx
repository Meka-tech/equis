import React, { useRef, useState } from "react";
import styled from "styled-components";
import { DashboardSidebar, PrimaryButton } from "../../../components";
import { Body, Container } from "../style";
import { ReactComponent as ErrorIcon } from "../../../images/svg/error.svg";
import { ReactComponent as SuccessIcon } from "../../../images/icons/successIcon.svg";
import { tab } from "../../../utilities/responsive";
import { AiOutlineDown } from "react-icons/ai";
import useClickOutside from "../../../hooks/useClickOutside";

export const DashboardWithdraw = () => {
  const [error, setError] = useState(false);
  const [success, setSucess] = useState(false);
  const [dropActive, setDropActive] = useState(false);
  const [account, setAccount] = useState("trading");
  const dropRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useClickOutside(dropRef, () => setDropActive(false));
  const data: any = localStorage.getItem("userData");
  const userData = JSON.parse(data);
  return (
    <Container>
      <DashboardSidebar activeNav="Withdraw" />
      <Body>
        <Header onClick={() => setDropActive(!dropActive)}>
          <h1>Withdrawal Slip</h1>
          <AiOutlineDown
            style={{ transform: dropActive ? "rotate(180deg)" : "rotate(0)" }}
          />
        </Header>
        {dropActive && (
          <DropDown ref={dropRef}>
            <h2
              onClick={() => {
                setAccount("trading");
                setDropActive(false);
              }}
            >
              Trading Account
            </h2>
            <h2
              onClick={() => {
                setAccount("real");
                setDropActive(false);
              }}
            >
              Real Estate Account
            </h2>
          </DropDown>
        )}
        {!success ? (
          <Box>
            <Detail>
              <h2>Account balance:</h2>
              <h3>
                $
                {account === "trading"
                  ? userData.cryptobalance
                  : userData.estatebalance}
              </h3>
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
  h1 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-right: 1rem;
  }
  align-items: center;
  display: flex;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: fit-content;
  position: relative;
`;
const DropDown = styled.div`
  border: 1px solid rgba(0, 147, 255, 1);
  width: fit-content;
  position: absolute;
  margin-top: 0.4rem;
  background-color: white;
  h2 {
    text-align: center;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem 0.8rem;
    &:hover {
      background-color: rgba(0, 147, 255, 1);
      color: white;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  height: 50rem;
  background-color: rgba(229, 244, 255, 1);
  margin-top: 7rem;
  max-width: 130rem;
  margin: 0 auto;
  font-family: "poppins", sans-serif;
  padding: 5rem 10rem;
  margin-top: 5rem;
  ${tab({
    padding: "5rem 3rem"
  })}
`;

const Detail = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  padding-top: 1rem;
  margin-bottom: 1rem;
  font-family: "poppins", sans-serif;
  min-height: 4rem;
  display: flex;
  align-items: flex-end;
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-right: 4rem;
    ${tab({
      marginRight: "2rem",
      fontSize: "1.2rem"
    })}
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    ${tab({
      fontSize: "1.2rem"
    })}
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
  ${tab({
    width: "15rem"
  })}
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
