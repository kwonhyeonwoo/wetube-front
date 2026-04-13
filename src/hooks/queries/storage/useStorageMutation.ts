import { STORAGE_KEYS } from "@/apis/storage/storageKeys";import { storageService } from "@/apis/storage/storageService";import { useToastStore } from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate} from "react-router-dom";

export const usePostStorage = (id:string)=>{
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {addToast} = useToastStore();
    return useMutation({
        mutationFn:storageService.postStorage,
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:STORAGE_KEYS.all});
            addToast('보관함을 생성하였습니다.')
            navigate(`/user${id}/storage`)
        }
    })
}