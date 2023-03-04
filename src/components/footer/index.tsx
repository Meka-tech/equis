import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logoVariant.svg";
import { ReactComponent as Phone } from "../../images/icons/phone.svg";
import { ReactComponent as Mail } from "../../images/icons/mail.svg";
import { ReactComponent as Location } from "../../images/icons/location.svg";
import { Link } from "react-router-dom";
import { tab } from "../../utilities/responsive";

export const Footer: FC = ({}) => {
  return (
    <Container>
      <Inner>
        <Column>
          <ColumnHeader>Contact</ColumnHeader>
          <Contact>
            <Phone />
            <h3>+18022095697</h3>
          </Contact>
          <Contact>
            <Mail />
            <h3>Invest@Equis.com</h3>
          </Contact>
          <Contact>
            <Location />
            <h3>1650 blid bay, micacreek, british columbia.</h3>
          </Contact>
        </Column>
        <Column>
          <ColumnHeader>Links</ColumnHeader>
          <PageLink to="/faqs">FAQs</PageLink>
          <PageLink to="/terms&conditions">Terms and conditions</PageLink>
        </Column>
        <Column>
          <ColumnHeader>Investment Disclosure</ColumnHeader>
          <InvestText>
            When you invest with Equis, you are more than a number; you are a
            partner. As a partner with us, you can access opportunities usually
            reserved only for the largest institutional investors. You can
            access a team driven only by excellence and results. You can access
            real estate investment opportunities designed with you in mind.
          </InvestText>
        </Column>
      </Inner>
      <Bottom>
        <Logo fill="white" />
        <BottomText>EQUIS 2022 © All Right Reserved</BottomText>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  height: 45rem;
  width: 100%;
  padding: 2rem;
  background-color: rgba(22, 27, 31, 1);
  font-family: "Poppins", sans-serif;
  color: white;
  ${tab({
    boxSizing: "content-box",
    height: "fit-content"
  })}
`;
const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 90%;
  max-width: 150rem;
  display: grid;
  grid-template-columns: 30% 30% 40%;
  justify-content: space-between;
  padding: 0rem 8rem;
  padding-top: 3rem;
  ${tab({
    display: "block",
    padding: "0 2rem"
  })}
`;
const Column = styled.div`
  ${tab({
    marginBottom: "3rem"
  })}
`;

const ColumnHeader = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 2rem;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  h3 {
    margin-left: 1rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.6rem;
    font-weight: 500;
    max-width: 25rem;
  }
`;
const PageLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.71);
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 1rem;
  display: block;
`;
const InvestText = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.71);
  font-weight: 400;
  max-width: 90%;
`;
const Bottom = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BottomText = styled.h3`
  margin-left: 1.5rem;
  font-weight: 400;
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 1);
`;
