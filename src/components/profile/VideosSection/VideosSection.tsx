import VideoCard from "@/components/video/VideoCard/VideoCard";
import styles from "./css/index.module.css";
import type { IVideo } from "@/@types/video.type";
import GrayArrow from "@/assets/common/gray-right-arrow.svg"
import { Link } from "react-router-dom";

interface Props{
  videos:IVideo[];
  text:string;
  handleVideoDetail:(id:string)=>void;
}

const VideosSection = ({videos,text,}:Props) => {
  return (
    <section className={styles.videoSection}>
        <div className={styles.videoTitleBox}>
          <h2 className={styles.videoTitle}>{text}</h2>
          <Link to={'/user/12345/videos'} className={styles.allVideoBtn}>
            <span>전체보기</span>
            <img src={GrayArrow} alt="" />
          </Link>
        </div>
        <div className={styles.videoGrid}>
          {videos?.map((item)=>(
            <VideoCard 
              key={item.id} 
              {...item} 
              handleVideoDetail={()=>{}}
            />
          ))}
        </div>
      </section>
  )
}

export default VideosSection