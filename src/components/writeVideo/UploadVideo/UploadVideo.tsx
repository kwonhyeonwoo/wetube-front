import styles from "./css/index.module.css";
const UploadVideo = () => {
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
    <input type="file" id="imgUpload" className={styles.imgUploadInput} />
    </div>
  )
}

export default UploadVideo