import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService } from "../../../apis/auth/authService";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useToastStore } from "@/store/useToastStore";
import { useSetUserAction } from "@/store/useUserStore";

export const useLoginMutation = () =>{
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const setUid = useSetUserAction();
    const {addToast} = useToastStore();
    return useMutation({
        mutationFn:authService.login,
        onSuccess:(response)=>{
            console.log('login Mutation response',response.data);
            queryClient.setQueryData(['users','me'],response.data)
            setUid(response.data.uid);
            addToast('로그인이 완료되었습니다.');
            navigate('/')
        },
        onError: (error: AxiosError<any>) => {
            console.log('error',error)
            const serverMessage = error.response?.data?.message;
            const finalMessage = serverMessage || '로그인 중 알 수 없는 에러가 발생했습니다.';
            addToast(finalMessage, "error");
        }
    })
}