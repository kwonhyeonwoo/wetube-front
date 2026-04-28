import styles from "./css/index.module.css";
import { useNavigate } from "react-router-dom";
import VideoCard from "@/components/video/VideoCard/VideoCard";
import { useUidStore } from "@/store/useUserStore";
import { useGetSavedVideos } from "@/hooks/queries/auth/useGetUserSavedVideos";
import { useCallback } from "react";

const VideoStoragePage = () => {
    const navigate = useNavigate();
    const uid = useUidStore()
    const { data: storageVideos } = useGetSavedVideos(uid);  
    const handleVideoDetail =useCallback(
      (id:string) => {
        return navigate(`/video/${id}`)
      },
      [],
    )
    
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
          {storageVideos &&
            storageVideos?.map((item) => (
              <VideoCard
                {...item}
                handleVideoDetail={handleVideoDetail}
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