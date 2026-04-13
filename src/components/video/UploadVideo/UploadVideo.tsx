import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import styles from "./css/index.module.css";

interface Props<T extends FieldValues> {
  mode: "video" | "image";
  name: Path<T>;
  videoPreview:string | null;
  register: UseFormRegister<T>;
}
const UploadVideo = <T extends FieldValues>({
  mode, 
  name,
  videoPreview,
  register}:Props<T>) => {
  return (
    <div >
      {videoPreview ? (
        <div className={styles.videoBox}>
          {mode === "video" ? (
            <video src={videoPreview} controls className={styles.video} />
          ):(
            <img src={videoPreview} alt="thumnail-preview" className={styles.video} />
          )}
        </div>
      ) : (
        <div className={styles.imgUploadBox}>
          <label htmlFor="imgUpload" className={styles.uploadLabel}>
            <div className={styles.uploadCircle}>
              <img
                src="/assets/video/upload.png"
                srcSet="/assets/video/upload@2x.png 2x,
            /assets/video/upload@3x.png 3x"
                alt="upload"
              />
            </div>
            <span className={styles.uploadLabelText}>
              {mode === "video" ? "동영상 업로드" : "이미지 업로드"} 업로드
            </span>
          </label>
          <input
            type="file"
            id="imgUpload"
            accept={mode === "video" ? "video/*" : "image/*"}
            className={styles.imgUploadInput}
            {...register(name)}
          />
        </div>
      )}
    </div>
  );
}

export default UploadVideo