import styles from "./css/index.module.css";

import LikeIcon from "@/assets/video/like.svg?react";
import UnLikeIcon from "@/assets/video/unlike.svg?react";

interface Props{
    commentCount:string;
    comment:string;
    profile?:string;
    nickName:string;
    date:string;
    cmtId:string;
    authorId:string;
}


// 댓글갯수, 댓글, 유저
const  VideoComment = ({
    commentCount,
    comment,
    profile,
    nickName,
    date,
    cmtId,
    authorId
}:Props) => {
  return (
    <div className={styles.videoComment}>
      <div className={styles.profile} />
      <div className={styles.cmtInfoBox}>
        <div className={styles.nickNameDate}>
          <p className={styles.nickName}>{nickName}</p>
          <p className={styles.date}>{date}</p>
        </div>
        <p className={styles.comment}>{comment}</p>
        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <LikeIcon width={14} height={14} />
            <span className={styles.likeCount}>12</span>
          </button>
          <button className={styles.actionBtn}>
            <UnLikeIcon width={14} height={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoComment