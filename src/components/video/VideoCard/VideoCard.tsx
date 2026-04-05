import type { IVideo } from "@/@types/video.type";
import styles from "./css/index.module.css";

interface Props extends IVideo {
  handleVideoDetail:(id:string)=>void;
}

const VideoCard = ({
    video,
    id,
    profile,
    content,
    title,
    nickName,
    views,
    date,
    handleVideoDetail
}:Props) => {
  return (
    <div className={styles.videoCardWrapper} onClick={()=>handleVideoDetail(id)}>
      {/* <video /> */}
      <div className={styles.testVideo} />
      <div className={styles.videoCardWrapperInfo}>
       {profile ? (
         <img
         src={profile}
         alt="user-profile"
         className={styles.videoCardWrapperInfoProfile}
       />
       ):(
        <div className={styles.undeProfile}/>
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