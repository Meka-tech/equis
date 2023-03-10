import { css } from "styled-components";
import { laptop } from "./responsive";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};
export const tab = (props) => {
  return css`
    @media only screen and (max-width: 880px) {
      ${props}
    }
  `;
};
