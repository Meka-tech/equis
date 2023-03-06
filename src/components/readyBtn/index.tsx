import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ButtonSVG } from "../../images/ReadyBtn.svg";
import { PrimaryButton } from "../button";

interface IProps {
  size?: number;
  to?: string;
  buttonText?: string;
}
export const ReadyBtn: FC<IProps> = ({ size = 10, to = "", buttonText }) => {
  return (
    <Container to={to}>
      <Button>
        <ButtonSVG width={`${size * 10}rem`} />
        <TextBox>
          <Header size={size}>Ready to invest?</Header>
          <PrimaryButton
            width="100%"
            fontSize={(size / 10) * 1.6}
            variant="white"
            text={buttonText ? buttonText : "View Current Opportunities"}
            to={to}
          />
        </TextBox>
      </Button>
    </Container>
  );
};

const Container = styled(Link)``;

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
  transform: translate(-40%, -50%);
`;

interface Itext {
  size: number;
}

const Header = styled.h2<Itext>`
  color: white;
  font-weight: 700;
  font-size: ${(props) => `${props.size * 0.3}
rem`};
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
`;
export * from "./investBtn";
