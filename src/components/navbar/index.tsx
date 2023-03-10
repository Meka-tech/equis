import React, { FC, useState, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { mobile, tab } from "../../utilities/responsive";
import { ReactComponent as HamburgerMenu } from "../../images/svg/hamburger.svg";
import useClickOutside from "../../hooks/useClickOutside";
import { ReactComponent as MobileLogo } from "../../images/logoVariant.svg";
import { RxCross2 } from "react-icons/rx";
import { ReactComponent as Mail } from "../../images/icons/mail.svg";

interface IProps {
  activeNav?: string;
}

export const Navbar: FC<IProps> = ({ activeNav = "home" }) => {
  const Ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  const NavDetails = [
    ["home", "/"],
    ["crypto investments", "/crypto-investment"],
    ["about us", "/about-us"]
  ];

  const MobileNavDetails = [
    ["home", "/"],
    ["crypto investments", "/crypto-investment"],
    ["about us", "/about-us"],
    ["login", "/login"],
    ["register", "/sign-up"]
  ];
  const [active, setActive] = useState(false);
  useClickOutside(Ref, () => setActive(false));
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
        <HamburgerDiv onClick={() => setActive(true)}>
          <HamburgerMenu width={"3rem"} />
        </HamburgerDiv>
        <Sidebar active={active} ref={Ref}>
          <CloseSideBarDiv onClick={() => setActive(false)}>
            <RxCross2 size={30} />
          </CloseSideBarDiv>
          <MobileLogoDiv>
            <MobileLogo width={"3rem"} fill="white" />
            <h2>EQUIS</h2>
          </MobileLogoDiv>
          <MobileNavItems>
            {MobileNavDetails.map((nav, index) => (
              <MobileNavLink
                to={`${nav[1]}`}
                key={index}
                active={activeNav === nav[0] ? "true" : "false"}
              >
                <MobileNavItem>
                  <h1>{nav[0]}</h1>
                  {activeNav === nav[0] && <ActiveBar />}
                </MobileNavItem>
              </MobileNavLink>
            ))}
          </MobileNavItems>
          <NavFoot>
            <Mail width={"2rem"} />
            <h2>Invest@Equis.com</h2>
          </NavFoot>
        </Sidebar>
        <Shade active={active} />
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
    flex: "0.5"
  })}
  ${mobile({
    flex: "0.5"
  })}
  h1 {
    color: rgba(0, 147, 255, 1);
    font-weight: 400;
    margin-left: 1rem;
    font-size: 3rem;
    cursor: pointer;
  }
`;
const HamburgerDiv = styled.div`
  cursor: pointer;
  margin-left: auto;
  display: none;
  ${tab({
    display: "flex"
  })}
  ${mobile({
    display: "flex"
  })}
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
  ${mobile({
    display: "none"
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
  ${mobile({
    display: "none"
  })}
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
interface openProps {
  active: boolean;
}
const Shade = styled.div<openProps>`
  display: ${(props) => (props.active ? "flex" : "none")};
  width: 100%;
  height: 100%;
  background-color: #ffffff83;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s ease-in;
  z-index: 99;
`;

const Sidebar = styled.div<openProps>`
  display: none;
  width: 60%;
  height: 100%;
  background-color: rgba(0, 147, 255, 1);
  box-sizing: border-box;
  padding: 3rem 0;
  align-items: center;
  position: fixed;
  font-family: "Poppins", sans-serif;
  top: 0;
  transform: ${(props) =>
    props.active ? "translateX(0)" : "translateX(-100%)"};
  left: 0;
  transition: all 0.2s ease-in;
  z-index: 100;

  ${tab({
    display: "flex",
    flexDirection: "column"
  })};
  ${mobile({
    display: "flex",
    flexDirection: "column"
  })};
`;
const CloseSideBarDiv = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;
  color: white;
`;
const MobileLogoDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5rem;
  box-sizing: border-box;
  padding: 0 2rem;
  align-items: center;
  h2 {
    color: white;
    font-weight: 400;
    margin-left: 1rem;
    font-size: 2rem;
    cursor: pointer;
  }
`;
const MobileNavItems = styled.div`
  width: 100%;
  border-bottom: 0.2px solid white;
`;

const MobileNavLink = styled(Link)<INavItem>`
  width: 100%;
  text-decoration: none;
`;
const MobileNavItem = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  border-top: 0.2px solid white;
  h1 {
    font-size: 1.6rem;
    font-weight: 400;
    padding-left: 2rem;
    text-transform: capitalize;
  }
`;
const NavFoot = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin-top: 5rem;
  display: flex;
  h2 {
    color: white;
    font-weight: 400;
    margin-left: 1rem;
    font-size: 1.6rem;
  }
`;

export * from "./dashboardSidebar";
