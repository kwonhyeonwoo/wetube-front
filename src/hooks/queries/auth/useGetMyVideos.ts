import { USER_KEYS } from "@/apis/auth/authKeys";import { authService } from "@/apis/auth/authService";
import { useQuery } from "@tanstack/react-query";

export const useGetMyVideos = (id:string)=>{
    return useQuery({
        queryKey:USER_KEYS.videos(id),
        queryFn:()=> authService.getUserVideos(id),
    })
}