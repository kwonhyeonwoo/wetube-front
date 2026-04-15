import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../css/index.module.css";
import { useGetSearchVideos } from "@/hooks/queries/video/useGetVideoQuery";
import VideoCard from "@/components/video/VideoCard/VideoCard";
import { useCallback } from "react";
const SearchContainer = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || ""
    const {data:videos, isLoading} = useGetSearchVideos({keyword});
    const handleNavigate = useCallback(
      (id:string) => {
        navigate(`/video/${id}`)
      },
      [],
    )
    
    if(isLoading){
        <div>Loading...</div>
    }
    if(!videos){
        return (
            <div>검색 된 비디오가 없습니다.</div>
        )
    }
  return (
    <main className={styles.searchPage}>
      <section className={styles.searchSection}>
        {videos.map((item) => (
          <VideoCard
            {...item}
            handleVideoDetail={handleNavigate}
            key={item._id}
          />
        ))}
      </section>
    </main>
  );
}

export default SearchContainer