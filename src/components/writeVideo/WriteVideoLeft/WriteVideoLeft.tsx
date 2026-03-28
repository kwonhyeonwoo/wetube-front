import UploadVideo from "../UploadVideo/UploadVideo";
import styles from "./css/index.module.css";
const WriteVideoLeft = () => {
  return (
    <div className={styles.leftUpload}>
        <UploadVideo/>
        {/* title input */}
        <div className={styles.titleInputBox}>
            <span className={styles.inputSpan}>동영상 제목</span>
            <input type="text" placeholder="시선을 사로잡는 제목을 입력하세요" className={styles.input} />
        </div>

        <div className={styles.textAreaBox}>
            <span className={styles.inputSpan}>동영상 설명</span>
            <textarea placeholder="동영상 설명을 입력하세요" className={styles.textArea} name="content"/>
        </div>
  </div>
  )
}

export default WriteVideoLeft