import styles from "./css/index.module.css";
import EmptyIcon from "@/assets/video/empty-video.svg";

interface Props{
    text:string;
}
const Empty = ({text}:Props) => {
  return (
    <div className={styles.empty}>
        <img src={EmptyIcon} alt="empty-video-icon" />
        <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Empty