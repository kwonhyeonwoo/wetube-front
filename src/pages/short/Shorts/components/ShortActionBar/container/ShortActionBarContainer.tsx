import styles from "../css/index.module.css";
import LikeIcon from "@/assets/short/like.svg?react";
import CommentIcon from "@/assets/short/comment.svg?react";
import ShareIcon from "@/assets/short/share.svg?react";
import SaveIcon from "@/assets/short/save.svg?react";
import { useCallback, useState, type ElementType } from "react";
import ShortCmtToggle from "../../ShortCmtToggle/ShortCmtToggle";
import { useGetShortCmtQuery } from "@/hooks/queries/shortsCmt/useGetShortCmtQuery";
import { useParams } from "react-router-dom";
const ShortActionBarContainer = () => {
  const [isCmtToggle, setIsCmtToggle] = useState<boolean>(false);
  const {shortsId} = useParams();
  const { data :comments} = useGetShortCmtQuery(shortsId ?? "");
  const handleAction = useCallback(
    (type: "like" | "comment" | "share" | "save") => {
      if (type === "like") {
        console.log("like");
      } else if (type === "comment") {
        setIsCmtToggle((prev) => !prev);
      } else if (type === "share") {
        console.log("share");
      } else if (type === "save") {
        console.log("save");
      }
    },
    [],
  );
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
      <div
        className={
          isCmtToggle ? styles.activeToggleBox : styles.shortCmtToggleBox
        }
      >
        {isCmtToggle && (
          <ShortCmtToggle
            comments={comments ?? []}
            isCmtToggle={isCmtToggle}
            handleAction={handleAction}
          />
        )}
      </div>
    </div>
  );
};

export default ShortActionBarContainer;
