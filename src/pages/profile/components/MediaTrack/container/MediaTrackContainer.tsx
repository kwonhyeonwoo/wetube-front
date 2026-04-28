import { useState } from "react";
import styles from "../css/index.module.css";
import ProfileVideoCard from "../../ProfileVideoCard/ProfileVideoCard";
import PaginationBtn from "@/components/PaginationBtn/PaginationBtn";
import type { ShortsResponse, VideoResponse } from "@/interfaces/media.type";
import Empty from "@/components/Empty/Empty";
import useMediaAction from "@/pages/profile/hooks/useMediaAction";

type Props =
  | { type: "video"; videos: VideoResponse[] }
  | { type: "shorts"; videos: ShortsResponse[] };
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
        {
          videos.length > 0 ? (
            <div
              className={styles.videoGrid}
              style={{
                transform: `
                    translateX(calc(-${currentPage * 100}% - ${currentPage * 16}px))
                `,
              }}
        >
          {
            videos.map((item, idx) => {
              const mediaUrl = "video" in item ? item.video : item.shorts;
              return (
                <ProfileVideoCard
                  key={item._id || idx}
                  video={mediaUrl}
                  title={item.title}
                  meta={item.meta}
                  height={type === "shorts" ? "314px" : ""}
                  createdAt={item.createdAt}
                />
              );
            })
           }
        </div>
          ):<Empty text="업로드 된 영상이 없습니다."/>
        }
        {videos.length > 6 && (
          <div className={styles.pagination}>
            <PaginationBtn handleSliderBtn={handleSliderBtn} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaTrackContainer;
