import styled from "styled-components";
import { mobile, tab } from "../../utilities/responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  ${tab({
    flexDirection: "column"
  })};
  ${mobile({
    flexDirection: "column"
  })};
`;

export const Body = styled.div`
  height: 100vh;
  width: 77.5vw;
  box-sizing: border-box;
  padding: 3rem 8rem;
  overflow-y: scroll;
  background-color: white;
  ${tab({
    width: "100%",
    padding: "2rem",
    backgroundColor: "rgba(240, 246, 255, 1)"
  })};
  ${mobile({
    width: "100%",
    padding: "2rem",
    backgroundColor: "rgba(240, 246, 255, 1)"
  })};
`;
