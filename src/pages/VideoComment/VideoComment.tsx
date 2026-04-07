import { useState } from "react";
import styles from "./css/index.module.css";
import SortIcon from "@/assets/common/fillter.svg";
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
const VideoComment = ({
    commentCount,
    comment,
    profile,
    nickName,
    date,
    cmtId,
    authorId
}:Props) => {
    const [isSort, setIsSort] = useState<boolean>(false);
    const handleSort = ()=>{
        setIsSort((prev)=>!prev)
    }
  return (
    <div className={styles.videoComment}>
        <div className={styles.commentCountBox}>
            <p className={styles.commentCount}>댓글 {commentCount}개</p>
           <div className={styles.sortByBtnBox}>
                <button type="button" className={styles.sortByBtn}>
                    <img src={SortIcon} alt="sort-icon" />
                    <p className={styles.sortByText}>정렬기준</p>
                </button>
                <div className={styles.sortModal}>
                     <button className={styles.sortModalBtn}>
                        <p className={styles.sortModalText}>인기순</p>
                        <p className={styles.sortModalSubText}>추천 댓글 표시</p>
                     </button>
                     <button>
                        <p className={styles.sortModalText}>최신순</p>
                        <p className={styles.sortModalSubText}>스팸 가능성이 있는 댓글을 포함하여 최근 댓글 표시</p>
                     </button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default VideoComment