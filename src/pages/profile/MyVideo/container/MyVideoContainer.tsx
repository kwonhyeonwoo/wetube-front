import { useUserVideosQuery } from "@/hooks/queries/auth/useUserVideosQuery";
import ProfileVideoCard from "../../components/ProfileVideoCard/ProfileVideoCard";
import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import Empty from "@/components/Empty/Empty";


const MyVideoContainer = () => {
  const {id} = useParams();
  const {data:videos} = useUserVideosQuery(id ?? "");
  return (
    <section className={styles.myVideoSection}>
      {videos && videos.length >0 ? (
        <div className={styles.videosBox}>
        {videos?.map((item,idx)=>(
          <ProfileVideoCard
            key={idx}
            video={item.video}
            title={item.title}
            meta={item.meta}
            createdAt={item.createdAt}
            height="171px"
          />
        ))}
      </div>
      ):<Empty text="업로드 된 영상이 없습니다"/>}
    </section>
  )
}

export default MyVideoContainer;