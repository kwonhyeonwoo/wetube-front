import styles from "./css/index.module.css";
import {useParams } from "react-router-dom";
import VideoComment from "@/pages/VideoComment/VideoComment";
import { useGetVideo } from "@/hooks/queries/video/useGetVideo";
import { useGetVideosQuery } from "@/hooks/queries/video/useGetVideoQuery";
import StorageList from "@/components/video/StorageList/StorageList";
import Categories from "@/components/common/Categories/Categories";
import { useGetCmtQuery } from "@/hooks/queries/comment/useGetCmtQuery";
import CommentInputContainer from "@/components/video/CommentInput/container/CommentInputContainer";
import VideoPrimaryInfoContainer from "@/components/video/VideoPrimaryInfo/container/VideoPrimaryInfoContainer";
import CommentCountContainer from "@/components/video/CommentCount/container/CommentCountContainer";

const VideoDetailPage = () => {
  const {id} = useParams();
  const {data:video} = useGetVideo(id ?? "");
  const {data:videos} = useGetVideosQuery({category:undefined});
  const { data: comments } = useGetCmtQuery(id ?? "");
  return (
    <main className={styles.videoDetailPage}>
      <section className={styles.videoSection}>
        {video && <VideoPrimaryInfoContainer paramsId={id} video={video} />}
        <CommentCountContainer cmtCount={comments?.length} />
        <CommentInputContainer videoId={id} />
        <div className={styles.comments}>
          {comments?.map((item) => (
            <VideoComment key={item._id} {...item} />
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
          {videos?.map((item) => (
            <StorageList key={item._id}  item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default VideoDetailPage;