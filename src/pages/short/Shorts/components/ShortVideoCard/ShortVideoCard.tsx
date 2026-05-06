import type { ShortsResponse } from "@/interfaces/media.type";
import styles from "./css/index.module.css";
import EmptyProfile from "@/assets/common/unde-user.svg";
interface Props extends ShortsResponse {
  handleFollowAction: () => void;
}

const ShortVideoCard = ({
  shorts,
  owner,
  hashtags,
  title,
  handleFollowAction,
}: Props) => {
  return (
    <div className={styles.shortVideoCard}>
      <video
        src={`${import.meta.env.VITE_APP_BASE_SRC}/${shorts}`}
        className={styles.shortVideo}
      />
      <div className={styles.overlay}></div>

      <div className={styles.authorWrapper}>
        <div className={styles.authorProfile}>
          <img
            src={
              owner.avatar
                ? `${import.meta.env.VITE_APP_BASE_SRC}/${owner.avatar}`
                : EmptyProfile
            }
            alt="profile-image"
            className={styles.profile}
          />
          <div className={styles.authorInfo}>
            <p className={styles.nickName}>{owner.nickName}</p>
            <button className={styles.followBtn} onClick={handleFollowAction}>
              팔로우
            </button>
          </div>
        </div>

        <div className={styles.descBox}>
          <p className={styles.shortTitle}>{title}</p>
          <div className={styles.shortHashtags}>
            {hashtags.map((item) => (
              <span key={item} className={styles.hashtag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortVideoCard;
