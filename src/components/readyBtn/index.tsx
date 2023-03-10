import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIsMobile } from "../../hooks/useIsMobile";
import { ReactComponent as ButtonSVG } from "../../images/ReadyBtn.svg";
import { mobile } from "../../utilities/responsive";
import { PrimaryButton } from "../button";

interface IProps {
  size?: number;
  to?: string;
  buttonText?: string;
}
export const ReadyBtn: FC<IProps> = ({ size = 8, to = "", buttonText }) => {
  const IsMobile = useIsMobile();
  return (
    <Container to={to}>
      <Button>
        <ButtonSVG width={IsMobile ? `${size * 5}rem` : `${size * 10}rem`} />
        <TextBox>
          <Header size={size}>Ready to invest?</Header>
          <PrimaryButton
            width="100%"
            fontSize={IsMobile ? (size / 5) * 1.6 : (size / 10) * 1.6}
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
  transform: translate(-50%, -50%);
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
  ${mobile({
    fontSize: "8px"
  })}
`;
export * from "./investBtn";
