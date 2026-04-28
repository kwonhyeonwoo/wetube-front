import { USER_KEYS } from "@/apis/auth/authKeys"
import { authService } from "@/apis/auth/authService"
import { useQuery } from "@tanstack/react-query"

export const useGetSavedVideos = (userId:string)=>{
    return useQuery({
        queryKey:USER_KEYS.saved(userId),
        queryFn:()=>authService.getSavedVideos(userId),
    })
}