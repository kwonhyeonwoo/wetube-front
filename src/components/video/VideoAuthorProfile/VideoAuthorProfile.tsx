import styles from "./css/index.module.css";
import EmptyProfileIcon from "@/assets/common/unde-user.svg";
interface Props {
  nickName: string;
  followersLength: number;
  ownerId: string;
  videoId: string;
  avatar?: string;
  uid: string;
  isFollower:boolean;
  handleFollow: () => void;
}
const VideoAuthorProfile = ({
  nickName,
  followersLength,
  avatar,
  ownerId,
  uid,
  isFollower,
  handleFollow,
}: Props) => {
  return (
    <div className={styles.authorBox}>
      <img
        className={styles.profile}
        src={
          avatar
            ? `${import.meta.env.VITE_APP_BASE_SRC}/${avatar}`
            : EmptyProfileIcon
        }
        alt="profile"
      />
      <div className={styles.authorNicknameBox}>
        <p className={styles.nickName}>{nickName}</p>
        <p className={styles.subscribeCount}>구독자{followersLength}명</p>
      </div>
      {ownerId !== uid &&  (
        <button className={`${styles.subscribeBtn} `} onClick={handleFollow}>
          {isFollower ? "팔로우해제":"팔로우"}
        </button>
      )}
    </div>
  );
};

export default VideoAuthorProfile