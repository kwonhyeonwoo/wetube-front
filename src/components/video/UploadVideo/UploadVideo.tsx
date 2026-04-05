import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import styles from "./css/index.module.css";

interface Props <T extends FieldValues>{
  mode:"video" | "image";
  name:Path<T>
  register:UseFormRegister<T>;
}
const UploadVideo = <T extends FieldValues>({
  mode, 
  name,
  register}:Props<T>) => {
  return (
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
  )
}

export default UploadVideo