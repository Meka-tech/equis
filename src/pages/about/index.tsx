import React from "react";
import styled from "styled-components";
import {
  ChatIcon,
  Footer,
  Navbar,
  PrimaryButton,
  ReadyBtn,
  WhyCard
} from "../../components";
import HomeHero from "../../images/img/aboutHero.png";
import Cerificate from "../../images/img/certificate.png";
import { ReactComponent as Mouse } from "../../images/svg/mouseSvg.svg";
import { ReactComponent as Left } from "../../images/svg/leftBlueFade.svg";
import { ReactComponent as Right } from "../../images/svg/rightBlueFade.svg";
import { ReactComponent as Bar } from "../../images/svg/blueBar.svg";
import { ReactComponent as Investors } from "../../images/cardIcons/heads.svg";
import { ReactComponent as Assets } from "../../images/cardIcons/asset.svg";
import { ReactComponent as Benefits } from "../../images/cardIcons/benefits.svg";
import { ReactComponent as Crypto } from "../../images/cardIcons/cypto.svg";
import { ReactComponent as Flow } from "../../images/cardIcons/flow.svg";
import { ReactComponent as Money } from "../../images/cardIcons/money.svg";
import { ReactComponent as Create } from "../../images/icons/create.svg";
import { ReactComponent as SelectAll } from "../../images/icons/selectAll.svg";
import { ReactComponent as Database } from "../../images/icons/database.svg";
import { AiOutlineArrowDown } from "react-icons/ai";
import BlueShade from "../../images/img/blueShadow.png";
import { mobile, tab } from "../../utilities/responsive";

export const AboutUs = () => {
  return (
    <Container>
      <ChatIcon />
      <Navbar activeNav="about us" />
      <Header img={HomeHero}>
        <TextBox>
          <Heading>
            We are leading the real estate &
            <br /> crypto market
          </Heading>
          <SubHeading>Diverse mechanism for a quality investment</SubHeading>

          <Scroll>
            <h3> Scroll Down</h3> <Mouse width={"2.5rem"} />
            <AiOutlineArrowDown size={30} style={{ marginTop: "1rem" }} />
          </Scroll>
        </TextBox>
      </Header>
      <Body>
        <Texts data-aos="fade-right">
          {" "}
          <SubTitle>Intro</SubTitle>
          <Paragraph>
            We are a Real Estate and Trading company consisting of a team of
            financial market professionals brought together for the sole aim of
            providing the best possible trading conditions to our esteemed
            clients. Our specialists have been involved in the development of
            technical specification for designing an up-to-date platform that is
            suitable for both beginners and experienced traders.
          </Paragraph>
          <SubTitle>Goal</SubTitle>
          <Paragraph>
            Investments are all about the investor; that being said, what the
            investor wants and what they get. Generally, every investor wants a
            product or service that yields good profit which is what we offer at
            Equis. We provide a state of the art global perspective through our
            wide network, in-depth market and sector knowledge. You are assured
            of your return on investment with us because we diversify and we
            have multiple income streams which include but not limited to:
            Crypto trading, Forex trading, Stock & Commodities and Real Estate
            Investments. This puts us in an excellent position to address the
            increasingly global needs of our clients.
          </Paragraph>
        </Texts>

        <Why data-aos="fade-left">
          <WhyTitle>
            <Left />
            <h2>Why</h2> <Right />
          </WhyTitle>
          <WhyTexts>
            {" "}
            <h3>Equis Limited Partnerships</h3>
            <h4>
              We bring our members high quality commercial investment
              opportunities that are normally hidden away in country clubs or
              investment firms. Investors get access to a diverse range of
              retail, multi-family and office buildings investment opportunities
              and Trading investments.
            </h4>
          </WhyTexts>
          <Cards>
            <WhyCard
              title="Invest Alongside The Experts"
              content="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors get access to a diverse range of retail"
              svg={<Investors width={"3rem"} />}
            />
            <WhyCard
              title="Invest in Crypto"
              content="We at Equis make sure our members are never left behind. Clients can also choose to invest in cryptocurrency trading. Our team makes sure your income is stable regardless of the market fluctuations."
              svg={<Crypto width={"3rem"} />}
            />

            <WhyCard
              title="Invest in Strong Asset Classes"
              content="Only the best is offered to our clients which means we bring you the surest assets to invest in with the aim of maximising clients return on investment during the course of the investment."
              svg={<Assets width={"3rem"} />}
            />
            <WhyCard
              title="Hassle Free Investing"
              content="Investing with us is seamless. Our user friendly site makes it easy for any adult to invest and clients investments take little to no time for validation."
              svg={<Money width={"3rem"} />}
            />
            <WhyCard
              title="Stable Cashflow"
              content="With Equis your income is never paused and your ROI is never delayed. The key is to stay consistent and taking advantage of the compound interest earned through investing and re-investing."
              svg={<Flow width={"3rem"} />}
            />
            <WhyCard
              title="Tax Benefits"
              content="Task free investments such as municipal bonds is a great way to improve the efficiency of your portfolio and reduce overall tax liabilities. With Equis you get all these and more."
              svg={<Benefits width={"3rem"} />}
            />
            <BlueShadow src={BlueShade} alt="shade" />
          </Cards>
        </Why>
      </Body>
      <HowWorks data-aos="fade-right">
        <HWHeader>How Equis Works</HWHeader>
        <HWInner>
          <Worker>
            <Create />
            <h3>Sign up</h3>
            <h4>Create an account by filling the required fields</h4>
          </Worker>
          <Worker>
            <SelectAll />
            <h3>Choose Plan</h3>
            <h4>Select the investment plan that fits your budget.</h4>
          </Worker>
          <Worker>
            <Database />
            <h3>Invest</h3>
            <h4>
              Deposit into the designated wallet address and start earning!
            </h4>
          </Worker>
        </HWInner>
      </HowWorks>
      <Body>
        <ImageContainer>
          <CertificateImg src={Cerificate} alt="certificate" />
        </ImageContainer>
        <ReadyToInvest>
          <ReadyBtn size={9} to="/investments" />
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
  margin-bottom: 15%;
  ${tab({
    fontSize: "1.8rem"
  })}
  ${mobile({
    fontSize: "1.8rem"
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
const Texts = styled.div`
  margin-top: 5rem;
`;
const SubTitle = styled.h2`
  color: rgba(0, 147, 255, 1);
  font-family: "poppins";
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 4rem;
  margin-bottom: 3rem;
`;
const Why = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 10rem;
  text-align: center;
`;

const WhyTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: rgba(0, 147, 255, 1);
    font-weight: 500;
    font-size: 2.5rem;
    margin: 0 0.5rem;
    font-family: "poppins";
  }
`;
const WhyTexts = styled.div`
  h3 {
    color: rgba(48, 58, 66, 1);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: "poppins";
  }
  h4 {
    color: rgba(48, 58, 66, 0.8);
    font-size: 1.4rem;
    font-weight: 400;
    width: 70%;
    margin: 0 auto;
    ${tab({
      width: "100%"
    })}
  }
`;
const Cards = styled.div`
  width: 100%;
  margin: 5rem auto;
  display: grid;
  justify-content: center;
  grid-template-columns: 25% 25% 25%;
  grid-column-gap: 8.3%;
  grid-row-gap: 5rem;
  position: relative;
  ${tab({
    display: "flex",
    flexDirection: "column"
  })}
  ${mobile({
    display: "flex",
    flexDirection: "column"
  })}
`;
const BlueShadow = styled.img`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100rem;
  width: 100rem;
  border-radius: 50%;
  object-fit: fill;
  position: absolute;
  z-index: -1;
  ${tab({
    display: "none"
  })}
`;
const HowWorks = styled.div`
  width: 100%;
  background-color: rgba(242, 250, 255, 1);
  padding: 2rem;
`;
const HWInner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 130rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tab({
    display: "flex",
    flexDirection: "column"
  })}
  ${mobile({
    display: "flex",
    flexDirection: "column"
  })}
`;
const HWHeader = styled.h2`
  font-family: "poppins";
  font-weight: 700;
  margin-bottom: 5rem;
  font-size: 3rem;
  text-align: center;
`;
const Worker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 25%;
  margin-bottom: 10rem;
  ${tab({
    width: "80%",
    marginBottom: "5rem"
  })}
  ${mobile({
    width: "80%",
    marginBottom: "5rem"
  })}
  h3 {
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-weight: 500;
    font-size: 1.4rem;
    width: 80%;
    line-height: 2rem;
    text-align: center;
    margin: 0 auto;
  }
`;
const ImageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 130rem;
  margin-top: 15rem;
`;
const CertificateImg = styled.img`
  width: 50rem;
  object-fit: contain;
  ${tab({
    width: "40rem"
  })}
  ${mobile({
    width: "35rem"
  })}
`;

const ReadyToInvest = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 15rem auto;
  display: flex;
  justify-content: center;
`;
