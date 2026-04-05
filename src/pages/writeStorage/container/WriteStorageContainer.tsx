import UploadVideo from "@/components/video/UploadVideo/UploadVideo";
import styles from "../css/index.module.css";
import { useForm } from "react-hook-form";
import ContentTextArea from "@/components/video/ContentTextArea/ContentTextArea";
import SubmitButtonContainer from "@/components/common/SubmitButton/container/SubmitButtonContainer";
const WriteStorageContainer = () => {
  const {register} = useForm(); 
  return (
    <main className={styles.storageWritePage}>
      <section className={styles.titleSection}>
        <h2 className={styles.title}>보관함 만들기</h2>
        <p className={styles.subText}>보관함을 만들어 콘텐츠를 관리하세요</p>
      </section>

      <section className={styles.uploadSection}>
        <UploadVideo 
          mode="image"
          name="image"
          register={register}/>
          <div className={styles.titleInputBox}>
            <span className={styles.inputSpan}>보관함 제목</span>
            <input 
              type="text" 
              placeholder="보관함 제목"
              className={styles.titleInput}
              {...register('title')}
            />
          </div>
          <ContentTextArea 
            placeholder="보관함 설명"
            text="보관함 설명" 
            name={"colntent"}
            register={register}
          />
          <div className={styles.btnBox}>
            <SubmitButtonContainer text="만들기" handleSubmit={()=>{}}/>
          </div>
      </section>
    </main>
  )
}

export default WriteStorageContainer