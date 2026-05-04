import styles from "./css/index.module.css";
import CloseIcon from "@/assets/common/cancel.svg?react";
import { getRelativeTime } from "@/lib/lib";
import ShortCmtInputContainer from "../ShortCmtInput/container/ShortCmtInputContainer";
import type { ShortsCmtResponse } from "@/interfaces/shorts.type";
import ShortCommentCard from "../ShortCommentCard/ShortCommentCard";
interface Props {
  isCmtToggle: boolean;
  comments: ShortsCmtResponse[];
  handleAction: (type: "comment") => void;
}

const ShortCmtToggle = ({
  isCmtToggle,
  comments,
  handleAction,
}: Props) => {
  return (
    <div
      className={isCmtToggle ? styles.activeShortToggle : styles.shortCmtToggle}
    >
      <div className={styles.cmtHeader}>
        <span className={styles.cmtCount}>댓글: {comments.length}</span>
        <button
          className={styles.closeBtn}
          onClick={() => handleAction("comment")}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={styles.cmtContents}>
        {comments.map((item) => (
            <ShortCommentCard comment={item} key={item._id}/>
        ))}
      </div>
      <ShortCmtInputContainer />
    </div>
  );
};

export default ShortCmtToggle;
