import type { VideoResponse } from "@/interfaces/media.type";
import { useMemo } from "react";

export const useMediaByViews = (videos:VideoResponse[])=>{
    const bestVideosByViews = useMemo(() => {
        if (!videos || videos.length === 0) return [];

        return [...videos]
        .sort((a,b)=>b.meta.views - a.meta.views) //내림차순정렬
        .slice(0,1);
    }, [videos])

    return {bestVideosByViews};
}