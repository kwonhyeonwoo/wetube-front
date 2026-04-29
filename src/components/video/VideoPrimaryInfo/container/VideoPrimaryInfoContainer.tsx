import styles from "../css/index.module.css";
import type { VideoResponse } from '@/interfaces/media.type'
import { useToastStore } from '@/store/useToastStore';
import VideoPlayContainer from "../../VideoPlay/container/VideoPlayContainer";
import VideoAuthorProfile from "../../VideoAuthorProfile/VideoAuthorProfile";
import VideoLikeBtn from "../../VideoLikeBtn/VideoLikeBtn";
import ActionButton from "../../ActionButton/ActionButton";
import ShareIcon from "@/assets/video/share.svg?react";
import SaveIcon from "@/assets/video/save.svg?react";
import VideoContent from "../../VideoContent/VideoContent";
import { getRelativeTime } from "@/lib/lib";
import { useVideoSave } from "@/pages/video/hooks/useVideoSave";
import { useUidStore } from "@/store/useUserStore";
import { useFollow } from "@/pages/video/hooks/useFollow";
import { useVideoLike } from "@/pages/video/hooks/useVideoLike";
import VideoOptionMenuContainer from "../../VideoOptionMenu/container/VideoOptionMenuContainer";

interface Props{
    video:VideoResponse;
    paramsId:string | undefined;
}

const VideoPrimaryInfoContainer = ({
    video,
    paramsId,
}:Props) => {
    const uid = useUidStore();
    const { handleVideoSave } = useVideoSave(paramsId ?? "");
    const {handleFollow}  = useFollow({videoId:paramsId ?? "",ownerId:video.owner._id});
    const {handleVideoLike} = useVideoLike({userId:uid, videoId:paramsId ?? ""})
    const { addToast } = useToastStore();
    const handleCopyUrl = () => {
      navigator.clipboard.writeText(window.location.href);
      addToast("주소가 복사되었습니다!");
    };
    const isFollower = video.owner.followers.includes(uid);
    const isLike = video.likes?.includes(uid)
  return (
    <div className={styles.videoBox}>
      <VideoPlayContainer video={video.video} paramsId={paramsId} />
      {/* infobox -> 제목, 프로필,닉네임,공유하기,저장하기 버튼 모음 */}
      <div className={styles.videoInfoBox}>
        <h2 className={styles.videoTitle}>{video.title}</h2>
        <div className={styles.flexBox}>
          <VideoAuthorProfile
            uid={uid}
            isFollower={isFollower}
            videoId={video._id}
            ownerId={video.owner._id}
            followersLength={video.owner.followers.length}
            nickName={video.owner.nickName}
            avatar={video.owner.avatar}
            handleFollow={handleFollow}
          />
          <div className={styles.videoActions}>
            <VideoLikeBtn
              likeCount={video?.likes?.length}
              isLike={isLike}
              handleVideoLike={handleVideoLike}
            />
            <ActionButton
              Icon={ShareIcon}
              text="공유하기"
              handleActive={handleCopyUrl}
            />
            <ActionButton
              Icon={SaveIcon}
              text="보관함 저장"
              isActive={video.isSaved}
              handleActive={handleVideoSave}
            />
            <VideoOptionMenuContainer videoId={paramsId ?? ""}/>
          </div>
        </div>
      </div>
      <VideoContent
        content={video.content}
        views={video.meta.views}
        date={getRelativeTime(video.createdAt)}
        tags={video.hashtags}
      />
    </div>
  );
}

export default VideoPrimaryInfoContainer