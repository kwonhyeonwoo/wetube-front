import type { ShortsType } from "@/schema/media.schema"; import { api } from "../axiosInstance";
import type { ShortsResponse } from "@/interfaces/media.type";

export const shortsService = {
  postShorts: async (data: ShortsType) => {
    const formData = new FormData();
    formData.append('title', data.title)
    formData.append('content', data.content);
    formData.append('categories', data.categories);
    formData.append('shorts', data.shorts);
    formData.append('hashtags', JSON.stringify(data.hashtags))
    const response = await api.post('/shorts', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    console.log('response',response)
    await await response.data;
  },
  getShorts: async (): Promise<ShortsResponse[]> => {
    const response = await api.get('/shorts');
    console.log('response', response.data.shorts)
    return await response.data.shorts;
  }
};