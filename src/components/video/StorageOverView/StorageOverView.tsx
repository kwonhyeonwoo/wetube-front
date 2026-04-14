import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import styles from "./css/index.module.css";

interface Props{
    thumnail:string | undefined;
    title:string;
    length:number;
    createdAt:Date;
    content:string;

}
const StorageOverView = ({
    title,
    length,
    createdAt,
    content,
    thumnail
}:Props) => {
  return (
    <section className={styles.leftSection}>
        <div className={styles.storageCard}>
        <div className={styles.imgBox}>
            <img src={`${import.meta.env.VITE_APP_BASE_SRC}/${thumnail}`} alt="" />
            </div>
            <div className={styles.titleBox}>
            <h2 className={styles.titleText}>{title}</h2>
            <div className={styles.dateCountBox}>
                <p className={styles.commonText}>{String(length)} 동영상</p>
                <p className={styles.commonText}>업데이트 {1}일 전</p>
            </div>
            </div>
            <p className={styles.contentText}>{content}</p>
            <div className={styles.btnBox}>
            <SubmitButton text="모두재생" type="button" handleSubmit={()=>{}}/>
            </div>
        </div>
    </section>
  )
}

export default StorageOverView