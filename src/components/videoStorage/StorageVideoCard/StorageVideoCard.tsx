import styles from "./css/index.module.css";
import MenubarIcon from "@/assets/common/menu-bar.svg?react";
import type { VideoResponse } from "@/interfaces/media.type";

interface Props{
    title:string;
    createdAt:Date;
    length:number;
    _id:string;
    content:string;
    thumnail:string;
    videos:VideoResponse[]
    handleNavigate:(storageId:string)=>void;
}

const StorageVideoCard = ({
  title,
  createdAt,
  length,
  _id,
  videos,
  thumnail,
  content,
  handleNavigate,
}: Props) => {
  console.log('thumnail',thumnail)
  return (
    <div
      className={styles.storageVideoCard}
      onClick={() => handleNavigate(_id)}
    >
      <div className={styles.video}>
        <img src={`http://localhost:3000/${thumnail}`} alt="thumnail" />
      </div>
      <div className={styles.titleBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subText}>최근 업데이트: {2}주전</p>
      </div>
      <div className={styles.overlayBox}>
        <p className={styles.videoCount}>{String(length)}</p>
        <MenubarIcon />
      </div>
    </div>
  );
};

export default StorageVideoCard