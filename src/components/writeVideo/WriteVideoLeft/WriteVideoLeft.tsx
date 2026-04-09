import type { UseFormRegister } from "react-hook-form";
import UploadVideo from "../../video/UploadVideo/UploadVideo";
import styles from "./css/index.module.css";
import type { videoType } from "@/schema/video.schema";
import ContentTextArea from "@/components/video/ContentTextArea/ContentTextArea";

interface Props {
  videoPreview: string | null;
  register: UseFormRegister<videoType>;
}

const WriteVideoLeft = ({ videoPreview,register }: Props) => {
  return (
    <div className={styles.leftUpload}>
      {/* 비디오 업로드 */}
      <UploadVideo
        videoPreview={videoPreview}
        mode="video"
        name="video"
        register={register}
      />
      {/* 제목 */}
      <div className={styles.titleInputBox}>
        <span className={styles.inputSpan}>동영상 제목</span>
        <input
          type="text"
          placeholder="시선을 사로잡는 제목을 입력하세요"
          className={styles.input}
          {...register("title")}
        />
      </div>

      {/* 내용  */}
      <ContentTextArea
        placeholder="동영상 설명을 입력하세요"
        text="동영상 설명"
        name={"content"}
        register={register}
      />
    </div>
  );
};

export default WriteVideoLeft