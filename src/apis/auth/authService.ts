import type { IAccount, ILogin } from "auth";
import { api } from "../axiosInstance";

export const authService = {
    account:async(data:IAccount)=>{
        const {email,nickName,password,name} = data;
        const response = await api.post('/user/account',{
            email,
            nickName,
            password,
            name
        });
        return response.data;
    },
    login:async(data:ILogin)=>{
        try{
            const {email,password} = data;
            const response = await api.post('/user/login',{
                email,
                password,
            })
            return response;
        }catch(err:any){
            const message = err.response?.data?.message;
            throw new Error(message);
        }
    }
}