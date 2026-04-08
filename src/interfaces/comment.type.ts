export interface IComment{
    comment:string;
    profile?:string;
    nickName:string;
    date:string;
    cmtId:string;
    authorId:string;
}

export interface CommentRequest {
    authorId:string;
    videoId:string;
    comment:string;
}