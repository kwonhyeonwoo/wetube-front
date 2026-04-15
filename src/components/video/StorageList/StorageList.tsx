import type { VideoResponse } from "@/interfaces/media.type";import styles from "./css/index.module.css";

interface Props{
    item:VideoResponse;
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
        <div className={styles.videoBox}>
          <video src={`${import.meta.env.VITE_APP_BASE_SRC}/${item.video}`}/>
          {/* <img src={TestImg} alt="test-img" /> */}
        </div>
        <div className={styles.infoBox}>
          <p className={styles.title}>{item.title}</p>
          <div className={styles.authorBox}>
            <p className={styles.nickName}>{item.owner.nickName}</p>
            <div className={styles.metaBox}>
              <div className={styles.viewBox}>
                <p className={styles.customText}>조회수</p>
                <p className={styles.customText}>{item.meta.views}회</p>
              </div>
              <p className={styles.customText}>3주전</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorageList