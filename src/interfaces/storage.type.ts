export interface IStorage{
    id:string;
    title:string;
    date:string;
    count:string;
    content:string;
}

export interface IStorageNavi{
    userId:string;
    item:IStorage;
}
