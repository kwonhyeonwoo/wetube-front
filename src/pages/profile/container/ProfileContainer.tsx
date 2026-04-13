import ProfileSection from "@/components/profile/ProfileSection/ProfileSection";
import styles from "../css/index.module.css";
import { useNavigate, useParams } from "react-router-dom";
import VideosSection from "@/components/profile/VideosSection/VideosSection";
import { useGetUser} from "@/hooks/queries/auth/useAuthQuery";

const ProfileContainer = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data:user} = useGetUser(id ?? "")
  const handleVideoDetail = (id:string)=>{
    return navigate(`/video/${id}`)
  }
  return (
    <main className={styles.profilePage}>
      <ProfileSection user={user} />
      <VideosSection
        text="내 동영상"
        userId={id}
        videos={user?.videos}
        handleVideoDetail={handleVideoDetail}
      />
      <VideosSection
        text="내 쇼츠"
        userId={id}
        videos={user?.shorts }
        handleVideoDetail={handleVideoDetail}
      />
      <VideosSection
        text="좋아요 표시한 동영상"
        userId={id}
        videos={user?.videos}
        handleVideoDetail={handleVideoDetail}
      />
    </main>
  );
}

export default ProfileContainer;