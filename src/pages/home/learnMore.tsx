import React from "react";
import styled from "styled-components";
import { Footer, Navbar, PrimaryButton, ReadyBtn } from "../../components";
import HomeHero from "../../images/img/homeHero.png";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";
import { AiOutlineArrowDown } from "react-icons/ai";
import { mobile, tab } from "../../utilities/responsive";
import { useNavigate } from "react-router-dom";

export const LearnMoreRealState = () => {
  const navigate = useNavigate();
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
        <GuideDiv>
          <h2>
            An Agent's Guide to Identifying the Best Real Estate Investment
            Opportunities with EQUIS
          </h2>
          <h4>
            An Agent's Guide to Identifying the Best Real Estate Investment
          </h4>
          <h4>
            As a real estate agent, you're always on the lookout for new and
            exciting investment opportunities But what's the best way to
            identify them?
          </h4>
          <h4>
            There are a few key factors to keep in mind when searching for the
            perfect investment property. Below, we'll outline some of the most
            important ones. Keep these in mind, and you'll be able to find the
            best investment opportunities with us in no time!
          </h4>
          <h3> Get Prequalified for Real Estate Investing </h3>
          <h4>
            {" "}
            One of the first things you need to do as an investor is get
            prequalified for a loan.
          </h4>
          <h4>
            {" "}
            You don't want to waste your time looking at properties that you
            can't afford, and you definitely don't want to fall in love with a
            property only to find out that you can't purchase it.{" "}
          </h4>
          <h4>
            That's why it's important to get prequalified for a loan before you
            start your search. This will help you focus on the properties that
            are within your budget and that are a good fit for your investment
            goals.
          </h4>
          <h3>Understand the Current Market Conditions </h3>
          <h4>
            Now is the time to be looking for real estate investment
            opportunities. The market is currently experiencing a slowdown, so
            you'll be able to find better deals and negotiate more favorable
            terms.
          </h4>
          <h4>
            {" "}
            It's important to understand the current market conditions, and what
            that means for the types of properties you're interested in. For
            example, in a seller's market, buyers are in a much weaker position
            and can expect to pay more for a property. In a buyer's market,
            however, sellers are more willing to negotiate on price and terms.
          </h4>
          <h4>
            You'll also want to think about your target market. If you're
            looking for a property to rent out, you'll want to focus on areas
            that have a high population density and a strong rental market. If
            you're looking for a property to flip, on the other hand, you'll
            want to focus on areas that are experiencing rapid gentrification.{" "}
          </h4>
          <h3> Know What You're Looking </h3>
          <h4>
            {" "}
            For When you're looking for real estate investment opportunities,
            it's important to have a good idea of what you're looking for. That
            might mean focusing on a certain type of property, or narrowing your
            search to a certain geographic area.
          </h4>
          <h4>
            {" "}
            Of course, there are always exceptions to the rule. But if you don't
            have a solid plan going in, you'll be more likely to get overwhelmed
            and make a decision you may regret later on.
          </h4>
          <h4>
            {" "}
            That's why it's important to partner with an agent who understands
            your goals and can help you find the right investment opportunities
            for you. They'll know the market inside out and be able to guide you
            to the best properties in your area.
          </h4>
          <h3> Research Good Locations for Investment </h3>
          <h4>
            Once you’ve identified the type of real estate investment that
            interests you, it's time to start researching the location. The
            truth is, not all locations are suitable for real estate
            investments. You want to look out for places that have a good
            appreciation rate, a growing population and/or job market, and
            nearby amenities.
          </h4>
          <h4>
            {" "}
            The right location could be critical in deciding your success or
            failure as an investor, so it's worth taking your time to research
            properly. Compare different areas and look at trends in the near
            past and recent market changes. How has its economy fared in the
            last five years? Are the schools good? Is there potential for
            further gentrification? Make sure you consider these factors before
            making a decision.{" "}
          </h4>
          <h4>
            {" "}
            Another key factor to consider is how long a particular property has
            been on the market. If it's been sitting around for months, you're
            looking at a potential liability rather than an investment
            opportunity. If possible, try to be the first person to spot
            potential hot spots and capitalise on them fast!
          </h4>
        </GuideDiv>

        <ReadyToInvest>
          <ReadyBtn size={9} to={"/current-opportunities-real-estate"} />
        </ReadyToInvest>
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

const GuideDiv = styled.div`
  margin-top: 5rem;
  font-family: "poppins";
  h2 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 4rem;
  }
  h3 {
    color: rgba(0, 147, 255, 1);
    margin-top: 4rem;
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
  h4 {
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  li {
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
`;
const ReadyToInvest = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 15rem auto;
  display: flex;
  justify-content: center;
`;
