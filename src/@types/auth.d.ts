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
    interface IAuthFields{
        name:string;
        placeholder:string;
        type:string;
        label:string;
    }
}