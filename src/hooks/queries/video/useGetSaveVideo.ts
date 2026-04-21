import { USER_KEYS } from "@/apis/auth/authKeys"
import { videoService } from "@/apis/video/videoService"
import { useQuery } from "@tanstack/react-query"

export const useGetSaveVideo = (userId:string)=>{
    return useQuery({
        queryKey:USER_KEYS.storages(userId),
        queryFn:()=>videoService.getVideoSave(userId)
    })
}