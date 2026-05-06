import type { ShortsCmtResponse } from "@/interfaces/shorts.type";
import { api } from "../axiosInstance"

export const shortsCmtService = {
    postShortsCmt: async ({ shortsId, comment }: { shortsId: string, comment: string }) => {
        const response = await api.post(`/short-comment/${shortsId}`, {
            comment,
        });
        const data = await response.data;
        return data.data;
    },
    getShortsCmt: async (shortsId: string): Promise<ShortsCmtResponse[]> => {
        const response = await api.get(`/short-comment/${shortsId}`);
        const data = await response.data;
        return data.data;
    },

}