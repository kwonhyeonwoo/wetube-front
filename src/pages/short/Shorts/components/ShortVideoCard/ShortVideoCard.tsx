import type { ShortsResponse } from "@/interfaces/media.type";
import styles from "./css/index.module.css";
import EmptyProfile from "@/assets/common/unde-user.svg";
interface Props extends ShortsResponse {
  handleFollowAction: () => void;
}

const ShortVideoCard = ({
  shorts,
  owner,
  hashtags,
  handleFollowAction,
}: Props) => {
  return (
    <div className={styles.shortVideoCard}>
      <video
        src={`${import.meta.env.VITE_APP_BASE_SRC}/${shorts}`}
        className={styles.shortVideo}
      />

      {/* 💡 추가: 텍스트 가독성을 높여주는 그라데이션 막 */}
      <div className={styles.overlay}></div>

      <div className={styles.authorWrapper}>
        <div className={styles.authorProfile}>
          <img
            src={
              owner.avatar
                ? `${import.meta.env.VITE_APP_BASE_SRC}/${owner.avatar}`
                : EmptyProfile
            }
            alt="profile-image"
            className={styles.profile}
          />
          <div className={styles.authorInfo}>
            <p className={styles.nickName}>{owner.nickName}</p>
            {/* 팔로우 버튼 디자인도 살짝 수정했습니다 */}
            <button className={styles.followBtn}>팔로우</button>
          </div>
        </div>

        <div className={styles.descBox}>
          <p className={styles.shortTitle}>쇼츠 제목이 여기에 들어갑니다.</p>
          <div className={styles.shortHashtags}>
            {hashtags.map((item) => (
              <span key={item} className={styles.hashtag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortVideoCard;
