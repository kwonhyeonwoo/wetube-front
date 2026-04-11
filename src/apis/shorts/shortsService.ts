import type {  ShortsType } from "@/schema/media.schema";import { api } from "../axiosInstance";

export const shortsService = {
  postShorts: async (data: ShortsType) => {
      const formData = new FormData();
      formData.append('title', data.title)
      formData.append('content', data.content);
      formData.append('categories', data.categories);
      formData.append('shorts', data.shorts[0]);
      formData.append('hashtags', JSON.stringify(data.tags))
      const response = await api.post('/shorts', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log('shorts api:',response.data);
      await await response.data;
  },
};