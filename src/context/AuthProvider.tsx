import { createContext, FC, useContext } from "react";

interface AuthContextInterface {
  token: string | null;
}

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider: FC<AuthContextInterface> = (props) => {
  const token = window.localStorage.getItem("token");
  return (
    <AuthContext.Provider value={{ token }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useGetAuthProvider = () => {
  return useContext(AuthContext);
};
