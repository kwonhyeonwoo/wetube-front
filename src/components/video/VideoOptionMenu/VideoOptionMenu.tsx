import styles from "./css/index.module.css"
import MeatBall from "@/assets/common/meatball.svg?react";
interface Props {
  currVideoId: string;
  videoId: string;
  handleListClicked:(type:string)=>void;
  handleCurrVideoId: (videoId: string) => void;
}
const VideoOptionMenu = ({
  currVideoId,
  videoId,
  handleListClicked,
  handleCurrVideoId,
}: Props) => {
  return (
    <div className={styles.meatballBox}>
      <MeatBall onClick={() => handleCurrVideoId(videoId)} />
      {currVideoId === videoId && (
        <div className={styles.meatBallMenu}>
          <ul className={styles.meatBallUl}>
            {meatBallList.map(({ text, type },idx) => (
              <li
                key={idx}
                className={styles.meatBallLi}
                onClick={() => handleListClicked(type)}
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
const meatBallList = [
  {
    text: "수정하기",
    type: "edit",
  },
  {
    text: "삭제하기",
    type: "delete",
  },
];