import type { IAccount, ILogin } from "auth";
import { api } from "../axiosInstance";
import type { UserResponse } from "@/interfaces/auth.type";

export const authService = {
    account: async (data: IAccount) => {
        const { email, nickName, password, name } = data;
        const response = await api.post("/user/account", {
            email,
            nickName,
            password,
            name,
        });
        return response.data;
    },
    login: async (data: ILogin) => {
        const { email, password } = data;
        const response = await api.post("/user/login", {
            email,
            password,
        });
        return response.data;
    },
    getUser: async (id: string): Promise<UserResponse> => {
        const response = await api.get(`/user/${id}`);
        return await response.data;
    },
};