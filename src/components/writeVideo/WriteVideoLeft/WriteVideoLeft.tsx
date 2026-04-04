import type { UseFormRegister } from "react-hook-form";
import UploadVideo from "../../video/UploadVideo/UploadVideo";
import styles from "./css/index.module.css";
import type { videoType } from "@/schema/video.schema";

interface Props{
  register:UseFormRegister<videoType>;
}

const WriteVideoLeft = ({register}:Props) => {
  return (
    <div className={styles.leftUpload}>
      {/* 비디오 업로드 */}
        <UploadVideo register={register}/>
        {/* 제목 */}
        <div className={styles.titleInputBox}>
            <span className={styles.inputSpan}>동영상 제목</span>
            <input 
              type="text" 
              placeholder="시선을 사로잡는 제목을 입력하세요" 
              className={styles.input} 
              {...register('title')}
            />
        </div>

        {/* 내용  */}
        <div className={styles.textAreaBox}>
            <span className={styles.inputSpan}>동영상 설명</span>
            <textarea 
            placeholder="동영상 설명을 입력하세요" 
            className={styles.textArea}
            {...register('content')}
            />
        </div>
  </div>
  )
}

export default WriteVideoLeft