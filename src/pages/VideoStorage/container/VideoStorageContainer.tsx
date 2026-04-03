import StorageVideoCard from "@/components/videoStorage/StorageVideoCard/StorageVideoCard";
import styles from "../css/index.module.css";
import StorageCreateBox from "@/components/videoStorage/StorageCreateBox/StorageCreateBox";
import { useNavigate } from "react-router-dom";
import type { IStorage } from "@/interfaces/storage.type";
const VideoStorageContainer = () => {
    const navigate = useNavigate();
    
    const handleNavigate = (userId:string, storageId:string)=>{
        navigate(`/user/${userId}/storage/${storageId}`)
    }
  return (
    <main className={styles.videoStoragePage}>
      <section className={styles.titleBox}>
        <h2 className={styles.title}>보관함</h2>
        <p className={styles.subText}>
          저장된 콘텐츠와 시청기록, 재생목록을 한 곳에서 관리하세요.
        </p>
      </section>
      <section className={styles.storageSection}>
        <StorageCreateBox />
        <div className={styles.storageVideos}>
          {storageArr.map((item, idx) => (
            <StorageVideoCard
                {...item}
                key={item.id}
                handleNavigate={handleNavigate}
                userId="1235"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default VideoStorageContainer;

const storageArr : IStorage[]= [
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
  },
];