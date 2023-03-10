import React, { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DashboardIcon } from "../../images/navItems/dashboardIcon.svg";
import { ReactComponent as ProfileIcon } from "../../images/navItems/profileIcon.svg";
import { ReactComponent as WithdrawalIcon } from "../../images/navItems/windowIcon.svg";
import { ReactComponent as PowerIcon } from "../../images/navItems/powerIcon.svg";
import { ReactComponent as ProfileLogo } from "../../images/navItems/profileLogo.svg";
import { tab, mobile } from "../../utilities/responsive";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as HamburgerMenu } from "../../images/svg/hamburger.svg";
import useClickOutside from "../../hooks/useClickOutside";
import { RxCross2 } from "react-icons/rx";
interface IProps {
  activeNav?: string;
}

export const DashboardSidebar: FC<IProps> = ({ activeNav = "Dashboard" }) => {
  const NavDetails = [
    [
      "Dashboard",
      "/dashboard-home",
      <DashboardIcon
        width={20}
        fill={activeNav === "Dashboard" ? "rgba(0, 147, 255, 1)" : "black"}
      />
    ],
    [
      "Profile",
      "/dashboard-profile",
      <ProfileIcon
        width={20}
        stroke={activeNav === "Profile" ? "rgba(0,147,255,1)" : "black"}
      />
    ],
    [
      "Withdraw",
      "/dashboard-withdraw",
      <WithdrawalIcon
        width={20}
        stroke={activeNav === "Withdraw" ? "rgba(0,147,255,1)" : "black"}
      />
    ],
    [
      "log out",
      "/logout",
      <PowerIcon
        width={20}
        stroke={activeNav === "log out" ? "rgba(0,147,255,1)" : "black"}
        fill={activeNav === "log out" ? "rgba(0,147,255,1)" : "black"}
      />
    ]
  ];
  const MobileNavDetails = [
    [
      "Dashboard",
      "/dashboard-home",
      <DashboardIcon
        width={20}
        fill={activeNav === "Dashboard" ? "#00eeff" : "white"}
      />
    ],
    [
      "Profile",
      "/dashboard-profile",
      <ProfileIcon
        width={20}
        stroke={activeNav === "Profile" ? "#00eeff" : "white"}
      />
    ],
    [
      "Withdraw",
      "/dashboard-withdraw",
      <WithdrawalIcon
        width={20}
        stroke={activeNav === "Withdraw" ? "#00eeff" : "white"}
      />
    ],
    [
      "log out",
      "/logout",
      <PowerIcon
        width={20}
        stroke={activeNav === "log out" ? "#00eeff" : "white"}
        fill={activeNav === "log out" ? "#00eeff" : "white"}
      />
    ]
  ];
  const Ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [active, setActive] = useState(false);
  useClickOutside(Ref, () => setActive(false));
  return (
    <Container>
      <LogoDiv>
        <ProfileLogo />
        <h2>Lewin</h2>
      </LogoDiv>
      <MobileLogoDiv to="/">
        <Logo fill="white" width={"5rem"} style={{ cursor: "pointer" }} />
        <h1>EQUIS</h1>
      </MobileLogoDiv>
      <NavItems>
        {NavDetails.map((nav, index) => (
          <NavItem
            to={`${nav[1]}`}
            key={index}
            active={activeNav === nav[0] ? "true" : "false"}
          >
            {nav[2]}
            <h2>{nav[0]}</h2>
          </NavItem>
        ))}
      </NavItems>
      <HamburgerDiv onClick={() => setActive(true)}>
        <HamburgerMenu width={"3rem"} />
      </HamburgerDiv>
      <Sidebar active={active} ref={Ref}>
        <CloseSideBarDiv onClick={() => setActive(false)}>
          {" "}
          <RxCross2 size={30} />
        </CloseSideBarDiv>
        <MobileProfileLogo>
          <ProfileLogo fill="white" width={"4rem"} />
          <h2>Lewin</h2>
        </MobileProfileLogo>
        <MobileNavItems>
          {MobileNavDetails.map((nav, index) => (
            <MobileNavLink
              to={`${nav[1]}`}
              key={index}
              active={activeNav === nav[0] ? "true" : "false"}
            >
              <MobileNavItem>
                {nav[2]}
                <h1>{nav[0]}</h1>
              </MobileNavItem>
            </MobileNavLink>
          ))}
        </MobileNavItems>
      </Sidebar>
      <Shade active={active} />
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  background-color: rgba(0, 147, 255, 0.1);
  height: 100vh;
  width: 20vw;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${tab({
    height: "8rem",
    width: "100%",
    backgroundColor: "white",
    padding: "2rem",
    flexDirection: "row"
  })}
`;
const LogoDiv = styled.div`
  margin-top: 10%;
  margin-bottom: 20%;
  text-align: center;
  h2 {
    font-family: "poppins", sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
  }
  ${tab({
    display: "none"
  })}
`;
const MobileLogoDiv = styled(Link)`
  flex: 0.4;
  font-family: "Quattrocento Sans", sans-serif;
  text-transform: uppercase;
  display: none;
  align-items: center;
  text-decoration: none;
  ${tab({
    flex: "0.5",
    display: "flex"
  })}
  h1 {
    color: rgba(0, 147, 255, 1);
    font-weight: 400;
    margin-left: 1rem;
    font-size: 3rem;
    cursor: pointer;
  }
`;
const MobileProfileLogo = styled.div`
  height: 8rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  color: white;
  align-items: center;
  h2 {
    margin-left: 1rem;
    font-size: 2.5rem;
    font-weight: 400;
  }
  margin-bottom: 8rem;
`;
const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 70%;
  ${tab({
    display: "none"
  })}
`;
interface INavItem {
  active?: string;
}
const NavItem = styled(Link)<INavItem>`
  cursor: pointer;
  margin-bottom: 30%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  h2 {
    margin-left: 2rem;
    font-family: "poppins", sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 0;
    color: ${(props) =>
      props.active === "true" ? " rgba(0, 147, 255, 1)" : "black"};
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

const MobileNavItems = styled.div`
  width: 100%;
  border-bottom: 0.2px solid white;
`;

const MobileNavLink = styled(Link)<INavItem>`
  width: 100%;
  text-decoration: none;
`;
const MobileNavItem = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  border-top: 0.2px solid white;
  padding-left: 2rem;
  h1 {
    font-size: 1.6rem;
    font-weight: 400;
    padding-left: 2rem;
    text-transform: capitalize;
  }
`;
