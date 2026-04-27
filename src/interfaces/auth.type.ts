import type { Path } from "react-hook-form";
import type { ShortsResponse, VideoResponse } from "./media.type";


export interface IUserMe {
    nickName:string;
    name:string;
    avatar:string;
    email:string;
    uid:string;
}

export interface UserResponse{
    _id:string;
    name:string;
    nickName:string;
    introduction?:string;
    email:string;
    avatar?:string;
    createdAt:Date;
    followers:string[];
    following:string[];
    saveVideos:VideoResponse[];
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
}

export type AuthFormValues = AccountRequest | LoginRequest;

export interface IAuthFields<T>{
    name:Path<T>;
    min?:number;
    max?:number;
    placeholder:string;
    type:string;
    label:string;
};

export interface FollowingResponse {
    _id:string;
    avatar?:string;
    nickName:string;
    name:string;
}