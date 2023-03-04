import React, { FC, useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useIsMobile } from "../../hooks/useIsMobile";
import useClickOutside from "../../hooks/useClickOutside";

interface IProps {
  question: string;
  answer: string;
}
export const FAQElement: FC<IProps> = ({ question, answer }) => {
  const Ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [open, setOpen] = useState(false);
  const IsMobile = useIsMobile();
  useClickOutside(Ref, () => setOpen(false));
  const OnClick = () => {
    setOpen(!open);
  };
  return (
    <Container ref={Ref}>
      <Question open={open} onClick={() => OnClick()}>
        <h1> {question}</h1>
        <SVG open={open} onClick={() => OnClick()}>
          {!open ? (
            <AiOutlinePlus
              size={IsMobile ? 15 : 30}
              style={{
                color: "rgba(48, 58, 66, 1)"
              }}
            />
          ) : (
            <AiOutlineMinus
              size={IsMobile ? 15 : 30}
              style={{
                color: "rgba(0, 147, 255, 1)"
              }}
            />
          )}
        </SVG>
      </Question>
      <Answer open={open}>
        <h1>{answer}</h1>
      </Answer>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 5rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0rem 1.5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  font-family: "poppins";
`;
interface OpenProps {
  open: boolean;
}
const Question = styled.div<OpenProps>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h1 {
    font-weight: 700;
    color: ${(props) =>
      props.open ? " rgba(0, 147, 255, 1)" : " rgba(16, 24, 40, 1)"};

    font-size: 3rem;
    margin: 0;
    padding: 0;
    text-align: left;
    line-height: 29.69px;
  }
`;

const SVG = styled.div<OpenProps>`
  display: flex;
  cursor: pointer;
  z-index: 10;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "")};
  transition: all 0.25s ease-in-out;
`;
const Answer = styled.div<OpenProps>`
  background-color: white;
  display: ${(props) => (props.open ? "" : "none")};
  transition: all 0.15s ease-in-out;
  margin-top: 3rem;
  color: rgba(48, 58, 66, 1);
  h1 {
    color: rgba(75, 81, 93, 1);
    font-weight: 400;
    font-size: 2rem;
    padding: 0;
    margin: 0;
    text-align: left;
    width: 85%;
    line-height: 4rem;
  }
`;
