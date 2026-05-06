import { SHORTS_KEYS } from "@/apis/shorts/shortsKeys"
import { shortsService } from "@/apis/shorts/shortsService"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const usePostShortsSave = (shortsId:string)=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:shortsService.postShortsSave,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:SHORTS_KEYS.detail(shortsId)})
        }
    })
}