import VideoCard from "@/components/video/VideoCard/VideoCard";
import styles from "./css/index.module.css";
import GrayArrow from "@/assets/common/gray-right-arrow.svg"
import { Link } from "react-router-dom";
import type { VideoResponse } from "@/interfaces/video.type";

interface Props {
  videos: VideoResponse[] | undefined;
  text: string;
  handleVideoDetail: (id: string) => void;
}

const VideosSection = ({ videos, text, handleVideoDetail }: Props) => {
  console.log('first',videos)
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoTitleBox}>
        <h2 className={styles.videoTitle}>{text}</h2>
        <Link to={"/user/12345/videos"} className={styles.allVideoBtn}>
          <span>전체보기</span>
          <img src={GrayArrow} alt="" />
        </Link>
      </div>
      <div className={styles.videoGrid}>
        {videos?.map((item, idx) => (
          <VideoCard
            key={idx}
            {...item}
            handleVideoDetail={handleVideoDetail}
          />
        ))}
      </div>
    </section>
  );
};

export default VideosSection