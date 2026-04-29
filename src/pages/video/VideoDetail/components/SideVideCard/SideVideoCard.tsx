import type { VideoResponse } from "@/interfaces/media.type";
import styles from "./css/index.module.css";
import { getRelativeTime } from "@/lib/lib";

interface Props {
  item: VideoResponse;
}

const SideVideoCard = ({ item }: Props) => {
  return (
    <div className={styles.storageInfoBox}>
      <div className={styles.videoBox}>
        <video src={`${import.meta.env.VITE_APP_BASE_SRC}/${item.video}`} />
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
            <p className={styles.customText}>
              {getRelativeTime(item.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideVideoCard;
