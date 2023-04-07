import React, { useEffect } from "react";
import styled from "styled-components";
import { ChatIcon, Footer, Navbar, PrimaryButton } from "../../components";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";
import CryptoHero from "../../images/img/cryptoHero.png";
import WaveHeader from "../../images/img/waveHeader.png";
import { mobile, tab } from "../../utilities/responsive";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Opportunity } from "./opportunity";
import { useNavigate } from "react-router-dom";

export const CurrentOpportunitiesCryptoInvestment = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 600);
  });
  return (
    <Container>
      <ChatIcon />
      <Navbar activeNav="crypto investments" />
      <Header img={CryptoHero}>
        <TextBox>
          <Heading>
            Crypto Investment <br /> Opportunities Designed For You
          </Heading>
          <SubHeading>We understand value and deliver results</SubHeading>
          <Buttons>
            <PrimaryButton
              text="Trading Investment plans"
              onClick={() =>
                navigate("/current-opportunities-crypto-investment")
              }
            />
            <PrimaryButton
              text="Learn More About Investing"
              variant="white"
              onClick={() => navigate("/learn-more-crypto-investment")}
            />
          </Buttons>
          <Scroll>
            <h3> Scroll Down</h3> <Mouse width={"2.5rem"} />
            <AiOutlineArrowDown size={30} style={{ marginTop: "1rem" }} />
          </Scroll>
        </TextBox>
      </Header>
      <HeadingImage img={WaveHeader}>
        <img src={WaveHeader} alt="wave" />
        <h2>Fixed Investment Plans</h2>
      </HeadingImage>
      <Body>
        <Opportunities data-aos="fade-down">
          <Opportunity
            heading="EQUIS STARTER PLAN"
            week="2.5"
            duration="1 MONTH"
            min={"25"}
            max={"99"}
          />
          <Opportunity
            heading="EQUIS BRONZE"
            week="3.5"
            duration="1 MONTH"
            min={"100"}
            max={"3,999"}
          />
          <Opportunity
            heading="EQUIS SILVER"
            week="3.9"
            duration="2 MONTHS"
            min={"4,000"}
            max={"19,999"}
          />
          <Opportunity
            heading="EQUIS DIAMOND"
            week="4.5"
            duration="6 MONTHS"
            min={"20,000"}
            max={"45,999"}
          />
          <Opportunity
            heading="EQUIS GOLD"
            week="5.0"
            duration="6 MONTHS"
            min={"45,999"}
            max={"99,999"}
          />
          <Opportunity
            heading="EQUIS PLATINUM"
            week="6.0"
            duration="6 MONTHS"
            min={"100,000"}
            max={"1,000,000"}
          />
        </Opportunities>
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
      rgba(0, 0, 0, 0.6),
      rgba(0, 56, 97, 0.8)
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
  width: 90%;
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

const HeadingImage = styled.div<IHeader>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 98vw;
    z-index: -1;
  }
  h2 {
    text-align: center;
    font-weight: 700;
    font-family: "poppins", sans-serif;
    font-size: 4.2vw;
    line-height: 4rem;
    margin-bottom: 5rem;
    ${tab({
      fontSize: "3rem"
    })}
    ${mobile({
      fontSize: "2.5rem"
    })}
  }
`;
const Body = styled.div`
  padding: 10rem;
  ${tab({
    padding: "1rem 5rem"
  })}
  ${mobile({
    padding: "1rem 5rem"
  })}
`;
const Opportunities = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 130rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20rem;
`;
