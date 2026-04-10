import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useCallback, } from "react";
import { videoSchema, type videoType } from "@/schema/video.schema";
import { useToastStore } from "@/store/useToastStore";
import useVideoMutation from "@/hooks/queries/video/useVideoMutation";
import VideoFormTemplate from "@/components/video/VideoFormTemplate/VideoFormTemplate";
import { usePreviewVideo } from "@/hooks/queries/usePreviewVideo";

const WriteVideoContainer = () => {
  const {mutate} =useVideoMutation();
  const { addToast } = useToastStore();
  const {
          register,
          handleSubmit,
          watch,
          setValue,
    } = useForm<videoType>({
            resolver:zodResolver(videoSchema),
            defaultValues:{
              categories:"movie",
              tags:[]
            }
  });
  const [videoPreview] = usePreviewVideo(watch('video'));
  const onSubmit = useCallback(
    (data: videoType) => {
      mutate({
        video: data.video,
        title: data.title,
        content: data.content,
        category: data.categories,
        tags: data.tags,
      });
    },[mutate],
  );
  const onInvalid = ()=>{
    addToast('내용을 전부 채워주세요.')
  }
  const currentCategory = watch('categories');
  const currentTags = watch('tags');
  return (
    <VideoFormTemplate
      currentCategory={currentCategory}
      currentTags={currentTags}
      videoPreview={videoPreview}
      register={register}
      setValue={setValue}
      onInvalid={onInvalid}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}

export default WriteVideoContainer