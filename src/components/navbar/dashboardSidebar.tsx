import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as DashboardIcon } from "../../images/navItems/dashboardIcon.svg";
import { ReactComponent as ProfileIcon } from "../../images/navItems/profileIcon.svg";
import { ReactComponent as WithdrawalIcon } from "../../images/navItems/windowIcon.svg";
import { ReactComponent as PowerIcon } from "../../images/navItems/powerIcon.svg";
import { ReactComponent as ProfileLogo } from "../../images/navItems/profileLogo.svg";

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
        stroke={activeNav === "Profile" ? "rgba(0, 147, 255, 1)" : "black"}
      />
    ],
    [
      "Withdraw",
      "/dashboard-withdraw",
      <WithdrawalIcon
        width={20}
        stroke={activeNav === "Withdraw" ? "rgba(0, 147, 255, 1)" : "black"}
      />
    ],
    [
      "log out",
      "/logout",
      <PowerIcon
        width={20}
        stroke={activeNav === "log out" ? "rgba(0, 147, 255, 1)" : "black"}
        fill={activeNav === "log out" ? "rgba(0, 147, 255, 1)" : "black"}
      />
    ]
  ];

  return (
    <Container>
      <LogoDiv>
        <ProfileLogo />
        <h2>Lewin</h2>
      </LogoDiv>
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
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 70%;
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
