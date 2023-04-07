import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ChatIcon, Footer, Navbar, PrimaryButton } from "../../components";
import HomeHero from "../../images/img/homeHero.png";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";

import { AiOutlineArrowDown } from "react-icons/ai";

import { tab, mobile } from "../../utilities/responsive";
import { InputElement } from "./input";
import axios from "axios";
import { BaseUrl } from "../../utilities/API";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidationSchema } from "./validationSchema";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onhandleSubmit = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("password", `${values.password}`);
    data.append("username", `${values.username}`);

    const config = {
      method: "post",
      url: `${BaseUrl}/investlogin.php`,
      headers: {},
      data: data
    };

    axios(config)
      .then(function (res) {
        setIsLoading(false);

        if (res.data.error) {
          toast.error(`${res.data.message}`);
        } else {
          navigate("/dashboard-home");
          const userData = res.data[0];
          localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("loggedIn", "true");
        }
      })
      .catch(function (error) {
        setIsLoading(false);
      });
  };

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      password: "",
      username: ""
    },
    validationSchema: loginValidationSchema,
    onSubmit: onhandleSubmit
  });
  const data = localStorage.getItem("userData");

  return (
    <Container>
      <ChatIcon />
      <ToastContainer />
      <Navbar />
      <Header img={HomeHero}>
        <TextBox>
          <Heading>Login</Heading>
          <Scroll>
            <h3> Scroll Down</h3> <Mouse width={"2.5rem"} />
            <AiOutlineArrowDown size={30} style={{ marginTop: "1rem" }} />
          </Scroll>
        </TextBox>
      </Header>
      <Body>
        <Title>Login</Title>
        <InputSection>
          <InputElement
            placeholder="Username"
            value={values.username}
            onChange={handleChange("username")}
            errorMsg={touched.username ? errors.username : ""}
          />
          <InputElement
            placeholder="Password"
            value={values.password}
            type="password"
            onChange={handleChange("password")}
            errorMsg={touched.password ? errors.password : ""}
          />
        </InputSection>
        <PrimaryButton
          text="Login"
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
  height: 90vh;
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
