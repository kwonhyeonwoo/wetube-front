import { USER_KEYS } from "@/apis/auth/authKeys";
import { authService } from "@/apis/auth/authService";
import { useQuery } from "@tanstack/react-query"

export const useUserShortsQuery = (id:string)=>{
    return useQuery({
      queryKey: USER_KEYS.shorts(id),
      queryFn:()=>authService.getUserShorts(id),
    });
}