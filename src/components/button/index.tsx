import React, { FC } from "react";
import styled from "styled-components";
interface IProps {
  fontSize?: number;
  variant?: string;
  width?: string;
  text?: string;
}

export const PrimaryButton: FC<IProps> = ({
  fontSize = 1.6,
  variant,
  width,
  text
}) => {
  return (
    <Container fontSize={fontSize} variant={variant} width={width}>
      {text}
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
`;
