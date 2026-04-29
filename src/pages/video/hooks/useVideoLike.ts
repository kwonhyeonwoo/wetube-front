import { useVideoLikePostMutation } from "@/hooks/queries/video/useVideoMutation";

export const useVideoLike = ({userId,videoId}:{userId:string,videoId:string})=>{
     const { mutate } = useVideoLikePostMutation({
       userId,
       videoId: videoId ?? "",
     });
     const handleVideoLike = () => {
       if (videoId) {
         mutate(videoId);
       }
     };

     return { handleVideoLike}
}