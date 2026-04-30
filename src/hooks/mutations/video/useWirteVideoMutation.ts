import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { videoService } from "@/apis/video/videoService";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";

export const useWriteVideoMutation = (uid: string) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { addToast } = useToastStore();
    const mutation = useMutation({
        mutationFn: videoService.postVideo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: VIDEO_KEYS.all });
            addToast('비디오를 생성하였습니다.');
            navigate(`/user/${uid}/featured`)

        },
        onError: (err: any) => {
            const message = err.response?.data?.message || "서버 에러가 터졌습니다.";
            addToast(message);
        }

    })
    return mutation;
}
