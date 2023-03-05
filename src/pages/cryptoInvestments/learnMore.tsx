import React from "react";
import styled from "styled-components";
import { Footer, Navbar, PrimaryButton, ReadyBtn } from "../../components";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";
import CryptoHero from "../../images/img/cryptoHero.png";
import { tab } from "../../utilities/responsive";
import { AiOutlineArrowDown } from "react-icons/ai";

export const LearnMoreCryptoInvestment = () => {
  return (
    <Container>
      <Navbar activeNav="crypto investments" />
      <Header img={CryptoHero}>
        <TextBox>
          <Heading>
            Crypto Investment <br /> Opportunities Designed For You
          </Heading>
          <SubHeading>We understand value and deliver results</SubHeading>
          <Buttons>
            <PrimaryButton
              text="Current Opportunities"
              to="/current-opportunities-crypto-investment"
            />
            <PrimaryButton
              text="Learn More About Investing"
              variant="white"
              to="/learn-more-crypto-investment"
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
            An Agent's Guide for the best Crypto & Trading Investment with EQUIS
          </h2>
          <h4>
            Investing in cryptocurrencies can be a great way to diversify your
            portfolio, but it's also a booming market with a lot of potential
            risks{" "}
          </h4>
          <h4>
            The key to successful crypto trading is knowledge. With the right
            information and guidance, you can make wise decisions and benefit
            from the unpredictable nature of the market.
          </h4>
          <h3>The Basics of Investing in Crypto Trading</h3>
          <h4>
            If you're new to cryptocurrency trading, it is important to
            understand the basics before investing. Here's a quick breakdown of
            the fundamental principles of crypto trading:
          </h4>
          <li>
            To get started, you'll need to create an account with us at Equis.
          </li>
          <li>
            Be sure to choose a plan that suites your budget and profit desires.
          </li>
          <li>Then decide how much money you want to put in and invest.</li>
          <h3>Risks and Rewards of Investing in Cryptocurrency.</h3>
          <h4>
            When it comes to investing, it's important to be aware of the risks
            and rewards that come with any venture. We minimise the risks at
            Equis with standard and fixed returns guaranteed for investors
            regardless of the market volatility.
          </h4>
          <li>
            Security: Crypto transactions are secure but they’re not
            bulletproof—theft can happen if you’re not vigilant in protecting
            your information. So do not share your Equis password with anyone.
          </li>
          <h4>
            By understanding these risks and taking steps to protect yourself
            accordingly, you can open up new opportunities for great rewards in
            cryptocurrency trading with us at Equis.
          </h4>
          <h3>Conclusion</h3>
          <h4>
            {" "}
            Cryptocurrency trading can be an incredibly lucrative venture, but
            only if done correctly. With the right tools, knowledge, and
            discipline, you can profit from the crypto market with confidence.
            Which is why we are here.
          </h4>{" "}
          <h4>
            {" "}
            Investing can be a daunting task, but once you have the basics down,
            it opens the door to a world of financial possibility. With the
            right amount of forethought, the secrets of the crypto market can be
            unlocked and made accessible to anyone willing to become a member at
            Equis.
          </h4>
        </GuideDiv>

        <ReadyToInvest>
          <ReadyBtn size={9} />
        </ReadyToInvest>
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
const ReadyToInvest = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 15rem auto;
  display: flex;
  justify-content: center;
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
