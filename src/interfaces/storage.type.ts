import type { StorageType } from "@/schema/storage.schema";
import type { VideoResponse } from "./media.type";

export interface IStorage{
    _id:string;
    title:string;
    createdAt:Date;
    content:string;
}

export interface IStorageNavi{
    userId:string;
    item:IStorage;
}

export interface StorageResponse extends Omit<StorageType , "thumnail">{
    _id:string;
    thumnail:string;
    onwer:{
        _id:string;
        nickName:string;
        email:string;  
    };
    videos:VideoResponse[];
    createdAt:Date,
}