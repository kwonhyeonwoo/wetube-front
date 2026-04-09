import { api } from "../axiosInstance";
import type { IVideo, VideoRequest } from "@/@types/video.type";

export const videoService = {
    getVideo:async(id:string):Promise<IVideo[]>=>{
        const response = await api.get('/vidoes');
        return await response.data;
    },
    postVideo:async(data:VideoRequest)=>{
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("video", data.video[0]);
        formData.append("content", data.content);
        formData.append("category", data.category);
        formData.append("hashtags", JSON.stringify(data.tags));
        const response = await api.post("/video", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return await response.data;

    },
    putVideo:(id:string)=>{}
}