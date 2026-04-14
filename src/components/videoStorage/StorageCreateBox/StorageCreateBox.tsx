import { Link } from "react-router-dom";
import styles from "./css/index.module.css";

interface Props{
  length:number | undefined;
}
const StorageCreateBox = ({length}:Props) => {
  return (
    <div className={styles.storageCreateBox}>
      <div className={styles.storageTitleBox}>
        <p className={styles.storageTitle}>모든 재생목록</p>
        <p className={styles.storageSub}>총{String(length)}개의 재생목록</p>
      </div>
      <Link to={"/user/storage/write"} className={styles.storageBtn}>
        + 새 재생목록 만들기
      </Link>
    </div>
  );
}

export default StorageCreateBox