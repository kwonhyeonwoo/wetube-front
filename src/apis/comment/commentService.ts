import { api } from "../axiosInstance"

export const commentService ={
    postComment:async({videoId,comment}:{videoId:string, comment:string})=>{
        const response = await api.post(`/comment/${videoId}`,{
            comment,
        });
        return await response.data;
    }
}