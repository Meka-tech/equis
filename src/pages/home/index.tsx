import React from "react";
import styled from "styled-components";
import { Footer, Navbar, PrimaryButton, ReadyBtn } from "../../components";

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <ReadyBtn />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;
