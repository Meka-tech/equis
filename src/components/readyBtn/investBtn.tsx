import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ButtonSVG } from "../../images/ReadyBtn.svg";
import { PrimaryButton } from "../button";

interface IProps {
  size?: number;

  onclick?: () => void;
}
export const InvestBtn: FC<IProps> = ({ size = 3, onclick }) => {
  return (
    <Container onClick={onclick}>
      <Button>
        <ButtonSVG width={`${size * 10}rem`} height={"5rem"} />
        <TextBox>
          <Header size={size}>Invest Now</Header>
        </TextBox>
      </Button>
    </Container>
  );
};

const Container = styled.div``;

const Button = styled.div`
  position: relative;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  width: fit-content;
  max-width: 100%;
  svg {
    filter: drop-shadow(0px 8px 10px rgb(0 147 255 / 0.3));
  }
  :hover {
    transform: translateY(-5px);
    svg {
      filter: drop-shadow(0px 10px 14px rgb(0 147 255 / 0.3));
    }
  }
  :active {
    transform: translateY(-3px);
    svg {
      filter: drop-shadow(0px 8px 14px rgb(0 147 255 / 0.7));
    }
  }
`;
const TextBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
`;

interface Itext {
  size: number;
}

const Header = styled.h4<Itext>`
  color: white;
  font-weight: 700;
  font-size: ${(props) => `${props.size * 0.5}
rem`};
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
`;
