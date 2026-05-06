import { SHORTS_KEYS } from "@/apis/shorts/shortsKeys";
import { SHORTS_CMT_KEYS } from "@/apis/shortsCmt/shortsCmtKeys";
import { shortsCmtService } from "@/apis/shortsCmt/shortsCmtService";
import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const usePostShortsCmtMutation = () => {
    const queryClient = useQueryClient();
    const { addToast } = useToastStore();
    return useMutation({
        mutationFn: shortsCmtService.postShortsCmt,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: SHORTS_CMT_KEYS.list(data.shortsId) });
            queryClient.invalidateQueries({
                queryKey:SHORTS_KEYS.list()
            })
            addToast("댓글을 작성하였습니다.")

        },
        onError: (error: any) => {
            console.log('cmt query', error);
        }
    })
}