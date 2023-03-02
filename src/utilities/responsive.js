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
export const laptop3 = (props) => {
  return css`
    @media only screen and (max-width: 1280px) {
      ${props}
    }
  `;
};
export const laptop2 = (props) => {
  return css`
    @media only screen and (max-width: 1536px) {
      ${props}
    }
  `;
};
export const laptop1 = (props) => {
  return css`
    @media only screen and (max-width: 1678px) {
      ${props}
    }
  `;
};
