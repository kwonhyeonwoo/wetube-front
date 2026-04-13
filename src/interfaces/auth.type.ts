import type { Path } from "react-hook-form";
import type { ShortsResponse, VideoResponse } from "./media.type";

export interface SessionUser{
    nickName:string;
    profile?:string;
    email:string;
    name:string;
    uid:string;
}

export interface SessionResponse {
  status: boolean;
  user: SessionUser;
}

export interface UserResponse{
    id:string;
    name:string;
    nickName:string;
    introduction?:string;
    email:string;
    profile?:string;
    createdAt:Date;
    videos:VideoResponse[];
    shorts:ShortsResponse[]
}

export interface LoginRequest{
    email:string;
    password:string;
}

export interface AccountRequest{
    name:string;
    email:string;
    nickName:string;
    password:string;
    confirmPassword:string;
}

export type AuthFormValues = AccountRequest | LoginRequest;

export interface IAuthFields<T>{
    name:Path<T>;
    placeholder:string;
    type:string;
    label:string;
};