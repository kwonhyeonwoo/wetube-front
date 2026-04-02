import type { IShort, IVideo } from "@/@types/video.type";
import styles from "./css/index.module.css";
import CategoriesContainer from "@/components/common/Categories/container/CategoriesContainer";
import Short from "@/components/Short/Short";
import VideoCard from "@/components/VideoCard/VideoCard";

interface Props {
  shorts:IShort[];
  videos:IVideo[];
  handleVideoDetail:(id:string)=>void;
}

const Home = ({ videos, shorts,handleVideoDetail }: Props) => {
  return (
    <main className={styles.homePage}>
      <CategoriesContainer />
      <section className={styles.videoSection}>
        {videos.map((item) => (
          <VideoCard
            key={item.id}
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
};

export default Home;
