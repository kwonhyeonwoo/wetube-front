import { VIDEO_KEYS } from "@/apis/video/videoKeys"
import { videoService } from "@/apis/video/videoService"
import type { CategoryType } from "@/interfaces/media.type";
import { useQuery } from "@tanstack/react-query"

export const useGetVideosQuery = (filters: {
  category?: CategoryType;
  keyword?: string;
}) => {
  return useQuery({
    queryKey: [...VIDEO_KEYS.all, filters],
    queryFn: () => videoService.getVideos(filters),
  });
};

export const useGetVideoQuery = (videoId:string)=>{
    return useQuery({
      queryFn:()=>videoService.getVideo(videoId),
      queryKey:VIDEO_KEYS.detail(videoId),
    })
}

export const useGetSearchVideos = (filters:{category?:string, keyword?:string})=>{
    return useQuery({
        queryKey: VIDEO_KEYS.search(filters),
        queryFn: () => videoService.getSearchVideos(filters),
        enabled: !!filters.keyword || !!filters.category,
    });
}