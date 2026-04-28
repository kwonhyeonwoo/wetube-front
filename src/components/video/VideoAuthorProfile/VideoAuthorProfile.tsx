import styles from "./css/index.module.css";
import usePostFollow from "@/hooks/mutations/auth/useFollowingMutation";
import { useUidStore } from "@/store/useUserStore";
import EmptyProfileIcon from "@/assets/common/unde-user.svg";
interface Props{
    nickName:string;
    followers:string[];
    ownerId:string;
    videoId:string;
    avatar?:string;
}
const VideoAuthorProfile = ({
  nickName,
  followers,
  avatar,
  ownerId,
  videoId,
}: Props) => {
  const uid = useUidStore();
  const { mutate } = usePostFollow(videoId ?? "");
  const isFollower = followers.includes(uid);
  const handleFollow = () => {
    if (ownerId) {
      mutate(ownerId);
    }
  };
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
        <p className={styles.subscribeCount}>구독자{followers.length}명</p>
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