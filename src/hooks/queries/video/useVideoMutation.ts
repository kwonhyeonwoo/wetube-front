import { USER_KEYS } from "@/apis/auth/authKeys";
import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { videoService } from "@/apis/video/videoService";
import { useToastStore } from "@/store/useToastStore";
import useUserStore from "@/store/useUserStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";

export const useVideoMutation = ()=>{
    const queryClient= useQueryClient();
    const navigate = useNavigate();
    const {user} = useUserStore();
    const {addToast} = useToastStore();
    const mutation = useMutation({
        mutationFn:videoService.postVideo,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:USER_KEYS.all})
            addToast('비디오를 생성하였습니다.');
            navigate(`/user/${user.uid}`)

        },
        onError:(err:any)=>{
            const message = err.response?.data?.message || "서버 에러가 터졌습니다.";
            addToast(message);
        }
        
    })
    return mutation;
}
export const useVideoPutMutation = (videoId:string )=>{
    console.log('videoId',videoId)
    const queryClient = useQueryClient();
    const {addToast}  = useToastStore();
    const navigate = useNavigate();
    return useMutation({
        mutationFn:videoService.putVideo,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:VIDEO_KEYS.all});
            addToast('비디오를 수정하였습니다.')
            navigate(`/video/${videoId}`)
        },
        onError:(err:any)=>{
            console.log('err',err)
            const message = err.response?.data?.message || "서버 에러가 터졌습니다."
            addToast(message);
        }
    })
}