import styles from "./css/index.module.css";
import CloseIcon from "@/assets/common/cancel.svg?react";
import EmptyProfileIcon from "@/assets/common/unde-user.svg";
import { getRelativeTime } from "@/lib/lib";
interface Props {
  cmtCount: number;
  avatar?: string;
  nickName: string;
  createdAt: Date;
}

const ShortCmtToggle = ({ avatar, nickName, createdAt, cmtCount }: Props) => {
  return (
    <div className={styles.shortCmtToggle}>
      <div className={styles.cmtHeader}>
        <span className={styles.cmtCount}>댓글: {cmtCount}</span>
        <button className={styles.closeBtn}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.cmtContents}>
        <div className={styles.cmtContent}>
          <img
            className={styles.profile}
            src={
              avatar
                ? `${import.meta.env.VITE_APP_BASE_SRC}/${avatar}`
                : EmptyProfileIcon
            }
            alt="profile"
          />
          <div className={styles.cmtContentRight}>
            <div className={styles.authorInfo}>
              <span className={styles.nickName}>{nickName}</span>
              <span className={styles.date}>{getRelativeTime(createdAt)}</span>
            </div>
            <p className={styles.comment}>{"아녕아하다"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortCmtToggle;
