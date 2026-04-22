import ProfileSection from "@/components/profile/ProfileSection/ProfileSection";
import styles from "./css/index.module.css";
import { useNavigate, useParams } from "react-router-dom";
import VideosSection from "@/components/profile/VideosSection/VideosSection";
import { useGetUser} from "@/hooks/queries/auth/useAuthQuery";
import { useCallback } from "react";
import usePostFollow from "@/hooks/queries/auth/usePostFollow";

const ProfilePage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data:user} = useGetUser(id ?? "")
  const {mutate} = usePostFollow(id);
  const handleProfileActions = useCallback(
    (type:string) => {
        if(type === "edit"){
            return navigate(`/user/${id}/edit`)
        }else{
            mutate(id ?? "")
        }
    },
    [],
  )
  
  const handleVideoDetail = (id:string)=>{
    return navigate(`/video/${id}`)
  }
  return (
    <main className={styles.profilePage}>
      <ProfileSection 
            user={user} 
            userId={id ?? ""} 
            handleProfileActions={handleProfileActions}
        />
      <VideosSection
        text="내 동영상"
        userId={id}
        videos={user?.videos}
        nickName={user?.nickName}
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

export default ProfilePage;