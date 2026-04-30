import { useForm, type SubmitHandler } from "react-hook-form";
import { shortsSchema, type ShortsType } from "@/schema/media.schema";
import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMediaPreview } from "@/hooks/useMediaPreview";
import VideoFormTemplate from "@/pages/video/components/VideoFormTemplate/VideoFormTemplate";
import usePostShortMutation from "@/hooks/mutations/short/useWriteShortMutation";

const ShortWriteContainer = () => {
  const { mutate } = usePostShortMutation();
  const { register, watch, handleSubmit, setValue } = useForm<ShortsType>({
    resolver: zodResolver(shortsSchema),
    defaultValues: {
      categories: "movie",
      hashtags: [],
      title: "",
      content: "",
    },
  });
  const { mediaPreview, addPreviewMedia } = useMediaPreview({
    setValue,
    name: "shorts",
  });
  const onSubmit: SubmitHandler<ShortsType> = useCallback(
    (data: ShortsType) => {
      mutate({
        shorts: data.shorts,
        title: data.title,
        content: data.content,
        categories: data.categories,
        hashtags: data.hashtags,
      });
    },
    [mutate],
  );
  const currentCategory = watch("categories");
  const currentTags = watch("hashtags");
  return (
    <VideoFormTemplate
      currentCategory={currentCategory}
      currentTags={currentTags}
      videoPreview={mediaPreview}
      addPreviewMedia={addPreviewMedia}
      register={register}
      setValue={setValue}
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
    />
  );
};

export default ShortWriteContainer;
