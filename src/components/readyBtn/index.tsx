import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIsMobile, useIsTab } from "../../hooks/useIsMobile";
import { ReactComponent as ButtonSVG } from "../../images/ReadyBtn.svg";
import { ReactComponent as ButtonSVGmini } from "../../images/ReadyBtnMini.svg";
import { ReactComponent as ButtonSVGtab } from "../../images/ReadyBtnTab.svg";
import { mobile, tab } from "../../utilities/responsive";
import { PrimaryButton } from "../button";

interface IProps {
  size?: number;
  to?: string;
  buttonText?: string;
}
export const ReadyBtn: FC<IProps> = ({ size = 8, to = "", buttonText }) => {
  const IsTab = useIsTab();
  return (
    <Container to={to}>
      <Button>
        <Svg>
          <ButtonSVG width={`${size * 10}rem`} />
        </Svg>
        <SvgMini>
          <ButtonSVGmini />
        </SvgMini>
        <SvgTab>
          <ButtonSVGtab />
        </SvgTab>
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
        <MobileTextBox>
          <Header size={size}>Ready to invest?</Header>
          <PrimaryButton
            width="100%"
            fontSize={1}
            variant="white"
            text={buttonText ? buttonText : "View Current Opportunities"}
            to={to}
          />
        </MobileTextBox>
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
  display: block;
  ${mobile({
    display: "none"
  })}
  ${tab({
    display: "none"
  })}
`;

const MobileTextBox = styled(TextBox)`
  display: none;
  flex-direction: column;
  align-items: center;
  top: 38%;
  ${mobile({
    display: "flex"
  })};
  ${tab({
    display: "flex"
  })};
`;
interface Itext {
  size: number;
}

const Svg = styled.div`
  display: flex;
  ${tab({
    display: "none"
  })}
  ${mobile({
    display: "none"
  })}
`;

const SvgMini = styled.div`
  display: none;
  ${tab({
    display: "none"
  })}
  ${mobile({
    display: "flex"
  })}
`;
const SvgTab = styled.div`
  display: none;
  ${tab({
    display: "flex"
  })}
  ${mobile({
    display: "none"
  })}
`;

const Header = styled.h2<Itext>`
  color: white;
  font-weight: 700;
  font-size: ${(props) => `${props.size * 0.3}
rem`};
  font-family: "Poppins", sans-serif;
  margin-bottom: 2rem;
  ${mobile({
    fontSize: "1.4rem",
    marginBottom: "0.5rem"
  })}
  ${tab({
    fontSize: "1.4rem",
    marginBottom: "0.5rem"
  })}
`;
export * from "./investBtn";
