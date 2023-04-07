import React, { useEffect } from "react";
import styled from "styled-components";
import { ChatIcon, Footer, Navbar } from "../../components";
import { mobile } from "../../utilities/responsive";

export const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <ChatIcon />
      <Navbar />
      <Body>
        <h1>Terms and Conditions</h1>
        <p>
          {" "}
          Your use of our website is governed by the following terms and
          conditions (“Terms of Use”), as well as the EQUIS Privacy Policy and
          other operating rules, minimum qualifications and cautions posted
          throughout the website or presented to you individually during the
          course of your use of the website (collectively, the “Terms”). Your
          viewing and use of the website after such change constitutes your
          acceptance of the Terms and any changes to such terms. If at any time
          you do not want to be bound by the Terms you should logout, exit and
          cease using the website immediately.
        </p>
        <h2> Intended Use of Website</h2>
        <p>
          {" "}
          EQUIS guarantees results to investors. All users of the website are
          responsible for making their own decisions to use the website and for
          any activity taken on the website, including without limitation
          registering and making an investment or otherwise.
        </p>
        <h2> User Registration </h2>
        <p>
          {" "}
          If you are accepting the Terms on behalf of an organisation or entity,
          rather than in an individual capacity, you represent and warrant that
          you are authorised to accept the Terms on that organisation or
          entity’s behalf and bind them to these Terms (in which case, the
          references to “you” and “your” in these Terms, except for in this
          sentence, refer to that organisation or entity).
        </p>
        <p>
          {" "}
          Only real persons at or above the age of 18 may register for an
          account and use the website. Registering for an account on the website
          creates no commitment or obligation on the registered user to make any
          investment or seek any investment. All information you provide to the
          website must be truthful, accurate and complete in all material
          respects. Our registration process may use third-party validation
          technology, including those provided by third-party social media
          sites, to attempt to confirm your qualification to use the website.
        </p>
        <p>
          {" "}
          Your registration and the use of any third-party site is subject to
          the terms and conditions and policies of such sites and EQUIS is not
          responsible or liable for any harm resulting from the use or misuse of
          those sites, including when such harm could or does affect your
          account on this website or use of the website.
        </p>
        <h2> Registered Account Obligations </h2>
        <p>
          {" "}
          The named registered user of an account is the only person that may
          use the account and it may not be transferred to anyone else.
        </p>
        <p>
          {" "}
          You are responsible for maintaining the confidentiality of your
          username and password and to periodically change your password to
          maintain security. If you have concerns that your username or password
          may have been compromised and suspect that unauthorised access to your
          account or the website has occurred, you must immediately contact
          EQUIS support.
        </p>
        <h2> Content Use Limitations </h2>
        <p>
          {" "}
          Your use of the website and its webinars, images, infographics,
          alerts, text, articles, assessments, checklists, forms, ratings,
          design, data, source code, analytics, photos, software, trademarks,
          copyrights, and other information (“Content”) may only be used for the
          lawful and intended purposes expressly authorised by EQUIS.
        </p>
      </Body>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Body = styled.div`
  width: 100%;
  padding: 5rem;
  max-width: 130rem;
  margin: 0 auto;
  font-family: "poppins";
  margin-bottom: 10rem;
  ${mobile({
    padding: "3rem"
  })}
  h1 {
    color: rgba(48, 58, 66, 1);
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  h2 {
    color: rgba(48, 58, 66, 1);
    margin: 3rem 0;
    margin-left: 5rem;
    font-size: 2rem;
    ${mobile({
      marginLeft: "3rem"
    })}
  }
  p {
    font-family: "Inter", sans-serif;
    color: rgba(48, 58, 66, 1);
    margin-bottom: 2rem;
    font-weight: 400;
    margin-left: 5rem;
    font-size: 1.6rem;
    ${mobile({
      marginLeft: "3rem"
    })}
  }
`;
