import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile, tab } from "../../utilities/responsive";
import { ReactComponent as Spinner } from "../../images/Spinner.svg";
import "./Button.styles.css";
interface IProps {
  fontSize?: number;
  variant?: string;
  width?: string;
  text?: string;
  to?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

export const PrimaryButton: FC<IProps> = ({
  fontSize = 1.6,
  variant,
  width,
  text,
  to = "",
  onClick,
  isLoading
}) => {
  const navigate = useNavigate();
  return (
    <Container
      fontSize={fontSize}
      variant={variant}
      width={width}
      onClick={onClick}
    >
      {text}
      {isLoading ? <Spinner className="loader-spin" /> : null}
    </Container>
  );
};

const Container = styled.div<IProps>`
  cursor: pointer;
  background-color: ${(props) => (props.variant ? "" : "rgba(0, 147, 255, 1)")};
  color: ${(props) =>
    props.variant === "blue" ? "rgba(0, 147, 255, 1)" : "white"};
  border: ${(props) =>
    props.variant === "blue"
      ? "1px solid rgba(0, 147, 255, 1)"
      : props.variant === "white"
      ? "1px solid white"
      : "none"};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : "1.6rem")};

  width: ${(props) => (props.width ? props.width : "fit-content")};
  font-weight: 500;
  padding: 0.8rem 1.8rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-out;
  text-decoration: none;
  :hover {
    transform: scale(1.08, 1.05);
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.2);
  }
  ${mobile({
    padding: "0.5rem 0.8rem",
    fontSize: `${(props: { fontSize: any }) =>
      props.fontSize ? `${props.fontSize / 2}rem` : "1rem"}`
  })}
  ${tab({
    borderRadius: "0.8rem 1rem",
    padding: "0.5rem , 1rem",
    fontSize: `${(props: { fontSize: any }) =>
      props.fontSize ? `${props.fontSize / 2}rem` : "1rem"}`,
    width: "100%"
  })}
`;
