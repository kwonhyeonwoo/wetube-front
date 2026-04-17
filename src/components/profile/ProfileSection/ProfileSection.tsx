import { Link } from "react-router-dom";
import styles from "./css/index.module.css";
import type {  UserResponse } from "@/interfaces/auth.type";

interface Props {
  user: UserResponse | undefined;
}

const ProfileSection = ({user}:Props) => {
    const channelStats=[
        {
            key:"구독자",
            value:"100"
        },
        {
            key:"동영상",
            value:"100"
        }
    ]
  return (
    <section className={styles.profileSection}>
      {user?.avatar ? (
        <img src={user.avatar} alt={`${user.nickName}-proifle`} />
      ) : (
        <div className={styles.profileSectionImage} />
      )}

      <div className={styles.userInfoBox}>
        <div className={styles.userNameBox}>
          <p className={styles.userName}>{user?.name}</p>
          <Link to={`/user/${user?._id}/edit`} className={styles.button}>
            프로필 수정
          </Link>
        </div>
        <p className={styles.userContent}>
          {user?.introduction ? user.introduction : "자기소개를 작성해주세요."}
        </p>
        <div className={styles.channelStats}>
          {channelStats.map((item, idx) => (
            <div className={styles.channelStateBox} key={idx}>
              <p className={styles.channelStateBoxKey}>{item.key}</p>
              <p className={styles.channelStateBoxValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.profileButtonBox}></div>
    </section>
  );
}

export default ProfileSection