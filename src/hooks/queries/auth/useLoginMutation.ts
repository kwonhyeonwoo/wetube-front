import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService } from "../../../apis/auth/authService";
import { USER_KEYS } from "../../../apis/auth/authKeys";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "@/store/useToastStore";

export const useLoginMutation = () =>{
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {addToast} = useToastStore();
    return useMutation({
        mutationFn:authService.login,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey: USER_KEYS.all});
            addToast('로그인이 완료되었습니다.');
            navigate('/')
        },
        onError: (error: AxiosError<any>) => {
            const serverMessage = error.response?.data?.message;
            const finalMessage = serverMessage || '로그인 중 알 수 없는 에러가 발생했습니다.';
            addToast(finalMessage, "error");
        }
    })
}