import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../../components";
import HouseImage from "../../images/img/house.png";
import { mobile, tab } from "../../utilities/responsive";

interface IProps {
  title: string;
  description: string;
  image?: any;
}
export const Opportunity: FC<IProps> = ({ title, description, image }) => {
  let navigate = useNavigate();
  const Onclick = () => {
    navigate("/invest-real-estate", {
      state: {
        title: title,
        description: description,
        image: image
      }
    });
  };
  return (
    <Container>
      <TextDiv>
        <TimeDiv>
          <NumberBox>
            <h3>06</h3>
            <h4>Month</h4>
          </NumberBox>
          <NumberBox>
            <h3>25</h3>
            <h4>Days</h4>
          </NumberBox>
          <NumberBox>
            <h3>12</h3>
            <h4>Hours</h4>
          </NumberBox>
          <h2>Remaining</h2>
        </TimeDiv>
        <Title>{title}</Title>
        <Description>
          Be an Investor and live your dream life , follow the links bellow to
          read more about the project
        </Description>
        <Button onClick={Onclick}>
          <PrimaryButton text="Become Investor now" />
        </Button>
      </TextDiv>
      <ImageDiv>
        <img src={image} alt="houseImage" />
      </ImageDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;
  font-family: "poppins", sans-serif;
  ${tab({
    flexDirection: "column"
  })}
  ${mobile({
    flexDirection: "column"
  })}
`;

const TextDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TimeDiv = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  h2 {
    color: rgba(0, 147, 255, 1);
    font-size: 2rem;
  }
`;
const NumberBox = styled.div`
  background-color: rgba(235, 235, 235, 1);
  height: 8rem;
  width: 6rem;
  border-radius: 0.8rem;
  margin-right: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(48, 58, 66, 1);
  h3 {
    font-size: 2.4rem;
    line-height: 3rem;
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
const Title = styled.h2`
  color: rgba(48, 58, 66, 1);
  font-size: 4rem;
  margin-bottom: 1rem;
`;
const Description = styled.h3`
  margin-bottom: 2rem;
  font-weight: 400;
  font-size: 2rem;
`;
const Button = styled.div`
  ${tab({
    marginBottom: "5rem"
  })}
  ${mobile({
    marginBottom: "5rem"
  })}
`;
const ImageDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  ${tab({
    justifyContent: "center"
  })}
  img {
    object-fit: cover;
    width: 40rem;
  }
`;
