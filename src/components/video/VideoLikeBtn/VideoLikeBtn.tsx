import styles from "./css/index.module.css";
import UnLikeIcon from "@/assets/video/unlike.svg";
import LikeIcon from "@/assets/video/like.svg";

interface Props{
    likeCount:number;
    handleLikeAction:()=>void;
    handleUnLikeAction:()=>void;
}

const VideoLikeBtn = () => {
  return (
    <div className={styles.actionBtnBox}>
      <button className={styles.actionBtn}>
        <img src={LikeIcon} alt="like" />
        <span className={styles.btnText}>12K</span>
      </button>
      <button className={styles.actionBtn}>
        <img src={UnLikeIcon} alt="un-like" />
      </button>
    </div>
  );
}

export default VideoLikeBtn