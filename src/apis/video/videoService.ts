import type { VideoType } from "@/schema/media.schema";
import { api } from "../axiosInstance";
import type {CategoryType, VideoResponse } from "@/interfaces/media.type";


export const videoService = {
    getVideo: async (id: string): Promise<VideoResponse> => {
        const response = await api.get(`/video/${id}`);
        return await response.data.video;
    },
    getVideos: async (filters:{keyword?:string, category?: CategoryType;}): Promise<VideoResponse[]> => {
        const response = await api.get(`/video?keyword=${filters.keyword}&category=${filters.category}`);
        return await response.data.videos || [];
    },
    postVideo: async (data: VideoType) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("video", data.video[0]);
        formData.append("content", data.content);
        formData.append("categories", data.categories);
        formData.append("hashtags", JSON.stringify(data.hashtags));
        const response = await api.post("/video", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return await response.data;

    },
    getSearchVideos:async(filters:{keyword?:string, category?:string}):Promise<VideoResponse[]>=>{
        console.log('fitlers',filters)
        const response = await api.get(`/video`, {
          params: {
            keyword: filters.keyword,
            category: filters.category,
          },
        });
        console.log('search',response)
        return await response.data.videos || [];
    },
    putVideo: (id: string) => { }
}