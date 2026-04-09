import styles from "../css/index.module.css";
import type { IShort} from "@/@types/video.type";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesContainer from "@/components/common/Categories/container/CategoriesContainer";
import VideoCard from "@/components/video/VideoCard/VideoCard";
import Short from "@/components/video/Short/Short";
import { useGetVideos } from "@/hooks/queries/video/useGetVideos";

const HomeContainer = () => {
  const navigate = useNavigate();
  const {data:videos} = useGetVideos();
  const handleVideoDetail = useCallback(
    (id:string) => {
      navigate(`/video/${id}`)
    },
    [navigate],
  )
  
  return (
    <main className={styles.homePage}>
      <CategoriesContainer />
      <section className={styles.videoSection}>
        {videos?.map((item) => (
          <VideoCard
            key={item._id}
            {...item}
            handleVideoDetail={handleVideoDetail}
          />
        ))}
      </section>
      <section className={styles.shortSection}>
        <div className={styles.shortTitleBox}>
          <img 
            src="/assets/short/short.png"
            srcSet="
              /assets/short/short@2x.png 2x,
              /assets/short/short@3x.png 3x
            " 
            alt="short" 
          />
          <h2 className={styles.shortTitle}>Shorts</h2>
        </div>
        <div className={styles.shortLists}>
          {shorts.map((item)=>(
            <Short 
              key={item.id} 
              title={item.title} 
              views={item.views} 
              shortId={item.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomeContainer;
const shorts: IShort[] = [
  {
    id: "j1klj2kl",
    video: "12345",
    title: "오늘의 메이크업 룩 #GRWM",
    views: "12",
  },
  {
    id: "j1klj2kl",
    video: "12345",
    title: "오늘의 메이크업 룩 #GRWM",
    views: "12",
  },
  {
    id: "j1klj2kl",
    video: "12345",
    title: "오늘의 메이크업 룩 #GRWM",
    views: "12",
  },
  {
    id: "j1klj2kl",
    video: "12345",
    title: "오늘의 메이크업 룩 #GRWM",
    views: "12",
  },

];