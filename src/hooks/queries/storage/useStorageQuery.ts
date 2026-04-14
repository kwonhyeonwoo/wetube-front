import { STORAGE_KEYS } from "@/apis/storage/storageKeys";
import { storageService } from "@/apis/storage/storageService";
import { useQuery } from "@tanstack/react-query";

export const useGetStorageQuery = (userId:string)=>{
    return useQuery({
        queryKey:STORAGE_KEYS.details(),
        // id가 undefined가 아닐 때만 호출
        queryFn:()=>storageService.getMyStorages(userId as string),
        enabled:!!userId,
    })
};

export const useGetStorageVideoQuery = (storageId:string)=>{
    return useQuery({
        queryKey:STORAGE_KEYS.detail(storageId),
        queryFn:()=>storageService.getStorageVideos(storageId),
    })
}