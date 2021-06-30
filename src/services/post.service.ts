import axios from "axios";
import { myAxios } from "../config/axios.config";

import { BASE_API_ROUTE } from "../constant/app.constant";
import { InterfaceCustomHttp } from "../interface/https.global";
import { PATH_ENUM } from "../router/path";
import { ROUTE_API } from "./index.route";
import { UserInfo as AuthorInfo } from "./info.service";

export interface PostInterface {
  author: AuthorInfo;
  author_id: string;
  content: string;
  created_at: Date;
  description: string;
  id: number;
  thumbnail: string;
  title: string;
  updated_at: Date;
}

export const postsService = () => {
  return myAxios.get<InterfaceCustomHttp<PostInterface>>(
    `${BASE_API_ROUTE}${ROUTE_API.POST}`
  );
};

export const deletePostService = (id: PostInterface["id"]) => {
  return myAxios.delete(`${ROUTE_API.DELETE_POST}/${id}`);
};

export const createPostService = (
  data: Pick<PostInterface, "description" | "title" | "content">
) => {
  return myAxios.post(`${ROUTE_API.CREATE_POST}`, data);
};
