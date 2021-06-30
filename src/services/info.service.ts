import { myAxios } from "../config/axios.config";
import { InterfaceCustomHttp } from "../interface/https.global";
import { ROUTE_API } from "./index.route";

export interface UserInfo {
  email: "string";
  password: "string";
  role: "string";
  avatar: "string";
  phone_number: "string";
}

export const userInfoService = () => {
  return myAxios.get<InterfaceCustomHttp<UserInfo>>(ROUTE_API.INFO);
};
