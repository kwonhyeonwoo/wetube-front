import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import styles from "./css/index.module.css";
import TestImg from "@/assets/test/video-test.png";

interface Props{
    title:string;
    count:string;
    date:string;
    content:string;

}
const StorageOverView = ({
    title,
    count,
    date,
    content
}:Props) => {
  return (
    <section className={styles.leftSection}>
        <div className={styles.storageCard}>
        <div className={styles.imgBox}>
            <img src={TestImg} alt="" />
            </div>
            <div className={styles.titleBox}>
            <h2 className={styles.titleText}>{title}</h2>
            <div className={styles.dateCountBox}>
                <p className={styles.commonText}>{count} 동영상</p>
                <p className={styles.commonText}>업데이트 {date}일 전</p>
            </div>
            </div>
            <p className={styles.contentText}>{content}</p>
            <div className={styles.btnBox}>
            <SubmitButton text="모두재생" handleSubmit={()=>{}}/>
            </div>
        </div>
    </section>
  )
}

export default StorageOverView