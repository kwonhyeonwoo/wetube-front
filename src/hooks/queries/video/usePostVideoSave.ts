import { VIDEO_KEYS } from "@/apis/video/videoKeys";
import { videoService } from "@/apis/video/videoService";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostVideoSave = (id: string) => {
  const queryClient = useQueryClient();
  const {addToast} = useToastStore();
  return useMutation({
    mutationFn: videoService.postVideoSave,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: VIDEO_KEYS.detail(id) });
      addToast(data.message);
    },
  });
};

export default usePostVideoSave;
