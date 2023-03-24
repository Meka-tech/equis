import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InvestBtn, ReadyBtn } from "../../components";
import WaveBackground from "../../images/img/wavebackground.png";
import { mobile, tab } from "../../utilities/responsive";

interface IProps {
  heading: string;
  week: string;
  duration: string;
  min: string;
  max: string;
}
export const Opportunity: FC<IProps> = ({
  heading,
  duration,
  week,
  min,
  max
}) => {
  const navigate = useNavigate();
  const LoggedIn = localStorage.getItem("loggedIn");
  const Onclick = () => {
    if(LoggedIn === "true") {
    navigate("/dashboard-deposit", {
      state: {
        investment: "crypto",
        plan: heading,
        profit: week,
        duration: duration
      }
    });}else{
      navigate("/login")
    }
  };
  return (
    <Container>
      <Header>
        <img src={WaveBackground} alt="img" />
        <h2>{heading}</h2>
      </Header>
      <Body>
        <h2>WEEKLY PROFIT IN %</h2>
        <h3>{week}%</h3>
        <h2>CONTRACT DURATION</h2>
        <h3>{duration}</h3>
        <h2>MINIMUM DEPOSIT</h2>
        <h3>${min}</h3>
        <h2>MAXIMUM DEPOSIT</h2>
        <h3>${max}</h3>
        <InvestBtn onclick={Onclick} />
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 60rem;
  margin-bottom: 20rem;
  ${tab({
    width: "45rem"
  })}
  ${mobile({
    width: "40rem"
  })}
`;

const Header = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  ${tab({
    height: "6rem"
  })}
  ${mobile({
    height: "6rem"
  })}
  img {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  h2 {
    color: white;
    font-family: "poppins", sans-serif;
    z-index: 1;
    font-size: 3.5rem;
    ${tab({
      fontSize: "3rem"
    })}
    ${mobile({
      fontSize: "2rem"
    })}
  }
`;
const Body = styled.div`
  margin-top: -2px;
  border: 1px solid rgba(0, 147, 255, 1);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  font-weight: 600;
  h2 {
    font-size: 2rem;
    ${mobile({
      fontSize: "1.8rem"
    })}
  }
  h3 {
    margin-bottom: 3rem;
    color: rgba(0, 147, 255, 1);
    font-size: 1.8rem;
  }
`;
