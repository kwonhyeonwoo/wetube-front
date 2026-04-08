import styles from "./css/index.module.css";
import LikeIcon from "@/assets/video/like.svg";
import ShareIcon from "@/assets/video/share.svg?react";
import UnLikeIcon from "@/assets/video/unlike.svg";
import SaveIcon from "@/assets/video/save.svg?react";
import ActionButton from "../ActionButton/ActionButton";
import VideoContent from "../VideoContent/VideoContent";
const VideoPrimaryInfo = () => {
  return (
    <div className={styles.videoBox}>
        {/* 나중에 진짜 비디오 올라 올 곳 */}
        {/* <video/> */}
        <div className={styles.testVideo}/>
        {/* infobox -> 제목, 프로필,닉네임,공유하기,저장하기 버튼 모음 */}
        <div className={styles.videoInfoBox}>
            <h2 className={styles.videoTitle}>
                미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!
            </h2>
        <div className={styles.flexBox}>
            <div className={styles.authorBox}>
                <div className={styles.authorTestBox}/>
                    <div className={styles.authorNicknameBox}>
                        <p className={styles.nickName}>사악한혀누</p>
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
        <VideoContent content={`sjdklfjdsklfjslk
sjdfklsjfsdjfkldsjflksjfljsflsjfjsfkljslfjsd
slkdfjslfjslfjslkfjslfjs
skldfjslkfjslkfjslfjsdl
ksjdklfjsklfjsdlkfjdslfjsk
sfdslkjfslkjfsljfslf
slfjlsjfdlsjflsfjslkfs
sklfdjslfjskljdfsjkl`} views="1.8만회" date="5개월전" tags={["#운동","#취미","#힙"]}/>
    </div>
  )
}

export default VideoPrimaryInfo