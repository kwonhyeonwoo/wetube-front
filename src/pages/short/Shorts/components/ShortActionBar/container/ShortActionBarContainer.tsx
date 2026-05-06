import styles from "../css/index.module.css";
import LikeIcon from "@/assets/short/like.svg?react";
import CommentIcon from "@/assets/short/comment.svg?react";
import ShareIcon from "@/assets/short/share.svg?react";
import SaveIcon from "@/assets/short/save.svg?react";
import { useCallback, useState } from "react";
import ShortCmtToggle from "../../ShortCmtToggle/ShortCmtToggle";
import { useGetShortCmtQuery } from "@/hooks/queries/shortsCmt/useGetShortCmtQuery";
import { useParams } from "react-router-dom";
import { usePostShortLikeMutation } from "@/hooks/mutations/short/usePostShortLikeMutation";
import { useUrlCopy } from "@/hooks/useUrlCopy";
import { usePostShortsSave } from "@/hooks/mutations/short/usePostShortsSave";
import type { SvgIcon } from "@/interfaces/common.type";

interface Props {
  commentCount?: number;
  likeCount?: number;
  isShortSaved: boolean;
  isLiked:boolean;
}
const ShortActionBarContainer = ({
  commentCount,
  likeCount,
  isShortSaved,
  isLiked,
}: Props) => {
  const [isCmtToggle, setIsCmtToggle] = useState<boolean>(false);
  const { shortsId } = useParams();
  const { data: comments } = useGetShortCmtQuery(shortsId ?? "");
  const { mutate: saveShorts } = usePostShortsSave(shortsId ?? "");
  const { handleCopyUrl } = useUrlCopy();
  const { mutate: shortsLike } = usePostShortLikeMutation(shortsId ?? "");
  const handleAction = useCallback(
    (type: "like" | "comment" | "share" | "save") => {
      if (type === "like") {
        shortsLike(shortsId ?? "");
      } else if (type === "comment") {
        setIsCmtToggle((prev) => !prev);
      } else if (type === "share") {
        handleCopyUrl();
      } else if (type === "save") {
        saveShorts(shortsId ?? "");
      }
    },
    [shortsLike, handleCopyUrl],
  );
  const actions: {
    icon: SvgIcon | string;
    text: string;
    isActive?: boolean;
    type: "like" | "comment" | "share" | "save";
  }[] = [
    {
      icon: LikeIcon,
      text: `${String(likeCount)}개`,
      isActive: isLiked,
      type: "like",
    },
    {
      icon: CommentIcon,
      text: `${String(commentCount)}개`,
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
      isActive: isShortSaved,
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
              <action.icon
                className={action.isActive ? styles.activeSvg : ""}
              />
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
