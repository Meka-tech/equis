import React from "react";
import styled from "styled-components";
import { Footer, Navbar, PrimaryButton } from "../../components";
import HomeHero from "../../images/img/homeHero.png";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";
import HouseImage from "../../images/img/house.png";

import { AiOutlineArrowDown } from "react-icons/ai";

import { mobile, tab } from "../../utilities/responsive";
import { useLocation, useNavigate } from "react-router-dom";

export const InvestRealEstate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, description, image } = location.state;
  const LoggedIn = localStorage.getItem("loggedIn");
  const Onclick = () => {
    if (LoggedIn === "true") {
      navigate("/dashboard-deposit", {
        state: {
          investment: "real-estate",
          plan: title,
          profit: 35,
          duration: ""
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <Container>
      <Navbar />
      <Header img={HomeHero}>
        <TextBox>
          <Heading>
            Real Estate Investment
            <br /> Opportunities Designed For You
          </Heading>
          <SubHeading>Diverse mechanism for a quality investment</SubHeading>
          <Buttons>
            <PrimaryButton
              text="Current Opportunities"
              onClick={() => navigate("/current-opportunities-real-estate")}
            />
            <PrimaryButton
              text="Learn More About Investing"
              variant="white"
              onClick={() => navigate("/learn-more-real-estate")}
            />
          </Buttons>
          <Scroll>
            <h3> Scroll Down</h3> <Mouse width={"2.5rem"} />
            <AiOutlineArrowDown size={30} style={{ marginTop: "1rem" }} />
          </Scroll>
        </TextBox>
      </Header>
      <Body>
        <Investment>
          <InvestHeading>
            Invest in {title}
            <Price> $5000</Price>
          </InvestHeading>
          <ImageContainer>
            <img src={image} alt="houseImage" />
          </ImageContainer>
          <Description>{description}</Description>
          <Button onClick={Onclick}>
            <PrimaryButton text="Become Investor now" />
          </Button>
        </Investment>
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
    height: "70vh"
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
  ${mobile({
    width: "100%"
  })}
  ${tab({
    width: "100%"
  })}
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 2%;
  ${tab({
    fontSize: "2.5rem"
  })}
  ${mobile({
    fontSize: "2.5rem"
  })}
`;

const SubHeading = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 5%;
  ${tab({
    fontSize: "1.8rem"
  })}
  ${mobile({
    fontSize: "1.8rem"
  })}
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  max-width: 50rem;
  margin: 0 auto;
  margin-bottom: 10%;
  ${tab({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "10rem"
  })}
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "10rem"
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
  ${tab({
    padding: "1rem 5rem"
  })}
  ${mobile({
    padding: "1rem 5rem"
  })}
`;

const Investment = styled.div`
  margin: 10rem auto;
  width: 100%;
  max-width: 130rem;
`;

const InvestHeading = styled.h2`
  font-size: 3.2rem;
  text-align: center;
  font-size: 700;
  font-family: "poppins", sans-serif;
  margin: 0 auto;
  width: 80%;
  ${tab({
    width: "100%"
  })}
  ${mobile({
    width: "100%"
  })}
`;
const Price = styled.span`
  color: rgba(0, 147, 255, 1);
  display: inline;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  img {
    object-fit: cover;
    width: 60rem;
    margin-bottom: 2rem;
    ${tab({
      width: "45rem",
      margin: "5rem auto"
    })}
    ${mobile({
      width: "30rem",
      margin: "5rem auto"
    })}
  }
`;
const Description = styled.h3`
  margin: 0 auto;
  margin-bottom: 4rem;
  width: 80%;
  text-align: center;
  font-weight: 400;
  font-size: 2rem;
  color: rgba(48, 58, 66, 1);
  line-height: 4rem;
  ${tab({
    width: "100%"
  })}
  ${mobile({
    width: "100%"
  })}
`;
const Button = styled.div`
  margin: 0 auto;
  width: fit-content;
  ${tab({
    width: "100%"
  })}
  ${mobile({
    width: "100%"
  })}
`;
