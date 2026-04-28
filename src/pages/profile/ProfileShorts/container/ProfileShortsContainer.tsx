import ProfileVideoCard from "../../components/ProfileVideoCard/ProfileVideoCard";
import styles from "../css/index.module.css";
import { useParams } from "react-router-dom";
import Empty from "@/components/Empty/Empty";
import { useUserShortsQuery } from "@/hooks/queries/auth/useUserShortsQuery";

const ProfileShortsContainer = () => {
  const {id} = useParams();
  const {data:shorts} = useUserShortsQuery(id ?? "")
  return (
    <section className={styles.profileShortsSection}>
      {shorts &&
        shorts.length > 0 ? (
            <div className={styles.videos}>
              {shorts.map((item, idx) => (
                <ProfileVideoCard
                  key={idx}
                  video={item.shorts}
                  title={item.title}
                  meta={item.meta}
                  createdAt={item.createdAt}
                  height="314px"
                />
              ))}
            </div>
          ):<Empty text='업로드 된 쇼츠가 없습니다'/>}
    </section>
  );
}

export default ProfileShortsContainer;