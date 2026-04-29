import { USER_KEYS } from "@/apis/auth/authKeys";
import { authService } from "@/apis/auth/authService";
import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
const useFollowingMutation = (userId:string)=>{
    const queryClient = useQueryClient();
    const {addToast} = useToastStore();
    return useMutation({
        mutationFn:authService.postUserFollow,
        onSuccess:(data)=>{
            addToast(data.message);
            queryClient.invalidateQueries({queryKey:VIDEO_KEYS.detail(userId)});
            queryClient.invalidateQueries({
              queryKey: USER_KEYS.detail(userId),
            });
        },
        onError: (error) => {
            if (isAxiosError(error)) {
                const errorMessage = error.response?.data?.message;
                addToast(errorMessage);
            } else {
                console.log("다른 종류의 에러입니다.", error);
            }
        }
    })
};

export default useFollowingMutation