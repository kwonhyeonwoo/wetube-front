import styles from "./css/index.module.css";
import ShareIcon from "@/assets/video/share.svg?react";
import SaveIcon from "@/assets/video/save.svg?react";
import ActionButton from "../ActionButton/ActionButton";
import VideoContent from "../VideoContent/VideoContent";
import MeatBallIcon from "@/assets/common/meatball.svg?react";
import type { VideoResponse } from "@/interfaces/media.type";
import VideoAuthorProfile from "../VideoAuthorProfile/VideoAuthorProfile";
import VideoLikeBtn from "../VideoLikeBtn/VideoLikeBtn";
import { useRef,useState } from "react";

interface Props{
    video:VideoResponse;
    handleCopyUrl:()=>void
}

const VideoPrimaryInfo = ({video,handleCopyUrl}:Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayer = ()=>{
    setIsPlaying(!isPlaying)
      if(!isPlaying){
        videoRef.current?.play()
      }else{
        videoRef.current?.pause();
      }
  }
  return (
    <div className={styles.videoBox}>
      <div className={styles.videoWrap}>
        <video
          ref={videoRef}
          className={styles.video}
          src={`${import.meta.env.VITE_APP_BASE_SRC}/${video.video}`}
        />
        <button onClick={handlePlayer}>Play</button>
      </div>
      {/* infobox -> 제목, 프로필,닉네임,공유하기,저장하기 버튼 모음 */}
      <div className={styles.videoInfoBox}>
        <h2 className={styles.videoTitle}>{video.title}</h2>
        <div className={styles.flexBox}>
          <VideoAuthorProfile nickName={video.owner.nickName}/>
          <div className={styles.videoActions}>
            <VideoLikeBtn likes={video.likes ?? []}/>
            <ActionButton
              Icon={ShareIcon}
              text="공유하기"
              handleActive={handleCopyUrl}
            />
            <ActionButton
              Icon={SaveIcon}
              text="보관함 저장"
              handleActive={() => {}}
            />
            <ActionButton
              Icon={MeatBallIcon}
              text=""
              handleActive={() => {}}
            />
          </div>
        </div>
      </div>
      <VideoContent
        content={video.content}
        views="1.8만회"
        date="5개월전"
        tags={["#운동", "#취미", "#힙"]}
      />
    </div>
  );
}

export default VideoPrimaryInfo