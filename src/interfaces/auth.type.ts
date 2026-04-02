export interface UserResponse{
    id:string;
    name:string;
    nickName:string;
    email:string;
    profile?:string;
    createdAt:Date;
    updatedAt:Date;
}