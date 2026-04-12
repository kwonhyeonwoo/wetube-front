import styles from "../css/index.module.css";
import { useCallback, useState} from "react";
import VideoCard from "@/components/video/VideoCard/VideoCard";
import { useGetMyVideos } from "@/hooks/queries/auth/useGetMyVideos";
import { useParams } from "react-router-dom";
import MediaTabs from "@/components/video/MediaTabs/MediaTabs";
import { MY_VIDEOS_TABS } from "@/constants/historyConstants";
import { useGetShorts } from "@/hooks/queries/short/useShortsQuery";
import Short from "@/components/video/Short/Short";

const MyVideosContainer = () => {
  const {id} = useParams();
  const {data:videos} = useGetMyVideos(id ?? "")
  const {data:shorts} = useGetShorts()
  const [tab, setTab] = useState<string>("video");

  const handleTabClicked = useCallback(
    (type:string) => {
        setTab(type)
    },
    [],
  )
  return (
    <main className={styles.myVideosPage}>
      {/* <MyVideoSearch
        register={register}
        handleSortClicked={handleSortClicked}
        currentQuery={currentQuery}
      /> */}
      <div className={styles.tabBox}>
        {MY_VIDEOS_TABS.map((item,idx)=>(
          <MediaTabs
            key={idx}
            text={item.text}
            name={item.type}
            currentTab={tab}
            handleTabClicked={handleTabClicked}
          />
        ))}
      </div>
      <section className={styles.videoSection}>
        {tab === "video" ?  
        <div className={styles.videoBox}>
            {videos?.map((item)=>(
              <VideoCard key={item._id} {...item} handleVideoDetail={()=>{}}/>
            ))}
        </div>: tab === "shorts" ? <div className={styles.shortsBox}>
            {shorts?.map((item)=>(
              <Short 
                key={item._id}
                title={item.title}
                meta={item.meta}
                shorts={item.shorts}
                shortId={item._id}
              />
            ))}
        </div>: null}
      </section>
    </main>
  );
}

export default MyVideosContainer;