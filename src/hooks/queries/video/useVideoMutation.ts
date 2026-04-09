import { USER_KEYS } from "@/apis/auth/authKeys";
import { videoService } from "@/apis/video/videoService";
import { useToastStore } from "@/store/useToastStore";
import useUserStore from "@/store/useUserStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";

const useVideoMutation = ()=>{
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

export default useVideoMutation;