import styles from "./css/index.module.css";

interface Props {
  video: string;
  title: string;
  meta: {
    views: number;
  };
  createdAt: Date;
  height?: string;
}

const ProfileVideoCard = ({ video, title, meta, createdAt, height }: Props) => {
  return (
    <div className={styles.profileVideoCard}>
      <div className={styles.videoBox}>
        <video
          src={`${import.meta.env.VITE_APP_BASE_SRC}/${video}`}
          className={styles.video}
          style={{
            height: height ? height : "118px",
          }}
        />
      </div>
      <p className={styles.videoTitle}>{title}</p>
      <div className={styles.metaBox}>{meta.views}회 • 2024-11-11</div>
    </div>
  );
};

export default ProfileVideoCard;
