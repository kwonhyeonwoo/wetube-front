import styles from "../css/index.module.css";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Short from "@/components/video/Short/Short";
import { useGetShorts } from "@/hooks/queries/short/useShortsQuery";
import { useGetVideosQuery } from "@/hooks/queries/video/useGetVideoQuery";
import Categories from "@/components/common/Categories/container/CategoriesContainer";
import type { CategoryType } from "@/interfaces/media.type";
import VideoCard from "@/pages/video/components/VideoCard/VideoCard";

const HomeContainer = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState<CategoryType>();
  const { data: videos } = useGetVideosQuery({ category: currentCategory });
  const { data: shorts } = useGetShorts();
  const handleVideoDetail = useCallback(
    (id: string) => {
      navigate(`/video/${id}`);
    },
    [navigate],
  );
  console.log("videos", videos);
  const firstVideos = videos?.slice(0, 12) || [];
  const remainingVideos = videos?.slice(12) || [];
  return (
    <main className={styles.homePage}>
      <Categories
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      {firstVideos.length > 0 && (
        <section className={styles.videoSection}>
          {firstVideos.map((item) => (
            <VideoCard
              key={item._id}
              {...item}
              avatar={item.owner.avatar}
              nickName={item.owner.nickName}
              ownerId={item.owner._id}
              handleVideoDetail={handleVideoDetail}
            />
          ))}
        </section>
      )}
      {shorts && shorts.length > 0 && (
        <section className={styles.shortSection}>
          <div className={styles.shortTitleBox}>
            <img
              src="/assets/short/short.png"
              srcSet="/assets/short/short@2x.png 2x, /assets/short/short@3x.png 3x"
              alt="short"
            />
            <h2 className={styles.shortTitle}>Shorts</h2>
          </div>
          <div className={styles.shortLists}>
            {shorts.map((item) => (
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
      )}
      {remainingVideos.length > 0 && (
        <section className={styles.videoSection}>
          {remainingVideos.map((item) => (
            <VideoCard
              key={item._id}
              {...item}
              avatar={item.owner.avatar}
              nickName={item.owner.nickName}
              ownerId={item.owner._id}
              handleVideoDetail={handleVideoDetail}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default HomeContainer;
