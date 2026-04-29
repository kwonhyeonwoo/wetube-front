import { COMMENT_KEYS } from "@/apis/comment/commentKeys";
import { commentService } from "@/apis/comment/commentService";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostCmtMutation = (videoId:string)=>{
    const queryClient = useQueryClient();
    const {addToast} = useToastStore();
    return useMutation({
        mutationFn:commentService.postComment,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({
                queryKey: COMMENT_KEYS.list(videoId), 
            });
        addToast('댓글을 생성하였습니다')
        }
    })
};

export default usePostCmtMutation;