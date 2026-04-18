import { USER_KEYS } from "@/apis/auth/authKeys";
import { authService } from "@/apis/auth/authService"; import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUserEditMutation = (id: string) => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { addToast } = useToastStore();
    return useMutation({
        mutationFn: authService.putUser,
        onSuccess: (data) => {
            console.log('tq', data)
            queryClient.invalidateQueries({ queryKey: USER_KEYS.all });
            addToast('프로필을 수정하였습니다.')
            navigate(`/user/${id}`)
        }
    })
}