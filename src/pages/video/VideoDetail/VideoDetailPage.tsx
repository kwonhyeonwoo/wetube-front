import styles from "./css/index.module.css";
import VideoPrimaryInfo from "@/components/video/VideoPrimaryInfo/VideoPrimaryInfo";
import {useParams } from "react-router-dom";
import VideoComment from "@/pages/VideoComment/VideoComment";
import CommentCount from "@/components/video/CommentCount/CommentCount";
import CommentInput from "@/components/video/CommentInput/CommentInput";
import { useGetVideo } from "@/hooks/queries/video/useGetVideo";
import { useGetVideosQuery } from "@/hooks/queries/video/useGetVideoQuery";
import StorageList from "@/components/video/StorageList/StorageList";
import Categories from "@/components/common/Categories/Categories";
import { useGetComment } from "@/hooks/queries/comment/useGetComment";

const VideoDetailPage = () => {
  const {id} = useParams();
  const {data:video} = useGetVideo(id ?? "");
  const {data:videos} = useGetVideosQuery({category:undefined});
  const {data:comments} = useGetComment(id ?? "")
  return (
    <main className={styles.videoDetailPage}>
      <section className={styles.videoSection}>
        {video && <VideoPrimaryInfo paramsId={id} video={video} />}
        <CommentCount length={String(comments?.length)} />
        <CommentInput videoId ={id}/>
        <div className={styles.comments}>
          {comments?.map((item) => (
              <VideoComment key={item._id} {...item}/>
          ))}
        </div>
      </section>
      <section className={styles.videoListSection}>
        <div className={styles.cateBox}>
          <Categories
            currentCategory={undefined}
            handleCategoryActive={() => {}}
          />
        </div>
        <div className={styles.cateLists}>
          {videos?.map((item, idx) => (
            <StorageList item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default VideoDetailPage;