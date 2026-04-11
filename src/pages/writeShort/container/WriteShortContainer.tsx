import VideoFormTemplate from "@/components/video/VideoFormTemplate/VideoFormTemplate";
import { useForm,type SubmitHandler } from "react-hook-form";
import { shortsSchema,type ShortsType, } from "@/schema/media.schema";
import { useCallback } from "react";
import { usePreviewVideo } from "@/hooks/usePreviewVideo";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostShortMutation from "@/hooks/queries/short/usePostShortMutation";

const WriteShortContainer = () => { 
  const {mutate} = usePostShortMutation();
  const {register, watch, handleSubmit,setValue} = useForm<ShortsType>({
    resolver:zodResolver(shortsSchema),
    defaultValues:{
      categories:"movie",
      tags:[]
    }
  });
  const onSubmit :SubmitHandler<ShortsType> = useCallback(
    (data) => {
      mutate({
        shorts:data.shorts,
        title:data.title,
        content:data.content,
        categories:data.categories,
        tags:data.tags
      });
    },
    [mutate],
  );
  const [preview] = usePreviewVideo(watch('shorts'));
  const currentTags = watch('tags')
  return (
    <VideoFormTemplate
      currentTags={currentTags}
      videoPreview={preview}
      currentCategory={watch("categories")}
      register={register}
      setValue={setValue}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
}

export default WriteShortContainer