import { useParams } from "react-router-dom";
import styles from "../css/index.module.css";
import { useGetVideoQuery } from "@/hooks/queries/video/useGetVideoQuery";
import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";
import VideoCustomInput from "@/components/video/VideoCustomInput/VideoCustomInput";
import TagSection from "@/components/writeVideo/TagSection/TagSection";
import ContentTextArea from "@/components/video/ContentTextArea/ContentTextArea";
import UploadDropMenu from "@/components/writeVideo/UploadDropMenu/UploadDropMenu";
import { videoEditSchema, type VideoEditType } from "@/schema/media.schema";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import PlayerIcon from "@/assets/video/play.svg?react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVideoPutMutation } from "@/hooks/queries/video/useVideoMutation";
import { useMediaPreview } from "@/hooks/useMediaPreview";

const VideoEditContainer = () => {
    const {id} = useParams();
    const {data:video , isLoading} = useGetVideoQuery(id ?? "");
    const {mutate:putVideo} = useVideoPutMutation(video?._id ?? "");
    const {
      register,
      handleSubmit,
      setValue,
      watch,
    } = useForm<VideoEditType>({
      resolver: zodResolver(videoEditSchema),
      // video가 있을 때만 객체를 만들어주고, 없으면 통째로 undefined를 줍니다.
      values: video
        ? {
            title: video.title,
            content: video.content,
            categories: video.categories,
            hashtags: video.hashtags,
          }
        : undefined,
    });
    const {mediaPreview, addPreviewMedia} = useMediaPreview({setValue,name:"video"});

    const onSubmit : SubmitHandler<VideoEditType>= (data)=>{
        if (!video?._id) return;
        putVideo({ videoId:video._id, data });
    };

    const onInvalid :SubmitErrorHandler<VideoEditType>= (data)=>{
      console.log('err?',data)
    }
        if (!video) {
          return;
        }
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    };
  return (
    <main className={styles.videoEditPage}>
      <section className={styles.videoEditSection}>
        <form
          className={styles.formBox}
          onSubmit={handleSubmit(onSubmit, onInvalid)}
        >
          <div className={styles.videoBox}>
            <label htmlFor="video" className={styles.videoFilesBtn}>
              <div className={styles.circle}>
                <PlayerIcon />
              </div>
            </label>
            <input
              type="file"
                onChange={addPreviewMedia}
              id="video"
              style={{ display: "none" }}
            />
            <video
              className={styles.video}
              controls={mediaPreview === null ? false : true}
              src={
                mediaPreview
                  ? mediaPreview
                  : `${import.meta.env.VITE_APP_BASE_SRC}/${video.video}`
              }
            />
          </div>
          <VideoCustomInput
            name="title"
            label="제목"
            value={watch('title')}
            register={register}
          />
          <ContentTextArea
            text="동영상 설명"
            name={"content"}
            value={watch('content')}
            register={register}
          />
          <UploadDropMenu
            currentCategory={watch("categories", video.categories)}
            setValue={setValue}
          />
          <div className={styles.tagBox}>
            <TagSection hashtags={watch('hashtags') || []} setValue={setValue} />
          </div>
          <div className={styles.btnBox}>
            <SubmitButton
              text="수정하기"
              type="submit"
              handleSubmit={() => {}}
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default VideoEditContainer