import styles from "./css/index.module.css";
import EmptyProfile from "@/assets/common/unde-user.svg";
import { useUidStore } from "@/store/useUserStore";
import { Link } from "react-router-dom";
import { getRelativeTime } from "@/lib/lib";
import VideoOptionMenuContainer from "@/components/video/VideoOptionMenu/container/VideoOptionMenuContainer";
interface Props {
  _id: string;
  title: string;
  meta: {
    views: number;
  };
  ownerId: string;
  avatar?: string;
  nickName?: string;
  video?: string;
  shorts?: string;
  createdAt: Date;
  handleVideoDetail: (id: string) => void;
}

const VideoCard = ({
  video,
  shorts,
  _id,
  meta: { views },
  ownerId,
  avatar,
  title,
  nickName,
  createdAt,
  handleVideoDetail,
}: Props) => {
  const uid = useUidStore();
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
        <Link to={`/user/${ownerId}/featured`}>
          <img
            src={
              avatar
                ? `${import.meta.env.VITE_APP_BASE_SRC}/${avatar}`
                : EmptyProfile
            }
            alt="user-profile"
            className={styles.userProfile}
          />
        </Link>
        <div className={styles.videoCardWrapperInfoContent}>
          <p className={styles.videoCardWrapperInfoContentText}>{title}</p>
          <div className={styles.videoCardWrapperInfoContentAuthor}>
            <p className={styles.nickName}>{nickName}</p>
            <p className={styles.videoCardWrapperInfoAuthorText}>
              조회수: {views}회 • {getRelativeTime(createdAt)}
            </p>
          </div>
        </div>
        {uid === ownerId && <VideoOptionMenuContainer videoId={_id} />}
      </div>
    </div>
  );
};

export default VideoCard;
