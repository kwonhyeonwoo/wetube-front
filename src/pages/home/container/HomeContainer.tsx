import styles from "../css/index.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesContainer from "@/components/common/Categories/container/CategoriesContainer";
import VideoCard from "@/components/video/VideoCard/VideoCard";
import Short from "@/components/video/Short/Short";
import { useGetVideos } from "@/hooks/queries/video/useGetVideos";
import { useGetShorts } from "@/hooks/queries/short/useShortsQuery";

const HomeContainer = () => {
  const navigate = useNavigate();
  const {data:videos} = useGetVideos();
  const {data:shorts} = useGetShorts();
  const handleVideoDetail = useCallback(
    (id:string) => {
      navigate(`/video/${id}`)
    },
    [navigate],
  );

  console.log('shorts',shorts)
  
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
          {shorts?.map((item)=>(
            <Short 
              shorts={item.shorts}
              key={item._id} 
              title={item.title} 
              meta={item.meta} 
              shortId={item._id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomeContainer;
