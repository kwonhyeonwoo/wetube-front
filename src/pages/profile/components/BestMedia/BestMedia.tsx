import type { VideoResponse } from "@/interfaces/media.type";
import styles from "./css/index.module.css";
import { getRelativeTime } from "@/lib/lib";
interface Props {
  video:VideoResponse;
  handleMediaAction: (videoId: string) => void;
}
const BestMedia = ({video, handleMediaAction }: Props) => {
  return (
    <div className={styles.bestMedia} onClick={() => handleMediaAction(video._id)}>
      <div className={styles.bestMediaCard}>
        <div className={styles.media}>
          {/* <video/> */}
          <video
            className={styles.video}
            src={`${import.meta.env.VITE_APP_BASE_SRC}/${video.video}`}
          />
        </div>
        <div className={styles.videoInfoBox}>
          <p className={styles.mediaTitle}>{video.title}</p>
          <div className={styles.metaBox}>
            <p className={styles.metaText}>조회수 {video.meta.views}회</p>
            <p className={styles.metaText}>{getRelativeTime(video.createdAt)}</p>
          </div>
          <p className={styles.videoContent}>{video.content}</p>
          <p className={styles.text}>자세히 알아보기</p>
        </div>
      </div>
    </div>
  );
};

export default BestMedia;
