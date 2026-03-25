import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService } from "../../../apis/auth/authService";
import { USER_KEYS } from "../../../apis/auth/authKeys";
import type { AxiosError } from "axios";

export const useLoginMutation = () =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:authService.login,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey: USER_KEYS.all})
            console.log('로그인 성공', data);
        },
        onError:(error:AxiosError<any>)=>{
        }
    })
}