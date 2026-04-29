import styles from "../css/index.module.css";
import { useCallback, useState } from "react"
import MeatBall from "@/assets/common/meatball.svg?react";
import { useNavigate } from "react-router-dom";
import useDeleteVideoMutation from "@/hooks/mutations/video/useDeleteVideoMutation";

interface Props{
  videoId:string;
}

const VideoOptionMenuContainer = ({videoId}:Props) => {
  const navigate = useNavigate();
  const {mutate}= useDeleteVideoMutation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); 
  const handleMenuOpen = useCallback(
    () => {
      setIsMenuOpen((prev)=>!prev);
    },
    [],
  );
  const handleOptionActive = useCallback(
    (type:"edit" | "delete") => {
      if(type === 'edit'){
        return navigate(`/video/${videoId}/edit`);
      }else{
        setIsMenuOpen(false);
        mutate(videoId)
      }
    },
    [],
  )
  return (
    <div className={styles.meatballBox}>
      <MeatBall onClick={handleMenuOpen} />
      {isMenuOpen && (
        <div className={styles.meatBallMenu}>
          <ul className={styles.meatBallUl}>
            {meatBallList.map(({ text, type }, idx) => (
              <li
                key={idx}
                className={styles.meatBallLi}
                onClick={() => handleOptionActive(type)}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default VideoOptionMenuContainer;

const meatBallList: { text: string; type: "edit" | "delete" }[] = [
  {
    text: "수정하기",
    type: "edit",
  },
  {
    text: "삭제하기",
    type: "delete",
  },
];