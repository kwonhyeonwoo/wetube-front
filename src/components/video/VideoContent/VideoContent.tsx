import { useState } from "react";
import styles from "./css/index.module.css";

interface Props{
    content:string;
    views:string;
    date:string;
    tags:string[];
}

const VideoContent = ({
    content,
    views,
    date,
    tags
}:Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpenContent = ()=>{
        setIsOpen((prev)=>!prev)
    }
  return (
    <div className={
        `${styles.videoContentWrapper} ${isOpen && styles.activeContent}`
    }>
        {/* 조회수, 시간, 태그 */}
        <div className={styles.metaBox}>
            <div className={styles.boldTextBox}>
                <p className={styles.boldText}>{views}</p>
                <p className={styles.boldText}>{date}</p>
            </div>
            <div className={styles.tagBox}>
                {tags.map((tag)=><p className={styles.tagText}>{tag}</p>)}
            </div>
        </div>
        <p className={styles.content}>
            {content}
        </p>
        <div className={styles.seeMoreBtnBox}>
            <button className={styles.seeMoreBtn} onClick={handleOpenContent}>더 보기</button>
        </div>
    </div>
  )
}

export default VideoContent