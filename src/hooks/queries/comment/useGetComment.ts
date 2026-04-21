import { COMMENT_KEYS } from "@/apis/comment/commentKeys";
import { commentService } from "@/apis/comment/commentService";
import { useQuery } from "@tanstack/react-query";

export const useGetComment = (videoId:string)=>{
    console.log('videoId,',videoId)
    return useQuery({
        queryKey:COMMENT_KEYS.list(videoId),
        queryFn:()=>commentService.getComments(videoId)
    })
}