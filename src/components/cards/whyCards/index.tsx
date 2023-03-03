import React, { FC, ReactElement } from "react";
import styled from "styled-components";
interface IProps {
  title: string;
  content: string;
  svg: ReactElement;
}
export const WhyCard: FC<IProps> = ({ title, content, svg }) => {
  return (
    <Container>
      <Icon>{svg}</Icon>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 2rem;
  background-color: #ffffff;
  min-height: 28rem;
  width: 100%;
  text-align: center;
  height: fit-content;
`;

const Icon = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  background-color: rgba(220, 240, 255, 1);
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: rgba(48, 58, 66, 1);
  font-family: "poppins";
  width: 80%;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;
const Content = styled.h3`
  color: rgba(48, 58, 66, 0.8);
  font-weight: 400;
  font-size: 1.4rem;
`;
