import type { Path } from "react-hook-form";

export interface UserResponse{
    id:string;
    name:string;
    nickName:string;
    email:string;
    profile?:string;
    createdAt:Date;
    updatedAt:Date;
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
}