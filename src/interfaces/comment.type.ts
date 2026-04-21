export interface IComment{
    _id:string;
    comment:string;
    owner:{
        _id:string;
        nickName:string;
    }
    video:string;
    createdAt:Date;
}

export interface CommentRequest {
    authorId:string;
    videoId:string;
    comment:string;
    createdAt:Date;
    
}