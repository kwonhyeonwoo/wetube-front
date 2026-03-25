declare module "auth" {
    interface IAccount {
        name: string;
        email: string;
        nickName: string;
        password: string;
        confirmPassword: string;
    }
}