import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ChatIcon, Footer, Navbar, PrimaryButton } from "../../components";
import HomeHero from "../../images/img/homeHero.png";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";

import { AiOutlineArrowDown } from "react-icons/ai";

import { mobile, tab } from "../../utilities/responsive";
import { InputElement } from "./input";
import axios from "axios";
import { BaseUrl } from "../../utilities/API";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpvalidationSchema } from "./validationSchema";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const SignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onhandleSubmit = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("email", `${values.email}`);
    data.append("password", `${values.password}`);
    data.append("name", `${values.fullName}`);
    data.append("reflink", `${values.reflink}`);
    data.append("btcaddress", `${values.btcaddress}`);
    data.append("ethaddress", `${values.ethaddress}`);
    data.append("username", `${values.username}`);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BaseUrl}/investregister.php`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function (res) {
        setIsLoading(false);
        if (res.data.error) {
          toast.error(`${res.data.message}`);
        } else {
          navigate("/verify", {
            state: {
              email: values.email
            }
          });
        }
      })
      .catch(function (error) {
        setIsLoading(false);
      });
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      reflink: "",
      btcaddress: "",
      ethaddress: "",
      username: ""
    },
    validationSchema: signUpvalidationSchema,
    onSubmit: onhandleSubmit
  });

  return (
    <Container>
      <Navbar />
      <ChatIcon />
      <ToastContainer />
      <Header img={HomeHero}>
        <TextBox>
          <Heading>Sign Up</Heading>
          <Scroll>
            <h3> Scroll Down</h3> <Mouse width={"2.5rem"} />
            <AiOutlineArrowDown size={30} style={{ marginTop: "1rem" }} />
          </Scroll>
        </TextBox>
      </Header>
      <Body>
        <Title>Sign up</Title>
        <InputSection>
          <InputElement
            placeholder="Full name"
            value={values.fullName}
            onChange={handleChange("fullName")}
            errorMsg={touched.fullName ? errors.fullName : ""}
          />
          <InputElement
            placeholder="Username"
            value={values.username}
            onChange={handleChange("username")}
            errorMsg={touched.username ? errors.username : ""}
          />
          <InputElement
            placeholder="Password"
            value={values.password}
            onChange={handleChange("password")}
            type="password"
            errorMsg={touched.password ? errors.password : ""}
          />
          <InputElement
            placeholder="Retype Password"
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            type="password"
            errorMsg={touched.confirmPassword ? errors.confirmPassword : ""}
          />
          <InputElement
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange("email")}
            errorMsg={touched.email ? errors.email : ""}
          />
          <InputElement
            placeholder="Withdrawal Address (BTC)"
            value={values.btcaddress}
            onChange={handleChange("btcaddress")}
            errorMsg={touched.btcaddress ? errors.btcaddress : ""}
          />
          <InputElement
            placeholder="Withdrawal Address (ETH)"
            value={values.ethaddress}
            onChange={handleChange("ethaddress")}
            errorMsg={touched.ethaddress ? errors.ethaddress : ""}
          />
          <InputElement
            placeholder="Referral link"
            value={values.reflink}
            onChange={handleChange("reflink")}
          />
        </InputSection>
        <CheckboxDiv>
          <Checkbox type={"checkbox"} />
          <h3>I agree with terms & Conditions</h3>
        </CheckboxDiv>
        <PrimaryButton
          text="Create Account"
          onClick={handleSubmit}
          isLoading={isLoading}
        />
      </Body>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

interface IHeader {
  img: string;
}
const Header = styled.div<IHeader>`
  height: 95vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 56, 97, 0.6)
    ),
    url(${(props) => props.img});
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  position: relative;
  ${mobile({
    height: "60vh"
  })}
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "poppins";
  color: white;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 25%;
  ${tab({
    fontSize: "2.5rem"
  })}
`;

const Scroll = styled.div`
  margin: 0 auto;
  width: fit-content;
  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = styled.div`
  padding: 1rem 10rem;
  margin-bottom: 15rem;
  ${tab({
    padding: "1rem 5rem"
  })}
`;

const Title = styled.h3`
  margin-top: 5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-size: 3rem;
`;

const InputSection = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 40% 40%;
  grid-row-gap: 5rem;
  margin-bottom: 5rem;
  ${mobile({
    display: "flex",
    flexDirection: "column"
  })}
`;

const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  color: rgba(85, 85, 85, 1);
  font-family: "poppins" sans-serif;
  font-weight: 500;
  margin-bottom: 4rem;
  h3 {
    text-transform: capitalize;
  }
`;

const Checkbox = styled.input`
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid rgba(0, 147, 255, 1);
  outline: none;
`;
