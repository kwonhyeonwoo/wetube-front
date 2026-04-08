import type { Path } from "react-hook-form";

declare module "auth" {
    interface IAccount {
        name: string;
        email: string;
        nickName: string;
        password: string;
        confirmPassword: string;
    }

    interface ILogin{
        email:string;
        password:string;
    }

}