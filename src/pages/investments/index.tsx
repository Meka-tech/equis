import React from "react";
import styled from "styled-components";
import { Footer, Navbar, PrimaryButton } from "../../components";
import WaveHeader from "../../images/img/waveHeader.png";
import { mobile, tab } from "../../utilities/responsive";
import { CryptoOpportunity } from "./cryptoOpportunity";
import { RealEstateOpportunity } from "./realOpportunity";
import HouseImage from "../../images/img/house_one.jpg";
import HouseImageTwo from "../../images/img/house_two.png";
import HouseImageThree from "../../images/img/house_three.png";

export const Investments = () => {
  return (
    <Container>
      <Navbar />
      <HeadingImage img={WaveHeader}>
        <img src={WaveHeader} alt="wave" />
        <h2>Crypto Investment Plans</h2>
      </HeadingImage>
      <Body>
        <Opportunities>
          <CryptoOpportunity
            heading="EQUIS BRONZE"
            week="3.5"
            duration="6 MONTHS"
            min={"100"}
            max={"3,999"}
          />
          <CryptoOpportunity
            heading="EQUIS SILVER"
            week="3.9"
            duration="6 MONTHS"
            min={"4,000"}
            max={"19,999"}
          />
          <CryptoOpportunity
            heading="EQUIS DIAMOND"
            week="4.5"
            duration="6 MONTHS"
            min={"20,000"}
            max={"45,999"}
          />
          <CryptoOpportunity
            heading="EQUIS GOLD"
            week="5.0"
            duration="6 MONTHS"
            min={"45,999"}
            max={"99,999"}
          />
          <CryptoOpportunity
            heading="EQUIS PLATINUM"
            week="3.5"
            duration="6 MONTHS"
            min={"100,000"}
            max={"1,000,000"}
          />
        </Opportunities>
        <Button>
          {" "}
          <PrimaryButton
            text="Learn More About Investing"
            to="/learn-more-crypto-investment"
            variant="blue"
          />
        </Button>
        <Heading>Real Estate Investment Plans</Heading>
        <Opportunities>
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
            to="/learn-more-real-estate"
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
