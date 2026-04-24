import styles from "./css/index.module.css";
import LeftArrowIcon from "@/assets/common/left-arrow.svg?react";
import RightArrowIcon from "@/assets/common/right-arrow.svg?react";

interface Props {
  handleSliderBtn: (type: "left" | "right") => void;
}
const PaginationBtn = ({ handleSliderBtn }: Props) => {
  return (
    <div className={styles.paginationBtnBox}>
      <button
        onClick={() => handleSliderBtn("left")}
        className={styles.paginationBtn}
      >
        <LeftArrowIcon />
      </button>
      <button
        onClick={() => handleSliderBtn("right")}
        className={styles.paginationBtn}
      >
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default PaginationBtn;
