import axios from "axios";
import { BASE_API_ROUTE } from "../constant/app.constant";
import { ROUTE_API } from "./index.route";

type Login = {
  email: string;
  password: string;
};

export const loginService = (data: Login) => {
  return axios.post(`${BASE_API_ROUTE}${ROUTE_API.LOGIN}`, data);
};
