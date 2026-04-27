import { useUidStore } from "@/store/useUserStore";
import styles from "./css/index.module.css";
import type {  UserResponse } from "@/interfaces/auth.type";

interface Props {
  userId: string;
  user: UserResponse | undefined;
  handleProfileAction: (type: "edit" | "following",uid?:string) => void;
}

const ProfileSection = ({user,userId,handleProfileAction}:Props) => {
  const uid = useUidStore();
  return (
    <section className={styles.profileSection}>
      {user?.avatar ? (
        <img 
          className={styles.profile} 
          src={`${import.meta.env.VITE_APP_BASE_SRC}/${user.avatar}`} 
          alt={`${user.nickName}-proifle`} />
      ) : (
        <div className={styles.undeProfile} />
      )}

      <div className={styles.userInfoBox}>
        <div className={styles.userNameBox}>
          <p className={styles.userName}>{user?.name}</p>
        </div>
        {/* 닉네임, 팔로우수, 동영상 겟수 */}
        <div className={styles.userStats}>
            <span className={styles.statsText}>@{user?.nickName}</span>
            <span className={styles.statsText}>팔로워: {user?.followers.length}</span>
            <span className={styles.statsText}>동영상: {user?.videos.length}</span>
        </div>
        {/* 소개 */}
        <div className={styles.userIntroduction}>
          <span className={styles.introductionText}>{user?.introduction ? user.introduction : "소개를 작성하지 않았습니다."}</span>
        </div>
        <div className={styles.followingBtnBox}>
          <button onClick={()=>{
            userId === uid?  handleProfileAction("edit") : handleProfileAction("following",userId)
          }} className={styles.followingBtn}>
            {userId === uid ? "프로필 수정" : "팔로우"}
          </button>
        </div>
      </div>
      
    </section>
  );
}

export default ProfileSection