import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../images/svg/error.svg";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  placeholder?: string;
  errorMsg?: string;
  label?: string;
}
export const InputElement: FC<IProps> = ({
  width,
  errorMsg,
  label,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} width={width} />
      {errorMsg && (
        <ErrorDiv>
          <ErrorIcon width={"1.2rem"} /> <h3>{errorMsg}</h3>
        </ErrorDiv>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  font-family: "poppins", sans-serif;
`;
const Label = styled.h2`
  font-weight: 500;
`;
interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}
const Input = styled.input<IInput>`
  outline: none;
  border: none;
  background-color: rgba(0, 147, 255, 0.1);
  padding: 2rem;
  width: ${(props) => (props.width ? props.width : "100%")};
  color: black;
  font-size: 1.4rem;
  ::placeholder {
    color: rgba(8, 8, 8, 0.5);
  }
`;
const ErrorDiv = styled.div`
  position: absolute;
  bottom: -2.5rem;
  h3 {
    font-size: 1.2rem;
    margin-left: 0.5rem;
    font-weight: 500;
  }

  display: flex;
  align-items: center;
`;
