import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { videoService } from "@/apis/video/videoService";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";

export const useVideoPutMutation = (videoId: string) => {
    const queryClient = useQueryClient();
    const { addToast } = useToastStore();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: videoService.putVideo,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: VIDEO_KEYS.all });
            addToast('비디오를 수정하였습니다.')
            navigate(`/video/${videoId}`)
        },
        onError: (err: any) => {
            const message = err.response?.data?.message || "서버 에러가 터졌습니다."
            addToast(message);
        }
    })
};

export const useVideoLikePostMutation = ({ userId, videoId }: { userId: string, videoId: string }) => {
    const queryClient = useQueryClient();
    const { addToast } = useToastStore();

    return useMutation({
        mutationFn: videoService.postLikeVideo,
        onSuccess: (data) => {
            console.log('like data', data);
            queryClient.invalidateQueries({
                queryKey: VIDEO_KEYS.detail(videoId)
            });
            addToast(data.message)
        }
    })
}

export const useVideoViewsPostMutation = (videoId: string) => {
    const queyClient = useQueryClient();
    return useMutation({
        mutationFn: videoService.postVideoViewsIncrease,
        onSuccess: (data) => {
            queyClient.invalidateQueries({ queryKey: VIDEO_KEYS.detail(videoId) })
        }
    })
}
