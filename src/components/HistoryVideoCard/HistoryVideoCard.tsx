import styles from "./css/index.module.css";

interface Props{
    video:string;
    title:string;
    content:string;
    category:string;
    tags:string[];
    nickName:string;
    profile?:string;
    date:Date;
    id:string;
    views:string;
}

const HistoryVideoCard = ({
    video,
    title,
    content,
    category,
    tags,
    views,
    nickName,
    profile,
    date,
    id
}:Props) => {
  return (
    <div className={styles.historyVideoCard}>
      <div className={styles.videoBox}>
        <div className={styles.video}></div>
      </div>
      <div className={styles.videoInfoBox}>
        <div className={styles.titleBox}>
          <p className={styles.videoTitle}>{title}</p>
          <button  className={styles.deleteBtn}>삭제</button>
        </div>
        <p className={styles.commonText}>{nickName}</p>
        <p className={styles.commonText}>조회수 {views}회</p>
        <p className={styles.videoContent}>{content}</p>
      </div>
    </div>
  );
}

export default HistoryVideoCard