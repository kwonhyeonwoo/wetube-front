import { useState } from "react";
import styles from "./css/index.module.css";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/store/useUserStore";
import VideoOptionMenu from "../VideoOptionMenu/VideoOptionMenu";
interface Props {
  _id: string;
  title: string;
  content: string;
  meta: {
      views: number;
      rating: number;
  };
  ownerId:string;
  profile?: string;
  nickName?: string;
  video?: string;  
  shorts?: string;
  handleVideoDetail: (id: string) => void;
}

const VideoCard = ({
  video,
  shorts, 
  _id,
  meta: {
    views,
    rating,
  },
  ownerId,
  profile,
  content,
  title,
  nickName,
  handleVideoDetail
}:Props) => {
  const navigate = useNavigate();
  const {user:{uid}} = useUserStore();
  const [currVideoId, setCurrVideoId] = useState<string>("");
  const handleCurrVideoId = (id:string)=>{
      setCurrVideoId((prev)=> prev === id ? "" : id);
  };

  const handleListClicked = (type:string)=>{
      if(type === "edit"){
          navigate(`/video/${_id}/edit`)
      }
  }
  const mediaSrc = video || shorts;
  return (
    <div className={styles.videoCardWrapper}>
      <div className={styles.videoBox} onClick={() => handleVideoDetail(_id)}>
        <video
          src={`http://localhost:3000/${mediaSrc}`}
          className={styles.video}
        />
      </div>
      <div className={styles.videoCardWrapperInfo}>
        {profile ? (
          <img
            src={profile}
            alt="user-profile"
            className={styles.videoCardWrapperInfoProfile}
          />
        ) : (
          <div className={styles.undeProfile} />
        )}
        <div className={styles.videoCardWrapperInfoContent}>
          <p className={styles.videoCardWrapperInfoContentText}>{title}</p>
          <div className={styles.videoCardWrapperInfoContentAuthor}>
            <p className={styles.videoCardWrapperInfoAuthorText}>{nickName}</p>
            <p className={styles.videoCardWrapperInfoAuthorText}>
              조회수: {views}회 • 2일 전
            </p>
          </div>
        </div>
        {uid === ownerId && (
          <VideoOptionMenu
            currVideoId={currVideoId}
            videoId={_id}
            handleListClicked={handleListClicked}
            handleCurrVideoId={handleCurrVideoId}
          />
        )}
      </div>
    </div>
  );
}

export default VideoCard;
