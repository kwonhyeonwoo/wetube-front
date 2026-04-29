import { COMMENT_KEYS } from "@/apis/comment/commentKeys";
import { commentService } from "@/apis/comment/commentService";
import { useQuery } from "@tanstack/react-query";

export const useGetCmtQuery = (videoId:string)=>{
    return useQuery({
        queryKey:COMMENT_KEYS.list(videoId),
        queryFn:()=>commentService.getComments(videoId)
    })
}