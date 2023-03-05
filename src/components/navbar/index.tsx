import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { tab } from "../../utilities/responsive";

interface IProps {
  activeNav?: string;
}

export const Navbar: FC<IProps> = ({ activeNav = "home" }) => {
  const NavDetails = [
    ["home", "/"],
    ["crypto investments", "/crypto-investment"],
    ["about us", "/about-us"]
  ];

  return (
    <Container>
      <Inner>
        <LogoDiv to="/">
          <Logo fill="white" width={"5rem"} style={{ cursor: "pointer" }} />
          <h1>EQUIS</h1>
        </LogoDiv>
        <NavItems>
          {NavDetails.map((nav, index) => (
            <NavItem
              to={`${nav[1]}`}
              key={index}
              active={activeNav === nav[0] ? "true" : "false"}
            >
              <h1>{nav[0]}</h1>
              {activeNav === nav[0] && <ActiveBar />}
            </NavItem>
          ))}
        </NavItems>
        <Buttons>
          <LoginBtn to="/login">Log in</LoginBtn>
          <SignUpBtn to="/sign-up">Register</SignUpBtn>
        </Buttons>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  height: 8rem;
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid rgba(0, 147, 255, 1);
`;
const Inner = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 150rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoDiv = styled(Link)`
  flex: 0.4;
  font-family: "Quattrocento Sans", sans-serif;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  text-decoration: none;
  ${tab({
    maxWidth: "25%",
    flex: "0.35"
  })}
  h1 {
    color: rgba(0, 147, 255, 1);
    font-weight: 400;
    margin-left: 1rem;
    font-size: 3rem;
    cursor: pointer;
  }
`;
const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  flex: 0.3;
  ${tab({
    minWidth: "40%"
  })}
`;
interface INavItem {
  active?: string;
}
const NavItem = styled(Link)<INavItem>`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  h1 {
    font-weight: 400;
    color: ${(props) =>
      props.active === "true" ? " rgba(0, 147, 255, 1)" : "black"};

    font-size: 1.6rem;
  }
`;
const ActiveBar = styled.div`
  position: absolute;
  bottom: -2px;
  width: 60%;
  border-bottom: 2px solid rgba(0, 147, 255, 1);
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
  justify-content: flex-end;
`;

const LoginBtn = styled(Link)`
  color: rgba(0, 147, 255, 1);
  border: 1px solid rgba(0, 147, 255, 1);
  padding: 0.5rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 2rem;
  transition: all 0.1s ease-in;
  text-decoration: none;
  :hover {
    transform: translateY(-0.15rem);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: translateY(-0.05rem);
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;
const SignUpBtn = styled(LoginBtn)`
  color: white;
  background: rgba(0, 147, 255, 1);
  margin-right: 0;
`;
