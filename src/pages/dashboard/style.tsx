import styled from "styled-components";
import { mobile, tab } from "../../utilities/responsive";

export const Container = styled.div`
  width: 100%;
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
  width: 80vw;
  box-sizing: border-box;
  padding: 3rem 5rem;
  overflow-y: scroll;
  background-color: white;
  margin: 0 auto;
  position: relative;
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
