import { USER_KEYS } from "@/apis/auth/authKeys"
import { authService } from "@/apis/auth/authService"
import { useQuery } from "@tanstack/react-query"

export const useGetMe = () => {
  return useQuery({
    queryKey: USER_KEYS.me,
    queryFn: authService.me,
    retry: false,
  });
}