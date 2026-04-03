import StorageVideoCard from "@/components/videoStorage/StorageVideoCard/StorageVideoCard";
import styles from "../css/index.module.css";
import StorageCreateBox from "@/components/videoStorage/StorageCreateBox/StorageCreateBox";
import { useNavigate } from "react-router-dom";
import type { IStorage, IStorageNavi } from "@/interfaces/storage.type";
const VideoStorageContainer = () => {
    const navigate = useNavigate();
    
    const handleNavigate = (data:IStorageNavi)=>{
        navigate(`/user/${data.userId}/storage/${data.item.id}`,{
          state:data.item
        })
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
    content:"콘텐트 내용은 뭐 아무거나 할려고하는데 왜이리 귀찮고 존나 귀찮다..하 진짜 너무 귀찮은데 ?ㅋㅋㅋㅋ하하하하하"
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
    content:"콘텐트 내용은 뭐 아무거나 할려고하는데 왜이리 귀찮고 존나 귀찮다..하 진짜 너무 귀찮은데 ?ㅋㅋㅋㅋ하하하하하"
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
    content:"콘텐트 내용은 뭐 아무거나 할려고하는데 왜이리 귀찮고 존나 귀찮다..하 진짜 너무 귀찮은데 ?ㅋㅋㅋㅋ하하하하하"
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
    content:"콘텐트 내용은 뭐 아무거나 할려고하는데 왜이리 귀찮고 존나 귀찮다..하 진짜 너무 귀찮은데 ?ㅋㅋㅋㅋ하하하하하"
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
    content:"콘텐트 내용은 뭐 아무거나 할려고하는데 왜이리 귀찮고 존나 귀찮다..하 진짜 너무 귀찮은데 ?ㅋㅋㅋㅋ하하하하하"
  },
  {
    id: "1234",
    title: "디자인 영감",
    date: "12",
    count: "122",
    content:"콘텐트 내용은 뭐 아무거나 할려고하는데 왜이리 귀찮고 존나 귀찮다..하 진짜 너무 귀찮은데 ?ㅋㅋㅋㅋ하하하하하"
  },
];