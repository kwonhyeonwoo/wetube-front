import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "@/hooks/queries/video/useGetVideoQuery";
import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import { videoEditSchema, type VideoEditType } from "@/schema/media.schema";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVideoPutMutation } from "@/hooks/queries/video/useVideoMutation";
import { useMediaPreview } from "@/hooks/useMediaPreview";
import SelectVideo from "../components/SelectVideo/SelectVideo";
import UploadDropMenu from "../../components/UploadDropMenu/UploadDropMenu";
import VideoCustomInput from "../../components/VideoCustomInput/VideoCustomInput";
import { useToastStore } from "@/store/useToastStore";
import ContentTextArea from "../../components/ContentTextArea/ContentTextArea";
import TagSectionContainer from "../../components/TagSection/container/TagSectionContainer";

const VideoEditContainer = () => {
  const { id } = useParams();
  const addToast = useToastStore((state) => state.addToast);
  const { data: video, isLoading } = useGetVideoQuery(id ?? "");
  const { mutate: putVideo } = useVideoPutMutation(video?._id ?? "");
  const { register, handleSubmit, setValue, watch } = useForm<VideoEditType>({
    resolver: zodResolver(videoEditSchema),
    values: video
      ? {
          title: video.title,
          content: video.content,
          categories: video.categories,
          hashtags: video.hashtags,
        }
      : undefined,
  });
  const { mediaPreview, addPreviewMedia } = useMediaPreview({
    setValue,
    name: "video",
  });
  const onSubmit: SubmitHandler<VideoEditType> = (data) => {
    if (!video?._id) return;
    putVideo({ videoId: video._id, data });
  };

  const onInvalid: SubmitErrorHandler<VideoEditType> = (error) => {
    const firstError = Object.values(error)[0];
    addToast(firstError as string);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!video) {
    return;
  }

  return (
    <main className={styles.videoEditPage}>
      <section className={styles.videoEditSection}>
        <form
          className={styles.formBox}
          onSubmit={handleSubmit(onSubmit, onInvalid)}
        >
          <SelectVideo
            mediaPreview={mediaPreview}
            video={video.video}
            addPreviewMedia={addPreviewMedia}
          />
          <VideoCustomInput name="title" label="제목" register={register} />
          <ContentTextArea
            text="동영상 설명"
            name={"content"}
            value={watch("content")}
            register={register}
          />
          <UploadDropMenu
            currentCategory={watch("categories", video.categories)}
            setValue={setValue}
          />
          <div className={styles.tagBox}>
            <TagSectionContainer
              hashtags={watch("hashtags") || []}
              setValue={setValue}
            />
          </div>
          <div className={styles.btnBox}>
            <SubmitButton text="수정하기" type="submit" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default VideoEditContainer;
