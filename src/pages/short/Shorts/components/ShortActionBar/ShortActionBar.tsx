import styles from "./css/index.module.css";
import LikeIcon from "@/assets/short/like.svg?react";
import CommentIcon from "@/assets/short/comment.svg?react";
import ShareIcon from "@/assets/short/share.svg?react";
import SaveIcon from "@/assets/short/save.svg?react";
import type { ElementType } from "react";
import ShortCmtToggle from "../ShortCmtToggle/ShortCmtToggle";

interface Props {
  isCmtToggle: boolean;
  handleAction: (type: "like" | "comment" | "share" | "save") => void;
}
const ShortActionBar = ({ isCmtToggle, handleAction }: Props) => {
  const actions: {
    icon: ElementType | string;
    text: string;
    type: "like" | "comment" | "share" | "save";
  }[] = [
    {
      icon: LikeIcon,
      text: "12",
      type: "like",
    },
    {
      icon: CommentIcon,
      text: "12",
      type: "comment",
    },
    {
      icon: ShareIcon,
      text: "공유",
      type: "share",
    },
    {
      icon: SaveIcon,
      text: "저장",
      type: "save",
    },
  ];
  return (
    <div className={styles.shortActionBar}>
      <div className={styles.shortActionItems}>
        {actions.map((action) => (
          <div key={action.text} className={styles.shortActionItem}>
            <button
              className={styles.circle}
              onClick={() => handleAction(action.type)}
            >
              <action.icon />
            </button>
            <span className={styles.text}>{action.text}</span>
          </div>
        ))}
      </div>
      <div className={styles.shortCmtToggle}>
        {isCmtToggle && (
          <ShortCmtToggle
            nickName="테스트"
            createdAt={new Date()}
            cmtCount={12}
          />
        )}
      </div>
    </div>
  );
};

export default ShortActionBar;
