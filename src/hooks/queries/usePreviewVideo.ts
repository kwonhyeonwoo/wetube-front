import { useEffect, useState } from "react"

export const usePreviewVideo = (videoFiles:FileList)=>{
    const [videoPreview, setVideoPreview] = useState<string | null>(null);
    useEffect(() => {
      if (videoFiles && videoFiles.length > 0) {
        const file = videoFiles[0];
        // 기존미리보기가 있으면 해제
        if (videoPreview) {
            URL.revokeObjectURL(videoPreview);
        }
        const previewUrl = URL.createObjectURL(file);
        setVideoPreview(previewUrl);
    }
    }, [videoFiles]);
    return [videoPreview];
}