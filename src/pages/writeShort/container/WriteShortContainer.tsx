import VideoFormTemplate from "@/components/video/VideoFormTemplate/VideoFormTemplate";
import { useForm,type SubmitHandler } from "react-hook-form";
import { shortsSchema,type ShortsType, } from "@/schema/media.schema";
import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostShortMutation from "@/hooks/queries/short/usePostShortMutation";
import { useMediaPreview } from "@/hooks/useMediaPreview";

const WriteShortContainer = () => { 
  const {mutate} = usePostShortMutation();
  const {register, watch, handleSubmit,setValue} = useForm<ShortsType>({
    resolver:zodResolver(shortsSchema),
    defaultValues:{
      categories:"movie",
      hashtags:[]
    }
  });
  const { mediaPreview, addPreviewMedia } = useMediaPreview();
  const onSubmit :SubmitHandler<ShortsType> = useCallback(
    (data) => {
      mutate({
        shorts:data.shorts,
        title:data.title,
        content:data.content,
        categories:data.categories,
        hashtags:data.hashtags
      });
    },
    [mutate],
  );
  const currentTags = watch('hashtags')
  return (
    <VideoFormTemplate
      currentTags={currentTags}
      videoPreview={mediaPreview}
      mediaName="shorts"
      currentCategory={watch("categories")}
      register={register}
      setValue={setValue}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}

export default WriteShortContainer