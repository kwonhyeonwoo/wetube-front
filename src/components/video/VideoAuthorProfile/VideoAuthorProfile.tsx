import usePostFollow from "@/hooks/queries/auth/usePostFollow";
import styles from "./css/index.module.css";
import useUserStore from "@/store/useUserStore";

interface Props{
    videoId:string;
    videoOwnerId:string | undefined;
    followers:string[] | undefined;
    nickName:string;
}
const VideoAuthorProfile = ({nickName,followers,videoOwnerId,videoId}:Props) => {
  const {user:{uid}} = useUserStore();
  const {mutate} = usePostFollow(videoId ?? "");
  const isFollower = followers?.includes(uid) ?? false; 
  const handleFollow = ()=>{
    if(videoOwnerId){
      mutate(videoOwnerId)
    }
  };
  return (
    <div className={styles.authorBox}>
      <div className={styles.authorTestBox} />
      <div className={styles.authorNicknameBox}>
        <p className={styles.nickName}>{nickName}</p>
        <p className={styles.subscribeCount}>구독자2.13명</p>
      </div>
      {videoOwnerId !== uid && (
        <button 
          className={`${styles.subscribeBtn} ${isFollower ? styles.activeFollow : ""}`} 
          onClick={handleFollow}
        >
            {isFollower ? "팔로우 취소" : "팔로우"}
        </button>
      )}
    </div>
  );
}

export default VideoAuthorProfile