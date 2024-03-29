import React, { useEffect } from "react";
import styled from "styled-components";
import {
  ChatIcon,
  FAQElement,
  Footer,
  Navbar,
  ReadyBtn
} from "../../components";
import { mobile, tab } from "../../utilities/responsive";

export const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Navbar />
      <ChatIcon />
      <Body>
        <Header>FAQs</Header>
        <Elements data-aos="fade-left">
          <FAQElement
            question="How do i invest?"
            answer="Click the “ready to invest” button and follow the simples steps investing into the company’s address."
          />
          <FAQElement
            question="What should i do if  i don’t have a crypto wallet?"
            answer="Choose a legit crypto wallet and create an account. Then copy your unique wallet address and register."
          />
          <FAQElement
            question="How long does it take to make a withdrawal?"
            answer="Once a withdrawal is placed the client’s profit is sent immediately."
          />
          <FAQElement
            question="Can i invest with other crypto currencies?"
            answer="You can invest using Bitcoin, Ethereum and Ripple."
          />
          <FAQElement
            question="Can i have both real estate & crypto investments?"
            answer="Yes you can invest in both at the same time."
          />
          <FAQElement
            question="Can i get a referral bonus?"
            answer="Yes clients are entitled to a referral bonus once validated."
          />
          <FAQElement
            question="Why do we use bitcoin for deposits and payouts?"
            answer="Being a multinational investment platform and handling property deals, we aim to establish a peer-peer network where payments can be easily accessed by our members worldwide."
          />
        </Elements>
        <ReadyToInvest>
          <ReadyBtn
            size={9}
            buttonText="Proceed to fixed plans"
            to="/investments"
          />
        </ReadyToInvest>
      </Body>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Body = styled.div`
  padding: 1rem 10rem;
  ${mobile({
    padding: "1rem"
  })}
  ${tab({
    padding: "1rem 2rem"
  })}
`;

const Header = styled.h1`
  text-align: center;
  font-weight: 700;
  font-family: "poppins";
  font-size: 4.5rem;
  margin-top: 5rem;
`;

const Elements = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 130rem;
  margin-top: 10rem;
`;
const ReadyToInvest = styled.div`
  width: 100%;
  max-width: 130rem;
  margin: 15rem auto;
  display: flex;
  justify-content: center;
`;
