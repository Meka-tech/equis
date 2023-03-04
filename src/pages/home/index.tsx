import React from "react";
import styled from "styled-components";
import {
  Footer,
  Navbar,
  PrimaryButton,
  ReadyBtn,
  WhyCard
} from "../../components";
import HomeHero from "../../images/img/homeHero.png";
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
import AboutImg from "../../images/img/aboutImg.png";
import Book from "../../images/img/book.png";
import ZigZag from "../../images/svg/zigZag.svg";
import { AiOutlineArrowDown } from "react-icons/ai";
import BlueShade from "../../images/img/blueShadow.png";
import { tab } from "../../utilities/responsive";

export const Home = () => {
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
            <PrimaryButton text="Current Opportunities" />
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
        <OwnParts>
          <h2>Own Parts of Places People Go the Most</h2>
          <h4>
            With your funds in high yielding real estate, you'll enjoy returns
            from investing in shopping centers, student housing, offices,
            warehouses and even massive cinemas. It's a numbers game, so your
            funds are invested in residential and commercial centers with many
            people, and many transactions
          </h4>
        </OwnParts>
        <Why>
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
          <Buttons>
            <PrimaryButton text="Current Opportunities" />
            <PrimaryButton text="Learn More About Investing" variant="blue" />
          </Buttons>
        </Why>
        <AboutDiv>
          <AboutTextBox>
            <AboutTitle>
              <Bar />
              <h2>About</h2>
            </AboutTitle>
            <AboutTexts>
              <h3> Equis Limited Partnerships</h3>
              <h4>
                When you invest with Equis, you are more than a number; you are
                a partner. As a partner with us, you can access opportunities
                usually reserved only for the largest institutional investors.
                You can access a team driven only by excellence and results. You
                can access real estate investment opportunities designed with
                you in mind.
              </h4>
            </AboutTexts>
          </AboutTextBox>
          <AboutImage>
            <img src={AboutImg} alt="about" />
            <Zig alt="zig" src={ZigZag} />
          </AboutImage>
        </AboutDiv>
        <ReadyToInvest>
          <ReadyBtn size={9} />
        </ReadyToInvest>
        <MailList>
          <InputDiv>
            <InputDivTitle>
              Join our email list now and get
              <br /> a free industry eBook
            </InputDivTitle>
            <InputDivInner>
              <TopInputs>
                <div>
                  <InputLabel>First Name</InputLabel>
                  <Input placeholder="First name" width="85%" />
                </div>
                <div>
                  <InputLabel>Last Name</InputLabel>
                  <Input placeholder="Last name" width="85%" />
                </div>
              </TopInputs>
              <InputLabel>Email</InputLabel>
              <Input placeholder="JohnDoe214@gmail.com" />
              <RadioDiv>
                {" "}
                <InputLabel>Are you an accredited Investor?</InputLabel>
                <RadioRow>
                  <div>
                    <RadioButton type={"radio"} name="radio" />
                    <InputLabel>Yes</InputLabel>
                  </div>
                  <div>
                    <RadioButton type={"radio"} name="radio" />
                    <InputLabel>No</InputLabel>
                  </div>
                </RadioRow>
              </RadioDiv>

              <InputLabel>How did you hear about us?</InputLabel>
              <TextArea placeholder="Type your message here" />
              <PrimaryButton text="join mailing list" width="100%" />
            </InputDivInner>
          </InputDiv>
          <BookDiv>
            <img src={Book} alt="book" />
            <Lists>
              <ol>
                <h3>
                  1) Benefits of investing in real estate during uncertain times
                </h3>
                <h3>2)Tax advantages of investing </h3>
                <h3>3) Active Vs. Passive Investing</h3>
                <h3>4) How h3mited Partnerships work </h3>
                <h3>5) How to find deals that are recession resistant</h3>
              </ol>
              <ol>
                <h3>6) Markets that are recession resih3ent</h3>
                <h3>
                  7) How to Analyse deals in a rising interest rate environment
                </h3>
                <h3>8) Trading investments made for your budget.</h3>
              </ol>
            </Lists>
          </BookDiv>
        </MailList>
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

const OwnParts = styled.div`
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
    width: 70%;
    line-height: 4rem;
    ${tab({
      width: "100%"
    })}
  }
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

const AboutDiv = styled.div`
  width: 100%;
  max-width: 130rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  ${tab({
    flexDirection: "column"
  })}
`;

const AboutTextBox = styled.div``;

const AboutTitle = styled.div`
  display: flex;
  align-items: center;
  h2 {
    color: rgba(0, 147, 255, 1);
    font-weight: 500;
    font-size: 2.5rem;
    margin: 0 0.5rem;
    font-family: "poppins";
  }
`;
const AboutTexts = styled.div`
  h3 {
    color: rgba(48, 58, 66, 1);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: "poppins";
    margin-left: 2rem;
  }
  h4 {
    color: rgba(48, 58, 66, 0.8);
    font-size: 1.4rem;
    font-weight: 400;
    width: 80%;
    margin-bottom: 4rem;
  }
`;

const AboutImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  img {
    width: 45rem;
    object-fit: cover;
  }
`;

const Zig = styled.img`
  position: absolute;
  z-index: -1;
  top: -20%;
`;

const ReadyToInvest = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 15rem auto;
  display: flex;
  justify-content: center;
`;

const MailList = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15rem;
`;

const InputDiv = styled.div`
  flex: 1;
`;
const InputDivInner = styled.div`
  width: 60%;
`;
const InputDivTitle = styled.h2`
  font-weight: 700;
  font-family: "poppins";
  font-size: 2.5rem;
`;
const InputLabel = styled.h3`
  color: rgba(48, 58, 66, 1);
  font-weight: 400;
  font-family: "poppins";
  font-size: 1.4rem;
`;

const TopInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const RadioDiv = styled.div`
  margin: 2rem 0;
  width: 100%;
`;
const RadioRow = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  div {
    display: flex;
  }
`;
const RadioButton = styled.input`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const BookDiv = styled.div`
  flex: 0.9;
  position: relative;
  img {
    width: 45rem;
    object-fit: cover;
    margin-bottom: 2rem;
  }
`;

const Lists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ol {
  }
  h3 {
    font-size: 1.2rem;
    font-family: "poppins";
    color: rgba(48, 58, 66, 1);
    font-weight: 400;
    margin-bottom: 0.8rem;
  }
`;

interface IInput {
  width?: string;
}
const Input = styled.input<IInput>`
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0.04);
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  font-family: "poppins";
  width: ${(props) => (props.width ? props.width : "100%")};
  color: black;
  font-size: 1.4rem;
  ::placeholder {
    color: rgba(48, 58, 66, 0.5);
  }
`;
const TextArea = styled.textarea`
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0.04);
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  font-family: "poppins";
  width: 100%;
  color: black;
  font-size: 1.4rem;
  height: 15rem;
  margin-bottom: 3rem;
  resize: none;
  ::placeholder {
    color: rgba(48, 58, 66, 0.5);
  }
`;

export * from "./learnMore";
