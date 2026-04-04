import styles from "./css/index.module.css";
import TestImg from "@/assets/test/video-test.png";
import type { IVideo } from "@/@types/video.type";

interface Props{
    item:IVideo;
    number:number;
}

const StorageList = ({
    item,
    number
}:Props) => {
  return (
    <div className={styles.storageList}>
        <div className={styles.storageNumberBox}>
            <p className={styles.storageNumber}>{String(number)}</p>
        </div>
        <div className={styles.storageInfoBox}>
            <div className={styles.testImg}>
                <img src={TestImg} alt="test-img" />
            </div>            
            <div className={styles.infoBox}>
                <p className={styles.title}>{item.title}</p>
                <div className={styles.authorBox}>
                    <p className={styles.customText}>{item.nickName}</p>
                    <div className={styles.viewBox}>
                        <p className={styles.customText}>조회수</p>
                        <p className={styles.customText}>{item.views}</p>
                    </div>
                    <p className={styles.customText}>3주전</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StorageList