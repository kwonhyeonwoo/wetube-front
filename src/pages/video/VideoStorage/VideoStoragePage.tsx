import styles from "./css/index.module.css";
import { useNavigate,useParams } from "react-router-dom";
import { useGetSaveVideo } from "@/hooks/queries/video/useGetSaveVideo";
import useUserStore from "@/store/useUserStore";
import VideoCard from "@/components/video/VideoCard/VideoCard";

const VideoStoragePage = () => {
    const {id:userId} = useParams();
    const {user:{uid}} = useUserStore()
    const {data:storageVideos} = useGetSaveVideo(uid)  
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
        <div className={styles.storageVideos}>
            {storageVideos?.map((item)=>(
              <VideoCard 
                {...item} 
                handleVideoDetail={()=>{}} 
                ownerId={uid} 
                nickName={item.owner.nickName}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

export default VideoStoragePage;