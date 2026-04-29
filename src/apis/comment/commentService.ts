import type { IComment } from "@/interfaces/comment.type";
import { api } from "../axiosInstance"

export const commentService ={
    postComment:async({videoId,comment}:{videoId:string, comment:string})=>{
        const response = await api.post(`/comment/${videoId}`,{
            comment,
        });
        return await response.data;
    },

    getComments:async(videoId:string):Promise<IComment[]>=>{
        const response = await api.get(`/comment/${videoId}`);
        return await response.data.comment;
    }
}