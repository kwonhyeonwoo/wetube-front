import styles from "./css/index.module.css";
import LikeIcon from "@/assets/video/like.svg";
import ShareIcon from "@/assets/video/share.svg?react";
import UnLikeIcon from "@/assets/video/unlike.svg";
import SaveIcon from "@/assets/video/save.svg?react";
import ActionButton from "../ActionButton/ActionButton";
import VideoContent from "../VideoContent/VideoContent";
import type { VideoResponse } from "@/interfaces/video.type";

interface Props{
    video:VideoResponse;
}

const VideoPrimaryInfo = ({video}:Props) => {
  return (
    <div className={styles.videoBox}>
        <div className={styles.videoWrap}>
            <video 
                className={styles.video}
                src={`http://localhost:3000/${video.video}`}
                controls
            />
        </div>
        {/* infobox -> 제목, 프로필,닉네임,공유하기,저장하기 버튼 모음 */}
        <div className={styles.videoInfoBox}>
            <h2 className={styles.videoTitle}>
                {video.title}
            </h2>
        <div className={styles.flexBox}>
            <div className={styles.authorBox}>
                <div className={styles.authorTestBox}/>
                    <div className={styles.authorNicknameBox}>
                        <p className={styles.nickName}>{video.owner.nickName}</p>
                        <p className={styles.subscribeCount}>구독자2.13명</p>
                    </div>
                    <button className={styles.subscribeBtn}>구독</button>
                </div>
                <div className={styles.videoActions}>
                    <div className={styles.actionBtnBox}>
                        <button className={styles.actionBtn}>
                            <img src={LikeIcon} alt="like" />
                            <span className={styles.btnText}>12K</span>
                        </button>
                        <button className={styles.actionBtn}>
                            <img src={UnLikeIcon} alt="un-like" />
                        </button>
                    </div>
                    <ActionButton Icon={ShareIcon} text="공유하기" handleActive={()=>{}}/>
                    <ActionButton Icon={SaveIcon} text="보관함 저장" handleActive={()=>{}}/>
                </div>
            </div>
        </div>
        <VideoContent content={video.content} views="1.8만회" date="5개월전" tags={["#운동","#취미","#힙"]}/>
    </div>
  )
}

export default VideoPrimaryInfo