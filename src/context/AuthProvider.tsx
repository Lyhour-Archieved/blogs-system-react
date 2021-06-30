import { responsiveFontSizes } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, FC, useContext } from "react";
import { UserInfo, userInfoService } from "../services/info.service";

interface AuthContextInterface {
  token: string | null;
  userInfoData: UserInfo | undefined;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider: FC = (props) => {
  const token = window.localStorage.getItem("token");
  const [userInfoData, setUserInfoData] = useState<UserInfo>();
  useEffect(() => {
    userInfoService().then((res) => {
      setUserInfoData(res.data.data);
    });
  }, [token]);
  return (
    <AuthContext.Provider value={{ token, userInfoData: userInfoData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useGetInfo = () => {
  return useContext(AuthContext)?.userInfoData;
};

export const useGetAuthProvider = () => {
  return useContext(AuthContext);
};
