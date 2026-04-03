import styles from "./css/index.module.css";
import testImg from  "@/assets/test/video-test.png"
import MenubarIcon from "@/assets/common/menu-bar.svg?react";

interface Props{
    title:string;
    date:string;
    count:string;
    id:string;
    userId:string;
    handleNavigate:(userId:string, storageId:string)=>void;
}

const StorageVideoCard = ({
  title,
  date,
  count,
  userId,
  id,
  handleNavigate,
}: Props) => {
  return (
    <div
      className={styles.storageVideoCard}
      onClick={() => handleNavigate("1234", id)}
    >
      {/* <video/> 나중에 비디오로 바꿔야함 */}
      <div className={styles.video}>
        <img src={testImg} alt="test" />
      </div>
      <div className={styles.titleBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subText}>최근 업데이트: {date}주전</p>
      </div>
      <div className={styles.overlayBox}>
        <p className={styles.videoCount}>{count}</p>
        <MenubarIcon />
      </div>
    </div>
  );
};

export default StorageVideoCard