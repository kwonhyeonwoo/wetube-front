import styles from "./css/index.module.css";
import type { VideoResponse } from "@/interfaces/video.type";

interface Props extends VideoResponse {
  handleVideoDetail:(id:string)=>void;
}

const VideoCard = ({
    video,
    _id,
    meta:{
      views,
      rating,
    },
    profile,
    content,
    title,
    nickName,
    handleVideoDetail
}:Props) => {
  return (
    <div
      className={styles.videoCardWrapper}
      onClick={() => handleVideoDetail(_id)}
    >
      <div className={styles.videoBox}>
        <video src={`http://localhost:3000/${video}`} className={styles.video} />
      </div>
      <div className={styles.videoCardWrapperInfo}>
        {profile ? (
          <img
            src={profile}
            alt="user-profile"
            className={styles.videoCardWrapperInfoProfile}
          />
        ) : (
          <div className={styles.undeProfile} />
        )}
        <div className={styles.videoCardWrapperInfoContent}>
          <p className={styles.videoCardWrapperInfoContentText}>{title}</p>
          <div className={styles.videoCardWrapperInfoContentAuthor}>
            <p className={styles.videoCardWrapperInfoAuthorText}>{nickName}</p>
            <p className={styles.videoCardWrapperInfoAuthorText}>
              조회수: {views}회 • 2일 전
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard