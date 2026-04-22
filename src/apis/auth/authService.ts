import type { VideoResponse } from "@/interfaces/media.type"; import { api } from "../axiosInstance";
import type { UserEditType } from "@/schema/auth.schema";
import type { AccountRequest, FollowingResponse, LoginRequest, SessionResponse, UserResponse } from "@/interfaces/auth.type";

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
  logout: async () => {
    const response = await api.post('/user/logout');
    return response.data;
  },
  getUser: async (id: string): Promise<UserResponse> => {
    const response = await api.get(`/user/${id}`, {
      params: {
        limit: 4
      }
    });
    return await response.data.user;
  },
  getFollowing: async (): Promise<FollowingResponse[]> => {
    const response = await api.get(`/user/followers`);
    console.log('followers', await response.data.following);
    return await await response.data.following;
  },
  getUserVideos: async (id: string): Promise<VideoResponse[]> => {
    const response = await api.get(`/user/${id}/videos`);
    return await response.data.videos;
  },

  putUser: async ({ data, id }: { data: UserEditType, id: string }) => {
    const formData = new FormData();
    if (data.introduction) {
      formData.append('introduction', data.introduction);
    }
    if (data.avatar) {
      formData.append('avatar', data.avatar)
    };
    formData.append('name', data.name);
    formData.append('nickName', data.nickName);
    formData.append('email', data.email);

    const response = await api.put(`/user/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    return response.data;
  },

  postUserFollow: async (followId: string) => {
    const response = await api.post(`/user/${followId}/follow`);
    return await response.data;
  }
};