import type { VideoType } from "@/schema/media.schema";
import { api } from "../axiosInstance";
import type { MediaResponse } from "@/interfaces/media.type";


export const videoService = {
    getVideo: async (id: string): Promise<MediaResponse> => {
        const response = await api.get(`/video/${id}`);
        return await response.data.video;
    },
    getVideos: async (): Promise<MediaResponse[]> => {
        const response = await api.get('/video');
        console.log('first', response.data)
        return await response.data.videos;
    },
    postVideo: async (data: VideoType) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("video", data.video[0]);
        formData.append("content", data.content);
        formData.append("categories", data.categories);
        formData.append("hashtags", JSON.stringify(data.tags));
        const response = await api.post("/video", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return await response.data;

    },
    putVideo: (id: string) => { }
}