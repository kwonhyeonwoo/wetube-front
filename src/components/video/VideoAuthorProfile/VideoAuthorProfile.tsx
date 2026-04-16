import styles from "./css/index.module.css";

interface Props{
    nickName:string;
}
const VideoAuthorProfile = ({nickName}:Props) => {
  return (
    <div className={styles.authorBox}>
      <div className={styles.authorTestBox} />
      <div className={styles.authorNicknameBox}>
        <p className={styles.nickName}>{nickName}</p>
        <p className={styles.subscribeCount}>구독자2.13명</p>
      </div>
      <button className={styles.subscribeBtn}>구독</button>
    </div>
  );
}

export default VideoAuthorProfile