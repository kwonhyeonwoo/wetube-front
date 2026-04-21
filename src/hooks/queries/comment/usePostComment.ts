import { commentService } from "@/apis/comment/commentService";
import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostComment = (videoId:string)=>{
    const queryClient = useQueryClient();
    const {addToast} = useToastStore();
    return useMutation({
        mutationFn:commentService.postComment,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({
              queryKey: VIDEO_KEYS.detail(videoId),
            });
            addToast('댓글을 생성하였습니다')
        }
    })
};

export default usePostComment;