import React, { FC, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../images/svg/error.svg";
import { mobile, tab } from "../../utilities/responsive";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  placeholder?: string;
  errorMsg?: string;
  type?: string;
}
export const InputElement: FC<IProps> = ({
  type,
  width,
  errorMsg,
  ...rest
}) => {
  const [passwordType, setPasswordType] = useState("password");
  return (
    <Container>
      <Body>
        <Input
          {...rest}
          width={width}
          type={type === "password" ? passwordType : type}
        />
        {type === "password" && (
          <Eye
            onClick={() => {
              if (passwordType === "password") {
                setPasswordType("text");
              } else {
                setPasswordType("password");
              }
            }}
          >
            {passwordType === "password" ? (
              <AiOutlineEyeInvisible color="rgba(0, 147, 255, 0.5)" size={25} />
            ) : (
              <AiOutlineEye color="rgba(0, 147, 255, 0.5)" size={25} />
            )}
          </Eye>
        )}
      </Body>
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

const Body = styled.div`
  position: relative;
`;
interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}
const Input = styled.input<IInput>`
  position: relative;
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
  ${tab({
    bottom: "-3rem"
  })}
  ${mobile({
    bottom: "-3rem"
  })}
  h3 {
    font-size: 1.2rem;
    margin-left: 0.5rem;
    font-weight: 500;
  }

  display: flex;
  align-items: center;
`;

const Eye = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 55%;
  right: 1rem;
  cursor: pointer;
`;
