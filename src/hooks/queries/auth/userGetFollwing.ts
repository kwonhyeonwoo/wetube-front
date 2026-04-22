import { USER_KEYS } from "@/apis/auth/authKeys";
import { authService } from "@/apis/auth/authService";
import { useQuery } from "@tanstack/react-query"

const userGetFollwing = (userId: string | undefined) => {
  return useQuery({
    queryKey: USER_KEYS.detail(userId!),
    queryFn: () => authService.getFollowing(userId!),
    enabled: !!userId, // ✨ 핵심! userId가 있을 때만(true) API를 요청함 (훅은 정상적으로 실행됨)
  });
};

export default userGetFollwing;