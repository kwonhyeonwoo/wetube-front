import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import StorageOverView from "@/components/video/StorageOverView/StorageOverView";
import StorageList from "@/components/video/StorageList/StorageList";
import { useGetStorageVideoQuery } from "@/hooks/queries/storage/useStorageQuery";

const StorageDetailContainer = () => {
  const {storageId} = useParams();
  const {data:storage} = useGetStorageVideoQuery(storageId ?? "");
  if(!storage){
    return <div>Loading...</div>
  }
  return (
    <main className={styles.storageDetailPage}>
      <StorageOverView
        title={storage.title}
        thumnail={storage.thumnail}
        length={storage.videos.length}
        content={storage.content}
        createdAt={storage.createdAt}
      />
      <section className={styles.storageListsSection}>
        <div className={styles.storageLists}>
          {storage.videos.map((item,idx)=>(
            <StorageList item={item} nickName={storage.onwer.nickName} number={idx+1} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default StorageDetailContainer;