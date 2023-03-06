import React from "react";
import styled from "styled-components";
import { DashboardSidebar, PrimaryButton } from "../../../components";
import { Body, Container } from "../style";

export const Logout = () => {
  return (
    <Container>
      <DashboardSidebar activeNav="log out" />
      <Body>
        <Box>
          <Text>Are you sure you want to logout</Text>
          <Buttons>
            <YesBtn>Yes</YesBtn>
            <NoBtn>No</NoBtn>
          </Buttons>
        </Box>
      </Body>
    </Container>
  );
};

const Box = styled.div`
  width: 100%;
  height: 50rem;
  background-color: rgba(229, 244, 255, 1);
  margin-top: 5rem;
  max-width: 130rem;
  margin: 0 auto;
  font-family: "poppins", sans-serif;
  padding: 5rem;
`;
const Text = styled.h2`
  text-align: center;
  margin-bottom: 6rem;
  font-weight: 500;
  font-size: 1.8rem;
`;
const Buttons = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  width: 15rem;
`;
const YesBtn = styled.div`
  cursor: pointer;
  background-color: rgba(255, 0, 0, 1);
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

const NoBtn = styled(YesBtn)`
  background-color: rgba(0, 147, 255, 1);
`;
