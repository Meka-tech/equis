import React from "react";
import styled from "styled-components";
import {
  Footer,
  Navbar,
  PrimaryButton,
  ReadyBtn,
  TestimonialCard
} from "../../components";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";
import CryptoHero from "../../images/img/cryptoHero.png";
import { tab } from "../../utilities/responsive";
import { AiOutlineArrowDown } from "react-icons/ai";

export const CryptoInvestment = () => {
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
            <PrimaryButton text="Current Opportunities" />
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
        <TradeInvest>
          <h2>Trading Investments with Equis</h2>
          <h4>
            In addition to real estate investments we at Equis are engaged in
            trading ones related to stocks, cryptocurrency and the financial
            market in general with the aim of capitalising on the market. We
            provide a dynamic investment solution to clients in need of a
            self-operating portfolio, as well as a smart fund with flexible time
            and investment amount Our goal is to provide our investors with a
            reliable source of high income, while minimising any possible risks
            and offering a high-quality service, allowing us to automate and
            simplify the relations between we and our investors.
          </h4>
        </TradeInvest>
        <Testimonials>
          <h2>Testimonials from previous Investors</h2>
          <h3>Trusted by 20k+ registered customers</h3>
        </Testimonials>
      </Body>
      <Cards>
        <CardInner>
          <TestimonialCard
            name="Mike Critch"
            comment="Nothing but praise for this company. Very transparent and reliable"
          />
          <TestimonialCard
            name="Estaban Fross"
            comment="Best thing i’ve done is join Equis, the monetary change in my life has been nothing but life changing."
          />
          <TestimonialCard
            name="John Blake"
            comment="I have had nothing less than a great experience, love their investment plans."
          />
          <TestimonialCard
            name="Tom Wilson"
            comment="Best source of a reliable passive income. The BEST!"
          />
          <TestimonialCard
            name="Fred"
            comment="Best thing i’ve done is join Equis, they monetary change in my life has been great."
          />
          <TestimonialCard
            name="James Stanford"
            comment="From the moments i signed up it’s been all praise from me and my mates"
          />
        </CardInner>
      </Cards>
      <Body>
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
  height: 95vh;
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

const TradeInvest = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  h2 {
    font-family: "poppins";
    color: rgba(0, 147, 255, 1);
    margin-bottom: 1rem;
    font-size: 4rem;
  }
  h4 {
    margin: 0 auto;
    font-size: 1.8rem;
    font-weight: 500;
    width: 90%;
    line-height: 4rem;
    ${tab({
      width: "100%"
    })}
  }
  margin-bottom: 3rem;
`;

const Testimonials = styled.div`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-family: "poppins";
  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

const Cards = styled.div`
  width: 100%;
  background-color: rgba(0, 147, 255, 0.05);
  padding: 5rem 0;
`;
const CardInner = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: 25% 25% 25%;
  grid-column-gap: 8.3%;
  grid-row-gap: 5rem;
`;

export * from "./learnMore";
