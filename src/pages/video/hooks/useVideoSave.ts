import usePostVideoSave from "@/hooks/queries/video/usePostVideoSave";
import { useCallback } from "react";

export const useVideoSave = (paramsId:string)=>{
    const { mutate } = usePostVideoSave(paramsId ?? "");
    const handleVideoSave = useCallback(() => {
      if (paramsId) {
        mutate(paramsId);
      }
    }, [mutate]);

    return {handleVideoSave}
}