import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { videoService } from "@/apis/video/videoService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteVideo = (videoId: string)=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:videoService.deleteVideo,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:VIDEO_KEYS.detail(videoId)})
        }
    })
};

export default useDeleteVideo;