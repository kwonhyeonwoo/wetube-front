import useDeleteVideo from "@/hooks/queries/video/useDeleteVideo";
import styles from "./css/index.module.css"
import MeatBall from "@/assets/common/meatball.svg?react";
import { useNavigate } from "react-router-dom";
interface Props {
  currVideoId: string;
  videoId: string;
  handleCurrVideoId: (videoId: string) => void;
}
const VideoOptionMenu = ({
  currVideoId,
  videoId,
  handleCurrVideoId,
}: Props) => {
  const navigate = useNavigate();
  const {mutate} = useDeleteVideo(videoId);
  const handleAction = (type:"edit" | "delete")=>{
    if(type ==='edit'){
      navigate(`/video/${videoId}/edit`)
    }else{
      mutate(videoId)
    }
  }
  return (
    <div className={styles.meatballBox}>
      <MeatBall onClick={() => handleCurrVideoId(videoId)} />
      {currVideoId === videoId && (
        <div className={styles.meatBallMenu}>
          <ul className={styles.meatBallUl}>
            {meatBallList.map(({ text, type }, idx) => (
              <li
                key={idx}
                className={styles.meatBallLi}
                onClick={() => handleAction(type)}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VideoOptionMenu;
const meatBallList :{text:string; type:"edit" | "delete"}[]= [
  {
    text: "수정하기",
    type: "edit",
  },
  {
    text: "삭제하기",
    type: "delete",
  },
];