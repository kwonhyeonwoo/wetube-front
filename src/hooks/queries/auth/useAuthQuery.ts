import { USER_KEYS } from "@/apis/auth/authKeys";import { authService } from "@/apis/auth/authService";import { useQuery } from "@tanstack/react-query";

export const useGetUserVideos = (id:string,)=>{
    return useQuery({
        queryKey: USER_KEYS.videos(id,),
        queryFn:()=> authService.getUserVideos(id),
    })
};

export const useGetUser = (id:string,)=>{
    return useQuery({
        queryKey:USER_KEYS.detail(id),
        queryFn:()=>authService.getUser(id),
    })
}