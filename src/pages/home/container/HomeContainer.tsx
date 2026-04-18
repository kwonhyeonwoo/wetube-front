import styles from "../css/index.module.css";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "@/components/video/VideoCard/VideoCard";
import Short from "@/components/video/Short/Short";
import { useGetShorts } from "@/hooks/queries/short/useShortsQuery";
import { useGetVideosQuery } from "@/hooks/queries/video/useGetVideoQuery";
import Categories from "@/components/common/Categories/Categories";
import type { CategoryType } from "@/interfaces/media.type";

const HomeContainer = () => {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState<CategoryType>();
  const { data: videos } = useGetVideosQuery({category:currentCategory});
  const {data:shorts} = useGetShorts();
  const handleVideoDetail = useCallback(
    (id:string) => {
      navigate(`/video/${id}`)
    },
    [navigate],
  );
  const handleCategoryActive = useCallback(
    (name: CategoryType) => {
      setCurrentCategory(name);
    },
    [currentCategory],
  );
  
  return (
    <main className={styles.homePage}>
      <Categories
        currentCategory={currentCategory}
        handleCategoryActive={handleCategoryActive}
      />
      <section className={styles.videoSection}>
        {videos?.map((item) => (
          <VideoCard
            key={item._id}
            {...item}
            ownerId={item.owner._id}
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
          {shorts?.map((item) => (
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
    </main>
  );
}

export default HomeContainer;
