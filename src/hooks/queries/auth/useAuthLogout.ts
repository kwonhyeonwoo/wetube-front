import { USER_KEYS } from "@/apis/auth/authKeys";
import { authService } from "@/apis/auth/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAuthLogout = (userId:string)=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:authService.logout,
        onSuccess:(data)=>{
            console.log('data',data)
            queryClient.invalidateQueries({queryKey:USER_KEYS.detail(userId)})
        }
    })
}