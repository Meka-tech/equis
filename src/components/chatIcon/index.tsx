import React from "react";
import { AiOutlineWechat } from "react-icons/ai";
import styled from "styled-components";
import { useIsMobile } from "../../hooks/useIsMobile";

export const ChatIcon = () => {
  const data: any = localStorage.getItem("userData");
  const userData = JSON.parse(data);
  const Link = `https://www.equisinvestgroup.com/admin/livechat2/index.php?secondid=100&firstid=${userData?.id}&name=${userData?.username}`;
  const LoggedIn = localStorage.getItem("loggedIn");
  const IsMobile = useIsMobile();
  return (
    <Container href={Link} target="_blank" loggedIn={LoggedIn === "true"}>
      <AiOutlineWechat
        size={IsMobile ? 50 : 100}
        color="rgba(0, 147, 255, 1)"
      />
    </Container>
  );
};

interface IProps {
  loggedIn?: boolean;
}
const Container = styled.a<IProps>`
  z-index: 10000;
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  cursor: pointer;
  display: ${(props) => (props.loggedIn ? "block" : "none")};
`;
