import type { ShortsCmtResponse } from "@/interfaces/shorts.type";
import styles from "./css/index.module.css";
import EmptyProfileIcon from "@/assets/common/unde-user.svg";
import { getRelativeTime } from "@/lib/lib";

interface Props{
    comment:ShortsCmtResponse;
}
const ShortCommentCard = ({comment:{
    owner,
    comment,
    createdAt
}}:Props) => {
  return (
    <div className={styles.cmtContent}>
      <img
        className={styles.profile}
        src={
          owner?.avatar
            ? `${import.meta.env.VITE_APP_BASE_SRC}/${owner.avatar}`
            : EmptyProfileIcon
        }
        alt="profile"
      />
      <div className={styles.cmtContentRight}>
        <div className={styles.authorInfo}>
          <span className={styles.nickName}>{owner.nickName}</span>
          <span className={styles.date}>{getRelativeTime(createdAt)}</span>
        </div>
        <p className={styles.comment}>{comment}</p>
      </div>
    </div>
  );
}

export default ShortCommentCard