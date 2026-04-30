import type { UseFormRegister, FieldValues, Path } from "react-hook-form";
import UploadVideo from "../UploadVideo/UploadVideo";
import styles from "./css/index.module.css";
import VideoCustomInput from "@/pages/video/components/VideoCustomInput/VideoCustomInput";
import ContentTextArea from "@/pages/video/components/ContentTextArea/ContentTextArea";

interface Props<T extends FieldValues> {
  videoPreview: string | null;
  addPreviewMedia: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<T>;
}

const WriteVideoLeft = <T extends FieldValues>({
  videoPreview,
  register,
  addPreviewMedia,
}: Props<T>) => {
  return (
    <div className={styles.leftUpload}>
      {/* 비디오 업로드 */}
      <UploadVideo
        videoPreview={videoPreview}
        mode="video"
        addPreviewMedia={addPreviewMedia}
      />
      {/* 제목 */}
      <VideoCustomInput
        name={"title"}
        label="동영상 제목"
        register={register}
      />
      {/* 내용  */}
      <ContentTextArea
        text="동영상 설명"
        name={"content" as Path<T>}
        register={register}
      />
    </div>
  );
};

export default WriteVideoLeft;
