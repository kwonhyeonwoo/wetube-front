import type { ShortsResponse } from "@/interfaces/media.type";
import styles from "./css/index.module.css";

interface Props extends ShortsResponse{
    handleFollowAction :()=>void;
}

const ShortVideoCard = () => {
  return (
    <div className={styles.shortVideoCard}>
    <video className={styles.shortVideo} src=""></video>
    <div className={styles.authorWrapper}>
        <div className={styles.authorProfile}>
          <img src={""} alt="profile-image" className={styles.profile}/>
          <div className={styles.authorInfo}>
            <p className={styles.nickName}>닉네임</p>
            <button className={styles.followBtn}>팔로우</button>
          </div>
        </div>

        <div className={styles.descBox}>
          <p className={styles.shortTitle}>쇼츠 제목</p>
          <div className={styles.shortHashtags}>
            <span className={styles.hashtags}>#hashtags</span>
            <span className={styles.hashtags}>#hashtags</span>
            <span className={styles.hashtags}>#hashtags</span>
            <span className={styles.hashtags}>#hashtags</span>
          </div>
        </div>
    </div>
</div>
  )
}

export default ShortVideoCard