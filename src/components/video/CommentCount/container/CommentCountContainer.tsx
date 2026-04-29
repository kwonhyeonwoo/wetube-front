import { useState } from "react";
import styles from "../css/index.module.css";
import SortIcon from "@/assets/common/fillter.svg";

interface Props{
    cmtCount:number | undefined;
}

const CommentCountContainer = ({cmtCount}:Props) => {
    const [currSort, setCurrSort] = useState<{
      isOpen: boolean;
      currIdx: number;
    }>({
      isOpen: false,
      currIdx: 0,
    });
    const handleSortOpen = () => {
      setCurrSort((prev) => ({
        currIdx: prev.currIdx,
        isOpen: !prev.isOpen,
      }));
    };
    const handleSortClicked = (currIdx: number) => {
      setCurrSort((prev) => ({
        ...prev,
        isOpen: prev.isOpen,
        currIdx,
      }));
    };
  return (
    <div className={styles.commentCount}>
      <p className={styles.length}>댓글 {cmtCount}개</p>
      <div className={styles.sortBtnBox}>
        <button
          type="button"
          className={styles.sortBtn}
          onClick={handleSortOpen}
        >
          <img src={SortIcon} alt="sort-icon" />
          <p className={styles.sortByText}>정렬기준</p>
        </button>
        {currSort.isOpen && (
          <div className={styles.sortModal}>
            {btns.map(({ text, sub }, idx) => (
              <button
                className={`${styles.sortModalBtn} ${currSort.currIdx === idx && styles.activeModalBtn}`}
                onClick={() => handleSortClicked(idx)}
              >
                <p className={styles.sortModalText}>{text}</p>
                <p className={styles.sortModalSubText}>{sub}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentCountContainer;

const btns = [
  {
    text: "인기순",
    sub: "추천 댓글 표시",
  },
  {
    text: "최신순",
    sub: "스팸 가능성이 있는 댓글을 포함하여 최근 댓글 표시",
  },
];