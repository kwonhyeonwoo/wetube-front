import type { StorageType } from "@/schema/storage.schema";
import { api } from "../axiosInstance";

export const storageService = {
    postStorage:async(data:StorageType)=>{
        if(!data){
            return {
                status:false,
                message:"데이터가 없습니다."
            }
        }
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('content',data.content);
        formData.append('thumnail',data.thumnail[0])
        const response = await api.post('/storage',formData,{
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return await response.data
    }
}