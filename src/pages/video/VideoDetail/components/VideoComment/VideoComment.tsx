import styles from "./css/index.module.css";
import { formatDateWithTimezone } from "@/lib/lib";
import EmptyProfileIcon from "@/assets/common/unde-user.svg";
interface Props{
    _id:string;
    owner:{
      _id:string,
      nickName:string
      avatar?:string;
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
      <img
        className={styles.profile}
        src={
          owner.avatar
            ? `${import.meta.env.VITE_APP_BASE_SRC}/${owner.avatar}`
            : EmptyProfileIcon
        }
      />
      <div className={styles.cmtInfoBox}>
        <div className={styles.nickNameDate}>
          <p className={styles.nickName}>{owner.nickName}</p>
          <p className={styles.date}>
            {formatDateWithTimezone(String(createdAt))}
          </p>
        </div>
        <p className={styles.comment}>{comment}</p>
      </div>
    </div>
  );
}

export default VideoComment