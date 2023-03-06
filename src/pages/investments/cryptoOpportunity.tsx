import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InvestBtn, ReadyBtn } from "../../components";
import WaveBackground from "../../images/img/wavebackground.png";

interface IProps {
  heading: string;
  week: string;
  duration: string;
  min: string;
  max: string;
}
export const CryptoOpportunity: FC<IProps> = ({
  heading,
  duration,
  week,
  min,
  max
}) => {
  const navigate = useNavigate();
  const Onclick = () => {
    navigate("/dashboard-deposit", {
      state: {
        investment: "crypto",
        plan: heading,
        profit: week,
        duration: duration
      }
    });
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
`;

const Header = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
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
  }
  h3 {
    margin-bottom: 3rem;
    color: rgba(0, 147, 255, 1);
    font-size: 1.8rem;
  }
`;
