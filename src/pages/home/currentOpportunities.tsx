import React from "react";
import styled from "styled-components";
import { Footer, Navbar, PrimaryButton } from "../../components";
import HomeHero from "../../images/img/homeHero.png";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";

import { AiOutlineArrowDown } from "react-icons/ai";

import { tab } from "../../utilities/responsive";
import { Opportunity } from "./opportunity";
import HouseImage from "../../images/img/house_one.jpg";
import HouseImageTwo from "../../images/img/house_two.png";
import HouseImageThree from "../../images/img/house_three.png";

export const CurrentOpportunitiesRealEstate = () => {
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
              to="/current-opportunities-real-estate"
            />
            <PrimaryButton
              text="Learn More About Investing"
              variant="white"
              to="/learn-more-real-estate"
            />
          </Buttons>
          <Scroll>
            <h3> Scroll Down</h3> <Mouse width={"2.5rem"} />
            <AiOutlineArrowDown size={30} style={{ marginTop: "1rem" }} />
          </Scroll>
        </TextBox>
      </Header>
      <Body>
        <Opportunities>
          <Opportunity
            title="Equity Raising for Luxury House in San Diego"
            description="Located in San Diego, USA we mapped out the best locations that assures a minimum of 35% per yearly irrespective of the real estate market conditions. Once the investment is recorded, the property is under our guidance and yields profits yearly."
            image={HouseImage}
          />
          <Opportunity
            title="Equity Raising for Luxury House in Montreal"
            description="Located in Montreal, Canada we mapped out the best locations that assures a minimum of 35% per yearly irrespective of the real estate market conditions. Once the investment is recorded, the property is under our guidance and yields profits yearly."
            image={HouseImageTwo}
          />
          <Opportunity
            title="Equity Raising for Luxury House in Vancouver"
            description="Located in Montreal, Canada we mapped out the best locations that assures a minimum of 35% per yearly irrespective of the real estate market conditions. Once the investment is recorded, the property is under our guidance and yields profits yearly."
            image={HouseImageThree}
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
  margin-bottom: 2%;
  ${tab({
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
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  max-width: 50rem;
  margin: 0 auto;
  margin-bottom: 10%;
  ${tab({
    width: "80rem"
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
`;

const Opportunities = styled.div`
  margin: 10rem auto;
  width: 100%;
  max-width: 130rem;
`;
