import type { videoType } from "@/schema/video.schema";
import { api } from "../axiosInstance";
import type { IVideo } from "@/@types/video.type";

export const videoService = {
    getVideo:async(id:string):Promise<IVideo[]>=>{
        const response = await api.get('/vidoes');
        return await response.data;
    },
    postVideo:(data:videoType)=>{},
    putVideo:(id:string)=>{}
}