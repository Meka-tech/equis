import React, { useState } from "react";
import styled from "styled-components";
import { DashboardSidebar, PrimaryButton } from "../../../components";
import { tab } from "../../../utilities/responsive";
import { Body, Container } from "../style";
import { InputElement } from "./input";
import axios from "axios";
import { BaseUrl } from "../../../utilities/API";
import { useFormik } from "formik";
import { UpDatevalidationSchema } from "./validationSchema";

export const DashboardProfile = () => {
  const data: any = localStorage.getItem("userData");
  const userData = JSON.parse(data);
  const [isLoading, setIsLoading] = useState(false);

  const onhandleSubmit = async () => {
    if (
      userData.username !== values.username ||
      userData.name !== values.name ||
      userData.ethaddress !== values.ethaddress ||
      userData.btcaddress !== values.btcaddress ||
      values.newPassword !== userData.password
    ) {
      setIsLoading(true);
      const data = new FormData();
      data.append("username", `${values.username}`);
      data.append("id", `${userData.id}`);
      data.append("name", `${values.name}`);
      data.append("password", `${values.newPassword}`);
      data.append("ethaddress", `${values.ethaddress}`);
      data.append("btcaddress", `${values.btcaddress}`);

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BaseUrl}/investeditapi.php`,
        headers: {},
        data: data
      };

      axios(config)
        .then(function (res) {
          setIsLoading(false);
          const userData = res.data[0];
          localStorage.setItem("userData", JSON.stringify(userData));
        })
        .catch(function (error) {
          setIsLoading(false);
        });
    }
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: userData.name,
      username: userData.username,
      newPassword: userData.password,
      ethaddress: userData.ethaddress,
      btcaddress: userData.btcaddress
    },
    validationSchema: UpDatevalidationSchema,
    onSubmit: onhandleSubmit
  });

  return (
    <Container>
      <DashboardSidebar activeNav="Profile" />
      <Body>
        <Referral>
          <h3>Special Referral Link: </h3>
          <a>{userData.speciallink}</a>
        </Referral>
        <Inputs>
          <InputElement
            label="Account Name"
            value={values.name}
            onChange={handleChange("name")}
            errorMsg={touched.name ? errors.name : ""}
          />
          <InputElement
            label="Username"
            value={values.username}
            onChange={handleChange("username")}
            errorMsg={touched.username ? errors.username : ""}
          />
          <InputElement label="Email Address" value={userData.email} readOnly />
          <InputElement
            label="Registration Date"
            value={userData.regdate}
            readOnly
          />
          <InputElement
            label="Bitcoin Withdrawal Address"
            value={values.btcaddress}
            onChange={handleChange("btcaddress")}
            errorMsg={touched.btcaddress ? errors.btcaddress : ""}
          />
          <InputElement
            label="Ethereum Withdrawal Address"
            value={values.ethaddress}
            onChange={handleChange("ethaddress")}
            errorMsg={touched.ethaddress ? errors.ethaddress : ""}
          />
          <InputElement
            label="Password"
            value={userData.password}
            type="password"
            readOnly
          />
          <InputElement
            label="New Password"
            type="password"
            value={values.newPassword}
            onChange={handleChange("newPassword")}
            errorMsg={touched.newPassword ? errors.newPassword : ""}
          />
        </Inputs>
        <Button>
          <PrimaryButton
            text="Change Data"
            onClick={handleSubmit}
            isLoading={isLoading}
          />
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
