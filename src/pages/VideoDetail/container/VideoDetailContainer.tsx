import { useLocation } from "react-router-dom";
import styles from "../css/index.module.css";

const VideoDetailContainer = () => {
    const {state} = useLocation();
    console.log('state',state);
  return (
    <main className={styles.videoDetailPage}>
        <section className={styles.videoSection}>
            {/* 나중에 진짜 비디오 올라 올 곳 */}
            {/* <video/> */}
            <div className={styles.testVideo}/>
            {/* infobox -> 제목, 프로필,닉네임,공유하기,저장하기 버튼 모음 */}
            <div className={styles.videoInfoBox}>
                <h2 className={styles.videoTitle}>
                    미국VS이란 전쟁이 발박 시작!!! 미국 공수 920부대 한달이내에 이란에 투입하는가? 이란은 끝까지 협상에 응대하지 않고 유가는 200달러 초과!!!!!
                </h2>
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
                            <img src="" alt="" />
                            <span className={styles.btnText}>12K</span>
                        </button>
                        <button className={styles.actionBtn}>
                            <img src="" alt="" />
                        </button>
                    </div>
                    <div className={styles.actionBtnBox}>
                        <button className={styles.actionBtn}>
                            <img src="" alt="" />
                            <span className={styles.btnText}>공유하기</span>
                        </button>
                    </div>
                    <div className={styles.actionBtnBox}>
                        <button className={styles.actionBtn}>
                            <img src="" alt="" />
                            <span className={styles.btnText}>보관함 저장</span>
                        </button>
                    </div>
                </div>
            </div>

            <div></div>
        </section>
        <section className={styles.videoListSection}>
            12345
        </section>
    </main>
  )
}

export default VideoDetailContainer