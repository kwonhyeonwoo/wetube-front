import styles from "./css/index.module.css";

interface Props {
  video: string;
  title: string;
  meta: {
    views: number;
  };
  createdAt: Date;
  type: "video" | "shorts";
}

const ProfileVideoCard = ({ video, title, meta, createdAt, type }: Props) => {
  return (
    <div className={styles.profileVideoCard}>
      <div className={styles.videoBox}>
        <div
          className={styles.videoTest}
          style={{
            height: type === "shorts" ? "311px" : "118px",
          }}
        />
      </div>
      <p className={styles.videoTitle}>{title}</p>
      <div className={styles.metaBox}>{meta.views}회 • 2024-11-11</div>
    </div>
  );
};

export default ProfileVideoCard;
