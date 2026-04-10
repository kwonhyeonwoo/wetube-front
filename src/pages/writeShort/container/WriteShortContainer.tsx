import VideoFormTemplate from "@/components/video/VideoFormTemplate/VideoFormTemplate";
import styles from "../css/index.module.css";
import { useForm } from "react-hook-form";
import { videoSchema, type videoType } from "@/schema/video.schema";
import { useCallback } from "react";
import { usePreviewVideo } from "@/hooks/queries/usePreviewVideo";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostShortMutation from "@/hooks/queries/short/usePostShortMutation";
const WriteShortContainer = () => { 
  const {mutate} = usePostShortMutation();
  const {register, watch, handleSubmit,setValue} = useForm<videoType>({
    resolver:zodResolver(videoSchema),
    defaultValues:{
      categories:"movie",
      tags:[]
    }
  });
  const onSubmit = useCallback(
    (data:videoType) => {
      mutate({
        video:data.video,
        title:data.title,
        content:data.content,
        category:data.categories,
        tags:data.tags
      });
    },
    [mutate],
  );
  const [preview] = usePreviewVideo(watch('video'));
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