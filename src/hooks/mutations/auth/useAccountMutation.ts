import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService } from "../../../apis/auth/authService"
import { USER_KEYS } from "../../../apis/auth/authKeys";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "@/store/useToastStore";

export const useAccountMutation = ()=>{
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {addToast} = useToastStore();
    return useMutation({
        mutationFn:authService.account,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey: USER_KEYS.all})
            addToast('회원가입이 완료되었습니다.')
            navigate('/user/login');
        },
        onError: (error: any) => {
            const message = error.response?.data?.message || "서버 통신에 실패했습니다.";
            addToast(message, 'error'); 
        }
    })
}