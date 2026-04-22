import { USER_KEYS } from "@/apis/auth/authKeys";
import { authService } from "@/apis/auth/authService";
import { useQuery } from "@tanstack/react-query"

const useGetFollwing = (userId?: string) => {
  return useQuery({
    queryKey: [...USER_KEYS.detail(userId!), 'following'],
    queryFn: authService.getFollowing,
  });
};

export default useGetFollwing;