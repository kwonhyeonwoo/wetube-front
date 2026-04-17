import type { VideoResponse } from "@/interfaces/media.type";import { api } from "../axiosInstance";
import type { AccountRequest, LoginRequest, SessionResponse,  UserResponse } from "@/interfaces/auth.type";
import type { UserEditType } from "@/schema/auth.schema";

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
    console.log('email',email,'passsword',password)
    const response = await api.post("/user/login", {
      email,
      password,
    });
    return response.data;
  },
  getUser: async (id: string): Promise<UserResponse> => {
    const response = await api.get(`/user/${id}`,{
        params:{
          limit:4
        }
    });
    return await response.data.user;
  },
  getUserVideos:async(id:string):Promise<VideoResponse[]>=>{
    const response = await api.get(`/user/${id}/videos`);
    return await response.data.videos;
  },

  putUser:async({data,id}:{data:UserEditType, id:string})=>{
    console.log('data',data);
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('nickName',data.nickName);
    formData.append('email',data.email);
    if(data.introduction){
      formData.append('introduction',data.introduction);
    }
    if(data.avatar && data.avatar.length > 0){
      formData.append('avatar',data.avatar[0])
    };
    const response = await api.put(`/user/${id}`,formData,);
    console.log('responsedata',response.data);
    return  response.data;
  }
};