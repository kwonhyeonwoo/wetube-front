import styles from "../css/index.module.css";
import MyVideoSearch from "@/components/MyVideoSearch/MyVideoSearch";
import { useCallback} from "react";
import { useForm } from "react-hook-form";
import VideoCard from "@/components/video/VideoCard/VideoCard";
import { useGetMyVideos } from "@/hooks/queries/auth/useGetMyVideos";
import { useParams } from "react-router-dom";

const MyVideosContainer = () => {
  const {id} = useParams();
  const {data:videos} = useGetMyVideos(id ?? "")
  const { register, setValue, watch } = useForm<{
    value: string;
    query: string;
  }>({
    defaultValues: {
      query: "latest",
    },
  });
  const currentQuery = watch("query");
  const handleSortClicked = useCallback(
    (query:string) => {
      setValue('query',query)
    },
    [],
  );
  return (
    <main className={styles.myVideosPage}>
      <MyVideoSearch
        register={register}
        handleSortClicked={handleSortClicked}
        currentQuery={currentQuery}
      />
      <section className={styles.videoSection}>
      {videos && videos.length < 0 ? (
        <div className={styles.undeVideos}>
          <p className={styles.undeVideoText}>검색 된 비디오가 없습니다.</p>
        </div>
      ) : (
        <div className={styles.videoBox}>
            {videos?.map((item)=>(
              <VideoCard key={item._id} {...item} handleVideoDetail={()=>{}}/>
            ))}
        </div>

      )}
      </section>
    </main>
  );
}

export default MyVideosContainer;