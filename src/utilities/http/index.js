import axios from "axios";
import { baseUrl } from "../api";

axios.defaults.baseURL = baseUrl;
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status >= 500 && error.response.status < 600) {
      // toast internal server error here
      console.log(error.response);
      console.log("internal server error");
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

export const setAuthorisationHeader = (auth_token: string) => {
  axios.defaults.headers.common["Authorization"] = auth_token;
};

const http = axios;

export default http;
