import styles from "./css/index.module.css"
import MeatBall from "@/assets/common/meatball.svg?react";
interface Props {
    isMenuOpen:boolean;
    handleMenuOpen:()=>void;
    handleOptionActive:(type:"edit"|"delete")=>void;
}
const VideoOptionMenu = ({
  isMenuOpen,
  handleMenuOpen,
  handleOptionActive,
}: Props) => {
  
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