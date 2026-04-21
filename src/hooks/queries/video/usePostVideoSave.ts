import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { videoService } from "@/apis/video/videoService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostVideoSave = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: videoService.postVideoSave,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: VIDEO_KEYS.detail(id) });
    },
  });
};

export default usePostVideoSave;
