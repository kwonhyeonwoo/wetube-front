import UploadVideo from "@/components/video/UploadVideo/UploadVideo";
import styles from "../css/index.module.css";
import { useForm } from "react-hook-form";
import ContentTextArea from "@/components/video/ContentTextArea/ContentTextArea";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { storageSchema,
type StorageType } from "@/schema/storage.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToastStore } from "@/store/useToastStore";
import { usePostStorage } from "@/hooks/queries/storage/useStorageMutation";
import { useParams } from "react-router-dom";
import { useMediaPreview } from "@/hooks/useMediaPreview";
const WriteStorageContainer = () => {
  const {register,handleSubmit,watch} = useForm<StorageType>({
    resolver:zodResolver(storageSchema),
    defaultValues:{
      title:"",
      content:"",
    }
  }); 
  const {id} = useParams()
  const {mutate} = usePostStorage(id ?? "")
  const {addToast} = useToastStore();
  const { mediaPreview, addPreviewMedia } = useMediaPreview();

  const onSubmit = (data:StorageType)=>{
    mutate({
        title:data.title,
        thumnail:data.thumnail,
        content:data.content,
    });
  }
  const onInvalid = ()=>{
    addToast('내용을 다 채워주세요')
  };
  console.log('fiel',watch('thumnail'))
  return (
    <main className={styles.storageWritePage}>
      <section className={styles.titleSection}>
        <h2 className={styles.title}>보관함 만들기</h2>
        <p className={styles.subText}>보관함을 만들어 콘텐츠를 관리하세요</p>
      </section>

      <section className={styles.uploadSection}>
       <form onSubmit={handleSubmit(onSubmit,onInvalid)} className={styles.formBox}>
        <UploadVideo 
            mode="image"
            name="thumnail"
            videoPreview={mediaPreview}
            register={register}
          />
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
              name={"content"}
              register={register}
            />
            <div className={styles.btnBox}>
              <SubmitButton text="만들기" type="submit"/>
            </div>
        </form>
      </section>
    </main>
  )
}

export default WriteStorageContainer