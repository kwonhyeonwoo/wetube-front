import styles from "./css/index.module.css";
import LikeIcon from "@/assets/video/like.svg?react";
import { useVideoLikePostMutation } from "@/hooks/queries/video/useVideoMutation";
import { useUidStore } from "@/store/useUserStore";
import { useParams } from "react-router-dom";

interface Props{
    likes:string[];
}

const VideoLikeBtn = ({likes}:Props) => {
  const {id} = useParams();
  const uid = useUidStore();
  const {mutate} = useVideoLikePostMutation({userId:uid,videoId:id ?? ""});
  const handleLikeClicked = ()=>{
      if(id){
        mutate(id);
      }
  }
  const isLike = likes.includes(uid);
  return (
    <div className={styles.actionBtnBox}>
      <button className={styles.actionBtn} onClick={handleLikeClicked}>
      <LikeIcon 
        style={{ 
          color: isLike ? "#EB0000": "black", // 좋아요 상태에 따라 색상 변경
        }} 
        />
        <span className={styles.btnText}>{likes.length}개</span>
      </button>
    </div>
  );
}

export default VideoLikeBtn