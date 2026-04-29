import { useParams } from "react-router-dom";
import styles from "../css/index.module.css";
import { useGetVideo } from "@/hooks/queries/video/useGetVideo";
import { useGetVideosQuery } from "@/hooks/queries/video/useGetVideoQuery";
import { useGetCmtQuery } from "@/hooks/queries/comment/useGetCmtQuery";
import VideoPrimaryInfoContainer from "../components/VideoPrimaryInfo/container/VideoPrimaryInfoContainer";
import VideoPlayContainer from "../components/VideoPlay/container/VideoPlayContainer";
import VideoComment from "../components/VideoComment/VideoComment";
import CommentCountContainer from "../components/CommentCount/container/CommentCountContainer";
import CommentInputContainer from "../components/CommentInput/container/CommentInputContainer";
import { useState } from "react";
import type { CategoryType } from "@/interfaces/media.type";
import CategoriesContainer from "@/components/common/Categories/container/CategoriesContainer";
import SideVideoCard from "../components/SideVideCard/SideVideoCard";

const VideoDetailContainer = () => {
    const { id } = useParams();
    const [currentCategory, setCurrentCategory] = useState<CategoryType>();
    const { data: video } = useGetVideo(id ?? "");
    const { data: videos } = useGetVideosQuery({ category: currentCategory });
    const { data: comments } = useGetCmtQuery(id ?? "");
    if(!video) return;
    return (
      <main className={styles.videoDetailPage}>
        <section className={styles.videoSection}>
          <VideoPlayContainer video={video.video} paramsId={id} />
          <VideoPrimaryInfoContainer paramsId={id} video={video} />
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
            <CategoriesContainer
              setCurrentCategory={setCurrentCategory}
              currentCategory={currentCategory}
            />
          </div>
          <div className={styles.cateLists}>
            {videos?.map((item) => (
              <SideVideoCard key={item._id} item={item} />
            ))}
          </div>
        </section>
      </main>
    );
}

export default VideoDetailContainer