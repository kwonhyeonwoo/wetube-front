import styles from "./css/index.module.css";

interface Props{
    title:string;
    views:string;
    shortId:string;
}

const Short = ({title,views,shortId}:Props) => {
  return (
    <div className={styles.shortVideoCard}>
      <div className={styles.shortVideoCardVideo} />
      <div className={styles.shortVideoCardText}>
        <p className={styles.shortVideoCardTextTitle}>{title}</p>
        <p className={styles.shortVideoCardTextViews}>조회수 {views}회</p>
      </div>
    </div>
  );
}

export default Short