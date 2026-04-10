import type { VideoRequest } from "@/@types/video.type";
import { api } from "../axiosInstance";

export const shortsService = {
  postShorts: async(data: VideoRequest) => {
    try{
        const formData = new FormData();
        formData.append('title',data.title)
        formData.append('content',data.content);
        formData.append('category',data.category);
        formData.append('video',data.video[0]);
        formData.append('hashtags',JSON.stringify(data.tags))
        const response = await api.post('/shorts',formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });

        await await response.data;
    }catch(error){
        console.log('erorr',error);
    }
  },
};