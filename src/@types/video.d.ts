declare module "video"{
    interface IVideo{
        video:string;
        title:string;
        content:string;
        views:string;
        category:string;
        tags:string[];
        nickName:string;
        date:Date,
        profile?:string;
        id:string;
    }

    interface IShort{
        video:string;
        views:string;
        title:string;
        shortId:string;
    }
}