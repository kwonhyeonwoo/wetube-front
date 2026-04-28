import type { Path } from "react-hook-form";
export interface UserResponse {
  nickName: string;
  name: string;
  avatar?: string;
  email: string;
  _id: string;
  introduction?: string;
  stats: {
    followerCount: number;
    videoCount: number;
  };
}

export interface OwnerType{
  _id:string;
  avatar?:string;
  followers:string[];
  nickName:string;
  name:string;
}

export interface ProfileResponse extends UserResponse {
    
};

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