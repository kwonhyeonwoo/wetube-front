import { SHORTS_KEYS } from "@/apis/shorts/shortsKeys"
import { shortsService } from "@/apis/shorts/shortsService"
import { useQuery } from "@tanstack/react-query"

export const useGetShorts = () => {
    return useQuery({
        queryKey: SHORTS_KEYS.all,
        queryFn: shortsService.getShorts,
    })
}