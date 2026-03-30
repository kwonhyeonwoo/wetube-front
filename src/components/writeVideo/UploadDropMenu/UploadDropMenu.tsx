import styles from "./css/index.module.css";
import type { UseFormSetValue } from "react-hook-form";
import type { WriteVideoFormType } from "@/schema/writeVideo.schema";
import { getFindCategory } from "@/lib/lib";
import dropDownIcon from "@/assets/common/arrow-down.svg";
import { categoriesConstants } from "@/constants/categoriesConstants";

interface Props {
  currentCategory: string;
  isOpen:boolean;
  handleOpen:()=>void;
  setValue: UseFormSetValue<WriteVideoFormType>;
}
const UploadDropMenu = ({
  currentCategory,
  isOpen,
  handleOpen,
  setValue,
}: Props) => {
  return (
    <div className={styles.uploadDropMenu}>
      <p className={styles.uploadTitle}>카테고리</p>
      <button type="button" className={styles.dropButton} onClick={handleOpen}>
        <span className={styles.dropButtonText}>
          {getFindCategory(currentCategory)}
        </span>
        <img src={dropDownIcon} alt="drop-down" />
      </button>
      <ul className={`${styles.dropLists} ${isOpen && styles.activeDropLists}`}>
        {categoriesConstants.map(
          (item) =>
            item.name !== "all" && (
              <li
                onClick={()=>{
                  setValue("categories", item.name);
                  handleOpen()
                }}
                className={`${styles.dropList} ${isOpen && styles.activeDropList}`}
                key={item.name}
              >
                <button>{getFindCategory(item.name)}</button>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default UploadDropMenu;
