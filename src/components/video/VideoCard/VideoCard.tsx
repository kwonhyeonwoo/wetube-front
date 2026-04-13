import styles from "./css/index.module.css";

interface Props {
  _id: string;
  title: string;
  content: string;
  meta: {
      views: number;
      rating: number;
  };
  profile?: string;
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
  profile,
  content,
  title,
  nickName,
  handleVideoDetail
}:Props) => {
  const mediaSrc = video || shorts;
  return (
    <div
      className={styles.videoCardWrapper}
      onClick={() => handleVideoDetail(_id)}
    >
      <div className={styles.videoBox}>
        <video src={`http://localhost:3000/${mediaSrc}`} className={styles.video} />
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