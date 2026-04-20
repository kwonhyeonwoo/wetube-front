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
import VideoPlayContainer from "../VideoPlay/container/VideoPlayContainer";

interface Props{
    video:VideoResponse;
    handleCopyUrl:()=>void
}

const VideoPrimaryInfo = ({video,handleCopyUrl}:Props) => {
  return (
    <div className={styles.videoBox}>
     <VideoPlayContainer video={video.video}/>
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
        tags={video.hashtags}
      />
    </div>
  );
}

export default VideoPrimaryInfo