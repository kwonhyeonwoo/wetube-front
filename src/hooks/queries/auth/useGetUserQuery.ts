import { USER_KEYS } from "@/apis/auth/authKeys";
import { authService } from "@/apis/auth/authService";
import { useUidStore } from "@/store/useUserStore";
import { useQuery } from "@tanstack/react-query";

export const useGetUserQuery = (targetId?: string) => {
  const uid = useUidStore(); 
  const isMe = !targetId || targetId === uid;
  return useQuery({
    queryKey: isMe ? USER_KEYS.me : USER_KEYS.detail(targetId as string),
    queryFn: async () => {
        if (isMe) {
        return await authService.me();
    }
        return await authService.getUser(targetId as string);
    },
    enabled: !!uid || !!targetId,
  });
};
