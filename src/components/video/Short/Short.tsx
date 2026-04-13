import MediaTabs from "../MediaTabs/MediaTabs";import styles from "./css/index.module.css";

interface Props{
    title:string;
    meta:{
      views:number;
      rating:number;
    };
    shorts:string;
    shortId:string;
}

const Short = ({title,meta,shorts,shortId}:Props) => {
  return (
    <div className={styles.shortVideoCard}>
      <div className={styles.shortsVideoBox}>
        <video 
          src={`http://localhost:3000/${shorts}`} 
          className={styles.shortVideoCardVideo} 
          controls
        />
      </div>
      <div className={styles.shortVideoCardText}>
        <p className={styles.shortVideoCardTextTitle}>{title}</p>
        <p className={styles.shortVideoCardTextViews}>
          조회수 {String(meta.views) ? String(meta?.views) : "0"}회
        </p>
      </div>
    </div>
  );
}

export default Short