import React from "react";
import styled from "styled-components";
import { Footer, Navbar, PrimaryButton } from "../../components";
import HomeHero from "../../images/img/homeHero.png";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";

import { AiOutlineArrowDown } from "react-icons/ai";

import { tab } from "../../utilities/responsive";
import { InputElement } from "./input";

export const SignUp = () => {
  return (
    <Container>
      <Navbar />
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
          <InputElement placeholder="Full name" />
          <InputElement placeholder="Username" />
          <InputElement placeholder="Password" />
          <InputElement placeholder="Retype Password" />
          <InputElement placeholder="Email Address" />
          <InputElement placeholder="Withdrawal Address (BTC)" />
          <InputElement placeholder="Withdrawal Address (ETH)" />
          <InputElement placeholder="Referral link" />
        </InputSection>
        <CheckboxDiv>
          <Checkbox type={"checkbox"} />
          <h3>I agree with terms & Conditions</h3>
        </CheckboxDiv>
        <PrimaryButton text="Create Account" />
      </Body>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
`;

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
`;
interface IInput {
  width?: string;
}
const Input = styled.input<IInput>`
  outline: none;
  border: none;
  background-color: rgba(0, 147, 255, 0.1);
  padding: 2rem;
  font-family: "poppins";
  width: ${(props) => (props.width ? props.width : "100%")};
  color: black;
  font-size: 1.4rem;
  ::placeholder {
    color: rgba(8, 8, 8, 0.5);
  }
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
