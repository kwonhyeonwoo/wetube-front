import type { UseFormRegister } from "react-hook-form";
import styles from "./css/index.module.css";
import type { videoType } from "@/schema/video.schema";

interface Props{
  register:UseFormRegister<videoType>;
}
const UploadVideo = ({register}:Props) => {
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
        <span className={styles.uploadLabelText}>이미지 업로드</span>
    </label>
    <input 
      type="file" 
      id="imgUpload" 
      className={styles.imgUploadInput} 
      {...register('video')}
    />
    </div>
  )
}

export default UploadVideo