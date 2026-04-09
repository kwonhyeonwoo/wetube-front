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
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey: USER_KEYS.all})
            addToast('회원가입이 완료되었습니다.')
            navigate('/user/login');
        },
        onError: (error: any) => {
            // 서버에서 보내주는 에러 메시지가 있다면 그걸 띄워주고, 
            // 없다면 기본 에러 메시지를 띄웁니다.
            const message = error.response?.data?.message || "서버 통신에 실패했습니다.";
            addToast(message, 'error'); 
        }
    })
}