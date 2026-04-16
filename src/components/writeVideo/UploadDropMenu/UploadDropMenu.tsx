import styles from "./css/index.module.css";
import type { FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { getFindCategory } from "@/lib/lib";
import dropDownIcon from "@/assets/common/arrow-down.svg";
import { categoriesConstants } from "@/constants/categoriesConstants";
import { useCallback, useState } from "react";

interface Props <T extends FieldValues>{
  currentCategory: string;
  setValue: UseFormSetValue<T>;
}
const UploadDropMenu =  <T extends FieldValues>({
  currentCategory,
  setValue,
}: Props<T>) => {
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
        {categoriesConstants.map((item) => {
          const category = item.name;
          if (category === undefined) return null;

          return (
            <li
              onClick={() => {
                setValue(
                  "categories" as Path<T>,
                  category as PathValue<T, Path<T>>,
                );
                handleOpen();
              }}
              className={`${styles.dropList} ${isOpen && styles.activeDropList}`}
              key={category}
            >
              <button type="button">{getFindCategory(category)}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UploadDropMenu;
