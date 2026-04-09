import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { videoService } from "@/apis/video/videoService";
import { useQuery } from "@tanstack/react-query";

export const useGetVideos = ()=>{
    return useQuery({
        queryKey:VIDEO_KEYS.all,
        queryFn:videoService.getVideos,
    })
}