import { useState } from "react";
import styles from "../css/index.module.css";
// import type { VideoResponse } from "@/interfaces/media.type";
import ProfileVideoCard from "../../ProfileVideoCard/ProfileVideoCard";
import PaginationBtn from "@/components/PaginationBtn/PaginationBtn";

interface Props {
  videos: {
    video: string;
    title: string;
    meta: { views: number };
    createdAt: Date;
  }[];
  type:"video" | "shorts"
}
const MediaTrackContainer = ({ videos ,type}: Props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(videos.length / 6);

  const handleSliderBtn = (type: "left" | "right") => {
    if (type === "left" && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else if (type === "right" && currentPage < totalPage - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className={styles.mediaTrack}>
      <div>
        <h2 className={styles.videoTitle}>
          {type === "video" ? "인기동영상" : "쇼츠"}
        </h2>
      </div>
      <div className={styles.videoTrack}>
        <div
          className={styles.videoGrid}
          style={{
            transform: `
                translateX(calc(-${currentPage * 100}% - ${currentPage * 16}px))
            `,
          }}
        >
          {videos.map((item, idx) => (
            <ProfileVideoCard
              key={idx}
              video={item.video}
              title={item.title}
              meta={item.meta}
              height={
                type === "shorts" ? "314px" : ""
              }
              createdAt={item.craetedAt}
            />
          ))}
        </div>
        <div className={styles.pagination}>
          <PaginationBtn handleSliderBtn={handleSliderBtn} />
        </div>
      </div>
    </div>
  );
};

export default MediaTrackContainer;
