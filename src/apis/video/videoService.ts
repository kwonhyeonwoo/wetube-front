import type { VideoEditType, VideoType } from "@/schema/media.schema";
import { api } from "../axiosInstance";
import type {CategoryType, VideoResponse } from "@/interfaces/media.type";


export const videoService = {
  getVideo: async (id: string): Promise<VideoResponse> => {
    const response = await api.get(`/video/${id}`);
    console.log('response',await response.data)
    return response.data.video;
  },
  getVideos: async (filters: {
    keyword?: string;
    category?: CategoryType;
  }): Promise<VideoResponse[]> => {
    const response = await api.get("/video", {
      params: {
        keyword: filters.keyword,
        category: filters.category,
      },
    });

    return response.data.videos || [];
  },
  postVideo: async (data: VideoType) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("video", data.video);
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
  getSearchVideos: async (filters: {
    keyword?: string;
    category?: string;
  }): Promise<VideoResponse[]> => {
    console.log("fitlers", filters);
    const response = await api.get(`/video`, {
      params: {
        keyword: filters.keyword,
        category: filters.category,
      },
    });
    console.log("search", response);
    return (await response.data.videos) || [];
  },
  putVideo: async ({
    videoId,
    data,
  }: {
    videoId: string;
    data: VideoEditType;
  }) => {
    const formData = new FormData();
    if (data.video) {
      formData.append("video", data.video);
    }
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("hashtags", JSON.stringify(data.hashtags));
    formData.append("categories", data.categories);
    const response = await api.put(`/video/${videoId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return await response.data;
  },
  deleteVideo:async(videoId:string)=>{
    const response = await api.delete(`/video/${videoId}`);
    return response.data;
  },
  postLikeVideo: async (videoId: string) => {
    const response = await api.post(`/video/${videoId}/like`);
    return response.data;
  },

  postVideoViewsIncrease:async(videoId:string)=>{
    const response = await api.post(`/video/${videoId}/views`);
    return await response.data;
  },

  postVideoSave:async(videoId:string)=>{
      const response = await api.post(`/user/${videoId}/save`);
      return await response.data;
  },


};