import React, { Children, useEffect } from "react";
import { authContext } from "./AuthContext";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { setAuthorisationHeader } from "../../utilities/http/index";

type Props = {
  children: JSX.Element;
};
function AuthContextProvider(props: Props) {
  const [user, setUser] = useLocalStorage("user", null);

  const login = async (callback: any) => {
    try {
      const response = await callback();
      let user = response.data.user;
      let refreshToken = response.data.refreshToken;
      let accessToken = response.data.accessToken;
      let settingsList = response.data.settingsList;

      setUser({ user, refreshToken, accessToken, settingsList });
      // setAuthorisationHeader(accessToken);
      return true;
    } catch (error) {
      throw error;
    }
    //  try {
    //   chrome.storage.local.set({ user: JSON.stringify(user), accessToken, refreshToken })
    //  } catch (error) {

    //  }
    return true;
  };

  return (
    <authContext.Provider value={{ login, user }}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
