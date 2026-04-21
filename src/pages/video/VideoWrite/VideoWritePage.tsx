import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useCallback, } from "react";
import { videoSchema,type VideoType, } from "@/schema/media.schema";
import { useToastStore } from "@/store/useToastStore";
import {useVideoMutation} from "@/hooks/queries/video/useVideoMutation";
import VideoFormTemplate from "@/components/video/VideoFormTemplate/VideoFormTemplate";
import { useMediaPreview } from "@/hooks/useMediaPreview";

const VideoWritePage = () => {
  const {mutate} =useVideoMutation();
  const { addToast } = useToastStore();
  const {
          register,
          handleSubmit,
          watch,
          setValue,
    } = useForm<VideoType>({
            resolver:zodResolver(videoSchema),
            defaultValues:{
              categories:"movie",
              hashtags:[]
            }
  });
  const {mediaPreview,addPreviewMedia} = useMediaPreview({name:"video", setValue});
  const onSubmit = useCallback(
    (data: VideoType) => {
      mutate({
        video: data.video,
        title: data.title,
        content: data.content,
        categories: data.categories,
        hashtags: data.hashtags,
      });
    },[mutate],
  );
  const onInvalid = (err:any)=>{
    console.log('err',err)
    addToast('내용을 전부 채워주세요.')
  }
  const currentCategory = watch('categories');
  const currentTags = watch('hashtags');
  return (
    <VideoFormTemplate
      currentCategory={currentCategory}
      currentTags={currentTags}
      videoPreview={mediaPreview}
      mediaName="video"
      addPreviewMedia={addPreviewMedia}
      register={register}
      setValue={setValue}
      onInvalid={onInvalid}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}

export default VideoWritePage