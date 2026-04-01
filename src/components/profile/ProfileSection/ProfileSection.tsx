import styles from "./css/index.module.css";

const ProfileSection = () => {
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
        {/* <img src="" alt="" /> */}
        <div className={styles.profileSectionImage}></div>
        <div className={styles.userInfoBox}>
            <p className={styles.userName}>김태현</p>
            <p className={styles.userContent}>{`서울에서 활동하는 디지털 프로덕트 디자이너이자 미니멀
리즘 라이프스타일 크리에이터입니다.`}</p>
            <div className={styles.channelStats}>
                {channelStats.map((item,idx)=>(
                    <div className={styles.channelStateBox} key={idx}>
                        <p className={styles.channelStateBoxKey}>{item.key}</p>
                        <p className={styles.channelStateBoxValue}>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className={styles.profileButtonBox}>
            <button className={styles.button}>프로필 수정</button>
        </div>
    </section>
  )
}

export default ProfileSection