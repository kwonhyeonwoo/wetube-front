import { USER_KEYS } from "@/apis/auth/authKeys";
import { authService } from "@/apis/auth/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToastStore } from "@/store/useToastStore";
import { useSetUserAction } from "@/store/useUserStore";

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const setUser = useSetUserAction();
  const { addToast } = useToastStore();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
        queryClient.removeQueries({ queryKey: USER_KEYS.me });
        setUser("");
        addToast("성공적으로 로그아웃 되었습니다.");
    },
    onError: () => {
        addToast("로그아웃 처리 중 문제가 발생했습니다.", "error");
    },
  });
};
