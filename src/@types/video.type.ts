export interface IVideo {
        video: string;
        title: string;
        content: string;
        views: string;
        category: string;
        tags: string[];
        nickName: string;
        date: Date,
        profile?: string;
        id: string;
    }
export interface VideoRequest {
    video: FileList;
    title: string;
    content:string;
    category:string;
    tags:string[];
}
export interface IShort {
        video: string;
        views: string;
        title: string;
        id: string;
}