import React, { useState } from "react";
import styled from "styled-components";
import { DashboardSidebar, PrimaryButton } from "../../../components";
import { Body, Container } from "../style";

import { ReactComponent as SuccessIcon } from "../../../images/icons/successIcon.svg";
import { useLocation } from "react-router-dom";
import { tab } from "../../../utilities/responsive";
import axios from "axios";
import { BaseUrl } from "../../../utilities/API";
import { useFormik } from "formik";
import { Refresh } from "../../../utilities/API/refresh";

export const DashboardDeposit = () => {
  const [success, setSucess] = useState(false);
  const location = useLocation();
  const { plan, profit, duration, investment } = location.state;
  const data: any = localStorage.getItem("userData");
  const userData = JSON.parse(data);
  const [isLoading, setIsLoading] = useState(false);

  const onhandleSubmit = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("email", `${userData.email}`);
    data.append("id", `${userData.id}`);
    data.append("name", `${userData.name}`);
    data.append("amount", `${values.amount}`);
    data.append("type", `${investment}`);
    data.append("key", `${Math.floor(Math.random() * 1000) + 1}`);
    data.append("plan", `${plan}`);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BaseUrl}/investdepositapi.php`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function (res) {
        setIsLoading(false);

        Refresh();
        setSucess(true);
      })
      .catch(function (error) {
        setIsLoading(false);
      });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      amount: 0
    },
    onSubmit: onhandleSubmit
  });

  return (
    <Container>
      <DashboardSidebar />
      <Body>
        <Header>Deposit Slip</Header>
        {!success ? (
          <Box>
            <Detail>
              <h2>Investment:</h2>
              <h3>{plan}</h3>
            </Detail>
            <Detail>
              <h2>Profit:</h2>
              {investment === "crypto" ? (
                <h3>
                  {profit}% for {duration}
                </h3>
              ) : (
                <h3>{profit}% yearly</h3>
              )}
            </Detail>
            <Detail>
              <h2>Amount($):</h2>
              <Input
                placeholder="0.00"
                value={values.amount}
                onChange={handleChange("amount")}
              />
            </Detail>
            <Detail>
              <h2>Withdrawal:</h2>
              <h3>yes(Annually)</h3>
            </Detail>
            <Text>
              Validate your investment by depositing into company Bitcoin
              Investment wallet ;
            </Text>
            <Address>bc1q4hjxp5qx3la76qgazvpzm4kgh3x9c8mgr762fw</Address>
            <Button>
              <PrimaryButton
                text="Done"
                onClick={handleSubmit}
                isLoading={isLoading}
              />
            </Button>
          </Box>
        ) : (
          <Box>
            <SuccessDiv>
              <SuccessIcon />
              <h2>
                We’ll check and validate your investment and plan; Your deposit
                will become active after confirmation.
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
  display: grid;
  grid-template-columns: 12rem 50%;
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
    ${tab({
      fontSize: "1.4rem"
    })}
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    ${tab({
      fontSize: "1.4rem"
    })}
  }
`;
const Text = styled.h3`
  font-weight: 600;
  font-size: 1.6rem;
  width: 80%;
  margin-bottom: 0.5rem;
  ${tab({
    fontSize: "1.4rem"
  })}
`;
const Address = styled.a`
  font-weight: 500;
  font-size: 1.6rem;
  width: 80%;
  margin-bottom: 1rem;
  color: rgba(0, 147, 255, 1);
  cursor: pointer;
  ${tab({
    fontSize: "1.4rem"
  })}
`;
const Input = styled.input`
  outline: none;
  border: none;
  background-color: rgba(196, 196, 196, 0.8);
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
    fontSize: "1.4rem",
    width: "20rem"
  })}
`;
const Button = styled.div`
  width: fit-content;
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
    ${tab({
      fontSize: "1.4rem"
    })}
  }
`;
