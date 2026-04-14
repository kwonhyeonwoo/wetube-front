import StorageVideoCard from "@/components/videoStorage/StorageVideoCard/StorageVideoCard";
import styles from "../css/index.module.css";
import StorageCreateBox from "@/components/videoStorage/StorageCreateBox/StorageCreateBox";
import { useNavigate,useParams } from "react-router-dom";
import { useGetStorageQuery } from "@/hooks/queries/storage/useStorageQuery";
const VideoStorageContainer = () => {
    const {id:userId} = useParams();
    const {data:storages} = useGetStorageQuery(userId ?? "");
  
    const navigate = useNavigate();
    const handleNavigate = (storageId:string)=>{
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
        <StorageCreateBox length={storages?.length}/>
        <div className={styles.storageVideos}>
          {storages?.map((item) => (
            <StorageVideoCard
                {...item}
                length={item.videos.length}
                key={item._id}
                handleNavigate={handleNavigate}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default VideoStorageContainer;