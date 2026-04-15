import styles from "./css/index.module.css";
import type { UseFormSetValue } from "react-hook-form";
import { getFindCategory } from "@/lib/lib";
import dropDownIcon from "@/assets/common/arrow-down.svg";
import { categoriesConstants } from "@/constants/categoriesConstants";
import { useCallback, useState } from "react";
import type { VideoType } from "@/schema/media.schema";

interface Props {
  currentCategory: string;
  setValue: UseFormSetValue<VideoType>;
}
const UploadDropMenu = ({
  currentCategory,
  setValue,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = useCallback(
      () => {
       setIsOpen((prev)=>!prev); 
      },
      [],
    )
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
            item.name !== undefined && (
              <li
                onClick={()=>{
                  setValue("categories", item.name);
                  handleOpen()
                }}
                className={`${styles.dropList} ${isOpen && styles.activeDropList}`}
                key={item.name}
              >
                <button type="button">{getFindCategory(item.name)}</button>
              </li>
            ),
        )}
      </ul>
    </div>
  );
};

export default UploadDropMenu;
