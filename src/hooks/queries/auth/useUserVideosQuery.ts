import { USER_KEYS } from "@/apis/auth/authKeys"
import { authService } from "@/apis/auth/authService"
import { useQuery } from "@tanstack/react-query"

export const useUserVideosQuery = (userId:string)=>{
    return useQuery({
      queryKey: USER_KEYS.videos(userId),
      queryFn: () => authService.getUserVideos(userId),
    });
}