import VideoCard from "@/components/video/VideoCard/VideoCard";
import styles from "./css/index.module.css";
import GrayArrow from "@/assets/common/gray-right-arrow.svg"
import { Link } from "react-router-dom";
import type { VideoResponse, ShortsResponse} from "@/interfaces/media.type";
type MediaType = VideoResponse[] | ShortsResponse[]
interface Props {
  videos: MediaType | undefined;
  text: string;
  userId: string | undefined;
  nickName?: string;
  handleVideoDetail: (id: string) => void;
}

const VideosSection = ({
  videos,
  text,
  nickName,
  userId,
  handleVideoDetail,
}: Props) => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoTitleBox}>
        <h2 className={styles.videoTitle}>{text}</h2>
        <Link to={`/user/${userId}/videos`} className={styles.allVideoBtn}>
          <span>전체보기</span>
          <img src={GrayArrow} alt="" />
        </Link>
      </div>
      <div className={styles.videoGrid}>
        {videos?.map((item, idx) => (
          <VideoCard
            key={idx}
            {...item}
            ownerId={userId ?? ""}
            nickName={nickName}
            handleVideoDetail={handleVideoDetail}
          />
        ))}
      </div>
    </section>
  );
};

export default VideosSection