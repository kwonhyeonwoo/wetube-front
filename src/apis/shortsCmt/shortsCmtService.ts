import type { ShortsCmtResponse } from "@/interfaces/shorts.type";
import { api } from "../axiosInstance"

export const shortsCmtService = {
    postShortsCmt: async ({ shortsId, comment }: { shortsId: string, comment: string }) => {
        const response = await api.post(`/shorts-comment/${shortsId}`, {
            comment,
        });
        const data = await response.data;
        console.log('post data', data)
        return data;
    },
    getShortsCmt: async (): Promise<ShortsCmtResponse[]> => {
        const response = await api.get('/shorts-comment');
        const data = await response.data;
        console.log('get cmt', data)
        return data;
    }
}