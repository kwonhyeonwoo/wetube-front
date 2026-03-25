import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService } from "../../../apis/auth/authService"
import { USER_KEYS } from "../../../apis/auth/authKeys";

export const useAccountMutation = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:authService.account,
        onSuccess:(data)=>{
            // 로그인 성공 시 토큰 저장 및 로그인 비즈니스 로직 추가해야함
            console.log("data", data);
            // 캐시 초기화
            queryClient.invalidateQueries({queryKey: USER_KEYS.all})
        },
    })
}