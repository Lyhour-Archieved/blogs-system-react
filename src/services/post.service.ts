import axios from "axios";
import { myAxios } from "../config/axios.config";

import { BASE_API_ROUTE } from "../constant/app.constant";
import { PATH_ENUM } from "../router/path";
import { ROUTE_API } from "./index.route";

export const postsService = () => {
  return myAxios.get(`${BASE_API_ROUTE}${ROUTE_API.POST}`);
};
