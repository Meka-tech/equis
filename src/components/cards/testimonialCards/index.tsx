import React, { FC, ReactElement } from "react";
import styled from "styled-components";
interface IProps {
  name: string;
  comment: string;
}
export const TestimonialCard: FC<IProps> = ({ name, comment }) => {
  return (
    <Container>
      <Comment>{comment}</Comment>
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 3rem 1.5rem;
  background-color: #ffffff;
  min-height: 24rem;
  width: 100%;
  text-align: center;
  height: fit-content;
  font-family: "poppins";
  text-align: left;
`;

const Comment = styled.h3`
  color: black;
  font-weight: 500;
  font-size: 1.6rem;
`;

const Name = styled.li`
  position: absolute;
  bottom: 2rem;
  color: rgba(0, 147, 255, 1);
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 600;
`;
