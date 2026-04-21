import styles from "./css/index.module.css";
import ShareIcon from "@/assets/video/share.svg?react";
import SaveIcon from "@/assets/video/save.svg?react";
import ActionButton from "../ActionButton/ActionButton";
import VideoContent from "../VideoContent/VideoContent";
import MeatBallIcon from "@/assets/common/meatball.svg?react";
import type { VideoResponse } from "@/interfaces/media.type";
import VideoAuthorProfile from "../VideoAuthorProfile/VideoAuthorProfile";
import VideoLikeBtn from "../VideoLikeBtn/VideoLikeBtn";
import VideoPlayContainer from "../VideoPlay/container/VideoPlayContainer";
import { useToastStore } from "@/store/useToastStore";
import usePostVideoSave from "@/hooks/queries/video/usePostVideoSave";
import { useCallback } from "react";

interface Props{
    video:VideoResponse;
    paramsId:string | undefined;
}

const VideoPrimaryInfo = ({ video, paramsId }: Props) => {
  const { mutate } = usePostVideoSave(paramsId ?? "");
  const { addToast } = useToastStore();
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    addToast("주소가 복사되었습니다!");
  };
  const handleVideoSave = useCallback(
    () => {
      if(paramsId){
        mutate(paramsId);
      }
    },
    [mutate],
  )
  const isActive =
    video.owner.saveVideos?.some((item) => item._id === paramsId) || false;
  return (
    <div className={styles.videoBox}>
      <VideoPlayContainer video={video.video} paramsId={paramsId} />
      {/* infobox -> 제목, 프로필,닉네임,공유하기,저장하기 버튼 모음 */}
      <div className={styles.videoInfoBox}>
        <h2 className={styles.videoTitle}>{video.title}</h2>
        <div className={styles.flexBox}>
          <VideoAuthorProfile nickName={video.owner.nickName} />
          <div className={styles.videoActions}>
            <VideoLikeBtn likes={video.likes ?? []} />
            <ActionButton
              Icon={ShareIcon}
              text="공유하기"
              handleActive={handleCopyUrl}
            />
            <ActionButton
              Icon={SaveIcon}
              text="보관함 저장"
              isActive={isActive}
              handleActive={handleVideoSave}
            />
            <ActionButton
              Icon={MeatBallIcon}
              text=""
              handleActive={()=>{}}
            />
          </div>
        </div>
      </div>
      <VideoContent
        content={video.content}
        views={video.meta.views}
        date="5개월전"
        tags={video.hashtags}
      />
    </div>
  );
};

export default VideoPrimaryInfo