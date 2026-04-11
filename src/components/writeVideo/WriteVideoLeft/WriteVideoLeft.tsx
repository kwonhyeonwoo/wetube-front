import type { UseFormRegister, FieldValues, Path } from "react-hook-form";
import UploadVideo from "../../video/UploadVideo/UploadVideo";
import styles from "./css/index.module.css";
import ContentTextArea from "@/components/video/ContentTextArea/ContentTextArea";

interface Props <T extends FieldValues> {
  videoPreview: string | null;
  mediaName:Path<T>;
  register: UseFormRegister<T>;
}

const WriteVideoLeft = <T extends FieldValues>({ 
  mediaName,
  videoPreview, 
  register
}: Props<T>) => {
  return (
    <div className={styles.leftUpload}>
      {/* 비디오 업로드 */}
      <UploadVideo
        videoPreview={videoPreview}
        mode="video"
        name={mediaName}
        register={register}
      />
      {/* 제목 */}
      <div className={styles.titleInputBox}>
        <span className={styles.inputSpan}>동영상 제목</span>
        <input
          type="text"
          placeholder="시선을 사로잡는 제목을 입력하세요"
          className={styles.input}
          {...register("title" as Path<T>)}
        />
      </div>

      {/* 내용  */}
      <ContentTextArea
        placeholder="동영상 설명을 입력하세요"
        text="동영상 설명"
        name={"content" as Path<T>}
        register={register}
      />
    </div>
  );
};

export default WriteVideoLeft