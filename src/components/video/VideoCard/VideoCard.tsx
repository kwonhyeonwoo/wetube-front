import { useState } from "react";
import styles from "./css/index.module.css";
import VideoOptionMenu from "../VideoOptionMenu/VideoOptionMenu";
import { useUidStore } from "@/store/useUserStore";
interface Props {
  _id: string;
  title: string;
  content: string;
  meta: {
      views: number;
      rating: number;
  };
  ownerId:string;
  avatar?: string;
  nickName?: string;
  video?: string;  
  shorts?: string;
  handleVideoDetail: (id: string) => void;
}

const VideoCard = ({
  video,
  shorts, 
  _id,
  meta: {
    views,
    rating,
  },
  ownerId,
  avatar,
  content,
  title,
  nickName,
  handleVideoDetail
}:Props) => {
  const uid = useUidStore();
  const [currVideoId, setCurrVideoId] = useState<string>("");
  const handleCurrVideoId = (id:string)=>{
      setCurrVideoId((prev)=> prev === id ? "" : id);
  };

  const mediaSrc = video || shorts;
  return (
    <div className={styles.videoCardWrapper}>
      <div className={styles.videoBox} onClick={() => handleVideoDetail(_id)}>
        <video
          src={`http://localhost:3000/${mediaSrc}`}
          className={styles.video}
        />
      </div>
      <div className={styles.videoCardWrapperInfo}>
        {avatar ? (
          <img
            src={`${import.meta.env.VITE_APP_BASE_SRC}/${avatar}`}
            alt="user-profile"
            className={styles.videoCardWrapperInfoProfile}
          />
        ) : (
          <div className={styles.undeProfile} />
        )}
        <div className={styles.videoCardWrapperInfoContent}>
          <p className={styles.videoCardWrapperInfoContentText}>{title}</p>
          <div className={styles.videoCardWrapperInfoContentAuthor}>
            <p className={styles.nickName}>{nickName}</p>
            <p className={styles.videoCardWrapperInfoAuthorText}>
              조회수: {views}회 • 2일 전
            </p>
          </div>
        </div>
        {uid === ownerId && (
          <VideoOptionMenu
            currVideoId={currVideoId}
            videoId={_id}
            handleCurrVideoId={handleCurrVideoId}
          />
        )}
      </div>
    </div>
  );
}

export default VideoCard;
