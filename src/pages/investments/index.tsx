import React, { useEffect } from "react";
import styled from "styled-components";
import {
  ChatIcon,
  CryptoBanner,
  Footer,
  Navbar,
  PrimaryButton
} from "../../components";
import WaveHeader from "../../images/img/waveHeader.png";
import { mobile, tab } from "../../utilities/responsive";
import { CryptoOpportunity } from "./cryptoOpportunity";
import { RealEstateOpportunity } from "./realOpportunity";
import HouseImage from "../../images/img/house_one.jpg";
import HouseImageTwo from "../../images/img/house_two.png";
import HouseImageThree from "../../images/img/house_three.png";
import { useNavigate } from "react-router-dom";

export const Investments = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Navbar />
      <ChatIcon />
      <HeadingImage img={WaveHeader}>
        <img src={WaveHeader} alt="wave" />
        <h2>Crypto Investment Plans</h2>
      </HeadingImage>
      <CryptoBanner />
      <Body>
        <Opportunities data-aos="fade-right">
          <CryptoOpportunity
            heading="EQUIS STARTER PLAN"
            week="2.5"
            duration="1 MONTH"
            min={25}
            max={99}
          />
          <CryptoOpportunity
            heading="EQUIS BRONZE"
            week="3.5"
            duration="1 MONTH"
            min={100}
            max={3999}
          />
          <CryptoOpportunity
            heading="EQUIS SILVER"
            week="3.9"
            duration="2 MONTHS"
            min={4000}
            max={19999}
          />
          <CryptoOpportunity
            heading="EQUIS DIAMOND"
            week="4.5"
            duration="6 MONTHS"
            min={20000}
            max={45999}
          />
          <CryptoOpportunity
            heading="EQUIS GOLD"
            week="5.0"
            duration="6 MONTHS"
            min={45999}
            max={99999}
          />
          <CryptoOpportunity
            heading="EQUIS PLATINUM"
            week="6.0"
            duration="6 MONTHS"
            min={100000}
            max={1000000}
          />
        </Opportunities>
        <Button>
          {" "}
          <PrimaryButton
            text="Learn More About Investing"
            onClick={() => navigate("/learn-more-crypto-investment")}
            variant="blue"
          />
        </Button>
        <Heading>Real Estate Investment Plans</Heading>
        <Opportunities data-aos="fade-left">
          <RealEstateOpportunity
            title="Equity Raising for Luxury House in San Diego"
            description="Located in San Diego, USA we mapped out the best locations that assures a minimum of 35% per yearly irrespective of the real estate market conditions. Once the investment is recorded, the property is under our guidance and yields profits yearly."
            image={HouseImage}
          />
          <RealEstateOpportunity
            title="Equity Raising for Luxury House in Montreal"
            description="Located in Montreal, Canada we mapped out the best locations that assures a minimum of 35% per yearly irrespective of the real estate market conditions. Once the investment is recorded, the property is under our guidance and yields profits yearly."
            image={HouseImageTwo}
          />
          <RealEstateOpportunity
            title="Equity Raising for Luxury House in Vancouver"
            description="Located in Montreal, Canada we mapped out the best locations that assures a minimum of 35% per yearly irrespective of the real estate market conditions. Once the investment is recorded, the property is under our guidance and yields profits yearly."
            image={HouseImageThree}
          />
        </Opportunities>
        <Button>
          <PrimaryButton
            text="Learn More About Investing"
            onClick={() => navigate("/learn-more-real-estate")}
            variant="blue"
          />
        </Button>
      </Body>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

interface IHeader {
  img: string;
}

const Button = styled.div`
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 10rem;
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
const Heading = styled.h2`
  text-align: center;
  font-weight: 700;
  font-family: "poppins", sans-serif;
  font-size: 4.2vw;
  line-height: 4rem;
  margin-top: 10rem;
  margin-bottom: 20rem;
  ${tab({
    fontSize: "3rem"
  })}
  ${mobile({
    fontSize: "2.5rem"
  })}
`;
const Body = styled.div`
  padding: 10rem;
  ${tab({
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
  margin-bottom: 0rem;
`;
