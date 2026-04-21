import { formatDateWithTimezone } from "@/lib/lib";
import styles from "./css/index.module.css";

interface Props{
    _id:string;
    owner:{
      _id:string,
      nickName:string
    };
    comment:string;
    createdAt:Date;
}

const  VideoComment = ({
    comment,
    owner,
    createdAt,
}:Props) => {
  return (
    <div className={styles.videoComment}>
      <div className={styles.profile} />
      <div className={styles.cmtInfoBox}>
        <div className={styles.nickNameDate}>
          <p className={styles.nickName}>{owner.nickName}</p>
          <p className={styles.date}>{formatDateWithTimezone(String(createdAt))}</p>
        </div>
        <p className={styles.comment}>{comment}</p>
      </div>
    </div>
  );
}

export default VideoComment