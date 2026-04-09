import type { VideoResponse } from "@/interfaces/video.type";import { api } from "../axiosInstance";
import type { AccountRequest, LoginRequest, SessionResponse,  UserResponse } from "@/interfaces/auth.type";

export const authService = {
  me: async (): Promise<SessionResponse> => {
    const response = await api.get("/user/me");
    const responseData = await response.data;
    return responseData;
  },
  account: async (data: AccountRequest) => {
    const { email, nickName, password, name } = data;
    const response = await api.post("/user/account", {
      email,
      nickName,
      password,
      name,
    });
    return response.data;
  },
  login: async (data: LoginRequest) => {
    const { email, password } = data;
    const response = await api.post("/user/login", {
      email,
      password,
    });
    return response.data;
  },
  getUser: async (id: string): Promise<UserResponse> => {
    const response = await api.get(`/user/${id}`);
    return await response.data.user;
  },
  getUserVideos:async(id:string):Promise<VideoResponse[]>=>{
    const response = await api.get(`/user/${id}/videos`);
    return await response.data.videos;
  }
};