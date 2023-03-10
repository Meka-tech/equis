import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../../components";
import HomeHero from "../../images/img/homeHero.png";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";

import { AiOutlineArrowDown } from "react-icons/ai";

import { tab } from "../../utilities/responsive";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export const RegisteredPage = () => {
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
        <Title>OFFICIALLY REGISTERED WITH EQUIS</Title>
        <Paragraph>
          You are now a member, now you can enjoy all the benefits that comes
          with being an investor by logging in and investing.
        </Paragraph>
        <Warning>⚠️ Do not share your login information with anyone!</Warning>
        <LinkDiv to={"/login"}>
          <h3>Login</h3> <AiOutlineArrowRight />
        </LinkDiv>
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
  text-align: left;
  margin-bottom: 3rem;
  font-size: 3rem;
  color: rgba(0, 147, 255, 1);
  font-family: "poppins", sans-serif;
`;
const Paragraph = styled.p`
  font-family: "poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  width: 80%;
  margin-bottom: 5rem;
`;

const Warning = styled.h3`
  font-family: "poppins", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 3rem;
`;

const LinkDiv = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: rgba(0, 147, 255, 1);
  font-size: 1.8rem;
  h3 {
    margin-right: 1rem;
  }
  margin-bottom: 10rem;
`;
