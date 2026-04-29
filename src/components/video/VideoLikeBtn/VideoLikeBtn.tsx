import styles from "./css/index.module.css";
import LikeIcon from "@/assets/video/like.svg?react";

interface Props {
  likeCount: number | undefined;
  isLike:boolean | undefined;
  handleVideoLike: () => void;
}

const VideoLikeBtn = ({likeCount, isLike,handleVideoLike }: Props) => {
  return (
    <div className={styles.actionBtnBox}>
      <button className={styles.actionBtn} onClick={handleVideoLike}>
        <LikeIcon
          style={{
            color: isLike ? "#EB0000" : "black", // 좋아요 상태에 따라 색상 변경
          }}
        />
        <span className={styles.btnText}>{likeCount}개</span>
      </button>
    </div>
  );
};

export default VideoLikeBtn