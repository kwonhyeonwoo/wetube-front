import { useParams } from "react-router-dom";
import styles from "../css/index.module.css";
import { useGetVideoQuery } from "@/hooks/queries/video/useGetVideoQuery";
import { useForm,type Path } from "react-hook-form";
import VideoCustomInput from "@/components/video/VideoCustomInput/VideoCustomInput";
import TagSection from "@/components/writeVideo/TagSection/TagSection";
import ContentTextArea from "@/components/video/ContentTextArea/ContentTextArea";
import UploadDropMenu from "@/components/writeVideo/UploadDropMenu/UploadDropMenu";
import type { VideoType } from "@/schema/media.schema";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";

const VideoEditContainer = () => {
    const {id} = useParams();
    const {data:video , isLoading, isError} = useGetVideoQuery(id ?? "");
    const { register, handleSubmit ,setValue} = useForm<VideoType>();
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    };
    if(!video){
        return (
            <div>비디오를 조회할 수 없습니다.</div>
        )
    }
    console.log('video tags',video.hashtags)
  return (
    <main className={styles.videoEditPage}>
      <form className={styles.leftSection}>
        <div className={styles.videoBox}>
            <video className={styles.video} src={`${import.meta.env.VITE_APP_BASE_SRC}/${video.video}`} />
        </div>
        <VideoCustomInput
          name="title"
          label="제목"
          value={video.title}
          register={register}
        />
        <ContentTextArea
            placeholder={video.content}
            text="동영상 설명"
            name={"content"}
            register={register}
        />
        <UploadDropMenu 
          currentCategory={video.categories} 
          setValue={setValue}
        />
        <div className={styles.tagBox}>
          <TagSection
            hashtags={video.hashtags}
            setValue={setValue}
          />
        </div>
        <div className={styles.btnBox}>
          <SubmitButton text="수정하기" type="button" handleSubmit={()=>{}}/>
        </div>
      </form>
    </main>
  );
}

export default VideoEditContainer