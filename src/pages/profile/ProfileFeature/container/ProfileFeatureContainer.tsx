import BestMedia from "../../components/BestMedia/BestMedia";
import useMediaAction from "../../hooks/useMediaAction";
import styles from "../css/index.module.css";
import MediaTrackContainer from "../../components/MediaTrack/container/MediaTrackContainer";
import { useUserVideosQuery } from "@/hooks/queries/auth/useUserVideosQuery";
import { useParams } from "react-router-dom";
import Empty from "@/components/Empty/Empty";
import { useMediaByViews } from "../../hooks/useMediaByViews";
import { useUserShortsQuery } from "@/hooks/queries/auth/useUserShortsQuery";

const ProfileFeatureContainer = () => {
  const {id} = useParams();
  const { handleMediaAction } = useMediaAction();
  const {data:videos} = useUserVideosQuery(id ?? "")
  const {data:shorts} = useUserShortsQuery(id ?? "");
  const { bestVideosByViews } = useMediaByViews(videos ?? []);
  return (
    <section className={styles.feature}>
      {bestVideosByViews.length > 0 ? (
        <BestMedia video={bestVideosByViews[0]} handleMediaAction={handleMediaAction} />
      ) : (
        <Empty text="업로드 된 영상이 없습니다." />
      )}
      <div className={styles.mediaTrackBox}>
        {videos && shorts && (
          <>
            <MediaTrackContainer videos={videos} type="video" />
            <MediaTrackContainer videos={shorts} type="shorts" />
          </>
        )}
      </div>
    </section>
  );
};

export default ProfileFeatureContainer;