import { SHORTS_KEYS } from "@/apis/shorts/shortsKeys";
import { shortsService } from "@/apis/shorts/shortsService";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const usePostShortLikeMutation = (shortsId: string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: shortsService.postShortLike,
        onSuccess: (data) => {
            console.log('data', data);
            queryClient.invalidateQueries({ queryKey: SHORTS_KEYS.detail(shortsId) });
        }
    })
}